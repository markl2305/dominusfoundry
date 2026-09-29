import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import SabinaContent from '@/components/foundry/SabinaContent'

export const metadata: Metadata = {
  title: "Sabina — Your Company's Custom AI Employee",
  description: "Sabina, your company's custom AI employee, helps with commitments, team questions, and permitted follow-through. Start on Sabina's own site.",
  alternates: { canonical: 'https://dominusfoundry.com/sabina' },
}

export default function SabinaPage() {
  return (
    <FoundryShell active="sabina">
      <SabinaContent />
    </FoundryShell>
  )
}
