import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import PricingContent from '@/components/foundry/PricingContent'
import { openSeatsWord, totalSeatsWord } from '@/content/founding-charter.mjs'

export const metadata: Metadata = {
  title: 'What Forge costs | Dominus Foundry™',
  description:
    `A reference, not an offer. A fully-loaded office coordinator runs about $5,500/mo. Forge products and Sabina are custom quoted for each company. Discuss the responsibilities, products and services you need, then review the scope and terms before committing. ${openSeatsWord} of ${totalSeatsWord} founding seats are open.`,
  alternates: { canonical: 'https://dominusfoundry.com/pricing' },
}

export default function PricingPage() {
  return (
    <FoundryShell>
      <PricingContent />
    </FoundryShell>
  )
}
