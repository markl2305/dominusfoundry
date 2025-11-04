// app/components/Analytics.tsx
// Google Analytics 4 integration component
// Loads GA4 script and tracks pageviews

'use client'

import Script from 'next/script'

export default function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  
  // Don't load in development
  if (process.env.NODE_ENV === 'development' || !GA_ID) {
    return null
  }
  
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      
      {/* GA4 Configuration */}
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
  )
}

/*
SETUP INSTRUCTIONS:
1. Get your GA4 Measurement ID from Google Analytics
   - Go to: Admin → Data Streams → Your Web Stream
   - Copy the Measurement ID (format: G-XXXXXXXXXX)

2. Add to Vercel Environment Variables:
   Variable: NEXT_PUBLIC_GA_MEASUREMENT_ID
   Value: G-XXXXXXXXXX

3. Component automatically:
   - Skips loading in development (saves quota)
   - Uses Next.js Script component for optimal loading
   - Tracks pageviews automatically
   - Loads after interactive for performance

4. Verify it's working:
   - Open site in incognito window
   - Check GA4 Real-Time report
   - Should see your pageview within 30 seconds
*/
