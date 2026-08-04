import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  BASE_URL,
  SITE_NAME,
  getArticle,
  mdxArticles,
  staticRouteUrls,
} from "@/lib/learn";

// Clio-authored MDX articles render here. A merged content/learn/**/*.mdx file
// goes live at its /learn/{vertical}/{slug} URL with no other code change.
//
// Hand-built pages under app/learn/platform/* keep their own more-specific
// static routes, which take precedence over this catch-all. Any URL they own is
// excluded from generateStaticParams below so the two never both claim a slug.
export const dynamicParams = false;

export function generateStaticParams() {
  // A slug already owned by a hand-written page.tsx is NOT generated here.
  // Ownership comes from scanning app/learn/** (staticRouteUrls), never from a
  // second hand-kept list that could drift.
  //
  // This is live today:
  // content/learn/platform/vertical-ai-platform-for-traditional-industries-dominus-foundry.mdx
  // and the hand-built page of the same name both exist on main. The .mdx is
  // deliberately left in place and UNSERVED — it is Clio's own publish record
  // and Clio reconciles against it, so it must not be deleted.
  const owned = staticRouteUrls();
  return mdxArticles()
    .filter((a) => !owned.has(a.url))
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: `${a.title} | ${SITE_NAME}`,
    description: a.description,
    alternates: { canonical: BASE_URL + a.url },
    openGraph: {
      title: a.title,
      description: a.description,
      url: BASE_URL + a.url,
      type: "article",
    },
  };
}

function titleCase(s: string): string {
  return s.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// `</script>` inside a JSON string value would close the tag early. The escape
// is JSON-equivalent — parsers decode < back to `<`.
function ldJson(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

// MDX body overrides — mapped onto dominusfoundry's Foundry typography classes.
//
// Heading levels are SHIFTED DOWN one step on purpose. The hand-built learn
// pages use the page h1 for the title, h2 for the description, h3 for section
// headings and h4 for FAQ questions. In MDX `##` is h2 and `###` is h3, so a
// pass-through would render section headings at description weight and above
// the h1/h2 the page frame already emits. Shifting keeps both the document
// outline and the visual weight identical to the hand-built pages.
const mdxComponents = {
  h1: (p: React.ComponentProps<"h2">) => (
    <h2 className="heading-forge-md text-slate-900 mt-6" {...p} />
  ),
  h2: (p: React.ComponentProps<"h3">) => (
    <h3 className="heading-forge-md text-slate-900 mt-6" {...p} />
  ),
  h3: (p: React.ComponentProps<"h4">) => (
    <h4 className="font-semibold mt-4 text-slate-900" {...p} />
  ),
  h4: (p: React.ComponentProps<"h5">) => (
    <h5 className="font-semibold mt-4 text-slate-900" {...p} />
  ),
  h5: (p: React.ComponentProps<"h6">) => (
    <h6 className="font-semibold mt-4 text-slate-900" {...p} />
  ),
  ul: (p: React.ComponentProps<"ul">) => (
    <ul className="list-disc space-y-2 pl-6" {...p} />
  ),
  ol: (p: React.ComponentProps<"ol">) => (
    <ol className="list-decimal space-y-2 pl-6" {...p} />
  ),
  li: (p: React.ComponentProps<"li">) => <li className="leading-relaxed" {...p} />,
  a: (p: React.ComponentProps<"a">) => (
    <a className="underline underline-offset-2 hover:opacity-70" {...p} />
  ),
  strong: (p: React.ComponentProps<"strong">) => (
    <strong className="font-semibold" {...p} />
  ),
  blockquote: (p: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-2 border-slate-300 pl-4 italic opacity-80"
      {...p}
    />
  ),
  code: (p: React.ComponentProps<"code">) => (
    <code className="rounded bg-slate-200/60 px-1 py-0.5 text-[0.9em]" {...p} />
  ),
  hr: (p: React.ComponentProps<"hr">) => (
    <hr className="border-slate-300" {...p} />
  ),
  table: (p: React.ComponentProps<"table">) => (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse" {...p} />
    </div>
  ),
  tr: (p: React.ComponentProps<"tr">) => (
    <tr className="border-b border-slate-200" {...p} />
  ),
  th: (p: React.ComponentProps<"th">) => (
    <th className="py-2 pr-4 font-semibold" {...p} />
  ),
  td: (p: React.ComponentProps<"td">) => (
    <td className="py-2 pr-4 align-top" {...p} />
  ),
};

export default async function LearnArticlePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  return (
    <section className="bg-[var(--foundry-bg)] py-16 md:py-24">
      {/* Clio's own embedded JSON-LD, preserved verbatim apart from URL and
          publisher normalization. Only synthesised from frontmatter when the
          article carries no parseable block at all. */}
      {a.jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(obj) }}
        />
      ))}
      <div className="mx-auto max-w-4xl px-4 space-y-6">
        <p className="label-foundry text-forge-700">
          Learn — {titleCase(a.vertical)}
        </p>
        <h1 className="heading-forge-lg text-slate-900">{a.title}</h1>
        {a.description ? (
          <h2 className="heading-forge-md text-slate-800">{a.description}</h2>
        ) : null}

        {/* space-y-4 spaces the MDX output directly, exactly as it spaces the
            hand-written <p>/<h3> siblings on the hand-built pages — so no
            wrapper element between this div and MDXRemote. */}
        <div className="body-foundry space-y-4 text-slate-900">
          <MDXRemote
            source={a.body}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />

          <p className="mt-8">
            <Link className="underline" href="/learn">
              ← All Learn articles
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
