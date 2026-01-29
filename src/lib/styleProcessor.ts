import type { ThemeKey } from './siteManifest'

/**
 * Style Processor - Maps theme keys to Tailwind token classes
 * Provides consistent design system tokens for each theme
 */

export interface ThemeTokens {
  // Typography
  fontHeading: string
  fontHeadingPremium: string // Premium heading font (Outfit/Sora)
  fontBody: string
  fontMono: string

  // Backgrounds
  bg: string
  bgGradient: string
  surface: string
  surfaceHover: string

  // Text colors
  text: string
  textMuted: string
  textInverse: string

  // Borders
  border: string
  borderHover: string

  // Accents
  accent: string
  accentText: string
  accentHover: string
  accentRing: string

  // Radius
  radiusCard: string
  radiusCardSm: string
  radiusButton: string
  radiusPill: string

  // Spacing
  heroPadding: string
  sectionPadding: string

  // Effects
  shadow: string
  shadowGlass: string
  backdropBlur: string

  // Special effects
  glow: string
  maskFade: string
}

export function getThemeTokens(theme: ThemeKey): ThemeTokens {
  switch (theme) {
    case 'ios_spatial':
      return {
        fontHeading: 'var(--font-space)',
        fontHeadingPremium: 'var(--font-outfit)',
        fontBody: 'var(--font-geist-sans)',
        fontMono: 'var(--font-geist-mono)',
        bg: 'bg-[#050505]',
        bgGradient: 'bg-gradient-to-br from-indigo-950/20 via-purple-950/30 to-violet-950/20',
        surface: 'bg-white/5 backdrop-blur-xl border border-white/10',
        surfaceHover: 'bg-white/10 backdrop-blur-xl border border-white/20',
        text: 'text-white',
        textMuted: 'text-white/70',
        textInverse: 'text-slate-950',
        border: 'border-white/20',
        borderHover: 'border-white/30',
        accent: 'bg-sky-400',
        accentText: 'text-slate-950',
        accentHover: 'bg-sky-300',
        accentRing: 'ring-2 ring-sky-400/40',
        radiusCard: 'rounded-3xl',
        radiusCardSm: 'rounded-2xl',
        radiusButton: 'rounded-2xl',
        radiusPill: 'rounded-full',
        heroPadding: 'px-4 pt-20 pb-16 sm:px-6 lg:px-8',
        sectionPadding: 'px-4 py-16 sm:px-6 lg:px-8 lg:py-24',
        shadow: 'shadow-[0_20px_60px_rgba(0,0,0,0.5)]',
        shadowGlass: 'shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl',
        backdropBlur: 'backdrop-blur-xl',
        glow: 'shadow-[0_0_40px_rgba(56,189,248,0.3)]',
        maskFade: 'mask-image: linear-gradient(to bottom, black 80%, transparent 100%)',
      }

    case 'saas_dark':
      return {
        fontHeading: 'var(--font-syne)',
        fontHeadingPremium: 'var(--font-sora)',
        fontBody: 'var(--font-geist-sans)',
        fontMono: 'var(--font-geist-mono)',
        bg: 'bg-[#050505]',
        bgGradient: 'bg-gradient-to-br from-indigo-950/30 via-purple-950/40 to-violet-950/30',
        surface: 'bg-white/5 backdrop-blur-xl border border-white/10',
        surfaceHover: 'bg-white/10 backdrop-blur-xl border border-white/20',
        text: 'text-slate-100',
        textMuted: 'text-slate-400',
        textInverse: 'text-white',
        border: 'border-slate-800',
        borderHover: 'border-slate-700',
        accent: 'bg-purple-500',
        accentText: 'text-white',
        accentHover: 'bg-purple-600',
        accentRing: 'ring-2 ring-purple-500/40',
        radiusCard: 'rounded-2xl',
        radiusCardSm: 'rounded-xl',
        radiusButton: 'rounded-xl',
        radiusPill: 'rounded-full',
        heroPadding: 'px-4 pt-20 pb-16 sm:px-6 lg:px-8',
        sectionPadding: 'px-4 py-16 sm:px-6 lg:px-8 lg:py-24',
        shadow: 'shadow-[0_25px_70px_rgba(0,0,0,0.6)]',
        shadowGlass: 'shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl',
        backdropBlur: 'backdrop-blur-xl',
        glow: 'shadow-[0_0_40px_rgba(168,85,247,0.4)]',
        maskFade: 'mask-image: linear-gradient(to bottom, black 85%, transparent 100%)',
      }

    case 'minimal_zen':
      return {
        fontHeading: 'var(--font-manrope)',
        fontHeadingPremium: 'var(--font-outfit)',
        fontBody: 'var(--font-geist-sans)',
        fontMono: 'var(--font-geist-mono)',
        bg: 'bg-gradient-to-b from-slate-50 to-white',
        bgGradient: 'bg-gradient-to-br from-slate-50 via-white to-slate-50',
        surface: 'bg-white border border-slate-200',
        surfaceHover: 'bg-slate-50 border border-slate-300',
        text: 'text-slate-900',
        textMuted: 'text-slate-600',
        textInverse: 'text-white',
        border: 'border-slate-200',
        borderHover: 'border-slate-300',
        accent: 'bg-blue-600',
        accentText: 'text-white',
        accentHover: 'bg-blue-700',
        accentRing: 'ring-2 ring-blue-500/30',
        radiusCard: 'rounded-2xl',
        radiusCardSm: 'rounded-xl',
        radiusButton: 'rounded-xl',
        radiusPill: 'rounded-full',
        heroPadding: 'px-4 pt-20 pb-16 sm:px-6 lg:px-8 max-w-4xl mx-auto',
        sectionPadding: 'px-4 py-16 sm:px-6 lg:px-8 lg:py-24 max-w-4xl mx-auto',
        shadow: 'shadow-[0_8px_24px_rgba(15,23,42,0.08)]',
        shadowGlass: 'shadow-[0_4px_16px_rgba(15,23,42,0.06)]',
        backdropBlur: 'backdrop-blur-sm',
        glow: 'shadow-[0_0_30px_rgba(37,99,235,0.2)]',
        maskFade: 'mask-image: linear-gradient(to bottom, black 90%, transparent 100%)',
      }
  }
}

/**
 * Map legacy styleKey to new theme
 */
export function styleKeyToTheme(styleKey: 'minimalist_tech' | 'bold_modern' | 'clean_corporate'): ThemeKey {
  switch (styleKey) {
    case 'minimalist_tech':
      return 'saas_dark'
    case 'bold_modern':
      return 'ios_spatial'
    case 'clean_corporate':
      return 'minimal_zen'
  }
}
