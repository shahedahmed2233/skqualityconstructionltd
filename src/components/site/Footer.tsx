import { motion } from "motion/react";
import { ArrowRight, Instagram, Music2, Phone } from "lucide-react";
import { company } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "What We Do", href: "#services" },
  { label: "Recent Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const linkClass =
  "relative inline-block text-sm text-ink-foreground/65 transition-colors duration-300 hover:text-bronze after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all after:duration-300 hover:after:w-full";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-5 py-20 text-ink-foreground sm:px-8">
      {/* Subtle architectural line pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]"
      >
        <div>
          <p className="font-display text-2xl leading-tight tracking-[-0.01em] sm:text-3xl">
            SK Quality Construction Ltd
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
            Roofing, pointing and specialist exterior cleaning delivered with care and professional
            workmanship.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group mt-8 inline-flex items-center gap-3 rounded-md bg-bronze px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-bronze-foreground uppercase transition-colors duration-300 hover:bg-bronze/90"
          >
            Get a Free Quote
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </motion.a>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold tracking-[0.22em] text-bronze uppercase">
            Quick Links
          </p>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-bronze uppercase">
            Get in Touch
          </p>
          <ul className="mt-5 space-y-3">
            <li>
              <a href={company.phoneHref} className={`${linkClass} inline-flex items-center gap-2`}>
                <Phone className="size-4" aria-hidden />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={company.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-ink-foreground/65 transition-colors duration-300 hover:text-bronze"
              >
                <Instagram
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden
                />
                Instagram
              </a>
            </li>
            <li>
              <a
                href={company.tiktok.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-ink-foreground/65 transition-colors duration-300 hover:text-bronze"
              >
                <Music2
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden
                />
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <div className="relative mx-auto mt-14 flex w-full max-w-6xl flex-col gap-3 border-t border-ink-foreground/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-foreground/50">
          © 2026 SK Quality Construction Ltd. All rights reserved.
        </p>
        <p className="text-[0.7rem] tracking-[0.18em] text-ink-foreground/45 uppercase">
          Roofing • Pointing • DOFF Cleaning • ThermaTech
        </p>
      </div>
    </footer>
  );
}
