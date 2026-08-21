import Link from "next/link";
import { ArrowUpRight, Bot, Code2, PenTool, RefreshCw } from "lucide-react";

const services = [
  {
    number: "01",
    slug: "product-design-ux",
    icon: PenTool,
    title: "product design\n& UX",
    description:
      "We design user flows, interfaces, and visual systems that make sense to your users. Clear information architecture, intuitive navigation, purposeful interactions.",
  },
  {
    number: "02",
    slug: "web-development",
    icon: Code2,
    title: "web\ndevelopment",
    description:
      "We build web applications with Next.js, React, and TypeScript. Modern stack, clean code, built to grow with your business.",
  },
  {
    number: "03",
    slug: "website-redesign",
    icon: RefreshCw,
    title: "website\nredesign",
    description:
      "Redesign and rebuild your existing site with modern technology. We preserve your content and SEO while improving performance and user experience.",
  },
  {
    number: "04",
    slug: "ai-integration",
    icon: Bot,
    title: "AI\nintegration",
    description:
      "Add AI features to your existing application. Custom chatbots, document processing, semantic search, and workflow automation using modern LLM APIs.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative border-t border-[#eee3de] bg-[#fffdfa] py-24 sm:py-32"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white" />

      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section Header */}
        <div className="reveal grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
          {/* "Our Services" label */}
          <div className="flex items-start gap-3 pt-2 lg:pt-4">
            <span className="mt-[5px] h-px w-7 bg-[#ff6b35]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#cc4a20]">
              Our services
            </span>
          </div>

          {/* Heading + description */}
          <div className="max-w-[720px]">
            <h2
              id="services-heading"
              className="font-heading text-[clamp(2.7rem,4.6vw,4.1rem)] font-medium leading-[0.94] tracking-[-0.065em] text-[#211b18]"
            >
              Design and development
              <br />
              <span className="italic text-[#ff6b35]">for growing companies.</span>
            </h2>
            <p className="mt-7 max-w-[540px] text-[16px] leading-[1.72] text-[#716761]">
              We design and build web applications that work at scale. From initial concept to launch and beyond, we handle the full development process.
            </p>
          </div>
        </div>

        {/* Service Rows */}
        <div className="mt-16 border-t border-[#e9ddd7] sm:mt-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.number}
                href={`/services/${service.slug}`}
                className="block"
              >
                <article
                  className={`reveal ${index > 0 ? `reveal-d${index}` : ""} group grid grid-cols-[46px_1fr] items-start gap-x-4 border-b border-[#e9ddd7] py-8 transition-colors duration-300 hover:bg-[#fffaf7] sm:grid-cols-[60px_48px_1fr_1.1fr_48px] sm:items-center sm:gap-x-6 sm:py-10 lg:grid-cols-[70px_52px_0.7fr_1fr_52px] lg:gap-x-8 lg:py-12`}
                >
                  {/* Number */}
                  <span className="pt-1 text-[13px] font-medium tabular-nums text-[#b8a79f] sm:pt-0 sm:text-[14px]">
                    ({service.number})
                  </span>

                  {/* Icon */}
                  <span className="hidden size-10 place-items-center rounded-xl border border-[#eadbd4] bg-white text-[#e84f1e] shadow-[0_3px_8px_rgba(61,37,24,0.05)] transition-all duration-300 group-hover:border-[#ffb299] group-hover:bg-[#fff0e9] sm:grid lg:size-11">
                    <Icon className="size-[18px]" />
                  </span>

                  {/* Title */}
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-[1.0] tracking-[-0.05em] text-[#2a221e] transition-colors duration-300 group-hover:text-[#ff6b35]">
                      {service.title.split("\n").map((line, i) => (
                        <span key={i}>
                          {i > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="col-start-1 col-end-3 mt-4 text-[14px] leading-[1.7] text-[#716761] sm:col-start-auto sm:col-end-auto sm:mt-0 sm:text-[14.5px]">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <span className="col-start-2 row-start-1 ml-auto grid size-10 place-items-center rounded-full border border-[#eadbd4] bg-white text-[#b8a79f] shadow-[0_2px_6px_rgba(61,37,24,0.04)] transition-all duration-300 group-hover:border-[#ff6b35] group-hover:bg-[#ff6b35] group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(255,107,53,0.25)] sm:col-start-auto sm:row-start-auto sm:ml-0 lg:size-11">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
