// app/layout.tsx
// Root layout with metadata, comprehensive favicon configuration, and analytics

import { Inter } from 'next/font/google'
import Script from 'next/script'
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-crest.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://dominusfoundry.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional favicon fallbacks for better browser support */}
        <link rel="icon" type="image/svg+xml" href="/logo-crest.svg" />
        <link rel="alternate icon" type="image/png" href="/favicon-32x32.png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-tan-200 text-navy-800 antialiased`}>
        <SiteHeader />
        
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        
        <SiteFooter />

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
