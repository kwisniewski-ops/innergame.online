'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useScrolled } from '@/hooks/useScrolled'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { href: '#philosophy', label: 'Philosophy'  },
  { href: '#method',     label: 'T5 Method'   },
  { href: '#work',       label: 'Work With Me'},
  { href: '#writing',    label: 'Writing'      },
]

export default function Nav() {
  const scrolled      = useScrolled(60)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Active section tracking
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const handler = () => {
      const y = window.scrollY + 130
      let current = ''
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && y >= el.offsetTop) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
        INNER<span>GAME</span>
      </Link>

      {/* Desktop links */}
      <ul className={styles.links}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`${styles.link} ${active === href.replace('#','') ? styles.linkActive : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#newsletter" className={`${styles.link} ${styles.cta}`}>
            The Inner Letter
          </a>
        </li>
      </ul>

      {/* Burger */}
      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={styles.drawerLink}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#newsletter"
              className={`${styles.drawerLink} ${styles.drawerCta}`}
              onClick={() => setOpen(false)}
            >
              The Inner Letter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
