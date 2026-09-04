import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Clapperboard,
  Code2,
  Gamepad2,
  LayoutGrid,
  LineChart,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  profile,
  projectCategories,
  projects,
  workStats,
  type Project,
  type ProjectAccent,
  type ProjectCategory,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

import imgSaas from "@/assets/projects/project-saas.jpg";
import imgEcommerce from "@/assets/projects/project-ecommerce.jpg";
import imgAutomation from "@/assets/projects/project-automation.jpg";
import imgBrand from "@/assets/projects/project-brand.jpg";
import imgVideo from "@/assets/projects/project-video.jpg";
import imgTrading from "@/assets/projects/project-trading.jpg";
import imgMobile from "@/assets/projects/project-mobile.jpg";
import imgGame from "@/assets/projects/project-game.jpg";
import imgLaptop from "@/assets/projects/cta-laptop.jpg";
import imgRocket from "@/assets/projects/cta-rocket.jpg";

const images = {
  saas: imgSaas,
  ecommerce: imgEcommerce,
  automation: imgAutomation,
  brand: imgBrand,
  video: imgVideo,
  trading: imgTrading,
  mobile: imgMobile,
  game: imgGame,
} as const;

const accentStyles: Record<
  ProjectAccent,
  { ring: string; category: string; stack: string; btn: string }
> = {
  cyan: {
    ring: "hover:border-sky-400/50",
    category: "text-sky-300",
    stack: "border-sky-400/25 text-sky-200/90",
    btn: "border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-200",
  },
  lime: {
    ring: "hover:border-primary/50",
    category: "text-primary",
    stack: "border-primary/25 text-primary/90",
    btn: "border-primary/40 hover:bg-primary/10 hover:text-primary",
  },
  ember: {
    ring: "hover:border-ember/50",
    category: "text-ember",
    stack: "border-ember/25 text-ember/90",
    btn: "border-ember/40 hover:bg-ember/10 hover:text-ember",
  },
  violet: {
    ring: "hover:border-violet-400/50",
    category: "text-violet-300",
    stack: "border-violet-400/25 text-violet-200/90",
    btn: "border-violet-400/40 hover:bg-violet-400/10 hover:text-violet-200",
  },
  sky: {
    ring: "hover:border-blue-400/50",
    category: "text-blue-300",
    stack: "border-blue-400/25 text-blue-200/90",
    btn: "border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-200",
  },
};

const filterIcons: Record<"All" | ProjectCategory, typeof LayoutGrid> = {
  All: LayoutGrid,
  "Web Development": Code2,
  "App Development": Sparkles,
  eCommerce: ShoppingBag,
  Automation: Workflow,
  "Logo & Graphic Design": Palette,
  "Video Editing": Clapperboard,
  "Trading Algo / Forex / Meta": LineChart,
  "Mobile Apps": Smartphone,
  "Game Development": Gamepad2,
};

const statIcons = [BriefcaseBusiness, CalendarDays, BadgeCheck, Award];

const title = "My Projects — Sean Dinwiddie";
const description =
  "Selected freelance work across web, apps, ecommerce, automation, design, video, trading systems, mobile and games.";

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
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

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
      <section className="relative mx-auto max-w-5xl px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24 sm:pb-12">
        <p className="inline-flex items-center rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
          My work
        </p>
        <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          My <span className="text-gradient-signal">Projects</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A selection of builds across development, design, automation and more — real products
          shipped for clients who needed something that works.
        </p>

        <p className="pointer-events-none absolute top-28 left-4 hidden rotate-[-8deg] font-script text-xl text-foreground/55 xl:block">
          Ideas → Code → Design → Ship
        </p>
        <p className="pointer-events-none absolute top-36 right-4 hidden max-w-[11rem] rotate-[6deg] text-right font-script text-xl leading-tight text-foreground/55 xl:block">
          Turning ideas into real solutions
        </p>
      </section>

      {/* Filters */}
      <section className="relative mx-auto max-w-6xl px-5 pb-10 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {projectCategories.map((category) => {
            const Icon = filterIcons[category];
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-all",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                <Icon className="size-3.5" />
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">No projects in this category yet.</p>
        )}
      </section>

      {/* Stats */}
      <section className="relative border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {workStats.map((stat, i) => {
            const Icon = statIcons[i] ?? Award;
            return (
              <div key={stat.label} className="flex items-center gap-4 bg-background px-6 py-8">
                <span className="grid size-11 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-display text-2xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 sm:px-10 sm:py-14 glow-primary">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--primary) 25%, transparent), transparent 55%)",
            }}
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[140px_1fr_140px]">
            <img
              src={imgLaptop}
              alt=""
              className="mx-auto hidden w-28 drop-shadow-2xl lg:block"
              loading="lazy"
            />
            <div className="text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
                Have an idea?
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                Let's Build Something <span className="text-gradient-signal">Amazing</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Ready to turn a sketch into something shipped? Let's talk scope, timeline and the
                stack that fits.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={profile.hireUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Start a Project <ArrowRight className="size-4" />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/40"
                >
                  See All Services
                </Link>
              </div>
            </div>
            <img
              src={imgRocket}
              alt=""
              className="mx-auto hidden w-28 drop-shadow-2xl lg:block"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const styles = accentStyles[project.accent];
  const href = project.url ?? profile.hireUrl;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1",
        styles.ring,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <img
          src={images[project.image]}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className={cn("font-mono text-[11px] uppercase tracking-[0.16em]", styles.category)}>
          {project.category}
        </p>
        <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">{project.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full border bg-surface/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider",
                styles.stack,
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors",
            styles.btn,
          )}
        >
          View Project <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </article>
  );
}
