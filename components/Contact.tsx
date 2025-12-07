"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Particles from "./Particles";

export default function Contact() {
    return (
        <section className="relative py-24 bg-white dark:bg-black overflow-hidden" id="contact">
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <Particles />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                            Let's build something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">amazing together.</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-md">
                            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm">
                                    <Mail className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400">hello@freshstart.ph</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm">
                                    <Phone className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Call Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400">+63 912 345 6789</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm">
                                    <MapPin className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Visit Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Lucena City, Philippines</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-zinc-50 dark:bg-zinc-900 p-8 md:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                                    <Input type="text" id="first-name" className="w-full px-4 py-3 h-auto rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus-visible:ring-2 focus-visible:ring-orange-500/20 focus-visible:border-orange-500 transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                                    <Input type="text" id="last-name" className="w-full px-4 py-3 h-auto rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus-visible:ring-2 focus-visible:ring-orange-500/20 focus-visible:border-orange-500 transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                <Input type="email" id="email" className="w-full px-4 py-3 h-auto rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus-visible:ring-2 focus-visible:ring-orange-500/20 focus-visible:border-orange-500 transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <Textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus-visible:ring-2 focus-visible:ring-orange-500/20 focus-visible:border-orange-500 transition-all resize-none" placeholder="Tell us about your project..." />
                            </div>

                            <Button type="submit" className="w-full py-4 px-6 h-auto bg-black dark:bg-white text-white dark:text-black font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 hover:bg-black/90 dark:hover:bg-white/90">
                                Send Message
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
