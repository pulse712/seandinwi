"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
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

export function ProjectGallery() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <div className="relative z-10">
      <section className="relative mx-auto max-w-6xl px-5 pb-10 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Project categories">
          {projectCategories.map((category) => {
            const Icon = filterIcons[category];
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(category)}
                className={cn(
                  "relative z-10 inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-all",
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

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div key={active} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">No projects in this category yet.</p>
        )}
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
