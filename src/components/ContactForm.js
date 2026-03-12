'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

const INTERESTS = [
  { id: 'archive',  label: 'The Archive',  sub: '$29 / month — Full essay library' },
  { id: 'atelier',  label: 'The Atelier',  sub: '$750 / month — 1:1 coaching, 4 spots' },
  { id: 'speaking', label: 'Speaking',      sub: 'Workshops, teams, events' },
  { id: 'other',    label: 'General',       sub: 'Something else entirely' },
]

export default function ContactForm() {
  const [selected, setSelected] = useState('')
  const [status,   setStatus]   = useState('idle') // idle | loading | success
  const [form,     setForm]     = useState({ name: '', email: '', message: '' })

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!selected || !form.name || !form.email) return
    setStatus('loading')

    // Replace with your preferred form backend (Formspree, Resend, etc.)
    // For now simulates submission — wire up in next sprint
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <section className={styles.page}>
        <div className={styles.success}>
          <div className={styles.successGlyph}>✓</div>
          <h1 className={styles.successTitle}>Message received.</h1>
          <p className={styles.successSub}>
            Kyle reads every inquiry personally. You'll hear back within 48 hours.
          </p>
          <a href="/" className={styles.backLink}>← Return Home</a>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.page}>
      {/* Page header */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>Get In Touch</span>
        <h1 className={styles.title}>
          The game starts with<br />
          <em>a single decision.</em>
        </h1>
        <p className={styles.sub}>
          Whether you're applying for The Atelier, joining The Archive, or just
          reaching out — Kyle reads every message personally.
        </p>
      </div>

      <div className={styles.layout}>
        {/* Left — form */}
        <form className={styles.form} onSubmit={handleSubmit}>

          {/* Interest selector */}
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>I'm interested in</label>
            <div className={styles.interests}>
              {INTERESTS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className={`${styles.interestBtn} ${selected === opt.id ? styles.interestActive : ''}`}
                  onClick={() => setSelected(opt.id)}
                >
                  <span className={styles.interestName}>{opt.label}</span>
                  <span className={styles.interestSub}>{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              className={styles.input}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              required
            />
          </div>

          {/* Message */}
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="message">
              Tell me about yourself{' '}
              <span className={styles.optional}>(optional)</span>
            </label>
            <textarea
              id="message"
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Your sport, your goals, where you're at right now. The more context the better."
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              rows={5}
            />
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={status === 'loading' || !selected || !form.name || !form.email}
          >
            {status === 'loading' ? (
              <span className={styles.spinner} aria-hidden="true" />
            ) : 'Send Message'}
          </button>

          <p className={styles.note}>
            Kyle responds within 48 hours. All inquiries are confidential.
          </p>
        </form>

        {/* Right — context panel */}
        <aside className={styles.aside}>
          <div className={styles.asideBlock}>
            <span className={styles.asideLabel}>The Atelier</span>
            <p className={styles.asidePrice}>$750 / month</p>
            <p className={styles.asideDesc}>
              Direct 1:1 work with Kyle. Four spots only. Three-month minimum.
              Application required — not every applicant is accepted.
            </p>
            <ul className={styles.asideList}>
              <li>4 × 60-min private sessions per month</li>
              <li>Bespoke T5 training plan</li>
              <li>Direct message access between sessions</li>
              <li>Personalized writing exercises</li>
            </ul>
          </div>

          <div className={styles.asideDivider} />

          <div className={styles.asideBlock}>
            <span className={styles.asideLabel}>The Archive</span>
            <p className={styles.asidePrice}>$29 / month</p>
            <p className={styles.asideDesc}>
              The complete INNERGAME essay library. Every piece of writing,
              organized by T5 timescale. New exclusive essays monthly.
            </p>
            <ul className={styles.asideList}>
              <li>Full T5 essay archive</li>
              <li>Monthly members-only essay</li>
              <li>Reading progress tracker</li>
              <li>Cancel anytime</li>
            </ul>
          </div>

          <div className={styles.asideDivider} />

          <blockquote className={styles.asideQuote}>
            "The game is won inside first."
          </blockquote>
        </aside>
      </div>
    </section>
  )
}
