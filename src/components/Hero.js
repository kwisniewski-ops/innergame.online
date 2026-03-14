'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgText} aria-hidden="true">INNER</div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>Performance Philosophy for the Athlete</span>

        <h1 className={styles.headline}>
          The game is won<br /><em>inside first.</em>
        </h1>

        <p className={styles.sub}>Most train the body. Few train the mind that moves it.</p>

        <p className={styles.body}>
          Kyle Wisniewski applies Stoic philosophy and Adlerian psychology to one
          question: why do some athletes compound under pressure while others fragment?
          The answer is always architectural. INNERGAME is the framework.
        </p>

        <div className={styles.actions}>
          <a href="#letter" className={styles.btnPrimary}>Read the Letter</a>
          <a href="#studio" className={styles.btnGhost}>The Work</a>
        </div>
      </div>

      <div className={styles.portrait} aria-hidden="true">
        <img
          src="/images/kyle-hero.jpg"
          alt="Kyle Wisniewski"
          className={styles.portraitImg}
        />
      </div>

    </section>
  )
}
