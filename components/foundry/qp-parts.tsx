'use client'
/* qp-parts.tsx — two building blocks for the quality-pass pages (2026-10-14):
   /company, /technology, /governance, /sabina, /pricing, /press, /start.
   Both use classes site.css already carries; no copy lives here.

   Sec      — components/site/primitives' Section with a `data-name`, so a
              section button in the nav can name the section on every page.
   SegPanels — /pitch's segmented control over panels. Every panel is
              server-rendered and stays visible until the page has hydrated;
              only then does the control appear and hide the others, so with no
              script (or chunks that never arrive) every panel still reads. */
import { useEffect, useState, type ReactNode } from 'react'
import { Segmented } from '@/components/site/theme'

export function Sec({ id, name, eyebrow, title, lead, children, className = '', center = false }: {
  id?: string; name: string; eyebrow?: ReactNode; title?: ReactNode; lead?: ReactNode; children?: ReactNode; className?: string; center?: boolean
}) {
  const hid = id && title ? `h-${id}` : undefined
  const head = eyebrow || title || lead
  return <section className={`section ${className}`.trim()} id={id} data-name={name} aria-labelledby={hid}>
    <div className="wrap">
      {head && <div className={`sec-head reveal${center ? ' center' : ''}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 className="h2" id={hid}>{title}</h2>}
        {lead && (typeof lead === 'string' ? <p className="lead">{lead}</p> : lead)}
      </div>}
      {children && (head ? <div className="sec-body">{children}</div> : children)}
    </div>
  </section>
}

export type SegItem = { v: string; tab: ReactNode; aria?: string; panel: ReactNode }
export function SegPanels({ id, label, items, className = '', onSelect }: { id: string; label: string; items: SegItem[]; className?: string; onSelect?: (v: string) => void }) {
  const [sel, setSel] = useState(items[0].v)
  const [live, setLive] = useState(false)
  const [n, setN] = useState(0) // switches made by the visitor; only those cross-fade
  useEffect(() => setLive(true), [])
  const choose = (v: string) => { setSel(v); setN((k) => k + 1); onSelect?.(v) }
  return <div className={`segp ${className}`.trim()} id={id}>
    {live && <Segmented label={label} id={`${id}-seg`} value={sel} onChange={choose} items={items.map((it) => ({ v: it.v, label: it.tab, aria: it.aria }))} />}
    <div className="segp-panels" aria-live={live ? 'polite' : undefined}>
      {items.map((it) => <div key={`${it.v}-${it.v === sel ? n : 0}`} className={`segp-panel${n && it.v === sel ? ' swap' : ''}`} hidden={live && it.v !== sel}>{it.panel}</div>)}
    </div>
  </div>
}
