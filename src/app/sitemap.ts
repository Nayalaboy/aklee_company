import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mirigraphix.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/about",
    "/trainings",
    "/trainings/cybersecurity",
    "/trainings/ai-ml",
    "/trainings/networking",
    "/trainings/fullstack",
    "/hardware",
    "/rnd",
    "/services",
    "/blog",
    "/team",
    "/testimonials",
    "/careers",
    "/events",
    "/partners",
    "/faq",
    "/contact",
    "/chat",
    "/legal/privacy",
    "/legal/terms",
    "/legal/refund",
  ];

  return staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/rnd" ? 0.9 : 0.7,
  }));
}
