export type ProjectData = {
  slug: string;
  name: string;
  eyebrow: string;
  category: string;
  headline: string;
  summary: string;
  context: string;
  challenge: string;
  approach: { title: string; copy: string }[];
  deliverables: string[];
  outcome: string;
  accent: "orange" | "ink" | "sand";
};

export const projects: ProjectData[] = [
  {
    slug: "nova-operations",
    name: "NOVA Operations",
    eyebrow: "Operations platform",
    category: "Product design & development",
    headline: "A calmer control room for a growing operations team.",
    summary: "NOVA brings projects, people, and live priorities into one focused workspace—so teams can move from status-chasing to decision-making.",
    context: "A fast-growing service business had outgrown its collection of spreadsheets, message threads, and one-off trackers. The goal was not to add another dashboard; it was to make the daily work easier to see and act on.",
    challenge: "The work involved several teams with different rhythms. The product needed to give each person a useful starting point without hiding the bigger operational picture.",
    approach: [
      { title: "Start with the working day", copy: "We mapped the moments where hand-offs slowed down: morning planning, priority changes, and weekly reporting." },
      { title: "Make the next action obvious", copy: "The interface leads with active work, ownership, and exceptions—then lets people drill into detail when they need it." },
      { title: "Build for the next stage", copy: "A modular component system keeps new workstreams and reporting views consistent as the team grows." },
    ],
    deliverables: ["Product strategy", "UX flows", "Interface design", "Design system", "Next.js implementation"],
    outcome: "The result is a practical workspace that turns a busy operating picture into a clear set of next moves.",
    accent: "orange",
  },
  {
    slug: "customer-portal",
    name: "Customer Portal",
    eyebrow: "Service platform",
    category: "UX strategy & web application",
    headline: "Self-service that feels genuinely helpful.",
    summary: "A customer portal designed around the questions people actually ask, with clear requests, useful account context, and a calmer support experience.",
    context: "Customers were relying on email for routine updates, documents, and changes to their service. The team wanted a digital front door that could handle the everyday without making customers feel pushed away.",
    challenge: "The portal had to simplify a complex service model while still giving customers confidence that they could reach a real person when the situation called for it.",
    approach: [
      { title: "Use plain-language pathways", copy: "We replaced internal labels with familiar customer tasks and designed each journey around a single clear outcome." },
      { title: "Put reassurance in the details", copy: "Status, history, and helpful guidance appear where decisions are made—not buried in a help centre." },
      { title: "Keep support close", copy: "Escalation paths are visible throughout, so self-service never becomes a dead end." },
    ],
    deliverables: ["Customer journey mapping", "Information architecture", "UI design", "Responsive portal build", "Support handoff patterns"],
    outcome: "Customers get faster answers to routine needs, while the support team can spend more time on the conversations that need judgement.",
    accent: "ink",
  },
  {
    slug: "commerce-experience",
    name: "Commerce Experience",
    eyebrow: "E-commerce",
    category: "Conversion-focused storefront",
    headline: "A storefront that makes choosing feel easy.",
    summary: "A considered e-commerce experience for a modern brand: clearer product discovery, confident buying decisions, and a checkout that stays out of the way.",
    context: "The brand had strong products and repeat customers, but its existing store made browsing feel dense and checkout feel uncertain on mobile. The brief was to create a more deliberate route from inspiration to order.",
    challenge: "We needed to balance rich product storytelling with speed, especially for customers browsing on smaller screens or slower connections.",
    approach: [
      { title: "Edit the decision points", copy: "Product pages foreground the details shoppers need first: fit, finish, delivery, and the right next option." },
      { title: "Design the mobile route first", copy: "Navigation, cart feedback, and checkout were shaped around thumb-friendly, low-friction interactions." },
      { title: "Give the brand room to breathe", copy: "A restrained visual system lets product photography and editorial moments do the heavy lifting." },
    ],
    deliverables: ["Commerce UX", "Art direction", "Product page system", "Checkout optimisation", "Responsive development"],
    outcome: "The new experience gives the brand a more confident digital shelf—thoughtful in the details and quick where it counts.",
    accent: "sand",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
