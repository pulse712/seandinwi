import { Quote, Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const avatarTone: Record<Testimonial["accent"], string> = {
  cyan: "bg-sky-400/20 text-sky-200",
  lime: "bg-primary/20 text-primary",
  ember: "bg-ember/20 text-ember",
  violet: "bg-violet-400/20 text-violet-200",
  sky: "bg-blue-400/20 text-blue-200",
};

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialGallery() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>
    </section>
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
