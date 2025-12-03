import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import seoData from "@/data/seo.json";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(seoData.seo.siteUrl),
  title: {
    default: seoData.seo.defaultTitle,
    template: `%s | ${seoData.seo.siteName}`,
  },
  description: seoData.seo.defaultDescription,
  keywords: seoData.seo.keywords,
  authors: [{ name: seoData.seo.author }],
  creator: seoData.seo.author,
  publisher: seoData.seo.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoData.seo.siteUrl,
    siteName: seoData.seo.siteName,
    title: seoData.seo.defaultTitle,
    description: seoData.seo.defaultDescription,
    images: [
      {
        url: seoData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: seoData.seo.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.seo.defaultTitle,
    description: seoData.seo.defaultDescription,
    creator: seoData.seo.twitterHandle,
    images: [seoData.seo.ogImage],
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
  icons: {
    icon: seoData.seo.favicon,
    shortcut: seoData.seo.favicon,
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={seoData.seo.siteUrl} />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.structuredData.localBusiness),
          }}
        />
      </head>
      <body
        className={`${jakarta.variable} font-sans antialiased bg-white dark:bg-black`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
