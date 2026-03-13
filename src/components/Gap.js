'use client'

import { useReveal } from '@/hooks/useReveal'
import styles from './Gap.module.css'

const TAGS = ['Not Motivational', 'Not Clinical', 'Not Corporate', 'Philosophical', 'Embodied', 'Authored']

export default function Gap() {
  const ref = useReveal()

  return (
    <div className={styles.gap} ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.quoteWrap} reveal`}>
          <blockquote className={styles.quote}>
            "Not every athlete reads Seneca.<br />
            The ones who do <em>win differently.</em>"
          </blockquote>
          <cite className={styles.cite}>— INNERGAME · The Performance Philosophy Studio</cite>
        </div>

        <div className={`${styles.content} reveal reveal-delay-2`}>
          <span className="section-label">The Gap</span>
          <h2 className={styles.heading}>
            A market that<br />left its best<br /><em>readers behind.</em>
          </h2>
          <p className={styles.body}>
            The performance coaching world divides into three categories, none of them
            serving you. Generic fitness influencers offer mass appeal and zero depth.
            Clinical sports psychologists offer credentials and clinical distance. Executive
            coaches offer corporate framing and corporate prices.
          </p>
          <p className={styles.body}>
            No one occupies the intersection of philosophical rigor, embodied experience,
            and serious writing. No one has claimed the space where Aurelius meets the
            athlete. That space is ours.
          </p>
          <div className={styles.tags}>
            {TAGS.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
