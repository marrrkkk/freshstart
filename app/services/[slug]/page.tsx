import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/service-data";
import { SiteHeader } from "@/components/site-header";
import { ServicePageContent } from "@/components/service-page-content";
import { RevealObserver } from "@/components/reveal-observer";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | FreshStart PH",
    };
  }

  return {
    title: `${service.label} Services & Pricing | FreshStart PH`,
    description: service.description,
    openGraph: {
      title: `${service.label} | FreshStart PH`,
      description: service.description,
      url: `https://freshstart.ph/services/${service.slug}`,
      siteName: "FreshStart PH",
      locale: "en_PH",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdfa] text-[#171412]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 geometry-field" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[710px] bg-[radial-gradient(ellipse_at_78%_15%,rgba(255,107,53,0.14),transparent_38%),radial-gradient(ellipse_at_14%_42%,rgba(255,176,135,0.12),transparent_31%)]"
      />
      <SiteHeader />
      <ServicePageContent service={service} />
      <RevealObserver />
    </main>
  );
}
