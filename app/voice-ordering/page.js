export const metadata = {
  title: 'Voice Ordering – Spoken Order Capture',
  description:
    'Voice Ordering lets operators speak through what needs to be ordered and turns it into structured lists that match your inventory.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function VoiceOrderingPage() {
  return (
    <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 space-y-6">
        <p className="label-foundry text-forge-800">Voice Ordering</p>
        <h1 className="heading-forge-lg text-slate-900">Voice Ordering – Spoken Order Capture</h1>
        <p className="body-foundry text-slate-800">
          Voice Ordering lets you speak through what needs to be ordered, turns it into structured data, and aligns it
          with your inventory lists so ordering runs from your own words instead of another spreadsheet.
        </p>
      </div>
    </section>
  )
}
