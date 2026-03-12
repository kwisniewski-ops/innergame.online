'use client'

import { useState, useEffect } from 'react'

/**
 * Returns 0–100 progress based on how far the user has scrolled
 * through a target element (defaults to the full document).
 * @param {React.RefObject} targetRef — ref to the article element
 */
export function useReadingProgress(targetRef) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handler = () => {
      const el = targetRef?.current
      if (!el) {
        // Fallback: full document height
        const total  = document.documentElement.scrollHeight - window.innerHeight
        const current = window.scrollY
        setProgress(total > 0 ? Math.min(100, (current / total) * 100) : 0)
        return
      }

      const { top, height } = el.getBoundingClientRect()
      // How far into the article we are, clamped 0–100
      const scrolled = -top
      const total    = height - window.innerHeight
      setProgress(total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0)
    }

    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [targetRef])

  return progress
}
