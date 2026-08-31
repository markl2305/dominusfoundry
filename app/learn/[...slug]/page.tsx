import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { allArticles, getArticle } from "@/lib/learn";

// Clio-authored MDX articles render here. A merged content/learn/**/*.mdx file
// goes live at its /learn/{vertical}/{slug} URL with no other code change.
// Hand-built pages under app/learn/platform/* keep their own more-specific
// routes and take precedence over this catch-all — they are unaffected.
export const dynamicParams = false;

const SITE_NAME = "Dominus Foundry";
const BASE_URL = "https://dominusfoundry.com";

export function generateStaticParams() {
  return allArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string[] }> }
): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: `${a.title} | ${SITE_NAME}`,
    description: a.description,
    alternates: { canonical: a.url },
    openGraph: { title: a.title, description: a.description, url: a.url, type: "article" },
  };
}

function titleCase(s: string): string {
  return s
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// MDX body overrides — mapped onto dominusfoundry's Foundry typography classes
// so Clio articles read identically to the hand-built learn pages.
const mdxComponents = {
  h2: (p: React.ComponentProps<"h2">) => <h2 className="heading-forge-md text-slate-900 mt-8 mb-3" {...p} />,
  h3: (p: React.ComponentProps<"h3">) => <h3 className="heading-forge-md text-slate-900 mt-6 mb-2 text-2xl md:text-3xl" {...p} />,
  h4: (p: React.ComponentProps<"h4">) => <h4 className="font-semibold mt-4 mb-1 text-slate-900" {...p} />,
  p: (p: React.ComponentProps<"p">) => <p className="my-4 leading-relaxed" {...p} />,
  ul: (p: React.ComponentProps<"ul">) => <ul className="my-4 list-disc space-y-2 pl-6" {...p} />,
  ol: (p: React.ComponentProps<"ol">) => <ol className="my-4 list-decimal space-y-2 pl-6" {...p} />,
  li: (p: React.ComponentProps<"li">) => <li className="leading-relaxed" {...p} />,
  a: (p: React.ComponentProps<"a">) => <a className="underline underline-offset-2 hover:opacity-70" {...p} />,
  strong: (p: React.ComponentProps<"strong">) => <strong className="font-semibold" {...p} />,
  blockquote: (p: React.ComponentProps<"blockquote">) => <blockquote className="my-6 border-l-2 border-slate-300 pl-4 italic opacity-80" {...p} />,
  table: (p: React.ComponentProps<"table">) => <div className="my-6 overflow-x-auto"><table className="w-full text-left border-collapse" {...p} /></div>,
  thead: (p: React.ComponentProps<"thead">) => <thead {...p} />,
  tr: (p: React.ComponentProps<"tr">) => <tr className="border-b border-slate-200" {...p} />,
  th: (p: React.ComponentProps<"th">) => <th className="py-2 pr-4 font-semibold" {...p} />,
  td: (p: React.ComponentProps<"td">) => <td className="py-2 pr-4 align-top" {...p} />,
};

export default async function LearnArticlePage(
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const ld =
    a.schemaType === "FAQPage"
      ? {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: a.title,
          description: a.description,
          url: BASE_URL + a.url,
          publisher: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
        }
      : {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          mainEntityOfPage: BASE_URL + a.url,
          datePublished: a.publishedAt || undefined,
          author: { "@type": "Organization", name: SITE_NAME },
          publisher: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
        };

  return (
    <section className="bg-[var(--foundry-bg)] py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <div className="mx-auto max-w-4xl px-4 space-y-6">
        <p className="label-foundry text-forge-700">Learn — {titleCase(a.vertical)}</p>
        <h1 className="heading-forge-lg text-slate-900">{a.title}</h1>
        {a.description ? (
          <h2 className="heading-forge-md text-slate-800 text-2xl md:text-3xl font-normal">
            {a.description}
          </h2>
        ) : null}

        <article className="body-foundry space-y-4 text-slate-900">
          <MDXRemote
            source={a.body}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>

        <p className="body-foundry text-slate-900 mt-8">
          <Link className="underline" href="/learn">
            ← All Learn articles
          </Link>
        </p>
      </div>
    </section>
  );
}
