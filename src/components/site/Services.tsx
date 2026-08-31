import { ArrowRight, Brush, Droplets, Flame, Hammer, Home, Wrench } from "lucide-react";
import { services } from "@/data/site";
import { Reveal, Section, SectionHeading } from "./primitives";

const icons = [Home, Hammer, Droplets, Flame, Wrench, Brush];

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What We Do"
        title="Our Roofing & Exterior Services"
        subtitle="Specialist workmanship for roofs, walls and exterior surfaces."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-lift"
              >
                <Icon className="size-6 text-bronze" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-6 text-xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  Learn More
                  <ArrowRight
                    className="size-4 text-bronze transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
