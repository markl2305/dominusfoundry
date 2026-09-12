import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import IrisContent from '@/components/foundry/IrisContent'

export const metadata: Metadata = {
  title: "Sabina — your company's custom AI | Dominus Foundry",
  description: "Meet Sabina, a dedicated company AI shaped around your business, its knowledge, and the authority you grant her.",
  alternates: { canonical: 'https://dominusfoundry.com/sabina' },
}

export default function IrisPage() {
  return (
    <FoundryShell active="iris">
      <IrisContent />
    </FoundryShell>
  )
}
