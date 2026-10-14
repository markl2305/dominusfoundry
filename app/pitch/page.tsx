import type { Metadata, Viewport } from 'next'
import { fontVars } from '@/components/site/fonts'
import PitchContent from './PitchContent'
import './pitch.css'
import '@/app/styles/pages/pitch.css'

/* The redesigned page's three faces are self-hosted by next/font in
   components/site/fonts.ts (shared with every route since 2026-10-14): the
   files are fetched at build time and served from this domain, so the page
   makes no request to fonts.googleapis.com or fonts.gstatic.com. */

/* §15 META for dominusfoundry.com/pitch. The OpenGraph description explains the
   governed-AI + compounding-intelligence thesis rather than saying "pitch deck"
   — this is the link an investor forwards, and the preview is the first
   sentence of the argument. */
export const metadata: Metadata = {
  title: 'Dominus Foundry — Managed AI Investor Case',
  description:
    'Managed AI through Sabina: a four-layer architecture, direct company deployments, platform economics, MSP distribution strategy, and company intelligence, with current evidence separated from roadmap.',
  alternates: { canonical: 'https://dominusfoundry.com/pitch' },
  // ⛔ RULED 2026-09-16 (round 2, R5): NOT INDEXED BY SEARCH ENGINES, and out
  // of the sitemap. That is the whole claim and the only true one — the page is
  // linked from the homepage hero, the footer and the mobile nav on every
  // route, so it is openly reachable and a crawler can discover it through
  // those links. ⛔ Do not describe it anywhere as private, confidential, or
  // shared only on request: it is none of those, and saying so while linking it
  // from site chrome is the site contradicting itself (kimi #5, round 3).
  // The root layout defaults to index:true/follow:true, so this MUST be set
  // here — omitting it inherits the indexable default, the same replacement
  // trap as the openGraph block below.
  robots: { index: false, follow: false },
  openGraph: {
    /* ⛔ THIS OBJECT MUST BE COMPLETE. Declaring `openGraph` at the page level
       REPLACES the root layout's object rather than merging into it, so every
       field the root layout supplies has to be repeated here or it is simply
       dropped from this route.

       That cost us twice. Round 2 caught `siteName` (measured: 29 routes
       carried og:site_name, this one did not). Round 3 caught `images` — the
       root layout's `/og-image.png` was being stripped, so the one page whose
       stated purpose is to be "the link an investor forwards" was rendering a
       bare imageless card in iMessage, Slack and LinkedIn while still
       declaring twitter.card = summary_large_image, which promises one.

       ⛔ Next page author: copy this object whole, then edit. Do not start
       from the two or three fields you happen to be changing. */
    siteName: 'Dominus Foundry',
    title: 'Dominus Foundry — Managed AI Investor Case',
    description:
      'Managed AI through Sabina: a four-layer architecture, direct company deployments, platform economics, MSP distribution strategy, and company intelligence, with current evidence separated from roadmap.',
    url: 'https://dominusfoundry.com/pitch',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Dominus Foundry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dominus Foundry — Managed AI Investor Case',
    description:
      'Managed AI through Sabina: a four-layer architecture, direct company deployments, platform economics, MSP distribution strategy, and company intelligence, with current evidence separated from roadmap.',
    // ⛔ Same replacement rule as openGraph above: `summary_large_image`
    // without an image is a card that promises a picture and renders none.
    images: ['/og-image.png'],
  },
}

/* viewport-fit=cover lets the translucent nav run under the notch and the
   page honour env(safe-area-inset-*). Not metadata: title, description,
   canonical, robots and the openGraph/twitter objects above are unchanged. */
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' }

/* 2026-10-14: /pitch carries its own nav (chapter button and progress line, plus
   the shared site menu and theme control) and the shared site footer. Every
   other route renders inside components/site/SiteShell. */
export default function PitchPage() {
  return <PitchContent fontClass={fontVars} />
}
