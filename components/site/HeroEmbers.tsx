'use client'
/* Sparse hero embers, shared by /pitch and every page hero (2026-10-14).
   Moved unchanged out of app/pitch/ui.tsx, which re-exports it. */
import { useEffect, useRef } from 'react'

/* ============================================================================
   EMBERS — sparse, hero only, paused off-screen and when the tab is hidden.
   Removed entirely under reduced motion.
   ========================================================================== */
export default function HeroEmbers() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const cv = ref.current; if (!cv) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return
    const ctx = cv.getContext('2d'); if (!ctx) return
    let w = 0, h = 0, running = false, raf = 0, last = 0, visible = true
    type P = { x: number; y: number; vy: number; vx: number; r: number; a: number; ph: number }
    const P: P[] = []
    const size = () => { const dpr = Math.min(2, window.devicePixelRatio || 1); w = cv.clientWidth; h = cv.clientHeight; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0) }
    const spawn = (init: boolean): P => ({ x: Math.random() * w, y: init ? Math.random() * h : h + 10, vy: 14 + Math.random() * 26, vx: (Math.random() - 0.5) * 10, r: 0.6 + Math.random() * 1.6, a: 0.25 + Math.random() * 0.55, ph: Math.random() * 6.28 })
    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now
      ctx.clearRect(0, 0, w, h)
      for (const q of P) {
        q.y -= q.vy * dt; q.ph += dt * 1.3; q.x += (q.vx + Math.sin(q.ph) * 6) * dt
        const life = Math.max(0, Math.min(1, q.y / h))
        ctx.globalAlpha = q.a * life; ctx.fillStyle = '#dd9244'
        ctx.beginPath(); ctx.arc(q.x, q.y, q.r, 0, 6.283); ctx.fill()
        if (q.y < -10) Object.assign(q, spawn(false))
      }
      if (running) raf = requestAnimationFrame(frame)
    }
    const start = () => { if (running) return; running = true; last = performance.now(); raf = requestAnimationFrame(frame) }
    const halt = () => { running = false; cancelAnimationFrame(raf) }
    size(); for (let i = 0; i < 38; i++) P.push(spawn(true))
    window.addEventListener('resize', size)
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !document.hidden) start(); else halt() }); io.observe(cv)
    const onVis = () => { if (visible && !document.hidden) start(); else halt() }
    document.addEventListener('visibilitychange', onVis)
    const onMq = () => { if (mq.matches) { halt(); ctx.clearRect(0, 0, w, h) } }
    mq.addEventListener('change', onMq)
    return () => { halt(); io.disconnect(); window.removeEventListener('resize', size); document.removeEventListener('visibilitychange', onVis); mq.removeEventListener('change', onMq) }
  }, [])
  return <canvas className="embers" aria-hidden="true" ref={ref} />
}
