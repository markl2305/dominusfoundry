import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import VenturesContent from '@/components/foundry/VenturesContent'

export const metadata: Metadata = {
  title: 'Foundry Capital — Dominus Foundry',
  description:
    'Foundry Capital backs the industries software forgot. Operator-led, vertical-first, cash-flow native — a holding company that invests, not a fund that exits.',
  alternates: { canonical: 'https://dominusfoundry.com/ventures' },
}

export default function VenturesPage() {
  return (
    <FoundryShell active="ventures">
      <VenturesContent />
    </FoundryShell>
  )
}
