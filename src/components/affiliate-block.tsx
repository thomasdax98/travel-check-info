type AffiliateSource = {
  affiliateLabel: string;
  affiliateUrl: string;
};

type AffiliateBlockProps = {
  guide?: AffiliateSource;
  entry?: AffiliateSource;
};

export function AffiliateBlock({ guide, entry }: AffiliateBlockProps) {
  const source = guide ?? entry;
  if (!source) return null;

  return (
    <aside className="card stack affiliate-block">
      <p className="meta">Partner booking option</p>
      <h2>Recommended offer</h2>
      <p>{source.affiliateLabel}</p>
      <p>
        <a href={source.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">
          Open affiliate link
        </a>
      </p>
    </aside>
  );
}
