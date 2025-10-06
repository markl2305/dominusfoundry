import './globals.css';

export const metadata = {
  title: 'Dominus Foundry — Systems & QuickBooks Migration',
  description: 'Zero-drama, audit-ready QuickBooks migrations.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
