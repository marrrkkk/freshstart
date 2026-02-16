import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import { GraduationCap, Facebook, Linkedin, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import siteData from "@/data/data.json";
import seoData from "@/data/seo.json";
import Link from "next/link";

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

export default function AboutPage() {
    const { about } = siteData;

    return (
        <main className="min-h-screen bg-white dark:bg-black">
            <Navbar />

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(var(--primary-rgb),0.1),transparent)] pointer-events-none"></div>

                <Particles />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6">
                        {about.hero.title.split('FreshStart.')[0]}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600 animate-gradient-x">FreshStart.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                        {about.hero.description}
                    </p>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {about.founders.sectionTitle}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            {about.founders.sectionSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {about.founders.team.map((founder, i) => (
                            <Card key={i} className="relative overflow-hidden p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group text-center shadow-sm">
                                <div className="absolute top-0 right-0 w-32 h-32 -translate-y-16 translate-x-16 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500 blur-2xl" />

                                <div className="relative">
                                    <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <GraduationCap className="w-10 h-10 text-primary transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">{founder.name}</h3>
                                    <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">{founder.role}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-6 font-medium">{founder.education}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
                                        {founder.description}
                                    </p>

                                    {/* Social Media Links */}
                                    <div className="flex items-center justify-center gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                                        {founder.socials.facebook ? (
                                            <Link
                                                href={founder.socials.facebook}
                                                target="_blank"
                                                className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                                            >
                                                <Facebook className="w-5 h-5" />
                                            </Link>
                                        ) : (
                                            <div className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-gray-400 flex items-center justify-center opacity-40 cursor-not-allowed">
                                                <Facebook className="w-5 h-5" />
                                            </div>
                                        )}
                                        {founder.socials.linkedin ? (
                                            <Link
                                                href={founder.socials.linkedin}
                                                target="_blank"
                                                className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </Link>
                                        ) : (
                                            <div className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-gray-400 flex items-center justify-center opacity-40 cursor-not-allowed">
                                                <Linkedin className="w-5 h-5" />
                                            </div>
                                        )}
                                        {founder.socials.github ? (
                                            <Link
                                                href={founder.socials.github}
                                                target="_blank"
                                                className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                                            >
                                                <Github className="w-5 h-5" />
                                            </Link>
                                        ) : (
                                            <div className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-gray-400 flex items-center justify-center opacity-40 cursor-not-allowed">
                                                <Github className="w-5 h-5" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

