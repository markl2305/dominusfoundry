import MinimalHeader from '../../components/MinimalHeader';

export const metadata = {
  title: 'QuickBooks Desktop Migration — Dominus Foundry',
  description: 'Move from QuickBooks Desktop to Online in 5-7 days with zero data loss and CPA-ready reports.',
};

export default function QBMigrationLayout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MinimalHeader />

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-bronze-300 bg-tan-200 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-navy-600 space-y-2">
          <p className="font-semibold text-navy-800">Dominus Foundry — QuickBooks Desktop Migration</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-navy-700">
            <a href="tel:+15052261457" className="hover:text-navy-900 font-medium">
              (505) 226-1457
            </a>
            <span className="hidden sm:inline text-bronze-400">•</span>
            <a href="mailto:hello@dominusfoundry.com" className="hover:text-navy-900 underline">
              hello@dominusfoundry.com
            </a>
          </div>
          <p className="text-xs text-navy-600/80">© {new Date().getFullYear()} Dominus Foundry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
