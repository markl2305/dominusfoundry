import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import PitchContent from './PitchContent'
import './pitch.css'

/* §15 META for dominusfoundry.com/pitch. The OpenGraph description explains the
   governed-AI + compounding-intelligence thesis rather than saying "pitch deck"
   — this is the link an investor forwards, and the preview is the first
   sentence of the argument. */
export const metadata: Metadata = {
  title: 'Dominus Foundry — Investor Pitch',
  description:
    'Dominus Foundry builds governed AI systems and the commercial intelligence that grows from their use inside real businesses. Sabina is the AI employee companies hire; Forge is the platform beneath her. The thesis, what is already in production, the floor and funded scenarios, and the raise.',
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
    title: 'Dominus Foundry — Investor Pitch',
    description:
      'Governed AI systems that become more valuable as they learn how real companies operate. Sabina is the AI employee a company hires under written authority; Forge is the platform beneath her; the governed record of that work compounds into commercial intelligence. Proof, economics and terms, with status stated exactly.',
    url: 'https://dominusfoundry.com/pitch',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Dominus Foundry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dominus Foundry — Investor Pitch',
    description:
      'Governed AI systems that become more valuable as they learn how real companies operate. Proof, economics and terms, with status stated exactly.',
    // ⛔ Same replacement rule as openGraph above: `summary_large_image`
    // without an image is a card that promises a picture and renders none.
    images: ['/og-image.png'],
  },
}

export default function PitchPage() {
  return (
    <FoundryShell active={null}>
      <PitchContent />
    </FoundryShell>
  )
}
