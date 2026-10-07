import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import TechnologyContent from '@/components/foundry/TechnologyContent'

export const metadata: Metadata = {
  title: 'The System Behind Sabina — Dominus Foundry',
  description: 'A trained core, proprietary company memory, defined authority, and accumulating company knowledge: the four layers behind Sabina, operated by Dominus Foundry.',
  alternates: { canonical: 'https://dominusfoundry.com/technology' },
}

export default function TechnologyPage() {
  return (
    <FoundryShell active="technology">
      <TechnologyContent />
    </FoundryShell>
  )
}
