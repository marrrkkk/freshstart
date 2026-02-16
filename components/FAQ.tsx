import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import data from "@/data/data.json";

export default function FAQ() {
    return (
        <section id="faq" className="py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-gray-900 dark:text-white">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                        Everything you need to know about our services and process.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {data.faq.map((item, index) => (
                        <div key={index} className="group">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={`item-${index}`} className="border-none rounded-2xl bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 px-6">
                                    <AccordionTrigger className="text-left text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-semibold text-lg py-6 [&[data-state=open]]:text-primary">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed text-base pb-6 font-medium">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
