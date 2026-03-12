'use client'

import { useReveal } from '@/hooks/useReveal'
import styles from './Philosophy.module.css'

const STATS = [
  { num: 'T5',  label: 'Timescale\nFramework'      },
  { num: '∞',   label: 'Essays in\nthe Archive'     },
  { num: '01',  label: 'Philosophy\nof Excellence'  },
  { num: '4',   label: 'Atelier Spots\nAvailable'   },
]

export default function PhilosophyClient() {
  const ref = useReveal()

  return (
    <div className={styles.inner} ref={ref}>
      {/* LEFT — Quote + Stats */}
      <div className="reveal">
        <div className={styles.quoteBlock}>
          <div className={styles.bigQ} aria-hidden="true">"</div>
          <blockquote className={styles.quote}>
            We do not think freely until we choose the landscape in which
            our thinking occurs.
          </blockquote>
          <p className={styles.attr}>— Kyle Wisniewski, Coach &amp; Author</p>
        </div>

        <div className={styles.statsGrid}>
          {STATS.map(({ num, label }, i) => (
            <div
              key={num}
              className={`${styles.stat} reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className={styles.statNum}>{num}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Copy */}
      <div className="reveal reveal-delay-2">
        <span className="section-label">The Foundation</span>
        <h2 className="section-title">
          Most people train the body.<br />
          Few ever train the{' '}
          <em>mind that<br />moves it.</em>
        </h2>
        <p className="section-body" style={{ marginBottom: '1.5rem' }}>
          Sports performance is the most honest mirror in the world. It shows
          you exactly who you are under pressure — what you believe, what you
          fear, and what you're capable of when no one is watching.
        </p>
        <p className="section-body" style={{ marginBottom: '2.5rem' }}>
          That is the Inner Game. And it is where every championship is
          actually decided.
        </p>
        <a href="#method" className="btn-ghost">
          Explore the T5 Method
        </a>
      </div>
    </div>
  )
}
