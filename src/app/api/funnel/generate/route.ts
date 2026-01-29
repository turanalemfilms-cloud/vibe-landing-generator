import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { BrandTokensSchema, FreeformHtmlSchema, LandingContentSchema, SiteBriefSchema, SiteConfigSchema, SiteLayoutSchema, defaultLayoutForContent, tokensForStyle, StyleKey } from '@/lib/siteConfig'
import { SiteManifestSchema, HeroContentSchema, SocialProofSchema, FeaturesContentSchema, PricingContentSchema, TestimonialsContentSchema, FAQContentSchema, FooterContentSchema } from '@/lib/siteManifest'
import { parseBriefToManifest, getAIDAPrompt, generateDefaultSections } from '@/lib/chatToManifest'
import { styleKeyToTheme } from '@/lib/styleProcessor'
import { supabaseService } from '@/lib/supabase'

export const runtime = 'nodejs'

// Basic HTML sanitization (remove dangerous tags/attributes)
function sanitizeHtml(html: string): string {
  // Remove script tags and event handlers
  let sanitized = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/<iframe/gi, '<iframe sandbox="allow-same-origin allow-scripts"')
  return sanitized
}

// Sanitize JS (remove eval, Function, etc.)
function sanitizeJs(js: string): string {
  return js
    .replace(/\beval\s*\(/gi, '/* eval removed */')
    .replace(/\bFunction\s*\(/gi, '/* Function removed */')
    .replace(/\bnew\s+Function\s*\(/gi, '/* new Function removed */')
    .replace(/document\.write/gi, '/* document.write removed */')
    .replace(/innerHTML\s*=/gi, '/* innerHTML removed */')
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) return NextResponse.json({ error: 'Missing GEMINI_API_KEY' }, { status: 400 })

    let body: any = null
    try {
      body = await req.json()
    } catch {
      body = null
    }

    const leadId = String(body?.leadId || '')
    const styleKeyRaw = String(body?.styleKey || '')
    const briefRaw = body?.brief
    const useFreeform = Boolean(body?.freeform) // Free-form HTML/CSS mode (Cursor-like)
    const useV2 = Boolean(body?.v2) // Use new SiteManifest v2 architecture
    const themeId = String(body?.themeId || '') // Theme preset ID
    if (!leadId) return NextResponse.json({ error: 'leadId required' }, { status: 400 })

    const briefParsed = SiteBriefSchema.safeParse(briefRaw)
    if (!briefParsed.success) return NextResponse.json({ error: 'Invalid brief' }, { status: 400 })

    const styleParsed = StyleKey.safeParse(styleKeyRaw)
    if (!styleParsed.success) return NextResponse.json({ error: 'Invalid styleKey' }, { status: 400 })

    const brief = briefParsed.data
    const styleKey = styleParsed.data as StyleKey

    const genAI = new GoogleGenerativeAI(apiKey)
    // Use Gemini 3 Pro for high-quality design generation
    const modelName = (process.env.GEMINI_MODEL || 'models/gemini-3.0-pro').trim()
    const modelFallbacks = [
      modelName,
      'models/gemini-3.0-pro',
      'models/gemini-2.5-pro',
      'models/gemini-2.5-flash',
      'models/gemini-2.0-flash',
    ]

    function safeJsonParse(text: string) {
      try {
        return JSON.parse(text)
      } catch {
        const start = text.indexOf('{')
        const end = text.lastIndexOf('}')
        if (start >= 0 && end > start) {
          try {
            return JSON.parse(text.slice(start, end + 1))
          } catch {
            return null
          }
        }
        return null
      }
    }

    async function genJson(instruction: string, temperature: number) {
      let lastErr: any = null
      let lastRaw = ''
      for (const m of modelFallbacks) {
        try {
          const model = genAI.getGenerativeModel({
            model: m,
            generationConfig: { temperature, responseMimeType: 'application/json' },
          })
          const res = await model.generateContent(instruction)
          const text = res.response.text() || '{}'
          const parsed = safeJsonParse(text)
          if (parsed) return { json: parsed, raw: text, model: m }
          lastRaw = text
        } catch (e: any) {
          lastErr = e
        }

        try {
          const model = genAI.getGenerativeModel({ model: m, generationConfig: { temperature } })
          const res = await model.generateContent(instruction)
          const text = res.response.text() || '{}'
          const parsed = safeJsonParse(text)
          if (parsed) return { json: parsed, raw: text, model: m }
          lastRaw = text
        } catch (e: any) {
          lastErr = e
        }
      }
      const err = lastErr || new Error('Gemini failed')
      ;(err as any).rawPreview = lastRaw.slice(0, 500)
      throw err
    }

    // 1) content
    let content: any = null
    const fallbackContent = {
      hero: {
        badge: `${brief.businessName} • Premium`,
        headline: `${brief.businessName} үшін жаңа деңгей`,
        subheadline: `${brief.targetAudience || 'Клиенттер'} үшін ${brief.services.join(
          ', '
        )} бағытында нақты нәтиже беретін премиум шешім.`,
      },
      features: {
        title: 'Негізгі артықшылықтар',
        items: (brief.uniqueSellingPoints?.length ? brief.uniqueSellingPoints : brief.services)
          .slice(0, 4)
          .map((text: string) => ({
            title: text,
            description: `${text} арқылы тиімділік пен сапаны айқын арттырасыз.`,
          })),
      },
      pricing: {
        title: 'Бағалар',
        plans: [
          {
            name: 'Start',
            price: '₸49,000',
            description: 'Шағын бизнеске арналған',
            bullets: ['Жылдам іске қосу', 'Премиум дизайн', 'Техқолдау'],
            highlighted: false,
          },
          {
            name: 'Pro',
            price: '₸99,000',
            description: 'Өсуге арналған толық пакет',
            bullets: ['AI контент', 'Конверсия фокус', 'Жеке менеджер'],
            highlighted: true,
          },
        ],
      },
      testimonials: {
        title: 'Клиенттер айтады',
        items: [
          { name: 'Айгерім', role: 'Founder', quote: 'Нәтиже нақты, сатылым 2 есе өсті.' },
          { name: 'Ернар', role: 'CEO', quote: '1 аптада сапалы лендинг дайын болды.' },
        ],
      },
      faq: {
        title: 'Жиі сұрақтар',
        items: [
          { q: 'Қанша уақытта дайын?', a: 'Әдетте 2-3 күн ішінде дайын болады.' },
          { q: 'Контентті өзім беремін бе?', a: 'Брифке сүйене отырып толық контент жазамыз.' },
        ],
      },
      footer: {
        note: `${brief.businessName} — сенімді шешім.`,
      },
    }

    try {
    const contentPrompt =
      'Generate PREMIUM, compelling landing page content in Kazakh (KZ) that converts. Return JSON only.\n' +
      'Shape: { "hero": { "badge": string (short, punchy), "headline": string (powerful, benefit-focused, 6-12 words), "subheadline": string (clear value prop, 15-25 words) }, ' +
      '"stats"?: { "title": string, "items": [{ "label": string, "value": string }] }, ' +
      '"features": { "title": string, "items": [{ "title": string (benefit-focused, 3-6 words), "description": string (clear, 10-20 words) }] }, ' +
      '"testimonials"?: { "title": string, "items": [{ "name": string, "role": string, "quote": string (authentic, specific, 15-30 words) }] }, ' +
      '"faq"?: { "title": string, "items": [{ "q": string (common concern), "a": string (helpful, 20-40 words) }] }, ' +
      '"pricing": { "title": string, "plans": [{ "name": string, "price": string, "description": string (clear value), "bullets": [string] (benefits, not features), "highlighted": boolean }] }, ' +
      '"finalCta"?: { "title": string (action-oriented), "subtitle": string (urgency/benefit) }, ' +
      '"footer": { "note": string } }.\n' +
      '\n' +
      'CONTENT QUALITY RULES:\n' +
      '1. Headlines: Benefit-focused, specific, emotional. Avoid generic phrases. Use power words.\n' +
      '2. Subheadlines: Clear value proposition, address pain point, create desire.\n' +
      '3. Features: Focus on benefits, not features. Use "you" language. Be specific.\n' +
      '4. Testimonials: Authentic, specific results. Include numbers/metrics if possible.\n' +
      '5. FAQ: Address real objections, be helpful, build trust.\n' +
      '6. Pricing: Clear value, highlight best option, use social proof.\n' +
      '7. CTA: Action-oriented, create urgency, clear next step.\n' +
      '8. Tone: Match styleKey (minimalist_tech = professional/tech, bold_modern = energetic/bold, clean_corporate = trustworthy/calm).\n' +
      '\n' +
      `Brief: ${JSON.stringify(brief)}\n` +
      `Style: ${styleKey}\n` +
      'Constraints: stats.items 2-4; features.items 3-6; testimonials.items 2-4; faq.items 3-6; pricing.plans 2-3; bullets 3-6.\n' +
      '\n' +
      'OUTPUT: Return content that converts. Every word must earn its place. Be specific, benefit-focused, and compelling.\n'
    const out = await genJson(contentPrompt, 0.6)
    const parsed = LandingContentSchema.safeParse(out.json)
    if (parsed.success) content = parsed.data
    else content = fallbackContent
    } catch {
      content = fallbackContent
    }
    if (!content) content = fallbackContent

    // 1.5) brand tokens (individual design kit with iOS 26-style palette + dark/light mode)
    let brand: any = null
    try {
    const iosColors = [
      { name: 'blue', light: '#007AFF', dark: '#0A84FF' },
      { name: 'green', light: '#34C759', dark: '#30D158' },
      { name: 'orange', light: '#FF9500', dark: '#FF9F0A' },
      { name: 'red', light: '#FF3B30', dark: '#FF453A' },
      { name: 'purple', light: '#AF52DE', dark: '#BF5AF2' },
      { name: 'pink', light: '#FF2D55', dark: '#FF375F' },
      { name: 'indigo', light: '#5856D6', dark: '#5E5CE6' },
      { name: 'teal', light: '#5AC8FA', dark: '#64D2FF' },
      { name: 'mint', light: '#00C7BE', dark: '#66EFE5' },
    ]
    const brandPrompt =
      'Create a PREMIUM brand design system in iOS 26 style with perfect typography pairing. Return JSON only.\n' +
      'Shape: { "brandName": string, "colors": { "light": { "bg": hex, "surface": hex, "text": hex, "muted": hex, "border": hex, "primary": hex, "primaryText": hex, "accent": hex, "secondary"?: hex }, ' +
      '"dark": { "bg": hex, "surface": hex, "text": hex, "muted": hex, "border": hex, "primary": hex, "primaryText": hex, "accent": hex, "secondary"?: hex } }, ' +
      '"typography": { "heading": "space"|"syne"|"manrope", "body": "inter"|"manrope" }, ' +
      '"radius": { "card": "xl"|"2xl"|"3xl", "button": "xl"|"2xl" } }.\n' +
      '\n' +
      'TYPOGRAPHY RULES (CRITICAL):\n' +
      '- "space" = Space Grotesk (modern, tech, geometric) - best for tech/startup\n' +
      '- "syne" = Syne (bold, contemporary) - best for creative/bold brands\n' +
      '- "manrope" = Manrope (versatile, professional) - best for corporate/clean\n' +
      '- Body: "inter" = Inter (most readable, modern) - ALWAYS use for body text\n' +
      '- Body: "manrope" = Manrope (alternative, slightly rounded) - use if brand needs softer feel\n' +
      '- Choose pairing: heading should contrast with body (e.g., Space Grotesk + Inter, Syne + Inter, Manrope + Inter).\n' +
      '\n' +
      'COLOR RULES:\n' +
      '- Use iOS 26 system colors for primary/accent: ' +
      iosColors.map((c) => `${c.name} (light: ${c.light}, dark: ${c.dark})`).join(', ') +
      '.\n' +
      '- For light mode: bg should be #FFFFFF or #F2F2F7 (iOS light gray), surface #FFFFFF, text #000000 or #1C1C1E, muted #8E8E93.\n' +
      '- For dark mode: bg should be #000000 or #1C1C1E, surface #1C1C1E or #2C2C2E, text #FFFFFF, muted #98989D.\n' +
      '- Choose one iOS system color as primary (match business vibe: tech=blue/indigo, creative=purple/pink, food=orange/red, health=green/teal).\n' +
      '- Accent should be a complementary iOS system color or a variation of primary.\n' +
      '- Ensure primaryText has sufficient contrast (WCAG AA: 4.5:1 for normal text, 3:1 for large text).\n' +
      '\n' +
      `styleKey: ${styleKey}\n` +
      `business: ${brief.businessName}\n` +
      `industryHints: ${JSON.stringify(brief.services)}\n` +
      '\n' +
      'OUTPUT: Return a premium design system that rivals top-tier brands. Typography pairing must be perfect.\n'
    const out = await genJson(brandPrompt, 0.3)
    const parsed = BrandTokensSchema.safeParse(out.json)
    if (parsed.success) brand = parsed.data
  } catch {
    brand = null
  }

  // 1.6) brand assets (deterministic SVG bg; avoids external image APIs for MVP)
  function hashToInt(seed: string) {
    let h = 2166136261
    for (let i = 0; i < seed.length; i++) {
      h ^= seed.charCodeAt(i)
      h = Math.imul(h, 16777619)
    }
    return h >>> 0
  }
  function mulberry32(a: number) {
    return function () {
      let t = (a += 0x6d2b79f5)
      t = Math.imul(t ^ (t >>> 15), t | 1)
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
  }
  function svgBg(seed: string, colors: any) {
    const r = mulberry32(hashToInt(seed))
    const w = 1400
    const h = 800
    const blobs = Array.from({ length: 6 }).map(() => {
      const cx = Math.floor(r() * w)
      const cy = Math.floor(r() * h)
      const rx = Math.floor(120 + r() * 260)
      const ry = Math.floor(90 + r() * 220)
      const rot = Math.floor(r() * 180)
      const opacity = (0.08 + r() * 0.12).toFixed(3)
      const fill = r() > 0.5 ? colors.primary : colors.accent
      return { cx, cy, rx, ry, rot, opacity, fill }
    })

    const svg =
      `<?xml version="1.0" encoding="UTF-8"?>` +
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">` +
      `<defs>` +
      `<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
      `<stop offset="0" stop-color="${colors.bg}"/>` +
      `<stop offset="1" stop-color="${colors.surface}"/>` +
      `</linearGradient>` +
      `<filter id="blur" x="-20%" y="-20%" width="140%" height="140%">` +
      `<feGaussianBlur stdDeviation="30"/>` +
      `</filter>` +
      `</defs>` +
      `<rect width="100%" height="100%" fill="url(#g)"/>` +
      `<g filter="url(#blur)">` +
      blobs
        .map(
          (b) =>
            `<ellipse cx="${b.cx}" cy="${b.cy}" rx="${b.rx}" ry="${b.ry}" transform="rotate(${b.rot} ${b.cx} ${b.cy})" fill="${b.fill}" fill-opacity="${b.opacity}"/>`
        )
        .join('') +
      `</g>` +
      `</svg>`
    return svg
  }

  if (brand && !brand.assets?.heroBgSvg) {
    // Use light mode colors for SVG bg (will adapt via CSS in dark mode)
    const seed = `${brief.businessName}|${styleKey}|${brand.colors.light.primary}|${brand.colors.light.accent}`
    brand = { ...brand, assets: { ...(brand.assets || {}), heroBgSvg: svgBg(seed, brand.colors.light) } }
  }

  // 2) freeform HTML/CSS/JS generation (Cursor-like) OR component-driven layout
  let freeform: any = null
  let layout = defaultLayoutForContent(content)

  if (useFreeform) {
    // Free-form HTML/CSS/JS generation
    try {
      const freeformPrompt =
        'Generate a PREMIUM, world-class landing page HTML/CSS/JS that rivals top-tier SaaS products (Vercel, Linear, Stripe quality). Return JSON only with shape: { "html": string (complete HTML), "css"?: string (optional separate CSS), "js"?: string (optional JS, no eval/Function) }.\n' +
        '\n' +
        'CRITICAL DESIGN REQUIREMENTS:\n' +
        '1. TYPOGRAPHY (MUST BE PERFECT):\n' +
        '   - Use premium Google Fonts via @import in CSS: Inter (body), Space Grotesk or Poppins (headings), or Playfair Display (elegant headings).\n' +
        '   - Typography scale: h1: 3.5-4.5rem (56-72px), h2: 2.5-3rem (40-48px), h3: 1.75-2rem (28-32px), body: 1rem (16px), small: 0.875rem (14px).\n' +
        '   - Line height: 1.2-1.3 for headings, 1.5-1.6 for body text.\n' +
        '   - Letter spacing: -0.02em to -0.03em for headings, 0 for body.\n' +
        '   - Font weights: 400 (body), 500-600 (medium), 700 (bold headings).\n' +
        '\n' +
        '2. VISUAL DESIGN (PREMIUM QUALITY):\n' +
        '   - iOS 26 style: vibrant system colors, glassmorphism (backdrop-filter: blur(20px)), smooth shadows.\n' +
        '   - Spacing system: 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96px).\n' +
        '   - Border radius: 12px (cards), 16px (buttons), 24px (large cards), 999px (pills).\n' +
        '   - Shadows: subtle, layered (0 1px 3px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)).\n' +
        '   - Gradients: subtle, modern (linear-gradient, radial-gradient).\n' +
        '   - Animations: smooth transitions (200-300ms ease-out), hover effects, scroll animations.\n' +
        '\n' +
        '3. LAYOUT & STRUCTURE:\n' +
        '   - Mobile-first responsive design (max-width: 1280px container, padding: 24px mobile, 48px desktop).\n' +
        '   - Grid system: CSS Grid for complex layouts, Flexbox for simple alignment.\n' +
        '   - White space: generous, breathing room between sections (64-96px vertical spacing).\n' +
        '   - Visual hierarchy: clear, strong contrast between sections.\n' +
        '\n' +
        '4. COLOR & THEME:\n' +
        '   - Use brand colors from Brand object if provided.\n' +
        '   - Dark/light mode via CSS variables (--color-bg, --color-text, --color-primary).\n' +
        '   - High contrast ratios (WCAG AA minimum).\n' +
        '   - Accent colors: vibrant, saturated (iOS 26 system colors).\n' +
        '\n' +
        '5. INTERACTIVE ELEMENTS:\n' +
        '   - Buttons: large (48px height), rounded (16px), with hover/active states.\n' +
        '   - Cards: elevated, with subtle shadows, hover lift effect.\n' +
        '   - Forms: clean inputs, proper focus states, smooth transitions.\n' +
        '\n' +
        '6. CODE QUALITY:\n' +
        '   - HTML: semantic, accessible (nav, main, section, article, footer).\n' +
        '   - CSS: organized, use CSS variables for theming, no inline styles in HTML (use <style> tag).\n' +
        '   - JS: vanilla JS only, smooth scroll, form handling, no dangerous functions.\n' +
        '   - No external dependencies (no CDN, no frameworks).\n' +
        '\n' +
        '7. CONTENT INTEGRATION:\n' +
        '   - Use provided Content object for all text.\n' +
        '   - Use Brand colors/typography if provided.\n' +
        '   - Match Style key aesthetic (minimalist_tech = clean/tech, bold_modern = vibrant/bold, clean_corporate = professional/calm).\n' +
        '\n' +
        `Brief: ${JSON.stringify(brief)}\n` +
        `Style: ${styleKey}\n` +
        `Content: ${JSON.stringify(content)}\n` +
        `Brand: ${brand ? JSON.stringify(brand) : 'null'}\n` +
        '\n' +
        'OUTPUT: Return a complete, production-ready HTML page that looks like it was designed by a top-tier design agency. Every pixel must be perfect.\n'
      const out = await genJson(freeformPrompt, 0.7)
      const parsed = FreeformHtmlSchema.safeParse(out.json)
      if (parsed.success) {
        freeform = {
          html: sanitizeHtml(parsed.data.html),
          css: parsed.data.css ? sanitizeHtml(parsed.data.css) : undefined,
          js: parsed.data.js ? sanitizeJs(parsed.data.js) : undefined,
        }
      }
    } catch {
      // Fallback to component-driven
      freeform = null
    }
  } else {
    // Component-driven layout
    try {
      const layoutPrompt =
        'Create a PREMIUM section layout plan that maximizes visual impact and conversion. Return JSON only with shape { "sections": [{ "type": "hero"|"stats"|"features"|"pricing"|"testimonials"|"faq"|"lead"|"footer", "variant"?: string, "anchor"?: string }] }.\n' +
        '\n' +
        'LAYOUT RULES:\n' +
        '1. Structure: hero first, footer last; use anchors for features/pricing/faq/lead.\n' +
        '2. Visual Flow: Create a narrative journey (hero → stats → features → pricing → testimonials → faq → lead).\n' +
        '3. Variant Selection: Choose at least 3 non-default variants to create visual diversity and interest.\n' +
        '\n' +
        'STYLE-SPECIFIC VARIANT PREFERENCES:\n' +
        '- clean_corporate: hero centered (trustworthy), pricing table (comparison-focused), faq cards (scannable), testimonials quotes (elegant).\n' +
        '- bold_modern: hero split (dynamic), features zigzag (energetic), testimonials cards (vibrant), pricing cards (bold), faq accordion (interactive).\n' +
        '- minimalist_tech: hero minimal or centered (clean), features grid (organized), pricing cards (simple), testimonials quotes (subtle), faq accordion (minimal).\n' +
        '\n' +
        'AVAILABLE VARIANTS:\n' +
        '- hero: split (image left, text right) | centered (text center, balanced) | minimal (ultra-clean, text-focused)\n' +
        '- features: grid (3-column cards) | zigzag (alternating left/right) | list (vertical, compact)\n' +
        '- pricing: cards (side-by-side plans) | table (comparison table) | compare (feature comparison)\n' +
        '- testimonials: quotes (large quote style) | cards (card-based) | marquee (carousel)\n' +
        '- faq: accordion (expandable) | cards (grid of Q&A cards)\n' +
        '- lead: form (full form) | cta (simple CTA button)\n' +
        '\n' +
        `styleKey: ${styleKey}\n` +
        `brand: ${brand ? JSON.stringify(brand) : 'null'}\n` +
        `hasStats: ${Boolean(content.stats)}; hasTestimonials: ${Boolean(content.testimonials)}; hasFaq: ${Boolean(content.faq)}\n` +
        '\n' +
        'OUTPUT: Return a layout that creates visual interest, guides the eye, and maximizes conversion. Every section variant should serve a purpose.\n'
      const out = await genJson(layoutPrompt, 0.2)
      const parsed = SiteLayoutSchema.safeParse(out.json)
      if (parsed.success) layout = parsed.data
    } catch {
      // keep default
    }
  }

  // Generate v2 SiteManifest if requested
  if (useV2 && !useFreeform) {
    try {
      console.log('[v2] Starting SiteManifest generation...')
      const dataPoints = parseBriefToManifest(brief, styleKey)
      const theme = styleKeyToTheme(styleKey)
      const aidPrompt = getAIDAPrompt(dataPoints)

      // Generate SiteManifest content using "FIGMA AI" level design
      const manifestPrompt =
        '# ROLE: SENIOR FIGMA AI DESIGNER\n' +
        '\n' +
        'You are an elite design system architect. Your task is to generate a pixel-perfect, visually stunning landing page that rivals the best SaaS products (Linear, Vercel, Stripe, Raycast).\n' +
        '\n' +
        '**CRITICAL MANDATORY RULES (NO EXCEPTIONS):**\n' +
        '1. EVERY feature item MUST have an icon field (lucide-react icon name).\n' +
        '2. Hero section MUST have a visual element (icon, gradient, or image).\n' +
        '3. Typography MUST be large and impactful (H1: 72-96px, H2: 48-64px).\n' +
        '4. All text MUST be benefit-focused, specific, and compelling.\n' +
        '5. NO generic placeholder text. Write real, persuasive copy.\n' +
        '\n' +
        '**INPUT CONTEXT:**\n' +
        `- Business Name: ${brief.businessName}\n` +
        `- Niche: ${brief.services.join(', ')}\n` +
        `- Value Proposition: ${brief.uniqueSellingPoints.join(', ')}\n` +
        `- Target Audience: ${brief.targetAudience || 'Clients'}\n` +
        `- Vibe: ${themePreset?.name || 'Professional Trust'}\n` +
        `- Language: ${brief.language}\n` +
        '\n' +
        '**VISUAL DESIGN SYSTEM (FIGMA AI STANDARDS):**\n' +
        '\n' +
        '### 1. ICON SYSTEM (MANDATORY - 100% COVERAGE):\n' +
        'Every single feature, benefit, and section MUST have a relevant lucide-react icon:\n' +
        '- Speed/Performance: "zap"\n' +
        '- Security/Trust: "shield"\n' +
        '- Growth/Launch: "rocket"\n' +
        '- Quality/Premium: "star"\n' +
        '- Analytics/Data: "barChart3"\n' +
        '- Niche-specific: Match the service (e.g., "coffee" for coffee shop, "code" for tech, "heart" for health)\n' +
        '- Innovation: "sparkles"\n' +
        '- Success: "trophy"\n' +
        '- Precision: "target"\n' +
        '- Support: "headphones"\n' +
        '- Integration: "plug"\n' +
        '\n' +
        '**ICON SELECTION LOGIC:**\n' +
        '1. Read the feature title and description.\n' +
        '2. Identify the core benefit (speed, security, quality, etc.).\n' +
        '3. Select the most appropriate icon from the list above.\n' +
        '4. If niche-specific (coffee, fitness, etc.), use that icon.\n' +
        '5. NEVER leave icon field empty or use generic icons.\n' +
        '\n' +
        '### 2. TYPOGRAPHY HIERARCHY (PIXEL-PERFECT):\n' +
        '- **H1 (Hero Headline):** 72-96px, font-weight: 800, tracking: -0.04em, line-height: 1.05\n' +
        '  - Must be 5-8 powerful words\n' +
        '  - Use gradient text: text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60\n' +
        '  - Example: "AI-Powered Growth Platform" (NOT "Welcome to our service")\n' +
        '\n' +
        '- **H2 (Section Titles):** 48-64px, font-weight: 700, tracking: -0.03em, line-height: 1.1\n' +
        '  - Clear, benefit-focused (e.g., "Ship Faster, Build Better")\n' +
        '\n' +
        '- **H3 (Feature Titles):** 24-32px, font-weight: 600, tracking: -0.02em\n' +
        '  - 3-6 words, benefit-focused\n' +
        '\n' +
        '- **Body Text:** 16-18px, line-height: 1.6, color: text-slate-400\n' +
        '  - 15-25 words per description\n' +
        '  - Specific, not generic\n' +
        '\n' +
        '### 3. VISUAL ELEMENTS (NO EMPTY SPACES):\n' +
        '\n' +
        '**Hero Section Visual (MANDATORY):**\n' +
        '- Type: "icon" - Use a large, impactful icon (rocket, sparkles, zap)\n' +
        '- OR Type: "gradient" - Use a rich gradient background\n' +
        '- OR Type: "image" - Use Unsplash URL: https://source.unsplash.com/1600x900/?' + (brief.services[0] || 'abstract') + ',modern\n' +
        '- NEVER leave visual field empty\n' +
        '\n' +
        '**Feature Cards Visual:**\n' +
        '- Each feature card MUST have an icon (already covered above)\n' +
        '- Icons should be large (w-12 h-12 or w-16 h-16)\n' +
        '- Icons should have gradient backgrounds or accent colors\n' +
        '\n' +
        '### 4. CONTENT QUALITY (AIDA FRAMEWORK):\n' +
        '\n' +
        '**Headlines (ATTENTION):**\n' +
        '- Must grab attention immediately\n' +
        '- Use power words: "Transform", "Accelerate", "Revolutionize", "Unlock"\n' +
        '- Be specific: "10x Your Productivity" (NOT "Increase Efficiency")\n' +
        '- Match the niche: For coffee shop, use "Artisan Coffee Experience"\n' +
        '\n' +
        '**Subheadlines (INTEREST + DESIRE):**\n' +
        '- Address pain points\n' +
        '- Create desire with benefits\n' +
        '- Use numbers when possible: "Save 20 hours per week"\n' +
        '- Be specific: "Join 10,000+ businesses" (NOT "Join many users")\n' +
        '\n' +
        '**Features (DESIRE + ACTION):**\n' +
        '- Focus on BENEFITS, not features\n' +
        '- Use "you" language: "You get instant insights" (NOT "The system provides")\n' +
        '- Be specific: "Ship features 5x faster" (NOT "Faster development")\n' +
        '- Include numbers: "99.9% uptime", "10x faster", "50% cost reduction"\n' +
        '\n' +
        '**CTAs (ACTION):**\n' +
        '- Action-oriented: "Start Free Trial", "Get Started", "Book Demo"\n' +
        '- Create urgency: "Start Now", "Join Today"\n' +
        '- Match the language: Use Kazakh if language is KZ\n' +
        '\n' +
        '### 5. DESIGN COMPOSITION:\n' +
        '\n' +
        '**Spacing & Layout:**\n' +
        '- Hero padding: py-24 lg:py-32 (96-128px vertical)\n' +
        '- Section padding: py-16 lg:py-24 (64-96px vertical)\n' +
        '- Card padding: p-6 md:p-8 lg:p-10 (24-40px)\n' +
        '- Gap between elements: gap-6 md:gap-8 (24-32px)\n' +
        '\n' +
        '**Color & Contrast:**\n' +
        '- Background: #020617 (slate-950) or #09090b (zinc-950)\n' +
        '- Text: white for headings, slate-400 for body\n' +
        '- Accents: Use theme preset colors (purple, blue, etc.)\n' +
        '- High contrast for CTAs\n' +
        '\n' +
        '**Glassmorphism:**\n' +
        '- All cards: bg-white/5 backdrop-blur-xl border border-white/10\n' +
        '- Hover: bg-white/10 border-white/20\n' +
        '- Rounded: rounded-2xl (16px)\n' +
        '\n' +
        '### 6. OUTPUT FORMAT:\n' +
        '\n' +
        'Return a SiteManifest v2 JSON with this structure:\n' +
        '\n' +
        '```json\n' +
        '{\n' +
        '  "hero": {\n' +
        '    "badge": "string (3-5 words, punchy)",\n' +
        '    "headline": "string (5-8 words, powerful, gradient text)",\n' +
        '    "subheadline": "string (15-25 words, benefit-focused, specific)",\n' +
        '    "cta": {\n' +
        '      "primary": "string (action-oriented, e.g. Start Free Trial)",\n' +
        '      "secondary": "string (optional)",\n' +
        '      "href": "#lead"\n' +
        '    },\n' +
        '    "visual": {\n' +
        '      "type": "icon|gradient|image",\n' +
        '      "value": "string (icon name, gradient description, or image URL)"\n' +
        '    }\n' +
        '  },\n' +
        '  "features": {\n' +
        '    "title": "string (benefit-focused, 3-6 words)",\n' +
        '    "items": [\n' +
        '      {\n' +
        '        "title": "string (3-6 words, benefit-focused)",\n' +
        '        "description": "string (15-25 words, specific benefits with numbers if possible)",\n' +
        '        "icon": "string (MANDATORY - lucide-react icon name)",\n' +
        '        "highlight": boolean\n' +
        '      }\n' +
        '    ]\n' +
        '  },\n' +
        '  "pricing": { ... },\n' +
        '  "testimonials": { ... },\n' +
        '  "faq": { ... }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '**VALIDATION CHECKLIST:**\n' +
        'Before returning, verify:\n' +
        '✓ Every feature has an icon field (NOT empty)\n' +
        '✓ Hero has a visual field (NOT empty)\n' +
        '✓ All headlines are 5-8 words, powerful\n' +
        '✓ All descriptions are 15-25 words, specific\n' +
        '✓ No generic text like "Lorem ipsum" or "Coming soon"\n' +
        '✓ Numbers are included where relevant (99.9%, 10x, 1000+)\n' +
        '✓ Language matches the brief (Kazakh if language is KZ)\n' +
        '\n' +
        '**NOW GENERATE THE SITEMANIFEST JSON:**\n' +
        '\n' +
        '**CONTEXT:** You are the engine behind a premium website builder. The user wants a site that looks like it cost $10,000. The output must rival Linear.app, Raycast, and Vercel.\n' +
        '\n' +
        '**THE TECH STACK & DNA (Strict Adherence):**\n' +
        '1. Framework: Next.js 14 (App Router) + Tailwind CSS.\n' +
        '2. Animation Engine: framer-motion (Mandatory for all interactions).\n' +
        '3. UI Library Simulation (Aceternity UI):\n' +
        '   - Keywords: BentoGrid, HeroHighlight, MovingBorder, SparklesCore, InfiniteMovingCards, Spotlight.\n' +
        '   - Rule: Do NOT use standard flat CSS. Every container must have depth (gradients, blurs, noise).\n' +
        '\n' +
        '**DESIGN CONSTITUTION (The "Anti-Boring" Laws):**\n' +
        '1. Absolute Dark Mode: Background is never #000. Use #020617 (Slate-950) or #09090b (Zinc-950).\n' +
        '2. Lighting: Every section must have a "Light Source" (e.g., a radial gradient glow behind the text or spotlight from the top).\n' +
        '3. Grid System: NEVER use symmetrical 3-column grids. Use Asymmetrical Bento Grids (Span 2, Span 1, Tall vertical cards).\n' +
        '4. Glassmorphism: All cards use bg-white/5, backdrop-blur-xl, border-white/10.\n' +
        '5. Typography: Headers use tracking-tighter (-2px). Text uses text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400.\n' +
        '\n' +
        '**INPUT DATA:**\n' +
        `- Business Name: ${brief.businessName}\n` +
        `- Niche/Topic: ${brief.services.join(', ')}\n` +
        `- Value Proposition: ${brief.uniqueSellingPoints.join(', ')}\n` +
        `- Vibe Selection: ${themePreset?.name || 'Professional Trust'}\n` +
        '\n' +
        '**EXECUTION PLAN (Step-by-Step):**\n' +
        '\n' +
        '### SECTION 1: THE HERO (The "Hook")\n' +
        '- Layout: Centered, massive typography.\n' +
        '- Effect: Implement a "Spotlight" effect from the top.\n' +
        '- Headline: Write a punchy, 5-word headline based on the niche. Use h1 with text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400.\n' +
        '- CTA: A "Magnetic Button" with a glowing border animation (border-gradient).\n' +
        '\n' +
        '### SECTION 2: THE BENTO GRID (The "Features")\n' +
        '- Architecture: Create a <BentoGrid> container.\n' +
        '- Content: Generate 4 key benefits based on the value proposition.\n' +
        '- Visuals:\n' +
        '  - Item 1 (Large): Spans 2 columns. Contains a rich gradient icon.\n' +
        '  - Item 2 & 3 (Small): Square aspect ratio.\n' +
        '  - Item 4 (Tall): Vertical card.\n' +
        '- Styling: bg-neutral-900/50, border-white/10, hover:border-white/20.\n' +
        '\n' +
        '### SECTION 3: SOCIAL PROOF (The "Trust")\n' +
        '- Component: Use an <InfiniteMovingCards> marquee component.\n' +
        '- Content: Generate 5 realistic testimonials relevant to the niche.\n' +
        '\n' +
        '### SECTION 4: THE OFFER (Pricing/Contact)\n' +
        '- Design: A single "Focus Card" in the center with a radial-gradient glow behind it.\n' +
        '- Action: A high-contrast button.\n' +
        '\n' +
        '**STRICT CODE RULES:**\n' +
        '1. Single File Output: Provide the entire landing page logic in one file (or specify component code clearly).\n' +
        '2. No Placeholders: Write REAL, persuasive marketing copy in Kazakh (or user language).\n' +
        '3. Visual Noise: Add a subtle bg-dot-white/[0.2] pattern to the main background to avoid flatness.\n' +
        '\n' +
        '**OUTPUT:**\n' +
        'Generate the full SiteManifest v2 JSON with all sections. Every word must earn its place. Be specific, benefit-focused, and compelling.\n' +
        '\n' +
        'Shape: { "hero": { "badge"?: string (short, punchy), "headline": string (powerful, 5-7 words, MUST use gradient text), "subheadline": string (clear value, 15-25 words), "cta": { "primary": string (action-oriented), "secondary"?: string, "href": string }, "visual"?: { "type": "icon"|"svg"|"gradient"|"image", "value": string } }, ' +
        '"socialProof"?: { "title"?: string, "items": [{ "label": string, "value": string (impressive numbers), "icon"?: string (lucide-react name) }] }, ' +
        '"features": { "title": string, "items": [{ "title": string (benefit-focused, 3-6 words), "description": string (clear benefit, 10-20 words), "icon"?: string (lucide-react name), "highlight"?: boolean }] }, ' +
        '"pricing": { "title": string, "plans": [{ "name": string, "price": string, "period"?: string, "description"?: string, "bullets": [string] (benefits, not features), "highlighted"?: boolean, "cta"?: string }] }, ' +
        '"testimonials"?: { "title": string, "items": [{ "name": string, "role": string, "quote": string (authentic, specific, 15-30 words), "avatar"?: string, "rating"?: number }] }, ' +
        '"faq"?: { "title": string, "items": [{ "q": string, "a": string }] }, ' +
        '"footer"?: { "note"?: string, "links"?: [{ "label": string, "href": string }] } }.\n' +
        '\n' +
        '### DESIGN DNA - MODERN PREMIUM NOIR:\n' +
        '1. **Visual Style**: "Modern Premium Noir". Use deep ebony (#050505) as the base. Use high-end gradients: from subtle indigo to electric violet for primary actions.\n' +
        '2. **Glassmorphism**: Every card/container must have: `bg-white/5`, `backdrop-blur-xl`, `border border-white/10`, and `rounded-2xl`.\n' +
        '3. **Bento Grid Layout**: Feature sections MUST be asymmetrical. Large cards for primary stats, smaller cards for secondary info. No 3-column simple grids.\n' +
        '4. **Typography**: Use premium fonts. Headers: `tracking-tighter`, `font-bold`, large sizes (text-7xl to text-9xl for H1). Body: `text-slate-400`, `leading-relaxed`.\n' +
        '\n' +
        '### COMPONENT SPECIFICS:\n' +
        '- **Hero**: Use a giant "Gradient Text" for the main headline (indigo to violet gradient). Add a floating effect for the main CTA button.\n' +
        '- **Features**: MUST use Bento Grid 2.0 (asymmetrical layout). Large cards for primary features, smaller for secondary.\n' +
        '- **Pricing**: The "Premium" card must have a `shimmer` border effect (animated border glow).\n' +
        '- **Testimonials**: Use a "Marquee" (infinite loop scroll) animation for social proof to make the site feel alive.\n' +
        '- **FAQ**: Use clean, minimal accordions with smooth height transitions.\n' +
        '\n' +
        '### ANIMATION (Framer Motion):\n' +
        '- Implement `AnimatePresence`.\n' +
        '- Every section must use a `staggerChildren` reveal effect when entering the viewport.\n' +
        '- Buttons must have a scale-down effect on click.\n' +
        '- All cards must have `whileHover={{ y: -10 }}` effect.\n' +
        '\n' +
        aidPrompt +
        '\n' +
        'Shape: { "hero": { "badge"?: string (short, punchy), "headline": string (powerful, 6-12 words, MUST be gradient text), "subheadline": string (clear value, 15-25 words), "cta": { "primary": string (action-oriented), "secondary"?: string, "href": string }, "visual"?: { "type": "icon"|"svg"|"gradient"|"image", "value": string } }, ' +
        '"socialProof"?: { "title"?: string, "items": [{ "label": string, "value": string (impressive numbers), "icon"?: string (lucide-react name) }] }, ' +
        '"features": { "title": string, "items": [{ "title": string (benefit-focused, 3-6 words), "description": string (clear benefit, 10-20 words), "icon"?: string (lucide-react name), "highlight"?: boolean }] }, ' +
        '"pricing": { "title": string, "plans": [{ "name": string, "price": string, "period"?: string, "description"?: string, "bullets": [string] (benefits, not features), "highlighted"?: boolean, "cta"?: string }] }, ' +
        '"testimonials"?: { "title": string, "items": [{ "name": string, "role": string, "quote": string (authentic, specific, 15-30 words), "avatar"?: string, "rating"?: number }] }, ' +
        '"faq"?: { "title": string, "items": [{ "q": string (common concern), "a": string (helpful, 20-40 words) }] }, ' +
        '"footer"?: { "note"?: string, "links"?: [{ "label": string, "href": string }] } }.\n' +
        `Language: ${brief.language}\n` +
        `Business Name: ${brief.businessName}\n` +
        `Core Offer: ${brief.services.join(', ')}\n` +
        `Style Archetype: ${styleKey}\n` +
        '\n' +
        'Generate the full SiteManifest using the highest standards of Vibe Coding. Avoid boilerplate looks. Make it look unique, like a custom-coded $10k landing page.\n' +
        'OUTPUT: Return JSON only. Every word must earn its place. Be specific, benefit-focused, and compelling.\n'

      console.log('[v2] Generating content with AI...')
      let manifestContentOut: any = null
      try {
        manifestContentOut = await genJson(manifestPrompt, 0.6)
      } catch (e: any) {
        console.error('[v2] Manifest AI generation failed, using fallback from content:', {
          error: String(e?.message || e),
        })
        manifestContentOut = { json: null, raw: '' }
      }
      
      // Ensure we have valid JSON structure
      if (!manifestContentOut.json || typeof manifestContentOut.json !== 'object') {
        console.error('[v2] Invalid JSON response from AI, falling back to content-based manifest')
      }
      
      console.log('[v2] Parsing content schemas...')

      const raw = (manifestContentOut.json || {}) as any

      const pickIconForText = (text: string) => {
        const t = text.toLowerCase()
        if (t.includes('аналит') || t.includes('analytics') || t.includes('data')) return 'barChart3'
        if (t.includes('қауіп') || t.includes('security') || t.includes('қауіпсіз')) return 'shield'
        if (t.includes('жылдам') || t.includes('speed') || t.includes('performance')) return 'zap'
        if (t.includes('өс') || t.includes('growth') || t.includes('launch')) return 'rocket'
        if (t.includes('сапа') || t.includes('premium') || t.includes('quality')) return 'star'
        if (t.includes('кофе') || t.includes('coffee')) return 'coffee'
        if (t.includes('қолдау') || t.includes('support')) return 'headphones'
        if (t.includes('интеграц') || t.includes('integrat')) return 'plug'
        if (t.includes('инновац') || t.includes('ai') || t.includes('smart')) return 'sparkles'
        return 'sparkles'
      }

      const fallbackHero = {
        badge: `${brief.businessName} • Premium`,
        headline: `${brief.businessName} үшін жаңа деңгей`,
        subheadline: `${brief.targetAudience || 'Клиенттер'} үшін ${brief.services.join(
          ', '
        )} бағытында нақты нәтижеге жеткізетін премиум платформа.`,
        cta: {
          primary: brief.cta?.label || 'Бастау',
          secondary: 'Толығырақ',
          href: '#lead',
        },
        visual: {
          type: 'image',
          value: `https://source.unsplash.com/1600x900/?${brief.services[0] || 'abstract'},modern`,
        },
      }

      const normalizedHero = {
        badge: raw.hero?.badge || content?.hero?.badge || fallbackHero.badge,
        headline: raw.hero?.headline || content?.hero?.headline || fallbackHero.headline,
        subheadline: raw.hero?.subheadline || content?.hero?.subheadline || fallbackHero.subheadline,
        cta: {
          primary: raw.hero?.cta?.primary || brief.cta?.label || fallbackHero.cta.primary,
          secondary: raw.hero?.cta?.secondary || fallbackHero.cta.secondary,
          href: raw.hero?.cta?.href || fallbackHero.cta.href,
        },
        visual: raw.hero?.visual || fallbackHero.visual,
      }

      const baseFeatureTexts =
        (content?.features?.items?.length ? content.features.items.map((i: any) => i.title) : null) ||
        (brief.uniqueSellingPoints?.length ? brief.uniqueSellingPoints : brief.services)

      const fallbackFeatures = baseFeatureTexts
        .slice(0, 4)
        .map((text: string, idx: number) => ({
          title: text,
          description: `Сізге нақты нәтиже береді: ${text.toLowerCase()} арқылы өнімділікті арттырып, уақытты үнемдейсіз.`,
          icon: pickIconForText(text),
          highlight: idx === 0,
        }))

      const normalizedFeatures = {
        title: raw.features?.title || 'Нәтиже беретін мүмкіндіктер',
        items: Array.isArray(raw.features?.items) && raw.features.items.length > 0
          ? raw.features.items.map((it: any, idx: number) => ({
              title: String(it?.title || fallbackFeatures[idx]?.title || 'Артықшылық'),
              description: String(
                it?.description || fallbackFeatures[idx]?.description || 'Нақты пайда әкелетін артықшылық.'
              ),
              icon: String(it?.icon || pickIconForText(`${it?.title || ''} ${it?.description || ''}`)),
              highlight: Boolean(it?.highlight),
            }))
          : fallbackFeatures,
      }

      const normalizedPricing = raw.pricing || content?.pricing || {
        title: 'Бағалар',
        plans: [
          {
            name: 'Start',
            price: '₸49,000',
            period: '/ай',
            description: 'Шағын бизнеске арналған',
            bullets: ['Жылдам іске қосу', 'Премиум дизайн', 'Техқолдау'],
            highlighted: false,
            cta: 'Бастау',
          },
          {
            name: 'Pro',
            price: '₸99,000',
            period: '/ай',
            description: 'Өсуге арналған толық пакет',
            bullets: ['AI контент', 'Конверсия фокус', 'Жеке менеджер'],
            highlighted: true,
            cta: 'Pro таңдау',
          },
        ],
      }

      const heroContent = HeroContentSchema.safeParse(normalizedHero)
      const socialProof = raw.socialProof
        ? SocialProofSchema.safeParse(raw.socialProof)
        : { success: true, data: undefined }
      const featuresContent = FeaturesContentSchema.safeParse(normalizedFeatures)
      const pricingContent = PricingContentSchema.safeParse(normalizedPricing)
      const testimonialsContent = raw.testimonials
        ? TestimonialsContentSchema.safeParse(raw.testimonials)
        : { success: true, data: undefined }
      const faqContent = raw.faq ? FAQContentSchema.safeParse(raw.faq) : { success: true, data: undefined }
      const footerContent = raw.footer ? FooterContentSchema.safeParse(raw.footer) : { success: true, data: undefined }

      if (
        !heroContent.success ||
        !socialProof.success ||
        !featuresContent.success ||
        !pricingContent.success ||
        !testimonialsContent.success ||
        !faqContent.success ||
        !footerContent.success
      ) {
        // Validation failed: do NOT fallback to v1 when v2 is requested
        const issues = {
          hero: !heroContent.success ? heroContent.error?.issues : 'ok',
          socialProof: !socialProof.success ? socialProof.error?.issues : 'ok',
          features: !featuresContent.success ? featuresContent.error?.issues : 'ok',
          pricing: !pricingContent.success ? pricingContent.error?.issues : 'ok',
          testimonials: !testimonialsContent.success ? testimonialsContent.error?.issues : 'ok',
          faq: !faqContent.success ? faqContent.error?.issues : 'ok',
          footer: !footerContent.success ? footerContent.error?.issues : 'ok',
        }
        console.error('[v2] Manifest validation failed:', issues)
        return NextResponse.json(
          { error: 'v2 manifest validation failed', details: issues },
          { status: 500 }
        )
      } else {
        console.log('[v2] All content validated, creating manifest...')
        const sections = generateDefaultSections(
          Boolean(socialProof.data),
          Boolean(testimonialsContent.data),
          Boolean(faqContent.data)
        )

        // Get theme preset if themeId is provided
        const themePreset = themeId ? getThemePreset(themeId) : undefined

        const manifest = {
          version: 2 as const,
          theme,
          layout: 'standard' as const,
          sections,
          content: {
            hero: heroContent.data,
            socialProof: socialProof.data,
            features: featuresContent.data,
            pricing: pricingContent.data,
            testimonials: testimonialsContent.data,
            faq: faqContent.data,
            footer: footerContent.data,
          },
          meta: {
            businessName: brief.businessName,
            language: brief.language,
            colorPreference: dataPoints.colorPreference,
            themeId: themeId || undefined,
            themePreset: themePreset
              ? {
                  id: themePreset.id,
                  primary: themePreset.primary,
                  glow: themePreset.glow,
                  bgMesh: themePreset.bgMesh,
                }
              : undefined,
          },
        }

        const validatedManifest = SiteManifestSchema.safeParse(manifest)
        if (validatedManifest.success) {
          console.log('[v2] Manifest validated, saving to database...')
          // Save v2 manifest
          let supabase: ReturnType<typeof supabaseService>
          try {
            supabase = supabaseService()
          } catch (e: any) {
            console.error('[v2] Supabase service error:', e)
            return NextResponse.json(
              { error: 'Server misconfigured: set SUPABASE_SERVICE_ROLE_KEY', details: String(e?.message || e) },
              { status: 500 }
            )
          }
          
          const insert = await supabase
            .from('sites')
            .insert({ brief, config: validatedManifest.data, style_key: styleKey })
            .select('id')
            .single()
          if (insert.error) {
            console.error('[v2] Database insert error:', insert.error)
            return NextResponse.json({ error: insert.error.message }, { status: 500 })
          }
          
          console.log('[v2] Site created successfully:', insert.data.id)

          const siteId = insert.data.id
          await supabase.from('leads').update({ site_id: siteId, style_key: styleKey }).eq('id', leadId)

          // Screenshots
          const origin = req.headers.get('origin') || ''
          const baseUrl =
            process.env.NEXT_PUBLIC_SITE_URL ||
            (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : origin) ||
            ''
          if (baseUrl) {
            fetch(`${baseUrl}/api/screenshot`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ siteId, view: 'desktop', kind: 'legacy_site' }),
            }).catch(() => {})
          }

          return NextResponse.json({ siteId, siteUrl: `/site/${siteId}`, version: 2 })
        } else {
          console.error('[v2] Final manifest validation failed')
          return NextResponse.json(
            { error: 'v2 manifest validation failed (final)' },
            { status: 500 }
          )
        }
      }
    } catch (e: any) {
      console.error('[v2] Generation failed:', {
        error: String(e?.message || e),
        stack: e?.stack,
      })
      return NextResponse.json(
        { error: 'v2 generation failed', details: String(e?.message || e) },
        { status: 500 }
      )
    }
  }

    // v1 generation (existing logic) - only if v2 is not requested
    console.log('[v1] Starting v1 generation...')
    const config = {
      version: 1 as const,
      styleKey,
      tokens: tokensForStyle(styleKey),
      brand,
      brief,
      content,
      layout: freeform ? undefined : layout,
      freeform: freeform || undefined,
    }
    const validated = SiteConfigSchema.safeParse(config)
    if (!validated.success) return NextResponse.json({ error: 'Config validation failed' }, { status: 500 })

    let supabase: ReturnType<typeof supabaseService>
    try {
      supabase = supabaseService()
    } catch (e: any) {
      return NextResponse.json(
        { error: 'Server misconfigured: set SUPABASE_SERVICE_ROLE_KEY', details: String(e?.message || e) },
        { status: 500 }
      )
    }
    const insert = await supabase
      .from('sites')
      .insert({ brief, config: validated.data, style_key: styleKey })
      .select('id')
      .single()
    if (insert.error) return NextResponse.json({ error: insert.error.message }, { status: 500 })

    const siteId = insert.data.id

    // link lead -> site
    await supabase.from('leads').update({ site_id: siteId, style_key: styleKey }).eq('id', leadId)

    // kick screenshots (best-effort)
    const origin = req.headers.get('origin') || ''
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : origin) ||
      ''
    if (baseUrl) {
      fetch(`${baseUrl}/api/screenshot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ siteId, view: 'desktop', kind: 'legacy_site' }),
      }).catch(() => {})
      fetch(`${baseUrl}/api/screenshot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ siteId, view: 'mobile', kind: 'legacy_site' }),
      }).catch(() => {})
    }

    return NextResponse.json({ siteId, siteUrl: `/site/${siteId}` })
  } catch (error: any) {
    console.error('[API] Unhandled error:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? String(error?.message || error) : undefined,
        stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined,
      },
      { status: 500 }
    )
  }
}

