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
  title: 'Dominus Foundry™ — AI-Powered Software for Traditional Industries',
  description:
    'Dominus Foundry™ builds AI-powered vertical SaaS for traditional industries. Flagship product Forge™ is the AI operating system for commercial installation contractors. 18 provisional patents. Based in Albuquerque, NM.',
  keywords: ['Dominus Foundry™', 'Forge™', 'AI contractor software', 'vertical SaaS', 'construction technology', 'LiDAR', 'Hyperion™', 'commercial roofing software'],
  authors: [{ name: 'Mark Lord' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Dominus Foundry™ — AI-Powered Software for Traditional Industries',
    description:
      'Technology holding company building AI-powered vertical SaaS. Flagship product: Forge™, the AI operating system for commercial contractors. 18 provisional patents.',
    url: 'https://dominusfoundry.com',
    siteName: 'Dominus Foundry™',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dominus Foundry™ - Fide et Familia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dominus Foundry™ — AI-Powered Software for Traditional Industries',
    description:
      'Technology holding company building AI-powered vertical SaaS. Flagship product: Forge™, for commercial contractors.',
    images: ['/og-image.png'],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4EBDD' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0F14' },
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
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
    // suppressHydrationWarning: the pre-paint theme script below writes
    // data-df-theme onto <html> before React hydrates, so the server markup
    // legitimately differs from the client DOM by that one attribute.
    <html
      lang="en"
      className={`${inter.variable} ${crimson.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Resolve the FoundryShell theme BEFORE first paint. FoundryShell is a
            client component that can only read localStorage in an effect, so
            without this the server-rendered dark theme paints first and a
            light-preference visitor sees a dark frame flash. foundry.css keys
            its token blocks off this attribute with higher specificity than
            .df-site[data-theme], so the pre-paint value wins until hydration. */}
        <script
          id="df-theme-preload"
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('df-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-df-theme',t)}catch(e){}",
          }}
        />
      </head>
      <body className="antialiased font-inter">
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              // THE ENTITY BRIDGE (2026-08-23). This node had NO @id at all,
              // and buildwithforge.app defined a SECOND company node at
              // buildwithforge.app/#organization. A reconciler saw two
              // organizations that happen to share a name, so none of this
              // domain's authority reached the product.
              //
              // Measured over the Clio probe corpus since June:
              // dominusfoundry.com appears in answer-engine sources in 1,589
              // of 3,402 probes; buildwithforge.app appears in 1 of 5,475.
              // The parent holds all of the authority and the product holds
              // none. This @id is the fix: it is now the ONE canonical
              // company identifier, and forge-web references it rather than
              // defining a rival (markl2305/forge-web#213).
              // ⛔ Do not change this string without changing it there too.
              "@id": "https://dominusfoundry.com/#organization",
              name: "Dominus Foundry™ LLC",
              alternateName: ["Dominus Foundry™", "Dominus Foundry"],
              url: "https://dominusfoundry.com",
              logo: "https://dominusfoundry.com/logo-full.svg",
              // VERTICALS CANON — RULED by Mark 2026-08-23. This read
              // "across AV/security, fire/life-safety, roofing, and solar",
              // stating all four as current. Only two are: AV/security and
              // commercial roofing. Fire/life-safety and solar are next
              // phase with no production customer, and a surface implying
              // otherwise is a public-surface-rule violation, not a nit.
              description:
                "Dominus Foundry is a family-owned technology holding company in Albuquerque, New Mexico. Its flagship product is Forge™ — a complete AI operations platform (not a CRM) for commercial trade contractors. Two trades run on Forge in production today: AV and security, and commercial roofing. Fire and life safety, and solar, are next phase and are not shipping yet. Iris is Forge's AI employee, sold as a hire rather than as a module, with Forge Core included. The tools are bought separately on Core: Hyperion (LiDAR scan-to-proposal), Ariadne (scheduling and dispatch), Sigil (signatures and agreements), and Torch (dialer, SMS and call intelligence); Treasury (payroll and payments) is in development. Voice Concierge, InvoiceFlow, and Orderline are retired pre-Forge offerings, not current products, as are Calliope, Mentor, and Herald.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Albuquerque",
                addressRegion: "NM",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-866-849-2113",
                contactType: "Sales",
                email: "foundry@dominusfoundry.com",
                areaServed: "US",
                availableLanguage: "English",
              },
              foundingLocation: "Albuquerque, NM",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: "1-10",
              },
              // The parent asserts ownership downward, BY @id, at the same
              // product nodes forge-web now defines on its own domain. This
              // is the half of the bridge that could only be built here.
              // ⛔ subOrganization is deliberately NOT used: Forge is a
              // product, not a subsidiary, and subOrganization would assert
              // a corporate child that does not exist. brand / owns /
              // publisher are the correct predicates.
              brand: [
                { "@id": "https://buildwithforge.app/#forge-brand" },
                { "@id": "https://buildwithforge.app/#iris-brand" },
              ],
              owns: [
                { "@id": "https://buildwithforge.app/#forge" },
                { "@id": "https://buildwithforge.app/#iris" },
              ],
              // makesOffer used to redefine a fourth "Forge" node inline.
              // It now points at the product's own @id instead of minting a
              // rival — the same mistake as the duplicate company node, one
              // level down.
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@id": "https://buildwithforge.app/#forge" } },
                { "@type": "Offer", itemOffered: { "@id": "https://buildwithforge.app/#iris" } },
              ],
              sameAs: [
                "https://dominusfoundry.com",
                "https://buildwithforge.app",
                "https://www.linkedin.com/company/dominus-foundry",
                "https://www.youtube.com/@Forge-DF",
              ],
            }),
          }}
        />
        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://dominusfoundry.com/#website",
              name: "Dominus Foundry™",
              url: "https://dominusfoundry.com",
              // Was an inline anonymous Organization — a THIRD company node
              // on the same page as the first. Now a reference.
              publisher: { "@id": "https://dominusfoundry.com/#organization" },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://dominusfoundry.com/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
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
