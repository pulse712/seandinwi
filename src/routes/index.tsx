import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Quote } from "lucide-react";
import {
  profile,
  stats,
  projects,
  testimonials,
  clients,
} from "@/data/portfolio";
import { SectionLabel, Portrait } from "@/components/site-chrome";

const title = "About Sean — Freelance Full-Stack Developer in Oregon";
const description =
  "Fifteen-plus years, hundreds of projects and hundreds of clients. How Sean works: reliable communication, quality craft, honesty, commitment and long-term relationships.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const accentRing: Record<string, string> = {
  primary: "hover:border-primary/60",
  ember: "hover:border-ember/60",
  muted: "hover:border-muted-foreground/60",
};

const story = [
  {
    label: "The long version",
    heading: "Fifteen-plus years of building things that had to actually work",
    paras: [
      "I've spent more than fifteen years writing software professionally. In that time I've delivered hundreds of projects for hundreds of clients — startups finding their first shape, established businesses modernising what they already had, and founders who arrived with nothing but a sketch and a deadline.",
      "That volume taught me something narrow experience never does: most projects don't fail on technology. They fail on unclear scope, silence between updates, and shortcuts that quietly become someone else's problem. So I built my practice around removing exactly those failure points.",
    ],
  },
  {
    label: "How I work",
    heading: "Communication you can set your calendar by",
    paras: [
      "You'll always know where your project stands. I reply, I give status without being chased, and when something slips I tell you before you notice. Reliable communication isn't a soft skill here — it's the part of the job that makes everything else possible.",
      "Quality is the other non-negotiable. I'd rather do a smaller scope properly than a larger one badly, and I write code with the assumption that someone else will read it a year from now.",
    ],
  },
];

const values = [
  {
    title: "Honesty first",
    body: "If an idea won't work, if a budget won't stretch, or if you don't need what you're asking for — you'll hear it plainly. Straight answers beat comfortable ones.",
  },
  {
    title: "Commitment to the finish",
    body: "I take on work I intend to see all the way through. Once I'm in, your project gets the attention it needs until it's genuinely done, not until the invoice clears.",
  },
  {
    title: "Adaptability",
    body: "Requirements change, tools change, businesses change. Fifteen years across wildly different stacks and industries means I adjust to your world instead of forcing you into mine.",
  },
  {
    title: "Relationships that last",
    body: "Most of my work comes from people I've already worked with. I'm not optimising for one engagement — I'm building the kind of trust that gets a call three years later.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-field opacity-40" />
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] size-[34rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--primary), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_320px] md:gap-10 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-2 animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                {profile.availability}
              </div>

<h1 className="mt-8 max-w-4xl font-display text-[2.7rem] leading-[1.02] font-semibold tracking-tight text-balance-tight sm:text-7xl">
                Hi, it's nice to meet you!
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {profile.intro}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 glow-primary"
                >
                  See selected work <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/50"
                >
                  How I work <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="hidden justify-center md:flex">
              <Portrait className="w-full max-w-[220px] lg:max-w-[280px]" />
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-5 py-6">
                <dt className="font-display text-3xl font-semibold tracking-tight text-foreground">
                  {s.value}
                </dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex justify-center md:hidden">
            <Portrait className="w-full max-w-[260px]" />
          </div>
        </div>
      </section>

      {/* Client marquee */}
      <section className="border-b border-border bg-surface/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-6 sm:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            Trusted by
          </span>
          {clients.map((c) => (
            <span
              key={c}
              className="font-display text-sm font-medium tracking-tight text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2">
          {story.map((block) => (
            <article key={block.label}>
              <SectionLabel>{block.label}</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance-tight sm:text-4xl">
                {block.heading}
              </h2>
              <div className="mt-6 space-y-5 border-l border-border pl-6">
                {block.paras.map((p) => (
                  <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionLabel>What I hold to</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Four things that don't change from project to project
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="bg-card p-7">
                <span className="font-mono text-[11px] tracking-[0.2em] text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A few of the hundreds
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-primary"
          >
            All case studies <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <Link
              key={p.slug}
              to="/work"
              className={`group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 ${accentRing[p.accent]}`}
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                <span>{p.client}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              <p className="mt-4 font-mono text-xs text-ember">→ {p.outcome}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border bg-surface-raised px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionLabel>In their words</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What clients say afterwards
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-xl border border-border bg-card p-6"
              >
                <Quote className="size-5 text-primary" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="text-foreground">{t.name}</span> · {t.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-border">
        <div className="relative mx-auto max-w-6xl overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
          <div className="pointer-events-none absolute inset-0 grid-field opacity-30" />
          <div className="relative flex flex-col items-start gap-6 rounded-2xl border border-primary/40 bg-card p-8 sm:p-12 glow-primary">
            <SectionLabel>Working together</SectionLabel>
            <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance-tight sm:text-5xl">
              If you want someone who communicates clearly, builds it properly and sticks around —
              that's the work I do.
            </h2>
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              {profile.location}. Most engagements start with a scoped discovery week and grow into
              something long-term.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              See services & process <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
