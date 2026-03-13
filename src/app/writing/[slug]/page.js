import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ReadingProgress from '@/components/ReadingProgress'
import { getEssayBySlug, getAllSlugs, T5_TIERS } from '@/lib/essays'
import styles from './essay.module.css'

export function generateStaticParams() {
  return getAllSlugs()
}

export function generateMetadata({ params }) {
  const essay = getEssayBySlug(params.slug)
  if (!essay) return {}
  return {
    title: `${essay.title} | INNERGAME`,
    description: essay.excerpt,
    openGraph: {
      title: `${essay.title} | INNERGAME`,
      description: essay.excerpt,
      type: 'article',
      publishedTime: essay.publishedAt,
      authors: ['Kyle Wisniewski'],
    },
    twitter: {
      card: 'summary_large_image',
      title: essay.title,
      description: essay.excerpt,
    },
  }
}

// Minimal markdown renderer: ## headings, **bold**, *italic*, paragraphs
function renderBody(raw) {
  if (!raw) return []
  const blocks  = []
  const lines   = raw.trim().split('\n')
  let   current = []

  const flush = () => {
    if (current.length) {
      blocks.push({ type: 'p', text: current.join(' ').trim() })
      current = []
    }
  }

  for (const line of lines) {
    const t = line.trim()
    if (!t)                { flush(); continue }
    if (t.startsWith('## ')) { flush(); blocks.push({ type: 'h2', text: t.slice(3) }); continue }
    current.push(t)
  }
  flush()
  return blocks
}

function applyInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,     '<em>$1</em>')
}

export default function EssayPage({ params }) {
  const essay = getEssayBySlug(params.slug)
  if (!essay) notFound()

  const tierLabel = T5_TIERS[essay.tier]?.label ?? essay.tier
  const date = new Date(essay.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
  const blocks = renderBody(essay.body)

  return (
    <>
      {/* Gold progress bar — client island, standalone, no wrapper */}
      <ReadingProgress />

      <Nav />

      <main className={styles.main}>

        {/* ── Hero header ── */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroMeta}>
              <Link href="/writing" className={styles.back}>← The Archive</Link>
              <span className={styles.tier}>{tierLabel}</span>
            </div>
            <h1 className={styles.title}>{essay.title}</h1>
            <p className={styles.excerpt}>{essay.excerpt}</p>
            <div className={styles.byline}>
              <span>Kyle Wisniewski</span>
              <span className={styles.dot}>·</span>
              <time dateTime={essay.publishedAt}>{date}</time>
              <span className={styles.dot}>·</span>
              <span>{essay.readTime}</span>
            </div>
          </div>

          <div
            className={styles.banner}
            style={{ background: essay.glyphBg }}
            role="img"
            aria-label={`T${essay.tier} essay banner`}
          >
            <span className={styles.bannerGlyph} aria-hidden="true">
              {essay.glyph}
            </span>
          </div>
        </header>

        <hr className="hr-gold" />

        {/* ── Article body ── */}
        <article className={styles.article}>
          <div className={styles.articleInner}>
            {blocks.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className={styles.h2}>
                    {block.text}
                  </h2>
                )
              }
              return (
                <p
                  key={i}
                  className={i === 0 ? styles.drop : undefined}
                  dangerouslySetInnerHTML={{ __html: applyInline(block.text) }}
                />
              )
            })}
          </div>
        </article>

        <hr className="hr-gold" />

        {/* ── End CTA ── */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <p className={styles.ctaLabel}>Continue the work</p>
            <h2 className={styles.ctaTitle}>
              Ready to architect your<br />
              <em>performance from the inside?</em>
            </h2>
            <div className={styles.ctaActions}>
              <a href="/contact" className="btn-primary">Work With Kyle</a>
              <Link href="/writing" className="btn-ghost">More Essays →</Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
