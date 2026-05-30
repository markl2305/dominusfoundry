'use client'

/* HyperionScan.tsx — live LiDAR point-cloud capture (canvas). Ported from hyperion-scan.jsx. */
import { useEffect, useRef } from 'react'

export default function HyperionScan({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0,
      H = 0,
      raf = 0,
      running = true
    const t0 = performance.now()

    const root = canvas.closest('.df-site') as HTMLElement | null
    const css = root ? getComputedStyle(root) : getComputedStyle(document.documentElement)
    const gold = (css.getPropertyValue('--gold-hi') || '#f4cd7c').trim()
    const ember = (css.getPropertyValue('--ember') || '#f0732e').trim()
    const goldRGB = hexToRGB(gold),
      emberRGB = hexToRGB(ember)

    // ---- build the point cloud of a scanned interior (camera-space coords) ----
    const P: { x: number; y: number; z: number; seen: number }[] = []
    const NEAR = 1.4,
      FAR = 8.2,
      WALL = 3.0,
      FLOOR = -1.9,
      CEIL = 1.7
    const push = (x: number, y: number, z: number) => P.push({ x, y, z, seen: 0 })
    for (let x = -WALL; x <= WALL; x += 0.34) for (let z = NEAR; z <= FAR; z += 0.34) push(x, FLOOR, z)
    for (let x = -WALL; x <= WALL; x += 0.6) for (let z = NEAR; z <= FAR; z += 0.6) push(x, CEIL, z)
    for (let x = -WALL; x <= WALL; x += 0.3) for (let y = FLOOR; y <= CEIL; y += 0.3) push(x, y, FAR)
    for (let z = NEAR; z <= FAR; z += 0.34)
      for (let y = FLOOR; y <= CEIL; y += 0.42) {
        push(-WALL, y, z)
        push(WALL, y, z)
      }
    const box = (cx: number, cz: number, w: number, d: number, hh: number, step: number) => {
      for (let x = -w; x <= w; x += step) for (let z = -d; z <= d; z += step) push(cx + x, FLOOR + hh, cz + z)
      for (let y = 0; y <= hh; y += step)
        for (let x = -w; x <= w; x += step) {
          push(cx + x, FLOOR + y, cz - d)
          push(cx + x, FLOOR + y, cz + d)
        }
      for (let y = 0; y <= hh; y += step)
        for (let z = -d; z <= d; z += step) {
          push(cx - w, FLOOR + y, cz + z)
          push(cx + w, FLOOR + y, cz + z)
        }
    }
    box(-1.5, 4.2, 0.5, 0.4, 1.7, 0.26)
    box(1.7, 5.6, 0.55, 0.45, 1.4, 0.28)
    P.forEach((p) => {
      p.x += (Math.random() - 0.5) * 0.04
      p.y += (Math.random() - 0.5) * 0.04
      p.z += (Math.random() - 0.5) * 0.04
      p.seen = 0
    })

    function resize() {
      const r = canvas!.getBoundingClientRect()
      W = r.width
      H = r.height
      canvas!.width = Math.max(1, W * dpr)
      canvas!.height = Math.max(1, H * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function frame(now: number) {
      if (!running) return
      const t = (now - t0) / 1000
      const f = Math.min(W, H) * 0.92
      const cx = W * 0.5,
        cy = H * 0.46
      const yaw = Math.sin(t * 0.22) * 0.26 * (reduce ? 0 : 1)
      const sweep = NEAR + (FAR - NEAR) * (0.5 - 0.5 * Math.cos(t * 0.62))
      const cy2 = Math.cos(yaw),
        sy2 = Math.sin(yaw),
        pivot = 4.6

      ctx!.clearRect(0, 0, W, H)
      ctx!.globalCompositeOperation = 'source-over'

      for (let i = 0; i < P.length; i++) {
        const p = P[i]
        const dz = p.z - pivot
        const rx = p.x * cy2 - dz * sy2
        const rz = pivot + p.x * sy2 + dz * cy2
        if (rz <= 0.4) continue
        const inv = f / rz
        const sx = cx + rx * inv
        const sy = cy - p.y * inv
        if (sx < -20 || sx > W + 20 || sy < -20 || sy > H + 20) continue

        const d = p.z - sweep
        let r: number, g: number, b: number, a: number, rad: number
        const depthFade = Math.max(0.25, Math.min(1, (FAR - p.z + 2.0) / FAR))
        if (Math.abs(d) < 0.45) {
          p.seen = 1
          const k = 1 - Math.abs(d) / 0.45
          r = goldRGB[0]
          g = goldRGB[1]
          b = goldRGB[2]
          a = 0.95 * k + 0.4
          rad = 1.1 + k * 2.2 + inv * 0.02
        } else if (p.z < sweep || p.seen) {
          r = 176
          g = 206
          b = 230
          a = 0.62 * depthFade
          rad = 0.9 + inv * 0.045
        } else {
          r = 130
          g = 152
          b = 178
          a = 0.16 * depthFade
          rad = 0.6
        }
        ctx!.beginPath()
        ctx!.fillStyle = `rgba(${r},${g},${b},${a.toFixed(3)})`
        ctx!.arc(sx, sy, Math.max(0.6, rad), 0, Math.PI * 2)
        ctx!.fill()
      }

      ctx!.globalCompositeOperation = 'lighter'
      const planeInv = f / Math.max(0.5, (sweep - pivot) * cy2 + pivot)
      const yTop = cy - CEIL * planeInv,
        yBot = cy - FLOOR * planeInv
      const grad = ctx!.createLinearGradient(0, yTop, 0, yBot)
      grad.addColorStop(0, `rgba(${emberRGB[0]},${emberRGB[1]},${emberRGB[2]},0)`)
      grad.addColorStop(0.5, `rgba(${goldRGB[0]},${goldRGB[1]},${goldRGB[2]},0.16)`)
      grad.addColorStop(1, `rgba(${emberRGB[0]},${emberRGB[1]},${emberRGB[2]},0)`)
      ctx!.fillStyle = grad
      ctx!.fillRect(0, yTop, W, yBot - yTop)
      ctx!.globalCompositeOperation = 'source-over'

      raf = requestAnimationFrame(frame)
    }

    function hexToRGB(hex: string) {
      hex = hex.replace('#', '')
      if (hex.length === 3)
        hex = hex
          .split('')
          .map((c) => c + c)
          .join('')
      const n = parseInt(hex, 16)
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
    }

    resize()
    raf = requestAnimationFrame(frame)
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(resize)
    })
    ro.observe(canvas)
    const onVis = () => {
      running = !document.hidden
      if (running) raf = requestAnimationFrame(frame)
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return <canvas ref={ref} className={`hyperion-scan-canvas ${className}`} />
}
