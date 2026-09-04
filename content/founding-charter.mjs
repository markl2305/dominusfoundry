// Single source of truth for the Founding Charter seat count.
//
// RULED: TEN seats total. ONE signed (All Weather Roofing). TWO spoken for,
// unsigned. Everything else here — including the word forms ("seven") used in
// prose — is DERIVED from these three numbers. Never hardcode a seat count or
// its word form anywhere else in the codebase; import from here instead.
//
// This file is plain ESM JS (not TypeScript) on purpose: it is imported both
// by the Next.js app (components/pages, via webpack) and directly by Node in
// scripts/check-founding-charter.mjs, which has no TypeScript loader. One
// file, two consumers, no restatement.

export const TOTAL_SEATS = 10
export const SIGNED_SEATS = 1
export const SPOKEN_FOR_SEATS = 2
export const OPEN_SEATS = TOTAL_SEATS - SIGNED_SEATS - SPOKEN_FOR_SEATS

const NUMBER_WORDS = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five',
  'Six', 'Seven', 'Eight', 'Nine', 'Ten',
]

function wordFor(n) {
  const w = NUMBER_WORDS[n]
  if (!w) throw new Error(`founding-charter: no word form for ${n} — extend NUMBER_WORDS`)
  return w
}

export const TOTAL_SEATS_WORD = wordFor(TOTAL_SEATS)
export const SIGNED_SEATS_WORD = wordFor(SIGNED_SEATS)
export const SPOKEN_FOR_SEATS_WORD = wordFor(SPOKEN_FOR_SEATS)
export const OPEN_SEATS_WORD = wordFor(OPEN_SEATS)

// Lowercase forms for mid-sentence use.
export const totalSeatsWord = TOTAL_SEATS_WORD.toLowerCase()
export const signedSeatsWord = SIGNED_SEATS_WORD.toLowerCase()
export const spokenForSeatsWord = SPOKEN_FOR_SEATS_WORD.toLowerCase()
export const openSeatsWord = OPEN_SEATS_WORD.toLowerCase()
