'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = []
    let W, H, rafId

    function resize() {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      initParticles()
    }

    function initParticles() {
      const count = Math.floor((W * H) / 13000)
      particles = Array.from({ length: count }, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        r:  Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        o:  Math.random() * 0.3 + 0.05,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Soft gold radial glows
      const g1 = ctx.createRadialGradient(W * 0.65, H * 0.42, 0, W * 0.65, H * 0.42, W * 0.55)
      g1.addColorStop(0, 'rgba(201,169,110,0.055)')
      g1.addColorStop(1, 'rgba(10,10,8,0)')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, W, H)

      const g2 = ctx.createRadialGradient(W * 0.18, H * 0.68, 0, W * 0.18, H * 0.68, W * 0.38)
      g2.addColorStop(0, 'rgba(201,169,110,0.03)')
      g2.addColorStop(1, 'rgba(10,10,8,0)')
      ctx.fillStyle = g2
      ctx.fillRect(0, 0, W, H)

      // Floating particles
      particles.forEach((p) => {
        p.x = (p.x + p.vx + W) % W
        p.y = (p.y + p.vy + H) % H
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,169,110,${p.o})`
        ctx.fill()
      })

      // Slow drifting rings
      const t = Date.now() * 0.0001
      ctx.strokeStyle = 'rgba(201,169,110,0.04)'
      ctx.lineWidth = 0.5
      for (let i = 0; i < 3; i++) {
        const rx = W * (0.28 + i * 0.22) + Math.sin(t + i * 1.3) * 55
        const ry = H * 0.5 + Math.cos(t * 0.7 + i) * 75
        ctx.beginPath()
        ctx.arc(rx, ry, 80 + i * 45, 0, Math.PI * 2)
        ctx.stroke()
      }

      rafId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(() => resize())
    ro.observe(canvas.parentElement)
    resize()
    draw()

    return () => {
      ro.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className={styles.hero} id="home">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          Sports Performance · Philosophy · Authorship
          <span className={styles.eyebrowLine} />
        </p>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>The Game Is Won</span>
          <span className={`${styles.titleLine} ${styles.titleGold}`}>
            <em>Inside First.</em>
          </span>
        </h1>

        <p className={styles.sub}>
          Kyle Wisniewski blends Stoic philosophy with Adlerian psychology to
          develop athletes and high-performers into the fullest version of
          themselves — guided by athletic excellence.
        </p>

        <div className={styles.actions}>
          <a href="#work" className="btn-primary">
            Choose Your Challenge
          </a>
          <a href="#philosophy" className="btn-ghost">
            The Inner Game
          </a>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollLabel}>Explore</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
