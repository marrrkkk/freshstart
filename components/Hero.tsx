"use client";

import { Component, Zap, Server, Database, ArrowRight } from "lucide-react";
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
        <section className="relative flex flex-col items-center min-h-screen w-full overflow-hidden bg-white dark:bg-black pt-32 md:pt-40 pb-20 border-b border-gray-100 dark:border-zinc-800">
            {/* Grid Background */}
            <div className="absolute inset-0 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Hero Content - centered in available space */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center w-full">
                {/* Trusted Pill */}
                <div className="animate-fade-in-up">
                    <div className="flex items-center gap-2 p-1 pr-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full shadow-sm mb-12 hover:shadow-md transition-shadow cursor-default">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 flex items-center justify-center text-[10px] font-bold text-orange-600 dark:text-orange-300`}>
                                    CN
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Trusted by bold companies worldwide.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center max-w-5xl px-4 animate-fade-in-up delay-100">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-[1.1]">
                        Build <LineShadowText className="italic" shadowColor="black">Smarter</LineShadowText>,<br className="hidden md:block" />{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Ship Faster.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
                        Helping businesses grow with clean code and scalable solutions.
                        We turn your ideas into high-performance digital products.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
                        <Button
                            size="lg"
                            onClick={handleGetStarted}
                            className="h-12 px-8 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Start Project
                            <ArrowRight className="w-4 h-4" />
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

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold text-lg">
                            <Component className="w-6 h-6" /> React
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold text-lg">
                            <Zap className="w-6 h-6" /> Next.js
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold text-lg">
                            <Server className="w-6 h-6" /> Laravel
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold text-lg">
                            <Database className="w-6 h-6" /> Supabase
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold text-lg">
                            <Database className="w-6 h-6" /> Postgres
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
