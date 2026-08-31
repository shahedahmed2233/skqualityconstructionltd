import { HardHat, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal, Section } from "./primitives";

const items = [
  {
    icon: HardHat,
    title: "Professional Workmanship",
    text: "Quality-focused roofing and exterior work.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    text: "Clear communication from start to finish.",
  },
  {
    icon: Sparkles,
    title: "Specialist Solutions",
    text: "Roofing, pointing and specialist paint removal.",
  },
  { icon: MessageSquare, title: "Free Quotes", text: "Get in touch to discuss your project." },
];

export function TrustStrip() {
  return (
    <Section className="border-b border-border bg-card py-14 md:py-16">
      <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <item.icon className="size-5 text-bronze" strokeWidth={1.6} aria-hidden />
            <h3 className="mt-4 text-base font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
