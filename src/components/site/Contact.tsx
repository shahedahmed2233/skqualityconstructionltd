import { useState, type FormEvent } from "react";
import { CheckCircle2, Instagram, Music2, Phone } from "lucide-react";
import { company, services } from "@/data/site";
import { Reveal, Section } from "./primitives";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const next: Errors = {};

    if (get("name").length < 2) next.name = "Please enter your name.";
    if (!/^[\d\s+()-]{7,}$/.test(get("phone"))) next.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email")))
      next.email = "Please enter a valid email address.";
    if (get("message").length < 10) next.message = "Please tell us a little about the work.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const field =
    "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-bronze";

  return (
    <Section id="contact" className="border-t border-border bg-card">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl leading-[1.1] sm:text-4xl">Let's Talk About Your Project</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Need roofing, pointing or specialist exterior cleaning? Send us a message and we'll get
            back to you.
          </p>

          <div className="mt-10 space-y-5 border-t border-border pt-8">
            <p className="text-sm font-semibold tracking-[0.14em] uppercase">{company.name}</p>
            <a
              href={company.phoneHref}
              className="flex items-center gap-3 text-lg font-semibold transition-colors hover:text-bronze"
            >
              <Phone className="size-4 text-bronze" aria-hidden />
              {company.phone}
            </a>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={company.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-bronze"
              >
                <Instagram className="size-4" aria-hidden />
                {company.instagram.handle}
              </a>
              <a
                href={company.tiktok.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-bronze"
              >
                <Music2 className="size-4" aria-hidden />
                {company.tiktok.handle}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-border bg-background p-6 shadow-soft sm:p-8">
            {sent ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-10 text-bronze" strokeWidth={1.4} aria-hidden />
                <p className="mt-5 max-w-sm text-lg font-semibold" role="status">
                  Thank you — your enquiry has been received. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input id="name" name="name" className={field} autoComplete="name" />
                  {errors.name ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input id="phone" name="phone" className={field} autoComplete="tel" />
                  {errors.phone ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input id="email" name="email" className={field} autoComplete="email" />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="projectType" className="text-sm font-medium">
                    Project Type
                  </label>
                  <select id="projectType" name="projectType" className={field} defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} className={field} />
                  {errors.message ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-bronze hover:text-bronze-foreground sm:col-span-2"
                >
                  Request a Free Quote
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
