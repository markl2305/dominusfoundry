import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import PressContent from '@/components/foundry/PressContent'

export const metadata: Metadata = {
  title: 'Press — Dominus Foundry',
  description: 'Coverage of Dominus Foundry — the company behind Sabina, a dedicated company AI system custom to the business it works for, and Forge, its contractor vertical. Press inquiries: foundry@dominusfoundry.com.',
  alternates: { canonical: 'https://dominusfoundry.com/press' },
}

export default function PressPage() {
  return (
    <FoundryShell active="press">
      <PressContent />
    </FoundryShell>
  )
}
