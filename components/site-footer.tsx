import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const services = [
  { label: "Strategy & UX", href: "/services/website-strategy-ux" },
  { label: "Web Development", href: "/services/custom-web-development" },
  { label: "Website Redesign", href: "/services/website-redesign-modernization" },
  { label: "AI & Automation", href: "/services/ai-integration-automation" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="group inline-flex w-fit items-center gap-2 text-[13px] font-medium text-white/[.62] transition-colors duration-200 hover:text-white"><span className="h-px w-0 bg-[#ff6b35] transition-all duration-300 group-hover:w-3" /><span>{children}</span><ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" /></Link>;
}

export function SiteFooter() {
  return <footer className="relative overflow-hidden bg-[#151210] text-white">
    <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 size-[420px] rounded-full border border-white/[.055]" />
    <div aria-hidden="true" className="pointer-events-none absolute -right-1 top-5 size-[245px] rounded-full border border-[#ff6b35]/20" />
    <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[8%] h-px w-[38%] bg-gradient-to-r from-transparent via-[#ff6b35]/45 to-transparent" />
    <div className="relative mx-auto max-w-[1280px] px-5 pb-7 pt-16 lg:px-8 lg:pt-20">
      <div className="grid gap-14 lg:grid-cols-[1.35fr_.72fr_.8fr] lg:gap-12">
        <div className="max-w-[480px]"><Link href="/" className="group inline-flex items-center gap-3"><span className="overflow-hidden rounded-[11px] shadow-[0_5px_16px_rgba(0,0,0,.2)] transition-transform duration-300 group-hover:scale-105"><Image src="/logo.svg" alt="FreshStart PH" width={42} height={42} /></span><span className="font-heading text-[22px] font-medium tracking-[-0.025em] text-white">FreshStart <span className="font-semibold text-[#ff6b35]">PH</span></span></Link><h2 className="font-heading mt-9 text-[clamp(2.2rem,3.8vw,3.6rem)] leading-[.94] tracking-[-.065em]">Digital work with a clear point of view.</h2><p className="mt-5 max-w-[400px] text-[14px] leading-[1.75] text-white/[.54]">We partner with ambitious businesses to design and build web experiences that feel considered from the first click.</p></div>
        <div className="lg:pt-3"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff9c78]">Navigate</p><nav aria-label="Footer navigation" className="mt-6 flex flex-col items-start gap-4"><FooterLink href="/about">About FreshStart</FooterLink><FooterLink href="/#services">Services</FooterLink><FooterLink href="/#projects">Projects</FooterLink><FooterLink href="/work-with-us">Contact</FooterLink></nav></div>
        <div className="lg:pt-3"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff9c78]">Services</p><nav aria-label="Footer services" className="mt-6 flex flex-col items-start gap-4">{services.map(service => <FooterLink key={service.href} href={service.href}>{service.label}</FooterLink>)}</nav></div>
      </div>
      <div className="mt-16 grid gap-6 border-t border-white/[.11] py-7 lg:grid-cols-[1.35fr_.72fr_.8fr] lg:gap-12"><div className="flex flex-wrap gap-x-6 gap-y-3 text-[12px] text-white/[.5]"><a href="mailto:hello@freshstart.ph" className="group inline-flex items-center gap-2 transition-colors hover:text-white"><span className="grid size-7 place-items-center rounded-lg bg-white/[.06] text-[#ff9c78] transition-all duration-200 group-hover:bg-[#ff6b35] group-hover:text-white"><Mail className="size-3.5" /></span>hello@freshstart.ph</a><a href="tel:+639157597443" className="group inline-flex items-center gap-2 transition-colors hover:text-white"><span className="grid size-7 place-items-center rounded-lg bg-white/[.06] text-[#ff9c78] transition-all duration-200 group-hover:bg-[#ff6b35] group-hover:text-white"><Phone className="size-3.5" /></span>+63 915 759 7443</a></div><div className="inline-flex items-center gap-2 text-[12px] text-white/[.5]"><MapPin className="size-3.5 text-[#ff9c78]" />Philippines · Worldwide</div><a href="https://wa.me/639157597443" className="group inline-flex items-center gap-2 text-[12px] text-white/[.5] transition-colors hover:text-white"><MessageCircle className="size-3.5 text-[#ff9c78] transition-transform duration-200 group-hover:scale-110" />Chat on WhatsApp <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" /></a></div>
      <div className="flex flex-col justify-between gap-4 border-t border-white/[.07] pt-6 text-[11px] text-white/[.35] sm:flex-row sm:items-center"><p>© {new Date().getFullYear()} FreshStart PH. All rights reserved.</p><p>Design, development, and thoughtful digital growth.</p></div>
    </div>
  </footer>;
}
