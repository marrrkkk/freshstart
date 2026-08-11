"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  CheckCircle2,
  Clock,
  Code2,
  Globe,
  Mail,
  MessageSquare,
  PenTool,
  Bot,
  RefreshCw,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES_OPTIONS = [
  {
    id: "product-design-ux",
    title: "Product Design & UX",
    desc: "User research, interface design, and prototypes",
    icon: PenTool,
  },
  {
    id: "web-development",
    title: "Web Development",
    desc: "Build with Next.js, React, and TypeScript",
    icon: Code2,
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    desc: "Update design and migrate to modern tech stack",
    icon: RefreshCw,
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    desc: "Custom chatbots and LLM API integration",
    icon: Bot,
  },
];

const BUDGET_OPTIONS = [
  "Under ₱50,000",
  "₱50,000 – ₱150,000",
  "₱150,000 – ₱300,000",
  "₱300,000+",
];

const TIMELINE_OPTIONS = [
  "ASAP (1–2 weeks)",
  "Within 1 month",
  "1–3 months",
  "Flexible / Planning",
];

export function WorkWithUsForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceError, setServiceError] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string>("₱50,000 – ₱150,000");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Within 1 month");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setServiceError(null);
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      setServiceError("Please select at least one service.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="relative mx-auto max-w-[1280px] px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-36">

      {submitted ? (
        /* Success State View */
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#e8ddd7] bg-white p-8 text-center shadow-[0_20px_50px_rgba(61,37,24,0.08)] sm:p-12">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#fff0e9] text-[#ff6b35]">
            <CheckCircle2 className="size-9" />
          </div>

          <h2 className="font-heading mt-6 text-3xl font-medium tracking-tight text-[#171412] sm:text-4xl">
            Request received
          </h2>
          <p className="mt-3 text-base text-[#5e544f]">
            Thanks for submitting, <span className="font-semibold text-[#171412]">{formData.name || "there"}</span>. We&apos;ve logged your project details and will review them right away.
          </p>

          <div className="mt-8 rounded-2xl border border-[#eee5e0] bg-[#fffdfb] p-6 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8c817b]">
              Summary of your request
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#463a34]">
              <li className="flex items-center gap-2">
                <span className="font-semibold text-[#171412]">Services:</span>{" "}
                {selectedServices
                  .map((id) => SERVICES_OPTIONS.find((s) => s.id === id)?.title)
                  .filter(Boolean)
                  .join(", ")}
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold text-[#171412]">Budget:</span> {selectedBudget}
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold text-[#171412]">Timeline:</span> {selectedTimeline}
              </li>
              {formData.email && (
                <li className="flex items-center gap-2">
                  <span className="font-semibold text-[#171412]">Contact Email:</span> {formData.email}
                </li>
              )}
            </ul>
          </div>

          <p className="mt-6 text-xs text-[#8c817b]">
            You'll hear from us within 24 hours on weekdays.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/">
              <Button className="h-12 rounded-xl bg-[#ff6b35] px-6 text-sm font-semibold text-white hover:bg-[#f55b25]">
                Return to Homepage
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", company: "", website: "", details: "" });
              }}
              className="h-12 rounded-xl border-[#dfd4cd] bg-white px-6 text-sm font-semibold text-[#292321]"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      ) : (
        /* Form View */
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Value Props */}
          <div className="lg:col-span-5">
            <h1 className="font-heading text-[clamp(2.5rem,4.5vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.055em] text-[#171412]">
              Let&apos;s build something <span className="text-[#ff6b35]">remarkable.</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-[#5e544f]">
              Tell us about your product, timeline, and goals. We&apos;ll get back to you within 24 hours with a scope and transparent estimate.
            </p>

            {/* How it works steps */}
            <div className="mt-10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#8c817b]">
                How it works
              </h3>

              <div className="mt-4 space-y-3.5">
                <div className="flex items-start gap-3.5 rounded-2xl border border-[#eee5e0] bg-white p-4 shadow-[0_2px_8px_rgba(61,37,24,0.03)]">
                  <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#fff0e9] font-heading text-sm font-bold text-[#ff6b35]">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171412]">Fill out the form</h4>
                    <p className="mt-0.5 text-xs text-[#736862]">Share your requirements, timeline, and budget range.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-[#eee5e0] bg-white p-4 shadow-[0_2px_8px_rgba(61,37,24,0.03)]">
                  <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#fff0e9] font-heading text-sm font-bold text-[#ff6b35]">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171412]">Intro call &amp; scope</h4>
                    <p className="mt-0.5 text-xs text-[#736862]">We'll schedule a call to discuss your project and answer questions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-[#eee5e0] bg-white p-4 shadow-[0_2px_8px_rgba(61,37,24,0.03)]">
                  <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#fff0e9] font-heading text-sm font-bold text-[#ff6b35]">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171412]">Proposal &amp; kickoff</h4>
                    <p className="mt-0.5 text-xs text-[#736862]">You'll get a timeline, cost estimate, and deliverables breakdown.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-[#eee5e0] bg-white p-4 shadow-[0_2px_8px_rgba(61,37,24,0.03)]">
                  <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#fff0e9] font-heading text-sm font-bold text-[#ff6b35]">
                    04
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171412]">Fast delivery &amp; launch</h4>
                    <p className="mt-0.5 text-xs text-[#736862]">We work in weekly iterations. You'll see progress and can give feedback throughout.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Alternative */}
            <div className="mt-8 border-t border-[#ebdcd5] pt-6 text-xs text-[#736862]">
              Prefer direct email?{" "}
              <a
                href="mailto:hello@freshstart.ph"
                className="font-semibold text-[#ff6b35] hover:underline"
              >
                hello@freshstart.ph
              </a>{" "}
              or message us on{" "}
              <a
                href="https://wa.me/639157597443"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#ff6b35] hover:underline"
              >
                WhatsApp
              </a>.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-[#e5dcd6] bg-white p-6 shadow-[0_15px_40px_rgba(61,37,24,0.06)] sm:p-9"
            >
              {/* Step 1: Select Services */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#8c817b]">
                  1. What do you need help with?
                </label>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {SERVICES_OPTIONS.map((service) => {
                    const Icon = service.icon;
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                          isSelected
                            ? "border-[#ff6b35] bg-[#fff8f5] shadow-[0_2px_10px_rgba(255,107,53,0.12)] ring-1 ring-[#ff6b35]"
                            : "border-[#e8ded8] bg-white hover:border-[#cfc1b8]"
                        }`}
                      >
                        <div
                          className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg ${
                            isSelected
                              ? "bg-[#ff6b35] text-white"
                              : "bg-[#f4ece7] text-[#716761]"
                          }`}
                        >
                          <Icon className="size-3.5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-[#171412]">
                              {service.title}
                            </span>
                            {isSelected && <Check className="size-4 text-[#ff6b35]" />}
                          </div>
                          <p className="mt-1 text-[11px] leading-snug text-[#736862]">
                            {service.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {serviceError && (
                  <p className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-rose-600">
                    <span className="size-1.5 rounded-full bg-rose-600" />
                    {serviceError}
                  </p>
                )}
              </div>

              {/* Step 2: Select Budget */}
              <div className="mt-8">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8c817b]">
                  2. What is your estimated budget?
                </label>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {BUDGET_OPTIONS.map((budget) => {
                    const isSelected = selectedBudget === budget;
                    return (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => setSelectedBudget(budget)}
                        className={`rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all ${
                          isSelected
                            ? "border-[#ff6b35] bg-[#ff6b35] text-white shadow-[0_2px_8px_rgba(255,107,53,0.25)]"
                            : "border-[#e8ded8] bg-white text-[#524945] hover:border-[#cfc1b8] hover:bg-[#fff9f6]"
                        }`}
                      >
                        {budget}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Select Timeline */}
              <div className="mt-8">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8c817b]">
                  3. Expected Timeline
                </label>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {TIMELINE_OPTIONS.map((timeline) => {
                    const isSelected = selectedTimeline === timeline;
                    return (
                      <button
                        type="button"
                        key={timeline}
                        onClick={() => setSelectedTimeline(timeline)}
                        className={`rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all ${
                          isSelected
                            ? "border-[#ff6b35] bg-[#ff6b35] text-white shadow-[0_2px_8px_rgba(255,107,53,0.25)]"
                            : "border-[#e8ded8] bg-white text-[#524945] hover:border-[#cfc1b8] hover:bg-[#fff9f6]"
                        }`}
                      >
                        {timeline}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="mt-8 space-y-4 border-t border-[#eee5e0] pt-7">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8c817b]">
                  4. Your Details
                </label>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#463a34]">
                      Your Name <span className="text-[#ff6b35]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#a39790]" />
                      <input
                        type="text"
                        required
                        placeholder="Alex Santos"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-11 w-full rounded-xl border border-[#e3d9d4] bg-[#fffdfa] pl-10 pr-3.5 text-sm text-[#171412] placeholder-[#a89c95] transition-colors focus:border-[#ff6b35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#463a34]">
                      Work Email <span className="text-[#ff6b35]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#a39790]" />
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-11 w-full rounded-xl border border-[#e3d9d4] bg-[#fffdfa] pl-10 pr-3.5 text-sm text-[#171412] placeholder-[#a89c95] transition-colors focus:border-[#ff6b35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#463a34]">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-11 w-full rounded-xl border border-[#e3d9d4] bg-[#fffdfa] px-3.5 text-sm text-[#171412] placeholder-[#a89c95] transition-colors focus:border-[#ff6b35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[#463a34]">
                      Current Website (if any)
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#a39790]" />
                      <input
                        type="url"
                        placeholder="https://example.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="h-11 w-full rounded-xl border border-[#e3d9d4] bg-[#fffdfa] pl-10 pr-3.5 text-sm text-[#171412] placeholder-[#a89c95] transition-colors focus:border-[#ff6b35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/20"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#463a34]">
                    Project Details & Goals
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 size-4 text-[#a39790]" />
                    <textarea
                      rows={4}
                      placeholder="Briefly describe what you want to build, key features, or main challenges..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full rounded-xl border border-[#e3d9d4] bg-[#fffdfa] py-3 pl-10 pr-3.5 text-sm text-[#171412] placeholder-[#a89c95] transition-colors focus:border-[#ff6b35] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/20"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group relative mt-8 h-12 w-full rounded-xl border border-[#e64f1a] bg-[#ff6b35] text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_2px_0_#c94216,0_7px_14px_rgba(229,79,26,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f55b25] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_3px_0_#bd3b13,0_11px_18px_rgba(229,79,26,0.22)] active:translate-y-0 active:shadow-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send request
                    <Send className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
