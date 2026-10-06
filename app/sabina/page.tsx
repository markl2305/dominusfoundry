import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import SabinaContent from '@/components/foundry/SabinaContent'

export const metadata: Metadata = {
  title: "Sabina — Your Company's Own AI",
  description: "Hire the AI that owns the middle. Sabina is your company’s own AI, starting with agreed promise-to-completion work, teaching, and explicit authority.",
  alternates: { canonical: 'https://dominusfoundry.com/sabina' },
}

export default function SabinaPage() {
  return (
    <FoundryShell active="sabina">
      <SabinaContent />
    </FoundryShell>
  )
}
