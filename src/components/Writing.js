'use client'

import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { T5_TIERS } from '@/lib/essays'
import styles from './Writing.module.css'

export default function Writing({ essays }) {
  const ref = useReveal()

  return (
    <section className={styles.section} id="writing" ref={ref}>
      {/* Header */}
      <div className={styles.header}>
        <div className="reveal">
          <span className="section-label">The Writing</span>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            We Can <em>Learn Anything.</em>
          </h2>
        </div>
        <a href="/writing" className={`btn-ghost reveal reveal-delay-2 ${styles.allLink}`}>
          All Essays →
        </a>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {essays.map((essay, i) => (
          <Link
            key={essay.slug}
            href={`/writing/${essay.slug}`}
            className={`${styles.card} reveal reveal-delay-${i}`}
          >
            {/* Image area */}
            <div
              className={styles.img}
              style={{ background: essay.glyphBg }}
            >
              <span className={styles.glyph} aria-hidden="true">
                {essay.glyph}
              </span>
            </div>

            {/* Body */}
            <div className={styles.body}>
              <span className={styles.tier}>
                {T5_TIERS[essay.tier]?.label ?? essay.tier}
              </span>
              <h3 className={styles.title}>{essay.title}</h3>
              <p className={styles.excerpt}>{essay.excerpt}</p>
              <span className={styles.read}>
                Read Essay <span className={styles.arrow}>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer note */}
      <div className={`${styles.footer} reveal`}>
        <p>
          These essays are a public archive of thought. Not written for performance metrics. Not AI-generated. These are my attempts to translate what competition teaches — inspired by sources, forged by experience, genuinely my own.
        </p>
        <a href="/writing" className="btn-ghost">Explore the Archive</a>
      </div>
    </section>
  )
}
