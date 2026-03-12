'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [status,  setStatus]  = useState('idle')
  const [email,   setEmail]   = useState('')
  const [message, setMessage] = useState('')
  const ref = useReveal()

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/subscribe', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error ?? 'Something went wrong. Please try again.')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className={styles.section} id="newsletter" ref={ref}>
      <div className={`${styles.inner} reveal`}>
        <span className={styles.eyebrow}>
          The Inner Letter — Free Weekly
        </span>

        <h2 className={styles.headline}>
          Most people consume.<br />
          <em>You'll create.</em>
        </h2>

        <p className={styles.sub}>
          One essay, every week. Written for athletes and thinkers who
          understand that the mind is the final frontier of performance —
          and that the person who authors their inner world wins the outer one.
          No algorithm. No filler. Just the kind of clarity that compounds.
        </p>

        {status === 'success' ? (
          <div className={styles.successBlock}>
            <span className={styles.successMark}>✓</span>
            <p className={styles.successText}>
              You're in. The first letter arrives this week.
            </p>
          </div>
        ) : (
          <>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={`${styles.input} ${status === 'error' ? styles.inputError : ''}`}
                required
                disabled={status === 'loading'}
                aria-label="Email address"
              />
              <button
                type="submit"
                className={styles.btn}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className={styles.spinner} aria-hidden="true" />
                ) : 'Subscribe'}
              </button>
            </form>

            {message && (
              <p className={styles.errorMsg}>{message}</p>
            )}
          </>
        )}

        <p className={styles.promise}>
          Unsubscribe anytime, easily.
        </p>
      </div>
    </section>
  )
}
