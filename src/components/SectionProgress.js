'use client'

import { useMemo } from 'react'
import { useSectionProgress } from '@/hooks/useSectionProgress'
import styles from './SectionProgress.module.css'

const SECTIONS = [
  { id: 'home',    label: 'Home' },
  { id: 'method',  label: 'The Method' },
  { id: 'studio',  label: 'The Studio' },
  { id: 'about',   label: 'About' },
  { id: 'letter',  label: 'The Letter' },
]

const IDS = SECTIONS.map((s) => s.id)

export default function SectionProgress() {
  const activeId = useSectionProgress(IDS)
  const activeIndex = useMemo(
    () => SECTIONS.findIndex((s) => s.id === activeId),
    [activeId]
  )

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={styles.nav} aria-label="Page sections">
      <div className={styles.track} aria-hidden="true">
        <div
          className={styles.trackFill}
          style={{ height: `${(activeIndex / (SECTIONS.length - 1)) * 100}%` }}
        />
      </div>
      {SECTIONS.map((section, i) => {
        const isActive = section.id === activeId
        const isPast = i < activeIndex
        return (
          <button
            key={section.id}
            className={`${styles.dot} ${isActive ? styles.dotActive : ''} ${isPast ? styles.dotPast : ''}`}
            onClick={() => scrollTo(section.id)}
            aria-label={`Go to ${section.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className={styles.label}>{section.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
