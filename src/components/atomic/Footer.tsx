'use client'

import { motion } from 'framer-motion'
import type { FooterContent } from '@/lib/siteManifest'
import type { ThemeTokens } from '@/lib/styleProcessor'

interface FooterProps {
  content: FooterContent
  tokens: ThemeTokens
  anchor?: string
}

export function Footer({ content, tokens, anchor }: FooterProps) {
  return (
    <footer id={anchor} className={`${tokens.sectionPadding} ${tokens.bg} border-t ${tokens.border}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {content.links && content.links.length > 0 && (
            <>
              {content.links.slice(0, 4).map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                >
                  <a
                    href={link.href}
                    className={`text-sm ${tokens.textMuted} hover:text-white transition-colors block opacity-60 hover:opacity-100`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </>
          )}
        </div>
        {content.note && (
          <motion.p
            className={`${tokens.textMuted} text-sm text-center mt-8 opacity-60`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
          >
            {content.note}
          </motion.p>
        )}
      </div>
    </footer>
  )
}
