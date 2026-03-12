'use client'

import { useReveal } from '@/hooks/useReveal'
import styles from './Offerings.module.css'

const OFFERS = [
  {
    roman:    'I',
    name:     'The Sovereign\nLetter',
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
  },
  {
    roman:    'II',
    name:     'The\nArchitecture',
    price:    '$147 / month',
    desc:     'A structured 12-week deep-dive into your performance psychology. Written curriculum + recorded coaching sessions, built around your T5 profile and athletic goals.',
    features: [
      '12-week self-paced curriculum',
      'Monthly group coaching call with Kyle',
      'Private community of serious performers',
      'Full library of T5 assessments & tools',
      'Cancel anytime',
    ],
    cta:      'Enroll Now',
    ctaHref:  '#',
    variant:  'gold',
    featured: true,
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
    ctaHref:  '#',
    variant:  'ghost',
    featured: false,
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
              <span className={styles.featuredBadge}>Featured</span>
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
