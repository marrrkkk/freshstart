"use client";

import { useEffect } from "react";

/**
 * Tiny client component that sets up a single IntersectionObserver
 * for all `.reveal` elements on the page. Replaces per-element
 * framer-motion whileInView and avoids shipping the full motion runtime
 * for simple fade-up animations.
 */
export function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
