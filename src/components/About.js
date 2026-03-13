'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import styles from './About.module.css'

export default function About() {
  const ref = useReveal()

  return (
    <div className={styles.architect} id="about" ref={ref}>
      <div className={styles.inner}>

        {/* Left — Photo + Stats */}
        <div className="reveal">
          <div className={styles.imageWrap}>
            <div className={styles.photo}>
              <Image
                src="/kyle.jpg"
                alt="Kyle Wisniewski — Founder, INNERGAME Studio"
                fill
                sizes="(max-width: 960px) 90vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
                className={styles.img}
              />
              <div className={styles.photoOverlay} aria-hidden="true" />
            </div>
            <span className={styles.caption}>
              Kyle Wisniewski · Founder · INNERGAME Studio
            </span>
          </div>
          <div className={styles.stats}>
            <div className={styles.statBlock}>
              <div className={styles.statNum}>T5</div>
              <div className={styles.statLabel}>Framework<br />Timescales</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statNum}>4</div>
              <div className={styles.statLabel}>Atelier Clients<br />Maximum</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statNum}>52</div>
              <div className={styles.statLabel}>Essays<br />Per Year</div>
            </div>
          </div>
        </div>

        {/* Right — Copy */}
        <div className="reveal reveal-delay-2">
          <span className="section-label">The Architect</span>
          <h2 className={styles.heading}>
            Performance is the<br />territory. Character is<br /><em>the compass.</em>
          </h2>

          <p className={styles.lead}>
            Kyle Wisniewski is the founder of INNERGAME and the creator of the T5 Timescale
            Framework — a proprietary system for mapping performance psychology across five
            temporal scales, from the present moment to the legacy question.
          </p>

          <p className={styles.body}>
            He writes. He coaches. He competes. The credential is not a certificate hanging
            on a wall — it is the body, the journal, and the accumulated consequence of
            taking both the inner and outer game seriously for years before anyone was watching.
          </p>

          <div className={styles.pull}>
            <p>
              "The inner game is not a metaphor — it is a map. A map to who you actually are,
              and who you are choosing to become. Performance is the territory. Character is the compass."
            </p>
          </div>

          <p className={styles.body}>
            INNERGAME is the institution Kyle built because no institution like it existed.
            Where Stoicism meets the weight room. Where Adlerian purpose meets competitive drive.
            Where philosophy is not borrowed wisdom but a living practice under pressure.
          </p>

          <a href="#letter" className="btn-ghost" style={{ marginTop: '2rem', display: 'inline-flex' }}>
            Read Kyle's Essays
          </a>
        </div>

      </div>
    </div>
  )
}
