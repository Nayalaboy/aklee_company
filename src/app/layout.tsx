import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mirigraphix | Training, Hardware & Innovation",
    template: "%s | Mirigraphix",
  },
  description:
    "Mirigraphix provides world-class training in cybersecurity, AI, networking, and full-stack development. Enterprise Mac hardware solutions and innovative R&D applications for the U.S. and Africa.",
  keywords: [
    "technology training",
    "cybersecurity",
    "AI training",
    "Mac hardware",
    "enterprise solutions",
    "Africa technology",
  ],
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
      </body>
    </html>
  );
}
