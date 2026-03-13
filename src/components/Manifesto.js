'use client'

import { useReveal } from '@/hooks/useReveal'
import styles from './Manifesto.module.css'

const PILLARS = [
  {
    roman: 'I',
    title: 'Philosophical Depth',
    body: 'We go where no fitness brand dares — into Stoicism, Adlerian psychology, and the examined life. Seneca, Aurelius, and Adler are not decorations here. They are instruments. The intellectual standard is the brand\'s moat, and we do not lower it.',
  },
  {
    roman: 'II',
    title: 'Embodied Authority',
    body: 'Every insight published here has been forged in competition, in the weight room, in the pressure moment. The credential is not academic. It is the body, the journal, and the accumulated consequence of taking both the inner and outer game seriously.',
  },
  {
    roman: 'III',
    title: 'Authored Excellence',
    body: 'We believe the pen is a performance tool. Writing clarifies values. Clarified values produce better athletes. Writing is not a marketing tactic here — it is the method. The essay is the training session.',
  },
]

export default function Manifesto() {
  const ref = useReveal()

  return (
    <div className={styles.manifesto} ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.left} reveal`}>
          <span className="section-label">The Position</span>
          <h2 className={styles.heading}>
            The only studio<br />that treats the<br /><em>inner game seriously.</em>
          </h2>
        </div>
        <div className={`${styles.right} reveal reveal-delay-2`}>
          <p className={styles.leadText}>
            INNERGAME is not a coaching brand. It is not a self-help platform. It is a
            performance philosophy studio — the only institution that treats the inner game
            with the same rigor, depth, and craft that elite athletes apply to the outer one.
          </p>
          <p className={styles.bodyText}>
            We go where no fitness brand dares. Into Seneca. Into Adler. Into the examined
            life that philosophers have always known is the prerequisite to the excellent one.
          </p>
        </div>
      </div>

      <div className={styles.pillarsWrap}>
        <div className={`${styles.pillars} reveal`}>
          {PILLARS.map((p) => (
            <div key={p.roman} className={styles.pillar}>
              <div className={styles.roman}>{p.roman}</div>
              <h4 className={styles.pillarTitle}>{p.title}</h4>
              <p className={styles.pillarBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
