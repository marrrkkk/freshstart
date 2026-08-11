import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { WorkWithUsForm } from "@/components/work-with-us-form";

export const metadata: Metadata = {
  title: "Start Your Project | FreshStart PH",
  description:
    "Tell us about your web project. We build applications with Next.js, React, and TypeScript. Get a response within 24 hours.",
};

export default function WorkWithUsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdfa] text-[#171412]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 geometry-field" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_78%_15%,rgba(255,107,53,0.14),transparent_38%),radial-gradient(ellipse_at_14%_42%,rgba(255,176,135,0.12),transparent_31%)]"
      />
      <SiteHeader />
      <WorkWithUsForm />
    </main>
  );
}
