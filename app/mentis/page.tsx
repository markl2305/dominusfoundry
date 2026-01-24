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
            It provides the architectural foundation for coordinating decisions, maintaining authority, and aligning execution across organizational systems.
          </p>
          <p className="body-foundry text-slate-900">Dominus Foundry systems are designed to this architecture by default.</p>
          <p className="body-foundry text-slate-900">
            For some organizations, Mentis remains implicit — expressed through systems that share its standards.
            <br />
            For others, it becomes explicit — serving as the operating layer that unifies the whole.
          </p>
          <p className="body-foundry text-slate-900">
            Mentis is not a tool.
            <br />
            It is the system that tools are built to belong to.
          </p>
        </div>
      </section>
    </>
  );
}
