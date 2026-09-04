import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ProjectGallery } from "@/components/project-gallery";

import imgLaptop from "@/assets/projects/cta-laptop.jpg";
import imgRocket from "@/assets/projects/cta-rocket.jpg";

const title = "Projects — Sean Dinwiddie";
const description =
  "Selected freelance work across web, apps, ecommerce, automation, design, video, trading systems, mobile and games.";

export const Route = createFileRoute("/work/")({
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
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 grid-field opacity-30" />
        <div
          className="absolute top-0 left-1/2 size-[42rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
          }}
        />
      </div>

      <section className="relative z-10 mx-auto max-w-5xl px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24 sm:pb-12">
        <p className="inline-flex items-center rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
          My work
        </p>
        <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-gradient-signal">projects</span>
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

      <ProjectGallery />

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
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
