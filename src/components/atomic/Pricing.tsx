'use client'

import { motion } from 'framer-motion'
import type { PricingContent, PricingVariant } from '@/lib/siteManifest'
import type { ThemeTokens } from '@/lib/styleProcessor'
import { StaggeredList } from '@/hooks/useStaggeredAnimation'
import { MagneticButton, MagneticLink } from '@/hooks/useMagneticButton'
import { Check } from 'lucide-react'

interface PricingProps {
  content: PricingContent
  variant?: PricingVariant
  tokens: ThemeTokens
  anchor?: string
}

export function Pricing({ content, variant = 'cards', tokens, anchor }: PricingProps) {
  if (variant === 'table') {
    return (
      <section id={anchor} className={`${tokens.sectionPadding} ${tokens.bg}`}>
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-bold ${tokens.text} mb-12 text-center`}
            style={{ fontFamily: tokens.fontHeading }}
          >
            {content.title}
          </h2>
          <div className={`${tokens.radiusCard} ${tokens.surface} ${tokens.shadow} overflow-hidden`}>
            <table className="w-full">
              <thead>
                <tr className={`border-b ${tokens.border}`}>
                  <th className={`p-4 text-left ${tokens.text} font-semibold`}>Пакет</th>
                  <th className={`p-4 text-left ${tokens.text} font-semibold`}>Баға</th>
                  <th className={`p-4 text-left ${tokens.text} font-semibold`}>Мүмкіндіктер</th>
                  <th className={`p-4 text-center ${tokens.text} font-semibold`}>Әрекет</th>
                </tr>
              </thead>
              <tbody>
                {content.plans.map((plan, idx) => (
                  <tr
                    key={idx}
                    className={`border-b ${tokens.border} ${plan.highlighted ? tokens.accent + ' bg-opacity-10' : ''}`}
                  >
                    <td className={`p-4 ${tokens.text} font-semibold`}>{plan.name}</td>
                    <td className={`p-4 ${tokens.text}`}>
                      <span className="text-2xl font-bold">{plan.price}</span>
                      {plan.period && <span className={`${tokens.textMuted} text-sm`}>{plan.period}</span>}
                    </td>
                    <td className={`p-4 ${tokens.textMuted}`}>
                      <ul className="space-y-1">
                        {plan.bullets.slice(0, 3).map((bullet, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-4 text-center">
                      <MagneticLink
                        href="#lead"
                        strength={0.2}
                        className={`px-4 py-2 ${tokens.radiusButton} ${plan.highlighted ? tokens.accent + ' ' + tokens.accentText : tokens.surface + ' ' + tokens.text} font-semibold text-sm`}
                      >
                        {plan.cta || 'Таңдау'}
                      </MagneticLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }

  // Default: cards variant
  return (
    <section id={anchor} className={`${tokens.sectionPadding} ${tokens.bg}`}>
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold ${tokens.text} mb-12 text-center`}
          style={{ fontFamily: tokens.fontHeading }}
        >
          {content.title}
        </h2>
        <StaggeredList
          className={`grid grid-cols-1 md:grid-cols-${content.plans.length} gap-6`}
          direction="up"
          staggerDelay={0.15}
        >
          {content.plans.map((plan, idx) => (
            <motion.div
              key={idx}
              layoutId={`pricing-${plan.name}`}
              className={`${tokens.radiusCard} gradient-border glass-2 card-radial-gradient p-8 relative hover:bg-neutral-900/70 ${
                plan.highlighted ? 'conic-border depth-glow' : ''
              }`}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {plan.highlighted && (
                <motion.div
                  className={`absolute top-4 right-4 ${tokens.radiusPill} ${tokens.accent} ${tokens.accentText} px-3 py-1 text-xs font-semibold`}
                  whileHover={{ scale: 1.1 }}
                >
                  Таңдаулы
                </motion.div>
              )}
              <h3 className={`text-2xl font-bold ${tokens.text} mb-2`}>{plan.name}</h3>
              {plan.description && (
                <p className={`${tokens.textMuted} mb-6 text-sm`}>{plan.description}</p>
              )}
              <div className="mb-6">
                <span className={`text-4xl font-bold ${tokens.text}`}>{plan.price}</span>
                {plan.period && <span className={`${tokens.textMuted} text-sm ml-2`}>{plan.period}</span>}
              </div>
              <ul className={`space-y-3 mb-8 ${tokens.textMuted}`}>
                {plan.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 ${tokens.accent} flex-shrink-0 mt-0.5`} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <MagneticLink
                href="#lead"
                strength={0.2}
                className={`w-full block text-center px-6 py-3 ${tokens.radiusButton} ${
                  plan.highlighted ? tokens.accent + ' ' + tokens.accentText : tokens.surface + ' ' + tokens.text
                } font-semibold`}
              >
                {plan.cta || 'Таңдау'}
              </MagneticLink>
            </motion.div>
          ))}
        </StaggeredList>
      </div>
    </section>
  )
}
