"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "overflow-hidden rounded-2xl border border-[#e8ddd7] bg-white transition-all hover:border-[#dfd1c9] data-[state=open]:border-[#ffb299] data-[state=open]:bg-[#fffcfb] data-[state=open]:shadow-[0_4px_16px_rgba(255,107,53,0.06)]",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-5 text-left font-medium text-[16px] tracking-[-0.01em] text-[#211b18] transition-all sm:p-6 [&[data-state=open]>span>svg]:rotate-180 [&[data-state=open]>span]:border-[#ffb299] [&[data-state=open]>span]:text-[#ff6b35]",
        className
      )}
      {...props}
    >
      {children}
      <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#eadbd4] bg-white text-[#5e544f] transition-transform duration-200">
        <ChevronDown className="size-4 transition-transform duration-200" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-[14px] leading-[1.7] text-[#6b6058] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("border-t border-[#f0e6e1] px-5 pb-6 pt-4 sm:px-6", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
