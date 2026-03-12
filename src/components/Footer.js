import Link from 'next/link'
import styles from './Footer.module.css'

const NAVIGATE = [
  { href: '#philosophy', label: 'The Philosophy' },
  { href: '#method',     label: 'T5 Method'      },
  { href: '#writing',    label: 'Writing'         },
  { href: '#work',       label: 'Work With Me'    },
]

const OFFERINGS = [
  { href: '#newsletter', label: 'The Sovereign Letter' },
  { href: '#work',       label: 'The Architecture'     },
  { href: '#work',       label: 'The Atelier'          },
  { href: '#',           label: 'Speaking'             },
]

const CONNECT = [
  { href: '#', label: 'Instagram'  },
  { href: '#', label: 'Twitter / X'},
  { href: '#', label: 'YouTube'    },
  { href: '#', label: 'Contact Kyle'},
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

        <FooterCol title="Navigate" links={NAVIGATE} />
        <FooterCol title="Offerings" links={OFFERINGS} />
        <FooterCol title="Connect" links={CONNECT} />
      </div>

      <div className={styles.bottom}>
        <p>© 2025 INNERGAME. Kyle Wisniewski. All rights reserved.</p>
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
        {links.map(({ href, label }) => (
          <li key={label}>
            <a href={href} className={styles.colLink}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
