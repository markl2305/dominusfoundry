import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import HomeContent from '@/components/foundry/HomeContent'

export const metadata: Metadata = {
  title: 'Dominus Foundry — Governed AI and Commercial Intelligence',
  description: 'Dominus Foundry builds governed AI systems that become more valuable as they learn how real companies operate. Sabina is a company’s own AI, hired into one business and held to authority its owner grants her in writing; Forge is the platform and operating spine she runs on. Built by Mark and Bri Lord.',
  alternates: { canonical: 'https://dominusfoundry.com' },
}

export default function HomePage() {
  return (
    <FoundryShell active={null}>
      <HomeContent />
    </FoundryShell>
  )
}
