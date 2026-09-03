import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

const title = "About Sean — Freelance Full-Stack Developer in Oregon";
const description = profile.intro;

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

function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-40" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] size-[34rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 sm:px-8 sm:pt-32 sm:pb-36">
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

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{profile.intro}</p>
      </div>
    </section>
  );
}
