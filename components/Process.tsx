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
            {/* Background with grid pattern and radial fade */}
            <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(250,250,250,0.7)_50%,rgba(250,250,250,1)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.7)_50%,rgba(9,9,11,1)_100%)]"></div>

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        How We Work
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        A streamlined process designed to deliver exceptional results.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line with gradient */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
                        <div className="h-full w-full bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent"></div>
                    </div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Empty Spacer for Desktop Balance */}
                                <div className="hidden md:block md:w-1/2"></div>

                                {/* Center Marker with pulse animation */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-orange-500/30 z-10 shadow-lg shadow-orange-500/10">
                                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 animate-pulse"></div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-20 md:pl-0">
                                    <Card className={`
                                        relative p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 
                                        hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group
                                        ${index % 2 === 0 ? 'md:mr-12 md:text-right' : 'md:ml-12 md:text-left'}
                                    `}>
                                        {/* Connecting Line to Center (Desktop) */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r ${index % 2 === 0 ? 'from-transparent to-orange-500/30 -right-12' : 'from-orange-500/30 to-transparent -left-12'}`}></div>

                                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-300">
                                                <step.icon className="w-6 h-6 text-orange-500" />
                                            </div>
                                            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 group-hover:from-orange-200 group-hover:to-orange-300 dark:group-hover:from-orange-900/40 dark:group-hover:to-orange-800/40 transition-all duration-300">
                                                {step.number}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                            {step.description}
                                        </p>

                                        {/* Accent corner */}
                                        <div className={`absolute ${index % 2 === 0 ? 'top-0 left-0 rounded-tl-2xl' : 'top-0 right-0 rounded-tr-2xl'} w-16 h-16 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
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
