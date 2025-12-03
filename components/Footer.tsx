import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="relative w-8 h-8">
                                <Image src="/logo.png" alt="FreshStart PH Logo" fill className="object-contain brightness-0 invert" />
                            </div>
                            <span className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">FreshStart PH</span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Empowering businesses with fast, modern, and scalable web solutions from the Philippines to the world.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors text-gray-400 hover:text-white">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors text-gray-400 hover:text-white">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors text-gray-400 hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors text-gray-400 hover:text-white">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-semibold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">E-commerce</Link></li>
                            <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} FreshStart PH. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
