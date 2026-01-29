'use client'

import { motion } from 'framer-motion'

interface VisualPlaceholderProps {
  type?: 'image' | 'abstract'
  keyword?: string
  width?: number
  height?: number
  className?: string
}

export function VisualPlaceholder({
  type = 'abstract',
  keyword = 'abstract',
  width = 800,
  height = 600,
  className = '',
}: VisualPlaceholderProps) {
  if (type === 'image') {
    return (
      <motion.div
        className={`relative overflow-hidden rounded-2xl ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={`https://source.unsplash.com/${width}x${height}/?${keyword},abstract`}
          alt={keyword}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>
    )
  }

  // Abstract mode: SVG patterns with gradients
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Dots pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
    </motion.div>
  )
}
