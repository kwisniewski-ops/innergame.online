import { useReveal } from '@/hooks/useReveal'
import styles from './Philosophy.module.css'

// Server component — no 'use client' needed.
// useReveal attaches observers on the client via a wrapper.
import PhilosophyClient from './PhilosophyClient'

export default function Philosophy() {
  return (
    <section className={styles.section} id="philosophy">
      <PhilosophyClient />
    </section>
  )
}
