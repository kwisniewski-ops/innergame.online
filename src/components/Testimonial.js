'use client'

import { useReveal } from '@/hooks/useReveal'
import styles from './Testimonial.module.css'

export default function Testimonial() {
  const ref = useReveal()

  return (
    <section className={styles.section} ref={ref}>
      <div className={`${styles.inner} reveal`}>
        <span className={styles.quoteMark} aria-hidden="true">"</span>
        <blockquote className={styles.quote}>
          Working with Kyle didn't change my training program. It changed the
          person doing the training. That's the difference — and it shows up
          everywhere, not just in competition.
        </blockquote>
        <p className={styles.name}>— INNERGAME Athlete</p>
        <p className={styles.role}>Performance Coaching, Season One</p>
      </div>
    </section>
  )
}
