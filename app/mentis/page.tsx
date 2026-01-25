export const metadata = {
  title: "Mentis | Dominus Foundry",
  description: "Mentis is a Human-Governed Operating System.",
};

export default function MentisPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 space-y-8">
          <h1 className="heading-forge-lg text-slate-900">Mentis™</h1>
          <div className="space-y-6">
            <p className="body-foundry text-slate-900">Mentis is a Human-Governed Operating System.</p>
            <p className="body-foundry text-slate-900">
              It coordinates how decisions are made, how authority is maintained, and how execution occurs across organizational systems.
            </p>
            <p className="body-foundry text-slate-900">Some organizations use Mentis directly.</p>
            <p className="body-foundry text-slate-900">Most encounter it through systems that share its architecture.</p>
          </div>
        </div>
      </section>
    </>
  );
}
