import VisitorChatMount from './components/VisitorChatMount';
import { Inter, Crimson_Pro } from 'next/font/google'
import SiteAnalytics from './components/SiteAnalytics'
import AppShell from '../components/AppShell'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'
import GAPageview from './components/GAPageview'
import ConsentBar from './components/ConsentBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-crimson',
})

export const metadata = {
  // RETOOL 2026-10-07 (HANDOFF §11): title/description follow the "Foundry
  // home" row — Managed AI is the commercial category.
  // §15 META — the canonical title direction for this domain. Dominus Foundry is
  // the company and the intelligence thesis; Sabina is what a customer hires and
  // Forge is the platform beneath her. The title names the company's job, not the
  // product's, because this is the investor/company front door (§4).
  title: "Dominus Foundry — Managed AI for Companies",
  description:
    "Customized company AI through Sabina, built and operated by Dominus Foundry on a reusable platform: a trained core, company memory, and the authority your company defines.",
  keywords: ['Dominus Foundry', 'Sabina', 'Managed AI', 'company AI', 'AI governance', 'Mark Lord', 'Bri Lord'],
  authors: [{ name: 'Mark Lord' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dominus Foundry — Managed AI for Companies",
    description:
      "Customized company AI through Sabina, built and operated by Dominus Foundry on a reusable platform: a trained core, company memory, and the authority your company defines.",
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
    title: "Dominus Foundry — Managed AI for Companies",
    description:
      "Customized company AI through Sabina, built and operated by Dominus Foundry on a reusable platform: a trained core, company memory, and the authority your company defines.",
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
  // Read by public/consent/consent.js (the same gate file as hiresabina.ai, copied unchanged). privatePaths
  // never send analytics, consent or not (same list as GAPageview and SiteAnalytics).
  const CONSENT_CONFIG = `window.CONSENT_CONFIG=${JSON.stringify({
    storageKey: 'df-consent',
    privacyHref: '/privacy',
    ga4: hasRealGaId ? GA_ID : null,
    linkedin: null,
    autoBar: false, // ConsentBar mounts it after hydration
    vercel: false, // the React <Analytics /> in SiteAnalytics carries Vercel here, gated on the same choice
    privatePaths: '^/(api|chat|login|graph|command|transcribe)(/|$)',
    // Bar wording through the gate's own config (gate v2: barText, acceptLabel, rejectLabel; consent.js stays
    // byte-identical to hiresabina's). Mark 2026-10-13: one choice, named honestly — the Google tag here is linked
    // to Google Ads, so the bar says the same Allow covers cookieless Google Ads measurement. The button labels
    // are the gate's defaults, set explicitly; changing them is Mark's call.
    barText: hasRealGaId
      ? 'We use Google Analytics and Vercel Web Analytics only if you allow it. The same choice lets Google Ads measure visits without cookies. No analytics or ad measurement data is sent until you choose. '
      : 'We use Vercel Web Analytics only if you allow it. No analytics data is sent until you choose. ',
    acceptLabel: 'Allow analytics',
    rejectLabel: 'No analytics',
  })};` +
    // Google Consent Mode defaults, queued before any tag exists (no network: gtag.js only loads after Allow).
    // The Google tag behind GA_ID is linked, in Google's own tag settings, to Google Ads AW-17706960854 —
    // measured 2026-10-12: gtag/js?id=G-9J4GY8YZ6G carries that AW id 11 times, and this repo carries none.
    // So the one loader the gate holds back also holds back Ads. The visitor's choice is "Allow analytics",
    // so ad storage, ad user data and ad personalization stay DENIED even after it: no _gcl cookies, no
    // remarketing. Turning Ads on needs its own choice in the gate (OPEN ON MARK), not this default.
    `(function(){var w=window;w.dataLayer=w.dataLayer||[];function g(){w.dataLayer.push(arguments)}` +
    `g('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});` +
    `g('set','ads_data_redaction',true);})();` +
    // The gate is loaded HERE, by this same inline script, after the config and the Consent Mode defaults above, so
    // it can never run without them (v2 sync review: Next/React hoists an <script async src> ahead of inline
    // scripts in the HTML, and with a delayed HTML chunk the gate ran with no config; reproduced by
    // tests/consent/script-order.mjs). There is no other <script src> for consent.js on any route.
    `(function(){var d=document,s=d.createElement('script');s.src='/consent/consent.js';s.async=true;(d.head||d.documentElement).appendChild(s);})();`

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
        {/* Consent gate (compliance P1-1c, Mark 2026-10-12). Google Analytics 4 and Vercel Web Analytics load
            ONLY after a visitor presses "Allow analytics", never under Global Privacy Control (the
            navigator.globalPrivacyControl signal, or the consent_gpc cookie middleware.js sets from Sec-GPC),
            and never from the server: public/consent/consent.js creates every tag in the browser, so with
            JavaScript off nothing is sent. */}
        {/* One inline script: config, Consent Mode defaults, then it inserts public/consent/consent.js itself. The
            order is guaranteed by construction; a separate <script async src> would be hoisted ahead of it. */}
        <script id="consent-config" dangerouslySetInnerHTML={{ __html: CONSENT_CONFIG }} />
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
                "Dominus Foundry builds and operates Managed AI for businesses. Sabina is your company's own AI, shaped around your systems, knowledge, people, and authority. Foundry combines a core model it trains and operates with proprietary memory, company teaching and defined authority, deploying company-specific systems from a reusable platform. Forge supplies operating records and specialist tools beneath and alongside Sabina; some Forge tools are sold independently. Hyperion is a specialist trades product for iPad LiDAR capture and proposal generation, with its own scope. DominusOS supplies the authority and execution-control architecture. Forge customer production does not establish Sabina customer readiness or make Hyperion a Sabina capability. Current availability: https://hiresabina.ai. Based in Albuquerque, New Mexico.",
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
              owns: [
                { "@id": "https://buildwithforge.app/#forge" },
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

        {/* GA4 page_view on client-side route changes, after consent only. The first page_view and the
            gtag.js loader come from public/consent/consent.js, with page_location = origin + pathname
            (no query string or fragment), the same rule the previous inline bootstrap enforced. */}
        <GAPageview />
        <ConsentBar />
        <VisitorChatMount />
        {/* Vercel Web Analytics (Mark 2026-10-01), rendered only after accept (Mark 2026-10-12). */}
        <SiteAnalytics />
      </body>
    </html>
  )
}
