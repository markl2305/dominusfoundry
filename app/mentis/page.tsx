export const metadata = {
  title: 'Mentis — Operations Intelligence for Small Teams',
  description:
    'Mentis is the operations intelligence layer underneath Dominus Foundry’s systems, keeping books, invoicing, and phones aligned for small teams.',
}

export default function MentisPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 space-y-6">
          <p className="label-foundry text-forge-800">Operations intelligence</p>
          <h1 className="heading-forge-lg text-slate-900">Mentis — Operations Intelligence for Small Teams</h1>
          <p className="body-foundry text-slate-800">
            Mentis is the operations intelligence layer that sits underneath Dominus Foundry’s systems. It learns from
            the way your team actually works — your bookings, your invoicing, and your projects — so your systems can
            stay aligned without you living inside every process.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 space-y-10">
        <div className="space-y-4">
          <h2 className="heading-forge-lg text-slate-900">What Mentis is</h2>
          <p className="body-foundry">
            Mentis connects the dots between your tools and your real-world operations. It watches how your books,
            invoices, phones, and recurring work fit together, and uses that context to keep our systems tuned to your
            business. Instead of starting from a blank slate every time, your systems benefit from what has already been
            learned.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="heading-forge-lg text-slate-900">What Mentis is not</h2>
          <ul className="space-y-3 body-foundry">
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>Not a generic chatbot you talk to for fun.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>Not a single app you have to babysit all day.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>Not a replacement for your team’s judgment or relationships.</span>
            </li>
          </ul>
          <p className="body-foundry">
            Mentis is there to keep your systems coherent in the background, so your team can stay focused on the work
            only they can do.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="heading-forge-lg text-slate-900">Where Mentis shows up today</h2>
          <p className="body-foundry">Right now, Mentis is working quietly under the surface of our systems:</p>
          <ul className="space-y-3 body-foundry">
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>QuickBooks-aware cleanup and context that keep your books aligned with the rest of your systems.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>
                InvoiceFlow, where sending, reminders, and follow-up can be adapted to how and when your customers
                actually pay.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>
                Voice Concierge, where caller and booking patterns can inform how your automated phone concierge
                responds and routes.
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="heading-forge-lg text-slate-900">Where Mentis is headed</h2>
          <p className="body-foundry">
            Over time, Mentis will take on more of the ‘virtual operations brain’ role for small teams — helping
            coordinate how your systems respond, what they remember, and how they improve. Today, you access Mentis by
            becoming a Dominus Foundry client. As it matures, we’ll open up more direct ways to work with it, while
            keeping the focus on practical outcomes, not hype.
          </p>
        </div>
      </section>
    </>
  )
}
