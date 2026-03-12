import styles from './Marquee.module.css'

const PHRASES = [
  'The Architecture of Excellence',
  'Stoic Philosophy',
  'The T5 Method',
  'Adlerian Psychology',
  'Author Your Excellence',
  'The Sovereign Letter',
]

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...PHRASES, ...PHRASES]

  return (
    <div className={styles.wrap}>
      <div className={styles.track} aria-hidden="true">
        {items.map((phrase, i) => (
          <span key={i} className={styles.item}>
            {phrase}
            {i < items.length - 1 && (
              <span className={styles.dot}>·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
