import Link from "next/link";

export const metadata = {
  title: "Foundry Notes | Dominus Foundry Blog",
  description:
    "Short essays on operations intelligence, AI-backed systems, and how teams can stay in control as tools change.",
};

const posts = [
  {
    title: "The Case for Constitutional Synthetic Intelligence",
    href: "/blog/the-case-for-constitutional-synthetic-intelligence",
    excerpt:
      "The AI industry is racing toward capability. Almost no one is racing toward accountability. What if we built the governance layer first?",
  },
  {
    title: "Synthetic Intelligence Is the Next Layer of AI: From Answers to Accountable Action",
    href: "/blog/synthetic-intelligence-mentis",
    excerpt:
      "Synthetic intelligence is AI that executes with memory, policies, verification, and audit trails. Here’s what’s coming.",
  },
  {
    title: "Beyond Chatbots: Why Teams Need Operations Intelligence",
    href: "/blog/operations-intelligence-for-small-teams",
    excerpt:
      "Most “AI features” don’t understand how your operation works. Operations intelligence is the layer that remembers the story across calls, invoices, and orders.",
  },
];

export default function BlogIndexPage() {
  return (
    <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 space-y-8">
        <div className="space-y-3">
          <h1 className="heading-forge-lg text-slate-900">Foundry Notes</h1>
          <p className="body-foundry text-slate-900">
            Short essays on where operations, AI-backed systems, and teams are headed — and how to stay in control as the
            tools keep changing.
          </p>
        </div>
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="block rounded-2xl border border-bronze-200 bg-white p-5 shadow-sm transition hover:border-forge-500"
            >
              <h2 className="heading-forge-md text-slate-900">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-800">{post.excerpt}</p>
              <p className="mt-3 text-xs font-semibold text-forge-700">Read more →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
