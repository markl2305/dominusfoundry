import type { Metadata } from 'next'
import BlogContent from '@/components/foundry/BlogContent'

export const metadata: Metadata = {
  title: 'Foundry Notes — Dominus Foundry',
  description: 'Short essays from the Lord family on operations intelligence, synthetic intelligence, and staying in control as AI tools change.',
  alternates: { canonical: 'https://dominusfoundry.com/blog' },
}

export default function BlogPage() {
  return <BlogContent />
}
