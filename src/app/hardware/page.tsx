"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Category = "All" | "Laptops" | "Desktops & servers" | "Networking";

interface Product {
  sku: string;
  name: string;
  specs: string;
  category: Category;
}

const products: Product[] = [
  // Laptops
  { sku: "MGX-LP-001", name: 'MacBook Pro 16" M3 Max', specs: "36GB · 1TB SSD · 14-core GPU", category: "Laptops" },
  { sku: "MGX-LP-002", name: 'MacBook Air 13" M3', specs: "8GB · 256GB SSD", category: "Laptops" },
  { sku: "MGX-LP-003", name: "Dell Latitude 5540", specs: "16GB · 512GB SSD · i7", category: "Laptops" },
  { sku: "MGX-LP-004", name: "ThinkPad X1 Carbon", specs: "16GB · 512GB SSD", category: "Laptops" },
  { sku: "MGX-LP-005", name: "HP EliteBook 860 G10", specs: "32GB · 1TB SSD", category: "Laptops" },
  // Desktops & servers
  { sku: "MGX-SV-001", name: "Dell PowerEdge R750", specs: "Rack server · Xeon · 64GB", category: "Desktops & servers" },
  { sku: "MGX-SV-002", name: "HP ProLiant DL380 Gen11", specs: "Rack server · Xeon · 128GB", category: "Desktops & servers" },
  { sku: "MGX-DT-001", name: 'iMac 24" M3', specs: "8-core · 16GB · 512GB", category: "Desktops & servers" },
  // Networking
  { sku: "MGX-NW-001", name: "Cisco Catalyst 9200", specs: "24-port · PoE+ · Managed", category: "Networking" },
  { sku: "MGX-NW-002", name: "UniFi U6-Pro AP", specs: "WiFi 6 · Enterprise", category: "Networking" },
  { sku: "MGX-NW-003", name: "FortiGate 60F", specs: "Firewall · SD-WAN · VPN", category: "Networking" },
];

const tabs: Category[] = ["All", "Laptops", "Desktops & servers", "Networking"];

const copy = {
  en: {
    heroMeta: ["MGX / HARDWARE", "ENTERPRISE PROCUREMENT"],
    heroTitle: "Enterprise hardware, delivered.",
    catalogEyebrow: "Catalog",
    catalogTitle: "Product lineup",
    catalogLede:
      "Enterprise-grade laptops, servers, and networking gear sourced from leading manufacturers -- ready for deployment.",
    tabLabels: {
      All: "All",
      Laptops: "Laptops",
      "Desktops & servers": "Desktops & servers",
      Networking: "Networking",
    } as Record<Category, string>,
    quote: "Quote",
    request: "Request",
    customEyebrow: "Customization",
    customTitle: "Custom configurations",
    customBody:
      "Need exact specs for your team? We build hardware configurations matched to your requirements.",
    customItems: [
      "Spec upgrades on any laptop, desktop, or server",
      "Pre-configured OS, security, and MDM enrollment",
      "Custom branding and asset tagging",
      "Bundle deals with networking and peripherals",
    ],
    volumeEyebrow: "Enterprise",
    volumeTitle: "Volume pricing & logistics",
    volumeBody:
      "Outfitting an office, school, or government agency? We handle procurement, logistics, and deployment.",
    volumeItems: [
      "Discounts available on larger orders",
      "Leasing and financing options available",
      "A dedicated account manager for each client",
      "Customs clearance and in-country delivery for Africa",
    ],
    volumeCta: "Request bulk pricing",
  },
  fr: {
    heroMeta: ["MGX / MATÉRIEL", "APPROVISIONNEMENT ENTREPRISE"],
    heroTitle: "Du matériel professionnel, livré.",
    catalogEyebrow: "Catalogue",
    catalogTitle: "Gamme de produits",
    catalogLede:
      "Ordinateurs portables, serveurs et équipements réseau de niveau professionnel, issus des principaux fabricants, prêts à être déployés.",
    tabLabels: {
      All: "Tous",
      Laptops: "Ordinateurs portables",
      "Desktops & servers": "Postes fixes & serveurs",
      Networking: "Réseau",
    } as Record<Category, string>,
    quote: "Sur devis",
    request: "Demander",
    customEyebrow: "Personnalisation",
    customTitle: "Configurations sur mesure",
    customBody:
      "Vous avez besoin de spécifications précises pour votre équipe ? Nous assemblons des configurations matérielles adaptées à vos exigences.",
    customItems: [
      "Améliorations de spécifications sur tout portable, poste fixe ou serveur",
      "Système, sécurité et enrôlement MDM préconfigurés",
      "Marquage personnalisé et étiquetage des actifs",
      "Offres groupées avec réseau et périphériques",
    ],
    volumeEyebrow: "Entreprise",
    volumeTitle: "Tarifs de gros & logistique",
    volumeBody:
      "Vous équipez un bureau, une école ou une administration ? Nous prenons en charge l’approvisionnement, la logistique et le déploiement.",
    volumeItems: [
      "Remises disponibles sur les commandes importantes",
      "Options de location et de financement disponibles",
      "Un gestionnaire de compte dédié pour chaque client",
      "Dédouanement et livraison locale pour l’Afrique",
    ],
    volumeCta: "Demander un tarif de gros",
  },
} as const;

export default function HardwarePage() {
  const [locale, setLocale] = useState<"en" | "fr">("en");
  const [filter, setFilter] = useState<Category>("All");

  useEffect(() => {
    const m = document.cookie.match(/(?:^|; )lang=(fr|en)/);
    setLocale(m?.[1] === "fr" ? "fr" : "en");
  }, []);

  const t = copy[locale];

  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>{t.heroMeta[0]}</span>
            <span className="dot" />
            <span>{t.heroMeta[1]}</span>
          </div>
          <h1>{t.heroTitle}</h1>
        </div>
      </section>

      {/* ---- Catalog ---- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">{t.catalogEyebrow}</p>
              <h2 className="h2">{t.catalogTitle}</h2>
            </div>
            <p className="lede">{t.catalogLede}</p>
          </div>

          {/* Filter toolbar */}
          <div className="hw-toolbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`hw-tab${filter === tab ? " active" : ""}`}
                onClick={() => setFilter(tab)}
              >
                {t.tabLabels[tab]}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="hw-grid">
            {visible.map((p) => (
              <div key={p.sku} className="hw-card">
                <div className="hw-thumb">{p.sku}</div>
                <h4>{p.name}</h4>
                <p className="hw-specs">{p.specs}</p>
                <div className="hw-foot">
                  <span className="hw-price">{t.quote}</span>
                  <Link href="/contact" className="btn-link">
                    {t.request}&nbsp;&rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Custom configs + Volume pricing ---- */}
      <section className="section" style={{ background: "var(--bg-sunk)" }}>
        <div className="container">
          <div className="two-col">
            {/* Custom configurations */}
            <div className="card">
              <p className="eyebrow">{t.customEyebrow}</p>
              <h2 className="h2" style={{ fontSize: "clamp(22px,2.5vw,32px)" }}>
                {t.customTitle}
              </h2>
              <p style={{ color: "var(--ink-2)", fontSize: 14, marginBottom: 16 }}>
                {t.customBody}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
                {t.customItems.map((item) => (
                  <li key={item} style={{ fontSize: 13, color: "var(--ink-2)", display: "flex", gap: 8 }}>
                    <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>&rarr;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Volume pricing */}
            <div className="card">
              <p className="eyebrow">{t.volumeEyebrow}</p>
              <h2 className="h2" style={{ fontSize: "clamp(22px,2.5vw,32px)" }}>
                {t.volumeTitle}
              </h2>
              <p style={{ color: "var(--ink-2)", fontSize: 14, marginBottom: 16 }}>
                {t.volumeBody}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
                {t.volumeItems.map((item) => (
                  <li key={item} style={{ fontSize: 13, color: "var(--ink-2)", display: "flex", gap: 8 }}>
                    <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>&rarr;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 20 }}>
                <Link href="/contact" className="btn btn-primary">
                  {t.volumeCta}&nbsp;&rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
