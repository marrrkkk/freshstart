import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import siteData from "@/data/data.json";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="section-frame grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <div className="section-kicker">Questions</div>
          <h2 className="mt-6 max-w-md text-5xl leading-none text-[#171717] sm:text-6xl">
            Answers before the kickoff call.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-black/70 sm:text-lg">
            Timelines, support, and redesign work tend to come up first. Here is the short version.
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {siteData.faq.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="surface-card rounded-[1.5rem] border-b-0 px-5 sm:px-6"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold text-[#171717] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-8 text-black/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
