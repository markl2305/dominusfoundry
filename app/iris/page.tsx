import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import IrisContent from '@/components/foundry/IrisContent'

export const metadata: Metadata = {
  title: 'Iris — the employee you hire | Dominus Foundry',
  description:
    'The front office is one person, and everything waits on her. Iris answers the customer, carries the money conversation, takes what you hand her, and carries it to done — inside a record the owner governs.',
  alternates: { canonical: 'https://dominusfoundry.com/iris' },
}

export default function IrisPage() {
  return (
    <FoundryShell active="iris">
      <IrisContent />
    </FoundryShell>
  )
}
