'use client'

/* Embers.tsx — forge-fire ember field (canvas). Ported from embers.jsx. */
import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  r: number
  vy: number
  vx: number
  drift: number
  phase: number
  flick: number
  life: number
  ttl: number
  c: string
  bright: boolean
}

export default function Embers({
  intensity = 1,
  density = 1,
  className = 'embers-canvas',
  rise = 1,
}: {
  intensity?: number
  density?: number
  className?: string
  rise?: number
}) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const intensityRef = useRef(intensity)
  intensityRef.current = intensity

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0,
      h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let parts: Particle[] = []
    let raf = 0,
      last = performance.now()
    let running = true

    // read accent colours from CSS so embers match the active theme
    const css = getComputedStyle(document.documentElement)
    const root = canvas.closest('.df-site') as HTMLElement | null
    const readVar = (name: string, fallback: string) => {
      const fromRoot = root ? getComputedStyle(root).getPropertyValue(name) : ''
      return (fromRoot || css.getPropertyValue(name) || fallback).trim()
    }
    const ember = readVar('--ember', '#f0732e')
    const gold = readVar('--gold', '#e7b352')
    const goldHi = readVar('--gold-hi', '#f4cd7c')
    const palette = [ember, ember, gold, gold, goldHi]

    function resize() {
      const r = canvas!.getBoundingClientRect()
      w = r.width
      h = r.height
      canvas!.width = Math.max(1, w * dpr)
      canvas!.height = Math.max(1, h * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function target() {
      const base = Math.sqrt(w * h) / 11
      return Math.round(base * density * intensityRef.current * (reduce ? 0.25 : 1))
    }

    function spawn(seed: boolean): Particle {
      const fromBottom = h * (0.62 + Math.random() * 0.5)
      return {
        x: Math.random() * w,
        y: seed ? Math.random() * h : fromBottom,
        r: 0.6 + Math.random() * 1.9,
        vy: (0.18 + Math.random() * 0.62) * rise,
        vx: (Math.random() - 0.5) * 0.22,
        drift: 0.4 + Math.random() * 1.2,
        phase: Math.random() * Math.PI * 2,
        flick: 0.6 + Math.random() * 0.9,
        life: 0,
        ttl: 220 + Math.random() * 360,
        c: palette[(Math.random() * palette.length) | 0],
        bright: Math.random() < 0.14,
      }
    }

    function reset() {
      resize()
      parts = []
      const n = target()
      for (let i = 0; i < n; i++) parts.push(spawn(true))
    }

    const spriteCache: Record<string, HTMLCanvasElement> = {}
    function sprite(color: string) {
      if (spriteCache[color]) return spriteCache[color]
      const s = document.createElement('canvas')
      s.width = s.height = 48
      const sc = s.getContext('2d')!
      const g = sc.createRadialGradient(24, 24, 0, 24, 24, 24)
      g.addColorStop(0, hexA(color, 1))
      g.addColorStop(0.32, hexA(color, 0.55))
      g.addColorStop(1, hexA(color, 0))
      sc.fillStyle = g
      sc.fillRect(0, 0, 48, 48)
      spriteCache[color] = s
      return s
    }

    function hexA(hex: string, a: number) {
      hex = hex.replace('#', '')
      if (hex.length === 3)
        hex = hex
          .split('')
          .map((c) => c + c)
          .join('')
      const n = parseInt(hex, 16)
      const r = (n >> 16) & 255,
        g = (n >> 8) & 255,
        b = n & 255
      return `rgba(${r},${g},${b},${a.toFixed(3)})`
    }

    function frame(now: number) {
      if (!running) return
      const dt = Math.min(2.4, (now - last) / 16.67)
      last = now
      ctx!.clearRect(0, 0, w, h)
      ctx!.globalCompositeOperation = 'lighter'

      const want = target()
      if (parts.length < want && Math.random() < 0.5) parts.push(spawn(false))

      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i]
        p.life += dt
        p.phase += 0.04 * p.flick * dt
        p.y -= p.vy * dt
        p.x += (p.vx + Math.sin(p.phase) * 0.012 * p.drift) * dt * 6

        const lifeRatio = p.life / p.ttl
        if (p.y < -10 || lifeRatio >= 1 || parts.length > want * 1.3) {
          parts.splice(i, 1)
          continue
        }
        const fade = Math.min(1, p.life / 18) * (1 - lifeRatio)
        const flicker = 0.65 + 0.35 * Math.sin(p.phase * 2.1)
        const a = Math.max(0, fade * flicker) * (p.bright ? 1 : 0.8)
        const rr = p.r * (p.bright ? 1.5 : 1)
        const size = rr * 8
        ctx!.globalAlpha = Math.min(1, a)
        ctx!.drawImage(sprite(p.bright ? goldHi : p.c), p.x - size / 2, p.y - size / 2, size, size)
      }
      ctx!.globalAlpha = 1
      ctx!.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(frame)
    }

    reset()
    raf = requestAnimationFrame(frame)

    let roRaf = 0,
      lastW = w,
      lastH = h
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(roRaf)
      roRaf = requestAnimationFrame(() => {
        const r = canvas!.getBoundingClientRect()
        if (Math.abs(r.width - lastW) < 2 && Math.abs(r.height - lastH) < 2) return
        lastW = r.width
        lastH = r.height
        reset()
      })
    })
    ro.observe(canvas)
    const onVis = () => {
      running = !document.hidden
      if (running) {
        last = performance.now()
        raf = requestAnimationFrame(frame)
      }
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      cancelAnimationFrame(roRaf)
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVis)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [density, rise])

  return <canvas ref={ref} className={className} />
}
