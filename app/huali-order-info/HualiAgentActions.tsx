// The on-screen Huali™ order agent here was an ElevenLabs ConvAI widget (agent_3101kbgvsz5xe57v388y5qcrvvaf). It
// was removed 2026-10-12 (compliance P1-1c): Mark ruled 2026-09-05 that ElevenLabs is not used, and a
// distributor's account phone number and order went to it. Ordering is by phone until Mark decides otherwise.
export function HualiAgentActions() {
  return (
    <div className="space-y-3">
      <a
        id="huali-call-agent"
        href="tel:5053374443"
        className="block w-full rounded-full bg-amber-500 px-6 py-3 text-center text-base font-semibold text-black shadow-lg shadow-amber-900/40 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-black"
      >
        Call the Huali™ Order Line: 505-337-4443
      </a>
    </div>
  )
}
