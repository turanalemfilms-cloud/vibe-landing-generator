'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Magnetic button effect hook
 * Creates a smooth magnetic attraction effect on hover
 */
export function useMagneticButton<T extends HTMLElement = HTMLElement>(strength: number = 0.3) {
  const ref = useRef<T>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      x.set(deltaX)
      y.set(deltaY)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength, x, y])

  return {
    ref,
    style: {
      x: springX,
      y: springY,
    },
  }
}

/**
 * Magnetic button component wrapper
 */
export function MagneticButton({
  children,
  strength = 0.3,
  className = '',
  ...props
}: {
  children: React.ReactNode
  strength?: number
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { ref, style } = useMagneticButton<HTMLButtonElement>(strength)

  return (
    <motion.button
      ref={ref}
      style={style}
      className={`${className} button-inner-shadow`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...(props as any)}
    >
      {children}
    </motion.button>
  )
}

export function MagneticLink({
  children,
  strength = 0.3,
  className = '',
  href,
  ...props
}: {
  children: React.ReactNode
  strength?: number
  className?: string
  href: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { ref, style } = useMagneticButton<HTMLAnchorElement>(strength)

  return (
    <motion.a
      ref={ref}
      style={style}
      className={`${className} button-inner-shadow`}
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...(props as any)}
    >
      {children}
    </motion.a>
  )
}
