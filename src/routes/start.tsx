import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Clock, Shield, Users } from "lucide-react";
import { services, process } from "@/data/portfolio";
import { PageHeader, SectionLabel } from "@/components/site-chrome";

const title = "Start Your Project — Sean, Full-Stack Developer";
const description =
  "How Sean takes on new work: engagement shapes, a predictable four-step process, and what makes a project start strong.";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: StartPage,
});

const expectations = [
  {
    icon: Clock,
    title: "Async-first, not absent",
    body: "Daily or weekly written updates, recorded walkthroughs, and clear next steps so you never wonder where things stand.",
  },
  {
    icon: Shield,
    title: "Scope you can trust",
    body: "We agree on outcomes and guardrails up front. If something needs to change, we change it deliberately, not by surprise.",
  },
  {
    icon: Users,
    title: "Built for handover",
    body: "You own the code, the accounts, and the docs from day one. I leave the team confident to run what we built.",
  },
];

const briefChecklist = [
  "The problem you're solving and who it's for",
  "Rough budget and timeline expectations",
  "Existing codebase, team, or constraints",
  "What a successful first version looks like",
];

function StartPage() {
  return (
    <>
      <PageHeader
        label="Start your project"
        title="A clear path from idea to shipped product."
        lead="No contact forms here — just a transparent look at how I take on new work, what I need from you, and what happens after we agree to move forward."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionLabel>Engagement shapes</SectionLabel>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Pick the fit, then we define the scope together.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="flex flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
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

        <Link
          to="/services"
          className="mt-12 inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          Full services & skills <ArrowUpRight className="size-4" />
        </Link>
      </section>

      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionLabel>The process</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Four phases, weekly deliverables.
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>What makes a strong start</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A little context goes a long way.
            </h2>
            <ul className="mt-8 space-y-4">
              {briefChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 grid size-5 place-items-center rounded-full border border-primary/40 font-mono text-[10px] text-primary">
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <SectionLabel>How I work</SectionLabel>
            <div className="mt-6 space-y-6">
              {expectations.map((e) => (
                <div key={e.title} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <e.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">{e.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-card p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl" />
            <SectionLabel>Next step</SectionLabel>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready when you are.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              If the fit feels right, send a brief through the channel we already share — or explore recent work and services first.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                See selected work <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                View services <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
