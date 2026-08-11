/* ─── Types ─── */
export interface ServiceFeature {
  iconName: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  iconName: string;
  label: string;
  tagline: string;
  description: string;
  heroDetail: string;
  features: ServiceFeature[];
  included: string[];
  pricing: PricingTier[];
  faq: FaqItem[];
}

/* ─── Services ─── */
export const services: ServiceData[] = [
  {
    slug: "product-design-ux",
    iconName: "PenTool",
    label: "Product Design & UX",
    tagline: "Interfaces that make sense to your users.",
    description:
      "We design the structure before the visuals. You'll get clear user flows, intuitive layouts, and a design system that your developers can actually work with.",
    heroDetail: "Product design · User experience · Interface design",
    features: [
      {
        iconName: "Layers3",
        title: "UX research & strategy",
        description:
          "User flows, site mapping, and information architecture. We figure out what goes where before designing a single screen.",
      },
      {
        iconName: "Palette",
        title: "Design systems",
        description:
          "Reusable components with consistent spacing, typography, and colors. Your developers get a clear reference for every button, input, and layout.",
      },
      {
        iconName: "MousePointerClick",
        title: "Interactive prototypes",
        description:
          "Clickable Figma prototypes you can test with users before development starts. See exactly how the interface works, not just how it looks.",
      },
      {
        iconName: "MonitorSmartphone",
        title: "Responsive layouts",
        description:
          "Mobile, tablet, and desktop layouts designed together. Your site adapts properly to every screen size, not just shrinks down.",
      },
      {
        iconName: "Layout",
        title: "Developer handoff",
        description:
          "Organized Figma files with spacing tokens, component variants, and annotations. Developers can build exactly what you approved.",
      },
      {
        iconName: "Component",
        title: "Modular components",
        description:
          "Atomic design principles that let you build new pages from existing pieces. Add features without redesigning from scratch.",
      },
    ],
    included: [
      "User research & user flows",
      "Wireframes & low-fidelity mockups",
      "High-fidelity UI design (all screens)",
      "Interactive Figma prototype",
      "Design system & component library",
      "Responsive breakpoints (mobile, tablet, desktop)",
      "Developer handoff documentation",
      "2 revision rounds",
    ],
    pricing: [
      {
        name: "Starter",
        price: "₱25,000",
        description: "For landing pages and small marketing sites.",
        features: [
          "Up to 5 unique screens",
          "Mobile + desktop layouts",
          "Basic wireframes",
          "Figma design files",
          "1 round of revisions",
          "3-day turnaround",
        ],
      },
      {
        name: "Growth",
        price: "₱55,000",
        description: "For products that need a complete design system.",
        highlighted: true,
        badge: "Most Popular",
        features: [
          "Up to 15 unique screens",
          "Full responsive breakpoints",
          "UX research & user flows",
          "Interactive Figma prototype",
          "Design system with tokens",
          "2 rounds of revisions",
          "7-day turnaround",
        ],
      },
      {
        name: "Scale",
        price: "₱120,000",
        description: "For complex web applications and multi-product platforms.",
        features: [
          "Unlimited screens",
          "Full UX strategy & research",
          "Advanced interactive prototype",
          "Complete design system",
          "Component library documentation",
          "Accessibility audit (WCAG)",
          "3 rounds of revisions",
          "Priority support",
        ],
      },
    ],
    faq: [
      {
        question: "What design tools do you use?",
        answer:
          "We primarily use Figma for all our design work. It's industry-standard, collaborative, and makes handoff to developers seamless. You'll get full access to all project files.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Each package includes revision rounds. Starter gets 1, Growth gets 2, Scale gets 3. Need more? We charge a flat rate for additional revisions.",
      },
      {
        question: "Do you do user research?",
        answer:
          "Growth and Scale packages include UX research—user flows, competitor analysis, and site structure. We can add research to Starter as an optional add-on.",
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer:
          "Absolutely. We'll incorporate your existing brand colors, typography, and visual identity into the design. If you don't have brand guidelines yet, we can help establish them.",
      },
      {
        question: "How long does the design process take?",
        answer:
          "Starter: 3-5 days. Growth: 1-2 weeks. Scale: 2-4 weeks. We'll confirm your exact timeline during the discovery call.",
      },
      {
        question: "Do you also handle the development?",
        answer:
          "Yes! We offer end-to-end services. Many clients pair our Product Design & UX with our Custom Web Development service for a seamless design-to-code pipeline.",
      },
    ],
  },
  {
    slug: "web-development",
    iconName: "Code2",
    label: "Web Development",
    tagline: "Web applications that work from day one.",
    description:
      "We build with Next.js, React, and TypeScript. You'll get production-ready code, clear documentation, and a site that your team can maintain.",
    heroDetail: "Web apps · Marketing sites · E-commerce",
    features: [
      {
        iconName: "Rocket",
        title: "Next.js & React",
        description:
          "Server-side rendering, static generation, and React Server Components. Modern architecture that loads fast and handles traffic.",
      },
      {
        iconName: "Gauge",
        title: "Performance optimization",
        description:
          "Optimized images, minimal bundle sizes, and fast server responses. We target 90+ Lighthouse scores on every project.",
      },
      {
        iconName: "ShieldCheck",
        title: "TypeScript & testing",
        description:
          "Type-safe code that catches errors during development, not production. Automated tests for critical user flows.",
      },
      {
        iconName: "Database",
        title: "Backend integration",
        description:
          "Connect to databases (Supabase, PostgreSQL) and third-party APIs. REST or GraphQL, depending on your needs.",
      },
      {
        iconName: "Smartphone",
        title: "Responsive design",
        description:
          "Mobile, tablet, and desktop layouts that adapt properly to each screen size. Not just shrunk down versions.",
      },
      {
        iconName: "ShoppingCart",
        title: "E-commerce builds",
        description:
          "Shopify headless or custom checkout with Stripe. Product pages optimized for speed and search visibility.",
      },
    ],
    included: [
      "Next.js / React / TypeScript codebase",
      "Responsive, mobile-first implementation",
      "CMS setup (if needed)",
      "Contact forms & email notifications",
      "SEO metadata & structured data",
      "Performance optimization (target: 90+ Lighthouse)",
      "Deployment to Vercel / your platform",
      "14 days of post-launch support",
    ],
    pricing: [
      {
        name: "Starter",
        price: "₱35,000",
        description: "For marketing sites and landing pages built with Next.js and TypeScript.",
        features: [
          "Up to 5 pages",
          "Next.js + TypeScript",
          "Responsive design implementation",
          "Contact form integration",
          "Basic SEO setup",
          "Vercel deployment",
          "7-day post-launch support",
        ],
      },
      {
        name: "Growth",
        price: "₱80,000",
        description: "For web applications that need a CMS, dynamic content, and API integrations.",
        highlighted: true,
        badge: "Most Popular",
        features: [
          "Up to 15 pages",
          "CMS integration (Sanity/Contentful)",
          "Dynamic content & filtering",
          "API integrations",
          "Advanced SEO & analytics",
          "90+ Lighthouse scores",
          "14-day post-launch support",
          "2 rounds of revisions",
        ],
      },
      {
        name: "Scale",
        price: "₱180,000",
        description: "For SaaS platforms, e-commerce stores, and applications with custom business logic.",
        features: [
          "Unlimited pages & features",
          "Full-stack development",
          "Authentication & user management",
          "Database design & integration",
          "Payment processing (Stripe)",
          "Admin dashboard",
          "Automated testing",
          "30-day post-launch support",
          "Priority Slack channel",
        ],
      },
    ],
    faq: [
      {
        question: "What tech stack do you use?",
        answer:
          "We build with Next.js, React, TypeScript, and Tailwind CSS. For databases: Supabase or PostgreSQL. We typically deploy to Vercel, but can use your preferred platform.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Starter: 1-2 weeks. Growth: 3-4 weeks. Scale: 6-10 weeks. We'll confirm your timeline during the discovery call.",
      },
      {
        question: "Do you provide hosting?",
        answer:
          "We deploy to Vercel by default—it's optimized for Next.js and has a generous free tier. We can deploy to other platforms (AWS, DigitalOcean) if needed.",
      },
      {
        question: "Can you work with an existing design?",
        answer:
          "Yes! If you already have Figma files or a design, we can implement them pixel-perfectly. If not, consider pairing this service with our Product Design & UX package.",
      },
      {
        question: "What about ongoing maintenance?",
        answer:
          "Each package includes post-launch support (7-30 days). After that, maintenance retainers start at ₱8,000/month for updates, security patches, and monitoring.",
      },
      {
        question: "Do you do e-commerce?",
        answer:
          "Yes. We build with Shopify headless or custom Stripe checkouts. The Scale package is best for full e-commerce sites with inventory management and custom features.",
      },
    ],
  },
  {
    slug: "website-redesign",
    iconName: "RefreshCw",
    label: "Website Redesign",
    tagline: "Rebuild your site with modern technology.",
    description:
      "Migrate your existing site to Next.js and React. We'll update the design, improve performance, and preserve your SEO rankings and content.",
    heroDetail: "Design refresh · Tech migration · SEO preservation",
    features: [
      {
        iconName: "RefreshCw",
        title: "Design refresh",
        description:
          "Updated layouts, typography, and visual style. We'll modernize the look while keeping your brand recognizable.",
      },
      {
        iconName: "Zap",
        title: "Platform migration",
        description:
          "Migrate from WordPress, Wix, or custom platforms to Next.js and React. Modern codebase that's easier to maintain and extend.",
      },
      {
        iconName: "Smartphone",
        title: "Mobile redesign",
        description:
          "Redesigned mobile experience with proper touch targets, readable text, and layouts that work on small screens.",
      },
      {
        iconName: "ShieldCheck",
        title: "SEO preservation",
        description:
          "301 redirects for all URLs, preserved meta tags, and maintained structured data. Your search rankings stay intact.",
      },
      {
        iconName: "Gauge",
        title: "Performance improvements",
        description:
          "Optimized images, faster load times, and improved Core Web Vitals. Better experience for users and search engines.",
      },
      {
        iconName: "Layers3",
        title: "CMS setup",
        description:
          "Set up a CMS (Sanity or Contentful) so your team can update content without developer help.",
      },
    ],
    included: [
      "Complete visual redesign",
      "Site audit & content migration",
      "Next.js / TypeScript rebuild",
      "Mobile-responsive layouts",
      "301 redirects & SEO preservation",
      "Core Web Vitals optimization",
      "CMS setup (if needed)",
      "14 days of post-migration support",
    ],
    pricing: [
      {
        name: "Starter",
        price: "₱30,000",
        description: "For small sites that need a design refresh and performance improvements.",
        features: [
          "Up to 5 pages redesigned",
          "Next.js migration",
          "Mobile layout overhaul",
          "Basic 301 redirect map",
          "Lighthouse 90+ optimization",
          "7-day post-launch support",
        ],
      },
      {
        name: "Growth",
        price: "₱65,000",
        description: "For medium sites that need platform migration, CMS integration, and SEO preservation.",
        highlighted: true,
        badge: "Most Popular",
        features: [
          "Up to 15 pages redesigned",
          "Full content & media migration",
          "CMS integration (Sanity/Contentful)",
          "Complete SEO ranking preservation",
          "Custom interactive components",
          "14-day post-launch support",
          "2 rounds of revisions",
        ],
      },
      {
        name: "Scale",
        price: "₱140,000",
        description: "For large sites with custom databases, complex migrations, and enterprise requirements.",
        features: [
          "Unlimited page migration",
          "Full database & user migration",
          "Custom CMS & API integrations",
          "Advanced conversion optimization",
          "Zero-downtime deployment",
          "30-day post-launch support",
          "Priority support channel",
        ],
      },
    ],
    faq: [
      {
        question: "Will a redesign hurt my search rankings?",
        answer:
          "Not if done properly. We map all 301 redirects, preserve your meta tags and URL structure, and improve site speed. Most sites maintain or improve their rankings.",
      },
      {
        question: "Can we keep our domain and content?",
        answer:
          "Yes. We migrate all your content (text, images, blog posts, media) to the new platform. Your domain stays the same.",
      },
      {
        question: "How long does a redesign take?",
        answer:
          "Starter projects: 1-2 weeks. Growth projects: 3-4 weeks. Scale projects: 4-8 weeks. We'll confirm your timeline during the discovery call.",
      },
      {
        question: "What platforms do you migrate from?",
        answer:
          "WordPress, Wix, Squarespace, Webflow, Shopify, and custom-built sites. We rebuild them with Next.js, React, and TypeScript.",
      },
      {
        question: "Can our team edit content after launch?",
        answer:
          "Yes. We can set up a CMS (Sanity or Contentful) so your team can update content, publish blog posts, and manage images without developer help.",
      },
      {
        question: "Will there be downtime during the launch?",
        answer:
          "No. We build on a staging server and switch DNS once you approve. The transition is instant—your site stays live throughout.",
      },
    ],
  },
  {
    slug: "ai-integration",
    iconName: "Bot",
    label: "AI Integration",
    tagline: "Add AI features to your application.",
    description:
      "Integrate AI into your existing application. Custom chatbots, document search, and workflow automation using OpenAI, Anthropic, or open-source models.",
    heroDetail: "AI chatbots · LLM integration · Workflow automation",
    features: [
      {
        iconName: "Bot",
        title: "Custom chatbots",
        description:
          "AI chatbots trained on your documentation and content. Handle common questions, provide product information, or qualify leads.",
      },
      {
        iconName: "Sparkles",
        title: "LLM API integration",
        description:
          "Integrate GPT-4, Claude, Gemini, or open-source models into your application. Generate text, analyze data, or process documents.",
      },
      {
        iconName: "Database",
        title: "Document search (RAG)",
        description:
          "Search through your documents using AI. We set up vector databases (Supabase or Pinecone) so users can ask questions in natural language.",
      },
      {
        iconName: "Zap",
        title: "Workflow automation",
        description:
          "Connect AI to your existing tools via webhooks and APIs. Auto-generate reports, send notifications, or process data based on triggers.",
      },
      {
        iconName: "ShieldCheck",
        title: "Cost management",
        description:
          "Rate limiting, usage caps, and monitoring to control AI API costs. Prevent unexpected bills and block abusive requests.",
      },
      {
        iconName: "BarChart3",
        title: "AI-powered analytics",
        description:
          "Use AI to summarize data, analyze sentiment, or categorize content. Custom dashboards that show what matters to your business.",
      },
    ],
    included: [
      "LLM API integration (OpenAI, Anthropic, or open-source)",
      "Custom chatbot interface & prompt engineering",
      "Vector database setup for document search",
      "Webhook & workflow automation setup",
      "Rate limiting & cost monitoring",
      "Responsive interface design",
      "End-to-end testing & security checks",
      "14 days of post-launch support",
    ],
    pricing: [
      {
        name: "Starter",
        price: "₱35,000",
        description: "For adding one AI feature to your existing application.",
        features: [
          "1 AI feature or chatbot",
          "OpenAI / LLM API setup",
          "System prompt engineering",
          "Basic token rate-limiting",
          "Responsive chatbot widget",
          "7-day post-launch support",
        ],
      },
      {
        name: "Growth",
        price: "₱85,000",
        description: "For AI chatbots with custom knowledge bases and workflow automation.",
        highlighted: true,
        badge: "Most Popular",
        features: [
          "Custom RAG knowledge base setup",
          "PDF & document vector search",
          "Multi-channel AI workflow triggers",
          "Admin token & usage dashboard",
          "Advanced prompt security filters",
          "14-day post-launch support",
          "2 rounds of revisions",
        ],
      },
      {
        name: "Scale",
        price: "₱190,000",
        description: "For complex AI systems with multiple features, custom models, and high-volume usage.",
        features: [
          "Multi-agent AI system design",
          "Custom model fine-tuning / RAG",
          "Complex multi-tool integrations",
          "High-volume API cost optimization",
          "Dedicated analytics dashboard",
          "30-day post-launch support",
          "Priority support channel",
        ],
      },
    ],
    faq: [
      {
        question: "Which AI models do you use?",
        answer:
          "OpenAI (GPT-4), Anthropic (Claude), Google Gemini, and open-source models. We'll recommend the best option based on your requirements and budget.",
      },
      {
        question: "Can the AI use our company documents?",
        answer:
          "Yes. We set up RAG (Retrieval-Augmented Generation) systems that index your documents. The AI searches your content and provides answers based on what it finds.",
      },
      {
        question: "How do you manage API costs?",
        answer:
          "We set usage limits per user, cache common responses, and monitor spending. You'll get alerts if costs approach your budget.",
      },
      {
        question: "How long does integration take?",
        answer:
          "Starter: 1-2 weeks. Growth: 3-4 weeks. Scale: 4-8 weeks. Timeline depends on complexity and how much testing is needed.",
      },
      {
        question: "Is our data private?",
        answer:
          "Yes. We use enterprise API endpoints that don't retain or train on your data. Your content stays private to your organization.",
      },
      {
        question: "Can we update the knowledge base?",
        answer:
          "Yes. We can build an upload interface so your team can add documents without developer help.",
      },
    ],
  },
];

/* ─── Helper ─── */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
