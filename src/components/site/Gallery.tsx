import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { gallery } from "@/data/site";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : gallery[active];

  return (
    <Section id="gallery">
      <SectionHeading
        eyebrow="Gallery"
        title="Our Work"
        subtitle="A selection of roofing, pointing and exterior cleaning work."
      />

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {gallery.map((item, i) => (
          <Reveal key={i} delay={(i % 3) * 0.05} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image: ${item.alt}`}
              className="group relative block w-full overflow-hidden rounded-lg border border-border"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  item.tall ? "h-[420px]" : "h-[280px]"
                }`}
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {current ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 rounded-md border border-ink-foreground/25 p-2 text-ink-foreground"
            >
              <X className="size-5" />
            </button>
            <motion.img
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              src={current.src}
              alt={current.alt}
              className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
