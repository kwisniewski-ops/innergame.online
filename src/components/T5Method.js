'use client'

import { useReveal } from '@/hooks/useReveal'
import styles from './T5Method.module.css'

const TIERS = [
  {
    tier: 'T1 · Immediate',
    num: '1',
    title: 'The Present',
    body: 'The breath before the rep. The decision inside the play. Immediate performance requires a trained present-moment mind — not suppressed thought, but directed attention. This is where the inner game is won or lost in real time.',
    keyword: 'Attention · Presence',
  },
  {
    tier: 'T2 · Ultradian',
    num: '2',
    title: 'The Rhythm',
    body: 'Ultradian cycles, recovery windows, and the biological architecture of a single training day. Understanding your rhythms is not a luxury — it is the fundamental unit of elite preparation. You do not fight biology. You design with it.',
    keyword: 'Rhythm · Recovery',
  },
  {
    tier: 'T3 · Circadian',
    num: '3',
    title: 'The Day',
    body: 'Ritual architecture. How you begin determines how you perform. The morning is not a warm-up — it is the first act of the day\'s performance. Every deliberate habit is a vote cast for the athlete you are becoming.',
    keyword: 'Ritual · Structure',
  },
  {
    tier: 'T4 · Seasonal',
    num: '4',
    title: 'The Season',
    body: 'Long-arc identity. Navigating setbacks without losing the thread of who you are becoming. The athlete who compounds over a career is the one who never mistakes a bad week for a bad character. Identity is the architecture that carries performance.',
    keyword: 'Identity · Compounding',
  },
  {
    tier: 'T5 · Legacy',
    num: '5',
    title: 'The Question',
    body: 'What is this for? The philosophical foundation of your performance life. The values that remain when the results strip everything else away. This is where Stoicism, Adlerian purpose, and the examined life become the most practical things an athlete can possess.',
    keyword: 'Values · Legacy',
  },
]

export default function T5Method() {
  const ref = useReveal()

  return (
    <div id="method" ref={ref}>
      <div className={styles.header}>
        <div className={styles.headerGrid}>
          <div className="reveal">
            <span className="section-label">The Method</span>
            <h2 className={styles.heading}>
              Five timescales.<br /><em>One framework.</em>
            </h2>
          </div>
          <div className={`${styles.headerRight} reveal reveal-delay-2`}>
            <p>
              Most performance systems fail because they operate at a single timescale.
              Tactics for the moment. Goals for the season. But peak performance requires
              fluency across all five simultaneously — from the breath before the rep to
              the question of what this is all for. The T5 Timescale Framework is the
              proprietary architecture of INNERGAME.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.grid} reveal`}>
        {TIERS.map((t) => (
          <div key={t.num} className={styles.card}>
            <span className={styles.tier}>{t.tier}</span>
            <div className={styles.num}>{t.num}</div>
            <h4 className={styles.title}>{t.title}</h4>
            <p className={styles.body}>{t.body}</p>
            <span className={styles.keyword}>{t.keyword}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
