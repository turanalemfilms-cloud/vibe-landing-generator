/**
 * Theme Presets - High-end color vibes for landing pages
 * Each preset includes gradients, glows, and mesh backgrounds
 */

export interface ThemePreset {
  id: string
  name: string
  nameKZ: string
  primary: string // Tailwind gradient classes
  glow: string // Shadow glow class
  bgMesh: string // Background mesh gradient
  description: string
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'cosmic_void',
    name: 'Cosmic Void',
    nameKZ: 'Ғарыштық Бос',
    primary: 'from-violet-600 to-fuchsia-500',
    glow: 'shadow-fuchsia-500/20',
    bgMesh: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black',
    description: 'Purple/Pink cosmic aesthetic',
  },
  {
    id: 'sunset_blaze',
    name: 'Sunset Blaze',
    nameKZ: 'Күнбатыс Жалыны',
    primary: 'from-orange-500 via-amber-500 to-yellow-400',
    glow: 'shadow-orange-500/20',
    bgMesh: 'bg-gradient-to-b from-orange-900/20 via-black to-black',
    description: 'Warm orange/peach sunset vibes',
  },
  {
    id: 'oceanic_depth',
    name: 'Oceanic Depth',
    nameKZ: 'Мұхит Тереңдігі',
    primary: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/20',
    bgMesh: 'bg-gradient-to-b from-blue-900/20 via-black to-black',
    description: 'Cool blue/cyan oceanic feel',
  },
  {
    id: 'neo_mint',
    name: 'Neo-Mint',
    nameKZ: 'Нео-Жасыл',
    primary: 'from-emerald-400 to-cyan-400',
    glow: 'shadow-emerald-500/20',
    bgMesh: 'bg-gradient-to-b from-emerald-900/20 via-black to-black',
    description: 'Fresh green/tech aesthetic',
  },
  {
    id: 'obsidian_luxury',
    name: 'Obsidian Luxury',
    nameKZ: 'Обсидиан Сыпайылығы',
    primary: 'from-white via-slate-200 to-slate-400',
    glow: 'shadow-white/10',
    bgMesh: 'bg-gradient-to-b from-slate-800/20 via-black to-black',
    description: 'Monochrome luxury elegance',
  },
]

export function getThemePreset(id: string): ThemePreset | undefined {
  return THEME_PRESETS.find((preset) => preset.id === id)
}
