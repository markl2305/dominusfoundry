'use client'
/* Sparse hero embers, shared by /pitch and every page hero (2026-10-14).
   Moved unchanged out of app/pitch/ui.tsx, which re-exports it. */
import { useEffect, useRef } from 'react'

/* ============================================================================
   EMBERS — sparse, hero only.
   Apple polish 2026-11-02 (H-3): no ember is drawn over the hero's words. The
   boxes of the headline, lead, eyebrow, buttons, chips and crest (plus a 20px
   margin) are measured, and a particle inside one is skipped.
   Sol r2 N1 (2026-11-03): nothing moves without a user action, so the embers are
   a single still frame. It is drawn once, and drawn again only when the hero's
   size changes or the fonts settle (the keep-out boxes move). There is no
   animation loop and nothing starts when the hero scrolls into view. Under
   reduced motion the stylesheets still hide the canvas, as before.
   ========================================================================== */
export default function HeroEmbers() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const cv = ref.current; if (!cv) return
    const ctx = cv.getContext('2d'); if (!ctx) return
    type P = { x: number; y: number; r: number; a: number }
    type R = { l: number; t: number; r: number; b: number }
    const PAD = 20
    // particle positions as fractions of the hero, fixed for the page view so a redraw only re-fits them
    const P: P[] = Array.from({ length: 38 }, () => ({ x: Math.random(), y: Math.random(), r: 0.6 + Math.random() * 1.6, a: 0.25 + Math.random() * 0.55 }))
    const draw = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1), w = cv.clientWidth, h = cv.clientHeight
      if (!w || !h) return
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const host = cv.parentElement, o = cv.getBoundingClientRect()
      const keepOut: R[] = host ? Array.from(host.querySelectorAll<HTMLElement>('h1, h2, p, .eyebrow, .btn, .chip, .crest')).map((el) => el.getBoundingClientRect()).filter((r) => r.width > 0 && r.height > 0)
        .map((r) => ({ l: r.left - o.left - PAD, t: r.top - o.top - PAD, r: r.right - o.left + PAD, b: r.bottom - o.top + PAD })) : []
      ctx.clearRect(0, 0, w, h); ctx.fillStyle = '#dd9244'
      for (const q of P) {
        const x = q.x * w, y = q.y * h
        if (keepOut.some((k) => x > k.l && x < k.r && y > k.t && y < k.b)) continue
        ctx.globalAlpha = q.a * Math.max(0, Math.min(1, y / h))
        ctx.beginPath(); ctx.arc(x, y, q.r, 0, 6.283); ctx.fill()
      }
    }
    draw()
    const ro = new ResizeObserver(() => draw()); if (cv.parentElement) ro.observe(cv.parentElement)
    let alive = true; document.fonts?.ready.then(() => { if (alive) draw() })
    return () => { alive = false; ro.disconnect() }
  }, [])
  return <canvas className="embers" aria-hidden="true" ref={ref} />
}
