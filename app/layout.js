// app/layout.js
import './globals.css'
import Script from 'next/script'
import GA4PageView from './ga-pageview'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: 'Dominus Foundry',
  description: 'Systems, strategy, and smart rooms.',
}

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        <SiteHeader />
        
        <div className="min-h-screen flex flex-col">{children}</div>
        
        <SiteFooter />

        {/* SPA page_view tracking on route changes */}
        <GA4PageView />

        {/* GA4 base tag */}
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
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
