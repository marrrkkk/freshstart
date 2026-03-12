import {
  Code,
  Laptop,
  Palette,
  ShoppingBag,
  Smartphone,
  Wrench,
} from "lucide-react";
import siteData from "@/data/data.json";

const iconMap = {
  Code,
  ShoppingBag,
  Laptop,
  Palette,
  Smartphone,
  Wrench,
};

const services = siteData.services.map((service) => ({
  ...service,
  Icon: iconMap[service.icon as keyof typeof iconMap],
}));

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="section-frame">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="section-kicker">Services</div>
            <h2 className="mt-6 max-w-md text-5xl leading-none text-[#171717] sm:text-6xl">
              Designed for teams that need more than a brochure site.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-black/70">
              We handle strategy, interface direction, and technical execution in one pass so the launch feels cohesive, not patched together.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`surface-card rounded-[2rem] p-6 sm:p-7 ${
                  index % 3 === 0 ? "md:translate-y-10" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[#171717] text-[#f6f0e3]">
                    <service.Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/38">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl text-[#171717]">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-black/70">{service.description}</p>

                <div className="mt-8 space-y-3 border-t border-black/10 pt-5">
                  {service.details.features.slice(0, 3).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-black/70"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d55d3f]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
