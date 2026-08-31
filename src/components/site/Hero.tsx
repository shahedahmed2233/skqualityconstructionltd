import { motion } from "motion/react";
import heroImg from "@/assets/hero-roof.jpg";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Roofer re-slating a traditional British roof from scaffolding"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/72" />

      <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20 sm:px-8">
        <motion.p {...fade(0.05)} className="eyebrow">
          Roofing &amp; Exterior Specialists
        </motion.p>
        <motion.h1
          {...fade(0.14)}
          className="mt-5 max-w-4xl text-[2.35rem] leading-[1.06] text-ink-foreground sm:text-6xl md:text-[4.25rem]"
        >
          Quality Roofing. Expert Craftsmanship. Built to Last.
        </motion.h1>
        <motion.p
          {...fade(0.24)}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg"
        >
          Professional roofing, pointing and exterior cleaning services across the UK, delivered
          with care, precision and attention to detail.
        </motion.p>

        <motion.div {...fade(0.34)} className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-md bg-bronze px-7 py-3.5 text-sm font-semibold text-bronze-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Get a Free Quote
          </a>
          <a
            href="#projects"
            className="rounded-md border border-ink-foreground/30 px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
          >
            View Our Work
          </a>
        </motion.div>

        <motion.p
          {...fade(0.44)}
          className="mt-10 border-t border-ink-foreground/15 pt-6 text-xs tracking-[0.18em] text-ink-foreground/60 uppercase"
        >
          Roofing • Pointing • DOFF Cleaning • ThermaTech Paint Removal
        </motion.p>
      </div>
    </section>
  );
}
