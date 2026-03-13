'use client'

import { useEffect, useState } from 'react'
import styles from './ReadingProgress.module.css'

/**
 * Self-contained reading progress bar.
 * Tracks full-document scroll — no ref or children wrapper needed.
 * Safe to drop into any server-rendered page as a standalone island.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop    = window.scrollY
      const docHeight    = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      const total        = docHeight - windowHeight

      setProgress(total > 0 ? Math.min(100, (scrollTop / total) * 100) : 0)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      className={styles.track}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className={styles.fill}
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  )
}
