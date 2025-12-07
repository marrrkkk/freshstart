"use client";

import { useState } from "react";
import { Code, ShoppingBag, Laptop, Palette, Search, Wrench, ArrowUpRight, X } from "lucide-react";
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
    Search,
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
            <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(250,250,250,0.7)_50%,rgba(250,250,250,1)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.7)_50%,rgba(9,9,11,1)_100%)]"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Our Expertise</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md text-sm">
                            Minimalist solutions for complex digital challenges.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            onClick={() => handleServiceClick(service)}
                            className="group p-6 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/30 hover:bg-orange-50/30 dark:hover:bg-orange-900/10 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-5 h-5 text-orange-500" />
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-orange-500 transition-colors opacity-0 group-hover:opacity-100" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white tracking-tight">{service.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
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
                                    <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
                                        <selectedService.icon className="w-6 h-6 text-orange-500" />
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
                                                <span className="text-orange-500 mt-1">✓</span>
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
