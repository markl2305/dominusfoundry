import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import HomeContent from '@/components/foundry/HomeContent'

export const metadata: Metadata = {
  title: 'Dominus Foundry — The intelligence company',
  description: 'Dominus Foundry builds Sabina, a dedicated company AI shaped around your business, its knowledge, and the authority you give her. Built by Mark and Bri Lord.',
  alternates: { canonical: 'https://dominusfoundry.com' },
}

export default function HomePage() {
  return (
    <FoundryShell active={null}>
      <HomeContent />
    </FoundryShell>
  )
}
