import { company, nav } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-sm font-extrabold tracking-[0.16em]">SK QUALITY CONSTRUCTION LTD</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Roofing and pointing specialists, with DOFF / ThermaTech paint removal available — just
            drop us a message to arrange.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase">Navigate</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-bronze"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase">Contact</p>
          <a
            href={company.phoneHref}
            className="mt-4 block text-sm text-muted-foreground transition-colors hover:text-bronze"
          >
            {company.phone}
          </a>
          <a
            href={company.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="mt-2.5 block text-sm text-muted-foreground transition-colors hover:text-bronze"
          >
            Instagram
          </a>
          <a
            href={company.tiktok.url}
            target="_blank"
            rel="noreferrer"
            className="mt-2.5 block text-sm text-muted-foreground transition-colors hover:text-bronze"
          >
            TikTok
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © 2026 SK Quality Construction Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
