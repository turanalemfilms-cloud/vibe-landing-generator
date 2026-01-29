'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import type { SiteManifest, Section } from '@/lib/siteManifest'
import { getThemeTokens } from '@/lib/styleProcessor'
import { Hero } from './atomic/Hero'
import { SocialProofComponent } from './atomic/SocialProof'
import { FeatureGrid } from './atomic/FeatureGrid'
import { Pricing } from './atomic/Pricing'
import { Testimonials } from './atomic/Testimonials'
import { FAQ } from './atomic/FAQ'
import { Footer } from './atomic/Footer'
import { GlowOrb } from './ui/GlowOrb'

interface RendererProps {
  manifest: SiteManifest
}

export function Renderer({ manifest }: RendererProps) {
  const tokens = getThemeTokens(manifest.theme)
  const [isDark, setIsDark] = useState<boolean | null>(null)
  const themePreset = manifest.meta.themePreset

  useEffect(() => {
    if (isDark === null) {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark' || stored === 'light') {
        setIsDark(stored === 'dark')
      } else {
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
      }
    } else {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }
  }, [isDark])

  // Sort sections by order
  const sortedSections = [...manifest.sections].sort((a, b) => a.order - b.order)

  const renderSection = (section: Section) => {
    const key = `${section.type}-${section.id}`

    switch (section.type) {
      case 'hero':
        return (
          <Hero
            key={key}
            content={manifest.content.hero}
            variant={section.variant as any}
            tokens={tokens}
            anchor={section.anchor}
            themePreset={themePreset}
          />
        )

      case 'socialProof':
        if (!manifest.content.socialProof) return null
        return (
          <SocialProofComponent
            key={key}
            content={manifest.content.socialProof}
            tokens={tokens}
            anchor={section.anchor}
          />
        )

      case 'features':
        if (!manifest.content.features) return null
        return (
          <>
            <div className="mesh-gradient-break" />
            <FeatureGrid
              key={key}
              content={manifest.content.features}
              variant={(section.variant as any) || 'bento'}
              tokens={tokens}
              anchor={section.anchor}
            />
          </>
        )

      case 'pricing':
        if (!manifest.content.pricing) return null
        return (
          <>
            <div className="mesh-gradient-break" />
            <Pricing
              key={key}
              content={manifest.content.pricing}
              variant={section.variant as any}
              tokens={tokens}
              anchor={section.anchor}
            />
          </>
        )

      case 'testimonials':
        if (!manifest.content.testimonials) return null
        return (
          <>
            <div className="mesh-gradient-break" />
            <Testimonials
              key={key}
              content={manifest.content.testimonials}
              variant={(section.variant as any) || 'marquee'}
              tokens={tokens}
              anchor={section.anchor}
            />
          </>
        )

      case 'faq':
        if (!manifest.content.faq) return null
        return (
          <FAQ
            key={key}
            content={manifest.content.faq}
            variant={section.variant as any}
            tokens={tokens}
            anchor={section.anchor}
          />
        )

      case 'footer':
        return (
          <Footer
            key={key}
            content={manifest.content.footer || {}}
            tokens={tokens}
            businessName={manifest.meta.businessName}
          />
        )

      default:
        return null
    }
  }

  return (
    <div
      className={`min-h-screen ${tokens.bg} ${tokens.text} noise-texture bg-dot-white/[0.2] relative overflow-hidden`}
      style={{ fontFamily: tokens.fontBody }}
    >
      {/* Background Physics - Purple Glow */}
      <div className="bg-physics-container">
        <GlowOrb variant="purple" position="top-left" size="md" />
        <GlowOrb variant="blue" position="bottom-right" size="md" />
        <div className="noise-overlay" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${tokens.surface} ${tokens.backdropBlur} border-b ${tokens.border} ${tokens.shadowGlass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className={`font-bold text-lg ${tokens.text}`}
              style={{ fontFamily: tokens.fontHeading }}
              whileHover={{ scale: 1.05 }}
            >
              {manifest.meta.businessName}
            </motion.div>
            <div className="flex items-center gap-6">
              {sortedSections
                .filter((s) => s.anchor && s.type !== 'hero' && s.type !== 'footer')
                .map((s) => (
                  <motion.a
                    key={s.anchor}
                    href={`#${s.anchor}`}
                    className={`text-sm font-medium ${tokens.textMuted} hover:${tokens.text} transition-colors`}
                    whileHover={{ y: -2 }}
                  >
                    {s.anchor}
                  </motion.a>
                ))}
              <motion.button
                onClick={() => setIsDark(!isDark)}
                className={`px-4 py-2 ${tokens.radiusButton} ${tokens.surface} ${tokens.text} text-sm ${tokens.shadow}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? '☀️' : '🌙'}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content with smooth scroll */}
      <main className="pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {sortedSections.map((section) => renderSection(section))}
        </motion.div>
      </main>
    </div>
  )
}
