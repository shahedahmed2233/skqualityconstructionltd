import { ArrowUpRight, Brush, Droplets, Flame, Hammer, Home, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { services } from "@/data/site";
import { Section, SectionHeading } from "./primitives";

const icons = [Home, Hammer, Droplets, Flame, Wrench, Brush];

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Our Expertise"
        title="What We Do"
        subtitle="Specialist roofing and exterior services delivered with precision, care and attention to detail."
      />

      <div className="mt-14 border-t border-border">
        {services.map((service, i) => {
          const Icon = icons[i % icons.length]!;
          return (
            <motion.a
              key={service.title}
              href="#contact"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: Math.min(i, 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid items-center gap-3 border-b border-border py-8 transition-colors duration-500 hover:bg-sand/70 md:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.1fr)_auto] md:gap-8 md:py-10"
            >
              <span className="font-display text-sm text-bronze md:text-base">
                {`0${i + 1}`}
              </span>

              <span className="flex items-center gap-4">
                <Icon
                  className="size-5 shrink-0 text-bronze/80 transition-transform duration-500 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="font-display text-2xl leading-tight tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1.5 sm:text-3xl">
                  {service.title}
                </span>
              </span>

              <span className="text-sm leading-relaxed text-muted-foreground md:pr-6">
                {service.description}
              </span>

              <span className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-500 group-hover:border-bronze group-hover:bg-bronze/10 group-hover:text-bronze">
                <ArrowUpRight
                  className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}
