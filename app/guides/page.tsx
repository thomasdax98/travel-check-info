import Link from "next/link";
import { getAllGuides } from "@/src/content/guides";

export default async function GuidesIndexPage() {
  const guides = await getAllGuides();

  return (
    <main className="stack">
      <section className="card stack">
        <h1>Travel guides</h1>
        <p className="meta">Rendered from repository markdown files. No database required.</p>
      </section>

      <section className="stack">
        {guides.map((guide) => (
          <article key={`${guide.type}-${guide.slug}`} className="card stack">
            <p className="meta">{guide.type.toUpperCase()}</p>
            <h2>
              <Link href={`/guides/${guide.type}/${guide.slug}`}>{guide.title}</Link>
            </h2>
            <p>{guide.seoDescription}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
