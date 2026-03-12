"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
        <div
          className={`section-frame flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
            isScrolled
              ? "border-black/10 bg-[#fff9ef]/80 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] uppercase">
            <span className="relative h-11 w-11 overflow-hidden rounded-full border border-black/10 bg-white/80 p-2 shadow-sm">
              <Image src="/logo.png" alt="FreshStart logo" fill className="object-contain p-2" />
            </span>
            <span className="hidden sm:inline">FreshStart PH</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-black/70 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-[#f6f0e3] lg:inline-flex"
            >
              Start a project
            </Link>
            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/75 text-black lg:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(23,23,23,0.32)] backdrop-blur-sm transition ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`absolute inset-x-3 top-20 rounded-[2rem] border border-black/10 bg-[#fff8ed] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition duration-300 sm:inset-x-5 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-[1.25rem] border border-black/10 bg-white/60 px-4 py-4 text-xl font-semibold text-black/85"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#171717] px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#f6f0e3]"
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </>
  );
}
