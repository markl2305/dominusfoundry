import type { Metadata } from 'next'
import FoundryShell from '@/components/foundry/FoundryShell'
import CompanyContent from '@/components/foundry/CompanyContent'

export const metadata: Metadata = {
  title: 'The Company — Dominus Foundry',
  description:
    'Dominus Foundry is a family-owned technology holding company in Albuquerque, NM — built and held by Mark & Bri Lord. Fide et Familia.',
  alternates: { canonical: 'https://dominusfoundry.com/company' },
}

export default function CompanyPage() {
  return (
    <FoundryShell active="company">
      <CompanyContent />
    </FoundryShell>
  )
}
