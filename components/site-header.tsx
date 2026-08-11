"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  Code2,
  Compass,
  Layers3,
  Menu,
  PenTool,
  RefreshCw,
  Sparkles,
  ShoppingBag,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "services", label: "Services", desc: "What we design & build", icon: Layers3, hasHoverCard: true },
  { id: "projects", label: "Projects", desc: "Selected case studies", icon: Sparkles, hasHoverCard: true },
  { id: "about", label: "About", desc: "Meet FreshStart PH", icon: Compass, href: "/about", hasHoverCard: false },
  { id: "contact", label: "Contact", desc: "Start a conversation", icon: CalendarDays, href: "/work-with-us", hasHoverCard: false },
];

const servicesPreview = [
  {
    title: "Product Design & UX",
    desc: "Product structure, user flows & design systems",
    icon: PenTool,
    tag: "Strategy & Design",
    href: "/services/product-design-ux",
  },
  {
    title: "Web Development",
    desc: "High-performing websites & web applications",
    icon: Code2,
    tag: "Next.js & React",
    href: "/services/web-development",
  },
  {
    title: "Website Redesign",
    desc: "Transform outdated sites into fast Next.js apps",
    icon: RefreshCw,
    tag: "Modernization",
    href: "/services/website-redesign",
  },
  {
    title: "AI Integration",
    desc: "Custom AI chatbots, LLM APIs & automated workflows",
    icon: Bot,
    tag: "AI & Automation",
    href: "/services/ai-integration",
  },
];

const projectsPreview = [
  {
    title: "NOVA Operations",
    desc: "A clearer control room for a growing operations team.",
    icon: BriefcaseBusiness,
    tag: "Operations platform",
    href: "/projects/nova-operations",
  },
  {
    title: "Customer Portal",
    desc: "A friendlier self-service experience for customers.",
    icon: Layers3,
    tag: "Service platform",
    href: "/projects/customer-portal",
  },
  {
    title: "Commerce Experience",
    desc: "Product discovery and checkout made more deliberate.",
    icon: ShoppingBag,
    tag: "E-commerce",
    href: "/projects/commerce-experience",
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredNav(id);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 180);
  };


  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle ESC key to close mobile menu & hover cards
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setHoveredNav(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1280px] px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8 lg:pt-5">
        <div
          className="relative flex items-center justify-between rounded-2xl border border-[#eadfd9]/90 bg-[#fffdfa]/90 px-4 py-2.5 shadow-[0_8px_32px_rgba(61,37,24,0.07),0_1px_0_rgba(255,255,255,0.9)_inset] backdrop-blur-xl sm:rounded-full sm:px-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]/40"
              aria-label="FreshStart PH home"
            >
              <div className="relative overflow-hidden rounded-[10px] shadow-[0_2px_8px_rgba(61,37,24,0.1)] transition-transform duration-200 group-hover:scale-105">
                <Image src="/logo.svg" alt="FreshStart PH" width={34} height={34} priority className="size-[34px] object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-[15.5px] font-medium tracking-[-0.025em] text-[#171412] transition-colors group-hover:text-[#ff6b35]">
                  FreshStart <span className="font-semibold text-[#ff6b35]">PH</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links (Borderless Nav Items) */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1.5 md:flex"
          >
            {navItems.map((item) => {
              const isHovered = hoveredNav === item.id;
              const isSelected = item.href === pathname;

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.href ? <Link href={item.href} className={`group relative flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]/40 ${isHovered || isSelected ? "text-[#171412]" : "text-[#5e534c] hover:text-[#171412]"}`}> 
                    <span>{item.label}</span>
                    {item.hasHoverCard && (
                      <ChevronDown
                        className={`size-3.5 transition-transform duration-200 ${
                          isHovered ? "rotate-180 text-[#ff6b35]" : "text-[#a39790] group-hover:text-[#171412]"
                        }`}
                      />
                    )}

                    {(isHovered || isSelected) && <motion.span layoutId="nav-highlight" className="absolute bottom-0.5 inset-x-3.5 h-[2px] rounded-full bg-[#ff6b35]" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
                  </Link> : <button type="button" className={`group relative flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]/40 ${isHovered ? "text-[#171412]" : "text-[#5e534c] hover:text-[#171412]"}`}><span>{item.label}</span><ChevronDown className={`size-3.5 transition-transform duration-200 ${isHovered ? "rotate-180 text-[#ff6b35]" : "text-[#a39790] group-hover:text-[#171412]"}`} />{isHovered && <motion.span layoutId="nav-highlight" className="absolute bottom-0.5 inset-x-3.5 h-[2px] rounded-full bg-[#ff6b35]" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}</button>}

                  {/* Services Hover Card */}
                  {item.id === "services" && (
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-1/2 top-full pt-3 -translate-x-1/2 z-50 w-[380px] sm:w-[410px]"
                        >
                          <div className="overflow-hidden rounded-2xl border border-[#e8ded8] bg-[#fffdfa] shadow-[0_16px_40px_rgba(61,37,24,0.12),0_1px_0_rgba(255,255,255,1)_inset] backdrop-blur-xl">
                            <div className="flex items-center justify-between border-b border-[#f0e6e1] px-5 py-3">
                              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#c94a20]">
                                What we do
                              </span>
                              <span className="text-[11px] font-medium text-[#8c8078]">4 Services</span>
                            </div>

                            <div className="divide-y divide-[#f0e6e1]">
                              {servicesPreview.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                  <Link
                                    key={s.title}
                                    href={s.href}
                                    onClick={() => setHoveredNav(null)}
                                    className="group/item flex items-center gap-4 px-5 py-3.5 transition-colors duration-200 hover:bg-[#fff5ef]"
                                  >
                                    <span className="text-[12px] font-medium tabular-nums text-[#b8a79f]">
                                      ({String(i + 1).padStart(2, "0")})
                                    </span>
                                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-[#ebdcd5] bg-white text-[#e84f1e] shadow-[0_2px_5px_rgba(61,37,24,0.04)] transition-all duration-200 group-hover/item:border-[#ffb299] group-hover/item:bg-[#fff0e9]">
                                      <Icon className="size-3.5" />
                                    </span>
                                    <span className="font-heading flex-1 text-[14px] font-medium tracking-[-0.03em] text-[#2a221e] transition-colors duration-200 group-hover/item:text-[#ff6b35]">
                                      {s.title}
                                    </span>
                                    <span className="grid size-7 place-items-center rounded-full border border-[#eadbd4] bg-white text-[#c9b9b0] transition-all duration-200 group-hover/item:border-[#ff6b35] group-hover/item:bg-[#ff6b35] group-hover/item:text-white">
                                      <ArrowUpRight className="size-3" />
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Projects Hover Card */}
                  {item.id === "projects" && (
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-1/2 top-full pt-3 -translate-x-1/2 z-50 w-[380px] sm:w-[410px]"
                        >
                          <div className="overflow-hidden rounded-2xl border border-[#e8ded8] bg-[#fffdfa] shadow-[0_16px_40px_rgba(61,37,24,0.12),0_1px_0_rgba(255,255,255,1)_inset] backdrop-blur-xl">
                            <div className="flex items-center justify-between border-b border-[#f0e6e1] px-5 py-3">
                              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#c94a20]">
                                Selected Work
                              </span>
                              <span className="text-[11px] font-medium text-[#8c8078]">3 Case Studies</span>
                            </div>

                            <div className="divide-y divide-[#f0e6e1]">
                              {projectsPreview.map((p, i) => {
                                const Icon = p.icon;
                                return <Link
                                  key={p.title}
                                  href={p.href}
                                  onClick={() => setHoveredNav(null)}
                                  className="group/item flex items-center gap-4 px-5 py-3.5 transition-colors duration-200 hover:bg-[#fff5ef]"
                                >
                                  <span className="text-[12px] font-medium tabular-nums text-[#b8a79f]">({String(i + 1).padStart(2, "0")})</span>
                                  <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-[#ebdcd5] bg-white text-[#e84f1e] shadow-[0_2px_5px_rgba(61,37,24,0.04)] transition-all duration-200 group-hover/item:border-[#ffb299] group-hover/item:bg-[#fff0e9]"><Icon className="size-3.5" /></span>
                                  <span className="flex min-w-0 flex-1 flex-col"><span className="font-heading text-[14px] font-medium tracking-[-0.03em] text-[#2a221e] transition-colors duration-200 group-hover/item:text-[#ff6b35]">{p.title}</span><span className="mt-0.5 truncate text-[11px] text-[#857770]">{p.tag}</span></span>
                                  <span className="grid size-7 place-items-center rounded-full border border-[#eadbd4] bg-white text-[#c9b9b0] transition-all duration-200 group-hover/item:border-[#ff6b35] group-hover/item:bg-[#ff6b35] group-hover/item:text-white"><ArrowUpRight className="size-3" /></span>
                                </Link>;
                              })}
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action: CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Link href="/work-with-us">
                <Button
                  className="group h-10 rounded-xl border border-[#e64f1a] bg-[#ff6b35] px-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_2px_0_#c94216,0_7px_14px_rgba(229,79,26,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f55b25] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_3px_0_#bd3b13,0_11px_18px_rgba(229,79,26,0.22)] active:translate-y-0 active:shadow-none"
                >
                  <span>Work with us</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className="grid size-10 place-items-center rounded-xl border border-[#e3d9d4] bg-white text-[#2b211d] shadow-[0_2px_6px_rgba(40,25,16,0.05)] outline-none transition-all hover:-translate-y-px hover:border-[#d8c3b8] hover:shadow-[0_4px_10px_rgba(40,25,16,0.09)] focus-visible:ring-2 focus-visible:ring-[#ff6b35]/40 md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-[#171412]/40 backdrop-blur-md md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="mx-4 mt-2 max-h-[82vh] overflow-y-auto rounded-2xl border border-[#eadfd9] bg-[#fffdfa] p-4 shadow-[0_20px_40px_rgba(40,25,16,0.15)]"
            >
              <div className="mb-3 flex items-center justify-between border-b border-[#f0e6e1] pb-3 px-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#91837c]">Navigation</span>
              </div>

              <div className="flex flex-col gap-3">
                {/* Services Group */}
                <div>
                  <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#c94a20]">
                    Services
                  </div>
                  <div className="mt-1 flex flex-col gap-1">
                    {servicesPreview.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.title}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 rounded-xl p-2.5 text-[#4d433e] transition-colors hover:bg-[#fff0e9]"
                        >
                          <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-[#ebdcd5] bg-white text-[#e84f1e]">
                            <Icon className="size-4" />
                          </span>
                          <span className="flex-1 text-xs font-semibold text-[#2a221e]">{s.title}</span>
                          <ArrowUpRight className="size-3.5 text-[#c9b9b0]" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Projects Group */}
                <div className="border-t border-[#f0e6e1] pt-3">
                  <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#c94a20]">
                    Selected Work
                  </div>
                  <div className="mt-1 flex flex-col gap-1">
                    {projectsPreview.map((p) => {
                      const Icon = p.icon;
                      return (
                        <Link
                          key={p.title}
                          href={p.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 rounded-xl p-2.5 text-[#4d433e] transition-colors hover:bg-[#fff0e9]"
                        >
                          <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-[#ebdcd5] bg-white text-[#e84f1e]">
                            <Icon className="size-4" />
                          </span>
                          <div className="flex min-w-0 flex-1 flex-col">
                            <span className="text-xs font-semibold text-[#2a221e]">{p.title}</span>
                            <span className="truncate text-[10px] text-[#857770]">{p.tag}</span>
                          </div>
                          <ArrowUpRight className="size-3.5 text-[#c9b9b0]" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* About & Contact */}
                <div className="border-t border-[#f0e6e1] pt-3 flex flex-col gap-1">
                  <Link
                    href="/about"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl p-2.5 text-[#4d433e] transition-colors hover:bg-[#fcf5f1]"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-[#e8ded8] bg-white text-[#70645e]">
                      <Compass className="size-4" />
                    </span>
                    <span className="text-xs font-semibold text-[#2a221e]">About FreshStart</span>
                    <ArrowUpRight className="ml-auto size-3.5 text-[#c9b9b0]" />
                  </Link>
                  <Link
                    href="/work-with-us"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl p-2.5 text-[#4d433e] transition-colors hover:bg-[#fcf5f1]"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-[#e8ded8] bg-white text-[#70645e]">
                      <CalendarDays className="size-4" />
                    </span>
                    <span className="text-xs font-semibold text-[#2a221e]">Contact Us</span>
                    <ArrowUpRight className="ml-auto size-3.5 text-[#c9b9b0]" />
                  </Link>
                </div>
              </div>

              <div className="mt-4 border-t border-[#f0e6e1] pt-3">
                <Link href="/work-with-us" onClick={() => setOpen(false)}>
                  <Button
                    className="w-full h-11 justify-center rounded-xl border border-[#e64f1a] bg-[#ff6b35] text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_2px_0_#c94216,0_7px_14px_rgba(229,79,26,0.18)]"
                  >
                    Work with us <ArrowUpRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
