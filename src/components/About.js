'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import styles from './About.module.css'

const CREDENTIALS = [
  'Sports Performance Coach',
  'Stoic & Adlerian Philosophy',
  'Author — INNERGAME',
  'T5 Method Creator',
]

export default function About() {
  const ref = useReveal()

  return (
    <section className={styles.section} id="about" ref={ref}>
      <div className={styles.inner}>

        {/* ── Visual column ── */}
        <div className={`${styles.visual} reveal`}>

          {/* Decorative corner mark */}
          <div className={styles.cornerTL} aria-hidden="true" />
          <div className={styles.cornerBR} aria-hidden="true" />

          {/* The photo */}
          <div className={styles.imgWrapper}>
            <Image
              src="/kyle.jpg"
              alt="Kyle Wisniewski — Sports Performance Coach and Author"
              fill
              sizes="(max-width: 960px) 90vw, 45vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
              className={styles.img}
            />
            {/* Dark gradient overlay — lets caption read cleanly */}
            <div className={styles.imgOverlay} aria-hidden="true" />
          </div>

          {/* Caption bar */}
          <div className={styles.caption}>
            <div>
              <p className={styles.captionName}>Kyle Wisniewski</p>
              <p className={styles.captionRole}>Sports Performance Coach &amp; Author</p>
            </div>
            <div className={styles.captionRule} aria-hidden="true" />
          </div>

          {/* Credential tags below photo */}
          <div className={styles.tags}>
            {CREDENTIALS.map((c) => (
              <span key={c} className={styles.tag}>{c}</span>
            ))}
          </div>
        </div>

        {/* ── Copy column ── */}
        <div className="reveal reveal-delay-2">
          <span className="section-label">Who Is Kyle</span>

          <h2 className="section-title">
            I translate embodied<br />
            performance into<br />
            <em>written insight.</em>
          </h2>

          <p className="section-body" style={{ marginBottom: '1.5rem' }}>
            That's a careful sentence. I didn't say I write <em>about</em> sports,
            or <em>about</em> philosophy. I say I translate — because the insight
            I'm after lives in the body first. It's forged in competition, in the
            weight room, in the moment you choose to continue when everything says stop.
          </p>

          <p className="section-body" style={{ marginBottom: '1.5rem' }}>
            I blend Stoic philosophy with Adlerian psychology not because it sounds
            sophisticated, but because it works. It produces athletes who win — and more
            importantly, people who know what they're winning <em>for.</em>
          </p>

          <p className="section-body" style={{ marginBottom: '3.5rem' }}>
            What I call the Inner Game isn't a metaphor — it's a map. A map to who
            you actually are, and who you're choosing to become.
          </p>

          {/* Pull stat */}
          <div className={styles.stat}>
            <span className={styles.statNum}>T5</span>
            <div className={styles.statDivide} aria-hidden="true" />
            <p className={styles.statText}>
              Five timescales. One framework. Every athlete, every season.
            </p>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <a href="#work" className="btn-ghost">Work With Me →</a>
          </div>
        </div>

      </div>
    </section>
  )
}
