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

    const projectColors = [
        "from-blue-500/20 to-purple-500/20",
        "from-emerald-500/20 to-teal-500/20",
        "from-orange-500/20 to-red-500/20",
    ];

    return (
        <section className="relative bg-zinc-50 dark:bg-zinc-950 py-32" id="portfolio">
            {/* Background Wrapper (Clipped) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Dynamic Background Gradient */}
                <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                    <div className={`absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br ${projectColors[activeProject % projectColors.length]} rounded-full blur-[120px] opacity-60 dark:opacity-40 transition-all duration-1000 -translate-y-1/2 translate-x-1/4`} />
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-32">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white mb-8">
                        Selected <span className="text-zinc-400 dark:text-zinc-600">Works</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mb-8" />
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-medium">
                        Crafting digital experiences that merge art with engineering. Explore our latest featured projects.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column: Project Details */}
                    <div className="flex flex-col gap-20 lg:gap-32 pb-32">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                ref={(el) => { observerRefs.current[index] = el; }}
                                className={`flex flex-col justify-center transition-all duration-500 ${activeProject === index ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4 lg:opacity-30'}`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                    <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                                    <span className="text-sm font-mono text-zinc-400 dark:text-zinc-500">0{index + 1}</span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                                    {project.title}
                                </h3>

                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 font-medium">
                                    {project.description}
                                </p>

                                {/* Mock Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {['React', 'TypeScript', 'Tailwind', 'Motion'].map((tech) => (
                                        <span key={tech} className="text-sm font-medium px-3 py-1.5 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 shadow-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6">
                                    <a href="#" className="group flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white hover:text-primary transition-colors">
                                        View Case Study
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>
                                </div>

                                {/* Mobile-only Image (for when sticky is hidden) */}
                                <div className="lg:hidden mt-10 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Mockups Container (Track) */}
                    <div className="hidden lg:block relative">
                        {/* Sticky Element */}
                        <div className="sticky top-24 h-[600px] w-full flex items-center justify-center">

                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${activeProject === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}
                                >
                                    {/* Desktop Mockup */}
                                    <div className="relative w-full aspect-[16/10] rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-[1.02]">
                                        {/* Browser Header */}
                                        <div className="h-8 bg-zinc-800 flex items-center gap-2 px-3 border-b border-zinc-700">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                            <div className="ml-4 flex-1 max-w-[200px] h-5 rounded bg-zinc-700/50 flex items-center px-2">
                                                <span className="text-[10px] text-zinc-400 truncate">freshstart.ph/projects/{project.title.toLowerCase().replace(/\s/g, '-')}</span>
                                            </div>
                                        </div>
                                        <div className="relative w-full h-full bg-zinc-800">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Floating Mobile Mockup (Decorative) */}
                                    <div className="absolute -bottom-10 -right-8 w-[25%] aspect-[9/19] rounded-[2rem] bg-zinc-900 border-[6px] border-zinc-800 shadow-2xl overflow-hidden hidden xl:block animate-float">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-zinc-800 rounded-b-xl z-20" />
                                        <div className="relative w-full h-full bg-zinc-800">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover object-left"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
