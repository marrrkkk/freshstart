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
