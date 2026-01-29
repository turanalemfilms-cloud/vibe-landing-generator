'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

/**
 * Staggered animation hook for list items
 * Creates a smooth staggered fade-in effect when items come into view
 */
export function useStaggeredAnimation(
  itemCount: number,
  options: {
    delay?: number
    duration?: number
    staggerDelay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
  } = {}
) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const {
    delay = 0,
    duration = 0.5,
    staggerDelay = 0.1,
    direction = 'up',
  } = options

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 30, opacity: 0 }
      case 'down':
        return { y: -30, opacity: 0 }
      case 'left':
        return { x: 30, opacity: 0 }
      case 'right':
        return { x: -30, opacity: 0 }
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: getInitialPosition(),
    visible: {
      ...(direction === 'up' || direction === 'down'
        ? { y: 0 }
        : { x: 0 }),
      opacity: 1,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
      },
    },
  }

  return {
    ref,
    isInView,
    containerVariants,
    itemVariants,
  }
}

/**
 * Staggered list component wrapper
 */
export function StaggeredList({
  children,
  className = '',
  ...options
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}) {
  const childCount = Array.isArray(children) ? children.length : 1
  const { ref, isInView, containerVariants, itemVariants } = useStaggeredAnimation(childCount, options)

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
