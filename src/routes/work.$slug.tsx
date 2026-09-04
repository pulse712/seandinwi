import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { getProjectBySlug, profile } from "@/data/portfolio";
import { projectImages } from "@/lib/project-images";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project?.detail) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    const title = project
      ? `${project.title} — Sean Tech Solutions`
      : "Project — Sean Tech Solutions";
    const description = project?.summary ?? "Project case study.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const detail = project.detail!;

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 grid-field opacity-30" />
        <div
          className="absolute top-0 right-[-10%] size-[36rem] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
          }}
        />
      </div>

      <article className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" /> Back to projects
        </Link>

        {detail.gallery?.length ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {detail.gallery.map((item) => (
              <figure
                key={item.label}
                className="overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <img
                  src={projectImages[item.image]}
                  alt={`${project.title} — ${item.label}`}
                  className="mx-auto aspect-[4/5] w-full bg-black/20 object-contain object-center"
                />
                <figcaption className="border-t border-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
            <img
              src={projectImages[project.image]}
              alt={`${project.title} cover`}
              className="aspect-[16/10] w-full object-cover object-center"
            />
          </div>
        )}

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
          {project.badge ?? project.category}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {project.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {detail.liveUrl && project.category !== "Mobile Apps" && (
            <a
              href={detail.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Visit live site <ExternalLink className="size-3.5" />
            </a>
          )}
          {detail.appStoreUrl && (
            <a
              href={detail.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 ${
                project.category === "Mobile Apps"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-surface text-foreground transition-colors hover:border-primary/40"
              }`}
            >
              App Store <ExternalLink className="size-3.5" />
            </a>
          )}
          {detail.playStoreUrl && (
            <a
              href={detail.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${
                project.category === "Mobile Apps" && !detail.appStoreUrl
                  ? "bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
                  : "border border-border bg-surface text-foreground transition-colors hover:border-primary/40"
              }`}
            >
              Google Play <ExternalLink className="size-3.5" />
            </a>
          )}
          <a
            href={profile.hireUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/40"
          >
            Start a project <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <dl className="mt-10 grid gap-4 border-y border-border py-6 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Role
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed">{detail.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Client / product
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed">{detail.client}</dd>
          </div>
        </dl>

        {detail.overview && (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Project overview
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {detail.overview}
            </p>
          </section>
        )}

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {detail.stackFull.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/25 bg-surface/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-primary/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Problem</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {detail.problem}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Solution</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {detail.solution}
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Core product features
          </h2>
          <div className="mt-6 space-y-8">
            {detail.featureGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight">What I did</h2>
          {detail.contributionIntro && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {detail.contributionIntro}
            </p>
          )}
          <div className="mt-6 space-y-8">
            {detail.contributions.map((group) => (
              <div key={group.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ember/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Highlights</h2>
          <ul className="mt-5 space-y-3">
            {detail.highlights.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card/60 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {detail.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {detail.results && (
          <section className="mt-14 rounded-2xl border border-border bg-card px-5 py-6 sm:px-7 sm:py-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight">Results</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {detail.results}
            </p>
          </section>
        )}
      </article>
    </div>
  );
}
