import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Analytics } from "@vercel/analytics/react";
import { getLocale } from "@/lib/i18n";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mirigraphix.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mirigraphix | Research, Systems & Hardware",
    template: "%s | Mirigraphix",
  },
  description:
    "Mirigraphix is a technology company. We build and ship modern software products, and run the consulting, enterprise hardware, and technical training that let us deliver end-to-end.",
  keywords: [
    "AI applications",
    "R&D",
    "technology training",
    "cybersecurity",
    "enterprise hardware",
    "fintech",
    "cross-border payments",
    "consulting",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mirigraphix",
    title: "Mirigraphix | Research, Systems & Hardware",
    description:
      "A technology company shipping modern software, consulting, enterprise hardware, and technical training.",
    images: [
      {
        url: "/images/hero-tech.jpg",
        width: 1600,
        height: 900,
        alt: "Mirigraphix · Research, Systems & Hardware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirigraphix | Research, Systems & Hardware",
    description:
      "A technology company shipping modern software, consulting, enterprise hardware, and technical training.",
    images: ["/images/hero-tech.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <Reveal />
        <Analytics />
      </body>
    </html>
  );
}
