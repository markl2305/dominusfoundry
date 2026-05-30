import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import PressContent from '@/components/foundry/PressContent'

export const metadata: Metadata = {
  title: 'Press — Dominus Foundry',
  description: 'Coverage of Dominus Foundry and Forge, the operating system for the trades. Press inquiries: press@dominusfoundry.com.',
  alternates: { canonical: 'https://dominusfoundry.com/press' },
}

export default function PressPage() {
  return (
    <FoundryShell active="press">
      <PressContent />
    </FoundryShell>
  )
}
