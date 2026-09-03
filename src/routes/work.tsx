import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects, process } from "@/data/portfolio";
import { PageHeader, SectionLabel } from "@/components/site-chrome";

const title = "Work — Case Studies by Sean";
const description =
  "Selected freelance full-stack projects: realtime dispatch, fintech ledgers, editorial platforms and AI-assisted support tooling, with the outcomes they delivered.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHeader
        label="Case studies"
        title="Six builds, six very different problems."
        lead="Every engagement below shipped to real users. Names and numbers are placeholders you can swap for your own — the structure is what matters."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="divide-y divide-border border-y border-border">
          {projects.map((p, i) => (
            <article key={p.slug} className="group grid gap-6 py-10 md:grid-cols-[7rem_1fr_auto]">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <div className="text-primary">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-1">{p.year}</div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {p.client}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{p.summary}</p>
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
              </div>

              <div className="md:text-right">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Outcome
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-ember">{p.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionLabel>How the work runs</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A predictable process
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s) => (
              <div key={s.step} className="bg-card p-6">
                <span className="font-mono text-xs tracking-[0.2em] text-primary">{s.step}</span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="mt-12 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            See how I work <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
