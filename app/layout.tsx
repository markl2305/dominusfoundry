import { Inter, Crimson_Pro } from 'next/font/google'
import Script from 'next/script'
import AppShell from '../components/AppShell'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-crimson',
})

export const metadata = {
  title: 'Dominus Foundry | Business Tools Forged for the AI Era',
  description:
    'We forge business tools that let teams operate cleanly in the AI era — governed, auditable, and built to last.',
  keywords: ['business tools', 'operator-grade systems', 'governed automation', 'audit trails', 'Mentis'],
  authors: [{ name: 'Mark & Bri Lord' }],
  openGraph: {
    title: 'Dominus Foundry | Business Tools Forged for the AI Era',
    description:
      'We forge business tools that let teams operate cleanly in the AI era — governed, auditable, and built to last.',
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
    title: 'Dominus Foundry | Business Tools Forged for the AI Era',
    description:
      'We forge business tools that let teams operate cleanly in the AI era — governed, auditable, and built to last.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
  const GA_ID = GA_MEASUREMENT_ID
  const hasRealGaId = GA_ID && GA_ID !== 'G-XXXXXXXXXX'

  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable} scroll-smooth`}>
      <body className="bg-tan-200 text-navy-800 antialiased font-inter">
        <AppShell>{children}</AppShell>

        {/* Google Analytics 4 - loaded globally once */}
        {hasRealGaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  send_page_view: true,
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
