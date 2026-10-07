import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import SabinaContent from '@/components/foundry/SabinaContent'

export const metadata: Metadata = {
  title: "Sabina — Your Company's Own AI",
  description: "Help with calls, follow-up, and connected work. Sabina is your company’s own AI, with company context and defined authority, deployed and operated by Dominus Foundry.",
  alternates: { canonical: 'https://dominusfoundry.com/sabina' },
}

export default function SabinaPage() {
  return (
    <FoundryShell active="sabina">
      <SabinaContent />
    </FoundryShell>
  )
}
