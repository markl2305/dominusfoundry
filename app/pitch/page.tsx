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
  openGraph: {
    /* ⛔ siteName is repeated here deliberately. Declaring `openGraph` at the
       page level REPLACES the root layout's openGraph object rather than
       merging into it, so omitting this renders /pitch with NO og:site_name at
       all — measured on a local fetch, 29 routes carried it and this one did
       not. Any future page that declares its own openGraph must do the same. */
    siteName: 'Dominus Foundry',
    title: 'Dominus Foundry — Investor Pitch',
    description:
      'Governed AI systems that become more valuable as they learn how real companies operate. Sabina is the AI employee a company hires under written authority; Forge is the platform beneath her; the governed record of that work compounds into commercial intelligence. Proof, economics and terms, with status stated exactly.',
    url: 'https://dominusfoundry.com/pitch',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dominus Foundry — Investor Pitch',
    description:
      'Governed AI systems that become more valuable as they learn how real companies operate. Proof, economics and terms, with status stated exactly.',
  },
}

export default function PitchPage() {
  return (
    <FoundryShell active={null}>
      <PitchContent />
    </FoundryShell>
  )
}
