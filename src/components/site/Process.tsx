import { motion } from "motion/react";
import { Section, SectionHeading } from "./primitives";

const steps = [
  { no: "01", title: "Get in Touch", text: "Tell us about your roofing or exterior project." },
  {
    no: "02",
    title: "Discuss Your Project",
    text: "We understand the work required and discuss the best approach.",
  },
  { no: "03", title: "Get Your Quote", text: "Receive a clear and straightforward project quote." },
  {
    no: "04",
    title: "Quality Work Begins",
    text: "Professional workmanship from preparation through completion.",
  },
];

export function Process() {
  return (
    <Section className="bg-sand">
      <SectionHeading
        eyebrow="Our Process"
        title="How It Works"
        subtitle="From the first conversation to the finished result, we keep the process straightforward."
      />

      <div className="relative mt-14">
        {/* Timeline rail */}
        <motion.div
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[9px] right-0 left-0 hidden h-px origin-left bg-bronze/35 md:block"
        />
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 bottom-0 left-[9px] w-px origin-top bg-bronze/35 md:hidden"
        />

        <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((step, i) => (
            <motion.li
              key={step.no}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative pl-10 md:pt-10 md:pl-0"
            >
              <span className="absolute top-[3px] left-0 block size-[19px] rounded-full border border-bronze/50 bg-sand transition-colors duration-500 group-hover:bg-bronze/20 md:top-0 md:left-0" />
              <span className="absolute top-[9px] left-[6px] block size-[7px] rounded-full bg-bronze md:top-[6px] md:left-[6px]" />
              <span className="font-display text-3xl text-bronze">{step.no}</span>
              <h3 className="mt-2 text-lg tracking-[0.02em] uppercase transition-transform duration-500 group-hover:-translate-y-0.5">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:pr-6">
                {step.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
