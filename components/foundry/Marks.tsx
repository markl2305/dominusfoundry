/* Marks.tsx — brand marks (real Dominus Foundry crest) + tool glyphs + icons.
   Ported from marks.jsx. */
import { Crest, type CrestScheme } from './Crest'
import type { ReactNode } from 'react'

/* Full seal — shield + cross + tools + Fide et Familia scroll. */
export function Medallion({
  className = '',
  scheme = 'classic',
  withScroll = true,
}: {
  className?: string
  scheme?: CrestScheme
  withScroll?: boolean
}) {
  return <Crest scheme={scheme} withScroll={withScroll} className={`df-crest ${className}`} style={{ height: 'auto' }} />
}

/* Compact shield-only mark for nav / footer lockups. */
export function MiniCrest({ className = 'mini-crest', scheme = 'classic' }: { className?: string; scheme?: CrestScheme }) {
  return (
    <span className={`mini-crest-wrap ${className}`}>
      <Crest scheme={scheme} withScroll={false} style={{ width: '100%', height: '100%' }} />
    </span>
  )
}

/* pillar glyphs: drawn from the crest's own iconography (currentColor) */
export const Glyph: Record<string, ReactNode> = {
  forge: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <rect x="6" y="8.5" width="13" height="9" rx="1.6" transform="rotate(34 12.5 13)" fill="currentColor" stroke="none" />
      <line x1="15.5" y1="16.5" x2="32" y2="31.5" />
    </svg>
  ),
  hyperion: (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="20" cy="20" r="11.5" />
      <path d="M20 4.5 V11 M20 29 V35.5 M4.5 20 H11 M29 20 H35.5" strokeWidth="1.2" opacity="0.7" />
      <circle cx="20" cy="20" r="3" fill="currentColor" stroke="none" />
    </svg>
  ),
  ventures: (
    <svg viewBox="0 0 40 40" fill="currentColor" stroke="none">
      <path d="M7 14 H24 L25 16.5 L33 17.8 L25 19.6 L23.5 21 L21 23 L22 27 L26 30 H8 L13 27 L14.5 23 L12.5 21 L8 20 L7 19.6 Z" />
    </svg>
  ),
  family: (
    <svg viewBox="0 0 40 40" fill="currentColor" stroke="none">
      <path d="M17.4 6 H22.6 V16 H31 V21 H22.6 V34 H17.4 V21 H9 V16 H17.4 Z" />
    </svg>
  ),
}

export const Icon = {
  sun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => {
        const a = (d * Math.PI) / 180
        return <line key={d} x1={12 + Math.cos(a) * 7} y1={12 + Math.sin(a) * 7} x2={12 + Math.cos(a) * 9.2} y2={12 + Math.sin(a) * 9.2} />
      })}
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M21 13.2A8.4 8.4 0 1 1 10.8 3a6.6 6.6 0 0 0 10.2 10.2z" />
    </svg>
  ),
  arr: (
    <span className="arr" aria-hidden="true">
      →
    </span>
  ),
}
