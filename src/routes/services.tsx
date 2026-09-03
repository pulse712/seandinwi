import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { services, skillGroups, faqs } from "@/data/portfolio";
import { PageHeader, SectionLabel } from "@/components/site-chrome";

const title = "Services & Skills — Sean, Full-Stack Developer";
const description =
  "Product engineering, embedded contracting and codebase rescue. Transparent pricing, the full technical stack, and answers to the questions clients ask first.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services & skills"
        title="Scoped engagements, no vague retainers."
        lead="Pick the shape that fits your stage. Every option includes weekly deploys, plain-language updates and code you fully own."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="flex flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                0{i + 1}
              </span>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">{s.title}</h2>
              <p className="mt-1 font-mono text-xs text-primary">{s.price}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionLabel>Toolbox</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            The stack I reach for
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g) => (
              <div key={g.label} className="bg-card p-6">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {g.label}
                </h3>
                <ul className="mt-4 space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-muted-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionLabel>Questions</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Answered before you ask
        </h2>
        <dl className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <div key={f.q} className="grid gap-3 py-7 md:grid-cols-[18rem_1fr]">
              <dt className="font-display text-lg font-semibold tracking-tight">{f.q}</dt>
              <dd className="max-w-2xl leading-relaxed text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>

        <Link
          to="/work"
          className="mt-12 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Browse selected work <ArrowUpRight className="size-4" />
        </Link>
      </section>
    </>
  );
}
