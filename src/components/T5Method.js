'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import styles from './T5Method.module.css'

const TIERS = [
  {
    num:   '01',
    tier:  'Tier One · Immediate',
    name:  'The Breath.\nThe Rep.\nThe Decision.',
    desc:  'Training the present-second response system. The breath before contact. The millisecond of choice that separates discipline from impulse — and winners from everyone else.',
  },
  {
    num:   '02',
    tier:  'Tier Two · Ultradian',
    name:  'The 90-Minute\nPerformance\nCycle.',
    desc:  'Energy management, focus windows, and recovery within a single day. Your body runs on a natural rhythm. Train it — don\'t fight it.',
  },
  {
    num:   '03',
    tier:  'Tier Three · Daily',
    name:  'Ritual. Routine.\nArchitecture\nof a Day.',
    desc:  'How you start determines how you finish. Building performance days that don\'t require motivation — they require intentional design and unwavering execution.',
  },
  {
    num:   '04',
    tier:  'Tier Four · Developmental',
    name:  'Seasons of\nGrowth.\nThe Long Arc.',
    desc:  'Building capacity across seasons, navigating setbacks, compounding gains. The athlete\'s identity is forged over years, not weeks — in the quiet between competitions.',
  },
  {
    num:   '05',
    tier:  'Tier Five · Existential',
    name:  'The Question\nBeneath All\nQuestions.',
    desc:  'What is this for? Values, legacy, and the character your performance reveals over time. The innermost game — and the only one that matters in the end.',
  },
]

export default function T5Method() {
  const [pos, setPos] = useState(0)
  const ref = useReveal()

  return (
    <section className={styles.section} id="method">
      {/* Header */}
      <div className={styles.header} ref={ref}>
        <div className="reveal">
          <span className="section-label">The Method</span>
          <h2 className="section-title">
            Timescale Training <em>T5</em>
          </h2>
          <p className={styles.intro}>
            Humans operate on five distinct timescales. Health and peak
            performance emerge when these scales resonate with one another.
            Together, we align all five.
          </p>
        </div>

        {/* Nav controls */}
        <div className={`${styles.controls} reveal reveal-delay-2`}>
          <button
            className={styles.navBtn}
            onClick={() => setPos((p) => Math.max(p - 1, 0))}
            aria-label="Previous tier"
            disabled={pos === 0}
          >
            ←
          </button>
          <div className={styles.pips} role="tablist">
            {TIERS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === pos}
                className={`${styles.pip} ${i === pos ? styles.pipActive : ''}`}
                onClick={() => setPos(i)}
                aria-label={`Go to tier ${i + 1}`}
              />
            ))}
          </div>
          <button
            className={styles.navBtn}
            onClick={() => setPos((p) => Math.min(p + 1, TIERS.length - 1))}
            aria-label="Next tier"
            disabled={pos === TIERS.length - 1}
          >
            →
          </button>
        </div>
      </div>

      {/* Track */}
      <div className={styles.trackOuter}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${pos * 302}px)` }}
        >
          {TIERS.map((tier, i) => (
            <div
              key={tier.num}
              className={`${styles.card} ${i === pos ? styles.cardActive : ''}`}
              onClick={() => setPos(i)}
              aria-current={i === pos ? 'true' : undefined}
            >
              <div className={styles.cardNum} aria-hidden="true">
                {tier.num}
              </div>
              <span className={styles.cardTier}>{tier.tier}</span>
              <h3 className={styles.cardName}>{tier.name}</h3>
              <p className={styles.cardDesc}>{tier.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
