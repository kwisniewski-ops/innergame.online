'use client'

import { useReveal } from '@/hooks/useReveal'
import styles from './Testimonial.module.css'

const TESTIMONIALS = [
  {
    initial: 'A',
    quote: 'I\'ve read every mental performance book that exists. What Kyle does is different — he writes like someone who has actually stood in the moment he\'s describing. The T5 framework changed how I prepare for competition, not because it added something, but because it showed me what I\'d been ignoring.',
    name: 'Athlete, Collegiate Division I',
    role: 'Track & Field · Architecture Client',
  },
  {
    initial: 'E',
    quote: 'I built a career treating it like a sport. At 42, I realized I\'d lost the philosophy that once made me good at the actual game. The Sovereign Letter found me at exactly the right moment. I\'ve been a subscriber for eight months. The Atelier changed the rest.',
    name: 'Executive, Technology Sector',
    role: 'Former Collegiate Athlete · Atelier Client',
  },
  {
    initial: 'W',
    quote: 'I keep a training journal. I always have. I never knew what to do with it until I read Kyle\'s essays on T5. Now I understand what I\'ve been doing — and why it matters. The Archive is the first place where both sides of who I am make sense together.',
    name: 'Writer & Triathlete',
    role: 'Archive Subscriber · 14 Months',
  },
]

export default function Testimonial() {
  const ref = useReveal()

  return (
    <div className={styles.section} ref={ref}>
      <div className={styles.header}>
        <div className={`${styles.headerLeft} reveal`}>
          <h2 className={styles.heading}>
            What serious<br />athletes say about<br /><em>the inner work.</em>
          </h2>
        </div>
        <p className={`${styles.headerRight} reveal reveal-delay-2`}>
          INNERGAME draws athletes and executives who have already tried the conventional
          approaches — and found them shallow. These are their words about what happens
          when the inner work is done at the level the outer game demands.
        </p>
      </div>

      <div className={`${styles.grid} reveal`}>
        {TESTIMONIALS.map((t) => (
          <div key={t.initial} className={styles.card}>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initial}</div>
              <div>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.role}>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
