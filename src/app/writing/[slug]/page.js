import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getEssayBySlug, getAllSlugs, T5_TIERS } from '@/lib/essays'
import styles from './essay.module.css'

// Static params for build-time generation
export function generateStaticParams() {
  return getAllSlugs()
}

// Per-essay metadata — this is the key SEO win vs. a single HTML file
export function generateMetadata({ params }) {
  const essay = getEssayBySlug(params.slug)
  if (!essay) return {}

  return {
    title: essay.title,
    description: essay.excerpt,
    openGraph: {
      title: `${essay.title} | INNERGAME`,
      description: essay.excerpt,
      type: 'article',
      publishedTime: essay.publishedAt,
      authors: ['Kyle Wisniewski'],
      tags: [T5_TIERS[essay.tier]?.label ?? essay.tier],
    },
    twitter: {
      card: 'summary_large_image',
      title: essay.title,
      description: essay.excerpt,
    },
  }
}

export default function EssayPage({ params }) {
  const essay = getEssayBySlug(params.slug)
  if (!essay) notFound()

  const tierLabel = T5_TIERS[essay.tier]?.label ?? essay.tier
  const date = new Date(essay.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <>
      <Nav />
      <main className={styles.main}>
        {/* Hero */}
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

          {/* Banner image placeholder */}
          <div
            className={styles.banner}
            style={{ background: essay.glyphBg }}
            role="img"
            aria-label={`Banner for "${essay.title}"`}
          >
            <span className={styles.bannerGlyph} aria-hidden="true">
              {essay.glyph}
            </span>
          </div>
        </header>

        <hr className="hr-gold" />

        {/* Article body */}
        <article className={styles.article}>
          <div className={styles.articleInner}>
            {/* 
              When Sanity CMS is connected, replace this placeholder with:
              <PortableText value={essay.body} />
              
              For now we render a structured placeholder that shows the
              full essay layout with real typography.
            */}
            <p className={styles.drop}>
              The question beneath every performance is not <em>what</em> you
              do — it is <em>who</em> you are when you do it. This is the
              Inner Game. And it begins not in the weight room, not on the
              field, but in the quiet moments before you ever lace up.
            </p>

            <p>
              Stoic philosophy has a word for the discipline of perception:
              <em> phantasia</em>. Every impression — every moment of
              pressure, every setback, every unexpected outcome — arrives
              first as a raw perception. What you do with that perception
              in the next half-second determines everything. Not talent.
              Not preparation. Perception.
            </p>

            <blockquote className={styles.pullQuote}>
              "Between stimulus and response there is a space. In that
              space is our power to choose our response. In our response
              lies our growth and our freedom."
            </blockquote>

            <p>
              Adlerian psychology adds a complementary lens: the belief
              that behavior is always purposive. You are not driven by
              your past — you are pulled by your future. By the vision of
              who you are choosing to become. The Inner Game is the
              practice of making that vision coherent, vivid, and demanding.
            </p>

            <h2 className={styles.h2}>The T5 Connection</h2>

            <p>
              The T5 Timescale Framework maps this work across five distinct
              layers of human experience — from the breath in the present
              second, to the values that define a lifetime. The Inner Game
              is not one layer. It is the thread that runs through all five.
            </p>

            <p>
              Every T5 tier asks the same question in a different register:
              <em> who are you choosing to be right now?</em> At T1, it is
              the choice to breathe before reacting. At T5, it is the choice
              to live in alignment with what you actually value, regardless
              of what it costs.
            </p>

            <p className={styles.closing}>
              This is what I mean when I say the game is won inside first.
              Not as a metaphor. As a map. — KW
            </p>
          </div>
        </article>

        <hr className="hr-gold" />

        {/* CTA strip */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <p className={styles.ctaLabel}>Continue the work</p>
            <h2 className={styles.ctaTitle}>
              Ready to architect your<br />
              <em>performance from the inside?</em>
            </h2>
            <div className={styles.ctaActions}>
              <a href="/#work" className="btn-primary">Work With Kyle</a>
              <Link href="/writing" className="btn-ghost">More Essays →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
