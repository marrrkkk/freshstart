import Link from "next/link";
import { ArrowUpRight, ArrowUpRightFromSquare, CircleCheck, Command, MoveUpRight, Sparkles } from "lucide-react";

const projects = [
  { client: "Customer portal", category: "Service platform", result: "Self-service journeys designed around real customer needs.", className: "bg-[#1c1b1a]", href: "/projects/customer-portal" },
  { client: "Commerce experience", category: "E-commerce", result: "A considered route from product discovery to checkout.", className: "bg-[#f1e6df]", href: "/projects/commerce-experience" },
];

export function SelectedWork() {
  return (
    <section id="projects" aria-labelledby="work-heading" className="relative overflow-hidden bg-[#211b18] py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute -right-24 top-0 size-[430px] rounded-full border border-white/[0.08]" />
      <div aria-hidden="true" className="absolute -right-4 top-20 size-[280px] rounded-full border border-[#ff6b35]/30" />
      <div aria-hidden="true" className="absolute right-[16%] top-[210px] size-2 rounded-full bg-[#ff6b35] shadow-[0_0_0_6px_rgba(255,107,53,0.1)]" />
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="reveal flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ff9c78]"><span className="h-px w-7 bg-[#ff6b35]" /> Selected work</div>
            <h2 id="work-heading" className="font-heading mt-6 max-w-[540px] text-[clamp(2.7rem,4.5vw,4rem)] font-medium leading-[0.95] tracking-[-0.06em]">Real results for real businesses.</h2>
          </div>
          <Link href="/projects/nova-operations" className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#ff9c78]">Explore case studies <span className="grid size-8 place-items-center rounded-full border border-white/[0.16] bg-white/[0.06] transition-all group-hover:border-[#ff6b35] group-hover:bg-[#ff6b35]"><ArrowUpRight className="size-3.5" /></span></Link>
        </div>

        <Link href="/projects/nova-operations" className="reveal reveal-d1 group mt-14 block overflow-hidden rounded-[24px] border border-white/[0.12] bg-[#2a2320] shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-1">
          <div className="grid lg:grid-cols-[0.91fr_1.09fr]">
            <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-11"><div><span className="inline-flex rounded-full border border-white/[0.14] bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold tracking-[0.04em] text-[#f8c9b6]">PRODUCT PLATFORM</span><h3 className="font-heading mt-7 max-w-[370px] text-[clamp(2rem,3.3vw,3rem)] leading-[0.96] tracking-[-0.055em]">From idea to production in 6 weeks.</h3><p className="mt-5 max-w-[390px] text-[14px] leading-[1.7] text-white/[0.62]">A full-stack operations platform we designed and built for a growing startup. Shipped on time, stayed on budget, and ready to handle 10x the traffic.</p></div><div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[11px] text-white/[0.56]"><span><b className="font-semibold text-white">NOVA</b> / Operations workspace</span><span className="inline-flex items-center gap-1.5"><CircleCheck className="size-3 text-[#ff8d66]" /> Design, dev &amp; SEO</span></div></div>
            <ProjectPreview />
          </div>
        </Link>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => <Link href={project.href} key={project.client} className={`reveal ${index > 0 ? "reveal-d1" : ""} group flex items-center justify-between rounded-2xl border border-white/[0.12] bg-white/[0.045] px-5 py-5 transition-colors hover:bg-white/[0.08] sm:px-6`}><div><p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#ff9c78]">{project.category}</p><h3 className="font-heading mt-2 text-[25px] tracking-[-0.045em]">{project.client}</h3><p className="mt-1 text-[12px] text-white/[0.5]">{project.result}</p></div><span className={`grid size-11 place-items-center rounded-xl ${project.className} ${index === 0 ? "text-[#ff8d66]" : "text-[#c55f36]"} transition-transform group-hover:-translate-y-1 group-hover:rotate-3`}><ArrowUpRightFromSquare className="size-4" /></span></Link>)}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview() {
  return (
    <div className="relative min-h-[350px] overflow-hidden bg-[#f0e7e1] p-5 sm:p-8">
      <div aria-hidden="true" className="absolute -right-20 -top-24 size-72 rounded-full bg-[#ff6b35]/25 blur-3xl" />
      <div className="relative mx-auto mt-4 max-w-[490px] overflow-hidden rounded-[18px] border border-[#d9cbc2] bg-[#fffdfb] shadow-[0_20px_40px_rgba(63,37,25,0.16)]">
        <div className="flex h-10 items-center justify-between border-b border-[#eee5e0] px-4"><div className="flex items-center gap-2"><span className="grid size-5 place-items-center rounded-md bg-[#24201d] text-[9px] text-white">N</span><span className="text-[9px] font-bold tracking-[-0.02em] text-[#332a26]">NOVA</span></div><Command className="size-3 text-[#9f8f87]" /></div>
        <div className="grid grid-cols-[112px_1fr] sm:grid-cols-[130px_1fr]"><aside className="border-r border-[#eee5e0] bg-[#fcf9f7] p-3"><p className="text-[8px] font-semibold text-[#a38f85]">WORKSPACE</p><div className="mt-3 space-y-1">{["Overview", "Pipeline", "Reports", "Team"].map((item, index) => <div key={item} className={`rounded-md px-2 py-1.5 text-[8px] ${index === 0 ? "bg-[#ff6b35] font-semibold text-white shadow-[0_2px_4px_rgba(229,79,26,0.2)]" : "text-[#84746c]"}`}>{item}</div>)}</div></aside><div className="p-4"><div className="flex items-center justify-between"><div><p className="text-[8px] text-[#9e8c84]">Overview</p><h4 className="mt-0.5 text-[15px] font-semibold tracking-[-0.05em] text-[#2e2622]">Good afternoon, Maya</h4></div><Sparkles className="size-4 text-[#ff6b35]" /></div><div className="mt-4 grid grid-cols-2 gap-2">{[["Active projects", "24"], ["Monthly growth", "+18.2%"]].map(([label, value]) => <div key={label} className="rounded-lg border border-[#eee5e0] bg-white p-2.5 shadow-[0_2px_5px_rgba(61,37,24,0.035)]"><p className="text-[7px] text-[#9e8c84]">{label}</p><p className="mt-1 text-[13px] font-semibold tracking-tight text-[#332a26]">{value}</p></div>)}</div><div className="mt-2 rounded-lg border border-[#eee5e0] bg-white p-3 shadow-[0_2px_5px_rgba(61,37,24,0.035)]"><div className="flex items-center justify-between"><p className="text-[8px] font-semibold text-[#463a34]">Pipeline activity</p><MoveUpRight className="size-3 text-[#ff6b35]" /></div><div className="mt-4 flex h-12 items-end gap-1.5">{[34,52,39,67,48,73,62,88,76].map((value, index) => <span key={index} style={{ height: `${value}%` }} className={`w-full rounded-t-sm ${index === 7 ? "bg-[#ff6b35]" : "bg-[#ff6b35]/20"}`} />)}</div></div></div></div>
      </div>
    </div>
  );
}
