import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import headshot from "@/assets/sean-headshot.jpg";

const nav = [
  { to: "/", label: "About" },
  { to: "/services", label: "My Services" },
  { to: "/work", label: "My projects" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="relative size-8 overflow-hidden rounded-md border border-border bg-card">
            <img
              src={headshot}
              alt=""
              className="size-full object-cover object-center"
            />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            {profile.fullName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.hireUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start your project <ArrowUpRight className="size-3.5" />
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-md border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface px-5 py-4 md:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="border-b border-border/60 py-3 font-mono text-sm uppercase tracking-[0.14em] text-muted-foreground last:border-0"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:justify-between sm:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("font-mono text-xs uppercase tracking-[0.24em] text-primary", className)}>
      {children}
    </p>
  );
}

export function Portrait({ className }: { className?: string }) {
  return (
    <figure className={cn("group relative", className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
        <img
          src={headshot}
          alt={`${profile.name}, ${profile.role}`}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.25rem] bg-primary/8 blur-3xl" />
    </figure>
  );
}

export function PageHeader({
  label,
  title,
  lead,
}: {
  label: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>
      </div>
    </section>
  );
}
