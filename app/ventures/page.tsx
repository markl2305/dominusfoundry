import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import VenturesContent from '@/components/foundry/VenturesContent'

export const metadata: Metadata = {
  title: 'Foundry Capital — The Long-Term Thesis — Dominus Foundry',
  description:
    "Foundry Capital is Dominus Foundry's thesis for what comes after Forge: as the flagship's cash flow compounds, we intend to back operator-led, vertical-first software the platforms skipped. Family-funded today — not yet an active investor.",
  alternates: { canonical: 'https://dominusfoundry.com/ventures' },
}

export default function VenturesPage() {
  return (
    <FoundryShell active="ventures">
      <VenturesContent />
    </FoundryShell>
  )
}
