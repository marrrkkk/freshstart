import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import seoData from "@/data/seo.json";

export const metadata: Metadata = {
  title: seoData.pages.home.title,
  description: seoData.pages.home.description,
  keywords: seoData.pages.home.keywords,
  openGraph: {
    title: seoData.pages.home.title,
    description: seoData.pages.home.description,
    url: seoData.seo.siteUrl,
  },
  twitter: {
    title: seoData.pages.home.title,
    description: seoData.pages.home.description,
  },
  alternates: {
    canonical: seoData.seo.siteUrl,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
