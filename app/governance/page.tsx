import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import GovernanceContent from '@/components/foundry/GovernanceContent'

export const metadata: Metadata = {
  title: 'Governance — Responsibility Within Authority',
  description: 'Company-defined permissions, approvals, revocation, and records of permitted work. Sabina’s understanding can grow; her authority comes from what the company grants.',
  alternates: { canonical: 'https://dominusfoundry.com/governance' },
}

export default function GovernancePage() {
  return (
    <FoundryShell active="governance">
      <GovernanceContent />
    </FoundryShell>
  )
}
