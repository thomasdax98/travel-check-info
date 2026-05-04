import Link from "next/link";
import { AdPlaceholder } from "@/src/components/ad-placeholder";
import { getAllGuides } from "@/src/content/guides";

export default async function HomePage() {
  const guides = await getAllGuides();
  const countries = guides.filter((guide) => guide.type === "country");
  const cities = guides.filter((guide) => guide.type === "city");
  const regions = guides.filter((guide) => guide.type === "region");

  return (
    <main className="stack">
      <section className="card stack hero">
        <p className="meta">Travel-check.info v1</p>
        <h1>Travel tips with booking-ready affiliate pathways</h1>
        <p>
          Discover markdown-powered travel guides for countries, cities, and regions with integrated monetization slots and
          SEO-ready structure.
        </p>
        <p>
          <Link href="/guides">Browse all guides</Link>
        </p>
      </section>

      <section className="grid-3">
        <article className="card stack">
          <h2>Countries</h2>
          <p className="meta">{countries.length} guide(s)</p>
        </article>
        <article className="card stack">
          <h2>Cities</h2>
          <p className="meta">{cities.length} guide(s)</p>
        </article>
        <article className="card stack">
          <h2>Regions</h2>
          <p className="meta">{regions.length} guide(s)</p>
        </article>
      </section>

      <section className="grid-2">
        <AdPlaceholder label="Homepage hero sponsorship" slot="home.hero.banner" />
        <AdPlaceholder label="Homepage in-feed native" slot="home.feed.native.1" />
      </section>
    </main>
  );
}
