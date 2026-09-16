import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import SabinaContent from '@/components/foundry/SabinaContent'

export const metadata: Metadata = {
  title: "Sabina — your company's custom AI | Dominus Foundry",
  description: "Meet Sabina, a dedicated company AI shaped around your business, its knowledge, and the authority you grant her.",
  alternates: { canonical: 'https://dominusfoundry.com/sabina' },
}

export default function SabinaPage() {
  return (
    <FoundryShell active="sabina">
      <SabinaContent />
    </FoundryShell>
  )
}
