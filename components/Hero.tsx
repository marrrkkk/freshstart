"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { LineShadowText } from "./ui/line-shadow-text";

export default function Hero() {
    const handleGetStarted = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative flex flex-col items-center min-h-screen w-full overflow-hidden bg-white dark:bg-black pt-32 md:pt-48 pb-20 border-b border-gray-100 dark:border-zinc-800">
            {/* Grid Background & Ambient Glow */}
            <div className="absolute inset-0 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-30" />

            {/* Hero Content - centered in available space */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center w-full">

                <div className="flex flex-col items-center text-center max-w-5xl px-4 animate-fade-in-up delay-100">


                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white mb-8 leading-[1.1] drop-shadow-sm">
                        Build <LineShadowText className="italic" shadowColor="rgba(var(--primary-rgb), 0.5)">Smarter</LineShadowText>,<br className="hidden md:block" />{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600 animate-gradient-x">Ship Faster.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed font-medium">
                        Helping businesses grow with clean code and scalable solutions.
                        We turn your ideas into high-performance digital products.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200 mt-4">
                        <Button
                            size="lg"
                            onClick={handleGetStarted}
                            className="group relative h-14 px-8 rounded-full text-lg font-bold tracking-wide shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-600 text-white border-0"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Project
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Button>

                        <Button
                            asChild
                            variant="ghost"
                            size="lg"
                            className="h-14 px-8 rounded-full text-lg font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all"
                        >
                            <Link href="/#portfolio">
                                View Portfolio
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Tools / Logos Section - always below hero with clear spacing */}
            <div className="relative z-10 flex-shrink-0 mt-16 md:mt-20 w-full py-10 md:py-12 animate-fade-in-up delay-300">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">The Tools Behind Our Magic</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            We use the latest frameworks and tools to deliver fast, secure, and scalable digital experiences.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                        {/* React */}
                        <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 text-gray-600 dark:text-gray-400 font-semibold text-lg hover:border-primary/20 hover:text-primary transition-all duration-300 hover:-translate-y-1 cursor-default">
                            <div className="relative w-6 h-6">
                                <Image
                                    src="/icons/react.svg"
                                    alt="React"
                                    fill
                                    className="object-contain group-hover:drop-shadow-[0_0_6px_rgba(97,218,251,0.5)] transition-all"
                                />
                            </div>
                            React
                        </div>

                        {/* Next.js */}
                        <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 text-gray-600 dark:text-gray-400 font-semibold text-lg hover:border-primary/20 hover:text-primary transition-all duration-300 hover:-translate-y-1 cursor-default">
                            <div className="relative w-6 h-6">
                                <Image
                                    src="/icons/nextjs.svg"
                                    alt="Next.js"
                                    fill
                                    className="object-contain dark:invert group-hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.5)] dark:group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] transition-all"
                                />
                            </div>
                            Next.js
                        </div>

                        {/* Laravel */}
                        <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 text-gray-600 dark:text-gray-400 font-semibold text-lg hover:border-primary/20 hover:text-primary transition-all duration-300 hover:-translate-y-1 cursor-default">
                            <div className="relative w-6 h-6">
                                <Image
                                    src="/icons/laravel.svg"
                                    alt="Laravel"
                                    fill
                                    className="object-contain group-hover:drop-shadow-[0_0_6px_rgba(255,45,32,0.5)] transition-all"
                                />
                            </div>
                            Laravel
                        </div>

                        {/* Supabase */}
                        <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 text-gray-600 dark:text-gray-400 font-semibold text-lg hover:border-primary/20 hover:text-primary transition-all duration-300 hover:-translate-y-1 cursor-default">
                            <div className="relative w-6 h-6">
                                <Image
                                    src="/icons/supabase.svg"
                                    alt="Supabase"
                                    fill
                                    className="object-contain group-hover:drop-shadow-[0_0_6px_rgba(62,207,142,0.5)] transition-all"
                                />
                            </div>
                            Supabase
                        </div>

                        {/* Postgres */}
                        <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 text-gray-600 dark:text-gray-400 font-semibold text-lg hover:border-primary/20 hover:text-primary transition-all duration-300 hover:-translate-y-1 cursor-default">
                            <div className="relative w-6 h-6">
                                <Image
                                    src="/icons/postgresql.svg"
                                    alt="PostgreSQL"
                                    fill
                                    className="object-contain group-hover:drop-shadow-[0_0_6px_rgba(51,103,145,0.5)] transition-all"
                                />
                            </div>
                            Postgres
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
