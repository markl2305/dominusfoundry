import { Suspense } from "react";
import FoundryLeadForm from "../../../components/FoundryLeadForm";
import ContactCTA from "../../../components/ContactCTA";

export const metadata = {
  title: "Contact — Dominus Foundry",
  description:
    "Talk with the Foundry about the tool family you need now and the governance you need next.",
};

export default function ContactPage() {
  return (
    <section id="contact" className="bg-[var(--foundry-sand)]">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 space-y-6">
        <div className="space-y-3 text-center">
          <h1 className="heading-forge-lg">Talk to the Foundry</h1>
          <p className="body-foundry max-w-3xl mx-auto">
            Tell us which tool family is slowing you down. We&apos;ll map the right build and the right governance level.
          </p>
        </div>
        <div className="card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6 md:p-10 shadow-xl">
          <Suspense fallback={null}>
            <FoundryLeadForm />
          </Suspense>
        </div>
        <p className="text-sm text-slate-700 text-center">
          Prefer a direct call? <a className="underline font-semibold" href="tel:+18667103313">(866) 710-3313</a>. We respond within one business day.
        </p>
        <div className="flex justify-center">
          <ContactCTA />
        </div>
      </div>
    </section>
  );
}
