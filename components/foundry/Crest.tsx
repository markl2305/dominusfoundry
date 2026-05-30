/* Crest.tsx — Dominus Foundry vector crest system.
   Reusable SVG building blocks + composed marks (ported from crest.jsx).
   Palette (from the original artwork): */
export const SLATE = '#243641' // deep slate-teal — ink / outlines / wordmark
export const TEAL = '#2E3F45' // shield body
export const STONE = '#CDBFA3' // figures / crest stone
export const STONE_L = '#E4D8BE' // light stone
export const CREAM = '#F0E7D7' // warm cream ground

// SHIELD — heater shield, centred at x=140, within a 280-wide space
const SHIELD_OUTER = 'M52,30 H228 V120 C228,186 190,236 140,262 C90,236 52,186 52,120 Z'
const SHIELD_INNER = 'M66,43 H214 V117 C214,175 180,219 140,242 C100,219 66,175 66,117 Z'

function Shield({
  fill,
  keyline,
  keyWidth = 3,
  doubleKey = false,
}: {
  fill: string
  keyline: string
  keyWidth?: number
  doubleKey?: boolean
}) {
  return (
    <g>
      <path d={SHIELD_OUTER} fill={fill} />
      <path d={SHIELD_INNER} fill="none" stroke={keyline} strokeWidth={keyWidth} />
      {doubleKey && (
        <path
          d="M73,50 H207 V116 C207,169 176,210 140,231 C104,210 73,169 73,116 Z"
          fill="none"
          stroke={keyline}
          strokeWidth={keyWidth * 0.6}
          opacity="0.85"
        />
      )}
    </g>
  )
}

// CROSS — Latin cross, centred x=140
function Cross({ fill }: { fill: string }) {
  return <path fill={fill} d="M131,74 H149 V122 H181 V142 H149 V236 H131 V142 H99 V122 H131 Z" />
}

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

function ToolsClassic({ fill, stroke, sw }: { fill: string; stroke?: string; sw?: number }) {
  return (
    <g>
      <Hammer fill={fill} stroke={stroke} sw={sw} transform="translate(106,112) rotate(48) scale(0.92)" />
      <Snips fill={fill} stroke={stroke} sw={sw} transform="translate(174,114) rotate(24) scale(0.92)" />
      <Anvil fill={fill} stroke={stroke} sw={sw} transform="translate(140,200) scale(0.98)" />
    </g>
  )
}

function ToolsCrossed({ fill, stroke, sw }: { fill: string; stroke?: string; sw?: number }) {
  return (
    <g>
      <Hammer fill={fill} stroke={stroke} sw={sw} transform="translate(118,104) rotate(54) scale(0.9)" />
      <Snips fill={fill} stroke={stroke} sw={sw} transform="translate(162,104) rotate(-26) scale(0.9)" />
      <Anvil fill={fill} stroke={stroke} sw={sw} transform="translate(140,202) scale(1.02)" />
    </g>
  )
}

// SCROLL / RIBBON — swallowtail banner with motto
function Scroll({ band, fold, ink, motto = 'FIDE ET FAMILIA' }: { band: string; fold: string; ink: string; motto?: string }) {
  return (
    <g>
      <path d="M66,251 L78,256 L78,272 L66,277 Z" fill={fold} />
      <path d="M214,251 L202,256 L202,272 L214,277 Z" fill={fold} />
      <path d="M68,250 L40,243 L52,257 L40,271 L68,278 Z" fill={band} />
      <path d="M212,250 L240,243 L228,257 L240,271 L212,278 Z" fill={band} />
      <path d="M66,250 Q140,265 214,250 L214,278 Q140,293 66,278 Z" fill={band} />
      <text
        x="140"
        y="274"
        textAnchor="middle"
        fill={ink}
        fontFamily="'Cinzel', serif"
        fontWeight="700"
        fontSize="15"
        textLength="132"
        lengthAdjust="spacingAndGlyphs"
      >
        {motto}
      </text>
    </g>
  )
}

export type CrestScheme = 'classic' | 'inked' | 'bold' | 'stone' | 'ondark'

type SchemeDef = {
  shield: string
  key: string
  fig: string
  halo: string
  band: string
  fold: string
  ink: string
  tools: 'classic' | 'crossed'
  doubleKey: boolean
  keyWidth?: number
  bandStroke?: string
}

// SCHEMES — refined-heritage directions (all within the brand palette)
const SCHEMES: Record<CrestScheme, SchemeDef> = {
  classic: { shield: TEAL, key: STONE, fig: STONE, halo: TEAL, band: STONE, fold: '#b3a585', ink: SLATE, tools: 'classic', doubleKey: false },
  inked: { shield: CREAM, key: SLATE, fig: SLATE, halo: CREAM, band: CREAM, fold: '#d8cab0', ink: SLATE, tools: 'classic', doubleKey: true, bandStroke: SLATE },
  bold: { shield: SLATE, key: STONE, fig: STONE, halo: SLATE, band: STONE, fold: '#b3a585', ink: SLATE, tools: 'classic', doubleKey: false, keyWidth: 4 },
  stone: { shield: STONE, key: SLATE, fig: SLATE, halo: STONE, band: SLATE, fold: '#1a272f', ink: STONE_L, tools: 'crossed', doubleKey: false, keyWidth: 3 },
  // tuned for near-black grounds (dark hero / footer): luminous stone on a teal field
  ondark: { shield: '#223138', key: STONE_L, fig: STONE_L, halo: '#223138', band: STONE, fold: '#9c8f70', ink: SLATE, tools: 'classic', doubleKey: true, keyWidth: 3 },
}

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
  const s = SCHEMES[scheme]
  const Tools = s.tools === 'crossed' ? ToolsCrossed : ToolsClassic
  return (
    <svg viewBox="0 0 280 300" style={style} className={className} xmlns="http://www.w3.org/2000/svg">
      <Shield fill={s.shield} keyline={s.key} keyWidth={s.keyWidth || 3} doubleKey={s.doubleKey} />
      <Cross fill={s.fig} />
      <Tools fill={s.fig} stroke={s.halo} sw={3.2} />
      {withScroll && <Scroll band={s.band} fold={s.fold} ink={s.ink} />}
      {withScroll && s.bandStroke && (
        <g fill="none" stroke={s.bandStroke} strokeWidth="2" strokeLinejoin="round">
          <path d="M68,250 L40,243 L52,257 L40,271 L68,278" />
          <path d="M212,250 L240,243 L228,257 L240,271 L212,278" />
          <path d="M66,250 Q140,265 214,250 L214,278 Q140,293 66,278 Z" />
        </g>
      )}
    </svg>
  )
}
