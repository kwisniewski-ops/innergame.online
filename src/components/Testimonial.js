'use client'

import { useReveal } from '@/hooks/useReveal'
import styles from './Testimonial.module.css'

export default function Testimonial() {
  const ref = useReveal()

  return (
    <section className={styles.section} ref={ref}>
      <div className={`${styles.inner} reveal`}>
        <div className={styles.ornament} aria-hidden="true">❧</div>
        <blockquote className={styles.quote}>
          "If you don't consciously consume the content of what is in your
          life, you aren't in control of yourself. Kyle gave me the tools
          to choose — and the courage to act on that choice."
        </blockquote>
        <p className={styles.attr}>— INNERGAME Athlete, Season One</p>
      </div>
    </section>
  )
}
