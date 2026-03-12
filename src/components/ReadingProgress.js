'use client'

import { useRef } from 'react'
import { useReadingProgress } from '@/hooks/useReadingProgress'
import styles from './ReadingProgress.module.css'

/**
 * Renders a thin gold progress bar pinned to the top of the viewport.
 * Pass articleRef to track progress through the article body specifically.
 */
export default function ReadingProgress({ articleRef }) {
  const progress = useReadingProgress(articleRef)

  return (
    <div className={styles.track} role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} aria-label="Reading progress">
      <div
        className={styles.fill}
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  )
}
