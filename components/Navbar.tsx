"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";

import siteData from "@/data/data.json";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    // Handle scroll to show/hide navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar when scrolling up or at the top
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            }
            // Hide navbar when scrolling down
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // Generate services dropdown items from actual services data
    const servicesItems = siteData.services.map(service => ({
        name: service.title,
        href: `/#services`
    }));

    // Generate portfolio dropdown items from actual projects data
    const portfolioItems = [
        { name: "All Projects", href: "/#portfolio" },
        ...siteData.projects.map(project => ({
            name: project.title,
            href: `/#portfolio`
        }))
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 z-50 relative hover:opacity-80 transition-opacity">
                    <div className="relative w-8 h-8">
                        <Image src="/logo.png" alt="FreshStart PH Logo" fill className="object-contain" />
                    </div>
                    <span className="text-xl font-medium text-gray-900 dark:text-white">FreshStart PH</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
                    {/* Services Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <Link href="/#services" className="flex items-center gap-1 relative">
                            Services
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 dark:bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-0 mt-2 w-52 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            {servicesItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Portfolio Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsPortfolioOpen(true)}
                        onMouseLeave={() => setIsPortfolioOpen(false)}
                    >
                        <Link href="/#portfolio" className="flex items-center gap-1 relative">
                            Portfolio
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPortfolioOpen ? 'rotate-180' : ''}`} />
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 dark:bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 ${isPortfolioOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            {portfolioItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/#process" className="relative group">
                        Process
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 dark:bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/about" className="relative group">
                        About Us
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 dark:bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <RainbowButton asChild size="lg">
                        <Link href="/#contact">
                            Contact Us
                        </Link>
                    </RainbowButton>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="flex flex-col justify-center items-center w-10 h-10 md:hidden z-50 relative focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ease-out my-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                    <div className="flex flex-col items-center gap-8 text-xl font-medium text-gray-900 dark:text-white">
                        <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="relative group">
                            Services
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 dark:bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/#portfolio" onClick={() => setIsMenuOpen(false)} className="relative group">
                            Portfolio
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 dark:bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/#process" onClick={() => setIsMenuOpen(false)} className="relative group">
                            Process
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 dark:bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="relative group">
                            About Us
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 dark:bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <Button asChild className="rounded-full px-8 py-6 text-lg mt-4">
                            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                                <span>Start Project</span>
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
