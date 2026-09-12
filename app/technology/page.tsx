import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import TechnologyContent from '@/components/foundry/TechnologyContent'

export const metadata: Metadata = {
  title: 'Technology — Company intelligence | Dominus Foundry',
  description: 'Our approach to company knowledge, delegated responsibilities, human oversight, and accountable AI.',
  alternates: { canonical: 'https://dominusfoundry.com/technology' },
}

export default function TechnologyPage() {
  return (
    <FoundryShell active="technology">
      <TechnologyContent />
    </FoundryShell>
  )
}
