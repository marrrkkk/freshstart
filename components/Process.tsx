import { Code2, PenTool, Rocket, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We map your current site, business goals, audience expectations, and bottlenecks before drawing anything.",
    Icon: Search,
  },
  {
    number: "02",
    title: "Direction",
    description:
      "We build the visual system and content hierarchy so every section has a reason to exist and a job to do.",
    Icon: PenTool,
  },
  {
    number: "03",
    title: "Build",
    description:
      "The interface is implemented in modern React with responsive behavior, clean structure, and launch-ready performance.",
    Icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We ship, QA the final details, and support the rollout so your new site lands cleanly with the right story.",
    Icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-24">
      <div className="section-frame rounded-[2.5rem] border border-black/10 bg-[#171717] px-5 py-12 text-[#f6f0e3] shadow-[0_30px_100px_rgba(23,23,23,0.18)] sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="section-kicker text-[#f6f0e3]/70 before:bg-[#f6f0e3]/35">Process</div>
            <h2 className="mt-6 max-w-md text-5xl leading-none sm:text-6xl">
              Tight process. No mystery phase.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#f6f0e3]/70 sm:text-lg">
              The work moves from strategy to execution without handing the project between disconnected teams.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#f6f0e3] text-[#171717]">
                    <step.Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6f0e3]/45">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-8 text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#f6f0e3]/72 sm:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
