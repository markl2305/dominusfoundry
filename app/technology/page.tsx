import type { Metadata } from 'next'
import TechnologyContent from '@/components/foundry/TechnologyContent'

export const metadata: Metadata = {
  title: 'The System Behind Sabina — Dominus Foundry',
  description: 'The trained core, company memory and authority behind Sabina, operated by Dominus Foundry. Forge is included; supported connections and specialist tools have agreed scopes.',
  alternates: { canonical: 'https://dominusfoundry.com/technology' },
}

export default function TechnologyPage() {
  return <TechnologyContent />
}
