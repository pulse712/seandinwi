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

export type ProjectDetailGroup = {
  title: string;
  items: string[];
};

export type ProjectDetail = {
  role: string;
  client: string;
  liveUrl?: string;
  stackFull: string[];
  overview?: string;
  problem: string;
  solution: string;
  featureGroups: ProjectDetailGroup[];
  contributionIntro?: string;
  contributions: ProjectDetailGroup[];
  highlights: string[];
  skills: string[];
  results?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  badge?: string;
  summary: string;
  stack: string[];
  accent: ProjectAccent;
  image:
    | "saas"
    | "ecommerce"
    | "automation"
    | "brand"
    | "video"
    | "trading"
    | "mobile"
    | "game"
    | "patmyback"
    | "chocolatewood"
    | "artbynumber"
    | "dailynetwork";
  url?: string;
  detail?: ProjectDetail;
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
    slug: "pat-my-back",
    title: "Pat My Back",
    category: "App Development",
    summary:
      "Peer-support marketplace PWA where clients connect with vetted coaches via realtime chat, audio, and video — billed per minute from a prepaid wallet.",
    stack: ["React", "Supabase", "Stripe", "Agora"],
    accent: "lime",
    image: "patmyback",
    url: "https://patmyback.com",
    detail: {
      role: "Full-stack engineer (sole primary developer)",
      client: "Pat My Back — live production web app / PWA",
      liveUrl: "https://patmyback.com",
      stackFull: [
        "React 19",
        "TypeScript",
        "TanStack Start + Router",
        "Tailwind CSS 4",
        "shadcn/ui",
        "Supabase (Postgres + Auth + Realtime + RLS)",
        "Stripe",
        "Agora RTC",
        "Resend",
        "Web Push (VAPID)",
        "Vercel",
      ],
      problem:
        "People need on-demand encouragement and coaching (career, emotional support, music lessons, and more) without booking friction. Providers need tools to set availability, price, and earn by the minute.",
      solution:
        "A marketplace with two sides — clients buy credits and start sessions; Pat Pals go live and take chat/calls; admins approve providers, manage promos/trial codes, and moderate the platform.",
      contributionIntro:
        "Primary full-stack ownership of a live client product (~150+ commits on main).",
      featureGroups: [
        {
          title: "Marketplace & profiles",
          items: [
            "Role-based access: client, pat_pal, admin, super_admin",
            "Browse Pat Pals by category (mentorship, coaching, music lessons, etc.)",
            "Pat Pal profiles: headline, price/min, availability, photos",
            "Booking calendars / hours for scheduled sessions",
          ],
        },
        {
          title: "Real-time communication",
          items: [
            "Instant messaging with read receipts",
            "In-call chat (draggable corner panel) so users don’t leave the call",
            "Incoming call overlays, ringtone, message chimes",
            "Block / report users, Terms & Privacy",
          ],
        },
        {
          title: "Audio / video calling (Agora)",
          items: [
            "1:1 audio and video sessions",
            "Live call timer + remaining balance countdown",
            "Mid-call wallet top-up (Stripe) without dropping the call",
            "Grace period when balance hits zero",
            "Mute, camera on/off, volume presets, minimize-to-pill",
            "Front ↔ back camera switch on mobile",
            "WhatsApp-style fullscreen landscape controls + tap PiP to swap views",
            "Persistent call across in-app navigation",
          ],
        },
        {
          title: "Billing & growth",
          items: [
            "Prepaid wallet (seconds-based) via Stripe Checkout + webhooks",
            "Per-minute billing with session ledger",
            "Trial codes (timed / unlimited minutes)",
            "Post-session ratings + tips",
            "Staff complimentary-minute gifts",
          ],
        },
        {
          title: "Admin & account lifecycle",
          items: [
            "Signup approval gate (Pat Pals pending; clients auto-approved)",
            "Account states: pending, approved, deactivated, deleted",
            "Live admin alerts for new Pat Pal signups",
            "User delete/disable, promo banners, pricing, analytics tabs",
            "Push notifications (web) + PWA install (iOS/Android home screen)",
          ],
        },
      ],
      contributions: [
        {
          title: "Calling & media UX",
          items: [
            "Built/refined the full CallScreen: Agora join/publish, billing timers, top-up, rating/tips",
            "Redesigned in-call UI toward native/WhatsApp patterns (2×3 controls, overlay chrome, landscape fullscreen for music lessons)",
            "Fixed bidirectional front/back camera switching on iOS/Android",
            "Added tap-to-swap PiP ↔ main video like WhatsApp",
            "Kept calls alive across navigation with a floating minimized pill",
            "Hardened reconnect/session cleanup so calls don’t strand as “active”",
          ],
        },
        {
          title: "Messaging, notifications & mobile UX",
          items: [
            "Chat alerts, read receipts, safe-area / mobile layout fixes",
            "Service-worker push: suppress sender’s own notifications; survive SW restarts",
            "Configurable message sounds + client ringtone assets for production",
            "Bottom nav / desktop sidebar IA: Home, Browse, Chats, Calls, Profile",
            "Call history page + Profile links so users can find chats and call logs",
            "PWA install fix (icon size mismatch blocking iPhone “Add to Home Screen”)",
          ],
        },
        {
          title: "Auth, security & admin ops",
          items: [
            "Server-side approval gate so pending/banned users can’t enter the app",
            "Admin delete/disable users; sticky new-Pal signup alerts",
            "RLS / RPC security fixes (e.g. cancel-session trust, report validation)",
            "Block/report, Terms/Privacy pages",
          ],
        },
        {
          title: "Payments & marketplace reliability",
          items: [
            "Wallet/session billing edge cases (billing start, stuck sessions, mid-call top-up)",
            "Trial codes, promo banners, Pat pricing controls",
            "Booking calendars + availability/presence (don’t show everyone as online)",
          ],
        },
        {
          title: "Delivery & production quality",
          items: [
            "Deployed on Vercel with Supabase migrations",
            "Fixed stale-chunk 404s after deploys (service worker cache)",
            "Iterated directly from client bug reports and screen recordings",
          ],
        },
      ],
      highlights: [
        "Shipped a production peer-support marketplace PWA with chat, Agora A/V, and per-minute Stripe wallet billing",
        "Designed WhatsApp-like video call UX: fullscreen landscape overlays, auto-hiding controls, PiP swap, front/rear camera flip",
        "Implemented realtime messaging, web push, read receipts, and in-call chat without leaving the session",
        "Built admin approval workflows, RLS-backed account gates, and moderation (block/report)",
        "Hardened mobile PWA install, safe areas, and post-deploy cache recovery for real users on iPhone",
      ],
      skills: [
        "TypeScript",
        "React 19",
        "TanStack Start/Router",
        "Tailwind",
        "Supabase (SQL, RLS, Realtime)",
        "Stripe",
        "Agora RTC",
        "Web Push / Service Workers",
        "PWA",
        "Vercel",
        "Mobile-first UX",
        "Client-facing product iteration",
      ],
      results:
        "Delivered and maintained a live client product (patmyback.com), turning repeated mobile/call UX feedback into shipped features (call history, landscape fullscreen, camera flip, WhatsApp-style PiP swap) while owning auth, billing, and admin reliability.",
    },
  },
  {
    slug: "chocolate-wood",
    title: "Chocolate Wood — Premium Furniture eCommerce",
    category: "eCommerce",
    badge: "eCommerce · Shopify · UI/UX · Web Development",
    summary:
      "Developed a premium Shopify eCommerce website for an Australian furniture retailer, featuring a large multi-category catalogue, custom-made collections, clearance sales, product viewing, wishlist, search, customer accounts and responsive shopping experiences.",
    stack: ["Shopify", "Liquid", "JavaScript", "Responsive UI/UX"],
    accent: "ember",
    image: "chocolatewood",
    url: "https://chocolatewood.com.au",
    detail: {
      role: "Full-Stack / Shopify Developer",
      client: "Chocolate Wood — Sydney furniture retailer (live production store)",
      liveUrl: "https://chocolatewood.com.au",
      stackFull: [
        "Shopify",
        "Liquid / Theme Customisation",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Web Design",
        "Product & Collection Management",
        "SEO-Friendly Structure",
      ],
      overview:
        "Chocolate Wood is a Sydney-based furniture retailer specialising in timber furniture, Australian custom-made pieces, rattan furniture, outdoor furniture, and home furnishings. The website supports a large catalogue covering living rooms, dining rooms, bedrooms, hallways, outdoor furniture, clearance products, and custom-made collections. I developed the eCommerce experience with a strong focus on premium visual presentation, easy product discovery, mobile usability, and conversion-focused shopping flows — translating the quality and craftsmanship of the physical furniture showroom into a polished online shopping experience.",
      problem:
        "The business had a broad furniture catalogue with many product categories, materials, styles, sizes, custom-made options, and clearance items. Customers need to find the right product quickly without becoming overwhelmed. Furniture is also a considered purchase — people want dimensions, materials, delivery options, and sometimes to see a product before buying. Chocolate Wood needed more than a basic catalogue: a site that connects online shopping with the physical showroom experience, including product viewing enquiries.",
      solution:
        "I created a clean, premium eCommerce experience that makes the large catalogue easier to explore while keeping furniture photography and products at the centre of the design. Information architecture is organised around intuitive categories such as Living Room, Dining Room, Hallway, Bedroom, Australian Custom Made, Rattan Furniture, Outdoor Furniture, in-store stock and Sale. The visual direction uses spacious layouts, neutral tones, elegant typography, large product imagery, and restrained UI so the timber aesthetic leads.",
      featureGroups: [
        {
          title: "Key features",
          items: [
            "Large-scale Shopify furniture catalogue",
            "Multi-level product/category navigation",
            "Living, dining, bedroom and outdoor collections",
            "Australian custom-made furniture",
            "Rattan and timber furniture collections",
            "Clearance and promotional pricing",
            "Product search, wishlist, customer accounts",
            "Shopping cart and checkout",
            "Detailed specifications and product information",
            "Product viewing / showroom journey",
            "Responsive mobile experience",
            "Secure online purchasing",
            "Delivery and warranty information",
            "Contact and showroom integration",
            "SEO-friendly product/category structure",
          ],
        },
      ],
      contributions: [
        {
          title: "eCommerce architecture & development",
          items: [
            "Structured the Shopify storefront around a large multi-category furniture catalogue with clear paths from discovery through product detail, cart, and checkout.",
          ],
        },
        {
          title: "Responsive UI/UX development",
          items: [
            "Created layouts that adapt cleanly across desktop, tablet, and mobile so browsing and purchasing stay comfortable on smaller screens.",
          ],
        },
        {
          title: "Navigation & product discovery",
          items: [
            "Organised complex categories and subcategories so customers can browse by room, furniture type, style, and collection instead of relying only on search.",
          ],
        },
        {
          title: "Product presentation",
          items: [
            "Built product-focused layouts for pricing, discounts, dimensions, timber/material specs, finishes, assembly, stock information, and warranty details.",
          ],
        },
        {
          title: "Sales & clearance experience",
          items: [
            "Supported promotional pricing and clearance merchandising with visible discount percentages, previous/current pricing, and dedicated sale categories.",
          ],
        },
        {
          title: "Custom-made furniture experience",
          items: [
            "Incorporated dedicated navigation and product structures for the Australian custom-made range — dining tables, chairs, bedroom furniture, TV units, cabinets, desks and more.",
          ],
        },
        {
          title: "Product viewing / offline-to-online",
          items: [
            "Integrated a product-viewing journey so customers can investigate whether furniture can be inspected at the Sydney showroom or partner showrooms before purchasing.",
          ],
        },
        {
          title: "Search, account & shopping features",
          items: [
            "Delivered customer login, search, shopping cart and wishlist for a complete retail experience.",
          ],
        },
        {
          title: "Trust & conversion elements",
          items: [
            "Structured high-value purchase information around secure payments, delivery, warranty, customer service and showroom contact — supporting Australia-wide sales while connecting users with the Sydney location.",
          ],
        },
      ],
      highlights: [
        "Built and customised a production Shopify furniture eCommerce platform with extensive product collections, sale pricing, search, cart, accounts and wishlist functionality.",
        "Designed a premium mobile-responsive shopping experience supporting furniture discovery by room, category, custom-made range and product type.",
        "Connected online commerce with the physical retail experience through detailed product information, customer-service flows and showroom/product-viewing functionality.",
      ],
      skills: [
        "Shopify",
        "Liquid",
        "JavaScript",
        "Responsive UI/UX",
        "eCommerce",
        "Theme Customisation",
        "SEO-Friendly Structure",
      ],
      results:
        "The finished product is a live production eCommerce platform supporting Chocolate Wood’s ongoing retail operations and extensive furniture catalogue — easier navigation, stronger premium presentation, and a consistent journey across desktop, mobile, checkout, custom furniture discovery, and in-person product viewing.",
    },
  },
  {
    slug: "art-by-number",
    title: "Art by Number Generator",
    category: "App Development",
    badge: "Creative Tool · Image Processing · Web Application",
    summary:
      "Built the beta of a web-based tool that converts uploaded photographs into printable paint-by-number artwork using automated colour reduction, numbered palettes, grid-based processing and scalable SVG generation.",
    stack: ["TypeScript", "React", "Canvas API", "SVG"],
    accent: "violet",
    image: "artbynumber",
    url: "https://art-by-number-gen.lovable.app",
    detail: {
      role: "Full-Stack Developer / Product Engineer",
      client: "Art by Number Generator — Beta / Initial Release",
      liveUrl: "https://art-by-number-gen.lovable.app",
      stackFull: [
        "React / TanStack Start",
        "TypeScript",
        "Tailwind CSS",
        "HTML5 Canvas API",
        "SVG",
        "Browser File API / FileReader",
        "Blob / Object URL APIs",
        "Lovable",
      ],
      overview:
        "Art by Number Generator is a browser-based creative application that transforms ordinary photographs into structured paint-by-number artwork. Users upload an image, choose a grid layout, process the image into simplified colour regions, assign numbered colours, and export a printable SVG template. The beta was designed around one clear objective: make the process extremely simple for non-technical users — start with a normal JPG or PNG and create a paint-by-number template directly in the browser, without Photoshop or specialist tools. The live beta supports image upload, grid selection, generation controls and a numbered palette of up to 25 colours.",
      problem:
        "Turning a photograph into paint-by-number artwork requires reducing hundreds of thousands of colours, gradients, shadows and tiny regions into something paintable. Too much simplification loses detail; too little produces hundreds of regions nobody can paint. The core challenge was balancing image detail, number of regions, colour count and print readability — while keeping the user journey as simple as Upload → Select Layout → Generate → Review Colours → Export.",
      solution:
        "I structured the beta around a minimal decision set and put the hard visual-processing work behind the interface: validate and pre-process uploads, reduce colours via quantisation into a numbered palette (01–25), segment with a user-selected grid layout, map numbers onto regions, and generate resolution-independent SVG for clean printing. Client-side image processing keeps the loop fast and validates the workflow before investing in advanced editing features.",
      featureGroups: [
        {
          title: "Beta capabilities",
          items: [
            "Upload JPG and PNG images (up to 20 MB)",
            "Validate file type, size and dimensions (min 40 × 60 px)",
            "Grid / layout selection before generation",
            "Colour reduction into a numbered palette (up to 25 colours)",
            "Paintable region generation from the processed image",
            "Printable SVG template download",
            "Simple Upload → Generate → Download workflow",
            "Foundation for future advanced image-processing options",
          ],
        },
        {
          title: "Technical challenges addressed",
          items: [
            "Colour simplification while keeping recognisable structure",
            "Region readability for actual painting",
            "Performance with large photographs",
            "Vector conversion suitable for clean printing",
            "Deterministic number-to-colour mapping",
            "Hiding processing complexity from casual users",
          ],
        },
      ],
      contributionIntro:
        "I converted the client concept into a minimal user journey and built the full processing pipeline behind a deliberately simple beta UI.",
      contributions: [
        {
          title: "Requirements & user flow",
          items: [
            "Structured the beta around Upload → Choose grid → Generate → Review palette → Export, keeping complex settings out of the first release.",
          ],
        },
        {
          title: "Image upload pipeline",
          items: [
            "Browser-friendly upload with format, size, dimension and empty-state validation, plus clear loading/generation states to prevent later pipeline failures.",
          ],
        },
        {
          title: "Image pre-processing",
          items: [
            "Normalised large photographs by reading dimensions, calculating working resolution, resampling, extracting RGB data and reducing noise before conversion.",
          ],
        },
        {
          title: "Colour reduction / quantisation",
          items: [
            "Clustered similar RGB shades into a practical numbered paint palette (01–25) instead of treating every slight colour difference as unique.",
          ],
        },
        {
          title: "Grid & artwork segmentation",
          items: [
            "Exposed a Grid Layout selector so users trade off larger easier regions vs finer detail that better resembles the original photo.",
          ],
        },
        {
          title: "Number mapping",
          items: [
            "Mapped each palette colour to an identifier and placed those numbers into corresponding artwork regions — Canvas Region → Colour Number → Palette Colour.",
          ],
        },
        {
          title: "SVG generation",
          items: [
            "Chose SVG over raster export for resolution-independent outlines, scalable templates, smaller vector files and high-quality multi-size printing.",
          ],
        },
        {
          title: "Beta UI/UX",
          items: [
            "Kept the main screen focused on Image Upload, Grid Layout, Generate and Palette so users can produce a first result with almost no friction.",
          ],
        },
      ],
      highlights: [
        "Built the complete browser-based paint-by-number pipeline: validation, grid conversion, colour reduction, palette mapping, numbered artwork and vector export.",
        "Kept the UX to a simple Upload → Generate → Download flow while handling complex image processing behind the scenes.",
        "Established a technical foundation for a larger creative platform (adjustable colours, editing tools, print presets, accounts) without redesigning from scratch.",
      ],
      skills: [
        "TypeScript",
        "React / TanStack Start",
        "Tailwind CSS",
        "HTML5 Canvas",
        "SVG",
        "Browser File APIs",
        "Image Processing",
        "Lovable",
      ],
      results:
        "The beta transforms photos into numbered paint-by-number artwork with a printable SVG output and a clear end-to-end workflow — validating the core idea with real users before expanding into a larger creative platform.",
    },
  },
  {
    slug: "daily-network",
    title: "Daily Network — Quantum-Ready Blockchain & Web3 Ecosystem",
    category: "Web Development",
    badge: "Blockchain · Web3 · FinTech · Cryptocurrency",
    summary:
      "Developed a production Web3 ecosystem connecting a blockchain network with wallet infrastructure, staking, DEX, Mainnet/Testnet explorers, RPC services, faucet, network monitoring and developer funding tools.",
    stack: ["Blockchain", "Web3", "EVM", "TypeScript"],
    accent: "sky",
    image: "dailynetwork",
    url: "https://dailycrypto.net",
    detail: {
      role: "Full-Stack / Web3 Developer",
      client: "Daily Network / DLY Ecosystem — Production / Mainnet",
      liveUrl: "https://dailycrypto.net",
      stackFull: [
        "React / Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Web3.js / Ethers.js / Viem",
        "Solidity",
        "JSON-RPC",
        "Safe / MetaMask Integration",
        "Blockscout",
        "REST APIs",
        "Responsive UI",
        "Web3 Wallet Integration",
      ],
      overview:
        "Daily Network is a Web3 ecosystem built around blockchain infrastructure positioned for post-quantum security, scalability, and EVM-compatible developer access. I developed a polished public-facing experience that brings together the protocol story, network statistics, wallet infrastructure, staking, block explorers, DEX access, testnet tooling, service monitoring, and ecosystem funding into one coherent product — an entry point into an entire blockchain ecosystem rather than a typical crypto landing page. The homepage introduces lattice cryptography, zero-knowledge proofs, DAG architecture, sharding and quantum RNG, then connects users directly to wallet, mainnet/testnet RPC, staking, explorers, DEX, status monitoring and the testnet faucet.",
      problem:
        "Blockchain infrastructure is hard to present well. Too much jargon makes the site feel inaccessible; oversimplifying makes it feel like empty marketing. The challenge was Complex Blockchain Infrastructure → Clear Digital Experience → Real Network Tools — serving investors, developers, token holders, builders and everyday users without losing technical credibility.",
      solution:
        "I separated the platform into clear layers: vision and technology communication; network infrastructure and statistics; and direct access to functional ecosystem products (wallet, RPC, explorer, staking, DEX, faucet, status, grants). That kept the interface approachable while still supporting serious Web3 users, under a consistent futuristic dark visual identity.",
      featureGroups: [
        {
          title: "Ecosystem products",
          items: [
            "Main website with protocol education and network metrics",
            "Browser wallet and Safe / multisig wallet paths",
            "Mainnet (Chain ID 824) and Testnet (Chain ID 825) RPC access",
            "Testnet faucet (100 test DLY / 24h cooldown)",
            "Blockscout-based Mainnet and Testnet explorers",
            "Staking interface integrated into the product flow",
            "Dedicated DEX entry point",
            "Real-time status monitoring for RPCs, explorers, staking, wallet, faucet and docs",
            "Ecosystem grant application workflow with DLY wallet addresses",
            "Responsive desktop and mobile experience",
          ],
        },
        {
          title: "Protocol concepts presented",
          items: [
            "Lattice cryptography & CRYSTALS-Dilithium3 post-quantum layer",
            "Zero-knowledge proofs",
            "DAG / aBFT ledger model",
            "Dynamic sharding",
            "Quantum RNG",
            "Daily Core architecture",
          ],
        },
      ],
      contributionIntro:
        "I owned development of the Daily Network digital ecosystem — translating complex blockchain infrastructure into a polished, approachable Web3 experience across frontend architecture, responsive UI/UX, wallet and RPC integration, network tooling, Mainnet/Testnet flows, explorers, developer utilities and production deployment.",
      contributions: [
        {
          title: "Product & ecosystem architecture",
          items: [
            "Mapped audiences and structured the platform as interconnected products: Website → Wallet → RPC → Explorer → Staking → DEX → Faucet → Status → Ecosystem Funding.",
          ],
        },
        {
          title: "Web3-focused UI/UX",
          items: [
            "Built a dark, high-tech visual language emphasising infrastructure, security, performance and network technology — including interactive touches like initialization, network viewer and Genesis Block personality.",
          ],
        },
        {
          title: "Protocol & technology presentation",
          items: [
            "Structured sophisticated concepts (lattice crypto, ZK proofs, DAG, sharding, quantum RNG) into clear product sections without burying visitors in jargon.",
          ],
        },
        {
          title: "Blockchain wallet experience",
          items: [
            "Delivered Browser Wallet onboarding (create/import with recovery phrase or private key, keys in-browser) and Safe/multisig paths for teams (e.g. 2-of-3) with MetaMask integration.",
          ],
        },
        {
          title: "Mainnet & testnet infrastructure",
          items: [
            "Exposed clearly separated Mainnet (824) and Testnet (825) RPC workflows so developers can Build → Test → Inspect → Mainnet without mixing environments.",
          ],
        },
        {
          title: "Testnet faucet",
          items: [
            "Built faucet flow issuing 100 testnet DLY per request with 24-hour cooldown, explicitly separated from real-value assets.",
          ],
        },
        {
          title: "Explorer, staking & DEX",
          items: [
            "Integrated Blockscout explorers for both chains, connected staking into the main journey, and placed DEX access inside the branded ecosystem rather than as an unrelated external tool.",
          ],
        },
        {
          title: "Status dashboard & grants",
          items: [
            "Added real-time monitoring for major services plus a structured grant application flow (project, team, contact, DLY amount, wallet, docs) with a clear success state.",
          ],
        },
        {
          title: "Responsive experience",
          items: [
            "Designed navigation, content density, CTAs, tables, cards and forms for readable mobile Web3 use — not desktop-only crypto UI.",
          ],
        },
      ],
      highlights: [
        "Built a production Web3/blockchain ecosystem connecting network infrastructure, wallet, staking, DEX, explorers, faucet and service monitoring.",
        "Designed a futuristic technical UI that communicates advanced blockchain concepts without overwhelming non-technical users.",
        "Integrated Daily Network Mainnet (Chain ID 824) and Testnet (Chain ID 825) workflows with dedicated RPC and developer tooling.",
        "Created wallet onboarding for both individual browser-wallet users and Safe multisig team workflows.",
        "Integrated Mainnet/Testnet explorers, test-token faucet and real-time infrastructure status monitoring.",
        "Built an ecosystem-grant application flow connecting project submissions directly with DLY wallet addresses.",
        "Delivered responsive Web3 UX across desktop and mobile while keeping a consistent identity across ecosystem apps.",
      ],
      skills: [
        "Blockchain",
        "Web3",
        "Cryptocurrency",
        "React",
        "TypeScript",
        "Solidity",
        "EVM",
        "Smart Contracts",
        "JSON-RPC",
        "Wallet Integration",
        "MetaMask",
        "Safe Multisig",
        "Blockscout",
        "Mainnet/Testnet",
        "DEX",
        "Staking",
        "Web3 Security",
        "Responsive UI/UX",
        "API Integration",
      ],
      results:
        "The platform became a complete entry point into Daily Network — protocol education, infrastructure, wallet onboarding, developer tooling, monitoring and ecosystem growth in one branded experience. Users can move from Discover Network → Understand Technology → Create Wallet → Connect Mainnet/Testnet → Explore Transactions → Test with Faucet → Stake → Access DEX → Build on the Network.",
    },
  },
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

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

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

export type TestimonialCategory =
  | "Web & App"
  | "Ecommerce"
  | "Automation"
  | "Design"
  | "Video Editing"
  | "Trading & Forex"
  | "Mobile Apps"
  | "Games";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  countryCode: string;
  country: string;
  rating: number;
  category: TestimonialCategory;
  accent: "cyan" | "lime" | "ember" | "violet" | "sky";
};

export const testimonialCategories: Array<"All Testimonials" | TestimonialCategory> = [
  "All Testimonials",
  "Web & App",
  "Ecommerce",
  "Automation",
  "Design",
  "Video Editing",
  "Trading & Forex",
  "Mobile Apps",
  "Games",
];

export const testimonialStats = [
  { value: "24/7", label: "Support" },
  { value: "5.0", label: "Average Rating" },
  { value: "100%", label: "Client Satisfaction" },
];

export const testimonials: Testimonial[] = [
  {
    id: "nadia",
    quote:
      "Sean replaced what we thought was a six-month roadmap in eleven weeks. The code is the cleanest we've inherited from a contractor, full stop.",
    name: "Nadia Okonkwo",
    countryCode: "us",
    country: "United States",
    rating: 5,
    category: "Web & App",
    accent: "cyan",
  },
  {
    id: "tomas",
    quote:
      "Rare combination: writes serious backend code and has real taste in the UI. Our investors thought we had a design team.",
    name: "Tomas Rieger",
    countryCode: "de",
    country: "Germany",
    rating: 5,
    category: "Ecommerce",
    accent: "lime",
  },
  {
    id: "priya",
    quote:
      "Communicates like a partner, not a vendor. Told us to cut two features that would have sunk the timeline — he was right.",
    name: "Priya Raman",
    countryCode: "au",
    country: "Australia",
    rating: 5,
    category: "Automation",
    accent: "violet",
  },
  {
    id: "marcus",
    quote:
      "Our brand finally feels consistent across web and print. Sean delivered a system we can actually hand to any designer.",
    name: "Marcus Chen",
    countryCode: "ca",
    country: "Canada",
    rating: 5,
    category: "Design",
    accent: "ember",
  },
  {
    id: "elena",
    quote:
      "The launch videos looked premium and converted. Fast turns, clear feedback loops, zero drama.",
    name: "Elena Vargas",
    countryCode: "es",
    country: "Spain",
    rating: 5,
    category: "Video Editing",
    accent: "violet",
  },
  {
    id: "james",
    quote:
      "Solid trading tooling with careful risk controls. He understood the domain and didn't oversell magic bots.",
    name: "James Whitfield",
    countryCode: "gb",
    country: "United Kingdom",
    rating: 5,
    category: "Trading & Forex",
    accent: "sky",
  },
  {
    id: "aisha",
    quote:
      "Shipped our iOS and Android apps on one codebase. Smooth store submission and a polish pass that felt native.",
    name: "Aisha Rahman",
    countryCode: "us",
    country: "United States",
    rating: 5,
    category: "Mobile Apps",
    accent: "cyan",
  },
  {
    id: "leo",
    quote:
      "Gameplay felt snappy and the live-ops pipeline was documented. Rare to get both craft and production sense.",
    name: "Leo Martins",
    countryCode: "br",
    country: "Brazil",
    rating: 5,
    category: "Games",
    accent: "lime",
  },
  {
    id: "sofia",
    quote:
      "From discovery to deploy, every Friday we saw real progress. Best freelance engagement we've had in years.",
    name: "Sofia Andersson",
    countryCode: "se",
    country: "Sweden",
    rating: 5,
    category: "Web & App",
    accent: "ember",
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
