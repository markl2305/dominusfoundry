import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import GovernanceContent from '@/components/foundry/GovernanceContent'

export const metadata: Metadata = {
  title: 'Governance — Responsibility Within Authority',
  description: 'Understand the boundary between a request, an authorized action, and a recorded result.',
  alternates: { canonical: 'https://dominusfoundry.com/governance' },
}

export default function GovernancePage() {
  return (
    <FoundryShell active="governance">
      <GovernanceContent />
    </FoundryShell>
  )
}
