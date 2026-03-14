'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useScrolled } from '@/hooks/useScrolled'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { href: '#method',  label: 'The Method' },
  { href: '/writing', label: 'The Essays' },
  { href: '#studio',  label: 'The Studio' },
  { href: '#about',   label: 'The Founder' },
]

export default function Nav() {
  const scrolled = useScrolled(80)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>

      <Link href="/" className={styles.logoWrap}>
        <span className={styles.logo}>INNER<span>GAME</span></span>
      </Link>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className={styles.link}>{label}</a>
          </li>
        ))}
        <li>
          <a href="#letter" className={`${styles.link} ${styles.cta}`}>
            Begin Here
          </a>
        </li>
      </ul>

      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span /><span /><span />
      </button>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.drawerLink} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#letter" className={`${styles.drawerLink} ${styles.drawerCta}`} onClick={() => setOpen(false)}>
              Begin Here
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
