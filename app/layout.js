import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Dominus Foundry — Systems & QuickBooks Migration',
  description:
    'We build calm operations and deliver zero-drama, audit-ready QuickBooks migrations.',
  openGraph: {
    title: 'Dominus Foundry',
    description:
      'Zero-drama, audit-ready QuickBooks migrations and operational systems.',
    url: 'https://dominusfoundry.com',
    siteName: 'Dominus Foundry',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dominus Foundry',
    description:
      'Zero-drama, audit-ready QuickBooks migrations and operational systems.',
    images: ['/og-default.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
