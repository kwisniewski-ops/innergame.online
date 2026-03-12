'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, rafId, particles = [], orbs = []

    function resize() {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      initScene()
    }

    function initScene() {
      const dustCount = Math.floor((W * H) / 9000)
      particles = Array.from({ length: dustCount }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        r:     Math.random() * 1.4 + 0.2,
        vx:    (Math.random() - 0.5) * 0.12,
        vy:    (Math.random() - 0.5) * 0.08 - 0.04,
        o:     Math.random() * 0.28 + 0.04,
        pulse: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.006 + 0.002,
      }))

      orbs = [
        { cx: W * 0.72, cy: H * 0.38, r: W * 0.42, alpha: 0.055, phase: 0,   spd: 0.00018 },
        { cx: W * 0.18, cy: H * 0.65, r: W * 0.30, alpha: 0.035, phase: 1.8, spd: 0.00024 },
        { cx: W * 0.50, cy: H * 0.15, r: W * 0.22, alpha: 0.025, phase: 3.2, spd: 0.00030 },
      ]
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      const t = Date.now()

      // Deep vignette base
      const vig = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.max(W,H) * 0.75)
      vig.addColorStop(0, 'rgba(14,14,11,0)')
      vig.addColorStop(1, 'rgba(4,4,3,0.72)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, W, H)

      // Breathing orbs
      orbs.forEach((orb) => {
        const phase   = t * orb.spd + orb.phase
        const breathe = Math.sin(phase) * 0.3 + 1
        const ox = orb.cx + Math.cos(phase * 0.6) * W * 0.04
        const oy = orb.cy + Math.sin(phase * 0.4) * H * 0.06
        const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r * breathe)
        g.addColorStop(0,   `rgba(201,169,110,${orb.alpha * breathe})`)
        g.addColorStop(0.4, `rgba(180,140,80,${orb.alpha * 0.4})`)
        g.addColorStop(1,   'rgba(10,10,8,0)')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, W, H)
      })

      // Thin horizontal gold bar
      const bar = ctx.createLinearGradient(W * 0.2, 0, W * 0.8, 0)
      bar.addColorStop(0,   'rgba(201,169,110,0)')
      bar.addColorStop(0.5, `rgba(201,169,110,${0.04 + Math.sin(t * 0.0004) * 0.015})`)
      bar.addColorStop(1,   'rgba(201,169,110,0)')
      ctx.fillStyle = bar
      ctx.fillRect(W * 0.2, H * 0.0, W * 0.6, 1.5)

      // Floating dust
      particles.forEach((p) => {
        p.x = (p.x + p.vx + W) % W
        p.y = (p.y + p.vy + H) % H
        p.pulse += p.speed
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,169,110,${p.o * (0.6 + Math.sin(p.pulse) * 0.4)})`
        ctx.fill()
      })

      // Slow concentric rings
      const rcx = W * 0.5 + Math.sin(t * 0.00012) * W * 0.05
      const rcy = H * 0.5 + Math.cos(t * 0.00009) * H * 0.06
      for (let i = 0; i < 4; i++) {
        const rph  = t * 0.000055 + i * (Math.PI / 2)
        const rad  = (80 + i * 90) + Math.sin(rph) * 22
        ctx.beginPath()
        ctx.arc(rcx, rcy, rad, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(201,169,110,${0.028 - i * 0.005})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Bottom fade
      const fade = ctx.createLinearGradient(0, H * 0.7, 0, H)
      fade.addColorStop(0, 'rgba(10,10,8,0)')
      fade.addColorStop(1, 'rgba(10,10,8,0.65)')
      ctx.fillStyle = fade
      ctx.fillRect(0, H * 0.7, W, H * 0.3)

      rafId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement)
    resize()
    draw()
    return () => { ro.disconnect(); cancelAnimationFrame(rafId) }
  }, [])

  return (
    <section className={styles.hero} id="home">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          Sports Performance · Philosophy · Authorship
          <span className={styles.eyebrowLine} />
        </p>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>The Game Is Won</span>
          <span className={`${styles.titleLine} ${styles.titleAccent}`}>
            <em>Inside First.</em>
          </span>
        </h1>

        <p className={styles.sub}>
          Kyle Wisniewski translates Stoic philosophy and Adlerian psychology
          into a single, lived framework — for athletes and high-performers
          who know the outer game is won inside first.
        </p>

        <div className={styles.actions}>
          <a href="#work" className={styles.btnPrimary}>Choose Your Challenge</a>
          <a href="#philosophy" className={styles.btnGhost}>The Inner Game</a>
        </div>

        <div className={styles.credStrip}>
          {['Stoic Philosophy', 'Adlerian Psychology', 'T5 Method', 'innergame.online'].map((c, i, arr) => (
            <span key={c}>
              <span className={styles.credItem}>{c}</span>
              {i < arr.length - 1 && <span className={styles.credDot}>·</span>}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollLabel}>Explore</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
