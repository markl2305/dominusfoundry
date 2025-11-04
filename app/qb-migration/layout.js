import '../globals.css';
import { Suspense } from 'react';
import Script from 'next/script';
import GA4PageView from '../ga.pageview';
import MinimalHeader from '@/components/MinimalHeader';

export default function QBMigrationLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <div data-landing-page>
      <MinimalHeader />
      
      <main className="min-h-screen bg-white">
        {children}
      </main>

      {/* Minimal footer for landing page */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Dominus Foundry. All rights reserved.</p>
          <p className="mt-2">
            <a href="mailto:hello@dominusfoundry.com" className="underline hover:text-gray-900">
              hello@dominusfoundry.com
            </a>
          </p>
        </div>
      </footer>

      {/* GA4 tracking */}
      <Suspense fallback={null}>
        <GA4PageView />
      </Suspense>

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
    </div>
  );
}
