import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import HomeContent from '@/components/foundry/HomeContent'

export const metadata: Metadata = {
  title: 'Dominus Foundry™ — Fide et Familia',
  description:
    "A family-owned technology holding company. We build Sabina — your company's custom AI, a dedicated company AI system shaped around your business, its knowledge, its work, and the authority you give her. Forge is our contractor vertical and first proof point.",
  alternates: { canonical: 'https://dominusfoundry.com' },
}

export default function HomePage() {
  return (
    <FoundryShell active={null}>
      <HomeContent />
    </FoundryShell>
  )
}
