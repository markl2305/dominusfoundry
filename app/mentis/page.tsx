export const metadata = {
  title: "Mentis | Dominus Foundry",
  description: "Mentis.",
};

export default function MentisPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 space-y-6">
          <p className="body-foundry text-slate-900">Mentis™</p>
          <p className="body-foundry text-slate-900">Mentis is a Human-Governed Operating System.</p>
          <p className="body-foundry text-slate-900">
            It coordinates how decisions are made, how authority is maintained,
            <br />
            and how execution occurs across organizational systems.
          </p>
          <p className="body-foundry text-slate-900">
            Some organizations use Mentis directly.
            <br />
            Most encounter it through systems that share its architecture.
          </p>
        </div>
      </section>
    </>
  );
}
