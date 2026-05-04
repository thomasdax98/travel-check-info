type AdPlaceholderProps = {
  label?: string;
  slot?: string;
  slotName?: string;
};

export function AdPlaceholder({ label, slot, slotName }: AdPlaceholderProps) {
  const resolvedLabel = label ?? slotName ?? "Ad slot";
  const resolvedSlot = slot ?? slotName ?? "unspecified";

  return (
    <aside className="card ad-placeholder stack">
      <p className="ad-slot-label">Ad Placeholder</p>
      <h3>{resolvedLabel}</h3>
      <p className="meta">Reserved slot: {resolvedSlot}</p>
    </aside>
  );
}
