'use client'

import { useRouter } from 'next/navigation'
import { useReveal } from '@/hooks/useReveal'
import styles from './Offerings.module.css'

const OFFERS = [
  {
    roman:    'I',
    name:     'The Inner\nLetter',
    price:    'Free — Weekly',
    desc:     'Every week, Kyle translates embodied sports performance into philosophical insight — clarifying how you think, how you act, and how to play the game that actually matters.',
    features: [
      'Weekly essays on performance & philosophy',
      'T5 frameworks applied to real life',
      'Early access to new writing & research',
      'Invitations to exclusive events & challenges',
    ],
    cta:      'Subscribe Free',
    ctaHref:  '#newsletter',
    variant:  'ghost',
    featured: false,
    external: false,
  },
  {
    roman:    'II',
    name:     'The\nArchive',
    price:    '$29 / month',
    desc:     'Full access to the INNERGAME essay library. Every piece of writing, organized by T5 timescale, with a reading tracker and monthly deep-dive essays exclusive to members.',
    features: [
      'Complete T5 essay archive — all tiers',
      'Monthly members-only deep-dive essay',
      'Reading progress tracker',
      'Searchable by topic, timescale, and theme',
      'Cancel anytime',
    ],
    cta:      'Join the Archive',
    ctaHref:  '/contact',
    variant:  'gold',
    featured: true,
    external: false,
  },
  {
    roman:    'III',
    name:     'The\nAtelier',
    price:    '$750 / month — 4 Spots',
    desc:     'The full INNERGAME experience. Kyle works directly with you to clarify your values, redesign your performance environment, and develop the character that makes every result inevitable.',
    features: [
      '4 private 60-min sessions / month',
      'Bespoke T5 training plan',
      'Direct messaging access',
      'Personalized writing exercises & reflection',
      '3-month minimum commitment',
    ],
    cta:      'Apply for a Spot',
    ctaHref:  '/contact',
    variant:  'ghost',
    featured: false,
    external: false,
  },
]

export default function Offerings() {
  const ref = useReveal()

  return (
    <section className={styles.section} id="work" ref={ref}>
      <div className={styles.headerWrap}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">Work With Me</span>
          <h2 className="section-title">
            Three Ways to Play<br />
            at the <em>Highest Level</em>
          </h2>
        </div>
      </div>

      <div className={styles.grid}>
        {OFFERS.map((offer, i) => (
          <div
            key={offer.roman}
            className={`${styles.card} ${offer.featured ? styles.featured : ''} reveal reveal-delay-${i}`}
          >
            {offer.featured && (
              <span className={styles.featuredBadge}>Most Popular</span>
            )}
            <div className={styles.roman}>{offer.roman}</div>
            <h3 className={styles.name}>{offer.name}</h3>
            <p className={styles.price}>{offer.price}</p>
            <p className={styles.desc}>{offer.desc}</p>
            <ul className={styles.features}>
              {offer.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a
              href={offer.ctaHref}
              className={`${styles.cta} ${offer.variant === 'gold' ? styles.ctaGold : styles.ctaGhost}`}
            >
              {offer.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
