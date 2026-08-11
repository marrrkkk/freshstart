import Link from "next/link";
import { ArrowUpRight, CalendarDays, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden bg-[#ff6b35] py-24 text-white sm:py-32">
      <div aria-hidden="true" className="absolute -left-28 -top-40 size-[470px] rounded-full border border-white/[0.16]" />
      <div aria-hidden="true" className="absolute -left-7 -top-16 size-[260px] rounded-full border border-white/[0.15]" />
      <div aria-hidden="true" className="absolute right-[9%] top-12 size-[420px] rounded-full border border-white/[0.11]" />
      <div aria-hidden="true" className="absolute right-[15.5%] top-[242px] size-2 rounded-full bg-white shadow-[0_0_0_7px_rgba(255,255,255,0.16)]" />
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="reveal">
            <h2 id="contact-heading" className="font-heading mt-7 max-w-[720px] text-[clamp(3.2rem,6vw,5.2rem)] font-medium leading-[0.9] tracking-[-0.07em]">Let&apos;s make your next move count.</h2>
            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.7] text-white/[0.80]">Whether you&apos;re launching something new or giving an old site a serious upgrade, just tell us what you need. We&apos;ll show you how fast we can get it done.</p>
          </div>

          <div className="reveal reveal-d1 w-full max-w-[370px] rounded-[22px] border border-white/[0.22] bg-[#fffaf7] p-5 text-[#2b211d] shadow-[0_20px_40px_rgba(112,39,14,0.22)] sm:p-6">
            <div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-xl bg-[#fff0e9] text-[#e84f1e]"><CalendarDays className="size-[18px]" /></span><span className="rounded-full bg-[#e9f8ed] px-2.5 py-1 text-[10px] font-semibold text-[#278848]">Open for Q3</span></div>
            <h3 className="font-heading mt-7 text-[28px] tracking-[-0.05em]">Work with us</h3>
            <p className="mt-2 text-[13px] leading-[1.65] text-[#756862]">A quick 15-minute call to talk through your project, timeline, and budget. No pressure at all.</p>
            <Link href="/work-with-us" className="w-full">
              <Button className="mt-6 h-[50px] w-full rounded-xl border border-[#e64f1a] bg-[#ff6b35] text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_0_#c94216,0_8px_14px_rgba(229,79,26,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#f55b25]">Book an intro call <ArrowUpRight className="size-4" /></Button>
            </Link>
            <div className="mt-6 border-t border-[#ece1db] pt-5"><div className="flex items-center gap-2 text-[11px] text-[#746761]"><Check className="size-3.5 text-[#25a653]" /> No-obligation first conversation</div></div>
          </div>
        </div>

      </div>
    </section>
  );
}
