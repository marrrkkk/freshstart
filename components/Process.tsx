"use client";

import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We start by understanding your business goals, target audience, and requirements to create a roadmap for success.",
        icon: Search,
    },
    {
        number: "02",
        title: "Design & Prototyping",
        description: "Our designers create intuitive, high-fidelity mockups and interactive prototypes to visualize the final product.",
        icon: PenTool,
    },
    {
        number: "03",
        title: "Development",
        description: "We build your solution using modern technologies, ensuring clean code, performance, and scalability.",
        icon: Code2,
    },
    {
        number: "04",
        title: "Launch & Growth",
        description: "After rigorous testing, we deploy your site and provide ongoing support to help your business grow.",
        icon: Rocket,
    },
];

export default function Process() {
    return (
        <section className="py-32 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950" id="process">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] opacity-50 pointer-events-none" />

            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[800px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-6 z-10">
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6">
                        How We Work
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        A streamlined process designed to deliver exceptional results.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line with gradient */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 h-full"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-center group">

                                {/* Timeline Line Segment */}
                                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden md:block" />

                                {/* Mobile Connector */}
                                <div className="absolute left-8 top-8 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent md:hidden" />

                                {/* Empty Spacer for Desktop Balance */}
                                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}></div>

                                {/* Center Marker */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-50 dark:border-zinc-900 z-10 shadow-lg shadow-primary/20">
                                    <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:order-2 md:pl-16' : 'md:order-1 md:pr-16'}`}>
                                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 w-16 bg-gradient-to-r from-primary/50 to-transparent ${index % 2 === 0 ? 'left-1/2' : 'right-1/2 transform rotate-180'}`} />

                                    <Card className="relative p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl border border-white/20 dark:border-zinc-800 hover:border-primary/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/10 overflow-hidden">

                                        {/* Watermark Number */}
                                        <div className="absolute -top-4 -right-4 text-6xl md:text-9xl font-bold text-zinc-100 dark:text-zinc-800/50 select-none pointer-events-none z-0">
                                            {step.number}
                                        </div>

                                        <div className="relative z-10">
                                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center text-primary mb-6 md:mb-8 shadow-inner border border-primary/10 group-hover:scale-110 transition-transform duration-500">
                                                <step.icon className="w-6 h-6 md:w-8 md:h-8" />
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 tracking-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                                {step.description}
                                            </p>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
