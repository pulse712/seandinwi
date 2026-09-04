/**
 * Single source of placeholder content for the portfolio.
 * Personalize everything here — no component edits required.
 */

export const profile = {
  name: "Sean",
  fullName: "Sean Tech Solutions",
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

export type ProjectCategory =
  | "Web Development"
  | "App Development"
  | "eCommerce"
  | "Automation"
  | "Logo & Graphic Design"
  | "Video Editing"
  | "Trading Algo / Forex / Meta"
  | "Mobile Apps"
  | "Game Development";

export type ProjectAccent = "cyan" | "lime" | "ember" | "violet" | "sky";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  stack: string[];
  accent: ProjectAccent;
  image: "saas" | "ecommerce" | "automation" | "brand" | "video" | "trading" | "mobile" | "game";
  url?: string;
};

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Web Development",
  "App Development",
  "eCommerce",
  "Automation",
  "Logo & Graphic Design",
  "Video Editing",
  "Trading Algo / Forex / Meta",
  "Mobile Apps",
  "Game Development",
];

export const projects: Project[] = [
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard Platform",
    category: "Web Development",
    summary:
      "A realtime analytics console with role-based access, custom widgets and exportable reports for a B2B operations team.",
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    accent: "cyan",
    image: "saas",
  },
  {
    slug: "client-portal",
    title: "Client Portal App",
    category: "App Development",
    summary:
      "Secure customer portal for invoices, file exchange and status tracking — built for desktop-first power users.",
    stack: ["React", "Node", "Auth", "Postgres"],
    accent: "sky",
    image: "saas",
  },
  {
    slug: "northline-store",
    title: "Online Store Platform",
    category: "eCommerce",
    summary:
      "Conversion-focused storefront with collections, checkout and inventory sync for a direct-to-consumer brand.",
    stack: ["Shopify", "Liquid", "React", "Stripe"],
    accent: "lime",
    image: "ecommerce",
  },
  {
    slug: "workflow-hub",
    title: "Workflow Automation Hub",
    category: "Automation",
    summary:
      "Internal automation board connecting CRM, email and accounting so routine handoffs run without manual chase.",
    stack: ["n8n", "APIs", "Webhooks", "Postgres"],
    accent: "violet",
    image: "automation",
  },
  {
    slug: "brand-system",
    title: "Brand Identity System",
    category: "Logo & Graphic Design",
    summary:
      "Logo suite, color system and marketing templates that stay consistent across web, print and social.",
    stack: ["Illustrator", "Figma", "Brand Kit"],
    accent: "ember",
    image: "brand",
  },
  {
    slug: "launch-reels",
    title: "Product Launch Video Suite",
    category: "Video Editing",
    summary:
      "Short-form launch cuts and a long demo edit paced for ads, social and the product homepage.",
    stack: ["Premiere", "After Effects", "Sound"],
    accent: "violet",
    image: "video",
  },
  {
    slug: "signal-trader",
    title: "Trading Signal Desk",
    category: "Trading Algo / Forex / Meta",
    summary:
      "Strategy dashboard with candlestick views, alert rules and MetaTrader-facing hooks for disciplined entries.",
    stack: ["Python", "MetaTrader", "Charts", "APIs"],
    accent: "sky",
    image: "trading",
  },
  {
    slug: "pulse-fit",
    title: "Pulse Fit Mobile",
    category: "Mobile Apps",
    summary:
      "Cross-platform fitness companion with workouts, progress rings and coach messaging that feels native on both stores.",
    stack: ["Flutter", "Firebase", "iOS", "Android"],
    accent: "violet",
    image: "mobile",
  },
  {
    slug: "orbit-raiders",
    title: "Orbit Raiders",
    category: "Game Development",
    summary:
      "Arcade-style mobile game with tight controls, polished VFX and a live-ops friendly level pack pipeline.",
    stack: ["Unity", "C#", "Mobile"],
    accent: "cyan",
    image: "game",
  },
];

export const workStats = [
  { value: "100s", label: "Projects Delivered" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "High", label: "Quality Standards" },
];

export const engagementShapes = [
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

export type ServiceAccent = "cyan" | "lime" | "ember" | "violet" | "sky";

export type ServiceOffering = {
  slug: string;
  title: string;
  body: string;
  tags: string[];
  accent: ServiceAccent;
  image: "web" | "ecommerce" | "automation" | "design" | "video" | "trading" | "mobile" | "game";
};

export const serviceCatalog: ServiceOffering[] = [
  {
    slug: "web-saas-api",
    title: "Web, SaaS, API Development",
    body: "Modern websites, SaaS products and robust APIs — from dashboards and auth to billing, integrations and deploy pipelines that hold up in production.",
    tags: ["Web", "SaaS", "APIs", "React"],
    accent: "cyan",
    image: "web",
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    body: "Conversion-focused online stores with catalogs, checkout, payments and inventory — Shopify, custom storefronts or headless builds that sell.",
    tags: ["Shopify", "Checkout", "Payments", "Stores"],
    accent: "sky",
    image: "ecommerce",
  },
  {
    slug: "automation",
    title: "Automation",
    body: "Workflows that remove busywork: integrations, bots, scheduled jobs and internal tools that keep your business moving while you sleep.",
    tags: ["Zapier", "n8n", "APIs", "Scripts"],
    accent: "lime",
    image: "automation",
  },
  {
    slug: "logo-graphic-art",
    title: "Logo, Graphic & Art Design",
    body: "Brand marks, marketing visuals and art direction that feel intentional — clear identity for products, campaigns and socials.",
    tags: ["Logo Design", "Branding", "Illustrator", "Photoshop"],
    accent: "ember",
    image: "design",
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    body: "Crisp cuts for product demos, ads and social content — paced for attention, branded for consistency, delivered ready to publish.",
    tags: ["Premiere", "After Effects", "Shorts", "Ads"],
    accent: "violet",
    image: "video",
  },
  {
    slug: "trading-algorithms",
    title: "Trading Algorithm, Forex & Meta",
    body: "Strategy tooling and automation around markets: indicators, bots, dashboards and MetaTrader-facing systems with careful risk controls.",
    tags: ["Forex", "MetaTrader", "Python", "APIs"],
    accent: "sky",
    image: "trading",
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    body: "Native-feeling iOS and Android apps with shared code where it helps — polished UI, solid backend hooks and store-ready builds.",
    tags: ["iOS", "Android", "Flutter", "React Native"],
    accent: "violet",
    image: "mobile",
  },
  {
    slug: "game-development",
    title: "Game Development",
    body: "Playable prototypes and shipped games across engines — systems, UI, performance tuning and packaging for the platforms you need.",
    tags: ["Unity", "Godot", "C#", "Gameplay"],
    accent: "cyan",
    image: "game",
  },
];

/** @deprecated Use engagementShapes — kept as alias for older imports */
export const services = engagementShapes;

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
