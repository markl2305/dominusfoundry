/* Crest.tsx — Dominus Foundry vector crest system.
   Reusable SVG building blocks + composed marks (ported from crest.jsx).
   Palette (from the original artwork): */
export const SLATE = '#243641' // deep slate-teal — ink / outlines / wordmark
export const TEAL = '#2E3F45' // shield body
export const STONE = '#CDBFA3' // figures / crest stone
export const STONE_L = '#E4D8BE' // light stone
export const CREAM = '#F0E7D7' // warm cream ground

type ToolProps = { fill: string; stroke?: string; sw?: number; transform?: string }

// HAMMER — sledge head + tapered handle
export function Hammer({ fill, stroke, sw = 0, transform }: ToolProps) {
  return (
    <g transform={transform} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" style={{ paintOrder: 'stroke' }}>
      <rect x="-32" y="-12" width="24" height="24" rx="4" />
      <rect x="-9" y="-9" width="7" height="18" rx="2" />
      <path d="M-3,-5.5 L54,-3 Q58,0 54,3 L-3,5.5 Z" />
    </g>
  )
}

// SNIPS / TIN-SNIPS — two jaws + pivot + two looped handles
export function Snips({ fill, stroke, sw = 0, transform }: ToolProps) {
  return (
    <g transform={transform} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round" style={{ paintOrder: 'stroke' }}>
      <path d="M-1.5,-4 L-7,-44 L-2.5,-47 L3,-5 Z" />
      <path d="M1.5,-4 L7,-44 L2.5,-47 L-3,-5 Z" />
      <circle cx="0" cy="0" r="4.5" />
      <path d="M-2,3 L-13,38 Q-14.5,43 -9.5,44 L-0.5,6 Z" />
      <path d="M2,3 L13,38 Q14.5,43 9.5,44 L0.5,6 Z" />
    </g>
  )
}

// ANVIL — classic anvil, horn to the right
export function Anvil({ fill, stroke, sw = 0, transform }: ToolProps) {
  return (
    <g transform={transform} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" style={{ paintOrder: 'stroke' }}>
      <path d="M-30,-22 L24,-22 L26,-18 L48,-15 L27,-10 L24,-8 L15,-3 L17,10 L31,19 L-31,19 L-17,10 L-15,-3 L-24,-8 L-30,-9 Z" />
    </g>
  )
}

export type CrestScheme = 'classic' | 'inked' | 'bold' | 'stone' | 'ondark'

// CREST — shield + cross + tools (+ optional scroll)
export function Crest({
  scheme = 'classic',
  withScroll = true,
  style,
  className,
}: {
  scheme?: CrestScheme
  withScroll?: boolean
  style?: React.CSSProperties
  className?: string
}) {
  // BRAND REFRESH 2026-09-16: the hand-drawn SVG shield/cross/tools/scroll
  // paths above are retired in favour of the commissioned crest artwork
  // (public/brand/dominus-crest-master.png, cut into public/brand/crest-full.png
  // and crest-shield.png). `scheme` is accepted for API compatibility with
  // every existing caller (Marks.tsx, FoundryShell.tsx, HomeContent.tsx,
  // CompanyContent.tsx) but the new art ships in one treatment only, so it is
  // otherwise unused. `withScroll` still selects the full crest (with the
  // "FIDE ET FAMILIA" ribbon) vs. the shield-only mark for small placements.
  void scheme
  const src = withScroll ? '/brand/crest-full.png' : '/brand/crest-shield.png'
  return (
    <img
      src={src}
      alt="Dominus Foundry crest"
      style={{ objectFit: 'contain', ...style }}
      className={className}
    />
  )
}
