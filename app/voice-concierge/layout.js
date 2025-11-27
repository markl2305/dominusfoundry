
export const metadata = {
  title: 'Foundry Voice Concierge — AI Phone Agent by Dominus Foundry',
  description: 'An AI phone agent that answers, books, and qualifies callers in your brand voice so you never miss a call.',
};

export default function VoiceConciergeLayout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-bronze-300 bg-tan-200 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-navy-600 space-y-2">
          <p className="font-semibold text-navy-800">Dominus Foundry — Foundry Voice Concierge</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-navy-700">
            <a href="tel:+18667103313" className="hover:text-navy-900 font-medium">
              (866) 710-3313
            </a>
            <span className="hidden sm:inline text-bronze-400">•</span>
            <a href="mailto:foundry@dominusfoundry.com" className="hover:text-navy-900 underline">
              foundry@dominusfoundry.com
            </a>
          </div>
          <p className="text-xs text-navy-600/80">© {new Date().getFullYear()} Dominus Foundry. All rights reserved. We do not sell your personal information.</p>
        </div>
      </footer>
    </div>
  );
}
