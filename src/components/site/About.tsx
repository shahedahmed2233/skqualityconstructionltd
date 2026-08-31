import aboutImg from "@/assets/about.jpg";
import { Reveal, Section } from "./primitives";

export function About() {
  return (
    <Section id="about" className="bg-card border-y border-border">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">About Us</p>
          <h2 className="mt-3 text-3xl leading-[1.1] sm:text-4xl">
            Built on Quality. Driven by Craftsmanship.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            SK Quality Construction Ltd specialises in roofing, pointing and specialist exterior
            surface cleaning, including DOFF and ThermaTech paint removal.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We work on roofs, masonry and exterior surfaces across the UK, combining traditional
            trade skills with specialist equipment. Whether it is a repair, a full roof improvement
            or careful cleaning of a delicate facade, the approach stays the same: understand the
            property, do the work properly and keep the client informed throughout.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-md border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-bronze hover:text-bronze"
          >
            Discuss Your Project
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={aboutImg}
              alt="Stone-built UK property with newly cleaned facade and slate roof"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-[300px] w-full object-cover sm:h-[420px]"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
