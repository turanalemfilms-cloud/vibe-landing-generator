'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { FAQContent, FAQVariant } from '@/lib/siteManifest'
import type { ThemeTokens } from '@/lib/styleProcessor'
import { StaggeredList } from '@/hooks/useStaggeredAnimation'
import { ChevronDown } from 'lucide-react'

interface FAQProps {
  content: FAQContent
  variant?: FAQVariant
  tokens: ThemeTokens
  anchor?: string
}

export function FAQ({ content, variant = 'accordion', tokens, anchor }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            direction="up"
            staggerDelay={0.1}
          >
            {content.items.map((item, idx) => (
              <motion.div
                key={idx}
                className={`${tokens.radiusCard} ${tokens.surface} p-6 ${tokens.shadow}`}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <h3 className={`text-lg font-semibold ${tokens.text} mb-3`}>{item.q}</h3>
                <p className={`${tokens.textMuted} leading-relaxed`}>{item.a}</p>
              </motion.div>
            ))}
          </StaggeredList>
        </div>
      </section>
    )
  }

  // Default: accordion variant
  return (
    <section id={anchor} className={`${tokens.sectionPadding} ${tokens.bg}`}>
      <div className="max-w-3xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold ${tokens.text} mb-12 text-center`}
          style={{ fontFamily: tokens.fontHeading }}
        >
          {content.title}
        </h2>
        <StaggeredList className="space-y-4" direction="up" staggerDelay={0.1}>
          {content.items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <motion.div
                key={idx}
                className={`${tokens.radiusCard} ${tokens.surface} ${tokens.shadow} overflow-hidden`}
                initial={false}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`w-full p-6 flex items-center justify-between ${tokens.text} hover:${tokens.textMuted} transition-colors`}
                >
                  <span className="text-left font-semibold pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-6 ${tokens.textMuted} leading-relaxed`}>
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </StaggeredList>
      </div>
    </section>
  )
}
