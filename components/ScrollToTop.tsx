"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={handleScrollTop}
      className={`cursor-pointer group fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-orange-200/60 bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-orange-500/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95 dark:border-zinc-700 dark:focus-visible:ring-offset-black sm:bottom-8 sm:right-8 ${
        isVisible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-6 scale-90 opacity-0"
      }`}
    >
      <span
        className={`pointer-events-none absolute inset-0 rounded-full bg-orange-400/40 blur-md transition-opacity duration-500 ${
          isVisible ? "opacity-100 animate-[pulse_2.4s_ease-in-out_infinite]" : "opacity-0"
        }`}
      />
      <ArrowUp className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
    </button>
  );
}
