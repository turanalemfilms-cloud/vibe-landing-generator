'use client'

import { motion } from 'framer-motion'
import type { FeaturesContent, FeatureVariant } from '@/lib/siteManifest'
import type { ThemeTokens } from '@/lib/styleProcessor'
import { StaggeredList } from '@/hooks/useStaggeredAnimation'
import { generateBentoLayout } from '@/lib/bentoEngine'
import { VisualPlaceholder } from '@/components/ui/VisualPlaceholder'
import * as Icons from 'lucide-react'

interface FeatureGridProps {
  content: FeaturesContent
  variant?: FeatureVariant
  tokens: ThemeTokens
  anchor?: string
}

const iconMap: Record<string, any> = {
  zap: Icons.Zap,
  shield: Icons.Shield,
  rocket: Icons.Rocket,
  star: Icons.Star,
  check: Icons.CheckCircle,
  sparkles: Icons.Sparkles,
  trophy: Icons.Trophy,
  target: Icons.Target,
  heart: Icons.Heart,
  code: Icons.Code,
  settings: Icons.Settings,
  lock: Icons.Lock,
  barChart3: Icons.BarChart3,
  coffee: Icons.Coffee,
  headphones: Icons.Headphones,
  plug: Icons.Plug,
  trendingUp: Icons.TrendingUp,
  award: Icons.Award,
  zap2: Icons.Zap,
  // Fallback to Star if icon not found
}

export function FeatureGrid({ content, variant = 'grid', tokens, anchor }: FeatureGridProps) {
  if (variant === 'bento') {
    const bento = generateBentoLayout(content.items, 'ios_spatial') // Theme will be passed from parent
    return (
      <section id={anchor} className={`${tokens.sectionPadding} ${tokens.bg}`}>
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${tokens.text} mb-16 text-center tracking-tighter`}
            style={{ fontFamily: tokens.fontHeadingPremium }}
          >
            {content.title}
          </h2>
          <div
            className="grid gap-4 md:gap-6"
            style={{
              gridTemplateColumns: bento.gridTemplateColumns,
              gridTemplateRows: bento.gridTemplateRows,
              gridTemplateAreas: bento.gridTemplateAreas,
            }}
          >
            <StaggeredList direction="up" staggerDelay={0.1}>
              {bento.items
                .filter(({ item }, idx, arr) => {
                  // Remove duplicates (placeholders)
                  const firstIdx = arr.findIndex((x) => x.item.title === item.title)
                  return firstIdx === idx
                })
                .map(({ area, item }, idx) => {
                  // MANDATORY: Every feature MUST have an icon
                  const Icon = item.icon ? iconMap[item.icon.toLowerCase()] : iconMap['star']
                  const bentoItem = bento.items.find((x) => x.area === area)
                  const isLarge = area === 'a' || (bentoItem?.span?.col || 0) > 1
                  const aspectClass = bentoItem?.aspect === 'square' ? 'aspect-square' : bentoItem?.aspect === 'video' ? 'aspect-video' : ''
                  return (
                    <motion.div
                      key={idx}
                      layoutId={`feature-${item.title}`}
                      style={{ gridArea: area }}
                      className={`${tokens.radiusCard} gradient-border glass-2 card-radial-gradient p-6 md:p-8 lg:p-10 hover:bg-neutral-900/70 transition-all group ${
                        item.highlight ? tokens.glow + ' depth-glow' : ''
                      } ${aspectClass}`}
                      whileHover={{ y: -10, scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      {/* MANDATORY: Icon always displayed */}
                      <motion.div
                        className={`${isLarge ? 'w-16 h-16' : 'w-12 h-12'} ${tokens.radiusCard} bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`${isLarge ? 'w-8 h-8' : 'w-6 h-6'} ${tokens.accentText}`} />
                      </motion.div>
                      <h3 className={`${isLarge ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'} font-bold ${tokens.text} mb-3 tracking-tighter`} style={{ fontFamily: tokens.fontHeadingPremium }}>
                        {item.title}
                      </h3>
                      <p className={`${tokens.textMuted} leading-relaxed ${isLarge ? 'text-lg' : 'text-base'}`}>
                        {item.description}
                      </p>
                    </motion.div>
                  )
                })}
            </StaggeredList>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'zigzag') {
    return (
      <section id={anchor} className={`${tokens.sectionPadding} ${tokens.bg}`}>
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-bold ${tokens.text} mb-12 text-center`}
            style={{ fontFamily: tokens.fontHeading }}
          >
            {content.title}
          </h2>
          <StaggeredList className="space-y-12" direction="up" staggerDelay={0.15}>
            {content.items.map((item, idx) => {
              // MANDATORY: Every feature MUST have an icon
              const Icon = item.icon ? iconMap[item.icon.toLowerCase()] : iconMap['star']
              const isEven = idx % 2 === 0
              return (
                <motion.div
                  key={idx}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    {/* MANDATORY: Icon always displayed */}
                    <motion.div className={`w-14 h-14 ${tokens.radiusCard} bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4`}>
                      <Icon className={`w-7 h-7 ${tokens.accentText}`} />
                    </motion.div>
                    <h3 className={`text-2xl font-semibold ${tokens.text} mb-3`}>
                      {item.title}
                    </h3>
                    <p className={`${tokens.textMuted} leading-relaxed text-lg`}>
                      {item.description}
                    </p>
                  </div>
                  <VisualPlaceholder
                    type="abstract"
                    className={`flex-1 ${tokens.radiusCard} ${tokens.surface} p-8 ${tokens.shadow} min-h-[200px]`}
                  />
                </motion.div>
              )
            })}
          </StaggeredList>
        </div>
      </section>
    )
  }

  // Default: grid variant
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          direction="up"
          staggerDelay={0.1}
        >
          {content.items.map((item, idx) => {
            // MANDATORY: Every feature MUST have an icon
            const Icon = item.icon ? iconMap[item.icon.toLowerCase()] : iconMap['star']
            return (
              <motion.div
                key={idx}
                layoutId={`feature-${item.title}`}
                className={`${tokens.radiusCard} gradient-border glass-2 card-radial-gradient p-8 hover:bg-neutral-900/70 transition-all group ${
                  item.highlight ? tokens.glow + ' depth-glow' : ''
                }`}
                whileHover={{ y: -10, scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                {/* MANDATORY: Icon always displayed */}
                <motion.div
                  className={`w-14 h-14 ${tokens.radiusCard} bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${tokens.accentText}`} />
                </motion.div>
                <h3 className={`text-2xl font-bold ${tokens.text} mb-3 tracking-tighter`} style={{ fontFamily: tokens.fontHeadingPremium }}>
                  {item.title}
                </h3>
                <p className={`${tokens.textMuted} leading-relaxed text-lg`}>
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </StaggeredList>
      </div>
    </section>
  )
}
