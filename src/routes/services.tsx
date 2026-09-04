import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Clock3,
  ShieldCheck,
} from "lucide-react";
import { profile, serviceCatalog, type ServiceAccent } from "@/data/portfolio";
import { cn } from "@/lib/utils";

import imgWeb from "@/assets/services/service-web.jpg";
import imgAutomation from "@/assets/services/service-automation.jpg";
import imgDesign from "@/assets/services/service-design.jpg";
import imgVideo from "@/assets/services/service-video.jpg";
import imgTrading from "@/assets/services/service-trading.jpg";
import imgMobile from "@/assets/services/service-mobile.jpg";
import imgGame from "@/assets/services/service-game.jpg";

const images = {
  web: imgWeb,
  automation: imgAutomation,
  design: imgDesign,
  video: imgVideo,
  trading: imgTrading,
  mobile: imgMobile,
  game: imgGame,
} as const;

const accentStyles: Record<
  ServiceAccent,
  { ring: string; glow: string; btn: string; tag: string }
> = {
  cyan: {
    ring: "hover:border-sky-400/50",
    glow: "bg-sky-400/20",
    btn: "border-sky-400/50 text-sky-300 hover:bg-sky-400/15",
    tag: "border-sky-400/25 text-sky-200/90",
  },
  lime: {
    ring: "hover:border-primary/50",
    glow: "bg-primary/20",
    btn: "border-primary/50 text-primary hover:bg-primary/15",
    tag: "border-primary/25 text-primary/90",
  },
  ember: {
    ring: "hover:border-ember/50",
    glow: "bg-ember/20",
    btn: "border-ember/50 text-ember hover:bg-ember/15",
    tag: "border-ember/25 text-ember/90",
  },
  violet: {
    ring: "hover:border-violet-400/50",
    glow: "bg-violet-400/20",
    btn: "border-violet-400/50 text-violet-300 hover:bg-violet-400/15",
    tag: "border-violet-400/25 text-violet-200/90",
  },
  sky: {
    ring: "hover:border-blue-400/50",
    glow: "bg-blue-400/20",
    btn: "border-blue-400/50 text-blue-300 hover:bg-blue-400/15",
    tag: "border-blue-400/25 text-blue-200/90",
  },
};

const title = "My Services — Sean Dinwiddie";
const description =
  "Web & ecommerce, automation, design, video, trading systems, mobile apps and game development — delivered with quality, on time, and with long-term support.";

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

const promises = [
  { icon: Award, label: "High Quality Work" },
  { icon: Clock3, label: "On-Time Delivery" },
  { icon: ShieldCheck, label: "Long-Term Support" },
];

function ServicesPage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid-field opacity-30" />
        <div
          className="absolute top-0 left-1/2 size-[42rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-5 pt-16 pb-12 text-center sm:px-8 sm:pt-24 sm:pb-16">
        <p className="inline-flex items-center rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
          What I do
        </p>

        <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          My <span className="text-gradient-signal">Services</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          From first sketch to shipped product — I help you build, automate and grow with
          craft you can trust and communication you can count on.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {promises.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm text-foreground">
              <span className="grid size-8 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Icon className="size-4" />
              </span>
              {label}
            </div>
          ))}
        </div>

        <p className="pointer-events-none absolute top-28 left-4 hidden rotate-[-8deg] font-script text-xl text-foreground/55 xl:block">
          Ideas → Design → Develop → Grow
        </p>
        <p className="pointer-events-none absolute top-36 right-4 hidden max-w-[10rem] rotate-[6deg] text-right font-script text-xl leading-tight text-foreground/55 xl:block">
          Let's build something amazing together!
        </p>
      </section>

      {/* Cards */}
      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {serviceCatalog.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 text-center sm:px-12 sm:py-16 glow-primary">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--primary) 25%, transparent), transparent 55%)",
            }}
          />
          <p className="relative font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
            Have a project in mind?
          </p>
          <h2 className="relative mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Let's Make It <span className="text-gradient-signal">Happen!</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell me what you're building. I'll help you shape the scope, pick the right approach,
            and ship something your clients and users will love.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={profile.hireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Get In Touch <ArrowRight className="size-4" />
            </a>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/40"
            >
              View My Work
            </Link>
          </div>

          <p className="pointer-events-none absolute bottom-6 left-6 hidden rotate-[-6deg] font-script text-lg text-foreground/50 lg:block">
            Your Idea → My Skills → Real Results
          </p>
          <p className="pointer-events-none absolute right-6 bottom-8 hidden max-w-[9rem] rotate-[5deg] text-right font-script text-lg leading-tight text-foreground/50 lg:block">
            Build · Automate · Design · Create
          </p>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service }: { service: (typeof serviceCatalog)[number] }) {
  const styles = accentStyles[service.accent];

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1",
        styles.ring,
      )}
    >
      <div className="relative mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-surface">
        <div className={cn("absolute inset-6 rounded-full blur-2xl", styles.glow)} />
        <img
          src={images[service.image]}
          alt=""
          className="relative z-10 h-[78%] w-[78%] object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <h2 className="font-display text-lg font-semibold tracking-tight text-balance-tight">
        {service.title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.body}</p>

      <div className="mt-5 flex items-end justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full border bg-surface/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider",
                styles.tag,
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={profile.hireUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Start a project for ${service.title}`}
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-full border transition-colors",
            styles.btn,
          )}
        >
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </article>
  );
}
