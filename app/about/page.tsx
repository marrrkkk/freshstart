import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, HeartHandshake, Lightbulb, Rocket } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About FreshStart PH | Web Development Team Philippines",
  description:
    "We're a three-person web development team in the Philippines. We build applications with Next.js, React, and TypeScript for startups and growing companies.",
  openGraph: {
    title: "About FreshStart PH | Web Development Team",
    description:
      "Three developers and designers building web applications with Next.js and React. Based in the Philippines.",
    url: "https://freshstart.ph/about",
    siteName: "FreshStart PH",
    locale: "en_PH",
    type: "website",
  },
};

const team = [
  { name: "Kenji Decena", initials: "KD", role: "Founder", copy: "Handles project strategy, client communication, and technical architecture." },
  { name: "Mark Louie Alvarez", initials: "MA", role: "Co-Founder", copy: "Leads development. Writes the code that goes to production." },
  { name: "Mark Vincent Madrid", initials: "MM", role: "UI/UX Designer", copy: "Designs interfaces and user flows. Makes sure everything works on every screen size." },
];

const values = [
  { icon: Lightbulb, title: "No surprises", copy: "We share progress weekly. You'll know what's done, what's next, and when to expect it." },
  { icon: HeartHandshake, title: "Built to last", copy: "We write code that other developers can read and maintain. Your project won't depend on us forever." },
  { icon: Rocket, title: "Practical defaults", copy: "We recommend proven tools and patterns. You get stable software, not experimental technology." },
];

export default function AboutPage() {
  return <><SiteHeader /><main className="overflow-hidden bg-[#fffdfa] pt-28 text-[#211b18] sm:pt-36">
    <section className="relative mx-auto max-w-[1120px] px-5 pb-20 lg:pb-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="relative max-w-[700px]">
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#c94a20]">About us</p>
          <h1 className="font-heading mt-5 text-[clamp(3.2rem,6vw,6rem)] font-medium leading-[.86] tracking-[-.075em]">We build software for growing companies.</h1>
          <p className="mt-8 max-w-[620px] text-[18px] leading-[1.72] text-[#6e635d]">FreshStart PH is a web development studio in the Philippines. We design and build applications using Next.js, React, and TypeScript.</p>
        </div>
        <div className="relative hidden lg:flex lg:items-center lg:justify-center lg:pr-6">
          <div aria-hidden="true" className="absolute size-[320px] rounded-full border border-[#eadbd4]" />
          <div aria-hidden="true" className="absolute size-[230px] rounded-full border border-[#ff6b35]/25" />
          <div className="relative grid size-44 place-items-center rounded-full bg-gradient-to-br from-[#fff8f5] to-[#ffefe8] border border-[#ffb299]/50 shadow-[0_16px_40px_rgba(201,74,32,0.12)] transition-transform duration-500 hover:scale-105">
            <Image src="/logo.svg" alt="FreshStart PH Logo" width={96} height={96} className="size-20 object-contain drop-shadow-[0_4px_12px_rgba(232,79,30,0.15)]" priority />
          </div>
        </div>
      </div>
    </section>
    <section className="border-y border-[#eadfd9] bg-[#f9f5f2]"><div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-20 lg:grid-cols-[.72fr_1.28fr] lg:py-28"><div><p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#c94a20]">What we do</p><h2 className="font-heading mt-5 text-[clamp(2.5rem,4vw,4rem)] leading-[.94] tracking-[-.065em]">Design, development, and deployment.</h2></div><div className="max-w-[640px]"><p className="text-[17px] leading-[1.72] text-[#625750]">We handle the full process: user research and design, development with modern frameworks, and deployment to production. One team from start to finish.</p><div className="mt-9 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-[#e8ddd7] bg-white px-4 py-4"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#a18f86]">01</p><p className="font-heading mt-3 text-[20px] tracking-[-.04em]">Think</p></div><div className="rounded-xl border border-[#e8ddd7] bg-white px-4 py-4"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#a18f86]">02</p><p className="font-heading mt-3 text-[20px] tracking-[-.04em]">Design</p></div><div className="rounded-xl border border-[#e8ddd7] bg-white px-4 py-4"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#a18f86]">03</p><p className="font-heading mt-3 text-[20px] tracking-[-.04em]">Build</p></div></div></div></div></section>
    <section className="mx-auto max-w-[1120px] px-5 py-20 lg:py-28"><div className="mb-14 text-center"><p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#c94a20]">Our team</p><h2 className="font-heading mx-auto mt-5 max-w-[600px] text-[clamp(2.5rem,4vw,4rem)] leading-[.94] tracking-[-.065em]">Three people. No layers.</h2><p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-[1.72] text-[#70645d]">We're a team of three developers and designers based in the Philippines. When you work with us, you work with the people building your product.</p></div><div className="grid gap-5 sm:grid-cols-3">{team.map((member) => { return <article key={member.name} className="group flex h-full flex-col items-center rounded-2xl border border-[#e7dad3] bg-white px-6 pb-8 pt-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#ffb299] hover:shadow-[0_14px_28px_rgba(61,37,24,.08)]"><div className="relative"><span className="absolute -inset-1.5 rounded-full border-2 border-dashed border-[#ff6b35]/30 transition-all duration-500 group-hover:rotate-[30deg] group-hover:border-[#ff6b35]/50" /><span className="relative grid size-[88px] place-items-center rounded-full bg-gradient-to-br from-[#ff6b35] to-[#c94a20] text-[24px] font-bold tracking-wide text-white shadow-[0_6px_20px_rgba(201,74,32,.3)] transition-transform duration-300 group-hover:scale-105">{member.initials}</span></div><h3 className="font-heading mt-6 text-[22px] tracking-[-.04em]">{member.name}</h3><p className="mt-1.5 text-[11px] font-bold uppercase tracking-[.14em] text-[#c94a20]">{member.role}</p><span className="mx-auto mt-5 block h-px w-10 bg-[#e8ddd7] transition-colors duration-300 group-hover:bg-[#ffb299]" /><p className="mt-5 flex-1 text-[14px] leading-[1.72] text-[#70645d]">{member.copy}</p></article>})}</div></section>
    <section className="border-y border-[#eadfd9] bg-[#f9f5f2]"><div className="mx-auto max-w-[1120px] px-5 py-20 lg:py-28"><div className="max-w-[650px]"><p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#c94a20]">How we work</p><h2 className="font-heading mt-5 text-[clamp(2.5rem,4vw,4rem)] leading-[.94] tracking-[-.065em]">Clear process, realistic timelines.</h2></div><div className="mt-12 grid border-y border-[#e6dad4] md:grid-cols-3">{values.map((value, index) => { const Icon = value.icon; return <article key={value.title} className={`px-1 py-8 sm:px-7 sm:py-10 ${index ? "md:border-l md:border-[#e6dad4]" : ""}`}><span className="grid size-10 place-items-center rounded-xl border border-[#eadbd4] bg-white text-[#e84f1e]"><Icon className="size-[18px]" /></span><h3 className="font-heading mt-6 text-[28px] tracking-[-.05em]">{value.title}</h3><p className="mt-3 text-[14px] leading-[1.7] text-[#716761]">{value.copy}</p></article>})}</div></div></section>
    <section className="mx-auto max-w-[1120px] px-5 py-20 lg:py-28"><div className="rounded-[28px] bg-[#211b18] p-8 text-white sm:p-12 lg:flex lg:items-end lg:justify-between lg:p-14"><div className="max-w-[620px]"><p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#ff9c78]">Let’s work together</p><h2 className="font-heading mt-5 text-[clamp(2.5rem,4.6vw,4.5rem)] leading-[.93] tracking-[-.065em]">Bring us the problem. We&apos;ll help you make the next move.</h2></div><Link href="/work-with-us" className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-[#e64f1a] bg-[#ff6b35] px-5 py-3.5 text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_2px_0_#c94216,0_7px_14px_rgba(229,79,26,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f55b25] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_3px_0_#bd3b13,0_11px_18px_rgba(229,79,26,0.22)] active:translate-y-0 active:shadow-none lg:mt-0">Work with us <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></div></section>
  </main></>;
}
