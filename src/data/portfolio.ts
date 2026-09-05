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
  | "Web & SaaS"
  | "eCommerce"
  | "Automation"
  | "Logo & Graphic Design"
  | "Video Editing"
  | "Trading & Blockchain"
  | "Mobile Apps"
  | "Game Development";

export type ProjectAccent = "cyan" | "lime" | "ember" | "violet" | "sky";

export type ProjectDetailGroup = {
  title: string;
  items: string[];
};

export type ProjectImageKey =
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
  | "dailynetwork"
  | "zantopheria"
  | "zantopheriaback"
  | "kekoa1"
  | "kekoa2"
  | "kekoa3"
  | "kekoa4"
  | "monee"
  | "swipr"
  | "wrpelevation"
  | "doyobest"
  | "joymade"
  | "mariegems"
  | "kofi"
  | "fire"
  | "southerndiesel"
  | "marquisvillage"
  | "logocollection"
  | "logocollection2"
  | "aestheticsbeaverton"
  | "galloperworld"
  | "castlesoap"
  | "lovebomb"
  | "flyerbrochure"
  | "flyerpostergrid"
  | "blok"
  | "murad"
  | "newman"
  | "carbide"
  | "languagecafe"
  | "cirkus"
  | "ringforensic"
  | "scanneralert"
  | "bubbledalle"
  | "mlbscenario"
  | "customerpricing"
  | "worldofsightwords"
  | "weatherforddeals"
  | "polymarketbot"
  | "polymarketsol"
  | "polymarketbtc"
  | "ninjatraderstrategy"
  | "thinkorswimanalytics"
  | "tradingviewpivots"
  | "tradingviewppv1"
  | "shortstrategybacktest"
  | "mousetrapcover"
  | "mousetrapinterior";

export type ProjectDetail = {
  role: string;
  client: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
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
  gallery?: Array<{ label: string; image: ProjectImageKey }>;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Extra categories so a project can appear under multiple filters. */
  categories?: ProjectCategory[];
  badge?: string;
  summary: string;
  stack: string[];
  accent: ProjectAccent;
  image: ProjectImageKey;
  url?: string;
  detail?: ProjectDetail;
};

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Web & SaaS",
  "eCommerce",
  "Automation",
  "Logo & Graphic Design",
  "Video Editing",
  "Trading & Blockchain",
  "Mobile Apps",
  "Game Development",
];

export const projects: Project[] = [
  {
    slug: "pat-my-back",
    title: "Pat My Back",
    category: "Web & SaaS",
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
    category: "Web & SaaS",
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
    category: "Trading & Blockchain",
    categories: ["Trading & Blockchain", "Web & SaaS"],
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
    slug: "zantopheria-cover",
    title: "Zantopheria — Epic Fantasy Book Cover",
    category: "Logo & Graphic Design",
    badge: "Cover Design · Illustration · Typography",
    summary:
      "Designed the front and back covers for Zantopheria — a cinematic underwater fantasy novel — with ornate gold typography, bioluminescent world-building, and print-ready layout for the full jacket.",
    stack: ["Cover Design", "Illustration", "Typography", "Print Layout"],
    accent: "violet",
    image: "zantopheria",
    detail: {
      role: "Cover Designer / Digital Illustrator",
      client: "Todd W. Hildreth — The Chronicles of Zantopheria",
      stackFull: [
        "Digital Illustration",
        "Book Cover Design",
        "Typography & Lettering",
        "Colour Direction",
        "Print Layout (Front / Back)",
        "Composition & Visual Storytelling",
      ],
      overview:
        "Zantopheria is an epic underwater fantasy title. I created a matched front and back cover pair that sells the world at a glance: a lone warrior before a glowing city under a protective dome, a vast sea predator in the depths, and a back jacket that frames the story blurb with monumental underwater architecture and gold series branding.",
      problem:
        "Fantasy covers need to feel epic without becoming cluttered. The design had to carry series branding, author credit, a cinematic scene, and a readable back-cover synopsis — while staying print-ready and genre-true for middle-grade / adventure fantasy shelves.",
      solution:
        "I built a dark, bioluminescent palette with metallic gold typography as the brand signal. The front cover focuses on a single dramatic silhouette against the lit city and monster for scale; the back cover uses statue-framed architecture, gold-highlighted character names in the blurb, and taglines that close the emotional pitch.",
      featureGroups: [
        {
          title: "Front cover",
          items: [
            "Series lockup: The Chronicles of Zantopheria",
            "Ornate metallic title treatment with custom emblem in the letter O",
            "Hero silhouette on jagged rock facing the glowing underwater city",
            "Protective energy dome and bioluminescent city light as primary light source",
            "Massive sea predator and supporting marine silhouettes for scale and menace",
            "Author credit: Todd W. Hildreth",
          ],
        },
        {
          title: "Back cover",
          items: [
            "Matching gold series and title branding",
            "Story synopsis with gold emphasis on key names (Eddy Swanson, Zantopheria, Neixar)",
            "Architectural frame with monumental trident-bearing statues",
            "Crystal city vista through a stone arch for world continuity",
            "Taglines: Some worlds are discovered / Others choose who may enter / And some adventures change everything",
            "Barcode / ISBN placement reserved for print production",
          ],
        },
      ],
      contributionIntro:
        "I owned the visual direction and cover execution for both sides of the jacket — composition, colour, typography, and print-aware layout.",
      contributions: [
        {
          title: "Concept & composition",
          items: [
            "Established the underwater epic scene hierarchy: hero → city/dome → predator → deep-sea environment.",
          ],
        },
        {
          title: "Typography & branding",
          items: [
            "Designed an ornate gold title system with series lines and flourishes that reads at thumbnail and full print size.",
          ],
        },
        {
          title: "Colour & lighting",
          items: [
            "Used midnight blues against cyan city light and gold type so the covers feel cinematic and shelf-distinct.",
          ],
        },
        {
          title: "Back jacket storytelling",
          items: [
            "Laid out the synopsis, highlighted names, taglines and barcode zone so the back sells the plot without competing with the art.",
          ],
        },
      ],
      highlights: [
        "Delivered a cohesive front/back cover system for an underwater fantasy novel.",
        "Balanced epic illustration with clear series branding and author presentation.",
        "Built a print-ready jacket layout including synopsis emphasis and barcode placement.",
      ],
      skills: [
        "Book Cover Design",
        "Digital Illustration",
        "Typography",
        "Colour Direction",
        "Print Layout",
        "Visual Storytelling",
        "Brand Consistency",
      ],
      results:
        "A finished fantasy cover pair that communicates world, tone and series identity at a glance — strong enough for retail thumbnails and detailed enough for full-size print.",
      gallery: [
        { label: "Front cover", image: "zantopheria" },
        { label: "Back cover", image: "zantopheriaback" },
      ],
    },
  },
  {
    slug: "kekoa-salem-graphics",
    title: "Kekoa Salem — Athlete Brand Graphics",
    category: "Logo & Graphic Design",
    badge: "Sports Graphic Design · Athlete Branding",
    summary:
      "A set of high-energy basketball player graphics for Kekoa Salem — recruitment-style posters with bold typography, team colour systems, photo compositing and gritty athletic branding.",
    stack: ["Sports Branding", "Photo Composite", "Typography", "Poster Design"],
    accent: "ember",
    image: "kekoa1",
    detail: {
      role: "Graphic Designer",
      client: "Kekoa Salem — Athlete branding / sports graphics",
      stackFull: [
        "Sports Graphic Design",
        "Photo Manipulation & Compositing",
        "Typography & Layout",
        "Colour Systems",
        "Texture & Effects",
        "Athlete Branding",
      ],
      overview:
        "I designed a series of athlete profile and recruitment-style posters for basketball player Kekoa Salem (6'1\" | 195 lbs). Each piece uses a distinct team/colour identity — from gritty red Top Contenders posters to purple, Pioneers red/black, and Legacy navy/gold treatments — while keeping the player as the clear hero.",
      problem:
        "Athlete graphics need to feel game-day loud on social and still read clearly as branding: name, measurables, team cues and attitude. Generic templates flatten personality; over-designed posters bury the athlete.",
      solution:
        "I built a family of posters that share strong hierarchy (name → stats → attributes) but vary palette, texture and motion language so each look can serve a different team story or campaign moment without losing recognition of Kekoa as the subject.",
      featureGroups: [
        {
          title: "Poster set",
          items: [
            "Top Contenders — Class of 2029 poster (red / white / black, torn-paper and court textures)",
            "Purple #24 hero portrait with crown-shield branding",
            "Pioneers #24 action dribble graphic (red rim light, grit, hustle word stack)",
            "Legacy #21 navy/gold arena portrait with crowned lion identity",
          ],
        },
        {
          title: "Design system cues",
          items: [
            "Consistent athlete identity: Kekoa Salem, 6'1\" | 195 lbs",
            "Bold condensed name lockups and jersey number treatments",
            "Attribute messaging (teamwork, hard work, growth / relentless, discipline, hustle)",
            "Logo and team badge integration per colour story",
          ],
        },
      ],
      contributionIntro:
        "I owned concept, compositing, typography, colour direction and finishing across the full poster set.",
      contributions: [
        {
          title: "Photo compositing",
          items: [
            "Cut out and lit athlete photos against textured court/arena environments with motion streaks, smoke and torn-edge overlays.",
          ],
        },
        {
          title: "Typography & hierarchy",
          items: [
            "Built oversized name treatments, stats bars and supporting word stacks that stay readable at social thumbnail size.",
          ],
        },
        {
          title: "Brand colour systems",
          items: [
            "Developed distinct red, purple, and navy/gold identities so the same athlete can slot into different team narratives.",
          ],
        },
        {
          title: "Athletic attitude",
          items: [
            "Added grit, splatters, brush strokes and quotes like “Built for the moment” to push recruitment energy without cluttering the player.",
          ],
        },
      ],
      highlights: [
        "Delivered a cohesive multi-look athlete branding set for Kekoa Salem.",
        "Balanced photo-real action with bold sports typography and team identity systems.",
        "Produced social/recruitment-ready posters that stay clear at thumbnail and full size.",
      ],
      skills: [
        "Sports Graphic Design",
        "Athlete Branding",
        "Photo Manipulation",
        "Typography",
        "Colour Direction",
        "Poster Layout",
        "Texture Design",
      ],
      results:
        "A flexible athlete brand toolkit — four campaign-ready looks that present Kekoa with clear stats, team flavour and high-energy sports attitude.",
      gallery: [
        { label: "Top Contenders — Class of 2029", image: "kekoa1" },
        { label: "Purple #24 hero portrait", image: "kekoa2" },
        { label: "Pioneers #24 action poster", image: "kekoa3" },
        { label: "Legacy #21 navy & gold", image: "kekoa4" },
      ],
    },
  },
  {
    slug: "monee",
    title: "Monee — Budget & Expense Tracker",
    category: "Mobile Apps",
    badge: "iOS · Android · FinTech · SwiftUI · Compose · Firebase",
    summary:
      "Built a production personal-finance app for iOS and Android — fast expense/income entry, shared accounts, recurring transactions, analytics, multi-currency, exports and biometric protection.",
    stack: ["SwiftUI", "Jetpack Compose", "Firebase", "FinTech"],
    accent: "lime",
    image: "monee",
    detail: {
      role: "Mobile App Developer / Product Engineer",
      client: "Monee — live production iOS / iPadOS & Android app",
      appStoreUrl: "https://apps.apple.com/us/app/budget-expense-tracker-monee/id1617877213",
      playStoreUrl: "https://play.google.com/store/apps/details?id=app.monee",
      stackFull: [
        "Swift",
        "SwiftUI",
        "Kotlin",
        "Jetpack Compose",
        "Firebase",
        "Biometric Authentication",
        "Localisation (20+ languages)",
        "Charts / Data Visualisation",
        "CSV / Excel / PDF Export",
        "Multi-Currency",
      ],
      overview:
        "Monee is a privacy-focused personal finance app built for speed: enter an amount, choose a category, optionally add a note, and the transaction is recorded — without bank connections, ads, tracking, or subscription gates. I developed native iOS (SwiftUI) and Android (Jetpack Compose) apps with shared financial logic, covering personal and shared household budgeting, recurring transactions, custom categories, analytics, filtering, multiple currencies, exports and biometric protection.",
      problem:
        "The hard part wasn’t building another expense tracker — it was keeping the product simple while supporting accounts, sharing, recurrings, budgets, reports, search, multi-currency, exports and security. Everyday entry had to stay seconds-fast. Recurring payments also needed reliable scheduling across weekly/biweekly/monthly/yearly rules, month lengths, time zones and daylight-saving changes without duplicates or skipped periods.",
      solution:
        "I centred the product on Record → Understand → Improve, with a minimal Amount → Category → Optional Note → Done loop. Feature depth lives behind that loop. Native UIs stay platform-appropriate while a shared domain model and Firebase sync keep iOS and Android financially consistent for personal and collaborative accounts.",
      featureGroups: [
        {
          title: "Core product features",
          items: [
            "Native iOS / iPadOS and Android applications",
            "Fast expense and income entry",
            "Unlimited transactions and financial accounts",
            "Shared household / couple / group finances with realtime sync",
            "Recurring expenses and income engine",
            "Unlimited custom categories",
            "Financial analytics and monthly cash-flow overview",
            "Advanced transaction filtering and search",
            "Multiple currencies worldwide",
            "CSV / Excel / PDF export",
            "Face ID / Touch ID / passcode protection",
            "Custom financial month start and previous-balance carry-over",
            "20+ language support",
            "No mandatory registration, ads or tracking",
          ],
        },
      ],
      contributionIntro:
        "I developed Monee as a production-grade personal finance application across iOS and Android — domain modelling, native UI, Firebase sync, financial calculations and production hardening — with special focus on recurring transactions, collaborative accounts, privacy and keeping entry extremely fast.",
      contributions: [
        {
          title: "Native iOS (SwiftUI)",
          items: [
            "Built the iPhone/iPad experience for transactions, accounts, categories, charts, filtering, recurrings, shared finances, export, settings and biometric security.",
          ],
        },
        {
          title: "Native Android (Jetpack Compose)",
          items: [
            "Implemented Android with Compose so interaction patterns feel native while financial rules match the iOS product.",
          ],
        },
        {
          title: "Fast transaction entry",
          items: [
            "Designed the primary flow around Amount → Category → Optional Note → Done so everyday purchases stay frictionless.",
          ],
        },
        {
          title: "Multi-account & shared finances",
          items: [
            "Supported unlimited personal/household/business-style accounts plus invite-based shared budgeting with Firebase-backed sync across users and devices.",
          ],
        },
        {
          title: "Recurring transaction engine",
          items: [
            "Built reliable scheduling for rent, salary, utilities and subscriptions across period boundaries, time zones and month-length edge cases.",
          ],
        },
        {
          title: "Analytics, filters & multi-currency",
          items: [
            "Turned raw transactions into category aggregates, income vs expense views and filtered insights, with locale-aware currency formatting.",
          ],
        },
        {
          title: "Exports, security & localisation",
          items: [
            "Added CSV/Excel/PDF export, biometric/passcode locks, configurable month starts and UI that tolerates 20+ languages and varying text widths.",
          ],
        },
        {
          title: "Production hardening",
          items: [
            "Focused on sync concurrency, offline behaviour, duplicate prevention, device differences and the real-world date issues that only show up after sustained use.",
          ],
        },
      ],
      highlights: [
        "Shipped a live multi-platform FinTech product on the App Store and Google Play.",
        "Kept transaction entry seconds-fast while supporting sharing, recurrings, analytics and exports.",
        "Maintained consistent financial logic across SwiftUI and Jetpack Compose with Firebase sync.",
        "Hardened recurring schedules, collaborative accounts and privacy-first product architecture.",
      ],
      skills: [
        "Swift",
        "SwiftUI",
        "Kotlin",
        "Jetpack Compose",
        "Firebase",
        "iOS Development",
        "Android Development",
        "FinTech",
        "Realtime Sync",
        "Data Visualisation",
        "Recurring Transactions",
        "Localisation",
        "Biometric Authentication",
        "Multi-Currency",
        "Production App Maintenance",
      ],
      results:
        "Monee is a live consumer finance product on both major mobile stores — publicly cited at 50K+ Play installs / ~4.7 rating and strong App Store ratings, with 200,000+ total downloads and 20+ languages — demonstrating real multi-platform usage at meaningful scale.",
    },
  },
  {
    slug: "swipr-photoclean",
    title: "Swipr / PhotoClean — Smart Photo Cleaner",
    category: "Mobile Apps",
    badge: "iOS · Android · Photo Utility · Privacy-Focused",
    summary:
      "Built a privacy-focused iOS and Android photo-cleaning app that helps users reclaim storage through duplicate detection, bulk swipe cleanup, blurry-photo analysis, compression and biometric-protected private storage.",
    stack: ["iOS", "Android", "Photo Processing", "Biometrics"],
    accent: "sky",
    image: "swipr",
    detail: {
      role: "Mobile App Developer",
      client: "Swipr / PhotoClean — live on App Store & Google Play",
      appStoreUrl: "https://apps.apple.com/us/app/swipr-photo-cleaner/id6756620076",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mobile.pablo.swipr",
      stackFull: [
        "iOS Development",
        "Android Development",
        "On-device Photo Processing",
        "Duplicate / Similar Detection",
        "Photo & Video Compression",
        "Biometric Authentication",
        "Private Vault Storage",
        "Offline-First Mobile UX",
        "Storage Analytics",
      ],
      overview:
        "I built Swipr, now released as PhotoClean — a cross-platform photo management app that helps users quickly reclaim device storage and organise large photo libraries. Photos are processed locally with intuitive swipe and batch-cleaning workflows for duplicates, similar/burst sequences, blurry images, screenshots and unnecessary videos, while keeping the experience fast and privacy-focused.",
      problem:
        "Large camera rolls are painful to clean. Finding duplicates, burst shots, blurry images and forgotten screenshots by hand is slow, and many cleaner apps feel invasive or push cloud uploads. Users needed a visual, efficient way to reclaim space without giving up privacy.",
      solution:
        "I designed swipe-first and batch cleanup flows around local processing: detect duplicates and similar photos, surface blurry shots, compress media, browse by Time Capsule (date/location), protect sensitive photos in a biometric vault, and show clear storage-savings analytics — turning gallery cleanup into a simple, visual workflow on both iOS and Android.",
      featureGroups: [
        {
          title: "Core features",
          items: [
            "Duplicate finder",
            "Similar / burst detection",
            "Bulk swipe cleanup",
            "Photo & video compression",
            "Blurry photo detection",
            "Time Capsule browsing by date/location",
            "Private vault with biometrics",
            "Storage-savings analytics",
            "Cleanup reminders",
            "System light/dark themes",
            "Offline / on-device processing",
            "iOS & Android production releases",
          ],
        },
      ],
      contributionIntro:
        "I developed the production mobile app end to end — cleanup workflows, local detection features, compression, vault security, analytics and cross-platform release.",
      contributions: [
        {
          title: "Cleanup workflows",
          items: [
            "Built swipe and batch-cleaning flows so users can review and remove clutter quickly instead of hunting through the camera roll.",
          ],
        },
        {
          title: "Detection & compression",
          items: [
            "Implemented duplicate/similar/burst detection, blurry-photo analysis and photo/video compression to reclaim storage with clear savings feedback.",
          ],
        },
        {
          title: "Organisation & privacy",
          items: [
            "Added Time Capsule browsing by date/location plus a biometric-protected private vault for sensitive media, with local processing as the default.",
          ],
        },
        {
          title: "Production delivery",
          items: [
            "Shipped on both the Apple App Store and Google Play with themes, reminders and storage analytics for ongoing use.",
          ],
        },
      ],
      highlights: [
        "Shipped a live cross-platform photo cleaner on App Store and Google Play.",
        "Turned tedious gallery cleanup into swipe/batch workflows with on-device processing.",
        "Combined duplicate detection, compression, blur analysis and a biometric private vault in one product.",
      ],
      skills: [
        "iOS Development",
        "Android Development",
        "Mobile App Development",
        "Photo & Video Utilities",
        "On-device Processing",
        "Duplicate Detection",
        "Biometric Security",
        "Storage Optimisation",
        "Offline-First UX",
      ],
      results:
        "A production mobile app that helps users reclaim device storage and organise large libraries through a fast, visual, privacy-focused cleaning experience on iOS and Android.",
    },
  },
  {
    slug: "wrp-elevation-chart",
    title: "WRPElevationChart — GPS Track & Elevation Viewer",
    category: "Mobile Apps",
    badge: "GPS Utility · Elevation Charts · Android",
    summary:
      "A lightweight niche GPS utility that turns GPX, FIT, TCX and KML tracks into clear 2D/3D elevation charts and map views for cyclists, hikers and trail runners — no accounts, no clutter.",
    stack: ["Android", "GPS / GPX", "FIT / TCX", "3D Charts"],
    accent: "cyan",
    image: "wrpelevation",
    detail: {
      role: "Mobile App Developer",
      client: "WRPElevationChart / WRP Soft — live Google Play utility (5K+ downloads)",
      playStoreUrl: "https://play.google.com/store/apps/details?id=de.wrpsoft.wrpelevationchartmaker",
      stackFull: [
        "Android",
        "GPX / TCX / KML / KMZ Parsing",
        "Garmin FIT Support",
        "2D & 3D Elevation Charts",
        "Map View (OSM / Mapsforge)",
        "File Browser & Share Intents",
        "FIT → GPX / TCX / CSV Conversion",
        "Offline-Friendly Local Files",
      ],
      overview:
        "WRPElevationChart is a simple, focused GPS viewer built for athletes who already record rides and hikes elsewhere. Instead of being another full logging suite, it specialises in bringing tracks to life: import routes from storage, email or messenger, render interactive elevation profiles (including 3D), sync the chart with a map view, convert FIT activities for apps that don’t support FIT natively, and share clean chart screenshots or GPX exports.",
      problem:
        "Cyclists, MTB riders and hikers often end up with GPX/FIT/TCX files scattered across devices and apps. Flat line charts hide climb character, few Android tools convert FIT cleanly, and heavy GPS suites bury basic “open this track and understand the terrain” behind accounts and feature bloat.",
      solution:
        "I built (and maintain as) a deliberately lightweight niche utility: open the track, see the elevation, explore it in 3D, jump between chart and map, convert formats when needed, and share — with no tracking, no accounts and a UI optimised for fast smartphone use.",
      featureGroups: [
        {
          title: "Core capabilities",
          items: [
            "Import GPX, TCX, KML/KMZ and Garmin FIT files",
            "2D elevation profiles with distance and climb metrics",
            "Interactive 3D elevation charts (rotate / zoom into climbs)",
            "Synchronised map view for track context",
            "FIT conversion to GPX / TCX / CSV for other apps",
            "Built-in browser for local track folders",
            "Share charts and converted tracks with Wahoo, Garmin Connect, Locus Map and more",
            "Metric / imperial units and Material3-oriented Android UX",
            "No accounts, no ads-driven clutter — local file workflow",
          ],
        },
      ],
      contributionIntro:
        "This project represents the niche-utility class of mobile work: a focused GPS tool that does one job extremely well for outdoor athletes and complementary apps.",
      contributions: [
        {
          title: "Track parsing & visualisation",
          items: [
            "Implemented efficient parsing and rendering for multi-format GPS tracks with elevation profiles tuned for long tours and steep climbs.",
          ],
        },
        {
          title: "3D elevation experience",
          items: [
            "Added interactive 3D charting so riders can inspect peaks, valleys and gradients from multiple angles instead of flat profiles alone.",
          ],
        },
        {
          title: "Inter-app GPS workflow",
          items: [
            "Built share/convert paths so FIT activities can become GPX for apps that lack native FIT support, acting as a bridge utility in the Android GPS ecosystem.",
          ],
        },
        {
          title: "Simple production UX",
          items: [
            "Kept the product intentionally lean — portrait-first smartphone UI, local files, optional map tiles — so opening and understanding a track stays fast.",
          ],
        },
      ],
      highlights: [
        "Shipped a live niche GPS utility on Google Play focused on elevation visualisation rather than full tracking suites.",
        "Supports GPX, FIT, TCX and KML with 2D/3D charts and synced map views for cycling and hiking analysis.",
        "Acts as a format-bridge helper (especially FIT → GPX) for popular outdoor apps.",
      ],
      skills: [
        "Android Development",
        "GPS / GIS Utilities",
        "GPX / FIT / TCX Parsing",
        "Data Visualisation",
        "3D Charts",
        "File Sharing Intents",
        "Niche Product Design",
        "Offline-Friendly Mobile UX",
      ],
      results:
        "A production Android utility (5K+ Play downloads) that helps athletes visualise and share GPS elevation data without accounts or bloated feature sets — an example of focused niche mobile tooling.",
    },
  },
  {
    slug: "doyobest",
    title: "DoyoBest — Personalized Gifts eCommerce",
    category: "eCommerce",
    badge: "eCommerce · Shopify · Personalization · UI/UX",
    summary:
      "Built a Shopify storefront for personalized gifts and custom home décor — recipient-led browsing, occasion merchandising, promotional flows and a conversion-focused shopping experience at doyobest.com.",
    stack: ["Shopify", "Liquid", "Theme UX", "eCommerce"],
    accent: "ember",
    image: "doyobest",
    url: "https://doyobest.com/",
    detail: {
      role: "Full-Stack / Shopify Developer",
      client: "DoyoBest — live personalized gifts store",
      liveUrl: "https://doyobest.com/",
      stackFull: [
        "Shopify",
        "Liquid / Theme Customisation",
        "HTML / CSS / JavaScript",
        "Responsive Storefront UX",
        "Collections & Merchandising",
        "Promotions & Discount Codes",
        "Checkout & Payment Integrations",
        "Gift Finder / Recipient Navigation",
      ],
      overview:
        "DoyoBest is a live Shopify storefront focused on personalized gifts and custom home décor for occasions like birthdays, Christmas, Valentine’s Day and everyday “for someone special” shopping. The catalogue spans home & living, drinkware, clothing & jewelry, accessories and sports & outdoors, organised so shoppers can browse by recipient, occasion and interest rather than hunting through a flat product dump.",
      problem:
        "Personalized-gift shoppers usually start with a person or moment (“for Dad”, “for couples”), not a SKU. Generic gift stores bury that intent under dense catalogues, weak discovery and checkout friction — especially when promotions, new arrivals and best-sellers all compete for attention.",
      solution:
        "I shaped the storefront around recipient and occasion discovery, clear merchandising modules (best sellers, new arrivals, gift finder), promotional messaging (e.g. multi-buy discount codes) and a clean path from browse → product → cart → checkout with modern payment options.",
      featureGroups: [
        {
          title: "Storefront & merchandising",
          items: [
            "Recipient-led shopping (Dad, Mom, Grandpa, Grandma, couples, friends)",
            "Occasion and interest navigation",
            "Best sellers and new arrival modules",
            "Gift Finder entry point",
            "Category coverage across home décor, drinkware, apparel, accessories and outdoors",
            "Promo bar and discount-code driven campaigns",
            "Order tracking and customer help/policy pages",
            "Multi-gateway checkout (Visa, PayPal, Apple Pay, Google Pay, Shop Pay and more)",
          ],
        },
      ],
      contributionIntro:
        "I worked on the Shopify storefront experience — theme structure, merchandising UX, promotional presentation and conversion-oriented shopping flows for a live personalized-gifts brand.",
      contributions: [
        {
          title: "Discovery architecture",
          items: [
            "Organised browsing around who the gift is for and when it’s needed, so shoppers reach relevant products faster.",
          ],
        },
        {
          title: "Shopify theme & UX",
          items: [
            "Customised the theme for promotional storytelling, collection highlighting and mobile-friendly gift shopping.",
          ],
        },
        {
          title: "Conversion & trust",
          items: [
            "Supported clear CTAs, promo incentives, reviews/track-order entry points and polished checkout payment options.",
          ],
        },
        {
          title: "Production storefront",
          items: [
            "Delivered a live commerce site at doyobest.com ready for ongoing catalogue and campaign updates.",
          ],
        },
      ],
      highlights: [
        "Launched a production Shopify gifts storefront focused on personalized products and occasion shopping.",
        "Built recipient- and occasion-first navigation instead of catalogue-only browsing.",
        "Supported promotions, merchandising modules and modern checkout payment options.",
      ],
      skills: [
        "Shopify",
        "Liquid",
        "eCommerce UX",
        "Merchandising",
        "Theme Customisation",
        "Responsive Web Design",
        "Conversion Optimisation",
        "Personalized Commerce",
      ],
      results:
        "A live personalized-gifts eCommerce platform at doyobest.com that helps shoppers find custom presents by recipient and occasion with a clean, promotion-ready shopping experience.",
    },
  },
  {
    slug: "joymade",
    title: "JOYMADE — Personalized Gifts Store",
    category: "eCommerce",
    badge: "eCommerce · Shopify · Gifting · Multi-Currency",
    summary:
      "Built a Shopify storefront for personalized gifts — apparel, drinkware, home décor and accessories — with recipient/occasion navigation, seasonal campaigns and international checkout at joymade.co.",
    stack: ["Shopify", "Liquid", "Merchandising", "Multi-Currency"],
    accent: "lime",
    image: "joymade",
    url: "https://joymade.co/",
    detail: {
      role: "Full-Stack / Shopify Developer",
      client: "JOYMADE — live personalized gifts storefront",
      liveUrl: "https://joymade.co/",
      stackFull: [
        "Shopify",
        "Liquid / Theme Customisation",
        "HTML / CSS / JavaScript",
        "Collections & Merchandising",
        "Recipient & Occasion Navigation",
        "Promotions & Discount Codes",
        "Multi-Currency Markets",
        "Checkout / Accelerated Payments",
        "Customer Accounts & Rewards",
      ],
      overview:
        "JOYMADE is a live Shopify storefront built around personalized gifts made with joy — custom apparel, accessories, drinkware, home & kitchen pieces and seasonal décor. Shoppers can browse by product type, recipient (her/him/couples/kids) and occasion (anniversary, graduation, Father’s Day, Christmas and more), with promotional campaigns and trending search support for gift intent.",
      problem:
        "Gift shoppers rarely start with a product SKU. They start with a person and a moment. Personalized catalogues get unwieldy fast across apparel, drinkware and home goods — so discovery, seasonal campaigns and international checkout have to stay clear or conversion drops.",
      solution:
        "I structured the storefront around gift intent: deep product taxonomy, recipient and occasion menus, promotional messaging, popular/trending search cues and multi-market currency support — so shoppers can move from “gift for husband / anniversary” to a personalized product and checkout without friction.",
      featureGroups: [
        {
          title: "Storefront capabilities",
          items: [
            "Product catalogue across apparel, accessories, drinkware, home & kitchen and Christmas décor",
            "Recipient navigation (Mom, Dad, wife, husband, couples, best friends, kids & babies)",
            "Occasion shopping (anniversary, graduation, Father’s Day, Valentine’s, Christmas, back to school and more)",
            "Seasonal campaign modules (e.g. Back to School / Summer Vibes)",
            "Promotional discount flows (Buy 2+ get 10% — code JM2)",
            "Trending search and popular categories",
            "Customer accounts, login/register and rewards entry",
            "Multi-currency storefront (USD and many international markets)",
            "Modern payment options (Shop Pay, PayPal, Apple Pay, Google Pay, cards and more)",
          ],
        },
      ],
      contributionIntro:
        "I worked on the Shopify commerce experience — theme/UX structure, merchandising navigation, campaign presentation and conversion-oriented shopping flows for a live personalized-gifts brand.",
      contributions: [
        {
          title: "Gift discovery architecture",
          items: [
            "Organised browsing by product, recipient and occasion so gift intent maps cleanly to collections and SKUs.",
          ],
        },
        {
          title: "Shopify theme & campaigns",
          items: [
            "Customised storefront modules for promotions, seasonal heroes and popular product surfacing.",
          ],
        },
        {
          title: "International commerce UX",
          items: [
            "Supported multi-currency market presentation and accelerated checkout payment options for global shoppers.",
          ],
        },
        {
          title: "Production delivery",
          items: [
            "Delivered a live storefront at joymade.co ready for ongoing catalogue, campaign and rewards updates.",
          ],
        },
      ],
      highlights: [
        "Launched a production Shopify personalized-gifts storefront at joymade.co.",
        "Built recipient- and occasion-first navigation across a deep product catalogue.",
        "Supported seasonal campaigns, promotions and multi-currency international checkout.",
      ],
      skills: [
        "Shopify",
        "Liquid",
        "eCommerce UX",
        "Merchandising",
        "Theme Customisation",
        "Multi-Currency Commerce",
        "Conversion Optimisation",
        "Personalized Gifting",
      ],
      results:
        "A live personalized-gifts commerce platform that helps shoppers find custom presents by person and occasion — with promotions, international markets and a polished Shopify checkout experience.",
    },
  },
  {
    slug: "marie-gems",
    title: "Marie Gems — Ready-to-Press DTF Transfers",
    category: "eCommerce",
    badge: "eCommerce · Shopify · DTF · Custom Uploads",
    summary:
      "Built a Shopify storefront for ready-to-press DTF transfers — individual sizes, curated bundles and custom artwork uploads — so makers can shop designs without building gang sheets.",
    stack: ["Shopify", "Liquid", "Product UX", "Custom Upload"],
    accent: "violet",
    image: "mariegems",
    url: "https://mariegems.com/",
    detail: {
      role: "Full-Stack / Shopify Developer",
      client: "Marie Gems — Wichita, KS DTF transfer shop (500+ orders shipped)",
      liveUrl: "https://mariegems.com/",
      stackFull: [
        "Shopify",
        "Liquid / Theme Customisation",
        "Responsive Storefront UX",
        "Catalog & Bundle Merchandising",
        "Custom Design Upload Flow",
        "Guides (Size / Pressing)",
        "FAQ & Trust Content",
        "Contact / Custom Request Forms",
      ],
      overview:
        "Marie Gems is a live Shopify storefront selling physical ready-to-press DTF transfers from a small studio in Wichita, KS. Shoppers browse seasonal and niche design catalogs, pick sizes (4\"–12\"), order singles or curated 5-design bundles, or upload their own artwork — without creating gang sheets. The site educates with a clear three-step flow (pick → ship → press), pressing specs (320°F / 15s / cold peel), FAQs, reviews and custom-request support.",
      problem:
        "Many DTF shops push gang-sheet workflows that intimidate casual makers and one-off order sellers. Buyers need individual transfers, clear sizing, fast education on how to press, and an easy path for custom artwork — not a warehouse-style file dump.",
      solution:
        "I structured the storefront around individual ready-to-press transfers: catalog shopping by theme, size selection without gang sheets, bundle pricing for restockers, custom upload, educational guides, and conversion content that proves the product is a physical transfer — not a digital download.",
      featureGroups: [
        {
          title: "Storefront capabilities",
          items: [
            "Ready-to-press DTF catalog (holidays, seasons, school, sports, faith, humor and more)",
            "Individual transfer sizes: 4\", 6\", 8\", 10\", 12\"",
            "No gang sheet required for singles",
            "Curated 5-design bundles priced for shop restocks",
            "Custom upload for customer artwork",
            "How-it-works education and pressing instructions",
            "Size guide and pressing guide content",
            "Customer reviews and FAQs",
            "Custom design / order question contact flow",
            "Local Wichita studio brand positioning with fast shipping messaging",
          ],
        },
      ],
      contributionIntro:
        "I worked on the Shopify commerce experience — product discovery, education-led conversion, bundle merchandising and custom-upload pathways for a specialty DTF brand.",
      contributions: [
        {
          title: "Product discovery UX",
          items: [
            "Organised catalog and weekly featured designs so makers can find niche transfers quickly and buy by size.",
          ],
        },
        {
          title: "Education-led conversion",
          items: [
            "Built clear pick → ship → press storytelling with temperature/time/peel specs so first-time buyers understand the product.",
          ],
        },
        {
          title: "Bundles & custom uploads",
          items: [
            "Supported single vs bundle pricing paths plus custom artwork upload for print-ready customer designs.",
          ],
        },
        {
          title: "Trust & support content",
          items: [
            "Integrated guides, FAQs, reviews and a custom-request form with one-business-day response expectations.",
          ],
        },
      ],
      highlights: [
        "Launched a production Shopify DTF storefront focused on individual transfers instead of gang sheets.",
        "Combined catalog shopping, curated bundles and custom uploads in one maker-friendly flow.",
        "Used education, pressing specs and reviews to reduce first-order friction for heat-press users.",
      ],
      skills: [
        "Shopify",
        "Liquid",
        "eCommerce UX",
        "Specialty Product Merchandising",
        "Custom Upload Flows",
        "Content-led Conversion",
        "Theme Customisation",
        "Maker / Craft Commerce",
      ],
      results:
        "A live specialty commerce site at mariegems.com helping makers order ready-to-press DTF transfers by design and size — with bundles, custom uploads and clear pressing guidance from a small Wichita studio.",
    },
  },
  {
    slug: "kofi-clothing",
    title: "Kofi Clothing — Made-to-Order Embroidery Studio",
    category: "eCommerce",
    badge: "eCommerce · Custom Embroidery · Made-to-Order",
    summary:
      "Built a boutique storefront for hand-embroidered wall art, apparel and hats — made-to-order personalization, free design proofs and collection shopping from a Doral, Florida studio.",
    stack: ["Custom Storefront", "Product Catalog", "Personalization UX", "Cart"],
    accent: "ember",
    image: "kofi",
    url: "https://koficlothing.us/",
    detail: {
      role: "Full-Stack / Storefront Developer",
      client: "KOFI CLOTHING LLC — Doral, FL embroidery studio",
      liveUrl: "https://koficlothing.us/",
      stackFull: [
        "Custom HTML / CSS / JavaScript Storefront",
        "Product Catalog Architecture",
        "Collections & Merchandising",
        "Cart / Checkout UX",
        "Personalization Options (names, dates, logos)",
        "Responsive Design",
        "Studio Brand Storytelling",
        "Contact & Custom Request Flows",
      ],
      overview:
        "Kofi Clothing is a family-run embroidery studio in Doral, Florida selling hand-embroidered wall art hoops, custom apparel and personalized hats — every piece sketched, stitched and finished to order. The storefront presents collections, featured products, trust messaging (free U.S. shipping $35+, free design proofs, personalization, Made in Florida), customer quotes, newsletter signup and direct contact for custom work.",
      problem:
        "Made-to-order embroidery needs more than a generic product grid. Shoppers want to understand craft quality, personalization options, lead times and proofing — while browsing wall art, apparel and hats as distinct collections without feeling like mass marketplace inventory.",
      solution:
        "I built a boutique commerce experience centered on studio storytelling and clear shopping paths: shop by collection, feature best sellers, highlight free proofs and personalization, and make custom/rush inquiries easy through a real-person contact flow.",
      featureGroups: [
        {
          title: "Storefront capabilities",
          items: [
            "Collections for embroidered wall art, apparel and hats",
            "Featured / best-seller product merchandising",
            "Made-to-order personalization (names, dates, custom logos)",
            "Free digital design proof messaging before production",
            "Trust strip: free shipping threshold, proofs, personalization, Florida-made",
            "Customer testimonials and keepsake-focused storytelling",
            "Newsletter signup for collection drops and holiday cutoffs",
            "Contact flow for custom designs, sizing, logos and rush production",
            "Studio location and hours (Doral, FL)",
            "Links to Etsy / Facebook social presence",
          ],
        },
      ],
      contributionIntro:
        "I developed the boutique storefront experience — catalog structure, collection browsing, personalization messaging and conversion content for a made-to-order embroidery brand.",
      contributions: [
        {
          title: "Catalog & collections UX",
          items: [
            "Organised wall art, apparel and hats into clear shop-by-collection paths with featured pieces for discovery.",
          ],
        },
        {
          title: "Made-to-order personalization",
          items: [
            "Surfaced free design proofs, personalization options and lead-time expectations so custom orders feel low-risk.",
          ],
        },
        {
          title: "Studio brand storytelling",
          items: [
            "Built about/trust content around hand embroidery in Doral — family-owned, no mass production, free proofs from a real designer.",
          ],
        },
        {
          title: "Conversion & support",
          items: [
            "Added testimonials, newsletter capture and a direct contact path for custom logos, school orders and rush requests.",
          ],
        },
      ],
      highlights: [
        "Launched a boutique made-to-order embroidery storefront at koficlothing.us.",
        "Combined collection shopping with personalization and free design-proof messaging.",
        "Positioned a small Doral studio brand with clear trust signals and custom-order support.",
      ],
      skills: [
        "eCommerce UX",
        "Custom Storefront Development",
        "Product Catalog Design",
        "Personalization Commerce",
        "Brand Storytelling",
        "Responsive Web Design",
        "Conversion Content",
        "Boutique Retail",
      ],
      results:
        "A live made-to-order embroidery commerce site that helps customers shop hand-stitched wall art, apparel and hats — with personalization, free proofs and a clear path to custom studio requests.",
    },
  },
  {
    slug: "fire-branding",
    title: "FIRE — Food Brand Identity",
    category: "Logo & Graphic Design",
    badge: "Brand Identity · Logo · Packaging · Mockups",
    summary:
      "Bold red-and-yellow brand system for FIRE — logo with flame mark, tagline lockup, and applications across apparel, takeout packaging, staff apron and food-kiosk storefront.",
    stack: ["Logo Design", "Brand Identity", "Packaging", "Mockups"],
    accent: "ember",
    image: "fire",
    detail: {
      role: "Brand / Graphic Designer",
      client: "FIRE — food & beverage brand identity",
      stackFull: [
        "Logo Design",
        "Brand Identity System",
        "Typography & Colour Direction",
        "Packaging Design",
        "Apparel & Uniform Graphics",
        "Environmental / Storefront Mockups",
        "Visual Merchandising",
      ],
      overview:
        "FIRE is a high-energy food brand built around the line “Fire up your tastebuds.” I designed a compact identity system: a bold white FIRE wordmark with a flame built into the letter I, a yellow tagline lockup, and a red/yellow palette applied consistently across merch, takeout packaging, staff apron and a kiosk / container storefront.",
      problem:
        "Fast-casual food brands need identity that reads hot, hungry and memorable in seconds — on a shirt, a takeout box and a street-side sign. Generic burger logos don’t travel well across print and physical spaces; weak systems look different on every surface.",
      solution:
        "I built a simple, high-contrast system: deep red + bright yellow, a flame-integrated wordmark, and one tagline. Then I proved the brand in context — tee, dual-colour takeout cartons, apron and a yellow/red food container with menu board and A-frame — so the identity feels ready for real service environments.",
      featureGroups: [
        {
          title: "Core identity",
          items: [
            "FIRE wordmark with flame silhouette in the letter I",
            "Inner yellow/orange flame accent for heat and appetite cues",
            "Tagline lockup: Fire up your tastebuds",
            "High-contrast red / yellow / white colour system",
          ],
        },
        {
          title: "Brand applications",
          items: [
            "Yellow apparel tee with red chest logo",
            "Red and yellow takeout carton pair with mirrored logo treatments",
            "Red staff apron with white logo on yellow backdrop",
            "Yellow food-kiosk / container storefront with red fascia, menu board and sandwich board",
          ],
        },
      ],
      contributionIntro:
        "I owned the logo concept, colour system and application mockups that show how FIRE lives on product, people and place.",
      contributions: [
        {
          title: "Logo & mark",
          items: [
            "Designed the flame-in-I wordmark so the brand name and heat metaphor read as one lockup.",
          ],
        },
        {
          title: "Colour & type",
          items: [
            "Set a red/yellow/white palette and bold sans hierarchy that stays loud at thumbnail and storefront scale.",
          ],
        },
        {
          title: "Packaging & merch",
          items: [
            "Applied the system to tee, takeout boxes and apron so print-ready assets feel cohesive across soft goods and food packaging.",
          ],
        },
        {
          title: "Environmental mockups",
          items: [
            "Visualised a kiosk storefront with fascia, menu and A-frame so stakeholders can see the brand in a real service setting.",
          ],
        },
      ],
      highlights: [
        "Delivered a complete FIRE identity board: logo, tagline and multi-surface applications.",
        "Built a red/yellow system that stays consistent from apparel to packaging to storefront.",
        "Produced presentation-ready mockups for food brand pitches and client review.",
      ],
      skills: [
        "Logo Design",
        "Brand Identity",
        "Packaging Design",
        "Apparel Graphics",
        "Colour Direction",
        "Typography",
        "Mockup Presentation",
        "Food & Beverage Branding",
      ],
      results:
        "A cohesive, high-energy food brand toolkit — logo, colour, packaging and place — that sells appetite and attitude at a glance.",
    },
  },
  {
    slug: "southern-diesel",
    title: "Southern Diesel LLC — Trucking Logo",
    category: "Logo & Graphic Design",
    badge: "Logo Design · Trucking Brand · Badge Mark",
    summary:
      "Designed a royal-blue badge logo for Southern Diesel LLC in Pecos, Texas — classic semi-truck illustration inside an oval lockup with arched type and script location line.",
    stack: ["Logo Design", "Illustration", "Badge Lockup", "Typography"],
    accent: "sky",
    image: "southerndiesel",
    detail: {
      role: "Logo / Graphic Designer",
      client: "Southern Diesel LLC — Pecos, Texas",
      stackFull: [
        "Logo Design",
        "Vehicle Illustration",
        "Badge / Emblem Layout",
        "Typography & Lettering",
        "Monochrome Brand Colour",
        "Print-Ready Vector Artwork",
      ],
      overview:
        "Southern Diesel LLC needed a professional trucking identity rooted in classic American diesel culture. I designed a single-colour royal-blue emblem: a detailed semi-truck (stacks, grille, sleeper) framed in an oval, with SOUTHERN arched above, DIESEL LLC. arched below, a centered star divider, and a script “Pecos Tx.” location line under the badge.",
      problem:
        "Trucking logos have to work hard in the real world — truck doors, hats, business cards and shop signage — often in one colour. Overly complex marks fall apart at small sizes; generic fonts feel like clip art instead of a local diesel brand.",
      solution:
        "I built a balanced oval badge with the truck as the hero, arched type locked to the frame, and a clean monochrome blue treatment so the mark reproduces cleanly on vinyl, embroidery and print without losing industrial character.",
      featureGroups: [
        {
          title: "Mark structure",
          items: [
            "Front three-quarter semi-truck illustration with stacks, grille and sleeper detail",
            "Horizontal oval border framing the vehicle",
            "Arched SOUTHERN wordmark along the top curve",
            "Arched DIESEL LLC. lockup along the bottom curve",
            "Centered five-point star with flanking rules as a divider accent",
            "Script location line: Pecos Tx.",
          ],
        },
        {
          title: "Brand constraints",
          items: [
            "Single-colour royal blue on white for flexible reproduction",
            "Symmetric, badge-style composition suited to fleet and apparel use",
            "High-contrast linework that holds at thumbnail and door-size scales",
          ],
        },
      ],
      contributionIntro:
        "I owned concept, truck illustration, typography lockup and final monochrome badge art for Southern Diesel LLC.",
      contributions: [
        {
          title: "Vehicle illustration",
          items: [
            "Drew a classic tractor-unit silhouette with enough detail to feel diesel-authentic without cluttering the oval.",
          ],
        },
        {
          title: "Badge typography",
          items: [
            "Set arched company type and a script location line so name, trade and hometown read as one emblem.",
          ],
        },
        {
          title: "Production-minded colour",
          items: [
            "Delivered a one-ink blue mark ready for signage, apparel and print without multi-colour separations.",
          ],
        },
      ],
      highlights: [
        "Delivered a complete Southern Diesel LLC badge logo with truck illustration and location branding.",
        "Designed for one-colour reproduction across fleet, shop and merch applications.",
        "Balanced industrial detail with clean hierarchy for Pecos, Texas trucking identity.",
      ],
      skills: [
        "Logo Design",
        "Badge / Emblem Design",
        "Vehicle Illustration",
        "Typography",
        "Lettering",
        "Monochrome Branding",
        "Trucking / Industrial Identity",
      ],
      results:
        "A durable, classic trucking badge that presents Southern Diesel LLC as a local diesel brand — clear, reproducible and ready for real-world use in Pecos, Texas.",
    },
  },
  {
    slug: "marquis-village",
    title: "Marquis Village — Luxury Brand Identity",
    category: "Logo & Graphic Design",
    badge: "Brand Identity · Logo · Stationery · Luxury",
    summary:
      "Premium identity for Marquis Village Residential — geometric gold monogram, refined type system, and matte black / cream business cards with foil-style gold detailing.",
    stack: ["Logo Design", "Brand Identity", "Stationery", "Typography"],
    accent: "violet",
    image: "marquisvillage",
    detail: {
      role: "Brand / Graphic Designer",
      client: "Marquis Village Residential LLC — Charleston, SC",
      stackFull: [
        "Logo Design",
        "Monogram / Crest Mark",
        "Brand Identity System",
        "Typography Direction",
        "Business Card / Stationery Design",
        "Luxury Print Presentation",
        "Colour & Finish Direction",
      ],
      overview:
        "Marquis Village is positioned as a luxury residential brand. I designed a geometric “M” crest with a star sparkle, a clean MARQUIS / VILLAGE type lockup in metallic gold, and a vertical stationery system: matte black front card with centered gold mark and cream reverse with address and contact hierarchy for Charleston, SC.",
      problem:
        "Luxury residential brands need restraint — prestige without clutter. A weak monogram looks generic; overcrowded cards feel like realtor templates instead of a village-level property identity.",
      solution:
        "I built a minimal crest + type system and proved it on high-contrast stationery: black card for brand presence, cream card for information, gold as the only accent so the identity feels foil-ready and consistent across print touchpoints.",
      featureGroups: [
        {
          title: "Core identity",
          items: [
            "Geometric shield-like M monogram with four-point star accent",
            "All-caps MARQUIS wordmark with tracked VILLAGE subline",
            "Metallic gold on black / cream for a premium residential tone",
          ],
        },
        {
          title: "Stationery system",
          items: [
            "Vertical matte black business card — centered gold logo and website",
            "Vertical cream reverse — logo, name, divider, address and contact stack",
            "Clear hierarchy for company, Charleston address, phone, email and web",
            "Presentation mockup against a black / chocolate studio backdrop",
          ],
        },
      ],
      contributionIntro:
        "I owned the monogram concept, typography lockup, colour/finish direction and business-card layouts for Marquis Village.",
      contributions: [
        {
          title: "Monogram & mark",
          items: [
            "Designed a sharp, symmetrical M crest with a subtle sparkle so the brand reads as crest-like without becoming ornate.",
          ],
        },
        {
          title: "Typography system",
          items: [
            "Set a refined all-caps lockup with spacing that stays elegant at foil size and on the cream info card.",
          ],
        },
        {
          title: "Stationery layout",
          items: [
            "Split brand presence (black) and contact detail (cream) across a vertical card pair with gold as the unifying accent.",
          ],
        },
      ],
      highlights: [
        "Delivered a complete Marquis Village identity board: crest logo and dual business-card system.",
        "Built a black / cream / gold palette suited to luxury residential print.",
        "Kept hierarchy quiet and premium — strong mark, restrained type, clear contact layout.",
      ],
      skills: [
        "Logo Design",
        "Brand Identity",
        "Monogram Design",
        "Typography",
        "Stationery Design",
        "Luxury Branding",
        "Print Presentation",
        "Real Estate Identity",
      ],
      results:
        "A polished luxury residential brand toolkit — monogram, type and stationery — that presents Marquis Village as elevated, calm and print-ready.",
    },
  },
  {
    slug: "premium-logo-collection",
    title: "Premium Logo Identity Collection",
    category: "Logo & Graphic Design",
    badge: "Logo Design · Brand Marks · Foil Mockups",
    summary:
      "A six-mark identity collection — Aviation 1903, Herzog Capital, Curated Dermatology, Keas & Edward, 525 and Wright Source Group — shown as foil and hangtag applications on textured print surfaces.",
    stack: ["Logo Design", "Monograms", "Foil Mockups", "Typography"],
    accent: "cyan",
    image: "logocollection",
    detail: {
      role: "Logo / Brand Designer",
      client: "Multi-brand identity collection — logos & print mockups",
      stackFull: [
        "Logo Design",
        "Monogram & Wordmark Systems",
        "Custom Typography",
        "Foil / Emboss Presentation",
        "Hangtag & Packaging Mockups",
        "Luxury & Corporate Branding",
      ],
      overview:
        "A curated set of six logo identities spanning aviation heritage, finance, clinical aesthetics, luxury fashion, artisanal apparel and industrial services. Each mark is designed for premium reproduction — gold and silver foil, embossed cardstock, gift boxes and fabric hangtags — so the brands feel tangible, not just digital.",
      problem:
        "Portfolio logos often look flat on white. Clients need to see how marks hold up as foil stamps, hangtags and packaging — and each category (finance vs. dermatology vs. fashion) needs a distinct voice without losing craft quality.",
      solution:
        "I designed six category-true identities and presented them in physical mockups: textured foils, black gift-box stamping and fabric tags. The grid shows range — from vintage aviation wings to clinical monograms to geometric industrial hex marks — while keeping a consistent premium finish language.",
      featureGroups: [
        {
          title: "Identity set",
          items: [
            "Aviation 1903 — winged bar mark, gold foil on light textured card",
            "Herzog Capital — script HC monogram + wordmark, silver on charcoal texture",
            "Curated Dermatology & Aesthetics — interlocking C monogram, gold on cream card",
            "Keas & Edward — crowned ampersand lockup, gold foil on matte black gift box",
            "525 — intertwined numeric mark on artisanal hangtag with linen fabric",
            "Wright Source Group — hexagonal segment mark, metallic ink on grommeted hangtag",
          ],
        },
        {
          title: "Craft & finish",
          items: [
            "Foil and emboss treatments for luxury stationery cues",
            "Hangtag and packaging applications for soft-goods and industrial brands",
            "Minimalist mark systems tuned to each sector’s tone",
          ],
        },
      ],
      contributionIntro:
        "I owned concept, mark design, typography and physical mockup presentation across the full six-brand set.",
      contributions: [
        {
          title: "Category-fit marks",
          items: [
            "Built distinct logo languages for aviation, capital, aesthetics, fashion, apparel and industrial services.",
          ],
        },
        {
          title: "Monogram & type craft",
          items: [
            "Combined script monograms, geometric icons and refined wordmarks so each brand reads clearly at foil size.",
          ],
        },
        {
          title: "Application mockups",
          items: [
            "Presented marks on textured cards, gift boxes and hangtags to prove print-ready premium finishes.",
          ],
        },
      ],
      highlights: [
        "Delivered a six-brand logo collection with foil and hangtag applications.",
        "Covered luxury, clinical, corporate and artisanal sectors in one cohesive craft standard.",
        "Showed how each mark performs as physical branding, not only a flat lockup.",
      ],
      skills: [
        "Logo Design",
        "Brand Identity",
        "Monogram Design",
        "Typography",
        "Foil & Print Mockups",
        "Hangtag Design",
        "Luxury Branding",
        "Corporate Identity",
      ],
      results:
        "A premium multi-brand identity board that demonstrates logo range and print-ready craft — from gold foil stationery to artisanal and industrial hangtags.",
    },
  },
  {
    slug: "logo-applications",
    title: "Logo Applications — Law, Wellness & Lifestyle",
    category: "Logo & Graphic Design",
    badge: "Logo Design · Stationery · Product Tags · Merch",
    summary:
      "Six applied brand marks — Borda Family Lawyers, Breeze & Body, Restored Vitality, Wolf & Shaw Travel, Skinovation and Olyo — shown on foil stationery, hangtags, business cards and tote merch.",
    stack: ["Logo Design", "Stationery", "Hangtags", "Merch Mockups"],
    accent: "lime",
    image: "logocollection2",
    detail: {
      role: "Logo / Brand Designer",
      client: "Multi-brand identity applications — law, wellness & lifestyle",
      stackFull: [
        "Logo Design",
        "Wordmark & Icon Systems",
        "Business Card Design",
        "Hangtag / Product Label Design",
        "Merchandise Mockups",
        "Foil & Print Finishes",
      ],
      overview:
        "A second identity application board spanning legal, wellness, travel, skincare and fashion brands. Each logo is shown in a real-world context — gold foil on navy, purple hangtags, serene wellness cards, travel tote printing, dual-tone foil cards and a geometric product tag — so the marks feel ready for client delivery.",
      problem:
        "Logos need to prove themselves off the screen. Legal brands want gravitas, wellness brands need calm, travel needs lightness, and beauty needs foil luxury — all without looking like the same template.",
      solution:
        "I designed six sector-true marks and applied them to the surfaces each brand would actually use: textured legal stationery, retail hangtags, wellness cards, a canvas tote, luxury foil business cards and a fashion hangtag.",
      featureGroups: [
        {
          title: "Identity set",
          items: [
            "Borda Family Lawyers — BFL serif lockup, gold foil on navy textured stock",
            "Breeze & Body — interlocking petal mark on purple hangtag over woven fabric",
            "Restored Vitality — serif wordmark with abstract circular icon on wellness card",
            "Wolf & Shaw Travel — wave icon + light sans lockup on white tote with teal straps",
            "Skinovation — fluid S mark with Angelica Rose foil business cards (black / white)",
            "Olyo — geometric circle-Y mark, gold on tan cardboard hangtag",
          ],
        },
        {
          title: "Application range",
          items: [
            "Foil and deboss stationery for professional services",
            "Retail hangtags for wellness and fashion soft goods",
            "Merchandise application for travel brand visibility",
            "Dual-tone luxury business cards for aesthetics / skincare",
          ],
        },
      ],
      contributionIntro:
        "I owned mark design, typography and physical application mockups across the six-brand set.",
      contributions: [
        {
          title: "Sector-fit identity",
          items: [
            "Tuned each logo’s voice for law, wellness, travel, skincare and fashion without repeating one style.",
          ],
        },
        {
          title: "Print & merch craft",
          items: [
            "Presented foil stationery, hangtags, cards and tote printing so clients see production-ready applications.",
          ],
        },
        {
          title: "Hierarchy & lockups",
          items: [
            "Built clean wordmark + icon systems that stay readable on tags, cards and fabric print.",
          ],
        },
      ],
      highlights: [
        "Delivered six applied logos across law, wellness, travel, beauty and fashion.",
        "Showed foil, hangtag, card and merch contexts in one presentation board.",
        "Kept each brand distinct while holding a consistent premium craft standard.",
      ],
      skills: [
        "Logo Design",
        "Brand Identity",
        "Typography",
        "Business Card Design",
        "Hangtag Design",
        "Merchandise Mockups",
        "Foil Presentation",
        "Lifestyle Branding",
      ],
      results:
        "A versatile identity applications board that proves logos in the contexts clients care about — stationery, tags, cards and merch.",
    },
  },
  {
    slug: "aesthetics-beaverton",
    title: "Aesthetics Beaverton — Brand Identity",
    category: "Logo & Graphic Design",
    badge: "Brand Identity · Monogram · Stationery · Signage",
    summary:
      "Elegant AB monogram with botanical accent for Aesthetics Beaverton — navy primary lockup, gold-foil black business cards and a backlit lavender exterior sign mockup.",
    stack: ["Logo Design", "Monogram", "Stationery", "Signage"],
    accent: "violet",
    image: "aestheticsbeaverton",
    detail: {
      role: "Brand / Graphic Designer",
      client: "Aesthetics Beaverton — aesthetics / beauty studio identity",
      stackFull: [
        "Logo Design",
        "Script Monogram",
        "Brand Identity System",
        "Typography Direction",
        "Business Card / Stationery Design",
        "Exterior Signage Mockup",
        "Foil & Colour Application",
      ],
      overview:
        "Aesthetics Beaverton needed a calm, premium clinic identity. I designed an intertwined AB script monogram with a delicate leaf branch, paired with serif AESTHETICS / BEAVERTON typography in deep navy — then applied the system to matte black gold-foil business cards and a glowing lavender hanging sign on a brick facade.",
      problem:
        "Aesthetics brands often default to generic script logos that don’t travel from card to storefront. The mark needed to feel soft and botanical without losing legibility as a foil monogram or illuminated sign.",
      solution:
        "I built a monogram-first system: AB as the hero for cards and signage, with a restrained serif wordmark for full lockups. Colour shifts by surface — navy on white for brand sheets, gold on black for stationery, warm gold glow on lavender for night signage — while keeping the same mark structure.",
      featureGroups: [
        {
          title: "Core identity",
          items: [
            "Intertwined AB script monogram with botanical leaf accent",
            "Serif AESTHETICS wordmark with tracked BEAVERTON subline",
            "Primary navy-on-white brand lockup",
          ],
        },
        {
          title: "Applications",
          items: [
            "Matte black business cards with metallic gold/copper foil monogram and full name",
            "Premium card stack presentation in dark packaging",
            "Backlit lavender exterior hanging sign with illuminated gold logo on brick facade",
          ],
        },
      ],
      contributionIntro:
        "I owned the monogram concept, typography, colour applications and mockups for stationery and exterior signage.",
      contributions: [
        {
          title: "Monogram craft",
          items: [
            "Designed a soft AB lockup with a leaf detail that feels clinical-elegant without clutter.",
          ],
        },
        {
          title: "Typography system",
          items: [
            "Set serif hierarchy so location and category read clearly under the monogram at print and sign scale.",
          ],
        },
        {
          title: "Touchpoint mockups",
          items: [
            "Applied the identity to foil business cards and a dusk storefront sign so stakeholders see day-to-day brand use.",
          ],
        },
      ],
      highlights: [
        "Delivered a complete Aesthetics Beaverton identity: monogram, type, cards and signage.",
        "Balanced botanical softness with premium foil and illuminated sign applications.",
        "Kept one mark consistent across navy brand sheets, black stationery and lavender outdoor light.",
      ],
      skills: [
        "Logo Design",
        "Brand Identity",
        "Monogram Design",
        "Typography",
        "Stationery Design",
        "Signage Design",
        "Luxury Branding",
        "Aesthetics / Beauty Identity",
      ],
      results:
        "A refined aesthetics studio brand system — monogram, stationery and signage — that feels calm, premium and ready for print and storefront use.",
    },
  },
  {
    slug: "galloper-world",
    title: "Galloper World — Brand Identity",
    category: "Logo & Graphic Design",
    badge: "Brand Identity · Logo · Signage · Colourways",
    summary:
      "Minimal geometric mark and two-tone wordmark for Galloper World — gold icon with charcoal/black type, shown on a storefront blade sign plus light and dark logo colourways.",
    stack: ["Logo Design", "Wordmark", "Signage", "Brand Colourways"],
    accent: "ember",
    image: "galloperworld",
    detail: {
      role: "Brand / Graphic Designer",
      client: "Galloper World — brand identity & signage",
      stackFull: [
        "Logo Design",
        "Geometric Mark Development",
        "Typography & Wordmark Hierarchy",
        "Brand Colour System",
        "Exterior Signage Mockup",
        "Light / Dark Logo Colourways",
      ],
      overview:
        "Galloper World needed a clean, premium identity that reads at storefront scale. I designed a gold geometric mark (interlocking GW / W silhouette) paired with a modern all-caps wordmark — GALLOPER in charcoal, WORLD in bold black — then proved the system on a white blade sign against stone, plus white and black logo sheets.",
      problem:
        "Corporate lifestyle brands often get either too ornate or too generic. The mark needed to stay sharp as a hanging sign while holding contrast on both light and dark backgrounds without redesigning the lockup.",
      solution:
        "I built a simple gold + charcoal/black system: one geometric icon, one two-weight wordmark, and dual colourways (dark type on white, white type on black with gold mark retained) so the brand stays consistent indoors and on the street.",
      featureGroups: [
        {
          title: "Core identity",
          items: [
            "Geometric interlocking mark in mustard gold",
            "All-caps sans GALLOPER WORLD with light/bold weight hierarchy",
            "Charcoal + black type pairing for premium contrast",
          ],
        },
        {
          title: "Applications",
          items: [
            "Square blade sign on textured stone facade with city-glass reflection context",
            "Primary lockup on white brand sheet",
            "Inverted colourway on black — white type, gold mark intact",
          ],
        },
      ],
      contributionIntro:
        "I owned mark concept, wordmark hierarchy, colourways and the storefront signage mockup.",
      contributions: [
        {
          title: "Geometric mark",
          items: [
            "Designed an abstract interlocking icon that reads as brand geometry without relying on literal illustration.",
          ],
        },
        {
          title: "Wordmark hierarchy",
          items: [
            "Set GALLOPER / WORLD as a two-tone weight system so the name stays clear at sign and thumbnail sizes.",
          ],
        },
        {
          title: "Signage & colourways",
          items: [
            "Mocked a blade sign in context and delivered light/dark logo sheets for flexible brand use.",
          ],
        },
      ],
      highlights: [
        "Delivered a complete Galloper World identity: mark, wordmark, signage and dual colourways.",
        "Kept gold as the constant accent across white and black presentations.",
        "Proved the lockup at real storefront scale on a stone facade blade sign.",
      ],
      skills: [
        "Logo Design",
        "Brand Identity",
        "Geometric Mark Design",
        "Typography",
        "Signage Design",
        "Colourway Systems",
        "Corporate Branding",
      ],
      results:
        "A minimal, premium brand system for Galloper World — geometric gold mark, clear wordmark hierarchy and signage-ready applications in light and dark.",
    },
  },
  {
    slug: "castle-soap",
    title: "Castle Soap Company — Brand Identity",
    category: "Logo & Graphic Design",
    badge: "Brand Identity · Logo · Stationery · Merch",
    summary:
      "Earthy forest-green identity for Castle Soap Company — floral mandala mark, serif/sans lockup, business card on stone and cream logo tote mockup.",
    stack: ["Logo Design", "Packaging Identity", "Stationery", "Merch"],
    accent: "lime",
    image: "castlesoap",
    detail: {
      role: "Brand / Graphic Designer",
      client: "Castle Soap Company — artisanal soap / natural goods identity",
      stackFull: [
        "Logo Design",
        "Floral / Mandala Mark",
        "Typography Direction",
        "Brand Colour System",
        "Business Card Design",
        "Merchandise Mockups",
        "Natural / Artisanal Branding",
      ],
      overview:
        "Castle Soap Company needed an artisanal identity rooted in nature. I designed a symmetrical leaf-mandala emblem with a bold serif CASTLE wordmark and tracked SOAP COMPANY subline in cream on forest green — then applied it to a sunlit business card on river stones and a dark green tote for tactile, eco-premium presentation.",
      problem:
        "Natural soap brands often look handmade-but-messy or overly spa-generic. The mark needed botanical structure, premium hierarchy and surfaces that feel organic without sacrificing clarity on cards and soft goods.",
      solution:
        "I built a tight green/cream system around one floral emblem and a two-tier type lockup, then showed it on natural materials — stone and fabric — so the brand reads as artisanal luxury rather than mass CPG.",
      featureGroups: [
        {
          title: "Core identity",
          items: [
            "Eight-leaf mandala emblem with centered geometric anchor",
            "Bold serif CASTLE + spaced sans SOAP COMPANY lockup",
            "Forest green and cream colour pairing for organic premium tone",
          ],
        },
        {
          title: "Applications",
          items: [
            "Forest-green business card with cream logo, staged on speckled river stones",
            "Primary brand sheet — cream mark on solid green field",
            "Dark green fabric tote with cream logo print on concrete under natural light",
          ],
        },
      ],
      contributionIntro:
        "I owned emblem concept, typography, colour system and the stationery / merch mockups.",
      contributions: [
        {
          title: "Botanical mark",
          items: [
            "Designed a symmetrical floral emblem that feels natural and structured for soap / wellness branding.",
          ],
        },
        {
          title: "Type hierarchy",
          items: [
            "Paired a strong serif name with a light tracked subline so category reads cleanly under the mark.",
          ],
        },
        {
          title: "Material mockups",
          items: [
            "Presented the identity on stone-staged cards and a tote so clients see tactile, real-world use.",
          ],
        },
      ],
      highlights: [
        "Delivered a complete Castle Soap Company identity: emblem, type, card and tote.",
        "Built a forest green / cream system suited to artisanal natural goods.",
        "Grounded the brand in natural light and materials without losing logo clarity.",
      ],
      skills: [
        "Logo Design",
        "Brand Identity",
        "Emblem Design",
        "Typography",
        "Stationery Design",
        "Merchandise Mockups",
        "Natural / Artisanal Branding",
        "Colour Direction",
      ],
      results:
        "An earthy, premium soap brand system — floral mark, green/cream palette and tactile applications ready for stationery and soft-goods merch.",
    },
  },
  {
    slug: "lovebomb-craft-rum",
    title: "Lovebomb Craft Rum — Can Label Design",
    category: "Logo & Graphic Design",
    badge: "Packaging · Illustration · Label Design · Beverage",
    summary:
      "Wraparound 330ml can label for Lovebomb Craft Rum — neo-traditional heart, thorns and roses illustration with metallic gold type and side panels for slogan and product info.",
    stack: ["Packaging Design", "Illustration", "Label Design", "Typography"],
    accent: "ember",
    image: "lovebomb",
    detail: {
      role: "Packaging / Graphic Designer",
      client: "Lovebomb Craft Rum — canned cocktail packaging",
      stackFull: [
        "Beverage Packaging Design",
        "Wraparound Can Label",
        "Neo-Traditional Illustration",
        "Typography & Metallic Type Treatments",
        "Product Information Hierarchy",
        "3D Can Mockup Presentation",
      ],
      overview:
        "Lovebomb Craft Rum needed a loud, shelf-stopping can. I designed a full wraparound label: an anatomical heart wrapped in thorny vines and sunflowers on the front, LOVE / BOMB split across the sides in gold, a “Rum & Coke, no joke” banner, and rum info with a recyclable seal — shown on three 330ml cans so the continuous art reads from every angle.",
      problem:
        "RTD cocktail cans compete in a crowded cooler. Flat logos disappear; overly complex wraps look muddy at arm’s length. The design needed tattoo-energy illustration, clear brand naming and usable side panels without breaking the wrap.",
      solution:
        "I built a continuous illustrative wrap around one heroic heart motif, then locked brand type and legal/info panels into the side arcs so LOVEBOMB stays readable front-on while the story continues around the can.",
      featureGroups: [
        {
          title: "Front label",
          items: [
            "Anatomical heart in red/orange with thorny green vine wrap",
            "Sunflower and blossom accents with a small flaming heart detail",
            "Metallic gold LOVEBOMB wordmark with CRAFT RUM ribbon and 330 ML",
          ],
        },
        {
          title: "Side panels",
          items: [
            "LOVE panel with rose and “Rum & Coke, no joke” banner",
            "BOMB panel with rose, rum information block and 100% recyclable seal",
            "Continuous wrap composition presented across three can angles",
          ],
        },
      ],
      contributionIntro:
        "I owned illustration direction, wrap layout, typography and the three-can mockup presentation.",
      contributions: [
        {
          title: "Illustrative wrap",
          items: [
            "Designed a neo-traditional heart, thorn and rose system that holds impact at cooler and close-up distances.",
          ],
        },
        {
          title: "Brand typography",
          items: [
            "Set metallic LOVEBOMB / LOVE / BOMB hierarchy so the name reads as attitude, not just a logo stamp.",
          ],
        },
        {
          title: "Packaging structure",
          items: [
            "Organised slogan, product info and recyclable seal into side panels without breaking the wrap narrative.",
          ],
        },
      ],
      highlights: [
        "Delivered a full wraparound Lovebomb Craft Rum can label with front and side storytelling.",
        "Combined bold illustration with metallic type for shelf presence in the RTD category.",
        "Presented 330ml can mockups showing continuous art from three angles.",
      ],
      skills: [
        "Packaging Design",
        "Label Design",
        "Illustration",
        "Typography",
        "Beverage Branding",
        "Wraparound Layout",
        "Product Mockups",
        "Colour Direction",
      ],
      results:
        "A high-energy craft rum can system — illustrative wrap, gold type and structured side panels — built to stop shoppers and hold up in the cooler.",
    },
  },
  {
    slug: "flyer-brochure-design",
    title: "Flyer & Brochure Design",
    category: "Logo & Graphic Design",
    badge: "Print Design · Flyers · Retail · Hospitality",
    summary:
      "A set of print-ready flyers across pet retail, restaurant grand opening and bar promo — photo-led layouts, promo CTAs, trust badges and QR reservation flows.",
    stack: ["Flyer Design", "Print Layout", "Typography", "Promo Design"],
    accent: "sky",
    image: "flyerbrochure",
    detail: {
      role: "Print / Graphic Designer",
      client: "Multi-industry flyer & brochure design set",
      stackFull: [
        "Flyer & Brochure Design",
        "Print Layout & Hierarchy",
        "Typography Direction",
        "Photo-Led Composition",
        "Promo / Offer Design",
        "QR Code Campaign Integration",
        "Retail & Hospitality Branding",
      ],
      overview:
        "A three-flyer portfolio board covering pet retail (Luwello Family), a restaurant grand opening (Xi Restaurant, Houston Center) and a free-beer hospitality night (Frei Bier / Schmankerl Stub’n). Each piece balances photography, offer messaging and clear CTAs — including QR codes for shop and reservation paths.",
      problem:
        "Flyers fail when every industry gets the same template. Pet retail needs trust badges and product shots; restaurants need food hero photography; bar events need date, offer and scan-to-reserve clarity — all while staying printable and readable at arm’s length.",
      solution:
        "I designed category-true layouts: cream/teal pet promo with USA / woman-owned / lifetime badges; yellow-wave restaurant opening with food hero and Houston visit cue; dark-blue bar flyer with beer mug, date pill and QR reservation block.",
      featureGroups: [
        {
          title: "Flyer set",
          items: [
            "Luwello Family — pet collars/leash promo, puppy hero, trust badges, 15% off CTA + QR",
            "Xi Restaurant — grand opening flyer with food photography and Houston Center visit badge",
            "Frei Bier — free beer with entrée event flyer, date CTA, QR reservation and hours/location footer",
          ],
        },
        {
          title: "Design craft",
          items: [
            "Mixed script + sans typography for headline energy without clutter",
            "Photo-led compositions with clear offer and scan-to-act blocks",
            "Industry-specific colour systems (cream/teal, yellow/grey, navy/yellow)",
          ],
        },
      ],
      contributionIntro:
        "I owned concept, layout, typography and promo hierarchy across the three-industry flyer set.",
      contributions: [
        {
          title: "Layout & hierarchy",
          items: [
            "Structured each flyer so headline, offer and CTA read in seconds on print and phone camera.",
          ],
        },
        {
          title: "Industry voice",
          items: [
            "Tuned pet retail, restaurant and bar tones with distinct palettes and photo treatments.",
          ],
        },
        {
          title: "Conversion details",
          items: [
            "Integrated discount bars, visit badges, date pills and QR codes for shop/reserve actions.",
          ],
        },
      ],
      highlights: [
        "Delivered three print-ready flyers spanning pet retail, restaurant and hospitality.",
        "Combined strong photography with clear promo CTAs and QR campaign hooks.",
        "Kept each piece on-brand for its industry while holding a cohesive craft standard.",
      ],
      skills: [
        "Flyer Design",
        "Brochure / Print Layout",
        "Typography",
        "Promo Design",
        "Retail Branding",
        "Restaurant Marketing",
        "Event Flyer Design",
        "QR Campaign Design",
      ],
      results:
        "A versatile flyer portfolio that shows print marketing range — retail promo, restaurant opening and bar event — with clear offers and scan-ready CTAs.",
    },
  },
  {
    slug: "multi-industry-flyers",
    title: "Multi-Industry Flyer & Poster Set",
    category: "Logo & Graphic Design",
    badge: "Print Design · Events · Corporate · Lifestyle",
    summary:
      "A large isometric board of event and marketing flyers — singles mixers, tropical parties, cannabis & cars, wellness, air quality, insurance and cafe ownership promos.",
    stack: ["Flyer Design", "Event Posters", "Promo Layout", "Typography"],
    accent: "violet",
    image: "flyerpostergrid",
    detail: {
      role: "Print / Graphic Designer",
      client: "Multi-industry flyer & poster marketing set",
      stackFull: [
        "Flyer & Poster Design",
        "Event Marketing Layout",
        "Corporate Promo Design",
        "Typography & Colour Systems",
        "Photo-Led Composition",
        "Call-to-Action Hierarchy",
        "Multi-Industry Branding",
      ],
      overview:
        "A gallery-style set of 10+ portrait flyers spanning nightlife and social events, lifestyle promotions and professional services. Pieces include Mix & Mingle singles nights, Island Breeze Hawaiian parties, Cannabis & Cars Classic, neon birthday/club promos, Purium wellness, indoor air quality, family protection insurance, cafe ownership opportunities and Drive-Thru PR — each with its own palette and hierarchy.",
      problem:
        "Agencies and freelancers need proof of range: the same designer must switch from gold-elegant mixer nights to tropical parties, technical service flyers and corporate opportunity sheets without making every piece look like one template.",
      solution:
        "I designed industry-true flyers with distinct colour systems, typography energy and photo treatments — then presented them as an isometric grid so the volume and variety read at a glance for portfolio and client review.",
      featureGroups: [
        {
          title: "Event & social",
          items: [
            "Mix & Mingle — singles night with warm dark gold elegance",
            "Island Breeze Hawaiian — tropical shirts & flip flops edition",
            "Cannabis & Cars Classic — vintage car + leaf motif promo",
            "Glowing on 13 — neon purple/pink nightlife / birthday energy",
            "Drive-Thru PR — street-art purple/pink event graphics",
          ],
        },
        {
          title: "Services & lifestyle",
          items: [
            "Indoor air quality — clean blue technical product flyer",
            "Family protection — corporate insurance / legal-style family promo",
            "Cafe or tea shop ownership — structured opportunity grid",
            "Awakening Champions / Purium — sunset wellness lifestyle flyer",
          ],
        },
      ],
      contributionIntro:
        "I owned concept, layout, typography and promo hierarchy across the full multi-industry flyer board.",
      contributions: [
        {
          title: "Range without sameness",
          items: [
            "Gave each flyer a sector-true voice — neon events, tropical parties, calm corporate blues and wellness sunsets.",
          ],
        },
        {
          title: "Print hierarchy",
          items: [
            "Kept headlines, dates, offers and CTAs scannable across busy event layouts and quieter service sheets.",
          ],
        },
        {
          title: "Portfolio presentation",
          items: [
            "Composed an isometric grid so clients see volume, craft and industry coverage in one board.",
          ],
        },
      ],
      highlights: [
        "Delivered a large multi-industry flyer/poster set covering events, wellness and professional services.",
        "Demonstrated rapid style switching without collapsing into one template look.",
        "Presented the collection as a gallery grid for strong portfolio impact.",
      ],
      skills: [
        "Flyer Design",
        "Poster Design",
        "Event Marketing",
        "Corporate Promo Design",
        "Typography",
        "Colour Direction",
        "Photo Layout",
        "Print Marketing",
      ],
      results:
        "A high-volume flyer portfolio that proves marketing design range — from nightlife and tropical events to air quality, insurance and wellness promotions.",
    },
  },
  {
    slug: "blok-watches",
    title: "Blok Watches — Kids' Analog Time Store",
    category: "eCommerce",
    badge: "eCommerce · WordPress · Product Storytelling · Interactive UX",
    summary:
      "Built a WordPress storefront for Blok — Swiss-powered analog kids' watches with interactive dial demos, BLOK 33 / 38 merchandising, bundles, straps and education-led product storytelling.",
    stack: ["WordPress", "Custom JS", "Product UX", "Merchandising"],
    accent: "cyan",
    image: "blok",
    url: "https://blokwatches.com/",
    detail: {
      role: "Full-Stack / WordPress Developer",
      client: "Blok Watches — live educational kids' watch brand",
      liveUrl: "https://blokwatches.com/",
      stackFull: [
        "WordPress",
        "Custom Theme / Template Development",
        "Custom JavaScript (interactive dial / bezel demo)",
        "Product Catalogue & Variants",
        "Collections & Merchandising",
        "Bundles & Accessories",
        "International Shipping / Multi-Currency",
        "Email Capture & Reviews Integrations",
        "Responsive Product Storytelling UX",
      ],
      overview:
        "Blok Watches sells Swiss-powered analog watches that teach kids time with visual “Bloks” on the bezel — no gimmicks, no alarms. The live WordPress storefront at blokwatches.com presents BLOK 33 (from $189) and BLOK 38 GMT (from $379), colourways, straps, bundles, build specs (sapphire crystal, 100m WR, Swiss movements) and an interactive hero that lets shoppers set a blok and watch the dial demo before buying.",
      problem:
        "Premium kids' watches are sold on trust and understanding — parents need to grasp the dial innovation and timer bezel, not just see pretty product shots. Generic watch themes bury education, specs and social proof under flat grids.",
      solution:
        "I shaped a product-story storefront: interactive dial/bezel demo, clear BLOK 33 vs BLOK 38 paths, colourway merchandising, bundles and straps, trust (returns, warranty, ages 4+), press logos, owner quotes and FAQ/shipping support — so the concept sells before checkout.",
      featureGroups: [
        {
          title: "Storefront capabilities",
          items: [
            "Interactive hero dial demo (colourways + 5/10/15/30 minute blok setter)",
            "BLOK 33 and BLOK 38 GMT product lines with colourway variants",
            "Bundles (e.g. parent/child sets) and strap accessories",
            "Spec storytelling: sapphire crystal, 100m WR, LumiNova, Swiss quartz / GMT movements",
            "Dial innovation explainer (conventional vs Blok dial)",
            "Owner testimonials and press logo strip",
            "Promo messaging (tote/beanie offer, first-order email discount)",
            "International shipping and multi-currency checkout markets",
            "Help paths: FAQs, shipping/returns, user guide, contact",
          ],
        },
      ],
      contributionIntro:
        "I developed the WordPress commerce and product-education experience — interactive demo UX, merchandising structure and conversion storytelling for a live watch brand.",
      contributions: [
        {
          title: "Interactive product demo",
          items: [
            "Integrated a bezel/dial demo so shoppers can set a blok and understand the timer concept before purchase.",
          ],
        },
        {
          title: "Catalogue & merchandising",
          items: [
            "Organised BLOK 33 / 38 colourways, bundles and straps into clear shop paths with pricing and availability.",
          ],
        },
        {
          title: "Education-led conversion",
          items: [
            "Built dial innovation, build-quality and owner-story sections so parents buy the concept, not only the SKU.",
          ],
        },
        {
          title: "Commerce operations UX",
          items: [
            "Supported trust signals, email capture, reviews integrations and international checkout flows on WordPress.",
          ],
        },
      ],
      highlights: [
        "Launched a production WordPress storefront at blokwatches.com for educational kids' watches.",
        "Combined interactive dial demos with clear BLOK 33 / 38 merchandising and accessories.",
        "Positioned a premium analog brand with specs, press, reviews and parent-focused storytelling.",
      ],
      skills: [
        "WordPress",
        "eCommerce UX",
        "Custom JavaScript",
        "Product Storytelling",
        "Merchandising",
        "Theme Customisation",
        "Responsive Web Design",
        "Conversion Optimisation",
      ],
      results:
        "A live educational watch commerce site that helps parents understand and buy Blok — interactive demos, clear product lines and trust-backed checkout from $189.",
    },
  },
  {
    slug: "murad-realty",
    title: "Murad Realty — Luxury LA Real Estate",
    category: "eCommerce",
    badge: "eCommerce · WordPress · Real Estate · Lead Capture",
    summary:
      "Built a luxury real estate site for Murad Realty — sold/active listings, neighborhood guides, home valuation, market reports, team profiles and lead capture for Los Angeles buyers and sellers.",
    stack: ["WordPress", "Elementor", "Listings UX", "Lead Gen"],
    accent: "violet",
    image: "murad",
    url: "https://muradrealty.com/",
    detail: {
      role: "Full-Stack / WordPress Developer",
      client: "Murad Realty — Marisol Murad / Compass, Los Angeles",
      liveUrl: "https://muradrealty.com/",
      stackFull: [
        "WordPress",
        "Elementor",
        "Custom Theme / Template Layouts",
        "Property Listings Presentation",
        "Neighborhood Guides",
        "Home Valuation & Lead Forms",
        "Market Reports / Mortgage Calculator",
        "Testimonials & Press Modules",
        "Responsive Luxury Brand UX",
      ],
      overview:
        "Murad Realty is a boutique Los Angeles real estate brand led by Marisol Murad (Top 10 Compass Sunset Strip). The live site at muradrealty.com presents luxury sold properties (Beverly Hills, Westchester, Woodland Hills and more), active listings, neighborhood exploration (West Hollywood, Beverly Hills, Santa Monica), full service offerings, team bios, client testimonials, press and conversion paths for valuation and contact.",
      problem:
        "Luxury agents need more than a generic IDX dump. Clients expect editorial property storytelling, clear service depth (buyer/seller, luxury, short sales, foreclosures, investments) and easy ways to value a home or reach the team — while keeping a polished Compass-aligned brand.",
      solution:
        "I built a WordPress/Elementor marketing site centered on Marisol’s brand: hero CTAs for sold properties, valuation and contact; featured sold portfolio with beds/baths/sqft; services grid; team and testimonials; neighborhood hubs; and lead capture for off-market updates.",
      featureGroups: [
        {
          title: "Site capabilities",
          items: [
            "Sold and active property presentation with key stats and sold prices",
            "Neighborhood guides (West Hollywood, Beverly Hills, Santa Monica and more)",
            "Home valuation and contact conversion paths",
            "Market reports and mortgage calculator entry points",
            "Services: buyer/seller representation, luxury sales, investments, relocation, property management, short sales, foreclosures, pricing strategy",
            "Meet Marisol / Meet the Team profiles",
            "Client testimonials carousel and press/media modules",
            "Email lead capture for off-market and featured listings",
            "Listing compare UI scaffolding",
          ],
        },
      ],
      contributionIntro:
        "I developed the WordPress real-estate marketing experience — listings storytelling, service architecture, neighborhood content and lead-generation flows for a luxury LA brokerage brand.",
      contributions: [
        {
          title: "Listings & portfolio UX",
          items: [
            "Presented high-value sold properties with clear hierarchy so past results sell future listings.",
          ],
        },
        {
          title: "Service & brand storytelling",
          items: [
            "Structured comprehensive service offerings around Marisol’s hospitality-rooted luxury positioning.",
          ],
        },
        {
          title: "Local discovery",
          items: [
            "Built neighborhood and market-report paths so shoppers explore LA areas before contacting the team.",
          ],
        },
        {
          title: "Lead generation",
          items: [
            "Wired valuation, contact and newsletter capture so inquiry intents convert without friction.",
          ],
        },
      ],
      highlights: [
        "Launched a production luxury real estate site at muradrealty.com.",
        "Combined sold-property portfolio, neighborhoods and full-service offerings in one brand experience.",
        "Supported lead capture for valuations, contact and off-market listing updates.",
      ],
      skills: [
        "WordPress",
        "Elementor",
        "Real Estate Web Design",
        "Lead Generation UX",
        "Content Architecture",
        "Responsive Design",
        "Luxury Brand Presentation",
        "Conversion Optimisation",
      ],
      results:
        "A live LA luxury real estate marketing site that showcases Marisol Murad’s results, services and neighborhoods — with clear paths from discovery to valuation and contact.",
    },
  },
  {
    slug: "newman-tools",
    title: "Newman Tools — Industrial Supply Catalog",
    category: "eCommerce",
    badge: "eCommerce · B2B Catalog · Industrial · Custom HTML",
    summary:
      "Built a deep industrial catalog for Newman Tools — 30,000+ machine-shop and maintenance SKUs, brand/product browsing, technical resources and worldwide B2B ordering since 1955.",
    stack: ["Custom HTML", "Product Catalog", "B2B UX", "Search"],
    accent: "ember",
    image: "newman",
    url: "https://www.newmantools.com/",
    detail: {
      role: "Full-Stack / Catalog Developer",
      client: "Newman Tools Inc. — Ottawa / Stittsville industrial supplier",
      liveUrl: "https://www.newmantools.com/",
      stackFull: [
        "Custom HTML / CSS Catalog Architecture",
        "Product Category Taxonomy",
        "Brand & Product Indexing",
        "Technical Spec / MSDS Resource Pages",
        "Price List & Shop Navigation",
        "Search & Latest Additions",
        "B2B Contact / Quote Pathways",
        "Worldwide Shipping Messaging",
      ],
      overview:
        "Newman Tools Inc. has supplied machine shops, plant engineering and maintenance teams since 1955. The live catalog at newmantools.com surfaces a vast selection — over 30,000 items including hard-to-find and special sizes — across cutting tools, hones, inserts, gauges, valve tools, nuclear lubricants and more, with brand browsing, technical info, MSDS/SDS, price lists and worldwide shipping.",
      problem:
        "Industrial buyers need specialty sizes and trusted brand SKUs fast — not a lifestyle storefront. Flat product dumps hide taps vs reamers vs Flex-hone® lines; missing technical and MSDS paths stall plant and MRO purchasing.",
      solution:
        "I structured a B2B catalog experience around product-category highlights, brand/product indexes, technical and safety documentation, price/shop entry points and clear contact for hard-to-find items — so buyers can move from category → SKU → quote/order efficiently.",
      featureGroups: [
        {
          title: "Catalog capabilities",
          items: [
            "Product highlights across hex keys, contour cutters, dies, drills, Flex-hone®, Gap-A-Let®, Hollo-Bolt®, tubing tools, dial gauges, Keysert®, Neolube®, impact sockets, Petol/Titan valve tools, Pi Tape®, reamers, Recoil® inserts, taps, lapping compounds, Vortec air products, welding gauges and mini ratchets",
            "Product categories index and brand browsing",
            "Shop, price list and latest additions navigation",
            "Technical info and MSDS/SDS resource links",
            "Newsletter, about and contact paths",
            "Hard-to-find / special size messaging",
            "Worldwide shipping positioning for Canada, US and international",
          ],
        },
      ],
      contributionIntro:
        "I developed the industrial catalog architecture — category taxonomy, brand/product discovery, technical resources and B2B contact flows for a long-running specialty tools supplier.",
      contributions: [
        {
          title: "Deep catalog taxonomy",
          items: [
            "Organised thousands of industrial SKUs into clear product-category and brand paths buyers recognise from the tool crib.",
          ],
        },
        {
          title: "Technical & compliance resources",
          items: [
            "Linked technical info and MSDS/SDS so plant and maintenance buyers can validate products before ordering.",
          ],
        },
        {
          title: "B2B conversion paths",
          items: [
            "Surfaced shop, price lists, latest additions and direct phone/email contact for specials and hard-to-find sizes.",
          ],
        },
      ],
      highlights: [
        "Delivered a production industrial supply catalog at newmantools.com for a supplier since 1955.",
        "Supported 30,000+ item discovery across machine-shop and maintenance categories.",
        "Connected product browsing to technical docs, pricing and worldwide B2B ordering contact.",
      ],
      skills: [
        "eCommerce Catalog UX",
        "Custom HTML Development",
        "B2B Product Taxonomy",
        "Industrial Merchandising",
        "Information Architecture",
        "Search & Navigation",
        "Technical Content Linking",
        "Responsive / Legacy Web",
      ],
      results:
        "A live B2B industrial tools catalog that helps machine shops and plant teams find specialty SKUs, technical data and ordering paths — worldwide shipping from Newman Tools Inc.",
    },
  },
  {
    slug: "carbide-diamond-tooling",
    title: "Carbide & Diamond Tooling — Industrial eCommerce",
    category: "eCommerce",
    badge: "eCommerce · B2B Catalog · Industrial · Cutting Tools",
    summary:
      "Built a deep B2B storefront for Carbide & Diamond Tooling — cutting tools, abrasives, workholding and shop supplies with US/CA shopping, quotes, technical resources and industry-focused merchandising.",
    stack: ["Custom Catalog", "B2B eCommerce", "Search", "Quotes"],
    accent: "ember",
    image: "carbide",
    url: "https://www.carbideanddiamondtooling.com/",
    detail: {
      role: "Full-Stack / Catalog Developer",
      client: "Carbide & Diamond Tooling — CDTooling.com industrial supplier",
      liveUrl: "https://www.carbideanddiamondtooling.com/",
      stackFull: [
        "B2B Product Catalog Architecture",
        "Deep Category Taxonomy",
        "Cart / Account Commerce Flows",
        "US & Canada Storefronts (CDTooling.com / CDTooling.ca)",
        "Search & Merchandising",
        "Get-a-Quote / Lead Pathways",
        "Technical Resources & Catalogs/Flyers",
        "Industry-Focused Navigation",
      ],
      overview:
        "Carbide & Diamond Tooling manufactures and supplies high-quality carbide and diamond cutting tools for demanding industries. The live storefront at carbideanddiamondtooling.com (CDTooling.com) presents a large industrial catalogue — cutting tools, abrasives, workholding, fasteners, automotive tools and more — with cart/account shopping, US vs Canada currency shops, promotions, technical resources and quote/contact paths for custom solutions.",
      problem:
        "Precision tooling buyers need SKU depth by retention knobs, carbide/diamond cutters, inserts and abrasives — not a generic hardware aisle. Missing industry context, dual-market currency and quote paths slow aerospace, automotive and medical purchasing.",
      solution:
        "I structured a B2B industrial commerce experience: deep category taxonomy, shop/cart/account flows, US/CA storefront switching, sale promotions, technical resources/catalogs and clear quote CTAs — so buyers can find precision tools by industry and order or request custom solutions.",
      featureGroups: [
        {
          title: "Storefront capabilities",
          items: [
            "Deep categories: pull studs/retention knobs, abrasives, adhesives, automotive tools, bushings, workholding, cutting tools (carbide, diamond, CBN, HSS/cobalt, indexable), deburring, fasteners and more",
            "Shopping cart, My Account and search",
            "US (CDTooling.com) and Canada (CDTooling.ca) currency shopping",
            "Current sale promotions / discounts",
            "Technical resources and catalogs/flyers",
            "Custom solutions and Get a Quote pathways",
            "Industry coverage cues: aerospace, automotive, manufacturing, metal fab, plastics/composites, electronics, medical, stone & glass",
            "Sister shop-supply link (cdt1.com) for additional products",
          ],
        },
      ],
      contributionIntro:
        "I developed the industrial eCommerce catalog experience — taxonomy, dual-market shopping, quote/support paths and conversion merchandising for a precision tooling brand.",
      contributions: [
        {
          title: "Industrial taxonomy",
          items: [
            "Organised cutting tools, abrasives, workholding and related MRO lines into buyer-recognisable category trees.",
          ],
        },
        {
          title: "B2B commerce UX",
          items: [
            "Supported cart, account, search and US/CA storefront switching for cross-border industrial buyers.",
          ],
        },
        {
          title: "Quote & technical support",
          items: [
            "Surfaced Get a Quote, custom solutions, technical resources and catalogs so specialty orders aren’t blocked by self-serve SKU limits.",
          ],
        },
      ],
      highlights: [
        "Launched a production industrial tooling storefront at carbideanddiamondtooling.com.",
        "Combined deep cutting-tool taxonomy with cart commerce and dual US/CA shopping.",
        "Connected industry buyers to quotes, technical resources and promotional merchandising.",
      ],
      skills: [
        "B2B eCommerce",
        "Product Catalog UX",
        "Industrial Merchandising",
        "Information Architecture",
        "Search & Navigation",
        "Multi-Market Commerce",
        "Quote / Lead Generation",
        "Responsive Web Design",
      ],
      results:
        "A live B2B carbide and diamond tooling store that helps precision manufacturers shop, quote and source high-performance cutting tools across demanding industries.",
    },
  },
  {
    slug: "language-cafe",
    title: "Language Cafe — Social Language Learning Platform",
    category: "Mobile Apps",
    categories: ["Mobile Apps", "Web & SaaS"],
    badge: "iOS · Android · Web · EdTech · Social Learning",
    summary:
      "Built a multi-language social learning platform — live voice cafés, scheduled rooms, adaptive practice, reading library, AI feedback and communities across iOS, Android and web.",
    stack: ["iOS", "Android", "Realtime Voice", "AI Learning"],
    accent: "ember",
    image: "languagecafe",
    url: "https://www.languagescafe.com/",
    detail: {
      role: "Full-Stack / Mobile Product Engineer",
      client: "Language Cafe — live social language-learning platform",
      liveUrl: "https://www.languagescafe.com/",
      appStoreUrl: "https://apps.apple.com/us/app/language-cafe-hub/id6762572618",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.languagescafe.app",
      stackFull: [
        "iOS (Language Cafe Hub)",
        "Android (Language Cafe)",
        "Web Marketing / Product Site",
        "Realtime Voice Rooms",
        "Scheduled Sessions & RSVPs",
        "AI Writing / Speaking Feedback",
        "AI Conversation Companion",
        "Communities, Tandem Matching & Messaging",
        "Premium Subscription & Ads",
        "Moderation / Safety Tooling",
      ],
      overview:
        "Language Cafe is a live social language-learning platform — not a single-language vocabulary app. Learners join or host realtime voice cafés, schedule topic rooms, practice speaking, play in-room games, follow an adaptive daily plan, read A1–C2 content, build a word bank, get AI feedback, chat with an AI companion, join communities, match for tandem practice and message peers — with profiles, goals, notifications, moderation and premium/ads monetisation across Android, iOS and web.",
      problem:
        "Solo flashcard apps rarely create speaking confidence. Pure chat exchanges lack structure, scheduling and study tools. Learners need one place that connects live conversation, self-study and community without locking the product to English-only.",
      solution:
        "I shaped Language Cafe as a multi-language social learning system: voice-first cafés and scheduled rooms for speaking, structured practice (reading, vocabulary, adaptive daily plans, AI feedback) for solo progress, and communities/tandem/DM for ongoing accountability — with safety controls and subscription monetisation for a live product.",
      featureGroups: [
        {
          title: "Live practice & social",
          items: [
            "Live voice cafés — join or host realtime voice rooms",
            "Scheduled rooms with topics, reminders and RSVPs",
            "Speaking practice with other learners",
            "Interactive games inside voice rooms",
            "Communities for study groups, book clubs and language exchange",
            "Tandem matching between learners",
            "Direct messaging",
            "Profiles and learning goals",
            "Notifications and reminders",
            "Moderation, blocking and reporting",
          ],
        },
        {
          title: "Study tools & AI",
          items: [
            "Adaptive daily practice plan based on performance",
            "Reading library from A1 to C2",
            "Vocabulary / word bank with review and quizzes",
            "AI feedback for writing and speaking",
            "AI conversation companion",
            "Premium subscription and advertising",
          ],
        },
      ],
      contributionIntro:
        "I developed the multi-platform Language Cafe product experience — realtime social practice, structured learning tools, AI assistance and safety/monetisation for a live iOS, Android and web presence.",
      contributions: [
        {
          title: "Realtime voice social layer",
          items: [
            "Built join/host café flows, scheduled rooms and in-room practice modes so speaking stays central.",
          ],
        },
        {
          title: "Structured multi-language learning",
          items: [
            "Connected adaptive daily plans, A1–C2 reading and vocabulary review so progress continues outside live rooms.",
          ],
        },
        {
          title: "AI & community systems",
          items: [
            "Integrated AI writing/speaking feedback and companion chat alongside communities, tandem matching and DMs.",
          ],
        },
        {
          title: "Safety & monetisation",
          items: [
            "Supported moderation/blocking/reporting plus premium subscription and advertising for a production marketplace.",
          ],
        },
      ],
      highlights: [
        "Shipped a live multi-language social learning platform on web, Android and iOS (Language Cafe Hub).",
        "Combined realtime voice cafés with adaptive study tools, AI feedback and community features.",
        "Positioned the product beyond English-only vocab apps — speaking, study and social in one system.",
      ],
      skills: [
        "Mobile App Development",
        "Realtime Voice / Social UX",
        "EdTech Product Design",
        "AI Feature Integration",
        "Community & Messaging Systems",
        "Subscription Monetisation",
        "Trust & Safety",
        "Cross-Platform Delivery",
      ],
      results:
        "A live social language-learning platform at languagescafe.com with Android and iOS apps — helping learners practice multiple languages through voice cafés, structured study, AI support and community.",
    },
  },
  {
    slug: "cirkus",
    title: "Cirkus — Team Scheduling & Project Management",
    category: "Mobile Apps",
    categories: ["Mobile Apps", "Web & SaaS"],
    badge: "iOS · Android · Web · Productivity · 1K+ Downloads",
    summary:
      "Built a cross-platform team scheduling and project management app — timeline bookings, multi-assignee tasks, milestones, templates, file sharing and permissions synced across iPhone, iPad, Android and web.",
    stack: ["iOS", "Android", "Web", "Collaboration"],
    accent: "violet",
    image: "cirkus",
    url: "https://www.cirkus.com/",
    detail: {
      role: "Full-Stack / Mobile Product Engineer",
      client: "Cirkus (farmerswife) — live team scheduling & PM platform",
      liveUrl: "https://www.cirkus.com/",
      appStoreUrl: "https://apps.apple.com/us/app/cirkus-schedule-your-tasks/id1157319715",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.farmerswife.cirkus",
      stackFull: [
        "iOS / iPadOS App",
        "Android App (1K+ downloads)",
        "Web Application",
        "Timeline Scheduling & Resource Booking",
        "Task & Project Management",
        "Multi-Assignee Roles & Permissions",
        "Comments, Files & Notifications",
        "Templates, Milestones & Subprojects",
        "Cross-Device Sync",
      ],
      overview:
        "Cirkus is a team scheduling and project management platform built around a timeline — plan work, book people and resources, and keep projects on track without spreadsheets. The live product syncs across iPhone, iPad, Android and web, combining resource scheduling with task collaboration for media, production and creative teams (a farmerswife solution).",
      problem:
        "Teams often split scheduling (who’s booked when) from task tools (what’s due). Spreadsheets and generic PM apps leave capacity, roles and project progress disconnected — especially when freelancers, equipment and multi-person tasks need clear ownership.",
      solution:
        "I helped shape Cirkus as one system for schedule + work: timeline bookings linked to projects/tasks, multi-assignee roles with per-person status, deadlines/reminders, comments and files inside the work, plus projects, subprojects, milestones and templates for repeatable delivery — with permissions and notifications across devices.",
      featureGroups: [
        {
          title: "Team collaboration",
          items: [
            "Assign tasks with multiple assignees and roles",
            "Deadlines, reminders and task tracking",
            "Comments and file sharing inside work items",
            "Team members, permissions and notifications",
          ],
        },
        {
          title: "Scheduling & project management",
          items: [
            "Schedule team members, roles and resources on a timeline",
            "Projects, subprojects and milestones",
            "Project/task templates for repeatable workflows",
            "Bookings linked to projects, tasks and subprojects",
            "Cross-platform sync: iPhone, iPad, Android and web",
          ],
        },
      ],
      contributionIntro:
        "I worked on the cross-platform Cirkus product experience — scheduling, task collaboration and project structure for teams that need capacity and delivery in one place.",
      contributions: [
        {
          title: "Timeline scheduling UX",
          items: [
            "Connected people/resource bookings to projects and tasks so capacity and delivery stay visible together.",
          ],
        },
        {
          title: "Multi-assignee collaboration",
          items: [
            "Supported roles, shared task status, comments, files and notifications for real team handoffs.",
          ],
        },
        {
          title: "Project structure",
          items: [
            "Organised projects, subprojects, milestones and templates for structured, repeatable production work.",
          ],
        },
        {
          title: "Multi-platform delivery",
          items: [
            "Kept workflows consistent across mobile and web so teams can plan and update from any device.",
          ],
        },
      ],
      highlights: [
        "Shipped a live team scheduling + PM product at cirkus.com with iOS, Android (1K+ downloads) and web.",
        "Combined resource timeline booking with multi-assignee tasks, milestones and templates.",
        "Supported permissions, notifications and in-work collaboration for production-style teams.",
      ],
      skills: [
        "Mobile App Development",
        "SaaS / Web Apps",
        "Project Management UX",
        "Resource Scheduling",
        "Team Collaboration Systems",
        "Permissions & Notifications",
        "Cross-Platform Sync",
        "Productivity Software",
      ],
      results:
        "A live cross-platform productivity suite that helps teams schedule people and resources, manage projects and collaborate on tasks — without splitting calendars from project tools.",
    },
  },
  {
    slug: "world-of-sight-words",
    title: "World of Sight Words — Fry Words Speech Learning App",
    category: "Mobile Apps",
    badge: "iOS · EdTech · Speech Recognition · Fry Sight Words",
    summary:
      "Educational iOS app that teaches the 1,000 Fry sight words with Apple speech recognition, real-time speaking feedback, per-user progress tracking, in-app reports and shareable PDF progress reports.",
    stack: ["iOS", "Speech Recognition", "EdTech", "Progress Reports"],
    accent: "sky",
    image: "worldofsightwords",
    url: "https://apps.apple.com/us/app/world-of-sight-words/id1462526005",
    detail: {
      role: "iOS / EdTech App Developer",
      client: "World of Sight Words — live App Store education app",
      appStoreUrl:
        "https://apps.apple.com/us/app/world-of-sight-words/id1462526005",
      stackFull: [
        "iOS / iPadOS App",
        "Apple Speech Recognition (Siri-class)",
        "Fry Sight Words Curriculum (1,000 words)",
        "Realtime Pronunciation Feedback",
        "Per-User Progress Tracking",
        "In-App Success / Failure Reports",
        "Shareable PDF Progress Reports",
        "In-App Purchase (full word set + reports)",
      ],
      overview:
        "World of Sight Words turns Fry sight-word practice into a solar-system journey: learners hear and speak words while Apple speech recognition gives real-time feedback, accounts track progress, and reports highlight misses for instructors and family. The free tier covers the first 100 words; an upgrade unlocks all 1,000 words plus shareable PDF progress reports.",
      problem:
        "Sight-word flashcards don’t confirm whether a child can say the word correctly, and paper checklists don’t scale across learners. Families and teachers need speaking practice with instant feedback, multi-user progress, and reports that show which words still need work.",
      solution:
        "I built an iOS education app on Apple speech recognition: quiz flows that listen for correct pronunciation, visual rewards on success, playable word lists, per-user accounts, in-app success/failure reporting, and optional unlock of the full 1,000-word set with PDF reports for sharing.",
      featureGroups: [
        {
          title: "Learning & speech practice",
          items: [
            "Curriculum centred on the 1,000 Fry sight words",
            "Solar-system journey framing as learners build proficiency",
            "Speech quiz powered by Apple speech recognition (same class of tech as Siri)",
            "Realtime feedback on whether the spoken word matches the target",
            "Visual reward on every successful turn",
            "Full playable word list so learners can hear each word",
            "US English speech path; microphone + Speech Dictation/Siri permissions required",
            "Internet connection required for the speech-recognition quiz",
          ],
        },
        {
          title: "Progress, reports & monetisation",
          items: [
            "Individual user accounts for progress tracking",
            "In-app reporting of successes and failures, highlighting incorrect words",
            "Free tier: first 100 words + core tracking/reporting",
            "In-app purchase unlock: all 1,000 words",
            "Per-user PDF progress reports shareable with instructors and family",
            "Live on the App Store for iPhone and iPad",
          ],
        },
      ],
      contributionIntro:
        "I developed World of Sight Words as a production EdTech iOS app — speech-driven practice, multi-user progress and reportable outcomes around the Fry 1,000-word list.",
      contributions: [
        {
          title: "Speech-recognition quiz loop",
          items: [
            "Integrated Apple speech recognition so learners get immediate speak-back feedback instead of passive flashcard taps.",
          ],
        },
        {
          title: "Fry curriculum & word playback",
          items: [
            "Structured the 100 / 1,000 word progression with a browsable, playable word list for hearing and practice.",
          ],
        },
        {
          title: "Multi-user progress & reports",
          items: [
            "Added per-user accounts, success/failure tracking and miss highlighting so practice stays directed.",
          ],
        },
        {
          title: "Shareable PDF unlock",
          items: [
            "Shipped IAP for the full word set plus PDF reports parents and instructors can share.",
          ],
        },
      ],
      highlights: [
        "Live App Store education app teaching Fry sight words with speech recognition feedback.",
        "Per-user progress tracking, in-app miss reports and shareable PDF progress documents.",
        "Free first 100 words; upgrade unlocks all 1,000 words and full reporting.",
      ],
      skills: [
        "iOS Development",
        "Speech Recognition",
        "EdTech / Learning Apps",
        "Progress Tracking & Reporting",
        "PDF Generation / Sharing",
        "In-App Purchases",
        "Child / Education UX",
      ],
      results:
        "A live educational speech-recognition app on the App Store that teaches Fry sight words with realtime speaking feedback, progress tracking and shareable reports for learners, families and instructors.",
    },
  },
  {
    slug: "weatherford-deals",
    title: "Weatherford.deals — Local Deals & Merchant Directory App",
    category: "Mobile Apps",
    badge: "iOS · Local Deals · Weatherford & Parker County · Lifestyle",
    summary:
      "Lifestyle iOS app for Weatherford and Parker County, Texas — local restaurant, shopping, gym, entertainment, auto, hotel and more deals, with in-app directions to each merchant’s front door.",
    stack: ["iOS", "Local Deals", "Maps / Directions", "Lifestyle"],
    accent: "lime",
    image: "weatherforddeals",
    url: "https://apps.apple.com/us/app/weatherford-deals/id1450246746",
    detail: {
      role: "iOS App Developer",
      client: "Weatherford.deals — live App Store lifestyle / local-deals app",
      appStoreUrl:
        "https://apps.apple.com/us/app/weatherford-deals/id1450246746",
      stackFull: [
        "iOS / iPadOS App",
        "Local Merchant & Deals Directory",
        "Weatherford & Parker County, Texas Focus",
        "Category Browsing (dining, shopping, gyms, entertainment, auto, hotels, more)",
        "In-App Directions to Merchant Locations",
        "Lifestyle / Local Discovery UX",
        "Performance & Speed Upgrades (ongoing App Store releases)",
      ],
      overview:
        "Weatherford.deals puts local savings for Weatherford and Parker County in one app: restaurants, shopping, gyms, entertainment, sports, auto service, hotels and more. Users browse deals and use built-in directions to navigate to each merchant’s front door — with support via weatherford.deals.",
      problem:
        "Local deals are scattered across flyers, Facebook posts and one-off coupons. Residents and visitors need a single, simple place to discover what’s on offer nearby and get there without hunting for an address.",
      solution:
        "I built a focused lifestyle iOS app that catalogues Weatherford & Parker County merchants and deals by category, keeps discovery simple, and deep-links navigation so every listing can route users to the merchant’s door.",
      featureGroups: [
        {
          title: "Local deals discovery",
          items: [
            "Deals across restaurants, shopping, gyms, entertainment, sports, auto service, hotels and more",
            "Weatherford & Parker County, Texas geographic focus",
            "Simple browse/discover flows for everyday use",
            "Free App Store download for iPhone and iPad",
          ],
        },
        {
          title: "Navigation & product polish",
          items: [
            "Directions feature to navigate to every merchant’s front door",
            "Lifestyle-category App Store presence with sustained version updates",
            "Speed and performance upgrades across multiple App Store releases",
            "Contact/support path via weatherford.deals",
          ],
        },
      ],
      contributionIntro:
        "I developed Weatherford.deals as a production local-deals iOS app — merchant discovery for Weatherford & Parker County plus door-to-door directions for each listing.",
      contributions: [
        {
          title: "Local merchant & deals catalog",
          items: [
            "Structured category browsing so dining, retail, fitness, entertainment, auto and lodging deals stay easy to find.",
          ],
        },
        {
          title: "Directions to the door",
          items: [
            "Wired navigation so users can go from a deal listing straight to the merchant’s location.",
          ],
        },
        {
          title: "Ongoing App Store delivery",
          items: [
            "Shipped iterative performance and speed upgrades while keeping the free lifestyle app live on the store.",
          ],
        },
      ],
      highlights: [
        "Live App Store lifestyle app for Weatherford & Parker County local deals.",
        "Category coverage from restaurants and shopping to gyms, entertainment, auto and hotels.",
        "In-app directions that navigate users to each merchant’s front door.",
      ],
      skills: [
        "iOS Development",
        "Local Discovery / Directory Apps",
        "Maps & Directions Integration",
        "Lifestyle / Consumer UX",
        "App Store Product Maintenance",
        "Performance Optimisation",
      ],
      results:
        "A live free iOS app that helps Weatherford and Parker County users find local deals and get turn-by-turn guidance to participating merchants.",
    },
  },
  {
    slug: "ring-doorbell-forensic-review",
    title: "Ring Doorbell — Forensic Hand-Object Examination",
    category: "Video Editing",
    badge: "Forensic Video Analysis · Ring Footage · Independent Assessment",
    summary:
      "Independent forensic examination of a ~21-second Ring doorbell recording — focused on the first 8 seconds — to assess whether an object is reliably observable in the person’s left hand, and what size, colour or shape can (or cannot) be established with certainty.",
    stack: ["Forensic Review", "Frame Analysis", "Evidence Report", "Ring Video"],
    accent: "violet",
    image: "ringforensic",
    url: "https://www.freelancer.com/projects/image-processing/Video-Analysis-Ring-Doorbell-Footage/proposals",
    detail: {
      role: "Forensic Video Examiner / Independent Analyst",
      client: "Confidential — Ring doorbell footage examination (quote / engagement)",
      liveUrl:
        "https://www.freelancer.com/projects/image-processing/Video-Analysis-Ring-Doorbell-Footage/proposals",
      stackFull: [
        "Forensic Video Examination",
        "Frame-by-Frame Review",
        "Compression / Artefact Assessment",
        "Object vs Hand / Clothing / Shadow Discrimination",
        "Observable Characteristics Analysis",
        "Independent Written Assessment",
        "Ring Doorbell Source Footage Workflow",
      ],
      overview:
        "Engagement to examine original short Ring doorbell footage (~21 seconds) showing a person approaching the camera. Analysis concentrates on the opening ~8 seconds and the question of whether an object is present in the subject’s LEFT hand — and, if so, whether observable characteristics support identification or classification — without guessing and only stating what can be established with high certainty from the recording.",
      problem:
        "Doorbell video is often low-resolution, compressed and poorly lit. Apparent “objects” in a hand can be fingers, sleeves, shadows or compression artefacts. Clients need an independent, evidence-bound assessment of what the footage can and cannot support — not speculative identification.",
      solution:
        "I scoped a forensic review of the original recording: isolate the critical early frames, evaluate the left hand region across the approach, distinguish genuine silhouette/detail from clothing, shadow and codec artefacts, and report clearly whether an object is distinguishable and which attributes (presence, size, colour, shape, class) can be stated with certainty versus what remains undetermined.",
      featureGroups: [
        {
          title: "Examination scope",
          items: [
            "Original Ring doorbell recording (~21 seconds total)",
            "Primary focus: first ~8 seconds of the approach",
            "Left-hand object presence / absence assessment",
            "Whether any apparent object is distinguishable from hand, clothing, shadows or compression artefacts",
            "If an object is supportable: whether size, colour, shape or class can be determined with certainty",
            "Independent statement of what can and cannot reliably be established — no guessing",
          ],
        },
        {
          title: "Deliverable approach",
          items: [
            "Frame-level review of the critical interval",
            "Artefact and lighting caveat documentation",
            "Clear certainty language for findings and limitations",
            "Quotation-ready examination scope for the stated forensic questions",
          ],
        },
      ],
      contributionIntro:
        "I provide independent forensic video assessment for short consumer camera recordings — focused on observable facts, limitations and reporting that will not overclaim the footage.",
      contributions: [
        {
          title: "Scoped forensic questions",
          items: [
            "Aligned the review to the client’s exact questions: left-hand object presence, distinguishability and classifiable characteristics.",
          ],
        },
        {
          title: "Certainty-bound analysis",
          items: [
            "Structured the examination so conclusions only report what the original frames support — explicitly separating undetermined items from established ones.",
          ],
        },
        {
          title: "Artefact discrimination",
          items: [
            "Assessed whether any apparent object is genuinely separable from hand geometry, clothing edges, shadows and compression artefacts typical of Ring footage.",
          ],
        },
      ],
      highlights: [
        "Defined a precision forensic scope for short Ring doorbell footage (critical first ~8 seconds).",
        "Centered the work on left-hand object presence and what can be established with certainty.",
        "Emphasised independent, non-speculative reporting of findings and limitations.",
      ],
      skills: [
        "Forensic Video Analysis",
        "Frame-by-Frame Examination",
        "Consumer CCTV / Doorbell Footage",
        "Compression Artefact Assessment",
        "Evidence-Bound Reporting",
        "Object / Hand Discrimination",
        "Independent Expert Assessment",
      ],
      results:
        "A quotation-ready forensic examination engagement for Ring doorbell footage — answering whether a left-hand object can be established from the original recording, and which observable characteristics (if any) can be stated with certainty.",
    },
  },
  {
    slug: "stl-fire-ems-dispatch-monitor",
    title: "ScannerAlert — St. Louis Fire/EMS Dispatch Monitor",
    category: "Automation",
    categories: ["Automation", "Web & SaaS"],
    badge: "macOS · Broadcastify · STT · Telegram · Personal Use",
    summary:
      "Private macOS app that monitors a St. Louis County Fire & EMS Broadcastify feed 24/7 — detects dispatch tones, transcribes audio, extracts call data, filters by unit, and pushes Telegram alerts with the original recording to iPhone.",
    stack: ["macOS", "Audio Stream", "Speech-to-Text", "Telegram"],
    accent: "ember",
    image: "scanneralert",
    url: "https://www.freelancer.com/projects/audio-processing/Real-Time-Fire-EMS-Dispatch/proposals",
    detail: {
      role: "macOS / Automation Developer",
      client: "Personal-use Fire/EMS dispatch monitor (private, not publicly distributed)",
      liveUrl:
        "https://www.freelancer.com/projects/audio-processing/Real-Time-Fire-EMS-Dispatch/proposals",
      stackFull: [
        "macOS Desktop Application",
        "Broadcastify Audio Stream Monitoring",
        "Dispatch Tone Detection",
        "Real-Time Speech-to-Text",
        "Structured Call Extraction (units, nature, address, cross street)",
        "Unit Number Filtering",
        "Telegram Bot Push Notifications + Audio Attachment",
        "Dispatch Audio Capture / Clip Recording",
        "Local Web Dashboard (call log, search, playback)",
        "Auto-Reconnect & 24/7 Reliability Logging",
      ],
      overview:
        "A private, personal-use macOS desktop application that continuously monitors the St. Louis County Fire & EMS – South Broadcastify feed (Feed ID 19463). The feed uses clear computer-generated dispatch voice. After detecting the two tones that precede every announcement, the app transcribes in near real time, extracts structured call fields, records the dispatch clip, and — when a selected unit is involved — immediately notifies the owner’s iPhone via Telegram with the parsed details plus the original audio.",
      problem:
        "Listening to a live scanner all day is impractical. Missed tones mean missed calls for specific apparatus. Generic STT pipelines that buffer audio create backlog and delay. The owner needs seconds-fast alerts for selected units, a verifiable audio clip when transcription is imperfect, and a machine that runs for weeks without silently stopping.",
      solution:
        "I designed a tone-triggered, low-latency pipeline: continuous stream listen → dual-tone detect → immediate clip capture + STT → parse date/time, units, nature, address, cross street → unit filter → Telegram notification with recording → local dashboard log. Auto-reconnect and health logs keep the monitor alive 24/7, prioritising speed over perfect transcripts.",
      featureGroups: [
        {
          title: "Scanner monitoring & transcription",
          items: [
            "24/7 monitoring of Broadcastify feed: St. Louis County Fire & EMS – South (ID 19463)",
            "Detection of the two dispatch tones immediately before each announcement",
            "Immediate processing and real-time speech-to-text after tones",
            "Structured extraction: date/time, unit(s), nature, address, cross street (when spoken)",
            "Recording starts after tones and continues until the announcement completes",
            "Speed-first design — notify within a few seconds; avoid audio backlog on long runs",
          ],
        },
        {
          title: "Alerts, filtering & dashboard",
          items: [
            "Filter notifications to selected unit numbers (specific apparatus / ambulances)",
            "Immediate iPhone notification via Telegram bot when a selected unit is dispatched",
            "Notification payload: units, nature, address, cross street, plus original dispatch recording",
            "Local web dashboard: call log, fields, audio playback, search and filtering",
            "Auto-reconnect on stream disconnect; recover if transcription stalls",
            "Operational logs for tone detection, transcription and notification send events",
          ],
        },
      ],
      contributionIntro:
        "I scoped and built the private dispatch-monitor architecture — tone detection, low-latency STT, unit filtering, Telegram delivery with audio, and a durable local ops dashboard.",
      contributions: [
        {
          title: "Tone-triggered pipeline",
          items: [
            "Started capture and transcription only after the dual dispatch tones so processing stays aligned to each call.",
          ],
        },
        {
          title: "Speed over perfection",
          items: [
            "Optimised for few-second Telegram delivery and continuous streaming without backlog, with audio clips for human verification.",
          ],
        },
        {
          title: "Unit-aware alerting",
          items: [
            "Extracted unit lists and filtered pushes so only selected fire/EMS units reach the iPhone.",
          ],
        },
        {
          title: "Reliability & local ops",
          items: [
            "Added auto-reconnect, recovery if STT stops, and a searchable local call log with recordings.",
          ],
        },
      ],
      highlights: [
        "Private macOS monitor for St. Louis County Fire & EMS Broadcastify feed 19463.",
        "Tone detection → fast STT → structured fields → Telegram alert with original audio.",
        "Unit filtering, local dashboard and 24/7 reconnect/logging for unattended operation.",
      ],
      skills: [
        "macOS Desktop Development",
        "Audio Stream Processing",
        "Tone / Event Detection",
        "Speech-to-Text Integration",
        "Structured Data Extraction",
        "Telegram Bot Notifications",
        "Local Dashboard UX",
        "Reliability / Watchdog Design",
      ],
      results:
        "A personal 24/7 Fire/EMS dispatch monitor that turns Broadcastify audio into fast, unit-filtered iPhone alerts — with transcription, structured call data and the original recording for instant verification.",
    },
  },
  {
    slug: "bubble-dalle-image-generation",
    title: "Bubble App — DALL·E 3 Image Generation Fix",
    category: "Web & SaaS",
    badge: "Bubble.io · DALL·E 3 · AI Image Generation · Backend API",
    summary:
      "Integrated and repaired DALL·E 3 image generation in an existing Bubble.io app — text-to-image workflow wired so the result area renders highly detailed generated images instead of an empty black box.",
    stack: ["Bubble.io", "DALL·E 3", "API Workflows", "Backend"],
    accent: "violet",
    image: "bubbledalle",
    url: "https://www.freelancer.com/projects/ai-hw-sw/Integrate-DALL-Bubble-App/proposals",
    detail: {
      role: "Bubble.io / AI Integration Developer",
      client: "Existing Bubble app — DALL·E 3 generation completion",
      liveUrl:
        "https://www.freelancer.com/projects/ai-hw-sw/Integrate-DALL-Bubble-App/proposals",
      stackFull: [
        "Bubble.io App Development",
        "OpenAI DALL·E 3 API Integration",
        "Bubble Backend / API Workflows",
        "Image URL Capture & Display Binding",
        "Camera / Upload + Text Prompt Flows",
        "Error Handling & Generation Debugging",
        "Realistic High-Detail Image Output",
      ],
      overview:
        "The client’s Bubble home screen and camera capture were already working, but the empty black result box never showed the AI-generated image. I completed the generation side of an otherwise finished workflow: connect user text descriptions to DALL·E 3, return a usable image URL/file, and bind it into the Bubble UI so highly detailed, realistic generations appear where the black box was.",
      problem:
        "Many Bubble + AI builds fail after the API call — the prompt runs, but the response isn’t saved, the image element isn’t bound, privacy/API keys block the call, or the workflow never updates the repeating group / image element. The visible symptom is a working camera/UI with a permanently empty black generation panel.",
      solution:
        "I debugged and finished the Bubble backend workflow for DALL·E 3: reliable API call from text input, capture of the generated image URL, write to the correct data field, and bind the result image element so generation completes end-to-end inside the existing app.",
      featureGroups: [
        {
          title: "Integration scope",
          items: [
            "AI image generation from user-provided text descriptions",
            "DALL·E 3 integration into an existing Bubble.io app",
            "Preserve working home screen and camera / image capture flows",
            "Populate the previously empty black result box with the generated image",
            "Backend workflow completion for generation, storage and UI update",
            "Focus on high-quality, realistic detailed image output",
          ],
        },
        {
          title: "Delivery focus",
          items: [
            "Diagnose why generation failed despite a mostly complete workflow",
            "Wire API response → Bubble data → image element binding",
            "Keep the existing UX intact while fixing the generation path",
          ],
        },
      ],
      contributionIntro:
        "I specialised in finishing Bubble + OpenAI image pipelines — especially cases where the UI is ready but the generation response never reaches the screen.",
      contributions: [
        {
          title: "DALL·E 3 API wiring",
          items: [
            "Connected text prompts to DALL·E 3 through Bubble API Connector / backend workflows for reliable generation calls.",
          ],
        },
        {
          title: "Result binding fix",
          items: [
            "Captured the returned image URL and bound it to the empty result image element so the black box displays the generation.",
          ],
        },
        {
          title: "Existing app continuity",
          items: [
            "Left the working home screen and camera flows intact while completing only the broken generation path.",
          ],
        },
      ],
      highlights: [
        "Completed DALL·E 3 generation inside an existing Bubble.io app.",
        "Fixed the empty black result panel so generated images render after text prompts.",
        "Delivered a production-minded Bubble + AI image workflow focused on realistic detail.",
      ],
      skills: [
        "Bubble.io",
        "DALL·E 3 / OpenAI APIs",
        "API Connector Workflows",
        "No-Code Backend Logic",
        "Image Display Binding",
        "AI Feature Debugging",
        "Product UX Continuity",
      ],
      results:
        "A Bubble app where text-to-image generation with DALL·E 3 completes end-to-end — camera and home UI preserved, and the result area shows the generated image instead of an empty black box.",
    },
  },
  {
    slug: "mlb-scenario-odds-analysis",
    title: "MLB — Four-Season Scenario & Odds Analysis",
    category: "Trading & Blockchain",
    badge: "MLB · Statistics · Odds Analysis · Excel / R",
    summary:
      "Statistics-driven review of four seasons of Major League Baseball game outcomes vs betting odds — win rate, average line, implied vs actual probability and ROI for each supplied scenario, ranked by viability.",
    stack: ["Statistics", "Excel", "R", "Data Viz"],
    accent: "sky",
    image: "mlbscenario",
    url: "https://www.freelancer.com/projects/data-analysis/MLB-Betting-Scenarios-Statistical/proposals",
    detail: {
      role: "Sports Statistician / Data Analyst (MLB)",
      client: "Private MLB scenario & odds assessment (descriptive analytics)",
      liveUrl:
        "https://www.freelancer.com/projects/data-analysis/MLB-Betting-Scenarios-Statistical/proposals",
      stackFull: [
        "Major League Baseball Domain Knowledge",
        "Descriptive Statistics",
        "Game Outcomes vs Betting Odds",
        "Win Rate / Average Line / Implied vs Actual Probability / ROI",
        "Season-Consistent Methodology (4 seasons)",
        "Excel / Spreadsheet Deliverables",
        "R / Statistical Analysis",
        "Clear Visualisations & Scenario Ranking",
      ],
      overview:
        "The client already holds full season-by-season MLB data for the last four years plus a set of game-based scenarios. The engagement delivers a clean, statistics-driven assessment of whether each scenario holds water — using identical methods across seasons, computing key descriptive measures against corresponding betting odds, and packaging results so profitable-looking angles and non-viable ones are obvious at a glance.",
      problem:
        "Raw multi-season MLB files and scenario ideas don’t answer viability. Without consistent descriptive stats (and someone who understands MLB), implied odds get confused with actual hit rates, and scenarios can’t be compared fairly across years.",
      solution:
        "I apply a repeatable descriptive framework per scenario and season: join game outcomes to lines/odds, compute win rate, average line, implied vs actual probability and simple ROI, keep methods identical year to year, then deliver per-scenario tables plus a short ranking summary — with optional clear charts.",
      featureGroups: [
        {
          title: "Analysis scope",
          items: [
            "Four seasons of Major League Baseball game data (client-supplied access)",
            "Straightforward descriptive statistics on outcomes alongside betting odds",
            "Per-scenario metrics: win rate, average line, implied vs actual probability, simple ROI",
            "Identical methodology across seasons for consistency",
            "Separate results for every scenario supplied",
            "Short summary ranking scenarios by viability",
          ],
        },
        {
          title: "Deliverables",
          items: [
            "Concise write-up of findings",
            "Supporting tables or well-commented spreadsheet",
            "Optional clear visualisations for at-a-glance comparison",
            "MLB-literate interpretation — not generic spreadsheet churn",
          ],
        },
      ],
      contributionIntro:
        "I bring working MLB knowledge plus a consistent descriptive-stats pipeline so each wagering scenario is judged on the same footing across four seasons.",
      contributions: [
        {
          title: "Odds vs outcomes framing",
          items: [
            "Aligned game results with corresponding lines to compute implied probability, actual hit rate and simple ROI per scenario.",
          ],
        },
        {
          title: "Season-consistent methods",
          items: [
            "Kept definitions and calculations identical year to year so multi-season comparisons stay valid.",
          ],
        },
        {
          title: "Decision-ready packaging",
          items: [
            "Delivered per-scenario tables and a short viability ranking so strong and weak angles are obvious quickly.",
          ],
        },
      ],
      highlights: [
        "Four-season MLB descriptive analysis of game outcomes vs betting odds.",
        "Standard metrics per scenario: win rate, average line, implied vs actual probability, ROI.",
        "Clear ranking write-up and spreadsheet/tables for fast viability decisions.",
      ],
      skills: [
        "MLB Domain Knowledge",
        "Statistical Analysis",
        "Descriptive Statistics",
        "Excel / Spreadsheets",
        "R Programming",
        "Data Analytics",
        "Data Visualization",
        "Sports Odds Analysis",
      ],
      results:
        "A clean, MLB-aware statistical assessment that shows — scenario by scenario — which angles look viable across four seasons and which do not, with transparent metrics and a ranked summary.",
    },
  },
  {
    slug: "customer-pricing-excel-macro",
    title: "Customer Pricing Analysis — Excel Macro Workbook",
    category: "Automation",
    badge: "Excel VBA · Pricing Analysis · Macro-Enabled Workbook",
    summary:
      "Fully automated macro-enabled Excel workbook for customer pricing analysis — select a customer by name, pull effective net and shareholder prices, model Pricing Incentive % changes, and auto-update variance to shareholder.",
    stack: ["Excel VBA", "Macros", "Pricing Logic", "Data Validation"],
    accent: "ember",
    image: "customerpricing",
    url: "https://www.freelancer.com/projects/excel-macros/Excel-Macro-Automation-40570123/proposals",
    detail: {
      role: "Excel VBA / Spreadsheet Automation Developer",
      client: "Customer pricing analysis template (macro-enabled workbook)",
      liveUrl:
        "https://www.freelancer.com/projects/excel-macros/Excel-Macro-Automation-40570123/proposals",
      stackFull: [
        "Excel VBA / Macro Automation",
        "Customer Name Dropdown (Data Validation)",
        "Effective Net Price from PriceLists",
        "Shareholder Pricing Baseline Comparison",
        "Pricing Incentive % → Updated Net Price",
        "Updated Variance to Shareholder",
        "Auto-Clear Incentives on Customer Change",
        "Item Prices / SKU Matching",
      ],
      overview:
        "A pricing template that used to be locked to fake Plastermax data becomes a reusable analysis tool: pick any customer from Customer List by name, load their effective net prices and shareholder baselines onto Data Update, enter Pricing Incentive percentages, and let the macro recalculate updated net prices and variance to shareholder — clearing stale incentives whenever the customer changes.",
      problem:
        "Manual customer swaps leave old incentive percentages behind, Price P/M doesn’t reflect true effective net from PriceLists, and incentive math that tweaks approximate base discount instead of the current effective net price produces the wrong final prices and variance.",
      solution:
        "I built a macro-enabled workbook workflow: Customer List drives a name dropdown; selection loads PriceLists effective net prices and shareholder prices onto Data Update (Price P/M renamed to Effective Net Price); Pricing Incentive % adjusts the current effective net (negative % raises price, positive % lowers it); Updated Variance to Shareholder recalculates automatically; changing customers clears the incentive column.",
      featureGroups: [
        {
          title: "Customer selection & data pull",
          items: [
            "Dropdown of customer names from the Customer List sheet (by name, not account number)",
            "Replaces template Plastermax placeholder data when another customer is selected",
            "Pulls item pricing context from Item Prices for SKU/code matching",
            "Loads effective net prices from PriceLists onto Data Update",
            "Pulls shareholder pricing first as the baseline comparison",
            "Clears/resets Pricing Incentive column on customer change to prevent carry-over mistakes",
          ],
        },
        {
          title: "Pricing incentive & variance logic",
          items: [
            "Renames/adjusts Price P/M → Effective Net Price (true net from PriceLists)",
            "Pricing Incentive accepts percentage change against current effective net price — not approximate base discount",
            "Negative % (e.g. −2%) reduces discount → final price goes up",
            "Positive % (e.g. +2%) increases discount → final price goes down",
            "Example: item 12703600 at $1.91/m with −2% adjusts that $1.91 by 2%, not the discount rate alone",
            "Updated Variance to Shareholder recalculates from the new effective net vs shareholder price",
          ],
        },
      ],
      contributionIntro:
        "I automated the full pricing-analysis loop in Excel so analysts can switch customers, model incentive percentages correctly against effective net, and see shareholder variance update without spreadsheet guesswork.",
      contributions: [
        {
          title: "Name-based customer switch",
          items: [
            "Wired Customer List into a dropdown and reset Pricing Incentive whenever the selection changed.",
          ],
        },
        {
          title: "Effective net as source of truth",
          items: [
            "Bound Data Update to PriceLists effective net prices and shareholder baselines instead of approximate P/M labels.",
          ],
        },
        {
          title: "Incentive on current net, not base discount",
          items: [
            "Implemented % adjustments against the customer’s current effective net so −/+ incentives move price in the intended direction.",
          ],
        },
        {
          title: "Auto variance refresh",
          items: [
            "Recalculated Updated Variance to Shareholder after every incentive-driven net price change.",
          ],
        },
      ],
      highlights: [
        "Macro-enabled Excel: customer-by-name dropdown, auto price pull, incentive modelling, variance update.",
        "Incentive % applied to current effective net price — not approximate base discount.",
        "Pricing Incentive column clears on customer change to avoid stale percentages.",
      ],
      skills: [
        "Excel VBA / Macros",
        "Spreadsheet Automation",
        "Pricing Analysis",
        "Data Validation / Dropdowns",
        "Financial Spreadsheet Logic",
        "Workbook Architecture",
      ],
      results:
        "A working .xlsm pricing template that selects customers by name, pulls customer and shareholder prices, applies incentive percentages to effective net correctly, updates variance to shareholder, and resets incentives on customer change.",
    },
  },
  {
    slug: "polymarket-trading-bot",
    title: "Polymarket Trading Bot — Automated Prediction Markets",
    category: "Trading & Blockchain",
    badge: "Polymarket · Smart Contracts · APIs · Automated Trading",
    summary:
      "Custom Polymarket trading bot that automates prediction-market strategies — real-time market monitoring, smart order execution, copy trading, risk controls and on-chain wallet/position management via Polymarket smart contracts and APIs.",
    stack: ["Polymarket", "Smart Contracts", "Trading APIs", "Risk Logic"],
    accent: "sky",
    image: "polymarketbot",
    detail: {
      role: "Blockchain / Trading Systems Developer",
      client: "Custom Polymarket prediction-market trading bot",
      stackFull: [
        "Polymarket Smart Contract Integration",
        "Polymarket / CLOB APIs",
        "Automated Market Monitoring",
        "Smart Order Execution (Buy / Sell)",
        "Copy Trading",
        "Position Management",
        "Risk Management (Sizing, Stops, Exposure Limits)",
        "Wallet & On-Chain Transaction Handling",
        "Configurable Strategy Logic",
        "Low-Latency Execution Path",
      ],
      overview:
        "A custom Polymarket trading bot built to automate prediction-market strategies with speed, accuracy and reliability. It talks directly to Polymarket’s smart contracts and APIs for continuous market monitoring, order execution, copy trading and position management — with configurable strategy logic and risk controls suited to competitive, fast-moving markets.",
      problem:
        "Manual Polymarket trading can’t keep up with rapid price moves, multi-market watching or consistent risk rules. Traders need automated monitoring and execution that still respects position sizing, stops and exposure limits — without fragile, high-latency scripts.",
      solution:
        "I developed a bot that streams Polymarket events and prices, places buy/sell orders from predefined strategies, supports copy trading, manages open positions, and handles wallet/on-chain transactions securely — with strategy knobs and risk gates for different market conditions.",
      featureGroups: [
        {
          title: "Market monitoring & execution",
          items: [
            "Automated real-time tracking of Polymarket events and price movements",
            "Smart order execution — places buy/sell orders instantly from predefined strategies",
            "Copy trading support alongside primary strategy flows",
            "Position management for open prediction-market exposure",
            "Direct interaction with Polymarket smart contracts and APIs",
            "High-performance, low-latency path optimised for competitive markets",
          ],
        },
        {
          title: "Risk, wallets & configuration",
          items: [
            "Risk management logic: position sizing, stop conditions and exposure limits",
            "Secure wallet interaction and on-chain transaction handling",
            "Easily configurable strategy logic for different market conditions",
            "Reliable automation focused on speed, accuracy and consistent rule enforcement",
          ],
        },
      ],
      contributionIntro:
        "I designed and built the Polymarket automation stack end to end — market feeds, contract/API execution, copy trading, risk gates and wallet/position handling.",
      contributions: [
        {
          title: "Contract & API integration",
          items: [
            "Connected the bot to Polymarket smart contracts and APIs for monitoring and on-chain/order-book execution.",
          ],
        },
        {
          title: "Strategy-driven order flow",
          items: [
            "Implemented instant buy/sell execution from configurable strategies, including copy-trading paths.",
          ],
        },
        {
          title: "Risk & exposure controls",
          items: [
            "Added position sizing, stop conditions and exposure limits so automation stays bounded.",
          ],
        },
        {
          title: "Wallet & position ops",
          items: [
            "Handled secure wallet transactions and ongoing position management for live prediction markets.",
          ],
        },
      ],
      highlights: [
        "Custom Polymarket bot for automated prediction-market monitoring and execution.",
        "Smart orders, copy trading and position management via Polymarket contracts and APIs.",
        "Risk controls and configurable strategies tuned for low-latency competitive markets.",
      ],
      skills: [
        "Polymarket / Prediction Markets",
        "Smart Contract Integration",
        "Trading Bot Development",
        "API Integration",
        "Risk Management Systems",
        "Wallet / On-Chain Execution",
        "Low-Latency Automation",
        "Strategy Configuration",
      ],
      results:
        "A reliable Polymarket trading bot that monitors markets in real time, executes strategy-driven orders, manages positions and wallets on-chain, and enforces risk limits under configurable trading logic.",
      gallery: [
        {
          label: "Bot execution log & BTC/ETH signal dashboard",
          image: "polymarketbot",
        },
        {
          label: "Solana Up or Down — live Polymarket trade UI",
          image: "polymarketsol",
        },
        {
          label: "Bitcoin Up or Down — live Polymarket trade UI",
          image: "polymarketbtc",
        },
      ],
    },
  },
  {
    slug: "automated-trading-strategy-suite",
    title: "Automated Trading Strategy Suite — NinjaTrader & Analytics",
    category: "Trading & Blockchain",
    badge: "NinjaTrader · Thinkorswim · Algo Execution · Risk Management",
    summary:
      "Automated trading strategy suite with NinjaTrader long/short execution, trailing stops and close logic, plus Thinkorswim custom analytics for gaps, spikes, range and volume-driven decision support.",
    stack: ["NinjaTrader", "Thinkorswim", "Algo Trading", "Risk Logic"],
    accent: "ember",
    image: "ninjatraderstrategy",
    detail: {
      role: "Algorithmic Trading / Strategy Developer",
      client: "Automated futures/equity trading strategy suite",
      stackFull: [
        "NinjaTrader Strategy Automation",
        "Long / Short Order Execution",
        "Trailing Stop & Close-Position Logic",
        "Chart Signal Annotation (Entries / Exits)",
        "Thinkorswim Custom Analytics Overlay",
        "Gap / Spike / Range Statistical Summaries",
        "Volume & Price-Action Decision Support",
        "Risk Management Visualisation",
      ],
      overview:
        "A discretionary-to-automated trading toolkit spanning execution and research: NinjaTrader strategies that place and manage long/short trades with trail stops and explicit close markers, paired with Thinkorswim chart analytics that surface gap frequency, average spikes, open-to-close behaviour and volume context for faster strategy decisions.",
      problem:
        "Manual chart watching misses entries, trailing exits and post-trade review. Traders need strategies that mark fills and trail risk on the chart, plus research overlays that quantify gaps, spikes and range behaviour instead of reinventing stats each session.",
      solution:
        "I built and demonstrated an automated NinjaTrader execution layer (long/short entries, trail stops, close-position paths with support/resistance context) and a Thinkorswim analytics overlay that aggregates gap, spike, range and volume statistics directly on the price chart for strategy monitoring and refinement.",
      featureGroups: [
        {
          title: "NinjaTrader automated execution",
          items: [
            "Candlestick chart strategy with annotated long and short entries",
            "Close-position markers showing exact exit prices",
            "Trailing stop path visualised against live price action",
            "Support/resistance style levels for context around entries and exits",
            "Session-length monitoring from open through afternoon price discovery",
          ],
        },
        {
          title: "Thinkorswim research analytics",
          items: [
            "Custom top-of-chart stats: gaps above threshold, average gap %, average spike",
            "Open/close behaviour summaries (close above/below open averages)",
            "Average dollar range and previous-volume context",
            "Signal markers and event lines over multi-year daily charts",
            "Gap-high reference levels plotted against current price",
          ],
        },
      ],
      contributionIntro:
        "I developed the strategy execution and analytics presentation so automated trades and statistical context stay visible on the same platforms traders already use.",
      contributions: [
        {
          title: "Execution & risk on chart",
          items: [
            "Wired NinjaTrader long/short fills, trail stops and close markers so every trade path is auditable on the candlestick chart.",
          ],
        },
        {
          title: "Statistical decision overlay",
          items: [
            "Built Thinkorswim analytics boxes for gaps, spikes, range and volume so research feeds the next strategy tweak.",
          ],
        },
        {
          title: "Session & multi-timeframe clarity",
          items: [
            "Presented intraday automated runs alongside multi-year daily analytics for both live execution review and historical study.",
          ],
        },
      ],
      highlights: [
        "NinjaTrader strategy chart with long/short entries, trail stops and close-position paths.",
        "Thinkorswim overlay quantifying gaps, spikes, range and volume for strategy research.",
        "Clear visual proof of automated execution plus data-driven market monitoring.",
      ],
      skills: [
        "NinjaTrader Strategy Development",
        "Algorithmic Trading",
        "Thinkorswim / Chart Analytics",
        "Risk Management (Trailing Stops)",
        "Technical Analysis Automation",
        "Trade Execution Visualisation",
        "Statistical Market Research",
      ],
      results:
        "A trading strategy suite that shows automated NinjaTrader entries, exits and trail-stop risk on chart, with Thinkorswim analytics that quantify gap/spike/range behaviour for ongoing strategy improvement.",
      gallery: [
        {
          label: "NinjaTrader — automated long/short entries & trail stops",
          image: "ninjatraderstrategy",
        },
        {
          label: "Thinkorswim — gap/spike/range analytics overlay",
          image: "thinkorswimanalytics",
        },
      ],
    },
  },
  {
    slug: "tradingview-pine-strategy-suite",
    title: "TradingView Pine Strategies — Pivots, Breakouts & PPV1",
    category: "Trading & Blockchain",
    badge: "TradingView · Pine Script v5 · Crypto · Signal Strategies",
    summary:
      "Custom TradingView Pine Script strategies and overlays — pivot/missed-reversal structure on BTC, plus PPV1 with breakout signals, Adaptive SuperTrend context and ATR volatility clustering on crypto pairs.",
    stack: ["TradingView", "Pine Script", "Crypto Charts", "Signals"],
    accent: "violet",
    image: "tradingviewppv1",
    detail: {
      role: "Pine Script / Trading Strategy Developer",
      client: "Custom TradingView crypto strategy & indicator suite",
      stackFull: [
        "TradingView Charting Platform",
        "Pine Script v5 Strategies",
        "Pivot High/Low & Missed Reversal Levels",
        "Breakout Signal Overlays",
        "Adaptive SuperTrend Context",
        "ATR Volatility Clustering Table",
        "Buy / Sell Signal Annotation",
        "Multi-Pair Crypto Charts (BTC, SUI and more)",
      ],
      overview:
        "A TradingView-centred strategy suite built in Pine Script: structural pivot and missed-reversal mapping on BTC/USD, and the PPV1 strategy combining D-shape breakout signals, Adaptive SuperTrend bias and a live ATR volatility-cluster table so traders see regime, structure and entries on one chart.",
      problem:
        "Off-the-shelf indicators don’t encode a trader’s specific pivot, breakout and volatility rules. Crypto desks need Pine strategies that mark highs/lows, missed reversals, breakout ups/downs and current ATR regime without jumping between scripts.",
      solution:
        "I developed and charted Pine Script overlays and the PPV1 strategy — pivot high/low with missed-reversal markers and zigzag structure, plus breakout buy/sell boxes, SuperTrend context and a volatility cluster summary — runnable on TradingView across Bitstamp, Binance and similar feeds.",
      featureGroups: [
        {
          title: "Pivot structure & missed reversals",
          items: [
            "Pivot Points High Low & Missed Reversal Levels overlay on BTC/USD (Bitstamp)",
            "Teal/red pivot arrows at local troughs and peaks",
            "Missed-reversal (ghost) markers where structure was skipped",
            "Zigzag structure lines and horizontal support/resistance from pivots",
            "Multi-hour 3-minute session monitoring through sharp bearish moves",
          ],
        },
        {
          title: "PPV1 strategy & volatility regime",
          items: [
            "Pine Script v5 strategy(\"PPV1 Strategy\", overlay=true)",
            "LuxAlgo-style D-shape breakout buy/sell signal boxes",
            "Adaptive SuperTrend shaded trend context",
            "Cluster Number (Volatility Level) table — high/medium/low ATR centroids and sizes",
            "Current volatility status (e.g. LOW ATR) on SUI/USDT and other crypto pairs",
            "1-minute execution-style charting with Pine Editor workflow",
          ],
        },
      ],
      contributionIntro:
        "I authored the Pine Script strategy and chart overlays so structure, breakouts and volatility regime stay visible for discretionary confirmation or automated signal review on TradingView.",
      contributions: [
        {
          title: "Structural pivot mapping",
          items: [
            "Implemented pivot high/low and missed-reversal visualisation so market structure stays readable on fast BTC charts.",
          ],
        },
        {
          title: "PPV1 signal stack",
          items: [
            "Combined breakout ups/downs with Adaptive SuperTrend bias inside a Pine v5 strategy overlay.",
          ],
        },
        {
          title: "Volatility clustering HUD",
          items: [
            "Added ATR-based high/medium/low cluster stats and a current-regime readout for strategy filters.",
          ],
        },
      ],
      highlights: [
        "TradingView Pine suite spanning BTC pivot/missed-reversal structure and PPV1 crypto signals.",
        "Breakout buy/sell markers with Adaptive SuperTrend and ATR volatility clustering.",
        "Pine Script v5 strategy workflow shown live in the Pine Editor on crypto pairs.",
      ],
      skills: [
        "TradingView",
        "Pine Script v5",
        "Crypto Technical Analysis",
        "Strategy Development",
        "Pivot / Structure Indicators",
        "Volatility / ATR Analytics",
        "Signal Overlay Design",
      ],
      results:
        "A TradingView Pine strategy suite that maps pivot structure and missed reversals on BTC, and runs PPV1 breakout/SuperTrend/volatility-cluster signals on crypto pairs for clearer, rule-based chart decisions.",
      gallery: [
        {
          label: "PPV1 Strategy — breakouts, SuperTrend & ATR clusters (SUI/USDT)",
          image: "tradingviewppv1",
        },
        {
          label: "Pivot high/low & missed reversals — BTC/USD Bitstamp",
          image: "tradingviewpivots",
        },
      ],
    },
  },
  {
    slug: "short-strategy-backtest-visualization",
    title: "Short Strategy Backtest — Entries, Targets & Trend Regime",
    category: "Trading & Blockchain",
    badge: "Algo Backtest · Short Entries · Profit Targets · Trend Filters",
    summary:
      "Algorithmic short-strategy backtest visualization — annotated short entries, profit-target exits, magenta signal triggers and bearish regime shading with dynamic resistance channels on a trending candlestick chart.",
    stack: ["Algo Backtesting", "Short Strategy", "Risk Targets", "Chart Signals"],
    accent: "ember",
    image: "shortstrategybacktest",
    detail: {
      role: "Algorithmic Trading / Backtest Developer",
      client: "Short-bias strategy backtest & chart annotation suite",
      stackFull: [
        "Strategy Backtesting Visualisation",
        "Short Entry Signal Annotation",
        "Profit Target Exit Markers",
        "Trend / Regime Background Filters",
        "Dynamic Resistance Channel Overlays",
        "Signal Trigger Markers",
        "Trade Path Audit on Candlestick Charts",
      ],
      overview:
        "A chart-first backtest view of a bearish short strategy: price falls through a red regime band while the system stamps Short #n entries, profit-target hits and proprietary signal squares — with jagged resistance channels tracking the downtrend so every fill and exit stays auditable on the candles.",
      problem:
        "Raw backtest P&L tables don’t show whether shorts fired at the right structure or if targets were hit cleanly. Traders need the full path — entry, target, regime filter and channel context — drawn on the same chart used for review.",
      solution:
        "I produced an annotated backtest visualisation that plots numbered short entries with prices, profit-target exits, magenta signal markers, red regime shading and multi-line bearish channels so strategy behaviour is readable at a glance during strong downtrends.",
      featureGroups: [
        {
          title: "Trade execution annotations",
          items: [
            "Numbered short entries (Short #1, #2, …) with fill prices",
            "Blue downward entry markers on the candlestick series",
            "Profit target exits with circular markers and labeled prices",
            "Magenta square signal triggers on selected bars",
          ],
        },
        {
          title: "Regime & structure context",
          items: [
            "Light-red vertical shading for bearish / active-strategy periods",
            "Jagged red dynamic resistance / channel lines following price lower",
            "Horizontal support/resistance stubs for local structure",
            "Clear bearish session path from highs into sustained lower prices",
          ],
        },
      ],
      contributionIntro:
        "I built the backtest chart layer so short entries, targets and regime filters stay visually tied to price — making strategy review faster than spreadsheet-only reports.",
      contributions: [
        {
          title: "Entry & target labeling",
          items: [
            "Annotated each short fill and profit-target exit with sequence numbers and prices on the chart.",
          ],
        },
        {
          title: "Regime shading",
          items: [
            "Highlighted active bearish periods so viewers see when the strategy was allowed to press shorts.",
          ],
        },
        {
          title: "Channel context",
          items: [
            "Overlaid dynamic resistance channels so entries and exits sit in structural context, not floating markers alone.",
          ],
        },
      ],
      highlights: [
        "Backtest chart with numbered short entries and labeled profit-target exits.",
        "Bearish regime shading plus dynamic resistance channels for structure.",
        "Signal squares and trade markers that make algo behaviour audit-ready.",
      ],
      skills: [
        "Algorithmic Trading",
        "Strategy Backtesting",
        "Chart Annotation / Visualisation",
        "Short-Bias Strategy Design",
        "Risk / Profit Target Logic",
        "Technical Trend Filters",
      ],
      results:
        "A clear short-strategy backtest visualisation that shows where entries fired, where profit targets filled, and how regime filters and channels framed the bearish move.",
    },
  },
  {
    slug: "mouse-trap-picture-book",
    title: "Mouse Trap — Children's Picture Book",
    category: "Logo & Graphic Design",
    badge: "Picture Book · Illustration · Children's Story · Print Layout",
    summary:
      "Illustrated children's picture book Mouse Trap — a Pixar-style farm fable about empathy and awareness, following Christopher the mouse when friends dismiss the danger of mouse traps.",
    stack: ["Illustration", "Picture Book", "Character Design", "Print Layout"],
    accent: "lime",
    image: "mousetrapcover",
    url: "https://drive.google.com/file/d/1b0t0nIVUHPfvcpV2NUy26bbMtQ9BC6s_/view?usp=sharing",
    detail: {
      role: "Children's Book Illustrator / Picture Book Designer",
      client: "Mouse Trap — picture book by Amos Powell (illus. Sophia Bennett)",
      liveUrl:
        "https://drive.google.com/file/d/1b0t0nIVUHPfvcpV2NUy26bbMtQ9BC6s_/view?usp=sharing",
      stackFull: [
        "Children's Picture Book Design",
        "Character Illustration (Christopher the Mouse)",
        "3D / Pixar-Style Farm World",
        "Cover Design & Title Typography",
        "Interior Page Layout & Image Wrap",
        "Print-Ready Square Format (BookWright)",
        "Story Sequencing Across Spreads",
      ],
      overview:
        "Mouse Trap is a charming farmyard picture book: early one morning Mouse races to warn Chicken, Pig and Cow that the Farmer has set mouse traps — but each friend shrugs that “a mouse trap isn’t for me.” When Mouse overhears the Farmer’s feast plans, he learns a harder lesson about empathy, awareness and who truly cares. Bright 3D Pixar-style scenes carry Christopher the mouse through a funny, meaningful story for young readers.",
      problem:
        "Moral stories for kids fall flat without warm characters and readable pacing. Flat clip-art farms don’t sell the panic, humour or heart of Mouse’s warning — and print books need a cohesive cover-to-interior system, not disconnected doodles.",
      solution:
        "I delivered a complete illustrated picture-book treatment: expressive animal characters in a glowing farm world, a cover starring Christopher with bindle under the moon, and sequenced interiors that match dialogue beats — chicken, pig and cow indifference, the stove hideout and the feast reveal — ready as a square print PDF.",
      featureGroups: [
        {
          title: "Story & characters",
          items: [
            "Protagonist Christopher the mouse — red vest, bindle, big expressive eyes",
            "Supporting cast: Chicken, Pig and Cow who dismiss the danger",
            "Themes: empathy, awareness and caring even when “it’s not my problem”",
            "Reflection prompt tied to Proverbs 18:24 — good friends are hard to find",
            "Cliffhanger close: packed bag, washed hands, leaving the farm (“To be continued”)",
          ],
        },
        {
          title: "Art & print delivery",
          items: [
            "Bright 3D Pixar-style farmhouse, barn and night-path environments",
            "Cover: MOUSE TRAP title, Author Amos Powell, moonlit farm path",
            "Interior spreads timed to dialogue and emotion beats",
            "Large-square print layout (BookWright / premium lustre production path)",
            "Full manuscript PDF for review and print handoff",
          ],
        },
      ],
      contributionIntro:
        "I shaped Mouse Trap as a finished children's picture book — character-led illustration, cover hierarchy and print-ready page flow that keep the moral story warm and funny.",
      contributions: [
        {
          title: "Character-first world",
          items: [
            "Designed Christopher and the farm cast so panic, pride and indifference read clearly to kids.",
          ],
        },
        {
          title: "Cover that sells the journey",
          items: [
            "Built a moonlit cover of Mouse leaving the farm with bindle — title-forward and emotionally clear.",
          ],
        },
        {
          title: "Print-ready sequencing",
          items: [
            "Laid out square interiors that pace warning → rejection → revelation for a cohesive book PDF.",
          ],
        },
      ],
      highlights: [
        "Complete Mouse Trap children's picture book with Pixar-style farm illustration.",
        "Empathy-focused fable: mouse traps, indifferent friends and a hard choice to leave.",
        "Print-ready square PDF cover and interiors for author Amos Powell.",
      ],
      skills: [
        "Children's Book Illustration",
        "Character Design",
        "Picture Book Layout",
        "Cover Design",
        "Digital Illustration",
        "Print Production",
        "Storyboarding / Sequencing",
      ],
      results:
        "A finished illustrated picture book PDF — Mouse Trap — that teaches empathy through Christopher the mouse’s farmyard journey, with cover and interiors ready for print review.",
      gallery: [
        {
          label: "Cover — Christopher leaving the farm under the moon",
          image: "mousetrapcover",
        },
        {
          label: "Interior spread — farmyard story scene",
          image: "mousetrapinterior",
        },
      ],
    },
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard Platform",
    category: "Web & SaaS",
    summary:
      "A realtime analytics console with role-based access, custom widgets and exportable reports for a B2B operations team.",
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    accent: "cyan",
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
    category: "Trading & Blockchain",
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
