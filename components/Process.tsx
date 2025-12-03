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
        <section className="py-24 bg-white dark:bg-black" id="process">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        How We Work
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        A streamlined process designed to deliver exceptional results.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 md:-translate-x-1/2"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Empty Spacer for Desktop Balance */}
                                <div className="hidden md:block md:w-1/2"></div>

                                {/* Center Marker */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-black border-4 border-zinc-100 dark:border-zinc-800 z-10 shadow-sm">
                                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-20 md:pl-0">
                                    <Card className={`
                        relative p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 
                        hover:border-orange-500/30 transition-all duration-300 group shadow-none
                        ${index % 2 === 0 ? 'md:mr-12 md:text-right' : 'md:ml-12 md:text-left'}
                    `}>
                                        {/* Connecting Line to Center (Desktop) */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-px bg-zinc-200 dark:bg-zinc-800 
                            ${index % 2 === 0 ? '-right-12' : '-left-12'}
                        `}></div>

                                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <step.icon className="w-6 h-6 text-orange-500" />
                                            </div>
                                            <span className="text-4xl font-bold text-zinc-200 dark:text-zinc-800 group-hover:text-orange-100 dark:group-hover:text-orange-900/20 transition-colors duration-300">
                                                {step.number}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                            {step.description}
                                        </p>
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
