import VisitorChatMount from './components/VisitorChatMount';
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
  // §15 META — the canonical title direction for this domain. Dominus Foundry is
  // the company and the intelligence thesis; Sabina is what a customer hires and
  // Forge is the platform beneath her. The title names the company's job, not the
  // product's, because this is the investor/company front door (§4).
  title: "Dominus Foundry — Governed AI and Commercial Intelligence",
  description:
    "Dominus Foundry builds governed AI systems and the commercial intelligence layer that grows from their use inside real businesses. Sabina is the AI employee companies hire; Forge is the platform and operating spine she runs on. Built by Mark and Bri Lord in Albuquerque, New Mexico.",
  keywords: ['Dominus Foundry', 'Sabina', 'company AI', 'governed AI', 'commercial intelligence', 'AI governance', 'Mark Lord', 'Bri Lord'],
  authors: [{ name: 'Mark Lord' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dominus Foundry — Governed AI and Commercial Intelligence",
    description:
      "Governed AI systems that become more valuable as they learn how real companies operate. Sabina is the AI employee companies hire; Forge is the platform beneath her.",
    // §15/§19.10: og:site_name is the literal string "Dominus Foundry" — no
    // trademark symbol. This is the ONLY place og:site_name is set for the whole
    // site, so this one value is the sitewide value.
    siteName: 'Dominus Foundry',
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
    title: "Dominus Foundry — Governed AI and Commercial Intelligence",
    description:
      "Governed AI systems that become more valuable as they learn how real companies operate. Sabina is the AI employee companies hire; Forge is the platform beneath her.",
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
              //
              // ⛔⛔ CANDIDATE, NOT SHIPPED — see next.config.js's matching
              // note and ESTATE-ALIGN-CANDIDATE-2026-09-18.md. The one added
              // sentence ("DominusOS is the governance layer...") is copied
              // verbatim from the sanctioned dominusfoundry.com phrasing in
              // DOMINUSOS-GAP.md §(d) ("Dominus Foundry builds Sabina and
              // DominusOS, the governance layer she runs on."), already
              // vetted against §22.6 (never claim stronger governance than
              // verified mechanics) and already live in near-identical form
              // on dominusos.ai. The rest of the description is UNCHANGED —
              // Forge's own sentence and POSITION are not touched, per the
              // 2026-09-17 D-1 ruling's narrowing ("no change to Forge's
              // POSITION in the hierarchy... does NOT hold sentence-level
              // edits where Forge is merely named").
              description:
                "Dominus Foundry is the family-owned company building governed AI systems and the commercial intelligence layer that grows from their use inside real businesses. Sabina is the AI employee a company hires: shaped around that business, its knowledge, and the authority its people grant her in writing. DominusOS is the governance layer she runs on, built by Dominus Foundry. Forge is the governed technology platform and operating spine she runs on. Hyperion is a standalone trades product for iPad LiDAR capture and proposal generation, hosted under Forge. Sabina is not generally available in every industry and does not work unsupervised; the trades are where she works first. Current availability: https://hiresabina.ai. Based in Albuquerque, New Mexico.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Albuquerque",
                addressRegion: "NM",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-505-520-1433",
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
              // ⛔ BANNED-NAME ERADICATION, 2026-09-16 (plan §17). These two
              // arrays keyed the Sabina entity at the retired product name's
              // anchors on buildwithforge.app. A case-SENSITIVE grep for that
              // name reports zero on this page and always did — it only ever
              // lived here, in machine-readable JSON-LD, which is exactly what
              // an answer engine parses as current fact. Under the vestige test
              // that is a vestige, not a record. ⛔ Do not restore them.
              //
              // They are not renamed in place to a #sabina anchor on
              // buildwithforge.app: under the ruled hierarchy (plan §0/§3)
              // Sabina is no longer a Forge sub-brand, so her canonical node is
              // the one hiresabina.ai already publishes — Service @id
              // https://hiresabina.ai/#service. This REFERENCES that node
              // rather than minting a rival, which is the same mistake the
              // duplicate company node above exists to fix.
              //
              // schema.org `brand` takes Brand or Organization, never Service.
              //
              // ⛔ AND `owns` DOES NOT TAKE A Service EITHER (kimi #7, round 3).
              // `owns` ranges over OwnershipInfo | Product. The Sabina node on
              // hiresabina.ai is typed Service, so asserting it here produced a
              // range violation — the one triple that replaced the banned one
              // would have been flagged by any strict structured-data consumer.
              // It is removed. `makesOffer` → Offer → itemOffered accepts a
              // Service, is valid, and carries the company→Sabina relation on
              // its own, so nothing is lost and ⛔ no rival Sabina node is
              // minted here to work around the range.
              brand: [
                { "@id": "https://buildwithforge.app/#forge-brand" },
              ],
              // ⛔⛔ CANDIDATE, NOT SHIPPED. The DominusOS entry is an INLINE
              // node, not an @id reference, because dominusos.ai currently
              // publishes NO JSON-LD of its own (measured 2026-09-18: zero
              // <script type="application/ld+json"> blocks on its live "/").
              // Every other entry in this array references a node the
              // product's OWN domain defines (buildwithforge.app/#forge) —
              // this repo's own comments above warn against minting a rival
              // node once a canonical one exists elsewhere. None exists yet
              // for DominusOS, so this candidate defines the @id HERE, under
              // the same https://dominusos.ai/#dominusos identifier a future
              // dominusos.ai JSON-LD pass should adopt, exactly as Forge's
              // node was later given its own home. This is a PROPOSAL, not
              // an architecture ruling — flagged for Mark in the HOLDS
              // section of ESTATE-ALIGN-CANDIDATE-2026-09-18.md.
              owns: [
                { "@id": "https://buildwithforge.app/#forge" },
                {
                  "@id": "https://dominusos.ai/#dominusos",
                  "@type": "SoftwareApplication",
                  name: "DominusOS",
                  url: "https://dominusos.ai",
                  applicationCategory: "Governance layer",
                  description:
                    "The governance layer Sabina runs on: every action she attempts is recorded before it is carried out, and anything that reaches the outside world needs a signed, single-use permit.",
                },
              ],
              // makesOffer used to redefine a fourth "Forge" node inline.
              // It now points at the product's own @id instead of minting a
              // rival — the same mistake as the duplicate company node, one
              // level down. This is also where Sabina is asserted, per above.
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@id": "https://hiresabina.ai/#service" } },
                { "@type": "Offer", itemOffered: { "@id": "https://buildwithforge.app/#forge" } },
              ],
              // ⛔ hiresabina.ai is NOT in sameAs (kimi #7, round 3). sameAs
              // asserts IDENTITY — pages about the same entity, which is why
              // LinkedIn and YouTube belong. A product's marketing site is not
              // identity-equivalent to the company that makes it, and answer
              // engines do read sameAs that way. It was added in round 1 and is
              // struck. ⛔ Do not re-add it; the company→Sabina relation lives
              // in makesOffer above.
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
        <VisitorChatMount />
      </body>
    </html>
  )
}
