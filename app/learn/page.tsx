import Link from "next/link";
import { allLearnEntries } from "@/lib/learn";

export const metadata = {
  title: "Learn — Dominus Foundry",
  description:
    "Reference guides on AI software for construction and trades from Dominus Foundry, the company behind Forge.",
  alternates: { canonical: "https://dominusfoundry.com/learn" },
};

// The /learn index renders from the single registry in src/lib/learn.ts:
// hand-built app/learn/** pages (index copy lives in LEGACY_PAGES) plus every
// content/learn/**/*.mdx Clio merges, deduped by URL with the hand-built page
// winning. A merged .mdx appears here with no human edit.

export default function LearnIndexPage() {
  return (
    <section className="bg-[var(--foundry-bg)] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 space-y-6">
        <p className="label-foundry text-forge-700">Learn</p>
        <h1 className="heading-forge-lg text-slate-900">
          Guides on AI software for construction and trades
        </h1>
        <div className="body-foundry space-y-8 text-slate-900 mt-6">
          {allLearnEntries().map(({ url, title, blurb }) => (
            <div key={url}>
              <h2 className="heading-forge-md text-slate-900">
                <Link className="hover:underline" href={url}>
                  {title}
                </Link>
              </h2>
              <p className="mt-2">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
