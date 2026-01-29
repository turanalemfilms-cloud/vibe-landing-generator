import { z } from 'zod'

/**
 * SiteManifest - High-level design specification
 * This is the "blueprint" that the Renderer interprets to build pixel-perfect landing pages
 */

export const ThemeKeySchema = z.enum(['ios_spatial', 'saas_dark', 'minimal_zen'])
export type ThemeKey = z.infer<typeof ThemeKeySchema>

export const LayoutTypeSchema = z.enum(['bento', 'standard', 'magazine', 'split'])
export type LayoutType = z.infer<typeof LayoutTypeSchema>

// Atomic component variants
export const HeroVariantSchema = z.enum(['centered', 'split', 'minimal', 'video'])
export const FeatureVariantSchema = z.enum(['grid', 'zigzag', 'bento', 'list'])
export const PricingVariantSchema = z.enum(['cards', 'table', 'compare', 'tiered'])
export const TestimonialVariantSchema = z.enum(['quotes', 'cards', 'marquee', 'grid'])
export const FAQVariantSchema = z.enum(['accordion', 'cards', 'minimal'])

// Content schemas
export const HeroContentSchema = z.object({
  badge: z.string().optional(),
  headline: z.string(),
  subheadline: z.string(),
  cta: z.object({
    primary: z.string(),
    secondary: z.string().optional(),
    href: z.string(),
  }),
  visual: z
    .object({
      type: z.enum(['icon', 'svg', 'gradient', 'image']),
      value: z.string(), // icon name, SVG string, gradient config, or image URL
    })
    .optional(),
})

export const SocialProofSchema = z.object({
  title: z.string().optional(),
  items: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      icon: z.string().optional(), // lucide-react icon name
    })
  ),
})

export const FeatureItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(), // lucide-react icon name
  highlight: z.boolean().optional(),
})

export const FeaturesContentSchema = z.object({
  title: z.string(),
  items: z.array(FeatureItemSchema),
})

export const PricingPlanSchema = z.object({
  name: z.string(),
  price: z.string(),
  period: z.string().optional(), // "/month", "/year", etc.
  description: z.string().optional(),
  bullets: z.array(z.string()),
  highlighted: z.boolean().optional(),
  cta: z.string().optional(),
})

export const PricingContentSchema = z.object({
  title: z.string(),
  plans: z.array(PricingPlanSchema),
})

export const TestimonialSchema = z.object({
  name: z.string(),
  role: z.string(),
  quote: z.string(),
  avatar: z.string().optional(),
  rating: z.number().min(0).max(5).optional(),
})

export const TestimonialsContentSchema = z.object({
  title: z.string(),
  items: z.array(TestimonialSchema),
})

export const FAQItemSchema = z.object({
  q: z.string(),
  a: z.string(),
})

export const FAQContentSchema = z.object({
  title: z.string(),
  items: z.array(FAQItemSchema),
})

export const FooterContentSchema = z.object({
  note: z.string().optional(),
  links: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    )
    .optional(),
})

// Section definition
export const SectionSchema = z.object({
  id: z.string(),
  type: z.enum(['hero', 'socialProof', 'features', 'pricing', 'testimonials', 'faq', 'footer']),
  variant: z.union([HeroVariantSchema, FeatureVariantSchema, PricingVariantSchema, TestimonialVariantSchema, FAQVariantSchema]).optional(),
  anchor: z.string().optional(),
  order: z.number(),
})

// SiteManifest - the complete blueprint
export const SiteManifestSchema = z.object({
  version: z.literal(2), // v2 = new architecture
  theme: ThemeKeySchema,
  layout: LayoutTypeSchema,
  sections: z.array(SectionSchema),
  content: z.object({
    hero: HeroContentSchema,
    socialProof: SocialProofSchema.optional(),
    features: FeaturesContentSchema.optional(),
    pricing: PricingContentSchema.optional(),
    testimonials: TestimonialsContentSchema.optional(),
    faq: FAQContentSchema.optional(),
    footer: FooterContentSchema.optional(),
  }),
  meta: z.object({
    businessName: z.string(),
    language: z.string().default('KZ'),
    colorPreference: z.string().optional(),
    themeId: z.string().optional(), // Theme preset ID (cosmic_void, sunset_blaze, etc.)
    themePreset: z
      .object({
        id: z.string(),
        primary: z.string(), // Tailwind gradient classes
        glow: z.string(),
        bgMesh: z.string(),
      })
      .optional(),
  }),
})

export type SiteManifest = z.infer<typeof SiteManifestSchema>
export type HeroContent = z.infer<typeof HeroContentSchema>
export type SocialProof = z.infer<typeof SocialProofSchema>
export type FeaturesContent = z.infer<typeof FeaturesContentSchema>
export type PricingContent = z.infer<typeof PricingContentSchema>
export type TestimonialsContent = z.infer<typeof TestimonialsContentSchema>
export type FAQContent = z.infer<typeof FAQContentSchema>
export type FooterContent = z.infer<typeof FooterContentSchema>
export type Section = z.infer<typeof SectionSchema>
