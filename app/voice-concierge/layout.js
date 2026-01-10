
export const metadata = {
  title: 'Foundry Voice Concierge — AI Phone Agent by Dominus Foundry',
  description: 'An AI phone agent that answers, books, and qualifies callers in your brand voice so you never miss a call.',
};

export default function VoiceConciergeLayout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--foundry-sand)] flex flex-col">
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
