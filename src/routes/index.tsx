import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { profile } from "@/data/portfolio";
import { Portrait } from "@/components/site-chrome";

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

function Mark({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

function Home() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid-field opacity-40" />
        <div
          className="absolute -top-40 right-[-10%] size-[34rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--primary), transparent 65%)" }}
        />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pt-16 pb-24 sm:px-8 sm:pt-24 sm:pb-32 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
        <div className="order-first mx-auto w-full max-w-[240px] lg:order-last lg:mx-0 lg:h-full lg:max-w-none">
          <div className="lg:sticky lg:top-[calc(4rem+6rem)]">
            <Portrait className="w-full" />
          </div>
        </div>

        <div>
          <h1 className="font-display text-[2.7rem] leading-[1.02] font-semibold tracking-tight text-balance-tight sm:text-6xl">
            Hi, I'm Sean
          </h1>

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
  );
}
