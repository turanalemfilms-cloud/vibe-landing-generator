'use client'

import { motion } from 'framer-motion'
import type { TestimonialsContent, TestimonialVariant } from '@/lib/siteManifest'
import type { ThemeTokens } from '@/lib/styleProcessor'
import { StaggeredList } from '@/hooks/useStaggeredAnimation'
import { Marquee } from './Marquee'
import { generateTestimonialsBentoLayout } from '@/lib/testimonialsBentoEngine'
import { Star } from 'lucide-react'

interface TestimonialsProps {
  content: TestimonialsContent
  variant?: TestimonialVariant
  tokens: ThemeTokens
  anchor?: string
}

export function Testimonials({ content, variant = 'quotes', tokens, anchor }: TestimonialsProps) {
  if (variant === 'bento') {
    const bento = generateTestimonialsBentoLayout(content.items, 'ios_spatial')
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
                  const firstIdx = arr.findIndex((x) => x.item.name === item.name && x.item.quote === item.quote)
                  return firstIdx === idx
                })
                .map(({ area, item }, idx) => (
                  <motion.div
                    key={idx}
                    style={{ gridArea: area }}
                    className={`${tokens.radiusCard} gradient-border backdrop-blur-[12px] bg-neutral-900/50 p-6 md:p-8 hover:bg-neutral-900/70`}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                  >
                    {item.rating && (
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < item.rating! ? 'fill-yellow-400 text-yellow-400' : tokens.textMuted
                            }`}
                          />
                        ))}
                      </div>
                    )}
                    <p className={`${tokens.text} mb-4 leading-relaxed text-lg`}>"{item.quote}"</p>
                    <div className="flex items-center gap-4 mt-6">
                      {item.avatar && (
                        <div className={`w-12 h-12 ${tokens.radiusPill} ${tokens.accent} flex items-center justify-center`}>
                          <span className={`${tokens.accentText} font-semibold`}>
                            {item.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <div className={`font-semibold ${tokens.text}`}>{item.name}</div>
                        <div className={`text-sm ${tokens.textMuted}`}>{item.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </StaggeredList>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'marquee') {
    return (
      <section id={anchor} className={`${tokens.sectionPadding} ${tokens.bg}`}>
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${tokens.text} mb-12 text-center tracking-tighter`}
            style={{ fontFamily: tokens.fontHeadingPremium }}
          >
            {content.title}
          </h2>
          <Marquee speed={30} className="py-8">
            {content.items.map((item, idx) => (
              <motion.div
                key={idx}
                className={`${tokens.radiusCard} gradient-border backdrop-blur-[12px] bg-neutral-900/50 p-6 w-80 flex-shrink-0 mx-4 hover:bg-neutral-900/70`}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
              >
                {item.rating && (
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating! ? 'fill-yellow-400 text-yellow-400' : tokens.textMuted
                        }`}
                      />
                    ))}
                  </div>
                )}
                <p className={`${tokens.text} mb-4 leading-relaxed text-sm`}>"{item.quote}"</p>
                <div>
                  <div className={`font-semibold ${tokens.text} text-sm`}>{item.name}</div>
                  <div className={`text-xs ${tokens.textMuted}`}>{item.role}</div>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </div>
      </section>
    )
  }

  if (variant === 'cards') {
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
            {content.items.map((item, idx) => (
              <motion.div
                key={idx}
                className={`${tokens.radiusCard} gradient-border backdrop-blur-[12px] bg-neutral-900/50 p-6 hover:bg-neutral-900/70`}
                whileHover={{ y: -4, scale: 1.02 }}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
              >
                {item.rating && (
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating! ? 'fill-yellow-400 text-yellow-400' : tokens.textMuted
                        }`}
                      />
                    ))}
                  </div>
                )}
                <p className={`${tokens.text} mb-4 leading-relaxed`}>"{item.quote}"</p>
                <div>
                  <div className={`font-semibold ${tokens.text}`}>{item.name}</div>
                  <div className={`text-sm ${tokens.textMuted}`}>{item.role}</div>
                </div>
              </motion.div>
            ))}
          </StaggeredList>
        </div>
      </section>
    )
  }

  // Default: quotes variant
  return (
    <section id={anchor} className={`${tokens.sectionPadding} ${tokens.bg}`}>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold ${tokens.text} mb-12 text-center`}
          style={{ fontFamily: tokens.fontHeading }}
        >
          {content.title}
        </h2>
        <StaggeredList className="space-y-8" direction="up" staggerDelay={0.2}>
          {content.items.map((item, idx) => (
            <motion.div
              key={idx}
              className={`${tokens.radiusCard} gradient-border backdrop-blur-[12px] bg-neutral-900/50 p-8 hover:bg-neutral-900/70`}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              viewport={{ once: true }}
            >
              <p className={`text-xl ${tokens.text} mb-6 leading-relaxed`}>"{item.quote}"</p>
              <div className="flex items-center gap-4">
                {item.avatar && (
                  <div className={`w-12 h-12 ${tokens.radiusPill} ${tokens.accent} flex items-center justify-center`}>
                    <span className={`${tokens.accentText} font-semibold`}>
                      {item.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <div className={`font-semibold ${tokens.text}`}>{item.name}</div>
                  <div className={`text-sm ${tokens.textMuted}`}>{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredList>
      </div>
    </section>
  )
}
