import { Braces, Compass, ScanLine, MessageSquareText, PenTool, Code2, Rocket } from "lucide-react";

const principles = [
  { icon: Compass, label: "Fast iterations", copy: "We ship working versions early so you can test with real users. Small releases, quick feedback loops, continuous improvement." },
  { icon: ScanLine, label: "Built to last", copy: "Next.js, React, TypeScript, and Tailwind CSS. Popular tools with strong communities, so you can easily find developers to maintain your code." },
  { icon: Braces, label: "Maintainable code", copy: "Clean structure, clear naming, proper documentation. Your code should be readable by any developer who joins your team." },
];

const steps = [
  { icon: MessageSquareText, label: "Discovery call", copy: "We discuss your project goals, technical requirements, and timeline. By the end, you'll have a clear scope and fixed price quote." },
  { icon: PenTool, label: "Design & prototype", copy: "We design the user interface and key interactions. You'll review clickable prototypes before we write any code." },
  { icon: Code2, label: "Build & iterate", copy: "We develop in weekly sprints and share progress regularly. You'll see working features as they're completed, not all at once at the end." },
  { icon: Rocket, label: "Launch & support", copy: "We deploy to production, set up monitoring, and train your team on how to manage the site. Support continues for 30 days after launch." },
];

export function About() {
  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="relative overflow-hidden bg-[#fffdfa] py-24 sm:py-32">
      <div aria-hidden="true" className="absolute left-[-170px] top-1/2 size-[360px] -translate-y-1/2 rounded-full border border-[#e6d8d0]" />
      <div aria-hidden="true" className="absolute left-[-112px] top-1/2 size-[244px] -translate-y-1/2 rounded-full border border-[#ff6b35]/20" />
      <div aria-hidden="true" className="absolute left-[4.1%] top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#ff6b35] shadow-[0_0_0_6px_rgba(255,107,53,0.10)]" />
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* ── About intro ── */}
        <div className="reveal mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#cc4a20]"><span className="h-px w-7 bg-[#ff6b35]" /> Why FreshStart</div>
          <h2 id="why-us-heading" className="font-heading mt-6 text-[clamp(2.7rem,4.6vw,4.1rem)] font-medium leading-[0.94] tracking-[-0.065em] text-[#211b18]">We focus on what matters: shipping working software.</h2>
          <p className="mx-auto mt-6 max-w-[590px] text-[16px] leading-[1.72] text-[#716761]">We keep projects focused and timelines realistic. You'll work directly with our development team, get regular updates, and ship software that solves real problems.</p>
        </div>

        {/* ── Why FreshStart (no numbers) ── */}
        <div className="mt-16 grid border-y border-[#e9ddd7] md:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <article key={principle.label} className={`reveal ${index > 0 ? `reveal-d${index}` : ""} group relative px-1 py-8 sm:px-7 sm:py-10 ${index !== 0 ? "md:border-l md:border-[#e9ddd7]" : ""}`}>
                <span className="grid size-10 place-items-center rounded-xl border border-[#eadbd4] bg-white text-[#e84f1e] shadow-[0_3px_8px_rgba(61,37,24,0.05)]"><Icon className="size-[18px]" /></span>
                <h3 className="font-heading mt-6 text-[28px] tracking-[-0.05em] text-[#2a221e]">{principle.label}</h3>
                <p className="mt-3 max-w-[280px] text-[14px] leading-[1.7] text-[#716761]">{principle.copy}</p>
              </article>
            );
          })}
        </div>

        {/* ── How It Works (numbered) ── */}
        <div className="reveal mt-20 mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#cc4a20]"><span className="h-px w-7 bg-[#ff6b35]" /> How It Works</div>
          <h3 className="font-heading mt-6 text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[#211b18]">How we work together.</h3>
        </div>

        <div className="mt-10 grid gap-px border-y border-[#e9ddd7] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.label} className={`reveal ${index > 0 ? `reveal-d${Math.min(index, 3)}` : ""} group relative px-1 py-8 sm:px-7 sm:py-10 ${index !== 0 ? "sm:border-l sm:border-[#e9ddd7]" : ""}`}>
                <span className="grid size-10 place-items-center rounded-xl border border-[#eadbd4] bg-white text-[#e84f1e] shadow-[0_3px_8px_rgba(61,37,24,0.05)]"><Icon className="size-[18px]" /></span>
                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b8a79f]">0{index + 1}</p>
                <h4 className="font-heading mt-3 text-[24px] tracking-[-0.05em] text-[#2a221e]">{step.label}</h4>
                <p className="mt-3 max-w-[260px] text-[14px] leading-[1.7] text-[#716761]">{step.copy}</p>
              </article>
            );
          })}
        </div>

        {/* ── Quote card ── */}
        <div className="reveal mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#e7d9d2] bg-white p-5 shadow-[0_6px_18px_rgba(61,37,24,0.045)] sm:flex-row sm:items-center sm:px-6">
          <p className="font-heading max-w-[570px] text-[21px] leading-[1.12] tracking-[-0.04em] text-[#3d332e]">&quot;Good software should feel invisible. It just works, and gets out of your way.&quot;</p>
          <span className="shrink-0 rounded-full bg-[#fff0e9] px-3 py-1.5 text-[10px] font-semibold tracking-[0.03em] text-[#ce4b21]">FreshStart PH</span>
        </div>
      </div>
    </section>
  );
}
