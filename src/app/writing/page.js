import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllEssays, T5_TIERS } from '@/lib/essays'
import styles from './writing.module.css'

export const metadata = {
  title: 'The Archive — All Essays',
  description:
    'The complete INNERGAME essay archive. Every piece of writing, organized by T5 timescale. Performance philosophy, Stoicism, Adlerian psychology — for serious athletes.',
}

export default function WritingPage() {
  const essays = getAllEssays()

  return (
    <>
      <Nav />
      <main className={styles.main}>
        {/* Page header */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <span className="section-label">The Archive</span>
            <h1 className={styles.heroTitle}>
              We Can <em>Learn Anything.</em>
            </h1>
            <p className={styles.heroSub}>
              Every essay, organized by T5 timescale. Not AI written. Not
              written for performance. These are thoughts forged in competition
              and clarified by philosophy — genuinely my own.
            </p>
          </div>
        </header>

        <hr className="hr-gold" />

        {/* Essay grid */}
        <section className={styles.archive}>
          <div className={styles.archiveInner}>
            <div className={styles.grid}>
              {essays.map((essay) => (
                <Link
                  key={essay.slug}
                  href={`/writing/${essay.slug}`}
                  className={styles.card}
                >
                  <div
                    className={styles.cardImg}
                    style={{ background: essay.glyphBg }}
                    aria-hidden="true"
                  >
                    <span className={styles.cardGlyph}>{essay.glyph}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardTier}>
                      {T5_TIERS[essay.tier]?.label ?? essay.tier}
                    </span>
                    <h2 className={styles.cardTitle}>{essay.title}</h2>
                    <p className={styles.cardExcerpt}>{essay.excerpt}</p>
                    <div className={styles.cardMeta}>
                      <span>{essay.readTime}</span>
                      <span className={styles.cardRead}>Read Essay →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
