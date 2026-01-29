import type { TestimonialsContent } from '@/lib/siteManifest'
import type { ThemeKey } from '@/lib/siteManifest'

/**
 * Testimonials Bento Engine - Generates asymmetrical layouts for testimonials
 */

export interface TestimonialsBentoLayout {
  gridTemplateColumns: string
  gridTemplateRows: string
  gridTemplateAreas: string
  items: Array<{
    area: string
    item: TestimonialsContent['items'][0]
    span?: { col?: number; row?: number }
  }>
}

export function generateTestimonialsBentoLayout(
  testimonials: TestimonialsContent['items'],
  theme: ThemeKey
): TestimonialsBentoLayout {
  const count = testimonials.length

  // For 2 testimonials: Split layout
  if (count === 2) {
    return {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: '1fr',
      gridTemplateAreas: `
        "a b"
      `,
      items: [
        { area: 'a', item: testimonials[0] },
        { area: 'b', item: testimonials[1] },
      ],
    }
  }

  // For 3 testimonials: Large + 2 small
  if (count === 3) {
    return {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      gridTemplateAreas: `
        "a a b"
        "a a c"
      `,
      items: [
        { area: 'a', item: testimonials[0], span: { col: 2, row: 2 } },
        { area: 'b', item: testimonials[1] },
        { area: 'c', item: testimonials[2] },
      ],
    }
  }

  // For 4 testimonials: Mixed sizes
  if (count === 4) {
    return {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      gridTemplateAreas: `
        "a a b c"
        "a a d e"
      `,
      items: [
        { area: 'a', item: testimonials[0], span: { col: 2, row: 2 } },
        { area: 'b', item: testimonials[1] },
        { area: 'c', item: testimonials[2] },
        { area: 'd', item: testimonials[3] },
        { area: 'e', item: testimonials[0] }, // Placeholder
      ],
    }
  }

  // For 5+ testimonials: Complex asymmetrical
  if (count >= 5) {
    return {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      gridTemplateAreas: `
        "a a b c"
        "a a d e"
        "f g h i"
      `,
      items: [
        { area: 'a', item: testimonials[0], span: { col: 2, row: 2 } },
        { area: 'b', item: testimonials[1] },
        { area: 'c', item: testimonials[2] },
        { area: 'd', item: testimonials[3] },
        { area: 'e', item: testimonials[4] },
        { area: 'f', item: testimonials[0] }, // Placeholders
        { area: 'g', item: testimonials[1] },
        { area: 'h', item: testimonials[2] },
        { area: 'i', item: testimonials[3] },
      ],
    }
  }

  // Fallback: simple grid
  return {
    gridTemplateColumns: `repeat(${Math.min(count, 3)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.ceil(count / Math.min(count, 3))}, 1fr)`,
    gridTemplateAreas: '',
    items: testimonials.map((item, idx) => ({
      area: String.fromCharCode(97 + idx),
      item,
    })),
  }
}
