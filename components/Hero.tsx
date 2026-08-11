"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bolt,
  Code2,
  Database,
  Orbit,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

const technologies = [
  { name: "Next.js 15", icon: Bolt, detail: "App Router & React Server Components" },
  { name: "React 19", icon: Orbit, detail: "Concurrent Rendering & Modern Hooks" },
  { name: "TypeScript", icon: Code2, detail: "Strict Type Safety & Full DX" },
  { name: "Tailwind v4", icon: Sparkles, detail: "High-Performance CSS Engine" },
  { name: "Supabase", icon: Database, detail: "Real-time DB & Vector Embeddings" },
] as const;

export function Hero() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -85;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-[140px] lg:px-8 lg:pb-28 lg:pt-[170px]"
    >
      {/* Background Ambient Glow Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-24 size-80 rounded-full bg-[#ff6b35]/[0.08] blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 size-[420px] rounded-full bg-[#ff8c61]/[0.1] blur-[110px]"
      />

      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,550px)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
        {/* Left Column - Copy & Call to Actions */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
          className="relative z-10"
        >
          {/* Status Badge */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="group mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#f0ded5] bg-white/90 py-1.5 pl-2 pr-4 text-xs font-semibold text-[#5c4237] shadow-[0_2px_12px_rgba(91,41,23,0.06),0_1px_0_rgba(255,255,255,1)_inset] backdrop-blur-md transition-all hover:border-[#ff6b35]/40 hover:shadow-[0_4px_16px_rgba(229,79,26,0.12)]"
          >
            <span className="relative flex size-6 items-center justify-center rounded-full bg-[#fff0e9] text-[#e84f1e]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6b35]/30 opacity-75" />
              <Zap className="size-3.5 fill-current text-[#ff6b35]" />
            </span>
            <span className="tracking-tight text-[#3d2b23]">Taking new projects</span>
            <span className="h-3 w-px bg-[#e7d8d1]" />
            <span className="font-bold text-[#ff6b35]">Limited availability</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-heading max-w-[650px] text-[clamp(3.2rem,5.5vw,4.8rem)] font-medium leading-[0.93] tracking-[-0.06em] text-[#2e231e] [text-wrap:balance]"
          >
            We build{" "}
            <span className="relative inline-block text-[#ff6b35]">
              products
              <svg
                aria-hidden="true"
                viewBox="0 0 138 12"
                fill="none"
                className="absolute -bottom-1 left-0 w-full text-[#ff6b35]/30"
              >
                <path
                  d="M2 8.5C38 3.5 92 2.5 136 7.5"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            <span className="italic text-[#5c4338]">that grow with you.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-7 max-w-[520px] text-[17px] leading-[1.7] tracking-[-0.015em] text-[#5e544f] sm:text-lg"
          >
            We partner with startups to build web applications that can handle real growth. Modern stack, clear timelines, no surprises.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <Link href="/work-with-us">
              <Button
                className="group relative h-[52px] rounded-xl border border-[#e64f1a] bg-[#ff6b35] px-7 text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_2px_0_#c94216,0_7px_14px_rgba(229,79,26,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f55b25] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_3px_0_#bd3b13,0_11px_18px_rgba(229,79,26,0.22)] active:translate-y-0 active:shadow-none"
              >
                <span>Start a project</span>
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            </Link>

            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="group h-[52px] rounded-xl border-[#dfd4cd] bg-white/90 px-6 text-[15px] font-semibold text-[#292321] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_0_rgba(61,37,24,0.04),0_6px_16px_rgba(61,37,24,0.06)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#cfc1b9] hover:bg-[#fffcf9] hover:text-[#111] hover:shadow-[0_3px_0_rgba(61,37,24,0.05),0_10px_22px_rgba(61,37,24,0.08)] active:translate-y-0"
            >
              <span>See our work</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </motion.div>



          {/* Tech Stack Pills */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-7"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#8c817b]">
              What we build with
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((t) => {
                const Icon = t.icon;
                const isHovered = hoveredTech === t.name;
                return (
                  <div
                    key={t.name}
                    className="relative"
                    onMouseEnter={() => setHoveredTech(t.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <span className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-xl border border-[#e7dcd7] bg-white/90 px-3 text-[12px] font-semibold text-[#524945] shadow-[0_2px_7px_rgba(61,37,24,0.03)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#ff6b35]/50 hover:bg-[#fff9f6] hover:text-[#171412] hover:shadow-[0_4px_12px_rgba(229,79,26,0.1)]">
                      <Icon className="size-3.5 text-[#ff6b35]" />
                      {t.name}
                    </span>

                    {/* Tooltip on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 z-30 whitespace-nowrap rounded-lg border border-[#e8ded8] bg-[#171412] px-2.5 py-1 text-[10px] font-medium text-white shadow-lg pointer-events-none"
                        >
                          {t.detail}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-[#171412]" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - IT Professionals Image Grid */}
        <HeroImageGrid />
      </div>
    </section>
  );
}

function HeroImageGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28, y: 14 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[670px] lg:mx-0"
    >
      {/* Glow Orbs behind images */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-2 size-64 rounded-full bg-[#ff6b35]/[0.18] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-6 size-48 rounded-full bg-[#ff8c61]/[0.14] blur-2xl"
      />

      {/* Floating Accent Badge 1 - IT Engineers */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -right-3 -top-5 z-20 hidden rounded-2xl border border-white/80 bg-white/90 p-2.5 shadow-[0_10px_25px_rgba(60,30,18,0.12),0_1px_0_rgba(255,255,255,1)_inset] backdrop-blur-md sm:flex sm:items-center sm:gap-2.5"
      >
        <div className="grid size-8 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600">
          <Zap className="size-4 fill-current" />
        </div>
        <div>
          <div className="flex items-center gap-1">
             <span className="text-xs font-bold text-[#171412]">Your development team</span>
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
           <p className="text-[10px] font-medium text-[#736862]">Full-stack web engineers</p>
        </div>
      </motion.div>

      {/* Floating Accent Badge 2 - Agile Velocity */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="absolute -bottom-5 -left-3 z-20 hidden rounded-2xl border border-white/80 bg-white/90 p-2.5 shadow-[0_10px_25px_rgba(60,30,18,0.12),0_1px_0_rgba(255,255,255,1)_inset] backdrop-blur-md sm:flex sm:items-center sm:gap-2.5"
      >
        <div className="grid size-8 place-items-center rounded-xl bg-[#ff6b35]/10 text-[#ff6b35]">
          <TrendingUp className="size-4" />
        </div>
        <div>
           <p className="text-xs font-bold text-[#171412]">Built for growth</p>
           <p className="text-[10px] font-medium text-[#736862]">Fast launch, long-term thinking</p>
        </div>
      </motion.div>

      {/* Image Grid matching attached screenshot */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4.5 h-auto sm:h-[480px]">
        {/* Left Column: 1 Tall Vertical Image */}
        <div className="group relative h-[360px] sm:h-full overflow-hidden rounded-[28px] border border-[#e5dad4] bg-[#1a1614] shadow-[0_20px_50px_rgba(60,30,18,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(255,107,53,0.2)]">
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
            alt="IT software engineer working on multi-monitor workstation"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-50" />

          {/* Bottom Card Label */}
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/80 bg-white/90 p-3.5 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:bg-white">
            <div className="flex items-center justify-between">
               <span className="text-xs font-bold text-[#171412]">Web Applications</span>
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
             <p className="mt-1 text-[11px] font-medium text-[#5e544f]">Built for scale from the start</p>
          </div>
        </div>

        {/* Right Column: 2 Stacked Horizontal Images */}
        <div className="grid grid-rows-2 gap-4 sm:gap-4.5 h-[420px] sm:h-full">
          {/* Top Right Image */}
          <div className="group relative overflow-hidden rounded-[28px] border border-[#e5dad4] bg-[#1a1614] shadow-[0_15px_40px_rgba(60,30,18,0.1)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,107,53,0.18)]">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
              alt="IT tech team overhead workspace desk"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-50" />

            <div className="absolute bottom-3.5 left-4 right-4 rounded-xl border border-white/80 bg-white/90 px-3.5 py-2.5 backdrop-blur-md shadow-md transition-all duration-300 group-hover:bg-white">
               <p className="text-xs font-bold text-[#171412]">Modern Stack</p>
               <p className="text-[11px] font-medium text-[#5e544f]">Next.js, React & TypeScript</p>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="group relative overflow-hidden rounded-[28px] border border-[#e5dad4] bg-[#1a1614] shadow-[0_15px_40px_rgba(60,30,18,0.1)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,107,53,0.18)]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="IT professionals collaborating at computer monitor screen"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-50" />

            <div className="absolute bottom-3.5 left-4 right-4 rounded-xl border border-white/80 bg-white/90 px-3.5 py-2.5 backdrop-blur-md shadow-md transition-all duration-300 group-hover:bg-white">
               <p className="text-xs font-bold text-[#171412]">Smart Process</p>
               <p className="text-[11px] font-medium text-[#5e544f]">Launch fast, improve continuously</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
