import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-zinc-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                                <Image src="/logo.png" alt="FreshStart PH Logo" fill className="object-contain brightness-0 invert" />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter text-white">FreshStart PH</span>
                        </Link>
                        <p className="text-zinc-400 leading-relaxed text-sm max-w-xs">
                            Building digital experiences that matter. We help forward-thinking companies scalpable, performant, and beautiful software.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Instagram, href: "#" }
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-zinc-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <social.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Services', 'Portfolio', 'Process', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item === 'About Us' ? 'about' : item === 'Contact' ? '#contact' : '#' + item.toLowerCase()}`}
                                        className="text-zinc-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 text-white">Services</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'Consulting'].map((item) => (
                                <li key={item}>
                                    <Link href="/#services" className="text-zinc-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 text-white">Contact</h4>
                        <div className="space-y-4 text-sm text-zinc-400">
                            <p>Lucena City, Philippines</p>
                            <Link href="mailto:hello@freshstart.ph" className="block hover:text-primary transition-colors">
                                hello@freshstart.ph
                            </Link>
                            <Link href="tel:+639123456789" className="block hover:text-primary transition-colors">
                                +63 912 345 6789
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-sm">
                        &copy; {new Date().getFullYear()} FreshStart PH. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-zinc-500">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
