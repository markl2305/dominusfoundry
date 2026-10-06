import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import HomeContent from '@/components/foundry/HomeContent'

export const metadata: Metadata = {
  title: 'Dominus Foundry — Governed AI and Commercial Intelligence',
  description: 'The company behind Sabina, your company’s own AI. Start with the work between promised and done, then teach her more under explicit authority. Forge provides the operating platform; broader commercial intelligence is a staged thesis.',
  alternates: { canonical: 'https://dominusfoundry.com' },
}

export default function HomePage() {
  return (
    <FoundryShell active={null}>
      <HomeContent />
    </FoundryShell>
  )
}
