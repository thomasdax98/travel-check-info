import Link from "next/link";

type OfferUnavailablePageProps = {
  searchParams: Promise<{ offer?: string }>;
};

export default async function OfferUnavailablePage({ searchParams }: OfferUnavailablePageProps) {
  const { offer } = await searchParams;

  return (
    <main className="stack">
      <section className="card stack">
        <h1>Offer unavailable</h1>
        <p className="meta">
          This booking offer is no longer active or could not be resolved. Please choose another available offer.
        </p>
        {offer ? <p className="meta">Offer reference: {offer}</p> : null}
        <p>
          <Link href="/guides">Return to travel guides</Link>
        </p>
      </section>
    </main>
  );
}
