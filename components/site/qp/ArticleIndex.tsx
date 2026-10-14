'use client'
/* components/site/qp/ArticleIndex.tsx — quality pass D2 (2026-10-14).
   The in-page section button beside a long article on wide screens (the /pitch
   chapter button, for an essay): it reads the article's own h2 headings,
   names the one being read, and opens a list of them. Rendered only after the
   page has loaded, from headings already on the page; it adds no copy. Hidden
   below 1100px by qp-b.css, where the article is a single column. */
import { useEffect, useRef, useState } from 'react'

type H = { id: string; text: string }
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 64)

export default function ArticleIndex({ label = 'Sections' }: { label?: string }) {
  const ref = useRef<HTMLElement>(null)
  const [heads, setHeads] = useState<H[]>([])
  const [cur, setCur] = useState(0)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const host = ref.current?.closest('.qp-read')
    const hs = Array.from(host?.querySelectorAll<HTMLHeadingElement>('.article h2') ?? [])
    const used = new Set<string>()
    const list = hs.map((h, i) => {
      if (!h.id) { let id = slug(h.textContent || '') || `section-${i + 1}`; while (used.has(id) || document.getElementById(id)) id += `-${i + 1}`; h.id = id }
      used.add(h.id)
      return { id: h.id, text: (h.textContent || '').trim() }
    })
    setHeads(list)
    if (!hs.length) return
    const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { const i = hs.indexOf(e.target as HTMLHeadingElement); if (i >= 0) setCur(i) } }), { rootMargin: '-15% 0px -70% 0px' })
    hs.forEach((h) => io.observe(h))
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    const onDown = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('keydown', onKey); document.addEventListener('mousedown', onDown)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDown) }
  }, [open])
  if (heads.length < 2) return <aside ref={ref} className="qp-index" hidden />
  return <aside ref={ref} className="qp-index" aria-label={label}>
    <button type="button" className="qp-index-btn" aria-expanded={open} aria-controls="qp-index-list" onClick={() => setOpen((v) => !v)}>
      <span>{label}</span><span className="cur">{heads[cur]?.text}</span>
    </button>
    <ol className="qp-index-list" id="qp-index-list" hidden={!open}>
      {heads.map((h, i) => <li key={h.id}><a href={`#${h.id}`} aria-current={i === cur ? 'true' : 'false'} onClick={() => setOpen(false)}>{h.text}</a></li>)}
    </ol>
  </aside>
}
