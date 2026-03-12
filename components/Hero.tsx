import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const capabilities = [
  "Conversion-first websites",
  "Full-stack product builds",
  "Brand refreshes with code",
  "Launch support in weeks, not quarters",
];

const stack = ["Next.js", "React 19", "TypeScript", "Supabase", "Laravel", "Vercel"];

export default function Hero() {
  return (
    <section className="section-frame relative grid min-h-screen gap-10 px-1 pb-16 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-24 lg:pt-40">
      <div className="relative z-10">
        <div className="section-kicker mb-6">Philippines-based digital studio</div>
        <h1 className="max-w-4xl text-[3.4rem] leading-[0.92] text-[#171717] sm:text-[4.6rem] lg:text-[7.2rem]">
          We design websites that look expensive and perform like products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70 sm:text-xl">
          FreshStart builds launch-ready websites, ecommerce experiences, and internal tools for teams that need more than a template. The direction is editorial, technical, and built to convert.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d55d3f] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_34px_rgba(213,93,63,0.28)]"
          >
            Start your project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black"
          >
            See selected work
          </Link>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {capabilities.map((item) => (
            <div
              key={item}
              className="surface-card rounded-[1.5rem] px-5 py-4 text-sm font-medium text-black/72"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="surface-card angled-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-black/45">
            <span>FreshStart dispatch</span>
            <span>Issue 01</span>
          </div>

          <div className="mt-12 grid gap-6">
            <div className="rounded-[1.75rem] border border-black/10 bg-[#171717] p-6 text-[#f6f0e3] shadow-[0_18px_50px_rgba(23,23,23,0.22)]">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#f6f0e3]/60">Current focus</span>
                <Sparkles className="h-4 w-4 text-[#f5ceb1]" />
              </div>
              <p className="mt-8 font-display text-3xl leading-tight sm:text-4xl">
                Quiet luxury visuals.
                <br />
                Loudly effective funnels.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[1.5rem] border border-black/10 bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">Studio rhythm</p>
                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-4xl font-semibold text-[#171717]">2-6</p>
                    <p className="mt-1 text-sm text-black/60">week launch windows</p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold text-[#171717]">100%</p>
                    <p className="mt-1 text-sm text-black/60">custom builds, no themes</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-black/10 bg-[#efe4d3] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">Stack</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-black/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-dashed border-black/20 px-5 py-4 text-sm leading-7 text-black/70">
              We treat every page like a cover story: a stronger narrative, clearer hierarchy, faster interactions, and better reasons for visitors to contact you.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
