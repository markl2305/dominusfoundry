import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import GovernanceContent from '@/components/foundry/GovernanceContent'

export const metadata: Metadata = {
  title: 'Governance — Dominus Foundry',
  description: 'Explore our approach to scoped authority, traceable decisions, and revocation with an illustrative browser simulation.',
  alternates: { canonical: 'https://dominusfoundry.com/governance' },
}

export default function GovernancePage() {
  return (
    <FoundryShell active="governance">
      <GovernanceContent />
    </FoundryShell>
  )
}
