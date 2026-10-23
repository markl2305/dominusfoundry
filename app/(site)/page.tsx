import type { Metadata } from 'next'
import HomeContent from '@/components/foundry/HomeContent'

export const metadata: Metadata = {
  title: 'Dominus Foundry — Managed AI for Companies',
  description: 'Dominus Foundry builds and operates Sabina and Forge: company AI and the structured records that make agreed work useful. Forge comes with Sabina; specialist tools have defined scopes.',
  alternates: { canonical: 'https://dominusfoundry.com' },
}

export default function HomePage() {
  return <HomeContent />
}
