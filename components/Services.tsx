"use client";

import { useState } from "react";
import { Code, ShoppingBag, Laptop, Palette, Smartphone, Wrench, ArrowUpRight, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import siteData from "@/data/data.json";

const iconMap = {
    Code,
    ShoppingBag,
    Laptop,
    Palette,
    Smartphone,
    Wrench,
};

const services = siteData.services.map(service => ({
    ...service,
    icon: iconMap[service.icon as keyof typeof iconMap],
}));


export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleServiceClick = (service: typeof services[0]) => {
        setSelectedService(service);
        setIsOpen(true);
    };

    return (
        <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950" id="services">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] opacity-50 pointer-events-none" />

            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto z-10">
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6">
                        Services We <span className="text-primary">Offer</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                        Comprehensive solutions tailored to elevate your business in the digital landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            onClick={() => handleServiceClick(service)}
                            className="group relative overflow-hidden p-8 rounded-[2rem] bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-500 shadow-lg shadow-zinc-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 -translate-y-32 translate-x-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500 blur-3xl" />

                            <div className="relative flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-zinc-100 dark:border-zinc-700">
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <div className="p-2 rounded-full bg-transparent group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors duration-300">
                                        <ArrowUpRight className="w-6 h-6 text-zinc-300 dark:text-zinc-600 group-hover:text-primary transition-colors duration-300" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 flex-1">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                    <span className="border-b-2 border-transparent group-hover:border-primary transition-all duration-300">Learn more</span>
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Service Details Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-zinc-200 dark:border-zinc-800 shadow-2xl p-0 gap-0 rounded-3xl">
                    {selectedService && (
                        <div className="relative">
                            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                            <div className="p-8 md:p-10 relative z-10 space-y-8">
                                <DialogHeader className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-4 rounded-2xl bg-primary/10 text-primary shadow-inner">
                                            <selectedService.icon className="w-8 h-8" />
                                        </div>
                                        <DialogTitle className="text-3xl md:text-4xl font-bold tracking-tight">{selectedService.title}</DialogTitle>
                                    </div>
                                    <DialogDescription className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                                        {selectedService.details.fullDescription}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Features */}
                                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700/50">
                                        <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            What's Included
                                        </h4>
                                        <ul className="space-y-3">
                                            {selectedService.details.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                                    <div className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedService.details.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 text-xs font-semibold bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
