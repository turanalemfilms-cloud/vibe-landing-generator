import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import {
  LandingContentSchema,
  SiteBriefSchema,
  StyleKey,
  SiteConfigSchema,
  SiteLayoutSchema,
  defaultLayoutForContent,
  tokensForStyle,
} from '@/lib/siteConfig'
import { rateLimit } from '@/lib/rateLimit'

type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string }

type ChatState = {
  step: 'collecting' | 'style' | 'generated'
  brief?: unknown
  styleKey?: string
  siteId?: string
}

type ChatRequest = {
  messages: ChatMessage[]
  state?: ChatState
  projectId?: string
}

function getEnv(name: string) {
  return process.env[name]
}

const STYLE_CHOICES = [
  { key: 'minimalist_tech', label: 'Minimalist Tech', description: 'Қараңғы, минимал, glassy' },
  { key: 'bold_modern', label: 'Bold Modern', description: 'Контраст, батыл accent' },
  { key: 'clean_corporate', label: 'Clean Corporate', description: 'Ақ/жеңіл, корпоратив стиль' },
] as const

function buildFallbackContent(brief: any) {
  return {
    hero: {
      badge: 'Vibe Coding • AI-first delivery',
      headline: `${brief.businessName}: сатылым әкелетін лендинг және AI автоматизация`,
      subheadline: `${brief.targetAudience} үшін: ${brief.services.join(', ')}. Нәтиже: ${brief.uniqueSellingPoints.slice(0, 2).join(' • ')}.`,
    },
    stats: {
      title: 'Нәтиже',
      items: [
        { label: 'Дайындау уақыты', value: '1–3 күн' },
        { label: 'Фокус', value: 'Конверсия' },
        { label: 'Қолдау', value: 'Итерация + аналитика' },
      ],
    },
    features: {
      title: 'Не аласыз?',
      items: [
        { title: brief.services[0] || 'Лендинг', description: 'Конверсияға бағытталған құрылым, тез жүктелу, мобильді адаптив.' },
        { title: brief.services[1] || 'AI автоматизация', description: 'Қолмен істейтін процестерді қысқартып, уақыт/шығын үнемдеу.' },
        { title: brief.services[2] || 'Чат-бот/CRM', description: 'Лид жинау, квалификация, 24/7 байланыс және CRM интеграция.' },
      ],
    },
    testimonials: {
      title: 'Клиенттер не дейді?',
      items: [
        { name: 'Айгерім', role: 'Кәсіпкер', quote: 'Лендинг бірден түсінікті болды, лидтер көбейді.' },
        { name: 'Дәурен', role: 'Сату менеджері', quote: 'CTA мен офферді дұрыстап берген соң конверсия өсті.' },
      ],
    },
    faq: {
      title: 'Жиі сұрақтар',
      items: [
        { q: 'Қанша уақытта дайын болады?', a: 'Бриф дайын болса, MVP 1–3 күн ішінде.' },
        { q: 'Қандай интеграциялар бар?', a: 'WhatsApp/Telegram, CRM, analytics (GA/Pixel) қосамыз.' },
        { q: 'Контентті өзгерте аламын ба?', a: 'Иә, конфиг арқылы тез өзгертіп шығамыз.' },
      ],
    },
    pricing: {
      title: 'Пакеттер',
      plans: [
        {
          name: 'Start',
          price: 'Бағасы келісім бойынша',
          description: 'Жылдам MVP/лендинг',
          bullets: ['1 бет лендинг', 'WhatsApp CTA', 'Базалық аналитика'],
          highlighted: false,
        },
        {
          name: 'Pro',
          price: 'Бағасы келісім бойынша',
          description: 'Автоматизация + интеграциялар',
          bullets: ['Лендинг + бот/CRM', 'AI автоматизация сценарийі', 'Интеграциялар'],
          highlighted: true,
        },
      ],
    },
    finalCta: {
      title: 'Дайынсыз ба? 15 минутта бағыт береміз',
      subtitle: 'Қысқа қоңырау → оффер → прототип. Бүгін бастайық.',
    },
    footer: {
      note: `© ${brief.businessName}. Барлық құқық қорғалған.`,
    },
  }
}

function isModelNotFound(error: unknown) {
  const message = String((error as any)?.message || error)
  return (
    message.includes('404') ||
    message.toLowerCase().includes('not found') ||
    message.toLowerCase().includes('not supported for generatecontent')
  )
}

function buildMockResponse(state: ChatState, body: ChatRequest) {
  const latestUser = body.messages[body.messages.length - 1]?.content || ''
  const normalized = latestUser.toLowerCase()
  const brief =
    (state.brief as any) || {
      businessName: latestUser.trim() ? latestUser.trim().slice(0, 60) : 'Demo бизнес',
      targetAudience: 'Клиенттер',
      services: ['Лендинг', 'AI автоматизация', 'Чат-бот/CRM'],
      uniqueSellingPoints: ['Жылдам delivery', 'AI-first', 'Нақты нәтиже'],
      cta: { label: 'Өтінім қалдыру', href: '#lead' },
      language: 'KZ',
    }

  if (state.step === 'collecting') {
    return {
      terminal: true,
      response: {
        assistantMessage: 'Керемет! Енді стиль таңдаңыз.',
        nextState: { step: 'style', brief },
        briefComplete: true,
        styles: STYLE_CHOICES,
      },
    }
  }

  if (state.step === 'style') {
    const selected =
      (['minimalist_tech', 'bold_modern', 'clean_corporate'] as const).find((key) => normalized.includes(key)) ||
      undefined
    if (!selected) {
      return {
        terminal: true,
        response: {
          assistantMessage: 'Қай стильді таңдайсыз? Төменнен таңдаңыз.',
          nextState: { step: 'style', brief },
          styles: STYLE_CHOICES,
        },
      }
    }

    return {
      terminal: false,
      response: {
        assistantMessage: 'Жарайды! Генерация жасап жатырмын.',
        nextState: { step: 'generated', brief, styleKey: selected },
      },
    }
  }

  return {
    terminal: true,
    response: {
      assistantMessage: 'Кешіріңіз, түсінбедім. Қай стильді таңдайсыз?',
      nextState: { step: 'style', brief },
      styles: STYLE_CHOICES,
    },
  }
}

export async function POST(req: Request) {
  {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown'
    const r = rateLimit(`chat:${ip}`, 30, 60_000)
    if (!r.ok) {
      return NextResponse.json({ error: 'Rate limit. Try again in a minute.' }, { status: 429 })
    }
  }
  const useMock = process.env.MOCK_AI === 'true' || process.env.MOCK_AI === '1'
  const apiKey = getEnv('GEMINI_API_KEY')
  if (!useMock && !apiKey) {
    return NextResponse.json(
      { error: 'Missing GEMINI_API_KEY. Add it to .env.local (see .env.example).' },
      { status: 400 }
    )
  }

  let body: ChatRequest
  try {
    body = (await req.json()) as ChatRequest
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const state: ChatState = body?.state ?? { step: 'collecting' }
  if (!Array.isArray(body?.messages)) {
    return NextResponse.json({ error: 'Invalid request: messages must be an array' }, { status: 400 })
  }

  const mockResult = buildMockResponse(state, body)

  if (useMock) {
    if (mockResult.terminal) return NextResponse.json(mockResult.response)
  }

  let parsed: any | null = null
  const genAI = new GoogleGenerativeAI(apiKey as string)
  const modelName = (() => {
    const raw = process.env.GEMINI_MODEL?.trim()
    if (!raw) return 'gemini-1.5-flash'
    if (raw === 'gemini-1.5-flash-latest') return 'gemini-1.5-flash'
    if (raw === 'gemini-1.5-pro-latest') return 'gemini-1.5-pro'
    return raw
  })()
  const modelFallbacks = [
    modelName,
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-1.5-flash-8b',
    'gemini-1.0-pro',
    'gemini-pro',
  ].filter(Boolean)

  async function generateWithFallback(options: { instruction: string; temperature: number }) {
    let lastError: unknown = null
    for (const name of modelFallbacks) {
      try {
        const model = genAI.getGenerativeModel({
          model: name,
          generationConfig: {
            temperature: options.temperature,
            responseMimeType: 'application/json',
          },
        })
        const result = await model.generateContent(options.instruction)
        return { text: result.response.text(), model: name }
      } catch (e) {
        lastError = e
        if (!isModelNotFound(e)) {
          throw e
        }
      }
    }
    throw lastError
  }

  const system: ChatMessage = {
    role: 'system',
    content:
      'You are an AI product assistant for generating a landing page. ' +
      'You must ask strategic questions to collect: business name, target audience, services (list), unique selling points (list), and CTA (label + link). ' +
      'Once the brief is complete, offer 3 styles: Minimalist Tech, Bold Modern, Clean Corporate. ' +
      'Always respond in Kazakh (KZ). Keep questions short. '
  }

  const styleOptions =
    'Styles:\n' +
    '- minimalist_tech: Minimalist Tech (dark, glassy, tech)\n' +
    '- bold_modern: Bold Modern (high-contrast, loud accent)\n' +
    '- clean_corporate: Clean Corporate (light, calm, business)'

  const schemaInstruction =
    'Return a JSON object with shape:\n' +
    '{"assistantMessage": string, "nextState": {"step": "collecting"|"style"|"generated", "brief"?: object, "styleKey"?: string, "siteId"?: string}, "briefComplete"?: boolean, "styles"?: array}\n' +
    'Rules:\n' +
    '- If step=collecting: ask the next missing info; when complete set briefComplete=true and nextState.step="style" and include styles list.\n' +
    '- If step=style: user will choose styleKey; then set nextState.step="generated" and return nextState.styleKey.\n'

  const prompt: ChatMessage[] = [
    system,
    { role: 'system', content: `Current step: ${state.step}. Current brief: ${JSON.stringify(state.brief ?? {})}` },
    { role: 'system', content: styleOptions },
    { role: 'system', content: schemaInstruction },
    ...body.messages,
  ]

  if (!useMock) {
    let rawText = ''
    try {
      // Convert ChatMessage[] to a single instruction (simple + robust for v1)
      const transcript = prompt
        .filter((m) => m.role !== 'system')
        .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
        .join('\n')

      const instruction =
        `${system.content}\n\n` +
        `${styleOptions}\n\n` +
        `${schemaInstruction}\n\n` +
        `Conversation:\n${transcript}\n\n` +
        `Now output ONLY the JSON object described above.`

      const result = await generateWithFallback({ instruction, temperature: 0.4 })
      rawText = result.text
    } catch (e) {
      if (isModelNotFound(e)) {
        if (mockResult.terminal) return NextResponse.json(mockResult.response)
        parsed = mockResult.response
      } else {
        return NextResponse.json(
          { error: 'Gemini request failed', details: String((e as any)?.message || e) },
          { status: 500 }
        )
      }
    }

    if (!parsed) {
      const raw = rawText || '{}'
      try {
        parsed = JSON.parse(raw)
      } catch {
        return NextResponse.json({ error: 'Bad JSON from model', raw }, { status: 500 })
      }
    }
  } else {
    parsed = mockResult.response
  }

  // Validate/normalize brief if present
  if (parsed?.nextState?.brief) {
    const briefResult = SiteBriefSchema.safeParse(parsed.nextState.brief)
    if (briefResult.success) parsed.nextState.brief = briefResult.data
  }

  // If we reached generated with valid brief + styleKey, create SiteConfig and persist
  const maybeStyle = parsed?.nextState?.styleKey
  const maybeBrief = parsed?.nextState?.brief

  if (parsed?.nextState?.step === 'generated' && maybeStyle && maybeBrief) {
    const styleKeyResult = StyleKey.safeParse(maybeStyle)
    const briefResult = SiteBriefSchema.safeParse(maybeBrief)

    if (styleKeyResult.success && briefResult.success) {
      const styleKey = styleKeyResult.data
      const brief = briefResult.data
      const projectId = typeof body?.projectId === 'string' ? body.projectId : null

      let content: any = buildFallbackContent(brief)
      let layout = defaultLayoutForContent(content)
      if (!useMock) {
        try {
          const contentPrompt =
            'Generate landing page content in Kazakh (KZ). ' +
            'Return JSON with shape: { ' +
            '"hero": { "badge": string, "headline": string, "subheadline": string }, ' +
            '"stats"?: { "title": string, "items": [{ "label": string, "value": string }] }, ' +
            '"features": { "title": string, "items": [{ "title": string, "description": string }] }, ' +
            '"testimonials"?: { "title": string, "items": [{ "name": string, "role": string, "quote": string }] }, ' +
            '"faq"?: { "title": string, "items": [{ "q": string, "a": string }] }, ' +
            '"pricing": { "title": string, "plans": [{ "name": string, "price": string, "description": string, "bullets": [string], "highlighted": boolean }] }, ' +
            '"finalCta"?: { "title": string, "subtitle": string }, ' +
            '"footer": { "note": string } }.\n\n' +
            `Brief: ${JSON.stringify(brief)}\n` +
            `Style: ${styleKey}\n` +
            'Constraints: stats.items 2-4; features.items 3-6; testimonials.items 2-4; faq.items 3-6; pricing.plans 2-3; bullets 3-6; keep it concise.\n' +
            'Output JSON only.'

          const contentRes = await generateWithFallback({ instruction: contentPrompt, temperature: 0.6 })
          const contentRaw = contentRes.text || '{}'
          const contentJson = JSON.parse(contentRaw)
          const contentParsed = LandingContentSchema.safeParse(contentJson)
          if (contentParsed.success) {
            content = contentParsed.data
            layout = defaultLayoutForContent(content)
          }
        } catch {
          // Keep fallbackContent if Gemini content generation fails
        }
      }

      // Ask Gemini to design the layout (order + variants) using already-generated content keys
      if (!useMock) {
        try {
          const layoutPrompt =
            'You are a senior landing-page designer. Create a section layout plan for a landing page in Kazakh.\n' +
            'Return JSON ONLY with shape: { "sections": [{ "type": "hero"|"stats"|"features"|"pricing"|"testimonials"|"faq"|"lead"|"footer", "variant"?: string, "anchor"?: string }] }.\n' +
            'Rules:\n' +
            '- Use only the section types listed above.\n' +
            '- Include hero first and footer last.\n' +
            '- Use anchors for features/pricing/faq/lead when present.\n' +
            '- If content.stats/testimonials/faq is missing, do not include those sections.\n' +
            '- Choose variants to match styleKey (minimalist_tech/bold_modern/clean_corporate). Examples: hero: split|centered|minimal; features: grid|zigzag; pricing: cards|table; faq: accordion|cards.\n' +
            `styleKey: ${styleKey}\n` +
            `brief: ${JSON.stringify(brief)}\n` +
            `contentKeys: ${JSON.stringify({
              hasStats: Boolean(content?.stats),
              hasTestimonials: Boolean(content?.testimonials),
              hasFaq: Boolean(content?.faq),
            })}\n` +
            'Output JSON only.'

          const layoutRes = await generateWithFallback({ instruction: layoutPrompt, temperature: 0.2 })
          const layoutJson = JSON.parse(layoutRes.text || '{}')
          const layoutParsed = SiteLayoutSchema.safeParse(layoutJson)
          if (layoutParsed.success) {
            layout = layoutParsed.data
          }
        } catch {
          // keep default layout
        }
      }

      const config = {
        version: 1 as const,
        styleKey,
        tokens: tokensForStyle(styleKey),
        brief,
        content,
        layout,
      }

      const validated = SiteConfigSchema.safeParse(config)
      if (!validated.success) {
        return NextResponse.json({ error: 'Generated config failed validation', issues: validated.error.issues }, { status: 500 })
      }

      // Prefer authed (RLS) persistence into revisions when projectId is provided.
      // Fallback to the legacy `sites` insert (service role) for backward compatibility.
      const bearer = req.headers.get('authorization') || ''
      const token = bearer.match(/^Bearer\s+(.+)$/i)?.[1] || ''

      if (projectId && token) {
        const { supabaseServerWithAccessToken } = await import('@/lib/supabase')
        const supabase = supabaseServerWithAccessToken(token)
        const insertRes = await supabase
          .from('revisions')
          .insert({
            project_id: projectId,
            config: validated.data,
            style_key: styleKey,
          })
          .select('id')
          .single()

        if (insertRes.error) {
          return NextResponse.json({ error: 'Supabase insert failed', details: insertRes.error.message }, { status: 500 })
        }

        parsed.nextState.siteId = insertRes.data.id
        parsed.siteUrl = `/site/${insertRes.data.id}`

        // Fire-and-forget screenshot generation (best-effort)
        try {
          const baseUrl =
            process.env.NEXT_PUBLIC_SITE_URL ||
            (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : req.headers.get('origin')) ||
            ''
          if (baseUrl) {
            fetch(`${baseUrl}/api/screenshot`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ siteId: insertRes.data.id, view: 'desktop', kind: 'revision' }),
            }).catch(() => {})
            fetch(`${baseUrl}/api/screenshot`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ siteId: insertRes.data.id, view: 'mobile', kind: 'revision' }),
            }).catch(() => {})
          }
        } catch {
          // ignore
        }
      } else {
        const { supabaseServer } = await import('@/lib/supabase')
        let supabase: ReturnType<typeof supabaseServer> | null = null
        try {
          supabase = supabaseServer()
        } catch {
          supabase = null
        }

        if (supabase) {
          const insertRes = await supabase
            .from('sites')
            .insert({
              brief: brief,
              config: validated.data,
              style_key: styleKey,
            })
            .select('id')
            .single()

          if (insertRes.error) {
            return NextResponse.json({ error: 'Supabase insert failed', details: insertRes.error.message }, { status: 500 })
          }

          parsed.nextState.siteId = insertRes.data.id
          parsed.siteUrl = `/site/${insertRes.data.id}`
        } else {
          const { saveMockSite } = await import('@/lib/mockStore')
          const mockId = await saveMockSite(validated.data)
          parsed.nextState.siteId = mockId
          parsed.siteUrl = `/site/${mockId}`
        }
      }
    }
  }

  return NextResponse.json(parsed)
}
