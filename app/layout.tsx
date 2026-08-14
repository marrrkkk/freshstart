import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const apfel = localFont({
  src: "../public/fonts/ApfelGrotezk-Mittel.woff2",
  variable: "--font-apfel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FreshStart PH | Web Development for Startups | Next.js & React",
  description:
    "Partner with FreshStart PH to build scalable web applications for your startup. Full-stack development with Next.js, React, and TypeScript. Modern stack, clear timelines, no surprises.",
  keywords: [
    "web development Philippines",
    "startup web development",
    "Next.js development agency",
    "React development Philippines",
    "full-stack web developer",
    "TypeScript web applications",
    "scalable web apps",
    "startup software development",
    "web app development Manila",
    "modern web development",
    "SaaS development Philippines",
    "FreshStart PH",
  ],
  authors: [{ name: "FreshStart PH", url: "https://freshstart.ph" }],
  creator: "FreshStart PH",
  metadataBase: new URL("https://freshstart.ph"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "FreshStart PH | Web Development for Startups",
    description:
      "We partner with startups to build web applications that can handle real growth. Full-stack development with Next.js, React, and TypeScript.",
    url: "https://freshstart.ph",
    siteName: "FreshStart PH",
    locale: "en_PH",
    type: "website",
    },
  twitter: {
    card: "summary_large_image",
    title: "FreshStart PH | Web Development for Startups",
    description:
      "Partner with us to build scalable web applications. Modern stack, clear timelines, no surprises. Next.js, React & TypeScript.",
    creator: "@freshstartph",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FreshStart PH",
    url: "https://freshstart.ph",
    logo: "https://freshstart.ph/logo.png",
    description: "Web development agency specializing in building scalable applications for startups using Next.js, React, and TypeScript",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PH",
      addressLocality: "Philippines",
    },
    sameAs: [
      "https://twitter.com/freshstartph",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English", "Filipino"],
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: [
      "Web Development",
      "Web Application Development",
      "Full-Stack Development",
      "Next.js Development",
      "React Development",
      "TypeScript Development"
    ],
  };

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${apfel.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
