import { z } from 'zod'

export const StyleKey = z.enum(['minimalist_tech', 'bold_modern', 'clean_corporate'])
export type StyleKey = z.infer<typeof StyleKey>

export const SiteBriefSchema = z.object({
  businessName: z.string().min(1),
  targetAudience: z.string().min(1),
  services: z.array(z.string().min(1)).min(1),
  uniqueSellingPoints: z.array(z.string().min(1)).min(1),
  cta: z
    .object({
      label: z.string().min(1),
      href: z.string().min(1),
    })
    .default({ label: 'Өтінім қалдыру', href: '#lead' }),
  language: z.literal('KZ').default('KZ'),
})
export type SiteBrief = z.infer<typeof SiteBriefSchema>

export const TailwindStyleTokensSchema = z.object({
  fontHeading: z.string().min(1),
  fontBody: z.string().min(1),
  bg: z.string().min(1),
  card: z.string().min(1),
  text: z.string().min(1),
  muted: z.string().min(1),
  border: z.string().min(1),
  accent: z.string().min(1),
  accentText: z.string().min(1),
  accentRing: z.string().min(1),
  radiusCard: z.string().min(1),
  radiusCardSm: z.string().min(1),
  radiusButton: z.string().min(1),
  radiusPill: z.string().min(1),
  heroPadding: z.string().min(1),
  sectionPadding: z.string().min(1),
})
export type TailwindStyleTokens = z.infer<typeof TailwindStyleTokensSchema>

export const BrandTokensSchema = z.object({
  brandName: z.string().min(1),
  colors: z.object({
    // iOS 26-style system colors (light mode)
    light: z.object({
      bg: z.string().min(1), // hex
      surface: z.string().min(1),
      text: z.string().min(1),
      muted: z.string().min(1),
      border: z.string().min(1),
      primary: z.string().min(1), // iOS system color (Blue/Green/Orange/Red/Purple/Pink)
      primaryText: z.string().min(1),
      accent: z.string().min(1),
      secondary: z.string().optional(), // iOS secondary color
    }),
    // iOS 26-style system colors (dark mode)
    dark: z.object({
      bg: z.string().min(1),
      surface: z.string().min(1),
      text: z.string().min(1),
      muted: z.string().min(1),
      border: z.string().min(1),
      primary: z.string().min(1),
      primaryText: z.string().min(1),
      accent: z.string().min(1),
      secondary: z.string().optional(),
    }),
  }),
  typography: z.object({
    heading: z.enum(['space', 'syne', 'manrope']),
    body: z.enum(['inter', 'manrope']),
  }),
  radius: z.object({
    card: z.enum(['xl', '2xl', '3xl']),
    button: z.enum(['xl', '2xl']),
  }),
  assets: z
    .object({
      heroBgSvg: z.string().min(1),
    })
    .optional(),
})
export type BrandTokens = z.infer<typeof BrandTokensSchema>

// iOS 26 system color palette (vibrant, saturated)
export const iOS26SystemColors = {
  blue: { light: '#007AFF', dark: '#0A84FF' },
  green: { light: '#34C759', dark: '#30D158' },
  orange: { light: '#FF9500', dark: '#FF9F0A' },
  red: { light: '#FF3B30', dark: '#FF453A' },
  purple: { light: '#AF52DE', dark: '#BF5AF2' },
  pink: { light: '#FF2D55', dark: '#FF375F' },
  yellow: { light: '#FFCC00', dark: '#FFD60A' },
  indigo: { light: '#5856D6', dark: '#5E5CE6' },
  teal: { light: '#5AC8FA', dark: '#64D2FF' },
  mint: { light: '#00C7BE', dark: '#66EFE5' },
} as const

export type iOS26SystemColorName = keyof typeof iOS26SystemColors

export const LandingContentSchema = z.object({
  hero: z.object({
    badge: z.string().min(1),
    headline: z.string().min(1),
    subheadline: z.string().min(1),
  }),
  stats: z
    .object({
      title: z.string().min(1),
      items: z.array(z.object({ label: z.string().min(1), value: z.string().min(1) })).min(2).max(4),
    })
    .optional(),
  features: z.object({
    title: z.string().min(1),
    items: z.array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      })
    ).min(3).max(6),
  }),
  testimonials: z
    .object({
      title: z.string().min(1),
      items: z
        .array(
          z.object({
            name: z.string().min(1),
            role: z.string().min(1),
            quote: z.string().min(1),
          })
        )
        .min(2)
        .max(4),
    })
    .optional(),
  faq: z
    .object({
      title: z.string().min(1),
      items: z.array(z.object({ q: z.string().min(1), a: z.string().min(1) })).min(3).max(6),
    })
    .optional(),
  pricing: z.object({
    title: z.string().min(1),
    plans: z.array(
      z.object({
        name: z.string().min(1),
        price: z.string().min(1),
        description: z.string().min(1),
        bullets: z.array(z.string().min(1)).min(3).max(8),
        highlighted: z.boolean().default(false),
      })
    ).min(2).max(3),
  }),
  finalCta: z
    .object({
      title: z.string().min(1),
      subtitle: z.string().min(1),
    })
    .optional(),
  footer: z.object({
    note: z.string().min(1),
  }),
})
export type LandingContent = z.infer<typeof LandingContentSchema>

export const SectionType = z.enum([
  'hero',
  'stats',
  'features',
  'pricing',
  'testimonials',
  'faq',
  'lead',
  'footer',
])
export type SectionType = z.infer<typeof SectionType>

export const SiteLayoutSectionSchema = z.object({
  type: SectionType,
  variant: z.string().min(1).optional(),
  anchor: z.string().min(1).optional(),
})
export type SiteLayoutSection = z.infer<typeof SiteLayoutSectionSchema>

export const SiteLayoutSchema = z.object({
  sections: z.array(SiteLayoutSectionSchema).min(3).max(12),
})
export type SiteLayout = z.infer<typeof SiteLayoutSchema>

export const FreeformHtmlSchema = z.object({
  html: z.string().min(1), // Full HTML (sanitized)
  css: z.string().min(1).optional(), // Optional separate CSS
  js: z.string().optional(), // Optional JS (sanitized, no eval/Function)
})
export type FreeformHtml = z.infer<typeof FreeformHtmlSchema>

export const SiteConfigSchema = z.object({
  version: z.literal(1),
  styleKey: StyleKey,
  tokens: TailwindStyleTokensSchema,
  brand: BrandTokensSchema.optional(),
  brief: SiteBriefSchema,
  content: LandingContentSchema,
  layout: SiteLayoutSchema.optional(),
  freeform: FreeformHtmlSchema.optional(), // Free-form HTML/CSS/JS (Cursor-like)
})
export type SiteConfig = z.infer<typeof SiteConfigSchema>

export function defaultLayoutForContent(content: LandingContent): SiteLayout {
  const sections: SiteLayoutSection[] = [
    { type: 'hero', variant: 'split', anchor: 'top' },
  ]
  if (content.stats) sections.push({ type: 'stats', variant: 'cards' })
  sections.push({ type: 'features', variant: 'grid', anchor: 'features' })
  sections.push({ type: 'pricing', variant: 'cards', anchor: 'pricing' })
  if (content.testimonials) sections.push({ type: 'testimonials', variant: 'quotes' })
  if (content.faq) sections.push({ type: 'faq', variant: 'accordion', anchor: 'faq' })
  sections.push({ type: 'lead', variant: 'form', anchor: 'lead' })
  sections.push({ type: 'footer', variant: 'simple' })
  return { sections }
}

export function tokensForStyle(styleKey: StyleKey): TailwindStyleTokens {
  switch (styleKey) {
    case 'minimalist_tech':
      return {
        fontHeading: 'var(--font-space)',
        fontBody: 'var(--font-inter)',
        bg: 'bg-gradient-to-b from-slate-950 via-slate-950 to-black',
        card: 'bg-white/5 backdrop-blur border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]',
        text: 'text-white',
        muted: 'text-white/70',
        border: 'border-white/10',
        accent: 'bg-sky-400',
        accentText: 'text-slate-950',
        accentRing: 'ring-2 ring-sky-400/40',
        radiusCard: 'rounded-3xl',
        radiusCardSm: 'rounded-2xl',
        radiusButton: 'rounded-xl',
        radiusPill: 'rounded-full',
        heroPadding: 'px-4 pt-14 pb-10',
        sectionPadding: 'px-4 py-10',
      }
    case 'bold_modern':
      return {
        fontHeading: 'var(--font-syne)',
        fontBody: 'var(--font-inter)',
        bg: 'bg-gradient-to-b from-black via-zinc-950 to-slate-900',
        card: 'bg-white/5 border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.5)]',
        text: 'text-white',
        muted: 'text-white/70',
        border: 'border-white/10',
        accent: 'bg-fuchsia-500',
        accentText: 'text-white',
        accentRing: 'ring-2 ring-fuchsia-500/40',
        radiusCard: 'rounded-[28px]',
        radiusCardSm: 'rounded-2xl',
        radiusButton: 'rounded-2xl',
        radiusPill: 'rounded-full',
        heroPadding: 'px-4 pt-16 pb-10',
        sectionPadding: 'px-4 py-10',
      }
    case 'clean_corporate':
      return {
        fontHeading: 'var(--font-manrope)',
        fontBody: 'var(--font-inter)',
        bg: 'bg-gradient-to-b from-slate-50 to-white',
        card: 'bg-white border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.08)]',
        text: 'text-slate-900',
        muted: 'text-slate-600',
        border: 'border-slate-200',
        accent: 'bg-blue-600',
        accentText: 'text-white',
        accentRing: 'ring-2 ring-blue-500/30',
        radiusCard: 'rounded-3xl',
        radiusCardSm: 'rounded-xl',
        radiusButton: 'rounded-xl',
        radiusPill: 'rounded-full',
        heroPadding: 'px-4 pt-14 pb-10',
        sectionPadding: 'px-4 py-10',
      }
  }
}
