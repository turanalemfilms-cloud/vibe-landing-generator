'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { THEME_PRESETS, type ThemePreset } from '@/lib/themePresets'

interface ThemeSelectorProps {
  selectedThemeId?: string
  onSelect: (themeId: string) => void
}

export function ThemeSelector({ selectedThemeId, onSelect }: ThemeSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {THEME_PRESETS.map((preset) => {
        const isSelected = selectedThemeId === preset.id
        return (
          <motion.button
            key={preset.id}
            onClick={() => onSelect(preset.id)}
            className={`relative rounded-xl aspect-video border border-white/10 overflow-hidden group ${
              isSelected ? `${preset.glow} shadow-lg` : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${preset.primary} ${
                isSelected ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
              } transition-opacity duration-300`}
            >
              {/* Pulse animation on hover */}
              {isSelected && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${preset.primary} opacity-30`}
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
            </div>

            {/* Selected Border Glow */}
            {isSelected && (
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-white/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  boxShadow: `0 0 20px ${preset.glow.replace('shadow-', '').replace('/20', '')}`,
                }}
              />
            )}

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
              <span className="text-white font-semibold text-sm md:text-base text-center">
                {preset.nameKZ}
              </span>
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="mt-2"
                >
                  <Check className="w-6 h-6 text-white" strokeWidth={3} />
                </motion.div>
              )}
            </div>
          </motion.button>
        )
      })}
    </div>
  )
}
