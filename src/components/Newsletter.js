'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [status, setStatus] = useState('idle') // idle | loading | success
  const [email,  setEmail]  = useState('')
  const ref = useReveal()

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    // Replace with real ConvertKit / Mailchimp API call
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section className={styles.section} id="newsletter" ref={ref}>
      <div className={`${styles.inner} reveal`}>
        <span className={styles.eyebrow}>
          The Sovereign Letter — Free Weekly
        </span>
        <h2 className={styles.title}>
          Most people consume.<br />
          <em className="gold">You'll create.</em>
        </h2>
        <p className={styles.sub}>
          Every week, one essay. One idea that sharpens how you think,
          perform, and live. Written by a coach and athlete who believes
          the pen is as powerful as any training protocol.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className={styles.input}
            required
            disabled={status !== 'idle'}
            aria-label="Email address"
          />
          <button
            type="submit"
            className={`${styles.btn} ${status === 'success' ? styles.btnSuccess : ''}`}
            disabled={status !== 'idle'}
          >
            {status === 'loading' ? '...'
              : status === 'success' ? 'Welcome.'
              : 'Subscribe'}
          </button>
        </form>

        <p className={styles.promise}>
          No noise. No sponsors. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
