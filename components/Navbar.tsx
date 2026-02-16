"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import siteData from "@/data/data.json";
import { Button } from "./ui/button";

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className={`mx-auto transition-all duration-300 ${lastScrollY > 10 ? 'mt-4 max-w-6xl rounded-full border border-white/20 bg-white/80 dark:bg-black/80 backdrop-blur-2xl shadow-xl shadow-black/5' : 'max-w-7xl pt-6 bg-transparent border-transparent'}`}>
                <div className={`px-6 md:px-8 flex items-center justify-between relative ${lastScrollY > 10 ? 'py-3' : 'py-4'}`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 z-50 relative group">
                        <div className="relative w-9 h-9 transition-transform duration-300 group-hover:scale-110">
                            <Image src="/logo.png" alt="FreshStart PH Logo" fill className="object-contain" />
                        </div>
                        <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${lastScrollY > 10 ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>FreshStart PH</span>
                    </Link>

                    {/* Desktop Navigation - Hidden on Mobile */}
                    <div className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/50 dark:bg-zinc-900/50 p-1.5 rounded-full border border-white/20 dark:border-white/10 backdrop-blur-md shadow-sm">
                        {/* Services Dropdown */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <Link href="/#services" className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300">
                                Services
                                <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </Link>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl shadow-black/10 border border-gray-100 dark:border-zinc-800 overflow-hidden transition-all duration-200 origin-top ${isServicesOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-2'}`}>
                                <div className="p-1.5">
                                    {servicesItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 rounded-xl transition-all"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Dropdown */}
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setIsPortfolioOpen(true)}
                            onMouseLeave={() => setIsPortfolioOpen(false)}
                        >
                            <Link href="/#portfolio" className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300">
                                Portfolio
                                <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${isPortfolioOpen ? 'rotate-180' : ''}`} />
                            </Link>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl shadow-black/10 border border-gray-100 dark:border-zinc-800 overflow-hidden transition-all duration-200 origin-top ${isPortfolioOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-2'}`}>
                                <div className="p-1.5">
                                    {portfolioItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 rounded-xl transition-all"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link href="/#process" className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300">
                            Process
                        </Link>
                        <Link href="/about" className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300">
                            About Us
                        </Link>
                    </div>

                    {/* Right Side Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button asChild size="lg" className="rounded-full px-6 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold tracking-wide hover:opacity-90 border-0">
                            <Link href="/#contact">
                                Contact Us
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Drawer */}
                    <div className="md:hidden">
                        <Drawer direction="right" open={drawerOpen} onOpenChange={setDrawerOpen}>
                            <DrawerTrigger asChild>
                                <button
                                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
                                    aria-label="Open menu"
                                >
                                    <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
                                </button>
                            </DrawerTrigger>
                            <DrawerContent className="h-full w-[85%] max-w-sm bg-white dark:bg-zinc-950 border-l border-zinc-100 dark:border-zinc-900">
                                <DrawerHeader className="border-b border-gray-100 dark:border-zinc-900 py-6">
                                    <div className="flex items-center justify-between">
                                        <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2">
                                            <div className="relative w-8 h-8">
                                                <Image src="/logo.png" alt="FreshStart PH Logo" fill className="object-contain" />
                                            </div>
                                            <DrawerTitle className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">FreshStart PH</DrawerTitle>
                                        </Link>
                                    </div>
                                </DrawerHeader>

                                <div className="flex flex-col px-6 py-8 overflow-y-auto h-full">
                                    <div className="flex-1 space-y-8">
                                        {/* Services Section */}
                                        <div className="flex flex-col gap-4">
                                            <Link href="/#services" onClick={handleLinkClick} className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center justify-between group">
                                                Services
                                                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                            </Link>
                                            <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100 dark:border-zinc-800">
                                                {servicesItems.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        href={item.href}
                                                        onClick={handleLinkClick}
                                                        className="text-base font-medium text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Portfolio Section */}
                                        <div className="flex flex-col gap-4">
                                            <Link href="/#portfolio" onClick={handleLinkClick} className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center justify-between group">
                                                Portfolio
                                                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                            </Link>
                                            <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100 dark:border-zinc-800">
                                                {portfolioItems.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        href={item.href}
                                                        onClick={handleLinkClick}
                                                        className="text-base font-medium text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        <Link href="/#process" onClick={handleLinkClick} className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight block hover:text-primary transition-colors">
                                            Process
                                        </Link>

                                        <Link href="/about" onClick={handleLinkClick} className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight block hover:text-primary transition-colors">
                                            About Us
                                        </Link>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-900">
                                        <DrawerClose asChild>
                                            <Button asChild size="lg" className="w-full rounded-full h-12 text-lg font-bold bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20">
                                                <Link href="/#contact" onClick={handleLinkClick}>
                                                    Contact Us
                                                </Link>
                                            </Button>
                                        </DrawerClose>
                                    </div>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
        </nav>
    );
}
