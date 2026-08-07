import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import PricingContent from '@/components/foundry/PricingContent'

export const metadata: Metadata = {
  title: 'What Forge costs | Dominus Foundry™',
  description:
    'A reference, not an offer. Forge pricing is additive: Forge Core at $599/mo is the required base, and modules are lines on top — so a business lands between $599/mo for Core alone and $2,099/mo for Core plus Iris, more if it adds modules. Forge is sold at buildwithforge.app.',
  alternates: { canonical: 'https://dominusfoundry.com/pricing' },
}

export default function PricingPage() {
  return (
    <FoundryShell>
      <PricingContent />
    </FoundryShell>
  )
}
