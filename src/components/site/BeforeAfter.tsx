import { useState } from "react";
import { beforeAfter } from "@/data/site";
import { Reveal, Section, SectionHeading } from "./primitives";

function CompareCard({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) {
  const [value, setValue] = useState(50);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-soft">
      <div className="relative aspect-[4/3] w-full select-none">
        <img
          src={after}
          alt={`${label} — after`}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
          <img
            src={before}
            alt={`${label} — before`}
            loading="lazy"
            className="absolute inset-0 h-full w-[100vw] max-w-none object-cover"
            style={{ width: `${(100 / Math.max(value, 1)) * 100}%` }}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-bronze"
          style={{ left: `${value}%` }}
        />
        <span className="pointer-events-none absolute bottom-3 left-3 rounded bg-ink/70 px-2 py-1 text-[0.65rem] tracking-[0.18em] text-ink-foreground uppercase">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 bottom-3 rounded bg-ink/70 px-2 py-1 text-[0.65rem] tracking-[0.18em] text-ink-foreground uppercase">
          After
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          aria-label={`${label} before and after comparison`}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="border-t border-border px-5 py-4 text-sm font-semibold">{label}</p>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Before &amp; After"
        title="The Difference Quality Makes"
        subtitle="Drag across each image to see the transformation."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {beforeAfter.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.08}>
            <CompareCard {...item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
