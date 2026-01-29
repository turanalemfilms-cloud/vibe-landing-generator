import type { SiteBrief } from './siteConfig'
import type { SiteManifest, ThemeKey, Section } from './siteManifest'
import { styleKeyToTheme } from './styleProcessor'

/**
 * Chat-to-Manifest Bridge
 * Extracts 5 key data points from user brief and structures them for SiteManifest generation
 */

export interface BriefDataPoints {
  valueProp: string // Main value proposition (headline/subheadline)
  visualVibe: ThemeKey // Mapped from styleKey
  targetAudience: string // From brief
  ctaGoal: string // From brief.cta
  colorPreference: string // Inferred or from brief
}

/**
 * Parse brief and extract 5 key data points
 */
export function parseBriefToManifest(
  brief: SiteBrief,
  styleKey: 'minimalist_tech' | 'bold_modern' | 'clean_corporate'
): BriefDataPoints {
  // 1. Value Prop - combine business name and USP
  const valueProp = `${brief.businessName}: ${brief.uniqueSellingPoints.join(', ')}`

  // 2. Visual Vibe - map styleKey to theme
  const visualVibe = styleKeyToTheme(styleKey)

  // 3. Target Audience - from brief
  const targetAudience = brief.targetAudience

  // 4. CTA Goal - from brief.cta
  const ctaGoal = brief.cta.label

  // 5. Color Preference - infer from styleKey
  const colorPreference = inferColorPreference(styleKey)

  return {
    valueProp,
    visualVibe,
    targetAudience,
    ctaGoal,
    colorPreference,
  }
}

/**
 * Infer color preference from styleKey
 */
function inferColorPreference(styleKey: string): string {
  switch (styleKey) {
    case 'minimalist_tech':
      return 'dark, purple accents'
    case 'bold_modern':
      return 'dark, vibrant colors (sky, fuchsia)'
    case 'clean_corporate':
      return 'light, blue accents'
    default:
      return 'neutral, professional'
  }
}

/**
 * Generate default sections for SiteManifest
 */
export function generateDefaultSections(hasSocialProof: boolean, hasTestimonials: boolean, hasFaq: boolean): Section[] {
  const sections: Section[] = [
    { id: 'hero-1', type: 'hero', variant: 'centered', anchor: 'top', order: 1 },
  ]

  if (hasSocialProof) {
    sections.push({ id: 'social-1', type: 'socialProof', anchor: 'social', order: 2, variant: undefined })
  }

  sections.push({ id: 'features-1', type: 'features', variant: 'grid', anchor: 'features', order: 3 })
  sections.push({ id: 'pricing-1', type: 'pricing', variant: 'cards', anchor: 'pricing', order: 4 })

  if (hasTestimonials) {
    sections.push({ id: 'testimonials-1', type: 'testimonials', variant: 'quotes', anchor: 'testimonials', order: 5 })
  }

  if (hasFaq) {
    sections.push({ id: 'faq-1', type: 'faq', variant: 'accordion', anchor: 'faq', order: 6 })
  }

  sections.push({ id: 'footer-1', type: 'footer', order: 7, variant: undefined })

  return sections
}

/**
 * AIDA Framework helper
 * Structures content generation prompts using AIDA (Attention, Interest, Desire, Action)
 */
export function getAIDAPrompt(dataPoints: BriefDataPoints): string {
  return `
Generate landing page content using AIDA framework:

ATTENTION (Hero):
- Headline: Powerful, benefit-focused, 6-12 words
- Subheadline: Clear value proposition, 15-25 words
- Badge: Short, punchy tagline

INTEREST (Features):
- 3-6 feature items
- Each: title (3-6 words), description (10-20 words)
- Focus on benefits, not features

DESIRE (Social Proof, Testimonials):
- Stats/metrics: 2-4 items with impressive numbers
- Testimonials: 2-4 authentic quotes with specific results

ACTION (Pricing, CTA):
- Pricing: 2-3 plans with clear value
- CTA: Action-oriented, creates urgency

Context:
- Business: ${dataPoints.valueProp}
- Audience: ${dataPoints.targetAudience}
- Theme: ${dataPoints.visualVibe}
- Colors: ${dataPoints.colorPreference}
`
}
