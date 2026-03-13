import Link from 'next/link'
import styles from './Footer.module.css'

const THE_STUDIO = [
  { href: '#method',  label: 'The T5 Method' },
  { href: '#studio',  label: 'The Architecture' },
  { href: '#studio',  label: 'The Atelier' },
  { href: '#archive', label: 'The Archive' },
  { href: '#about',   label: 'About Kyle' },
]

const THE_LETTER = [
  { href: '#letter',  label: 'Subscribe Free' },
  { href: '/writing', label: 'Essay Archive' },
  { href: '#method',  label: 'T5 Framework' },
  { href: '/writing', label: 'Latest Essay' },
]

const CONNECT = [
  { href: 'https://www.instagram.com/innergame.online/', label: 'Instagram', external: true },
  { href: 'https://tiktok.com/@innergame.online',        label: 'TikTok',    external: true },
  { href: 'https://www.youtube.com/@innergame.online',   label: 'YouTube',   external: true },
  { href: '/contact',                                     label: 'Contact Kyle', external: false },
  { href: '/contact',                                     label: 'Speaking',  external: false },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>INNER<span>GAME</span></Link>
          <p>The Performance Philosophy Studio. Where philosophy meets the body, and the body meets the page.</p>
          <span className={styles.tagline}>For those who choose their challenge.</span>
        </div>

        <FooterCol title="The Studio" links={THE_STUDIO} />
        <FooterCol title="The Letter" links={THE_LETTER} />
        <FooterCol title="Connect"    links={CONNECT} />
      </div>

      <div className={styles.bottom}>
        <p>© 2026 INNERGAME Studio · Kyle Wisniewski · innergame.online</p>
        <p>The game is won inside first.</p>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h5 className={styles.colTitle}>{title}</h5>
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
