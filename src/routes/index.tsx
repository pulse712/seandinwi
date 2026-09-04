import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Portrait } from "@/components/site-chrome";
import heroBg from "@/assets/home-hero.jpg";

const title = `${profile.fullName} — Freelance Full-Stack Developer`;
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

const pillars = ["Develop", "Design", "Automate", "Create", "Grow"] as const;

function Mark({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,color-mix(in_oklab,var(--background)_55%,transparent)_100%)]" />

        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-between px-5 py-10 sm:px-8 sm:py-14">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-sky-100/90 drop-shadow">
                Ideas
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.35em] text-sky-100/90 drop-shadow">
                Into
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.35em] text-sky-100/90 drop-shadow">
                Reality
              </p>
              <span className="mt-3 block h-px w-10 bg-sky-100/70" />
            </div>

            <ul className="hidden text-right sm:block">
              {pillars.map((item) => (
                <li
                  key={item}
                  className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-100/85 drop-shadow"
                >
                  {item}
                </li>
              ))}
              <li className="mt-2 ml-auto h-px w-10 bg-sky-100/70" />
            </ul>
          </div>

          <div className="mx-auto max-w-3xl py-10 text-center sm:py-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              {profile.role}
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-balance-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl">
              {profile.fullName}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sky-50/90 drop-shadow sm:text-lg">
              Turning ideas into shipped products — web, apps, automation and more — with{" "}
              <span className="font-semibold text-white">15+ years</span> of professional craft.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={profile.hireUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Start a Project <ArrowRight className="size-4" />
              </a>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/15"
              >
                View My Work <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="flex gap-6 sm:hidden">
              {pillars.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="font-mono text-[10px] uppercase tracking-[0.18em] text-sky-100/80"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="ml-auto max-w-[12rem] text-right font-script text-2xl leading-tight text-amber-100/90 drop-shadow sm:text-3xl">
              A Better
              <br />
              Digital Tomorrow
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative border-t border-border">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 grid-field opacity-30" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pt-16 pb-24 sm:px-8 sm:pt-24 sm:pb-32 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div className="order-first mx-auto w-full max-w-[240px] lg:order-last lg:mx-0 lg:h-full lg:max-w-none">
            <div className="lg:sticky lg:top-[calc(4rem+6rem)]">
              <Portrait className="w-full" />
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">About</p>
            <h2 className="mt-3 font-display text-[2.4rem] leading-[1.05] font-semibold tracking-tight text-balance-tight sm:text-5xl">
              Hi, I'm Sean
            </h2>

            <div className="mt-8 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                A freelancer based in Oregon, USA, with{" "}
                <Mark>15+ years of professional experience</Mark> working with clients from
                different industries and from different parts of the world.
              </p>
              <p>
                Throughout my career, I have completed <Mark>hundreds of projects</Mark>, ranging
                from small tasks and improvements to large, complex projects that required
                long-term development and continuous support. Every project has been different,
                but my approach has always remained the same: understand what the client needs,
                take responsibility for my work, and do my best to make the project successful.
              </p>
              <p>
                I believe that a freelancer's job is not simply to finish the work and move on.
                When I accept a project, I treat it as something I am personally responsible for.
                I work hard to understand the client's goals, pay attention to the details, solve
                problems along the way, and make sure the final delivery meets expectations.
              </p>
              <p>
                Over the years, I have built my reputation through{" "}
                <Mark>reliable communication, quality work, honesty, and commitment</Mark>. I
                understand that clients invest their time, money, and trust when they hire a
                freelancer. Because of that, I always try to make the entire working process as
                smooth and comfortable as possible.
              </p>
              <p>
                I have been fortunate to work with{" "}
                <Mark>
                  hundreds of clients, and my clients have consistently been satisfied with my
                  deliveries
                </Mark>
                . For me, client satisfaction is one of the most important measures of success. I
                don't consider a project truly successful just because it has been delivered—I
                consider it successful when the client is happy with the result and feels
                confident about the work that was completed.
              </p>
              <p>
                I also understand that projects can change during development. New requirements
                may appear, unexpected problems may come up, or an initially planned approach may
                need to be adjusted. I am comfortable adapting to these situations and finding
                practical solutions instead of simply focusing on what was originally written in
                the requirements.
              </p>
              <p>
                My goal is to build long-term relationships with clients rather than simply
                complete one-time jobs. I value trust and believe that a successful project
                should be the beginning of a professional relationship, not the end of one.
              </p>
              <p>
                After <Mark>15+ years and hundreds of completed projects</Mark>, I bring
                experience, responsibility, patience, and a strong work ethic to every project I
                take. If you are looking for someone who will take your project seriously,
                communicate clearly, work hard, and genuinely care about the final outcome, I
                would be happy to work with you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
