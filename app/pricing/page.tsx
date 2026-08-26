import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import PricingContent from '@/components/foundry/PricingContent'

export const metadata: Metadata = {
  title: 'What Forge costs | Dominus Foundry™',
  description:
    'A reference, not an offer. A fully-loaded office coordinator runs about $5,500/mo. Forge is sold two ways. Iris is $3,500/mo, one tier, with Forge Core included and never a separate line. The tools are bought a la carte on Core at $599/mo flat with unlimited users — Hyperion $499, Ariadne $499, Sigil $49, Torch $35 per phone number. A $1,000 one-time setup fee applies to either. Forge is sold at buildwithforge.app.',
  alternates: { canonical: 'https://dominusfoundry.com/pricing' },
}

export default function PricingPage() {
  return (
    <FoundryShell>
      <PricingContent />
    </FoundryShell>
  )
}
