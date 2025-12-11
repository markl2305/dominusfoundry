import Button from "../../components/Button";

export const metadata = {
  title: "Orderline – Voice Ordering Capture | Dominus Foundry",
  description:
    "Orderline lets you speak through orders, turning voice into structured line items aligned to your inventory lists so re-ordering runs from your own words.",
};

export default function OrderlinePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="label-foundry text-forge-800">Orderline</p>
            <h1 className="heading-forge-xl text-slate-900">Orderline – Voice Ordering Capture</h1>
            <div className="divider-forged" />
            <p className="body-foundry text-slate-900">
              Orderline lets you speak through what needs to be ordered, then turns that into structured line items mapped to your inventory lists or CSVs. You keep talking like a human; Orderline handles the formatting.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/#talk" className="justify-center">
              Talk to the Foundry
            </Button>
            <Button href="/#talk" variant="forgeSecondary" className="justify-center">
              Book a call
            </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg text-slate-900">The problem</h2>
          <p className="body-foundry text-slate-900">
            Most re-ordering lives in someone’s head or in messy email threads. Spreadsheets try to hold it all together, but they rarely match what actually gets ordered.
          </p>
        </div>
      </section>

      <section className="bg-tan-100">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg text-slate-900">How Orderline helps</h2>
          <ul className="space-y-4 body-foundry text-slate-900">
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>Capture orders by voice instead of typing line items.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>Automatically parse items, quantities, and notes.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>Align captured items with your existing inventory lists or CSVs.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-forge-700 font-bold">•</span>
              <span>Export clean, structured data for purchasing or import into other systems.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <h2 className="heading-forge-lg text-slate-900">How it fits with Mentis</h2>
          <p className="body-foundry text-slate-900">
            Because Orderline shares an operations intelligence layer with your other Foundry systems, it can learn which items tend to go together, which orders repeat, and where mistakes happen—so your re-ordering process gets smoother over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <Button href="/#talk" className="justify-center">
              Plan an Orderline pilot
            </Button>
            <Button href="tel:+18667103313" variant="forgeSecondary" className="justify-center">
              Call to discuss
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
