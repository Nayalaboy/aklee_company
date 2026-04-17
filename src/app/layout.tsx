import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mirigraphix.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mirigraphix | Innovation, R&D & Technology",
    template: "%s | Mirigraphix",
  },
  description:
    "Mirigraphix builds innovative applications solving real-world problems across the U.S. and Africa. R&D-driven company backed by world-class tech training and enterprise hardware solutions.",
  keywords: [
    "AI applications",
    "R&D",
    "technology training",
    "cybersecurity",
    "Mac hardware",
    "enterprise solutions",
    "Africa technology",
    "fintech",
    "cross-border",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mirigraphix",
    title: "Mirigraphix | Innovation, R&D & Technology",
    description:
      "AI-driven R&D company building innovative applications across the U.S. and Africa. World-class training and enterprise hardware solutions.",
    images: [
      {
        url: "/images/hero-tech.jpg",
        width: 1600,
        height: 900,
        alt: "Mirigraphix — Innovation, Technology, Impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirigraphix | Innovation, R&D & Technology",
    description:
      "AI-driven R&D company building innovative applications across the U.S. and Africa.",
    images: ["/images/hero-tech.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
