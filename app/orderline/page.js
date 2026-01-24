import Button from "../../components/Button";
import ProductInquiryForm from "../../components/ProductInquiryForm";

export const metadata = {
  title: "Orderline – Voice Ordering Capture | Dominus Foundry",
  description:
    "Orderline lets you speak through orders, turning voice into structured line items aligned to your inventory lists so re-ordering runs from your own words.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrderlinePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 md:items-start">
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

          <div className="card-forged-premium rounded-2xl bg-white p-6 md:p-8 shadow-xl">
            <div className="space-y-3 mb-4">
              <h2 className="heading-forge-lg text-slate-900">Talk to us about Orderline</h2>
              <p className="body-foundry text-slate-900">
                Share how you handle re-ordering today—who places orders, how you track inventory, and which vendors you depend on. We’ll show you how Orderline can capture those orders by voice and return clean line items.
              </p>
            </div>
            <ProductInquiryForm product="Orderline" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--foundry-bg)]">
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

      <section className="bg-[var(--foundry-bg-alt)]">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 space-y-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <Button href="/#talk" className="justify-center">
              Plan an Orderline pilot
            </Button>
            <Button href="tel:+18667103313" variant="forgeSecondary" className="justify-center">
              Call to discuss
            </Button>
          </div>
          <p className="text-xs text-slate-700">Built to Dominus Foundry architectural standards.</p>
        </div>
      </section>
    </>
  );
}
