import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image src="/logo.png" alt="FreshStart PH Logo" fill className="object-contain brightness-0 invert" />
                        </div>
                        <span className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">FreshStart PH</span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap gap-6 text-sm text-gray-400">
                        <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
                        <Link href="/#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                        <Link href="/#process" className="hover:text-white transition-colors">Process</Link>
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
                    </nav>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        <Link href="#" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors text-gray-400 hover:text-white">
                            <Twitter className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors text-gray-400 hover:text-white">
                            <Github className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors text-gray-400 hover:text-white">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors text-gray-400 hover:text-white">
                            <Instagram className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} FreshStart PH. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
