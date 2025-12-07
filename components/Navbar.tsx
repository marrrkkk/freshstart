"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import siteData from "@/data/data.json";

export default function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

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

    const handleLinkClick = () => {
        setDrawerOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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

                {/* Mobile Drawer */}
                <div className="md:hidden">
                    <Drawer direction="right" open={drawerOpen} onOpenChange={setDrawerOpen}>
                        <DrawerTrigger asChild>
                            <button
                                className="flex items-center justify-center w-10 h-10 focus:outline-none"
                                aria-label="Open menu"
                            >
                                <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
                            </button>
                        </DrawerTrigger>
                        <DrawerContent className="h-full w-[85%] max-w-sm bg-white dark:bg-zinc-950">
                            <DrawerHeader className="border-b border-gray-100 dark:border-zinc-800">
                                <div className="flex items-center justify-between">
                                    <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2">
                                        <div className="relative w-8 h-8">
                                            <Image src="/logo.png" alt="FreshStart PH Logo" fill className="object-contain" />
                                        </div>
                                        <DrawerTitle className="text-xl font-medium text-gray-900 dark:text-white">FreshStart PH</DrawerTitle>
                                    </Link>
                                </div>
                            </DrawerHeader>

                            <div className="flex flex-col px-6 py-8 overflow-y-auto">
                                {/* Services Section */}
                                <div className="flex flex-col gap-3 mb-8">
                                    <Link href="/#services" onClick={handleLinkClick} className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                                        Services
                                    </Link>
                                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-gray-100 dark:border-zinc-800">
                                        {servicesItems.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                onClick={handleLinkClick}
                                                className="text-base text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Portfolio Section */}
                                <div className="flex flex-col gap-3 mb-8">
                                    <Link href="/#portfolio" onClick={handleLinkClick} className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                                        Portfolio
                                    </Link>
                                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-gray-100 dark:border-zinc-800">
                                        {portfolioItems.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                onClick={handleLinkClick}
                                                className="text-base text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Other Links */}
                                <Link href="/#process" onClick={handleLinkClick} className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
                                    Process
                                </Link>

                                <Link href="/about" onClick={handleLinkClick} className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
                                    About Us
                                </Link>

                                {/* CTA Button */}
                                <DrawerClose asChild>
                                    <RainbowButton asChild size="lg" className="w-full">
                                        <Link href="/#contact" onClick={handleLinkClick}>
                                            Contact Us
                                        </Link>
                                    </RainbowButton>
                                </DrawerClose>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </nav>
    );
}
