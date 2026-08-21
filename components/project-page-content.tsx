import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { ProjectData } from "@/lib/project-data";
import { ProjectPreview } from "@/components/project-previews";

const styles = {
  orange: { surface: "bg-[#fff0e9]", strong: "bg-[#ff6b35]", text: "text-[#e84f1e]" },
  ink: { surface: "bg-[#ece9e6]", strong: "bg-[#24201d]", text: "text-[#24201d]" },
  sand: { surface: "bg-[#f2e7df]", strong: "bg-[#b85d39]", text: "text-[#9f4b2b]" },
};

export function ProjectPageContent({ project }: { project: ProjectData }) {
  const style = styles[project.accent];
  return <main className="overflow-hidden bg-[#fffdfa] pt-28 text-[#211b18] sm:pt-36">
    <section className="mx-auto max-w-[1280px] px-5 pb-14 lg:px-8 lg:pb-20">
      <div className="mt-0 grid gap-10 lg:grid-cols-[1fr_.76fr] lg:items-end"><div><p className={`text-[11px] font-bold uppercase tracking-[.18em] ${style.text}`}>{project.eyebrow}</p><h1 className="font-heading mt-5 text-[clamp(3.5rem,7vw,6.8rem)] font-medium leading-[.86] tracking-[-.075em]">{project.name}</h1></div><p className="max-w-[460px] text-[17px] leading-[1.7] text-[#6e635d]">{project.summary}</p></div>
    </section>
    <section className="mx-auto max-w-[1280px] px-5 lg:px-8"><ProjectShowcase project={project} style={style} /></section>
    <section className="mx-auto grid max-w-[1280px] gap-10 px-5 py-20 lg:grid-cols-[.72fr_1.28fr] lg:px-8 lg:py-28"><div><p className={`text-[11px] font-bold uppercase tracking-[.18em] ${style.text}`}>Designed for the day-to-day</p><h2 className="font-heading mt-5 text-[clamp(2.5rem,4vw,4.2rem)] leading-[.94] tracking-[-.065em]">A product made to be used.</h2></div><div><p className="max-w-[650px] text-[18px] leading-[1.72] text-[#625750]">{project.context}</p><div className="mt-9 grid gap-3 sm:grid-cols-2">{project.deliverables.map(item => <div key={item} className="flex items-center gap-2.5 border-b border-[#eadfd9] py-3 text-[13px] font-medium text-[#4d433e]"><Check className={`size-4 ${style.text}`} />{item}</div>)}</div></div></section>
    <section className="border-y border-[#eadfd9] bg-[#f9f5f2]"><div className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className={`text-[11px] font-bold uppercase tracking-[.18em] ${style.text}`}>Inside the experience</p><h2 className="font-heading mt-5 text-[clamp(2.5rem,4vw,4.2rem)] leading-[.94] tracking-[-.065em]">The details that hold it together.</h2></div><p className="max-w-[370px] text-[14px] leading-[1.7] text-[#70645d]">The product is designed around a few simple principles that make the experience feel familiar from the first visit.</p></div><div className="mt-14 grid gap-4 lg:grid-cols-3">{project.approach.map((item, i) => <article key={item.title} className="rounded-2xl border border-[#e6dad4] bg-[#fffdfa] p-6 sm:p-7"><span className={`text-[11px] font-bold tabular-nums ${style.text}`}>0{i + 1}</span><h3 className="font-heading mt-8 text-[27px] tracking-[-.045em]">{item.title}</h3><p className="mt-4 text-[14px] leading-[1.7] text-[#70645d]">{item.copy}</p></article>)}</div></div></section>
    <section className="mx-auto max-w-[1280px] px-5 py-20 lg:px-8 lg:py-28"><div className="rounded-[28px] bg-[#211b18] p-8 text-white sm:p-12 lg:flex lg:items-end lg:justify-between lg:p-16"><div className="max-w-[670px]"><p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#ff9c78]">Like what you see?</p><h2 className="font-heading mt-5 text-[clamp(2.5rem,4.6vw,4.5rem)] leading-[.93] tracking-[-.065em]">Bring the same care to your next digital product.</h2></div><Link href="/work-with-us" className="group mt-9 inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#e64f1a] bg-[#ff6b35] px-5 py-3.5 text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_2px_0_#c94216,0_7px_14px_rgba(229,79,26,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f55b25] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_3px_0_#bd3b13,0_11px_18px_rgba(229,79,26,0.22)] active:translate-y-0 active:shadow-none lg:mt-0">Start a project <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></div></section>
  </main>;
}

function ProjectShowcase({ project, style }: { project: ProjectData; style: (typeof styles)[ProjectData["accent"]] }) {
  return <div className={`relative overflow-hidden rounded-[30px] border border-[#e4d7d0] ${style.surface} p-4 sm:p-8 lg:p-12`}><div aria-hidden="true" className={`absolute -right-24 -top-32 size-[420px] rounded-full ${style.strong} opacity-[.14] blur-3xl`} /><div className="relative overflow-hidden rounded-[20px] border border-[#dfd2cb] bg-[#fffdfa] shadow-[0_24px_50px_rgba(61,37,24,.15)]"><ProjectPreview slug={project.slug} accent={project.accent} /></div></div>;
}
