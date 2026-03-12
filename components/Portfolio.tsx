import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import siteData from "@/data/data.json";

const projects = siteData.projects;

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-24">
      <div className="section-frame">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-kicker">Selected work</div>
            <h2 className="mt-6 max-w-2xl text-5xl leading-none text-[#171717] sm:text-6xl">
              Sharp case-study layouts, clear value propositions, and interfaces that feel custom.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-black/70 sm:text-lg">
            We build for service businesses, product teams, and founders who want a site that feels like a competitive advantage the moment it loads.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="surface-card grid gap-6 rounded-[2rem] p-4 sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:p-8"
            >
              <div className={`relative min-h-[300px] overflow-hidden rounded-[1.5rem] border border-black/10 ${index % 2 === 0 ? "lg:order-2" : ""}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/78 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-black/72 backdrop-blur">
                  {project.category}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                    Project 0{index + 1}
                  </p>
                  <h3 className="mt-4 text-4xl leading-none text-[#171717] sm:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-black/70 sm:text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {["Strategy", "Visual system", "Build", "Launch support"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#171717]">
                  <span>Case study preview</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
