'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [status,  setStatus]  = useState('idle') // idle | loading | success | error
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

        <h2 className={styles.title}>
          Most people consume.<br />
          <em className="gold">You'll create.</em>
        </h2>

        <p className={styles.sub}>
          Every week, one essay. One idea that sharpens how you think,
          perform, and live. Written by a coach and athlete who believes
          the pen is as powerful as any training protocol.
        </p>

        {status === 'success' ? (
          <div className={styles.successBlock}>
            <span className={styles.successMark}>✓</span>
            <p className={styles.successText}>
              You're in. Check your inbox — the first letter is on its way.
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
          No noise. No sponsors. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
