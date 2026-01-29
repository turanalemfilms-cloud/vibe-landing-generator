import type { FeatureItem } from '@/lib/siteManifest'
import type { ThemeKey } from '@/lib/siteManifest'

/**
 * Bento Engine - Generates asymmetrical CSS Grid layouts
 * Creates visually interesting, responsive layouts based on feature count
 */

export interface BentoLayout {
  gridTemplateColumns: string
  gridTemplateRows: string
  gridTemplateAreas: string
  items: Array<{
    area: string
    item: FeatureItem
    span?: { col?: number; row?: number }
  }>
}

export function generateBentoLayout(
  features: FeatureItem[],
  theme: ThemeKey
): BentoLayout {
  const count = features.length

  // Context-Aware Bento Grid 2.0 - High-impact items get col-span-2
  // For 3 features: Large primary (col-span-2) + 2 smaller
  if (count === 3) {
    return {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      gridTemplateAreas: `
        "a a a b"
        "a a a c"
        "a a a c"
      `,
      items: [
        { area: 'a', item: features[0], span: { col: 3, row: 3 }, aspect: 'square' },
        { area: 'b', item: features[1], span: { col: 1 }, aspect: 'square' },
        { area: 'c', item: features[2], span: { row: 2 }, aspect: 'video' },
      ],
    }
  }

  // For 4 features: Mixed sizes - High-impact gets col-span-2
  if (count === 4) {
    return {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      gridTemplateAreas: `
        "a a b b"
        "a a c d"
        "e e c d"
      `,
      items: [
        { area: 'a', item: features[0], span: { col: 2, row: 2 }, aspect: 'square' },
        { area: 'b', item: features[1], span: { col: 2 }, aspect: 'video' },
        { area: 'c', item: features[2], span: { row: 2 }, aspect: 'square' },
        { area: 'd', item: features[3], span: { row: 2 }, aspect: 'square' },
        { area: 'e', item: features[0], span: { col: 2 }, aspect: 'auto' }, // Duplicate for layout
      ],
    }
  }

  // For 5 features: Complex asymmetrical
  if (count === 5) {
    return {
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: 'repeat(4, 1fr)',
      gridTemplateAreas: `
        "a a a b c"
        "a a a d e"
        "a a a d e"
        "f f f d e"
      `,
      items: [
        { area: 'a', item: features[0], span: { col: 3, row: 2 } },
        { area: 'b', item: features[1] },
        { area: 'c', item: features[2] },
        { area: 'd', item: features[3], span: { row: 3 } },
        { area: 'e', item: features[4], span: { row: 3 } },
        { area: 'f', item: features[0], span: { col: 3 } }, // Placeholder
      ],
    }
  }

  // For 6 features: Advanced Bento
  if (count === 6) {
    return {
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridTemplateRows: 'repeat(4, 1fr)',
      gridTemplateAreas: `
        "a a a b c d"
        "a a a e f g"
        "h i j e f g"
        "k l m e f g"
      `,
      items: [
        { area: 'a', item: features[0], span: { col: 3, row: 2 } },
        { area: 'b', item: features[1] },
        { area: 'c', item: features[2] },
        { area: 'd', item: features[3] },
        { area: 'e', item: features[4], span: { row: 3 } },
        { area: 'f', item: features[5], span: { row: 3 } },
        { area: 'g', item: features[0], span: { row: 3 } }, // Placeholder
        { area: 'h', item: features[1] },
        { area: 'i', item: features[2] },
        { area: 'j', item: features[3] },
        { area: 'k', item: features[4] },
        { area: 'l', item: features[5] },
        { area: 'm', item: features[0] }, // Placeholder
      ],
    }
  }

  // Fallback: simple grid for other counts
  const cols = count <= 2 ? count : 3
  const rows = Math.ceil(count / cols)

  return {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateAreas: '',
    items: features.map((item, idx) => ({
      area: String.fromCharCode(97 + idx), // a, b, c, ...
      item,
    })),
  }
}
