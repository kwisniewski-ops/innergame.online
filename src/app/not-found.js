import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.inner}>
          <span className="section-label">404</span>
          <h1 className={styles.title}>
            This page doesn't<br />
            <em>exist yet.</em>
          </h1>
          <p className={styles.sub}>
            The game is won inside first — and this path doesn't lead there.
            Let's get you back on course.
          </p>
          <div className={styles.actions}>
            <Link href="/" className="btn-primary">Return Home</Link>
            <Link href="/writing" className="btn-ghost">Read the Archive</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
