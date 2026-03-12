'use client'

import { useReveal } from '@/hooks/useReveal'
import styles from './About.module.css'

const CREDENTIALS = [
  'Sports Performance Coach',
  'Stoic & Adlerian Philosophy',
  'Author — INNERGAME',
  'innergame.online',
]

export default function About() {
  const ref = useReveal()

  return (
    <section className={styles.section} id="about" ref={ref}>
      <div className={styles.inner}>
        {/* Visual column */}
        <div className="reveal">
          <div className={styles.visual}>
            <div className={styles.corner} aria-hidden="true" />
            <div className={styles.img} role="img" aria-label="Kyle Wisniewski">
              <div className={styles.imgCaption}>
                <h4>Kyle Wisniewski</h4>
                <p>Sports Performance Coach &amp; Author</p>
              </div>
            </div>
          </div>
          <div className={styles.credentials}>
            {CREDENTIALS.map((c) => (
              <span key={c} className={styles.tag}>{c}</span>
            ))}
          </div>
        </div>

        {/* Copy column */}
        <div className="reveal reveal-delay-2">
          <span className="section-label">Who Is Kyle</span>
          <h2 className="section-title">
            I translate embodied<br />
            performance into<br />
            <em>written insight.</em>
          </h2>
          <p className="section-body" style={{ marginBottom: '1.5rem' }}>
            That's a careful sentence. I didn't say I write about sports, or
            about philosophy. I say I <em>translate</em> — because the insight
            I'm after lives in the body first. It's forged in competition, in
            the weight room, in the moment you choose to continue when
            everything says stop.
          </p>
          <p className="section-body" style={{ marginBottom: '1.5rem' }}>
            I blend Stoic philosophy with Adlerian psychology not because it
            sounds sophisticated, but because it works. It produces athletes
            who win — and more importantly, people who know what they're
            winning for.
          </p>
          <p className="section-body" style={{ marginBottom: '3rem' }}>
            What I call the Inner Game isn't a metaphor — it's a map. A map
            to who you actually are, and who you're choosing to become.
          </p>
          <a href="#work" className="btn-ghost">Work With Me →</a>
        </div>
      </div>
    </section>
  )
}
