import { Reveal, Section, SectionHeading } from "./primitives";

const steps = [
  { no: "01", title: "Get in Touch", text: "Tell us about your roofing or exterior project." },
  { no: "02", title: "Discuss Your Project", text: "We understand what work is required." },
  { no: "03", title: "Receive Your Quote", text: "Get a clear quote for the work." },
  { no: "04", title: "Quality Work Begins", text: "Professional workmanship from start to finish." },
];

export function Process() {
  return (
    <Section className="bg-sand">
      <SectionHeading eyebrow="How It Works" title="A Simple, Clear Process" />
      <div className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
        {steps.map((step, i) => (
          <Reveal key={step.no} delay={i * 0.08}>
            <div className="border-t-2 border-bronze/40 pt-5 md:pr-4">
              <span className="font-display text-3xl text-bronze">{step.no}</span>
              <h3 className="mt-3 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
