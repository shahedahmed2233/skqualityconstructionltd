import { Check } from "lucide-react";
import craftImg from "@/assets/craft.jpg";
import { Reveal, Section } from "./primitives";

const points = [
  "Quality workmanship",
  "Professional approach",
  "Attention to detail",
  "Clear communication",
];

export function WhyChooseUs() {
  return (
    <Section className="bg-sand">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={craftImg}
              alt="Craftsman repointing mortar joints on brickwork"
              loading="lazy"
              width={1200}
              height={1408}
              className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[460px] lg:h-[540px]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">Why SK Quality Construction</p>
          <h2 className="mt-3 text-3xl leading-[1.1] sm:text-4xl">
            Craftsmanship You Can See. Quality You Can Trust.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every roof, wall and facade we work on is treated with the same care. We take the time
            to understand what a property needs, use the right materials and methods for the job,
            and finish the work to a standard we are happy to put our name to — keeping you informed
            at every stage.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-medium">
                <span className="flex size-6 items-center justify-center rounded-full bg-bronze/15">
                  <Check className="size-3.5 text-bronze" strokeWidth={2.5} aria-hidden />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-9 inline-flex rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-bronze hover:text-bronze-foreground"
          >
            Talk About Your Project
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
