'use client'

import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container element.
 * Any child with class="reveal" gets class="reveal visible" when
 * it enters the viewport.
 *
 * Usage:
 *   const sectionRef = useReveal()
 *   <section ref={sectionRef}>
 *     <div className="reveal">…</div>
 *   </section>
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => entry.target.classList.add('visible'),
              i * 70
            )
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
        ...options,
      }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
