import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import PricingContent from '@/components/foundry/PricingContent'

export const metadata: Metadata = {
  title: 'What Forge costs | Dominus Foundry™',
  description:
    'A reference, not an offer. A fully-loaded office coordinator runs about $5,500/mo. Forge is sold two ways. Sabina is one tier — $2,000/mo for the ten founding operators, seven of which are open, and $3,500/mo standing once the charter closes — with Forge Core included and never a separate line. Hyperion is $1,100/mo with Forge Core included. The tools are bought a la carte on Core at $599/mo flat with unlimited users — Sigil $49, Torch $35 per phone number. A $2,500 one-time setup fee applies, due before onboarding work begins. Forge is sold at buildwithforge.app.',
  alternates: { canonical: 'https://dominusfoundry.com/pricing' },
}

export default function PricingPage() {
  return (
    <FoundryShell>
      <PricingContent />
    </FoundryShell>
  )
}
