"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

const stack = ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase"];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section aria-labelledby="hero-heading" className="relative flex min-h-svh flex-col">
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-5 pb-14 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-16 lg:pt-40">
        {/* Rotated sticker badge */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.6, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: -9 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 260, damping: 18, delay: 0.35 }
          }
          className="absolute right-6 top-24 z-10 hidden size-[108px] flex-col items-center justify-center rounded-full bg-[#ff6b35] text-center font-mono text-[10px] font-medium uppercase leading-[1.5] tracking-[0.05em] text-white shadow-[0_14px_30px_rgba(229,79,26,0.3)] sm:flex lg:right-12 lg:top-28 lg:size-[124px] lg:text-[11px]"
        >
          <span>Taking new</span>
          <span>projects</span>
          <span className="font-bold">Q4 2026</span>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {/* Mono eyebrow with accent rule */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#5e544f] sm:text-[11px]"
          >
            <span aria-hidden="true" className="h-px w-[18px] shrink-0 bg-[#ff6b35]" />
            Web development studio
          </motion.p>

          {/* Display headline: solid → outline → accent */}
          <h1
            id="hero-heading"
            className="mt-6 font-sans text-[clamp(2.5rem,13.8vw,10.5rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#171412] sm:-mx-8 sm:text-[clamp(5.5rem,11.5vw,10.5rem)] sm:tracking-[-0.05em] lg:mx-0 lg:mt-7"
          >
            <motion.span variants={fadeUp} transition={{ duration: 0.6 }} className="block">
              We build
            </motion.span>
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-outline block"
            >
              products
            </motion.span>
            <motion.span variants={fadeUp} transition={{ duration: 0.6 }} className="block">
              that <span className="text-[#ff6b35]">grow.</span>
            </motion.span>
          </h1>

          {/* Subcopy + CTAs */}
          <div className="mt-7 flex flex-col gap-6 lg:mt-12 lg:flex-row lg:items-end lg:justify-between">
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="max-w-[440px] text-[15px] leading-[1.55] tracking-[-0.01em] text-[#5e544f] sm:text-[18px] sm:leading-[1.5]"
            >
              We partner with startups to build web applications that can handle real growth.
              Modern stack, clear timelines, no surprises.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <Link
                href="/work-with-us"
                className="group inline-flex items-center gap-2 rounded-[2px] bg-[#171412] px-[26px] py-4 text-[14.5px] font-bold tracking-[-0.01em] text-[#fffdfa] transition-colors duration-200 hover:bg-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]/50"
              >
                Start a project
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="border-b-[1.5px] border-[#171412] pb-[3px] text-[14.5px] font-semibold tracking-[-0.01em] text-[#171412] transition-colors duration-200 hover:border-[#ff6b35] hover:text-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]/50"
              >
                See our work
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Tech ledger strip */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.45 }}
        className="relative z-10 border-t border-[#171412]"
      >
        <ul className="mx-auto grid w-full max-w-[1280px] grid-cols-2 gap-px bg-[#e7dcd7] sm:grid-cols-3 lg:grid-cols-5">
          {stack.map((tech, i) => (
            <li
              key={tech}
              className={`flex items-center gap-2 bg-[#fffdfa] px-[18px] py-[15px] font-mono text-[12px] tracking-[0.02em] text-[#5e544f] transition-colors duration-200 hover:text-[#171412] ${
                i === stack.length - 1 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span aria-hidden="true" className="text-[10px] leading-none text-[#ff6b35]">
                ◆
              </span>
              {tech}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
