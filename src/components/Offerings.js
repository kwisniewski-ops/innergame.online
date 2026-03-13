'use client'

import { useReveal } from '@/hooks/useReveal'
import styles from './Offerings.module.css'

export default function Offerings() {
  const ref = useReveal()

  return (
    <div id="studio" ref={ref}>
      <div className={styles.header}>
        <div className="reveal">
          <span className="section-label">The Studio</span>
          <h2 className={styles.heading}>
            One studio.<br />Four distinct<br /><em>experiences.</em>
          </h2>
        </div>
        <p className={`${styles.headerBody} reveal reveal-delay-1`}>
          Each offering is a named, branded experience — not a product tier. Names carry
          weight. Weight commands price. Price signals value. Every entry point is designed
          to meet you where you are and move you toward where you can be.
        </p>
      </div>

      <div className={`${styles.grid} reveal`}>

        {/* Featured — The Atelier */}
        <div className={`${styles.card} ${styles.featured}`}>
          <div>
            <span className={styles.scarcity}>4 Clients · Maximum · Currently Accepting</span>
            <span className={styles.tag}>The Premium Experience · $750 / Month</span>
            <div className={styles.name}>The Atelier</div>
            <p className={styles.featuredDesc}>
              Direct 1:1 work with Kyle. A bespoke T5 architecture built for your exact
              performance context. This is not coaching — it is a private performance studio.
            </p>
          </div>
          <div>
            <ul className={styles.features}>
              <li>Bespoke T5 Timescale plan built from first principles</li>
              <li>Weekly private sessions — structured for your goals</li>
              <li>Direct access between sessions for real-time decisions</li>
              <li>Full Archive access included</li>
              <li>3-month minimum commitment · Maximum 4 clients globally</li>
            </ul>
            <a href="/contact" className={styles.ctaFeatured}>Request Admission</a>
            <p className={styles.note}>
              Admission via application. Scarcity is not a tactic — it is a requirement of the work.
            </p>
          </div>
        </div>

        {/* The Architecture */}
        <div className={styles.card}>
          <span className={styles.tag}>Foundation · $147 / Month</span>
          <div className={styles.name}>The Architecture</div>
          <p className={styles.price}>12-Week Self-Paced Program</p>
          <p className={styles.desc}>
            The structured deep-dive into your performance psychology, built on the T5 framework.
            Not a course — an architecture. You will emerge with a complete personal philosophy of
            performance that functions under pressure, in competition, and across a career.
          </p>
          <ul className={styles.features} style={{ marginTop: '1.5rem' }}>
            <li>12 weeks of T5-mapped exercises and frameworks</li>
            <li>Full Archive access across all timescales</li>
            <li>Community cohort — seasonal intake, limited seats</li>
            <li>Written reflections reviewed by Kyle</li>
          </ul>
          <a href="/contact" className={styles.cta}>Begin the Architecture</a>
        </div>

        {/* The Archive */}
        <div className={styles.card} id="archive">
          <span className={styles.tag}>Intellectual Library · $29 / Month</span>
          <div className={styles.name}>The Archive</div>
          <p className={styles.price}>Complete Essay Library</p>
          <p className={styles.desc}>
            The complete library of INNERGAME essays, organized by T5 timescale. Every argument
            developed. Every insight archived. The intellectual record of the studio — searchable,
            filterable, and growing weekly. Essays that age like wine.
          </p>
          <ul className={styles.features} style={{ marginTop: '1.5rem' }}>
            <li>Full access to every published essay</li>
            <li>Organized by T5 timescale — find exactly what you need</li>
            <li>New essays added weekly from The Sovereign Letter</li>
            <li>Search by concept, philosopher, or performance context</li>
          </ul>
          <a href="/writing" className={styles.cta}>Access the Archive</a>
        </div>

      </div>
    </div>
  )
}
