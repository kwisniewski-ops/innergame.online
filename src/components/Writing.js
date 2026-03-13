'use client'

import Link from 'next/link'
import { useReveal } from '@/hooks/useReveal'
import { T5_TIERS } from '@/lib/essays'
import styles from './Writing.module.css'

export default function Writing({ essays }) {
  const ref = useReveal()

  return (
    <section className={styles.section} id="writing" ref={ref}>

      {/* ── SECTION HEADER ── */}
      <div className={styles.header}>
        <div className="reveal">
          <span className="section-label">The Writing</span>
          <h2 className={`section-title ${styles.heading}`}>
            We Can <em>Learn Anything.</em>
          </h2>
          <p className={styles.headingSub}>
            These essays are not content. They are the record of a mind working through
            what competition actually teaches — informed by Stoic philosophy, Adlerian
            psychology, and years of embodied practice. Genuine thought. Genuinely mine.
          </p>
        </div>
        <a
          href="/writing"
          className={`btn-ghost reveal reveal-delay-2 ${styles.allLink}`}
        >
          All Essays →
        </a>
      </div>

      {/* ── T5 FILTER STRIP ── */}
      <div className={`${styles.tierStrip} reveal reveal-delay-1`}>
        <span className={styles.tierLabel}>Filter by Timescale</span>
        <div className={styles.tierPills}>
          {Object.entries(T5_TIERS).map(([key, val]) => (
            <span key={key} className={styles.tierPill}>
              {val.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── ESSAY GRID ── */}
      <div className={styles.grid}>
        {essays.map((essay, i) => (
          <Link
            key={essay.slug}
            href={`/writing/${essay.slug}`}
            className={`${styles.card} reveal reveal-delay-${i}`}
          >
            {/* Glyph banner */}
            <div
              className={styles.img}
              style={{ background: essay.glyphBg }}
            >
              <span className={styles.glyph} aria-hidden="true">
                {essay.glyph}
              </span>
            </div>

            {/* Card text */}
            <div className={styles.body}>
              <span className={styles.tier}>
                {T5_TIERS[essay.tier]?.label ?? essay.tier}
              </span>
              <h3 className={styles.title}>{essay.title}</h3>
              <p className={styles.excerpt}>{essay.excerpt}</p>
              <div className={styles.meta}>
                <span className={styles.readTime}>{essay.readTime}</span>
                <span className={styles.read}>
                  Read Essay <span className={styles.arrow}>→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── FOOTER NOTE + CTA ── */}
      <div className={`${styles.footer} reveal`}>
        <p>
          These essays are a public archive of thought. Not written for performance metrics.
          Not AI-generated. These are my attempts to translate what competition teaches —
          inspired by sources, forged by experience, genuinely my own.
        </p>
        <div className={styles.footerActions}>
          <a href="/writing" className="btn-primary">Explore the Full Archive</a>
          <a href="#newsletter" className="btn-ghost">Subscribe for New Essays</a>
        </div>
      </div>

    </section>
  )
}
