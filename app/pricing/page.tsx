import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import PricingContent from '@/components/foundry/PricingContent'
import { openSeatsWord, totalSeatsWord } from '@/content/founding-charter.mjs'

export const metadata: Metadata = {
  title: 'What Forge costs | Dominus Foundry™',
  description:
    `A reference, not an offer. A fully-loaded office coordinator runs about $5,500/mo. Forge is sold two ways. Sabina is one tier, hired onto the founding charter — ${openSeatsWord} of ${totalSeatsWord} seats open — with Forge Core included and never a separate line; her rate is disclosed once we know the job, never published. Hyperion is $1,100/mo with Forge Core included. The tools are bought a la carte on Core at $599/mo flat with unlimited users — Sigil $49, Torch $35 per phone number. Forge is sold at buildwithforge.app.`,
  alternates: { canonical: 'https://dominusfoundry.com/pricing' },
}

export default function PricingPage() {
  return (
    <FoundryShell>
      <PricingContent />
    </FoundryShell>
  )
}
