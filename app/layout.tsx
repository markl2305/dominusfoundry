// app/layout.tsx
// Root layout with metadata, favicon configuration, and analytics

import { Inter } from 'next/font/google'
import Analytics from './components/Analytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dominus Foundry | QuickBooks Desktop Migration & Tech Transitions',
  description: 'Helping traditional New Mexico businesses survive technological change with patience and personal care. Expert QuickBooks Desktop migration, AI automation, and tech roadmapping for family-owned businesses.',
  keywords: ['QuickBooks Desktop migration', 'Albuquerque business technology', 'New Mexico tech consulting', 'small business automation', 'family business technology'],
  authors: [{ name: 'Mark & Bri Lord' }],
  openGraph: {
    title: 'Dominus Foundry | Tech Transitions for Traditional Businesses',
    description: 'Expert guidance for family-owned businesses navigating technological change in New Mexico.',
    url: 'https://dominusfoundry.com',
    siteName: 'Dominus Foundry',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dominus Foundry - Fide et Familia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dominus Foundry | Tech Transitions for Traditional Businesses',
    description: 'Expert guidance for family-owned businesses navigating technological change in New Mexico.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo-crest.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://dominusfoundry.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-tan-200 text-navy-800 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

/*
USAGE NOTES:
1. Body background is now tan-200 instead of white
2. Text color is navy-800 for strong contrast on tan
3. Update metadataBase URL if using different domain
4. OG image and favicon are configured for social sharing
5. Keywords are SEO-optimized for Albuquerque/NM market
6. Analytics component loads GA4 (configure in environment variables)
*/
