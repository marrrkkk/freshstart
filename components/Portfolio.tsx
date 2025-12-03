"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import siteData from "@/data/data.json";

const projects = siteData.projects;


export default function Portfolio() {
    const [activeProject, setActiveProject] = useState(0);
    const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = projects.map((_, index) => {
            return new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveProject(index);
                        }
                    });
                },
                { threshold: 0.5 }
            );
        });

        projects.forEach((_, index) => {
            if (observerRefs.current[index]) {
                observers[index].observe(observerRefs.current[index]!);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <section className="bg-white dark:bg-black py-24" id="portfolio">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        Selected Works
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                        We build digital products that define brands. Here are a few of our recent success stories.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col gap-24 lg:gap-0">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                ref={(el) => { observerRefs.current[index] = el; }}
                                className="min-h-[80vh] flex flex-col justify-center py-12"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`w-2 h-2 rounded-full ${project.color}`}></span>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{project.category}</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                    {project.title}
                                </h3>

                                {/* Mobile Image */}
                                <div className="lg:hidden relative w-full h-64 rounded-xl overflow-hidden mb-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top"
                                        priority={index === 0}
                                    />
                                </div>

                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Image */}
                    <div className="hidden lg:block relative h-[80vh] sticky top-24">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
                            {/* Mockup Window Header */}
                            <div className="absolute top-0 left-0 right-0 h-10 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-4 gap-2 z-10">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>

                            {/* Image Area */}
                            <div className="absolute inset-0 top-10 bg-zinc-100 dark:bg-zinc-900">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeProject === index ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top"
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

