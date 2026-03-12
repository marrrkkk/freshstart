import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactDetails = [
  {
    label: "Email",
    value: "hello@freshstart.ph",
    href: "mailto:hello@freshstart.ph",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "+63 912 345 6789",
    href: "tel:+639123456789",
    Icon: Phone,
  },
  {
    label: "Location",
    value: "Lucena City, Philippines",
    href: "#contact",
    Icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-frame grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="surface-card rounded-[2rem] p-6 sm:p-8">
          <div className="section-kicker">Contact</div>
          <h2 className="mt-6 max-w-md text-5xl leading-none text-[#171717] sm:text-6xl">
            If the current site undersells you, fix that next.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-black/70 sm:text-lg">
            Send the project brief, the pain point, or the rough idea. We can shape the rest from there.
          </p>

          <div className="mt-10 space-y-4">
            {contactDetails.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                className="flex items-center gap-4 rounded-[1.5rem] border border-black/10 bg-white/55 px-4 py-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#171717] text-[#f6f0e3]">
                  <detail.Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-black/42">
                    {detail.label}
                  </span>
                  <span className="mt-1 block text-base text-black/78">{detail.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-[#171717] p-6 text-[#f6f0e3] shadow-[0_30px_100px_rgba(23,23,23,0.18)] sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6f0e3]/45">
                Project inquiry
              </p>
              <h3 className="mt-3 text-3xl sm:text-4xl">Tell us what needs to change.</h3>
            </div>
            <ArrowRight className="hidden h-5 w-5 text-[#f5ceb1] sm:block" />
          </div>

          <form className="mt-10 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="font-semibold uppercase tracking-[0.14em] text-[#f6f0e3]/58">
                  First name
                </span>
                <Input
                  type="text"
                  placeholder="John"
                  className="h-12 rounded-[1rem] border-white/12 bg-white/10 px-4 text-[#f6f0e3] placeholder:text-[#f6f0e3]/35"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-semibold uppercase tracking-[0.14em] text-[#f6f0e3]/58">
                  Last name
                </span>
                <Input
                  type="text"
                  placeholder="Doe"
                  className="h-12 rounded-[1rem] border-white/12 bg-white/10 px-4 text-[#f6f0e3] placeholder:text-[#f6f0e3]/35"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm">
              <span className="font-semibold uppercase tracking-[0.14em] text-[#f6f0e3]/58">
                Email
              </span>
              <Input
                type="email"
                placeholder="john@company.com"
                className="h-12 rounded-[1rem] border-white/12 bg-white/10 px-4 text-[#f6f0e3] placeholder:text-[#f6f0e3]/35"
              />
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-semibold uppercase tracking-[0.14em] text-[#f6f0e3]/58">
                What are you building?
              </span>
              <Textarea
                rows={6}
                placeholder="A redesign, a new site, a dashboard, a product marketing page..."
                className="rounded-[1rem] border-white/12 bg-white/10 px-4 py-4 text-[#f6f0e3] placeholder:text-[#f6f0e3]/35"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#f6f0e3] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#171717]"
            >
              Send inquiry
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
