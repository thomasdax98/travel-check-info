import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdPlaceholder } from "@/src/components/ad-placeholder";
import { AffiliateBlock } from "@/src/components/affiliate-block";
import { getGuideByTypeAndSlug, getGuideParams, renderGuideBodyHtml, type GuideType } from "@/src/content/guides";

type GuidePageProps = {
  params: Promise<{ type: GuideType; slug: string }>;
};

export async function generateStaticParams() {
  return getGuideParams();
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { type, slug } = await params;
  const guide = await getGuideByTypeAndSlug(type, slug);

  if (!guide) {
    return { title: "Guide not found" };
  }

  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    alternates: {
      canonical: `/guides/${guide.type}/${guide.slug}`
    }
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { type, slug } = await params;
  const guide = await getGuideByTypeAndSlug(type, slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="stack">
      <p>
        <Link href="/guides">Back to all guides</Link>
      </p>

      <article className="card stack">
        <p className="meta">{guide.type.toUpperCase()}</p>
        <h1>{guide.title}</h1>
        <div className="stack" dangerouslySetInnerHTML={{ __html: renderGuideBodyHtml(guide) }} />
      </article>

      <section className="grid-2">
        <AffiliateBlock guide={guide} />
        <AdPlaceholder label="Content rail ad" slot={`guide.${guide.type}.${guide.slug}.rail`} />
      </section>

      <section className="card stack">
        <h2>Related navigation</h2>
        <div className="stack">
          {guide.links.regionSlug ? <Link href={`/guides/region/${guide.links.regionSlug}`}>Explore related region</Link> : null}
          {guide.links.countrySlug ? (
            <Link href={`/guides/country/${guide.links.countrySlug}`}>Explore related country</Link>
          ) : null}
          {guide.links.citySlug ? <Link href={`/guides/city/${guide.links.citySlug}`}>Explore related city</Link> : null}
        </div>
      </section>
    </main>
  );
}
