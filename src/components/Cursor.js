'use client'

import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const ringRef = useRef(null)
  const dotRef  = useRef(null)

  useEffect(() => {
    const ring = ringRef.current
    const dot  = dotRef.current
    if (!ring || !dot) return

    let mx = -200, my = -200
    let cx = -200, cy = -200
    let rafId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const tick = () => {
      cx += (mx - cx) * 0.18
      cy += (my - cy) * 0.18
      ring.style.left = mx + 'px'
      ring.style.top  = my + 'px'
      dot.style.left  = cx + 'px'
      dot.style.top   = cy + 'px'
      rafId = requestAnimationFrame(tick)
    }

    const addHover = (e) => {
      const el = e.target.closest('a, button, [data-cursor-hover]')
      if (el) ring.classList.add(styles.hover)
    }
    const removeHover = () => ring.classList.remove(styles.hover)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', addHover)
    document.addEventListener('mouseout', removeHover)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', addHover)
      document.removeEventListener('mouseout', removeHover)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
      <div ref={dotRef}  className={styles.dot}  aria-hidden="true" />
    </>
  )
}
