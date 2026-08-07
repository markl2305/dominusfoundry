import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import GovernanceContent from '@/components/foundry/GovernanceContent'

export const metadata: Metadata = {
  title: 'Governance — Dominus Foundry',
  description:
    'Scoped, attributed, reversible, structural. Write a rule in plain English, watch it land in the record with an author and a date, then revoke it — governance you can operate, not a claim you have to accept.',
  alternates: { canonical: 'https://dominusfoundry.com/governance' },
}

export default function GovernancePage() {
  return (
    <FoundryShell active="governance">
      <GovernanceContent />
    </FoundryShell>
  )
}
