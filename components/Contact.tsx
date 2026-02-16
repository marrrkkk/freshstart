"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Particles from "./Particles";

export default function Contact() {
    return (
        <section className="relative py-32 bg-zinc-50 dark:bg-zinc-950 overflow-hidden" id="contact">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] opacity-50 pointer-events-none" />

            {/* Gradient Blob */}
            <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <Particles />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Content */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6 leading-tight">
                                Let's build something <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">amazing together.</span>
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed font-medium">
                                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <a href="mailto:hello@freshstart.ph" className="group flex items-center gap-6 p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300">
                                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">hello@freshstart.ph</p>
                                </div>
                            </a>

                            <a href="tel:+639123456789" className="group flex items-center gap-6 p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300">
                                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Call Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">+63 912 345 6789</p>
                                </div>
                            </a>

                            <div className="group flex items-center gap-6 p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300">
                                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Visit Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Lucena City, Philippines</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-3xl blur-xl -z-10" />
                        <div className="bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/20 dark:border-zinc-800 shadow-2xl">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">First Name</label>
                                        <Input type="text" id="first-name" className="w-full px-4 py-3 h-auto rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all font-medium" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Last Name</label>
                                        <Input type="text" id="last-name" className="w-full px-4 py-3 h-auto rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all font-medium" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                                    <Input type="email" id="email" className="w-full px-4 py-3 h-auto rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all font-medium" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                                    <Textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all resize-none font-medium" placeholder="Tell us about your project..." />
                                </div>

                                <Button type="submit" size="lg" className="w-full py-6 h-auto bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 border-0">
                                    Send Message
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
