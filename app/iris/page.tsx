import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import IrisContent from '@/components/foundry/IrisContent'

export const metadata: Metadata = {
  title: "Sabina — your company's custom AI | Dominus Foundry",
  description:
    "Sabina is your company's custom AI — a dedicated company AI system shaped around your business, its knowledge, its work, and the authority you give her. Hired, not licensed. In a contractor's front office she answers the customer, carries the money conversation, and carries what you hand her to done — inside a record the owner governs.",
  alternates: { canonical: 'https://dominusfoundry.com/iris' },
}

export default function IrisPage() {
  return (
    <FoundryShell active="iris">
      <IrisContent />
    </FoundryShell>
  )
}
