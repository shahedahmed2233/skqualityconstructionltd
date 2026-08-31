import { useState } from "react";
import { motion } from "motion/react";
import { MoveHorizontal } from "lucide-react";
import { beforeAfter } from "@/data/site";
import { Reveal, Section, SectionHeading } from "./primitives";

function CompareCard({
  label,
  caption,
  before,
  after,
}: {
  label: string;
  caption?: string;
  before: string;
  after: string;
}) {
  const [value, setValue] = useState(50);

  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-lift">
      <div className="relative aspect-[4/3] w-full select-none">
        <img
          src={after}
          alt={`${label} — after`}
          loading="lazy"
          width={1280}
          height={960}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
          <img
            src={before}
            alt={`${label} — before`}
            loading="lazy"
            width={1280}
            height={960}
            className="absolute inset-0 h-full max-w-none object-cover"
            style={{ width: `${(100 / Math.max(value, 1)) * 100}%` }}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-bronze/90"
          style={{ left: `${value}%` }}
        />
        <span
          className="pointer-events-none absolute top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bronze/70 bg-ink/70 text-ink-foreground backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
          style={{ left: `${value}%` }}
        >
          <MoveHorizontal className="size-4" aria-hidden />
        </span>
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
      <div className="border-t border-border px-6 py-5 sm:px-7">
        <p className="text-base font-semibold">{label}</p>
        {caption ? <p className="mt-1.5 text-sm text-muted-foreground">{caption}</p> : null}
      </div>
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
      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {beforeAfter.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.1}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
              <CompareCard {...item} />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
