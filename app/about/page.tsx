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
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <Particles />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        {about.hero.title.split('FreshStart.')[0]}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">FreshStart.</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
                            <Card key={i} className="p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/20 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group text-center shadow-none">
                                <div className="w-24 h-24 mx-auto rounded-full bg-zinc-100 dark:bg-zinc-800 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <GraduationCap className="w-10 h-10 text-gray-400 group-hover:text-orange-500 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{founder.name}</h3>
                                <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-2">{founder.role}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">{founder.education}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                    {founder.description}
                                </p>

                                {/* Social Media Links */}
                                <div className="flex items-center justify-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                    {founder.socials.facebook ? (
                                        <Link
                                            href={founder.socials.facebook}
                                            target="_blank"
                                            className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                                        >
                                            <Facebook className="w-4 h-4" />
                                        </Link>
                                    ) : (
                                        <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center opacity-40 cursor-not-allowed">
                                            <Facebook className="w-4 h-4" />
                                        </div>
                                    )}
                                    {founder.socials.linkedin ? (
                                        <Link
                                            href={founder.socials.linkedin}
                                            target="_blank"
                                            className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </Link>
                                    ) : (
                                        <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center opacity-40 cursor-not-allowed">
                                            <Linkedin className="w-4 h-4" />
                                        </div>
                                    )}
                                    {founder.socials.github ? (
                                        <Link
                                            href={founder.socials.github}
                                            target="_blank"
                                            className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                                        >
                                            <Github className="w-4 h-4" />
                                        </Link>
                                    ) : (
                                        <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center opacity-40 cursor-not-allowed">
                                            <Github className="w-4 h-4" />
                                        </div>
                                    )}
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

