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
        <section className="py-24 relative overflow-hidden" id="process">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] opacity-50 pointer-events-none" />

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

                                {/* Empty Spacer for Desktop Balance */}
                                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}></div>

                                {/* Center Marker */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-50 dark:border-zinc-900 z-10 shadow-lg shadow-primary/20">
                                    <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'order-2 md:pl-12' : 'order-1 md:pr-12'}`}>
                                    <Card className="relative p-8 rounded-3xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-white/20 dark:border-zinc-800 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">

                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-16 translate-x-16" />

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                                    <step.icon className="w-6 h-6" />
                                                </div>
                                                <span className="text-4xl font-bold text-gray-200 dark:text-zinc-800 group-hover:text-primary/20 transition-colors duration-300">
                                                    {step.number}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
