'use client'

import { motion } from 'framer-motion'
import type { SocialProof } from '@/lib/siteManifest'
import type { ThemeTokens } from '@/lib/styleProcessor'
import { StaggeredList } from '@/hooks/useStaggeredAnimation'
import * as Icons from 'lucide-react'

interface SocialProofProps {
  content: SocialProof
  tokens: ThemeTokens
  anchor?: string
}

const iconMap: Record<string, any> = {
  users: Icons.Users,
  star: Icons.Star,
  trophy: Icons.Trophy,
  zap: Icons.Zap,
  trending: Icons.TrendingUp,
  check: Icons.CheckCircle,
  award: Icons.Award,
  heart: Icons.Heart,
}

export function SocialProofComponent({ content, tokens, anchor }: SocialProofProps) {
  return (
    <section id={anchor} className={`${tokens.sectionPadding} ${tokens.bg}`}>
      <div className="max-w-7xl mx-auto">
        {content.title && (
          <h2
            className={`text-2xl sm:text-3xl font-bold ${tokens.text} mb-8 text-center`}
            style={{ fontFamily: tokens.fontHeading }}
          >
            {content.title}
          </h2>
        )}
        <StaggeredList
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          direction="up"
          staggerDelay={0.1}
        >
          {content.items.map((item, idx) => {
            const Icon = item.icon ? iconMap[item.icon] || Icons.Star : null
            return (
              <motion.div
                key={idx}
                className={`${tokens.radiusCard} gradient-border backdrop-blur-[12px] bg-neutral-900/50 p-6 text-center hover:bg-neutral-900/70 transition-all`}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                {Icon && (
                  <Icon className={`w-8 h-8 ${tokens.accent} mx-auto mb-3`} />
                )}
                <div className={`text-2xl sm:text-3xl font-bold ${tokens.text} mb-1`}>
                  {item.value}
                </div>
                <div className={`text-sm ${tokens.textMuted}`}>{item.label}</div>
              </motion.div>
            )
          })}
        </StaggeredList>
      </div>
    </section>
  )
}
