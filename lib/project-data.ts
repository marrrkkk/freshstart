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
    name: "Operations control center",
    eyebrow: "Internal operations platform",
    category: "Product strategy, UX & development",
    headline: "A clearer working day for a growing service team.",
    summary: "A focused internal workspace for scheduling work, tracking hand-offs, and giving team leads a reliable view of what needs attention next.",
    context: "A growing service business was coordinating delivery through spreadsheets, chat threads, and a collection of one-off trackers. We brought the daily operating picture into one place without turning it into another noisy dashboard.",
    challenge: "The product needed to support different roles and working rhythms: coordinators planning the day, specialists completing work, and leads checking exceptions without slowing everyone down.",
    approach: [
      { title: "Start with the working day", copy: "We mapped morning planning, priority changes, and end-of-day hand-offs before deciding what belonged on the first screen." },
      { title: "Make ownership visible", copy: "Work is grouped by status, owner, and due date so a lead can spot the next conversation without opening every record." },
      { title: "Leave room to grow", copy: "Shared patterns make it straightforward to add new workstreams and reporting views without rebuilding the interface." },
    ],
    deliverables: ["Product strategy", "UX flows", "Interface design", "Design system", "Next.js implementation"],
    outcome: "The result is a practical workspace that turns a busy operating picture into a clear set of next moves.",
    accent: "orange",
  },
  {
    slug: "customer-portal",
    name: "Customer service portal",
    eyebrow: "Customer account experience",
    category: "Journey mapping, UX & web application",
    headline: "The everyday service tasks, made easier to finish.",
    summary: "A customer portal for requests, documents, appointments, and updates—designed to answer routine questions before they become support tickets.",
    context: "Customers were using email for routine updates, document requests, and changes to their service. The team needed a useful digital front door that could handle the everyday while keeping human support close by.",
    challenge: "The experience had to make a complex service model feel simple without hiding important context or making customers feel like they had been pushed away from the team.",
    approach: [
      { title: "Use plain-language pathways", copy: "We replaced internal labels with familiar customer tasks and shaped each journey around one clear outcome." },
      { title: "Put context beside the action", copy: "Status, history, and document details appear at the moment a customer needs to make a decision." },
      { title: "Keep support close", copy: "Escalation paths stay visible throughout, so self-service never becomes a dead end." },
    ],
    deliverables: ["Customer journey mapping", "Information architecture", "UI design", "Responsive portal build", "Support handoff patterns"],
    outcome: "Customers get faster answers to routine needs, while the support team can spend more time on conversations that need judgement.",
    accent: "ink",
  },
  {
    slug: "commerce-experience",
    name: "Retail storefront",
    eyebrow: "Direct-to-consumer commerce",
    category: "Commerce UX, design system & development",
    headline: "A storefront that helps people choose with confidence.",
    summary: "A considered retail experience with clearer product discovery, useful buying details, and a checkout flow designed for mobile browsing.",
    context: "The brand had strong products and repeat customers, but the existing store made browsing feel dense and product details hard to compare on a phone. The goal was a more deliberate route from inspiration to order.",
    challenge: "We needed to make the catalogue feel richer without making it feel heavier, especially for customers comparing products on smaller screens or slower connections.",
    approach: [
      { title: "Edit the decision points", copy: "Product pages foreground the details shoppers need first: size, finish, delivery, and the right next option." },
      { title: "Design the mobile route first", copy: "Navigation, cart feedback, and checkout were shaped around thumb-friendly, low-friction interactions." },
      { title: "Let the products lead", copy: "A restrained visual system gives photography, editorial moments, and customer reviews room to do the selling." },
    ],
    deliverables: ["Commerce UX", "Art direction", "Product page system", "Checkout optimisation", "Responsive development"],
    outcome: "The new experience gives the brand a more confident digital shelf—thoughtful in the details and quick where it counts.",
    accent: "sand",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
