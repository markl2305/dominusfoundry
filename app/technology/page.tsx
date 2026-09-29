import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import TechnologyContent from '@/components/foundry/TechnologyContent'

export const metadata: Metadata = {
  title: 'Technology — Dominus Foundry',
  description: 'Company context, an operating record, and defined authority. Explore the technology approach beneath Sabina.',
  alternates: { canonical: 'https://dominusfoundry.com/technology' },
}

export default function TechnologyPage() {
  return (
    <FoundryShell active="technology">
      <TechnologyContent />
    </FoundryShell>
  )
}
