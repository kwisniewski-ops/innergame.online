'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgText} aria-hidden="true">INNER</div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>The Performance Philosophy Studio</span>

        <h1 className={styles.headline}>
          The game is won<br /><em>inside first.</em>
        </h1>

        <p className={styles.sub}>Most train the body. Few train the mind that moves it.</p>

        <p className={styles.body}>
          INNERGAME is where serious athletes and ambitious humans come to understand
          what is actually happening beneath every result, every decision, every season.
          Not motivation. Architecture.
        </p>

        <div className={styles.actions}>
          <a href="#letter" className={styles.btnPrimary}>Read the Letter</a>
          <a href="#studio" className={styles.btnGhost}>Explore the Studio</a>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
