import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { SelectedWork } from "@/components/selected-work";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { SiteHeader } from "@/components/site-header";
import { RevealObserver } from "@/components/reveal-observer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdfa] text-[#171412]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 geometry-field" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[710px] bg-[radial-gradient(ellipse_at_78%_15%,rgba(255,107,53,0.14),transparent_38%),radial-gradient(ellipse_at_14%_42%,rgba(255,176,135,0.12),transparent_31%)]" />
      <SiteHeader />
      <Hero />
      <Services />
      <SelectedWork />
      <About />
      <Contact />
      <RevealObserver />
    </main>
  );
}
