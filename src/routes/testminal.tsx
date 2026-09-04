import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { profile, testimonialStats } from "@/data/portfolio";
import { Portrait } from "@/components/site-chrome";
import { TestimonialGallery } from "@/components/testimonial-gallery";

const title = "Testimonials — Sean Tech Solutions";
const description =
  "What clients say about working with Sean — ratings, feedback, and results across web, apps, ecommerce, design and more.";

export const Route = createFileRoute("/testminal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 grid-field opacity-30" />
        <div
          className="absolute top-0 right-[-10%] size-[36rem] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Testimonials</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance-tight sm:text-5xl md:text-6xl">
            What Clients Say About <span className="text-gradient-signal">My Work</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Real feedback from founders and teams I've shipped with. Clear communication, solid
            delivery, and relationships that last past launch day.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {testimonialStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <Portrait className="w-full" />
          <aside className="absolute right-0 bottom-6 max-w-[15rem] rounded-2xl border border-border bg-card/90 p-4 shadow-lg backdrop-blur sm:right-[-0.5rem]">
            <p className="font-mono text-2xl leading-none text-primary">"</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Great experience working together! Highly recommended.
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground">
              — A Happy Client
            </p>
          </aside>
          <p className="pointer-events-none absolute bottom-2 left-0 rotate-[-6deg] font-script text-xl text-foreground/55 sm:text-2xl">
            Building Ideas Together
          </p>
        </div>
      </section>

      <TestimonialGallery />

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-border bg-card px-6 py-10 sm:flex-row sm:items-center sm:px-10 sm:py-12 glow-primary">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 55%)",
            }}
          />
          <div className="relative max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
              Let's work together
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Join my happy clients and let's create something amazing together.
            </p>
          </div>
          <a
            href={profile.hireUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get in Touch <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
