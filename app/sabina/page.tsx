import type { Metadata } from 'next'
import SabinaContent from '@/components/foundry/SabinaContent'

export const metadata: Metadata = {
  title: "Sabina — Your Company's Own AI",
  description: "Your company’s own managed private AI, set up and operated by Dominus Foundry, with Forge included. Scope company understanding, preparation and ongoing work to your information and authority.",
  alternates: { canonical: 'https://dominusfoundry.com/sabina' },
}

export default function SabinaPage() {
  return <SabinaContent />
}
