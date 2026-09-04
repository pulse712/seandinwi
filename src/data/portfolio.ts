/**
 * Single source of placeholder content for the portfolio.
 * Personalize everything here — no component edits required.
 */

export const profile = {
  name: "Sean",
  role: "Freelance Full-Stack Developer",
  location: "Oregon, USA — working remotely (PT)",
  tagline: "I design, build and ship production web products end to end.",
  intro:
    "Hi, I'm Sean, a freelancer based in Oregon, USA, with 15+ years of professional experience working with clients from different industries and from different parts of the world.",
  availability: "Booking new projects from October",
  hireUrl: "https://www.freelancer.com/u/seandinwiddie",
};

export const stats = [
  { value: "15+ yrs", label: "Shipping software" },
  { value: "100s", label: "Projects delivered" },
  { value: "100s", label: "Clients served" },
  { value: "Long-term", label: "Working relationships" },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  summary: string;
  outcome: string;
  stack: string[];
  accent: "primary" | "ember" | "muted";
};

export const projects: Project[] = [
  {
    slug: "harbor-ops",
    title: "Harbor Ops",
    client: "Logistics startup",
    year: "2026",
    summary:
      "Realtime fleet dispatch console handling 3k concurrent vehicle streams, with offline-first driver PWA.",
    outcome: "Dispatch latency down 71%",
    stack: ["TypeScript", "React", "Postgres", "WebSockets"],
    accent: "primary",
  },
  {
    slug: "atlas-ledger",
    title: "Atlas Ledger",
    client: "Fintech scale-up",
    year: "2025",
    summary:
      "Double-entry accounting core with audit trails, multi-currency settlement and a self-serve reporting builder.",
    outcome: "Closed books in 2 days, not 3 weeks",
    stack: ["Node", "Postgres", "Stripe", "Zod"],
    accent: "ember",
  },
  {
    slug: "verdant",
    title: "Verdant CMS",
    client: "Independent publisher",
    year: "2025",
    summary:
      "Editorial platform with block-based authoring, scheduled publishing and edge-rendered pages scoring 100 on Core Web Vitals.",
    outcome: "Page loads under 400ms globally",
    stack: ["React", "Edge SSR", "S3", "Algolia"],
    accent: "muted",
  },
  {
    slug: "signal-desk",
    title: "Signal Desk",
    client: "B2B SaaS",
    year: "2024",
    summary:
      "AI-assisted support inbox that drafts replies from a company knowledge base and routes by intent confidence.",
    outcome: "38% of tickets resolved first-touch",
    stack: ["Python", "pgvector", "React", "Queues"],
    accent: "ember",
  },
  {
    slug: "orbit-analytics",
    title: "Orbit Analytics",
    client: "Growth agency",
    year: "2024",
    summary:
      "Privacy-first product analytics with cohort funnels, event schema validation and shareable dashboards.",
    outcome: "Replaced a $4k/mo vendor",
    stack: ["ClickHouse", "TypeScript", "Recharts"],
    accent: "primary",
  },
  {
    slug: "meridian",
    title: "Meridian Booking",
    client: "Boutique hotel group",
    year: "2023",
    summary:
      "Direct booking engine with dynamic pricing rules, channel sync and a checkout that converts on mobile.",
    outcome: "+27% direct reservations",
    stack: ["React", "Postgres", "Payments", "CRON"],
    accent: "muted",
  },
];

export const services = [
  {
    title: "Product engineering",
    price: "From $7.5k / project",
    body: "Zero-to-one builds: schema, API, interface, deploy pipeline. You get a working product, not a prototype.",
    points: ["Discovery & scoping", "Full-stack build", "CI/CD + monitoring"],
  },
  {
    title: "Embedded contractor",
    price: "From $6k / month",
    body: "I join your team for a quarter or two — sprint work, code review, mentoring, unblocking the hard parts.",
    points: ["Async-first", "Code review culture", "Documented handover"],
  },
  {
    title: "Rescue & scale",
    price: "From $2.5k / audit",
    body: "Inherited a codebase that groans under load? I audit, stabilise, and lay out a pragmatic path forward.",
    points: ["Performance profiling", "Security review", "Refactor roadmap"],
  },
];

export const skillGroups = [
  { label: "Frontend", items: ["React", "TypeScript", "TanStack", "Tailwind", "Motion", "Accessibility"] },
  { label: "Backend", items: ["Node", "Python", "Postgres", "Redis", "REST & RPC", "Queues"] },
  { label: "Infra", items: ["Docker", "Edge runtimes", "CI/CD", "Observability", "IaC", "Cost tuning"] },
  { label: "Craft", items: ["Design systems", "Prototyping", "Technical writing", "Workshops"] },
];

export const process = [
  { step: "01", title: "Frame", body: "A paid discovery week: constraints, users, risks, and a scope we both believe in." },
  { step: "02", title: "Build", body: "Weekly deploys to a staging URL. You see progress every Friday, no black boxes." },
  { step: "03", title: "Harden", body: "Tests, monitoring, load checks and a runbook so launch day is boring." },
  { step: "04", title: "Hand over", body: "Documentation, a walkthrough recording, and 30 days of post-launch support." },
];

export const testimonials = [
  {
    quote:
      "Sean replaced what we thought was a six-month roadmap in eleven weeks. The code is the cleanest we've inherited from a contractor, full stop.",
    name: "Nadia Okonkwo",
    title: "CTO, Harbor Ops",
  },
  {
    quote:
      "Rare combination: writes serious backend code and has real taste in the UI. Our investors thought we had a design team.",
    name: "Tomas Rieger",
    title: "Founder, Atlas Ledger",
  },
  {
    quote:
      "Communicates like a partner, not a vendor. Told us to cut two features that would have sunk the timeline — he was right.",
    name: "Priya Raman",
    title: "Head of Product, Signal Desk",
  },
];

export const clients = ["Harbor Ops", "Atlas Ledger", "Verdant", "Signal Desk", "Orbit", "Meridian"];

export const faqs = [
  {
    q: "How do you price work?",
    a: "Fixed-price per milestone for defined scope, or a monthly retainer for embedded work. No hourly timesheets, no surprise invoices.",
  },
  {
    q: "Do you work with existing teams?",
    a: "Often. I plug into your repo, your standups and your review process, and I leave the codebase easier to work in than I found it.",
  },
  {
    q: "What is your typical timeline?",
    a: "Discovery starts within two weeks of a signed scope. Most zero-to-one builds ship a usable v1 in 8–12 weeks.",
  },
  {
    q: "Who owns the code?",
    a: "You do, from the first commit. Everything lives in your repositories and your cloud accounts.",
  },
];
