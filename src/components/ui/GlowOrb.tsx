'use client'

import { motion } from 'framer-motion'

interface GlowOrbProps {
  variant?: 'purple' | 'blue' | 'orange' | 'cyan' | 'pink'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const variantStyles = {
  purple: 'bg-purple-600/30',
  blue: 'bg-blue-600/20',
  orange: 'bg-orange-600/30',
  cyan: 'bg-cyan-600/20',
  pink: 'bg-pink-600/30',
}

const positionStyles = {
  'top-left': 'top-[-10%] left-[-10%]',
  'top-right': 'top-[-10%] right-[-10%]',
  'bottom-left': 'bottom-[-10%] left-[-10%]',
  'bottom-right': 'bottom-[-10%] right-[-10%]',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
}

const sizeStyles = {
  sm: 'w-[300px] h-[300px]',
  md: 'w-[500px] h-[500px]',
  lg: 'w-[700px] h-[700px]',
  xl: 'w-[900px] h-[900px]',
}

export function GlowOrb({
  variant = 'purple',
  position = 'top-left',
  size = 'md',
  className = '',
}: GlowOrbProps) {
  return (
    <motion.div
      className={`absolute ${positionStyles[position]} ${sizeStyles[size]} ${variantStyles[variant]} blur-[120px] rounded-full pointer-events-none ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.4, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
