"use client";

import { useEffect, useMemo, useState } from "react";
import { Quote, Star } from "lucide-react";
import {
  testimonialCategories,
  testimonials,
  type Testimonial,
  type TestimonialCategory,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

const categoryHashes: Record<"All Testimonials" | TestimonialCategory, string> = {
  "All Testimonials": "all",
  "Web & App": "web-app",
  Ecommerce: "ecommerce",
  Automation: "automation",
  Design: "design",
  "Video Editing": "video",
  "Trading & Forex": "trading",
  "Mobile Apps": "mobile",
  Games: "games",
};

const hashToCategory = Object.fromEntries(
  Object.entries(categoryHashes).map(([category, hash]) => [hash, category]),
) as Record<string, "All Testimonials" | TestimonialCategory>;

const avatarTone: Record<Testimonial["accent"], string> = {
  cyan: "bg-sky-400/20 text-sky-200",
  lime: "bg-primary/20 text-primary",
  ember: "bg-ember/20 text-ember",
  violet: "bg-violet-400/20 text-violet-200",
  sky: "bg-blue-400/20 text-blue-200",
};

function readCategoryFromHash(): "All Testimonials" | TestimonialCategory {
  if (typeof window === "undefined") return "All Testimonials";
  const slug = window.location.hash.replace(/^#/, "").toLowerCase();
  if (!slug || slug === "all") return "All Testimonials";
  return hashToCategory[slug] ?? "All Testimonials";
}

function writeCategoryHash(category: "All Testimonials" | TestimonialCategory) {
  const next =
    category === "All Testimonials"
      ? `${window.location.pathname}${window.location.search}`
      : `${window.location.pathname}${window.location.search}#${categoryHashes[category]}`;
  window.history.replaceState(null, "", next);
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialGallery() {
  const [active, setActive] = useState<"All Testimonials" | TestimonialCategory>("All Testimonials");

  useEffect(() => {
    setActive(readCategoryFromHash());
    const onHashChange = () => setActive(readCategoryFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const filtered = useMemo(() => {
    if (active === "All Testimonials") return testimonials;
    return testimonials.filter((item) => item.category === active);
  }, [active]);

  const selectCategory = (category: "All Testimonials" | TestimonialCategory) => {
    setActive(category);
    writeCategoryHash(category);
  };

  return (
    <div className="relative z-10">
      <section className="relative mx-auto max-w-6xl px-5 pb-10 sm:px-8">
        <div
          className="flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Testimonial categories"
        >
          {testimonialCategories.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                id={categoryHashes[category]}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectCategory(category)}
                className={cn(
                  "relative z-10 inline-flex cursor-pointer items-center rounded-full border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-all",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div key={active} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">No testimonials in this category yet.</p>
        )}
      </section>
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <Quote className="size-8 text-primary/80" />
        <div className="flex items-center gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-ember text-ember" />
          ))}
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">"{item.quote}"</p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span
          className={cn(
            "grid size-11 place-items-center rounded-full font-mono text-xs font-semibold",
            avatarTone[item.accent],
          )}
        >
          {initials(item.name)}
        </span>
        <div>
          <p className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
            {item.name}
            <span className="text-base leading-none" aria-hidden>
              {item.flag}
            </span>
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {item.role}
          </p>
        </div>
      </div>
    </article>
  );
}
