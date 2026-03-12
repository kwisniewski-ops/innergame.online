'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import styles from './T5Method.module.css'

const TIERS = [
  {
    num:    '01',
    roman:  'I',
    tier:   'T1 · Immediate',
    name:   'The Breath.\nThe Rep.\nThe Decision.',
    body:   'At the finest timescale, everything reduces to a single moment of choice. Training the present-second response system means confronting the space between stimulus and action — and learning to inhabit it with intention rather than impulse.',
    quote:  'The obstacle is the way.',
    source: 'Marcus Aurelius',
    accent: 'rgba(201,169,110,0.06)',
  },
  {
    num:    '02',
    roman:  'II',
    tier:   'T2 · Ultradian',
    name:   'The 90-Minute\nPerformance\nCycle.',
    body:   'Your body runs on a 90-minute ultradian rhythm — a natural alternation between focused engagement and necessary restoration. Athletes who fight this cycle accumulate fatigue they can\'t name. Athletes who honor it compound performance across every day.',
    quote:  'First say to yourself what you would be; then do what you have to do.',
    source: 'Epictetus',
    accent: 'rgba(201,169,110,0.05)',
  },
  {
    num:    '03',
    roman:  'III',
    tier:   'T3 · Daily',
    name:   'Ritual.\nRoutine.\nArchitecture.',
    body:   'How you design the first ninety minutes of your day determines the character of every hour that follows. A ritual is not a routine — it is a declaration of identity. The daily timescale is where philosophy becomes practice, every single morning.',
    quote:  'Waste no more time arguing what a good man should be. Be one.',
    source: 'Marcus Aurelius',
    accent: 'rgba(201,169,110,0.04)',
  },
  {
    num:    '04',
    roman:  'IV',
    tier:   'T4 · Developmental',
    name:   'Seasons of\nGrowth.\nThe Long Arc.',
    body:   'Building capacity across seasons — navigating setbacks, compounding gains, enduring the silence between competitions. The athlete\'s identity is not formed in a single game. It is forged slowly, in the quiet weight rooms of November and the early mornings no one witnesses.',
    quote:  'He who is brave is free.',
    source: 'Seneca',
    accent: 'rgba(201,169,110,0.05)',
  },
  {
    num:    '05',
    roman:  'V',
    tier:   'T5 · Existential',
    name:   'The Question\nBeneath All\nQuestions.',
    body:   'What is this for? The existential timescale is where values, legacy, and character converge. It is the innermost game — the only one that persists after the final season, the final competition, the final result. Everything else is preparation for this.',
    quote:  'The impediment to action advances action. What stands in the way becomes the way.',
    source: 'Marcus Aurelius',
    accent: 'rgba(201,169,110,0.07)',
  },
]

export default function T5Method() {
  const [active, setActive]   = useState(0)
  const [isDrag, setIsDrag]   = useState(false)
  const trackRef  = useRef(null)
  const dragStart = useRef(0)
  const dragPos   = useRef(0)

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') setActive((p) => Math.min(p + 1, TIERS.length - 1))
      if (e.key === 'ArrowLeft')  setActive((p) => Math.max(p - 1, 0))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Touch / drag
  const onPointerDown = (e) => {
    setIsDrag(false)
    dragStart.current = e.clientX
    dragPos.current   = e.clientX
    trackRef.current?.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    const delta = Math.abs(e.clientX - dragStart.current)
    if (delta > 6) setIsDrag(true)
    dragPos.current = e.clientX
  }

  const onPointerUp = (e) => {
    const delta = dragStart.current - e.clientX
    if (Math.abs(delta) > 60) {
      if (delta > 0) setActive((p) => Math.min(p + 1, TIERS.length - 1))
      else           setActive((p) => Math.max(p - 1, 0))
    }
  }

  const tier = TIERS[active]

  return (
    <section className={styles.section} id="method">

      {/* ── Static header ── */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className="section-label">The Method</span>
          <h2 className={styles.heading}>
            Timescale Training <em>T5</em>
          </h2>
          <p className={styles.intro}>
            Humans operate on five distinct timescales. Health and peak
            performance emerge when these scales resonate. Together, we
            align all five.
          </p>
        </div>

        {/* Progress pips — desktop */}
        <div className={styles.pips} role="tablist" aria-label="T5 Tiers">
          {TIERS.map((t, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={t.tier}
              className={`${styles.pip} ${i === active ? styles.pipActive : ''}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.pipNum}>{String(i + 1).padStart(2,'0')}</span>
              <span className={styles.pipLabel}>{t.tier}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Full-bleed panel stage ── */}
      <div
        className={styles.stage}
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        style={{ background: tier.accent }}
      >
        {/* Background glyph */}
        <div className={styles.bgGlyph} aria-hidden="true">{tier.num}</div>

        <div className={styles.panelInner}>
          {/* Left — number + tier label */}
          <div className={styles.panelLeft}>
            <span className={styles.panelRoman}>{tier.roman}</span>
            <div className={styles.panelDivider} />
            <span className={styles.panelTier}>{tier.tier}</span>
          </div>

          {/* Center — name */}
          <div className={styles.panelCenter}>
            <h3 className={styles.panelName} key={active}>
              {tier.name.split('\n').map((line, i) => (
                <span key={i} className={styles.panelNameLine}
                  style={{ animationDelay: `${i * 0.08}s` }}>
                  {line}
                </span>
              ))}
            </h3>
          </div>

          {/* Right — body + quote */}
          <div className={styles.panelRight}>
            <p className={styles.panelBody} key={`body-${active}`}>{tier.body}</p>
            <blockquote className={styles.panelQuote} key={`quote-${active}`}>
              <span className={styles.panelQuoteText}>"{tier.quote}"</span>
              <span className={styles.panelQuoteSource}>— {tier.source}</span>
            </blockquote>
          </div>
        </div>

        {/* Bottom nav strip */}
        <div className={styles.bottomNav}>
          <button
            className={styles.arrowBtn}
            onClick={() => setActive((p) => Math.max(p - 1, 0))}
            disabled={active === 0}
            aria-label="Previous tier"
          >
            ←
          </button>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${((active + 1) / TIERS.length) * 100}%` }}
            />
          </div>

          <span className={styles.progressCount}>
            {String(active + 1).padStart(2,'0')} / {String(TIERS.length).padStart(2,'0')}
          </span>

          <button
            className={styles.arrowBtn}
            onClick={() => setActive((p) => Math.min(p + 1, TIERS.length - 1))}
            disabled={active === TIERS.length - 1}
            aria-label="Next tier"
          >
            →
          </button>
        </div>
      </div>

    </section>
  )
}
