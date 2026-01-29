'use client'

import { motion } from 'framer-motion'
import type { HeroContent, HeroVariant } from '@/lib/siteManifest'
import type { ThemeTokens } from '@/lib/styleProcessor'
import { MagneticButton, MagneticLink } from '@/hooks/useMagneticButton'
import { VisualPlaceholder } from '@/components/ui/VisualPlaceholder'
import * as Icons from 'lucide-react'

interface HeroProps {
  content: HeroContent
  variant?: HeroVariant
  tokens: ThemeTokens
  anchor?: string
  themePreset?: {
    id: string
    primary: string
    glow: string
    bgMesh: string
  }
}

export function Hero({ content, variant = 'centered', tokens, anchor, themePreset }: HeroProps) {
  const iconMap: Record<string, any> = {
    sparkles: Icons.Sparkles,
    zap: Icons.Zap,
    rocket: Icons.Rocket,
    star: Icons.Star,
    trophy: Icons.Trophy,
    target: Icons.Target,
  }

  const VisualIcon =
    content.visual?.type === 'icon' && content.visual.value
      ? iconMap[content.visual.value] || Icons.Sparkles
      : null
  const visualValue = content.visual?.value || ''
  const isImageUrl = content.visual?.type === 'image' && visualValue.startsWith('http')
  const fallbackKeyword = content.headline?.split(' ')[0]?.toLowerCase() || 'abstract'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  if (variant === 'split') {
    return (
      <section id={anchor} className={`${tokens.heroPadding} ${tokens.bg} relative overflow-hidden`}>
        {/* Background glow effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${tokens.accent.replace('bg-', '')} 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              {content.badge && (
                <motion.p
                  variants={itemVariants}
                  className={`inline-flex items-center gap-2 text-sm px-4 py-2 ${tokens.radiusPill} glass-2 gradient-border ${tokens.textMuted} relative overflow-hidden`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 animate-pulse" />
                  <span className="relative z-10">{content.badge}</span>
                </motion.p>
              )}
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-[-0.04em] gradient-text-45`}
                style={{ fontFamily: tokens.fontHeadingPremium }}
              >
                {content.headline}
              </h1>
              <p className={`text-lg sm:text-xl lg:text-2xl ${tokens.textMuted} leading-relaxed max-w-2xl`}>
                {content.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <MagneticLink
                  href={content.cta.href}
                  strength={0.2}
                  className={`px-6 py-3 ${tokens.radiusButton} font-semibold text-center text-white ${
                    themePreset
                      ? `bg-gradient-to-r ${themePreset.primary} ${themePreset.glow} shadow-lg`
                      : `${tokens.accent} ${tokens.accentText}`
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Icons.Sparkles className="w-4 h-4" />
                    {content.cta.primary}
                  </span>
                </MagneticLink>
                {content.cta.secondary && (
                  <MagneticLink
                    href="#features"
                    strength={0.2}
                    className={`px-6 py-3 ${tokens.radiusButton} ${tokens.surface} ${tokens.text} font-medium text-center`}
                  >
                    {content.cta.secondary}
                  </MagneticLink>
                )}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              {VisualIcon ? (
                <motion.div
                  className={`${tokens.radiusCard} ${tokens.surface} ${tokens.shadowGlass} p-16 flex items-center justify-center ${tokens.glow}`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <VisualIcon className="w-32 h-32 text-sky-400" />
                </motion.div>
              ) : isImageUrl ? (
                <motion.div
                  className={`${tokens.radiusCard} overflow-hidden ${tokens.shadowGlass} h-96`}
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={visualValue} alt={content.headline} className="w-full h-full object-cover" />
                </motion.div>
              ) : content.visual?.type === 'gradient' ? (
                <motion.div
                  className={`${tokens.radiusCard} h-96 ${tokens.bgGradient} ${tokens.glow} ${tokens.shadow}`}
                  style={{
                    background: content.visual.value,
                  }}
                  whileHover={{ scale: 1.02 }}
                />
              ) : (
                <VisualPlaceholder type="image" keyword={fallbackKeyword} className="h-96" />
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  if (variant === 'minimal') {
    return (
      <section id={anchor} className={`${tokens.heroPadding} ${tokens.bg}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {content.badge && (
              <motion.p
                variants={itemVariants}
                className={`inline-flex items-center gap-2 text-sm px-4 py-2 ${tokens.radiusPill} ${tokens.surface} ${tokens.textMuted}`}
              >
                {content.badge}
              </motion.p>
            )}
              <motion.h1
                variants={itemVariants}
                className={`text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-[-0.04em] gradient-text-45`}
                style={{ fontFamily: tokens.fontHeadingPremium }}
              >
                {content.headline}
              </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-xl sm:text-2xl ${tokens.textMuted} leading-relaxed max-w-2xl mx-auto`}
            >
              {content.subheadline}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <MagneticLink
                href={content.cta.href}
                strength={0.2}
                className={`px-8 py-4 ${tokens.radiusButton} font-semibold text-white ${
                  themePreset
                    ? `bg-gradient-to-r ${themePreset.primary} ${themePreset.glow} shadow-lg`
                    : `${tokens.accent} ${tokens.accentText}`
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <Icons.Sparkles className="w-4 h-4" />
                  {content.cta.primary}
                </span>
              </MagneticLink>
              {content.cta.secondary && (
                <MagneticLink
                  href="#features"
                  strength={0.2}
                  className={`px-8 py-4 ${tokens.radiusButton} ${tokens.surface} ${tokens.text} font-medium`}
                >
                  {content.cta.secondary}
                </MagneticLink>
              )}
            </motion.div>
            <motion.div
              variants={itemVariants}
              className={`mt-10 mx-auto max-w-3xl ${tokens.radiusCard} ${tokens.shadowGlass}`}
            >
              {isImageUrl ? (
                <img src={visualValue} alt={content.headline} className="w-full h-64 md:h-80 object-cover rounded-2xl" />
              ) : (
                <VisualPlaceholder type="image" keyword={fallbackKeyword} className="h-64 md:h-80" />
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  // Default: centered variant
  return (
    <section id={anchor} className={`${tokens.heroPadding} ${tokens.bg} relative overflow-hidden`}>
      {/* Background glow effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${tokens.accent.replace('bg-', '')} 0%, transparent 70%)`,
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {content.badge && (
            <motion.p
              variants={itemVariants}
              className={`inline-flex items-center gap-2 text-sm px-4 py-2 ${tokens.radiusPill} ${tokens.surface} ${tokens.shadowGlass} ${tokens.textMuted} backdrop-blur-sm`}
            >
              {content.badge}
            </motion.p>
          )}
          <motion.h1
            variants={itemVariants}
            className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.05] tracking-[-0.04em] gradient-text-45`}
            style={{ fontFamily: tokens.fontHeadingPremium }}
          >
            {content.headline}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className={`text-xl sm:text-2xl lg:text-3xl ${tokens.textMuted} leading-relaxed max-w-4xl mx-auto`}
          >
            {content.subheadline}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <MagneticLink
              href={content.cta.href}
              strength={0.2}
              className={`px-8 py-4 ${tokens.radiusButton} font-semibold text-white ${
                themePreset
                  ? `bg-gradient-to-r ${themePreset.primary} ${themePreset.glow} shadow-lg`
                  : `${tokens.accent} ${tokens.accentText}`
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <Icons.Sparkles className="w-4 h-4" />
                {content.cta.primary}
              </span>
            </MagneticLink>
            {content.cta.secondary && (
              <MagneticLink
                href="#features"
                strength={0.2}
                className={`px-8 py-4 ${tokens.radiusButton} ${tokens.surface} ${tokens.text} font-medium`}
              >
                {content.cta.secondary}
              </MagneticLink>
            )}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className={`mt-10 mx-auto max-w-4xl ${tokens.radiusCard} ${tokens.shadowGlass}`}
          >
            {isImageUrl ? (
              <img src={visualValue} alt={content.headline} className="w-full h-72 md:h-96 object-cover rounded-2xl" />
            ) : (
              <VisualPlaceholder type="image" keyword={fallbackKeyword} className="h-72 md:h-96" />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
