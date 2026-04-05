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
  title: 'Dominus Foundry — AI-Powered Software for Traditional Industries',
  description:
    'Dominus Foundry builds AI-powered vertical SaaS for traditional industries. Flagship product Forge is the AI operating system for commercial installation contractors. 10 provisional patents. Based in Albuquerque, NM.',
  keywords: ['Dominus Foundry', 'Forge', 'AI contractor software', 'vertical SaaS', 'construction technology', 'LiDAR', 'Hyperion', 'commercial roofing software'],
  authors: [{ name: 'Mark Lord' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Dominus Foundry — AI-Powered Software for Traditional Industries',
    description:
      'Technology holding company building AI-powered vertical SaaS. Flagship product: Forge, the AI operating system for commercial contractors. 10 provisional patents.',
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
    title: 'Dominus Foundry — AI-Powered Software for Traditional Industries',
    description:
      'Technology holding company building AI-powered vertical SaaS. Flagship product: Forge, for commercial contractors.',
    images: ['/og-image.png'],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4EBDD' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0F14' },
  ],
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
      <body className="antialiased font-inter">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dominus Foundry LLC",
              alternateName: "Dominus Foundry",
              url: "https://dominusfoundry.com",
              description:
                "Technology holding company building AI-powered vertical SaaS for traditional industries. Flagship product is Forge, an AI operating system for commercial installation contractors.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Albuquerque",
                addressRegion: "NM",
                addressCountry: "US",
              },
              telephone: "+18667103313",
              email: "foundry@dominusfoundry.com",
              foundingLocation: "Albuquerque, NM",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: "1-10",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "SoftwareApplication",
                    name: "Forge",
                    url: "https://buildwithforge.app",
                  },
                },
              ],
            }),
          }}
        />
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
