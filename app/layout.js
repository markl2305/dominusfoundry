// app/layout.js
import './globals.css'
import Script from 'next/script'
import GA4PageView from './ga-pageview'

export const metadata = {
  title: 'Dominus Foundry',
  description: 'Systems, strategy, and smart rooms.',
}

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-white">
        {/* Page content */}
        <div className="min-h-screen flex flex-col">{children}</div>

        {/* SPA page_view tracking on route changes */}
        <GA4PageView />

        {/* GA4 base tag */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
