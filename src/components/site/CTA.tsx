import { company } from "@/data/site";
import { Reveal, Section } from "./primitives";

export function CTA() {
  return (
    <Section className="bg-ink text-center">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="text-3xl leading-[1.1] text-ink-foreground sm:text-4xl md:text-5xl">
          Ready to Improve Your Property?
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ink-foreground/70">
          From roofing and pointing to specialist exterior cleaning, SK Quality Construction Ltd is
          ready to discuss your project.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="rounded-md bg-bronze px-7 py-3.5 text-sm font-semibold text-bronze-foreground transition-transform hover:-translate-y-0.5"
          >
            Get a Free Quote
          </a>
          <a
            href={company.phoneHref}
            className="rounded-md border border-ink-foreground/30 px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
          >
            Call {company.phone}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
