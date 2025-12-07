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
        <section id="faq" className="py-20 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-gray-900 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Everything you need to know about our services and process.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {data.faq.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-zinc-800">
                            <AccordionTrigger className="text-left text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-semibold text-lg py-4">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed text-base pb-4">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
