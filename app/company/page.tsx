import type { Metadata } from 'next'
import CompanyContent from '@/components/foundry/CompanyContent'

export const metadata: Metadata = {
  title: 'The Company — Dominus Foundry',
  description: 'The Managed AI company behind Sabina, your company’s own AI. Built and held by Mark and Bri Lord in Albuquerque, New Mexico.',
  alternates: { canonical: 'https://dominusfoundry.com/company' },
}

export default function CompanyPage() {
  return <CompanyContent />
}
