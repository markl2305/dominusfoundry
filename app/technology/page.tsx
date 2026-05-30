import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import TechnologyContent from '@/components/foundry/TechnologyContent'

export const metadata: Metadata = {
  title: 'Hyperion — Spatial Intelligence | Dominus Foundry',
  description:
    'Hyperion is patent-pending spatial intelligence. A phone walks a building and returns a 3D model, a bill of materials, and a client-ready proposal — automatically.',
  alternates: { canonical: 'https://dominusfoundry.com/technology' },
}

export default function TechnologyPage() {
  return (
    <FoundryShell active="technology">
      <TechnologyContent />
    </FoundryShell>
  )
}
