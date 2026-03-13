'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const ref = useReveal()

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setEmail('')
        setFirstName('')
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
    <div className={styles.section} id="letter" ref={ref}>
      <div className={styles.inner}>

        <div className="reveal">
          <span className="section-label">The Sovereign Letter</span>
          <h2 className={styles.heading}>
            Performance<br />intelligence.<br /><em>Weekly. Free.</em>
          </h2>
          <p className={styles.body}>
            Every Monday, a new essay arrives in your inbox. Philosophical. Practical.
            Written from the intersection of competition and contemplation, where the most
            useful ideas about human performance actually live.
          </p>
          <p className={styles.body}>
            No motivation. No hustle rhetoric. No generic advice delivered with false
            urgency. Just clear thinking — applied, tested, and written with the care
            the subject deserves.
          </p>
          <p className={styles.proof}>
            Read by athletes and executives across 40+ countries · Free · Always
          </p>
        </div>

        <div className="reveal reveal-delay-2">
          <span className={styles.formLabel}>Begin Here — Enter the Letter</span>

          {status === 'success' ? (
            <div className={styles.success}>
              <span className={styles.successMark}>✓</span>
              <p>You're in. The first letter arrives this week.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  autoComplete="given-name"
                  className={styles.input}
                  disabled={status === 'loading'}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  autoComplete="email"
                  className={`${styles.input} ${status === 'error' ? styles.inputError : ''}`}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className={styles.spinner} aria-hidden="true" />
                ) : 'Subscribe — Free →'}
              </button>
              {message && <p className={styles.errorMsg}>{message}</p>}
              <p className={styles.note}>
                Read in minutes. Worth keeping. No spam, no frequency creep, no selling your data.
                Unsubscribe in one click at any time.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}
