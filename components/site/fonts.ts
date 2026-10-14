import { Cinzel, Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google'

/* The redesign's three faces, self-hosted by next/font: the files are fetched
   at build time and served from this domain, so no route makes a request to
   fonts.googleapis.com or fonts.gstatic.com. Moved here from app/pitch/page.tsx
   (2026-10-14) so the root layout can give every route the same variables. */
export const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-dfp-serif', display: 'swap' })
export const titling = Cinzel({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-dfp-titling', display: 'swap' })
export const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dfp-mono', display: 'swap' })
export const fontVars = `${serif.variable} ${titling.variable} ${mono.variable}`
