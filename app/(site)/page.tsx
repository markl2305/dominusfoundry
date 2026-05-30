import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import HomeContent from '@/components/foundry/HomeContent'

export const metadata: Metadata = {
  title: 'Dominus Foundry™ — Fide et Familia',
  description:
    'A family-owned technology holding company. The parent behind Forge, Hyperion, and Foundry Capital — forging AI-native software built to endure.',
  alternates: { canonical: 'https://dominusfoundry.com' },
}

export default function HomePage() {
  return (
    <FoundryShell active={null}>
      <HomeContent />
    </FoundryShell>
  )
}
