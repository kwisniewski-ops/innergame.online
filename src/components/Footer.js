import Link from 'next/link'
import styles from './Footer.module.css'

const NAVIGATE = [
  { href: '#philosophy', label: 'The Philosophy' },
  { href: '#method',     label: 'T5 Method'      },
  { href: '#work',       label: 'Work With Me'    },
  { href: '#writing',    label: 'Writing'         },
]

const OFFERINGS = [
  { href: '#newsletter', label: 'The Inner Letter' },
  { href: '/contact',    label: 'The Archive'      },
  { href: '/contact',    label: 'The Atelier'      },
  { href: '/contact',    label: 'Speaking'         },
]

const CONNECT = [
  { href: 'https://www.instagram.com/innergame.online/', label: 'Instagram', external: true },
  { href: 'https://tiktok.com/@innergame.online',        label: 'TikTok',    external: true },
  { href: 'https://www.youtube.com/@innergame.online',   label: 'YouTube',   external: true },
  { href: '/contact',                                     label: 'Contact Kyle', external: false },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.wordmark}>
            INNER<span>GAME</span>
          </Link>
          <p className={styles.tagline}>
            The game is won inside first. Sports performance and authorship,
            interwoven — for those who choose their challenge.
          </p>
          <p className={styles.domain}>innergame.online</p>
        </div>

        <FooterCol title="Navigate"  links={NAVIGATE}  />
        <FooterCol title="Offerings" links={OFFERINGS} />
        <FooterCol title="Connect"   links={CONNECT}   />
      </div>

      <div className={styles.bottom}>
        <p>© 2026 INNERGAME. Wisniewski Holdings LLC. All Rights Reserved.</p>
        <p>Choose Your Challenge.</p>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className={styles.colTitle}>{title}</p>
      <ul className={styles.colLinks}>
        {links.map(({ href, label, external }) => (
          <li key={label}>
            <a
              href={href}
              className={styles.colLink}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
