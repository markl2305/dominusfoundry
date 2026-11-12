/* Family v2, item 5 (Mark, 2026-11-12): a section's caveat sentences become numbered footnotes at the foot of that
   section (the Apple pattern). FnRef is the superscript marker placed right after the figure or claim it qualifies;
   it links to its note and is described by it. Footnotes lists the notes; each note's own marker links back.
   ⛔ Every caveat word stays: callers pass the existing sentences verbatim. The markers ("*", "1") are the only
   added characters. */
import type { ReactNode } from 'react'

export function FnRef({ n, id, second = false }: { n: string; id: string; second?: boolean }) {
  // a second marker for the same note keeps a unique id; the note's back link returns to the first marker
  return <sup className="fn-ref"><a href={`#fn-${id}`} id={second ? `fnref-${id}-2` : `fnref-${id}`} aria-describedby={`fn-${id}`} aria-label={n === '*' ? 'Note' : `Note ${n}`}>{n}</a></sup>
}

export function Footnotes({ items, className = '' }: { items: { n: string; id: string; body: ReactNode }[]; className?: string }) {
  return <div className={`footnotes ${className}`.trim()} role="note" aria-label="Notes">
    <ol>
      {items.map((it) => <li key={it.id} id={`fn-${it.id}`}>
        <a className="fn-back" href={`#fnref-${it.id}`} aria-label={it.n === '*' ? 'Back to the note marker' : `Back to note ${it.n} marker`}>{it.n}</a>
        <span className="fn-body">{it.body}</span>
      </li>)}
    </ol>
  </div>
}
