import { Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google'

/* The redesign's three faces, self-hosted by next/font: the files are fetched
   at build time and served from this domain, so no route makes a request to
   fonts.googleapis.com or fonts.gstatic.com. Moved here from app/pitch/page.tsx
   (2026-10-14) so the root layout can give every route the same variables. */
export const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-dfp-serif', display: 'swap' })
// Cinzel is no longer loaded (Apple polish 2026-11-02, M-1): the wordmark is set in Cormorant and Cinzel
// survives only as lettering inside the crest artwork (an image).
export const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dfp-mono', display: 'swap' })
export const fontVars = `${serif.variable} ${mono.variable}`
