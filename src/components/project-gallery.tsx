"use client";

import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
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
import { projectImages as images } from "@/lib/project-images";

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
  "Web & SaaS": Code2,
  eCommerce: ShoppingBag,
  Automation: Workflow,
  "Logo & Graphic Design": Palette,
  "Video Editing": Clapperboard,
  "Trading & Blockchain": LineChart,
  "Mobile Apps": Smartphone,
  "Game Development": Gamepad2,
};

const categoryHashes: Record<"All" | ProjectCategory, string> = {
  All: "all",
  "Web & SaaS": "web",
  eCommerce: "ecommerce",
  Automation: "automation",
  "Logo & Graphic Design": "design",
  "Video Editing": "video",
  "Trading & Blockchain": "trading",
  "Mobile Apps": "mobile",
  "Game Development": "game",
};

const hashToCategory = {
  ...Object.fromEntries(
    Object.entries(categoryHashes).map(([category, hash]) => [hash, category]),
  ),
  // Legacy hashes from renamed/removed filters
  app: "Web & SaaS",
  "web-development": "Web & SaaS",
  "app-development": "Web & SaaS",
  "trading-algo": "Trading & Blockchain",
  forex: "Trading & Blockchain",
  meta: "Trading & Blockchain",
} as Record<string, "All" | ProjectCategory>;

function readCategoryFromHash(): "All" | ProjectCategory {
  if (typeof window === "undefined") return "All";
  const slug = window.location.hash.replace(/^#/, "").toLowerCase();
  if (!slug) return "All";
  return hashToCategory[slug] ?? "All";
}

function writeCategoryHash(category: "All" | ProjectCategory) {
  const slug = categoryHashes[category];
  const next =
    category === "All"
      ? `${window.location.pathname}${window.location.search}`
      : `${window.location.pathname}${window.location.search}#${slug}`;
  window.history.replaceState(null, "", next);
}

export function ProjectGallery() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  useEffect(() => {
    setActive(readCategoryFromHash());

    const onHashChange = () => setActive(readCategoryFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => {
      const categories = project.categories ?? [project.category];
      return categories.includes(active);
    });
  }, [active]);

  const selectCategory = (category: "All" | ProjectCategory) => {
    setActive(category);
    writeCategoryHash(category);
  };

  return (
    <div className="relative z-10">
      <section className="relative mx-auto max-w-6xl px-5 pb-10 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Project categories">
          {projectCategories.map((category) => {
            const Icon = filterIcons[category];
            const isActive = active === category;
            const hash = categoryHashes[category];
            return (
              <button
                key={category}
                id={hash}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectCategory(category)}
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
  const hasDetail = Boolean(project.detail);
  const externalHref = project.url ?? profile.hireUrl;

  const content = (
    <>
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
          {project.badge ?? project.category}
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
        <span
          className={cn(
            "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors",
            styles.btn,
          )}
        >
          {hasDetail ? "View case study" : "View Project"} <ArrowUpRight className="size-3.5" />
        </span>
      </div>
    </>
  );

  const shellClass = cn(
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1",
    styles.ring,
  );

  if (hasDetail) {
    return (
      <Link to="/work/$slug" params={{ slug: project.slug }} className={shellClass}>
        {content}
      </Link>
    );
  }

  return (
    <a href={externalHref} target="_blank" rel="noopener noreferrer" className={shellClass}>
      {content}
    </a>
  );
}
