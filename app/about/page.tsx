import type { Metadata } from "next";
import Link from "next/link";
import { Facebook, Github, GraduationCap, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteData from "@/data/data.json";
import seoData from "@/data/seo.json";

export const metadata: Metadata = {
  title: seoData.pages.about.title,
  description: seoData.pages.about.description,
  keywords: seoData.pages.about.keywords,
  openGraph: {
    title: seoData.pages.about.title,
    description: seoData.pages.about.description,
    url: `${seoData.seo.siteUrl}/about`,
  },
  twitter: {
    title: seoData.pages.about.title,
    description: seoData.pages.about.description,
  },
  alternates: {
    canonical: `${seoData.seo.siteUrl}/about`,
  },
};

const socialIcons = {
  facebook: Facebook,
  linkedin: Linkedin,
  github: Github,
};

export default function AboutPage() {
  const { about } = siteData;

  return (
    <main className="page-shell min-h-screen">
      <Navbar />

      <section className="section-frame px-1 pb-16 pt-32 sm:pt-40">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="section-kicker">About FreshStart</div>
            <h1 className="mt-6 max-w-4xl text-[3.2rem] leading-[0.94] text-[#171717] sm:text-[4.4rem] lg:text-[6.5rem]">
              {about.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70 sm:text-xl">
              {about.hero.description}
            </p>
          </div>

          <div className="surface-card rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/42">
              Studio note
            </p>
            <p className="mt-6 font-display text-3xl leading-tight text-[#171717] sm:text-4xl">
              We care about the front-end because it is the first proof that the rest of the business is sharp.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-black/10 bg-white/55 p-5">
                <p className="text-4xl font-semibold text-[#171717]">Student-founded</p>
                <p className="mt-2 text-sm leading-7 text-black/60">
                  Built with urgency, experimentation, and a bias toward shipping.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-black/10 bg-[#efe4d3] p-5">
                <p className="text-4xl font-semibold text-[#171717]">Product-minded</p>
                <p className="mt-2 text-sm leading-7 text-black/60">
                  Design choices and code choices are treated as the same system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="section-frame">
          <div className="mb-10">
            <div className="section-kicker">Founders</div>
            <h2 className="mt-6 text-5xl leading-none text-[#171717] sm:text-6xl">
              {about.founders.sectionTitle}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-black/70 sm:text-lg">
              {about.founders.sectionSubtitle}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {about.founders.team.map((founder, index) => (
              <article
                key={founder.name}
                className={`surface-card rounded-[2rem] p-6 sm:p-8 ${index % 2 === 1 ? "lg:translate-y-10" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[#171717] text-[#f6f0e3]">
                    <GraduationCap className="h-7 w-7" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/38">
                    {founder.education}
                  </span>
                </div>

                <h3 className="mt-8 text-4xl leading-none text-[#171717]">{founder.name}</h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#d55d3f]">
                  {founder.role}
                </p>
                <p className="mt-6 text-base leading-8 text-black/70">{founder.description}</p>

                <div className="mt-8 flex gap-3">
                  {(Object.keys(socialIcons) as Array<keyof typeof socialIcons>).map((key) => {
                    const href = founder.socials[key];
                    const Icon = socialIcons[key];

                    if (!href) {
                      return (
                        <span
                          key={key}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/50 text-black/25"
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                      );
                    }

                    return (
                      <Link
                        key={key}
                        href={href}
                        target="_blank"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/60 text-black/70 hover:-translate-y-0.5 hover:text-black"
                      >
                        <Icon className="h-4 w-4" />
                      </Link>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
