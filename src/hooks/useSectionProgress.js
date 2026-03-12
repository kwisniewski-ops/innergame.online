'use client'

import { useState, useEffect } from 'react'

/**
 * Watches a list of section IDs and returns the currently active one
 * based on scroll position. Fires a scroll listener with passive: true.
 * @param {string[]} sectionIds
 * @returns {string} activeId
 */
export function useSectionProgress(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const handler = () => {
      // Offset: trigger when section top is within the top third of viewport
      const trigger = window.innerHeight * 0.35

      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= trigger) {
          current = id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [sectionIds])

  return activeId
}
