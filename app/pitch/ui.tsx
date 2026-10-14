'use client'
/* Interactive parts of /pitch, ported from the approved preview
   (~/Developer/pitch-apple-preview-2026-10-13/index.html, 2026-10-13).
   Behaviour and motion values are the preview's: segmented thumb 250ms,
   index 200ms scale-from-trigger, sheet on a critically damped spring with
   velocity handoff, chart morph 300ms, scrubbing 1:1 with no easing.
   Every figure rendered here is read from claims.ts, finance.ts or
   income-model.ts — nothing is typed by hand. */
import { forwardRef, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from 'react'
import { Segmented, ThemeControl } from '@/components/site/theme'
import SiteMenu from '@/components/site/SiteMenu'
import { PROOF, STATUS_LABEL, type PitchClaim } from './claims'
import { incomeAssumptions as a, incomeScenarios, type IncomeMonth } from './income-model'
import { budgetRows, forward, outflows, plan as p, reserve, target, usd } from './finance'

const useIso = typeof window !== 'undefined' ? useLayoutEffect : useEffect
const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const money = (v: number) => (v < 0 ? `(${usd(-v)})` : usd(v))

/* cubic-bezier solver, so the chart morph uses the exact --ease-in-out curve */
function bezier(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx, cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by
  const sx = (t: number) => ((ax * t + bx) * t + cx) * t, sy = (t: number) => ((ay * t + by) * t + cy) * t, dx = (t: number) => (3 * ax * t + 2 * bx) * t + cx
  return (x: number) => { let t = x; for (let i = 0; i < 8; i++) { const e = sx(t) - x; if (Math.abs(e) < 1e-5) break; const d = dx(t); if (Math.abs(d) < 1e-6) break; t -= e / d } return sy(Math.min(1, Math.max(0, t))) }
}
const easeInOut = bezier(0.77, 0, 0.175, 1)

const Chev = ({ className }: { className?: string }) => <svg className={className} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 2.5 9.5 7 5 11.5" /></svg>

export function Badge({ status }: { status: PitchClaim['status'] }) {
  return <span className={`badge ${status}`}>{STATUS_LABEL[status]}</span>
}

/* SEGMENTED CONTROL and THEME — moved to components/site/theme.tsx
   (2026-10-14) so every route runs the same implementation. */
export { Segmented, useThemePref, ThemeControl } from '@/components/site/theme'
export { default as HeroEmbers } from '@/components/site/HeroEmbers'

/* ============================================================================
   REVEAL — once per element. data-in is written imperatively so React never
   touches it; anything already on screen is revealed before first paint.
   ========================================================================== */
export function useReveal(root: RefObject<HTMLElement>) {
  useIso(() => {
    const html = document.documentElement
    html.classList.add('dfp-js', 'dfp-ready')
    const els = Array.from(root.current?.querySelectorAll<HTMLElement>('.reveal') || [])
    const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { e.target.setAttribute('data-in', ''); io.unobserve(e.target) } }), { rootMargin: '0px 0px -8% 0px' })
    els.forEach((el) => io.observe(el))
    return () => { io.disconnect(); html.classList.remove('dfp-js', 'dfp-ready') }
  }, [])
}

/* ============================================================================
   NAV — material on leaving the hero, current chapter, progress, index.
   ========================================================================== */
export type ChapterRef = { id: string; n: string; name: string }
export function PitchNav({ chapters, ctaHref }: { chapters: ChapterRef[]; ctaHref: string }) {
  const [solid, setSolid] = useState(false)
  const [current, setCurrent] = useState(chapters[0])
  const [open, setOpen] = useState(false)
  const btn = useRef<HTMLButtonElement>(null), idx = useRef<HTMLElement>(null), prog = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = document.getElementById('top')
    const heroIo = hero ? new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { rootMargin: '-64px 0px 0px 0px', threshold: 0 }) : null
    if (hero) heroIo!.observe(hero)
    const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { const c = chapters.find((x) => x.id === e.target.id); if (c) setCurrent(c) } }), { rootMargin: '-40% 0px -55% 0px' })
    chapters.forEach((c) => { const el = document.getElementById(c.id); if (el) io.observe(el) })
    let ticking = false
    const onScroll = () => {
      if (ticking) return; ticking = true
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        if (prog.current) prog.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => { heroIo?.disconnect(); io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [chapters])

  useEffect(() => {
    const list = idx.current
    if (!list) return
    if (open) {
      (list.querySelector<HTMLElement>('[aria-current="true"]') || list.querySelector<HTMLElement>('a'))?.focus({ preventScroll: true })
      const onDown = (e: PointerEvent) => { if (!list.contains(e.target as Node) && !btn.current?.contains(e.target as Node)) setOpen(false) }
      const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus() } }
      document.addEventListener('pointerdown', onDown); document.addEventListener('keydown', onKey)
      return () => { document.removeEventListener('pointerdown', onDown); document.removeEventListener('keydown', onKey) }
    }
  }, [open])

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: reduced() ? 'instant' as ScrollBehavior : 'smooth' })
    btn.current?.focus({ preventScroll: true })
  }
  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    const links = Array.from(idx.current?.querySelectorAll<HTMLElement>('a') || [])
    const i = links.indexOf(document.activeElement as HTMLElement)
    links[(i + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length]?.focus(); e.preventDefault()
  }
  // `inert` is not in React 18's DOM types; set it as an attribute.
  const inertAttr = (open ? {} : { inert: '' }) as Record<string, string>

  return <>
    <header className={`nav${solid ? ' solid' : ''}`} id="nav">
      <div className="wrap nav-in">
        <a className="brand" href="/" aria-label="Dominus Foundry home">
          {/* eslint-disable-next-line @next/next/no-img-element -- same crest file the site already serves */}
          <img src="/brand/crest-full.png" alt="" width="27" height="30" />
          <span className="brand-text"><span className="brand-name">DOMINUS FOUNDRY</span><span className="brand-motto">FIDE ET FAMILIA</span></span>
        </a>
        <div className="nav-mid">
          <button ref={btn} type="button" className="chapter-btn" id="chapterBtn" aria-expanded={open} aria-controls="chapterIndex" aria-label={`Chapters, current: ${current.n}, ${current.name}`} tabIndex={solid ? 0 : -1} onClick={() => setOpen((v) => !v)}>
            <span className="num-tag">{current.n}</span><span className="name">{current.name}</span>
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" /></svg>
          </button>
        </div>
        <div className="nav-right">
          <ThemeControl />
          <SiteMenu />
          <a className="btn btn-solid nav-cta" href={ctaHref}>Discuss the investment</a>
        </div>
      </div>
      <div className="progress" ref={prog} />
    </header>
    <nav className={`index${open ? ' open' : ''}`} id="chapterIndex" aria-label="Chapter index" ref={idx} {...inertAttr}>
      <ol onKeyDown={onListKey}>
        {chapters.map((c) => <li key={c.id}><a href={`#${c.id}`} aria-current={c.id === current.id ? 'true' : 'false'} onClick={(e) => go(e, c.id)}><span className="n">{c.n}</span>{c.name}</a></li>)}
      </ol>
    </nav>
  </>
}

/* ============================================================================
   IV — the layer stack
   ========================================================================== */
export type Layer = { t: string; what: string; platform: string; company: string }
export function LayerStack({ layers }: { layers: Layer[] }) {
  const [sel, setSel] = useState(0)
  const [view, setView] = useState<'platform' | 'company'>('platform')
  const [swapKey, setSwapKey] = useState(0)
  const stack = useRef<HTMLDivElement>(null)
  const select = (i: number, focus = false) => { setSel(i); setSwapKey((k) => k + 1); if (focus) stack.current?.querySelectorAll<HTMLElement>('.layer')[i]?.focus() }
  const l = layers[sel]
  return <>
  {/* Server-rendered and readable with no script: every layer, both halves. Once
      the page has hydrated the tabs below replace this list (pitch.css), and if
      the page script never arrives it is revealed again by the CSS failsafe. */}
  <div className="layer-all reveal" id="layerAll">
    {layers.map((x, i) => <details className="more" key={x.t} open>
      <summary><span className="ln">{i + 1}</span> {x.t} <span className="plus" aria-hidden="true" /></summary>
      <div className="more-body">
        <p className="layer-what">{x.what}</p>
        <p className="layer-platform"><b>Reusable platform</b> {x.platform}</p>
        <p className="layer-company"><b>Company state</b> {x.company}</p>
      </div>
    </details>)}
  </div>
  <div className="stack-wrap reveal">
    <div className="stack" role="tablist" aria-label="Architecture layers" aria-orientation="vertical" id="stack" ref={stack}
      onKeyDown={(e) => { if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return; select((sel + (e.key === 'ArrowDown' ? 1 : layers.length - 1)) % layers.length, true); e.preventDefault() }}>
      {layers.map((x, i) => <button key={x.t} type="button" className="layer" role="tab" id={`layer-${i}`} aria-controls="layerPanel" aria-selected={i === sel} tabIndex={i === sel ? 0 : -1} style={{ '--d': i } as CSSProperties} onClick={() => select(i)}>
        <span className="ln">{i + 1}</span><span className="lt">{x.t}</span><Chev className="chev" />
      </button>)}
    </div>
    <div className="card layer-panel" role="tabpanel" id="layerPanel" aria-labelledby={`layer-${sel}`} aria-live="polite">
      <Segmented<'platform' | 'company'> label="View" id="layerView" value={view} onChange={(v) => { setView(v); setSwapKey((k) => k + 1) }} items={[{ v: 'platform', label: 'Reusable platform' }, { v: 'company', label: 'Company state' }]} />
      <div className={`layer-detail${swapKey && !reduced() ? ' fade-swap' : ''}`} key={swapKey} id="layerDetail">
        <p className="tile-k">Layer {sel + 1} of {layers.length}</p>
        <p className="what">{l.what}</p>
        <p className="split"><b>{view === 'platform' ? 'Reusable platform' : 'Company state'}</b>{l[view]}</p>
      </div>
    </div>
  </div>
  </>
}

/* ============================================================================
   VI — ledger with status filter and the drag-to-dismiss detail sheet.
   Spring: damping 1.0 (no overshoot) everywhere; the sheet is chrome, not a toy.
   ========================================================================== */
const OPERATING = PROOF.filter((c) => c.status !== 'filed')
const GROUPS: Record<string, (c: PitchClaim) => boolean> = {
  all: () => true,
  live: (c) => c.status === 'live_customer' || c.status === 'live_internal',
  progress: (c) => ['contracted', 'in_acceptance', 'proven_path'].includes(c.status),
  notyet: (c) => c.status === 'not_yet',
  roadmap: (c) => c.status === 'roadmap',
}
type GroupKey = 'all' | 'live' | 'progress' | 'notyet' | 'roadmap'

export function ProofLedger() {
  const [group, setGroup] = useState<GroupKey>('all')
  const [animKey, setAnimKey] = useState(0)
  const rows = useMemo(() => OPERATING.filter(GROUPS[group]), [group])
  const n = (k: GroupKey) => OPERATING.filter(GROUPS[k]).length
  const sheet = useRef<SheetApi>(null)
  return <>
    <div className="ledger-tools reveal">
      <Segmented<GroupKey> label="Filter by status" id="ledgerSeg" value={group} onChange={(v) => { setGroup(v); setAnimKey((k) => k + 1) }} items={[
        { v: 'all', label: <>All <span className="count">{n('all')}</span></> },
        { v: 'live', label: <>Live <span className="count">{n('live')}</span></> },
        { v: 'progress', label: <>In progress <span className="count">{n('progress')}</span></> },
        { v: 'notyet', label: <>Not yet <span className="count">{n('notyet')}</span></> },
        { v: 'roadmap', label: <>Roadmap <span className="count">{n('roadmap')}</span></> },
      ]} />
      <span className="hint">Select a row for its source</span>
    </div>
    <ul className="ledger reveal" id="ledger" aria-label="Proof ledger">
      {rows.map((c) => <li key={`${animKey}-${c.id}`} className={animKey && !reduced() ? 'enter' : undefined}>
        <button type="button" className="ledger-row" data-id={c.id} aria-haspopup="dialog" onClick={(e) => sheet.current?.open(c.id, e.currentTarget)}>
          <Badge status={c.status} />{' '}<span className="copy">{c.publicCopy}</span>{' '}<span className="date num">{c.asOf}</span><Chev className="chev" />
        </button>
      </li>)}
    </ul>
    <ProofSheet ref={sheet} rows={rows} />
  </>
}

type SheetApi = { open: (id: string, from: HTMLElement | null) => void }
const ProofSheet = forwardRef<SheetApi, { rows: PitchClaim[] }>(function ProofSheet({ rows }, ref) {
  const [currentId, setCurrentId] = useState<string | null>(null)
  const [shown, setShown] = useState(false)
  const rootEl = useRef<HTMLDivElement>(null), sheetEl = useRef<HTMLDivElement>(null), scrimEl = useRef<HTMLDivElement>(null), bodyEl = useRef<HTMLDivElement>(null)
  const st = useRef({ y: 0, v: 0, h: 0, raf: 0, isOpen: false, returnTo: null as HTMLElement | null, drag: null as null | { id: number; startY: number; origin: number; live: boolean; hist: { t: number; y: number }[] } })
  const rowsRef = useRef(rows); rowsRef.current = rows

  const paint = () => {
    const s = st.current
    if (sheetEl.current) sheetEl.current.style.transform = `translateY(${s.y}px)`
    if (scrimEl.current) scrimEl.current.style.opacity = String(Math.max(0, Math.min(1, 1 - s.y / (s.h || 1))))
  }
  const stop = () => { cancelAnimationFrame(st.current.raf); st.current.raf = 0 }
  const spring = (to: number, { damping = 1, response = 0.4, velocity = st.current.v } = {}, done?: () => void) => {
    stop(); const s = st.current; s.v = velocity
    const k = Math.pow((2 * Math.PI) / response, 2), c = (4 * Math.PI * damping) / response
    let last = performance.now()
    const step = (now: number) => {
      let dt = Math.min(0.032, (now - last) / 1000); last = now
      const sub = 4; dt /= sub
      for (let i = 0; i < sub; i++) { const acc = -k * (s.y - to) - c * s.v; s.v += acc * dt; s.y += s.v * dt }
      paint()
      if (Math.abs(s.v) < 4 && Math.abs(s.y - to) < 0.5) { s.y = to; s.v = 0; paint(); s.raf = 0; done?.(); return }
      s.raf = requestAnimationFrame(step)
    }
    s.raf = requestAnimationFrame(step)
  }
  const project = (vel: number, d = 0.998) => ((vel / 1000) * d) / (1 - d)
  const rubber = (over: number, dim: number, cst = 0.55) => (over * dim * cst) / (dim + cst * Math.abs(over))

  /* Background inert while open: every sibling along the path from the sheet up
     to <body> (page, nav, footer, and any widget outside the page) gets `inert`,
     and exactly those are released on close. */
  const inerted = useRef<Element[]>([])
  const setBackgroundInert = (on: boolean) => {
    if (!on) { inerted.current.forEach((el) => el.removeAttribute('inert')); inerted.current = []; return }
    for (let n: Element | null = rootEl.current; n && n !== document.body; n = n.parentElement) {
      const parent: Element | null = n.parentElement
      if (!parent) break
      for (const sib of Array.from(parent.children)) {
        if (sib === n || sib.hasAttribute('inert') || sib.tagName === 'SCRIPT') continue
        sib.setAttribute('inert', ''); inerted.current.push(sib)
      }
    }
  }
  const finish = () => {
    const s = st.current
    setBackgroundInert(false)
    setShown(false); document.documentElement.style.overflow = ''
    if (sheetEl.current) { sheetEl.current.style.transition = ''; sheetEl.current.style.opacity = '' }
    if (scrimEl.current) scrimEl.current.style.transition = ''
    s.returnTo?.focus({ preventScroll: true })
  }
  const close = (velocity = 0) => {
    const s = st.current
    if (!s.isOpen) return; s.isOpen = false
    if (reduced()) { if (sheetEl.current) sheetEl.current.style.opacity = '0'; if (scrimEl.current) scrimEl.current.style.opacity = '0'; window.setTimeout(finish, 200); return }
    s.h = sheetEl.current?.offsetHeight || s.h; spring(s.h, { response: 0.35, velocity }, finish)
  }
  useImperativeHandle(ref, () => ({
    open(id, from) {
      const s = st.current
      s.returnTo = from || (document.activeElement as HTMLElement)
      setCurrentId(id)
      if (!s.isOpen) { s.isOpen = true; setShown(true) }
    },
  }))
  // runs after the sheet is un-hidden, so its height is measurable
  useIso(() => {
    const s = st.current
    if (!shown || !sheetEl.current) return
    s.h = sheetEl.current.offsetHeight
    document.documentElement.style.overflow = 'hidden'
    if (reduced()) {
      s.y = 0; s.v = 0
      sheetEl.current.style.transition = 'opacity 200ms ease'; if (scrimEl.current) scrimEl.current.style.transition = 'opacity 200ms ease'
      sheetEl.current.style.opacity = '0'; paint(); requestAnimationFrame(() => { if (sheetEl.current) sheetEl.current.style.opacity = '1' })
    } else { if (!s.raf) { s.y = s.h; s.v = 0 } paint(); spring(0, { response: 0.4 }) }
    setBackgroundInert(true)
    sheetEl.current.focus({ preventScroll: true })
  }, [shown])
  useEffect(() => { if (bodyEl.current) bodyEl.current.scrollTop = 0 }, [currentId])
  useEffect(() => {
    if (!shown) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { close(); return }
      if (e.key === 'Tab' && sheetEl.current) { /* keep focus inside the dialog */
        const f = Array.from(sheetEl.current.querySelectorAll<HTMLElement>('button:not([disabled]), [href]')); if (!f.length) return
        const i = f.indexOf(document.activeElement as HTMLElement)
        // focus on the dialog itself (as it is right after opening) or anywhere
        // outside its controls: Tab goes to the first control, Shift+Tab to the last
        if (i < 0) { (e.shiftKey ? f[f.length - 1] : f[0]).focus(); e.preventDefault() }
        else if (e.shiftKey && i === 0) { f[f.length - 1].focus(); e.preventDefault() }
        else if (!e.shiftKey && i === f.length - 1) { f[0].focus(); e.preventDefault() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown])
  useEffect(() => () => { stop(); setBackgroundInert(false); document.documentElement.style.overflow = '' }, [])

  /* drag — from the grabber or the header; the body scrolls normally */
  const startDrag = (e: React.PointerEvent) => {
    if (e.button !== 0 || (e.target as HTMLElement).closest('button')) return
    stop(); const s = st.current; s.h = sheetEl.current?.offsetHeight || s.h
    s.drag = { id: e.pointerId, startY: e.clientY - Math.max(0, s.y), hist: [{ t: e.timeStamp, y: e.clientY }], live: false, origin: e.clientY }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const moveDrag = (e: React.PointerEvent) => {
    const s = st.current, d = s.drag
    if (!d || e.pointerId !== d.id) return
    if (!d.live) { if (Math.abs(e.clientY - d.origin) < 6) return; d.live = true }
    const raw = e.clientY - d.startY
    s.y = raw < 0 ? -rubber(-raw, s.h) : raw; s.v = 0; paint()
    d.hist.push({ t: e.timeStamp, y: e.clientY }); if (d.hist.length > 6) d.hist.shift()
  }
  const endDrag = (e: React.PointerEvent) => {
    const s = st.current, d = s.drag
    if (!d || e.pointerId !== d.id) return
    const hst = d.hist.filter((x) => e.timeStamp - x.t < 100); const f = hst[0] || d.hist[0], l = d.hist[d.hist.length - 1]
    const vel = l.t > f.t ? (l.y - f.y) / ((l.t - f.t) / 1000) : 0
    const live = d.live; s.drag = null; if (!live) return
    const landing = s.y + project(vel)
    if (landing > s.h * 0.45) close(vel); else spring(0, { response: 0.4, velocity: vel })
  }
  const dragProps = { onPointerDown: startDrag, onPointerMove: moveDrag, onPointerUp: endDrag, onPointerCancel: endDrag }

  const all = rowsRef.current
  const i = currentId ? all.findIndex((c) => c.id === currentId) : -1
  const c = (i >= 0 ? all[i] : PROOF.find((x) => x.id === currentId)) || null
  const step = (dir: number) => {
    const nx = all[i + dir]; if (!nx) return
    setCurrentId(nx.id)
    st.current.returnTo = document.querySelector<HTMLElement>(`.ledger-row[data-id="${nx.id}"]`) || st.current.returnTo
  }
  return <div className="sheet-root" id="sheetRoot" hidden={!shown} ref={rootEl}>
    <div className="scrim" id="scrim" ref={scrimEl} onClick={() => close()} />
    <div className="sheet" id="sheet" role="dialog" aria-modal="true" aria-labelledby="sheetTitle" tabIndex={-1} ref={sheetEl}>
      <div className="sheet-grab" id="sheetGrab" aria-hidden="true" {...dragProps}><span /></div>
      <div className="sheet-head" id="sheetHead" {...dragProps}>
        <span id="sheetBadge">{c && <Badge status={c.status} />}</span>
        <button type="button" className="sheet-close" id="sheetClose" aria-label="Close" onClick={() => close()}><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M2 2l10 10M12 2 2 12" /></svg></button>
      </div>
      <div className="sheet-body" id="sheetBody" ref={bodyEl}>
        <h3 id="sheetTitle">{c?.publicCopy}</h3>
        <p id="sheetDetail">{c?.detailCopy}</p>
        <div className="sheet-meta">
          <div><span>Status</span><span id="sheetStatus">{c ? STATUS_LABEL[c.status] : ''}</span></div>
          <div><span>As of</span><span id="sheetDate" className="num">{c?.asOf}</span></div>
          <div><span>Source</span><span id="sheetSource">{c?.sourceLabel}</span></div>
        </div>
        <div className="sheet-nav">
          <button type="button" className="btn btn-ghost" id="sheetPrev" disabled={i <= 0} onClick={() => step(-1)}>← Previous</button>
          <button type="button" className="btn btn-ghost" id="sheetNext" disabled={i < 0 || i >= all.length - 1} onClick={() => step(1)}>Next →</button>
        </div>
      </div>
    </div>
  </div>
})

/* ============================================================================
   XI — use of funds: every row of the costed plan, plus repayment and reserve,
   summing to the financing target.
   ========================================================================== */
const TONES = ['#c87f4a', '#e3cba8', '#a9876a', '#d7b98f', '#8d6a4c', '#efe2c9', '#b4693a', '#c9ad86', '#7c6450']
export function UseOfFunds() {
  const segs = useMemo(() => budgetRows.map(([l, amt, basis], i) => ({ l, amt, basis, c: TONES[i % TONES.length] }))
    .concat([
      { l: 'Proposed founder-funding repayment', amt: p.founderFundingRepayment, basis: 'Separately disclosed related-party use of proceeds for funds the founder put into the business. Not additional operating expense.', c: '#5f6e72' },
      { l: 'Working-capital and contingency reserve', amt: reserve, basis: 'Cash retained against timing differences and overruns; not counted twice as an expense.', c: '#3f4c51' },
    ]), [])
  const [hover, setHover] = useState<number | null>(null)
  const [pinned, setPinned] = useState<number | null>(null)
  const bar = useRef<HTMLDivElement>(null)
  const scrub = useRef<{ id: number; last: number | null } | null>(null)
  const skipClick = useRef(false)
  const fine = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const shown = hover ?? pinned
  const pct = (x: number) => ((x / target) * 100).toFixed(1) + '%'
  const segAt = (clientX: number) => {
    const btns = Array.from(bar.current?.querySelectorAll<HTMLElement>('button') || [])
    const hit = btns.findIndex((b) => { const r = b.getBoundingClientRect(); return clientX >= r.left && clientX <= r.right })
    if (hit >= 0) return hit
    const r = bar.current!.getBoundingClientRect()
    return clientX < r.left ? 0 : btns.length - 1
  }
  /* touch/pen: drag along the bar to read narrow segments; the last one stays */
  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') return
    skipClick.current = false
    scrub.current = { id: e.pointerId, last: segAt(e.clientX) }
    setHover(scrub.current.last)
  }
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') { const b = (e.target as HTMLElement).closest('button'); if (b && fine()) setHover(Number(b.dataset.i)); return }
    if (!scrub.current || scrub.current.id !== e.pointerId) return
    const i = segAt(e.clientX); scrub.current.last = i; setHover(i)
  }
  const onUp = (e: React.PointerEvent) => {
    if (!scrub.current || scrub.current.id !== e.pointerId) return
    const i = scrub.current.last; scrub.current = null; skipClick.current = true; window.setTimeout(() => { skipClick.current = false }, 400); setHover(null); if (i != null) setPinned(i)
  }
  return <>
    <div className={`funds-bar${shown != null ? ' focusing' : ''}`} id="fundsBar" role="group" aria-label="Use of funds, select a segment" ref={bar}
      onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={() => { scrub.current = null; setHover(null) }}
      onPointerLeave={(e) => { if (e.pointerType === 'mouse') setHover(null) }}>
      {segs.map((s, i) => <button key={s.l} type="button" data-i={i} className={shown === i ? 'on' : undefined} style={{ flexGrow: s.amt, background: s.c }} aria-label={`${s.l}, ${usd(s.amt)}`} aria-pressed={pinned === i}
        onClick={() => { if (skipClick.current) { skipClick.current = false; return } setPinned((v) => (v === i ? null : i)) }}
        onFocus={() => setHover(i)} onBlur={() => setHover(null)} />)}
    </div>
    <div className="funds-readout" id="fundsReadout" aria-live="polite">
      {shown != null
        ? <><span className="t">{segs[shown].l}</span><span className="a num">{usd(segs[shown].amt)} · {pct(segs[shown].amt)} of the target</span></>
        : <><span className="t">{usd(target)} total financing target</span><span className="a">Select a segment or a row</span></>}
    </div>
    <div className="funds-rows" id="fundsRows" onPointerLeave={(e) => { if (e.pointerType === 'mouse') setHover(null) }}>
      {segs.map((s, i) => <div key={s.l} data-i={i} className={shown === i ? 'on' : undefined} role="button" tabIndex={0} aria-pressed={pinned === i}
        onPointerOver={(e) => { if (e.pointerType === 'mouse' && fine()) setHover(i) }}
        onClick={() => setPinned((v) => (v === i ? null : i))}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPinned((v) => (v === i ? null : i)) } }}>
        <span className="sw" style={{ background: s.c }} /><span className="lbl">{s.l}</span><span className="amt num">{usd(s.amt)}</span><span className="basis">{s.basis}</span>
      </div>)}
      <div className="total"><span /><span className="lbl">Forward operating and project budget</span><span className="amt num">{usd(forward)}</span><span className="basis">All forward compensation, delivery, development, infrastructure and business costs above.</span></div>
      <div className="total"><span /><span className="lbl">Total planned cash outflows</span><span className="amt num">{usd(outflows)}</span><span className="basis">Forward spending plus the proposed founder-funding repayment.</span></div>
      <div className="total"><span /><span className="lbl">Total financing target</span><span className="amt num">{usd(target)}</span><span className="basis">Forward budget, proposed founder-funding repayment and reserve.</span></div>
    </div>
  </>
}

/* ============================================================================
   XI — income: scenario switch, scrubbable cash chart, tables.
   ========================================================================== */
const ROWS: [string, (m: IncomeMonth) => string][] = [
  ['Active company equivalents at month end', (m) => m.activeCompanies.toFixed(1)],
  ['Month-end recurring revenue (MRR)', (m) => money(m.mrr)],
  ['Annualized recurring run rate (ARR)', (m) => money(m.arr)],
  ['Cumulative service revenue earned', (m) => money(m.cumulativeRevenue)],
  ['That month’s operating profit / (loss)', (m) => money(m.operatingResult)],
  ['Cumulative operating profit / (loss)', (m) => money(m.cumulativeOperatingResult)],
  ['Ending cash after financing and planned outflows', (m) => money(m.cash)],
]
const W = 720, HH = 270, L = 70, R = 16, T = 14, B = 34
const ALL_CASH = incomeScenarios.flatMap((s) => s.months.map((m) => m.cash))
const STEP = 100000
const Y_MIN = Math.floor(Math.min(0, ...ALL_CASH) / STEP) * STEP, Y_MAX = Math.ceil(Math.max(...ALL_CASH) / STEP) * STEP
const X = (m: number) => L + ((m - 1) / (a.months - 1)) * (W - L - R)
const Yf = (v: number) => T + (1 - (v - Y_MIN) / (Y_MAX - Y_MIN)) * (HH - T - B)
const TICKS: number[] = []; for (let v = Y_MIN; v <= Y_MAX + 1; v += STEP) TICKS.push(v)
const kfmt = (v: number) => (v === 0 ? '$0' : `$${Math.round(v / 1000)}K`)

export function IncomeCase() {
  const base = incomeScenarios.find((s) => s.id === 'base')!
  const [selId, setSelId] = useState('base')
  const sel = incomeScenarios.find((s) => s.id === selId)!
  const [month, setMonth] = useState(a.months)
  const [shown, setShown] = useState<number[]>(() => base.months.map((m) => m.cash))
  const anim = useRef(0), svg = useRef<SVGSVGElement>(null), scrubbing = useRef(false), shownRef = useRef(shown)
  shownRef.current = shown
  useEffect(() => () => cancelAnimationFrame(anim.current), [])
  const switchTo = (id: string) => {
    const to = incomeScenarios.find((s) => s.id === id)!.months.map((m) => m.cash), from = shownRef.current.slice()
    setSelId(id); cancelAnimationFrame(anim.current)
    if (reduced()) { setShown(to); return }
    const t0 = performance.now(), dur = 300
    const tick = (now: number) => { const t = Math.min(1, (now - t0) / dur), e = easeInOut(t); setShown(from.map((v, i) => v + (to[i] - v) * e)); if (t < 1) anim.current = requestAnimationFrame(tick) }
    anim.current = requestAnimationFrame(tick)
  }
  /* scrub — 1:1 with the pointer, no easing, no lag */
  const toMonth = (clientX: number) => { const r = svg.current!.getBoundingClientRect(); const sx = ((clientX - r.left) / r.width) * W; return Math.round(Math.min(a.months, Math.max(1, ((sx - L) / (W - L - R)) * (a.months - 1) + 1))) }
  const pts = shown.map((v, i) => [X(i + 1), Yf(v)])
  const d = pts.map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' ')
  const area = `${d} L${X(a.months)} ${Yf(Math.max(Y_MIN, 0))} L${X(1)} ${Yf(Math.max(Y_MIN, 0))} Z`
  const m = sel.months[month - 1]
  const tablePts = [6, 12, 18].map((mm) => sel.months[mm - 1])
  const desc = sel.id === 'base'
    ? `${sel.description} The model applies ${a.monthlyChurn * 100}% monthly customer churn, half-month service revenue for new activations and collections one month after revenue is earned. The existing blended internal revenue assumption is an underwriting input, not a published customer rate. Current written proposals govern actual pricing.`
    : `${sel.label}: ${sel.description} Same churn, collection timing, revenue assumption and fixed spending schedule as the base planning case.`
  return <>
    <div className="income-tools">
      <Segmented label="Scenario" id="scenarioSeg" value={selId} onChange={switchTo} items={incomeScenarios.map((s) => ({ v: s.id, label: s.id === 'base' ? 'Base' : s.id === 'slower' ? 'Slower' : 'Faster' }))} />
      <span className="hint">Drag across the chart to read any month</span>
    </div>
    <div className="card chart-card">
      <div className="chart-head">
        <span className="k">Ending cash after financing and planned outflows</span>
        <div className="readout" id="readout" aria-live="polite"><span className="m">Month {month}</span><span>Cash <b className="num">{money(m.cash)}</b></span><span>MRR <b className="num">{money(m.mrr)}</b></span><span>Companies <b className="num">{m.activeCompanies.toFixed(1)}</b></span></div>
      </div>
      <svg className="chart" id="chart" ref={svg} viewBox={`0 0 ${W} ${HH}`} tabIndex={0} role="img" aria-label="Ending cash by month. Use left and right arrow keys to move between months."
        onPointerDown={(e) => { scrubbing.current = true; (e.currentTarget as SVGSVGElement).setPointerCapture(e.pointerId); setMonth(toMonth(e.clientX)) }}
        onPointerMove={(e) => { if (!scrubbing.current && e.pointerType !== 'mouse') return; const mm = toMonth(e.clientX); if (mm !== month) setMonth(mm) }}
        onPointerUp={() => { scrubbing.current = false }} onPointerCancel={() => { scrubbing.current = false }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { setMonth((v) => Math.min(a.months, Math.max(1, v + (e.key === 'ArrowRight' ? 1 : -1)))); e.preventDefault() }
          if (e.key === 'Home') { setMonth(1); e.preventDefault() }
          if (e.key === 'End') { setMonth(a.months); e.preventDefault() }
        }}>
        <defs><linearGradient id="cashFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" style={{ stopColor: 'var(--gold)', stopOpacity: 0.22 }} /><stop offset="1" style={{ stopColor: 'var(--gold)', stopOpacity: 0 }} /></linearGradient></defs>
        {TICKS.map((v) => <g key={v}><line className={v === 0 ? 'zero-l' : 'grid-l'} x1={L} x2={W - R} y1={Yf(v)} y2={Yf(v)} /><text className="ax" x={L - 10} y={Yf(v) + 4} textAnchor="end">{kfmt(v)}</text></g>)}
        {[1, 3, 6, 9, 12, 15, 18].map((mm) => <text key={mm} className="ax" x={X(mm)} y={HH - 10} textAnchor="middle">M{mm}</text>)}
        <path className="area" d={area} /><path className="line" d={d} />
        <line className="rule" x1={X(month)} x2={X(month)} y1={T} y2={HH - B} />
        <circle className="dot" r="5" cx={X(month)} cy={Yf(shown[month - 1])} />
      </svg>
    </div>
    <p className="prose" id="scenarioDesc">{desc}</p>
    <div className="table-wrap" tabIndex={0} role="region" aria-label="Revenue and cash projection, selected scenario">
      <table id="pointsTable">
        <thead><tr><th scope="col">{sel.label}</th>{tablePts.map((x) => <th scope="col" key={x.month}>Month {x.month}</th>)}</tr></thead>
        <tbody>{ROWS.map(([label, f]) => <tr key={label}><th scope="row">{label}</th>{tablePts.map((x) => <td key={x.month}>{f(x)}</td>)}</tr>)}</tbody>
      </table>
    </div>
    <IncomeNote2 />
    <h4 className="h3" style={{ fontSize: '1.35rem' }}>What slower or faster activation changes</h4>
    <div className="table-wrap" tabIndex={0} role="region" aria-label="Month 18 scenario comparison">
      <table id="compareTable">
        <thead><tr><th scope="col">At month {a.months}</th><th scope="col">Active companies</th><th scope="col">ARR</th><th scope="col">Revenue earned to date</th><th scope="col">Monthly operating result</th><th scope="col">Ending cash</th></tr></thead>
        <tbody>{incomeScenarios.map((s) => { const x = s.months[s.months.length - 1]; return <tr key={s.id} data-id={s.id} className={s.id === selId ? 'on' : undefined}><th scope="row">{s.label}</th><td>{x.activeCompanies.toFixed(1)}</td><td>{money(x.arr)}</td><td>{money(x.cumulativeRevenue)}</td><td>{money(x.operatingResult)}</td><td>{money(x.cash)}</td></tr> })}</tbody>
      </table>
    </div>
  </>
}
function IncomeNote2() {
  const base = incomeScenarios.find((s) => s.id === 'base')!
  const firstPos = base.months.find((m) => m.operatingResult >= 0)?.month
  return <p className="note" id="incomeNote2">ARR is month-end MRR multiplied by twelve; it is not revenue earned during the period. Operating result is before taxes, interest, depreciation, amortization and the separately presented financing/corporate-work allowance. It is not GAAP net income or distributable profit. The base case first shows a positive monthly operating result in month {firstPos}; the cumulative operating result remains a loss at month {a.months}.</p>
}

