"use client";

import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { LineShadowText } from "./ui/line-shadow-text";
import Image from "next/image";
import Particles from "./Particles";

export default function Hero() {
    const handleGetStarted = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white dark:bg-black pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-300/80 via-orange-100/20 to-transparent dark:from-orange-800/60 dark:via-orange-900/20 dark:to-transparent z-0 pointer-events-none" />
            <Particles />

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 animate-fade-in-up">
                <div className="mb-8 flex items-center justify-center gap-2">
                    <Image src="/logo.png" alt="FreshStart PH Logo" width={40} height={40} className="object-contain" />
                    <span className="text-xl font-medium text-gray-600 dark:text-gray-300">FreshStart PH</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                    Ship <LineShadowText className="italic" shadowColor="black">Fast</LineShadowText>, <span> </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Scale Smarter</span>
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                    We are FreshStart, a web development service dedicated to delivering high-quality projects fast.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                    <div onClick={handleGetStarted} className="cursor-pointer">
                        <GetStartedButton />
                    </div>
                    <Button size="lg" variant="outline" className="group border-gray-300 dark:border-gray-700">
                        <Monitor className="mr-2 h-4 w-4" />
                        View Our Work
                    </Button>
                </div>
            </div>
        </section>
    );
}
