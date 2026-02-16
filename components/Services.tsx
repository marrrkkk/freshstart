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
        <section className="py-20 px-6 md:px-12 relative overflow-hidden" id="services">
            {/* Background with dot pattern and radial fade */}
            {/* Background with dot pattern and radial fade */}
            <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] opacity-50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(var(--primary-rgb),0.15),transparent)]"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white mb-4">Services We Offer</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to elevate your business in the digital landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            onClick={() => handleServiceClick(service)}
                            className="group relative overflow-hidden p-8 rounded-3xl bg-white/70 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/50 hover:border-primary/30 hover:bg-white/90 dark:hover:bg-zinc-900/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 cursor-pointer flex flex-col h-full"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 -translate-y-12 translate-x-12 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500 blur-2xl" />

                            <div className="relative flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <div className="p-2 rounded-full bg-transparent group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors duration-300">
                                        <ArrowUpRight className="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-primary transition-colors duration-300" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6 flex-1">
                                    {service.description}
                                </p>

                                <span className="inline-flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors">
                                    Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Service Details Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    {selectedService && (
                        <>
                            <DialogHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <selectedService.icon className="w-6 h-6" />
                                    </div>
                                    <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
                                </div>
                                <DialogDescription className="text-base">
                                    {selectedService.details.fullDescription}
                                </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-6 mt-4">
                                {/* Features */}
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What's Included</h4>
                                    <ul className="space-y-2">
                                        {selectedService.details.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <span className="text-primary mt-1">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies We Use</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedService.details.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>


                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
