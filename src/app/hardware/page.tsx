"use client";

import { useState } from "react";
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
  { sku: "MGX-LP-001", name: 'MacBook Pro 16" M3 Max', specs: "36GB \u00b7 1TB SSD \u00b7 14-core GPU", category: "Laptops" },
  { sku: "MGX-LP-002", name: 'MacBook Air 13" M3', specs: "8GB \u00b7 256GB SSD", category: "Laptops" },
  { sku: "MGX-LP-003", name: "Dell Latitude 5540", specs: "16GB \u00b7 512GB SSD \u00b7 i7", category: "Laptops" },
  { sku: "MGX-LP-004", name: "ThinkPad X1 Carbon", specs: "16GB \u00b7 512GB SSD", category: "Laptops" },
  { sku: "MGX-LP-005", name: "HP EliteBook 860 G10", specs: "32GB \u00b7 1TB SSD", category: "Laptops" },
  // Desktops & servers
  { sku: "MGX-SV-001", name: "Dell PowerEdge R750", specs: "Rack server \u00b7 Xeon \u00b7 64GB", category: "Desktops & servers" },
  { sku: "MGX-SV-002", name: "HP ProLiant DL380 Gen11", specs: "Rack server \u00b7 Xeon \u00b7 128GB", category: "Desktops & servers" },
  { sku: "MGX-DT-001", name: 'iMac 24" M3', specs: "8-core \u00b7 16GB \u00b7 512GB", category: "Desktops & servers" },
  // Networking
  { sku: "MGX-NW-001", name: "Cisco Catalyst 9200", specs: "24-port \u00b7 PoE+ \u00b7 Managed", category: "Networking" },
  { sku: "MGX-NW-002", name: "UniFi U6-Pro AP", specs: "WiFi 6 \u00b7 Enterprise", category: "Networking" },
  { sku: "MGX-NW-003", name: "FortiGate 60F", specs: "Firewall \u00b7 SD-WAN \u00b7 VPN", category: "Networking" },
];

const tabs: Category[] = ["All", "Laptops", "Desktops & servers", "Networking"];

export default function HardwarePage() {
  const [filter, setFilter] = useState<Category>("All");

  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / HARDWARE</span>
            <span className="dot" />
            <span>ENTERPRISE PROCUREMENT</span>
          </div>
          <h1>Enterprise hardware, delivered.</h1>
        </div>
      </section>

      {/* ---- Catalog ---- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Catalog</p>
              <h2 className="h2">Product lineup</h2>
            </div>
            <p className="lede">
              Enterprise-grade laptops, servers, and networking gear sourced from
              leading manufacturers -- ready for deployment.
            </p>
          </div>

          {/* Filter toolbar */}
          <div className="hw-toolbar">
            {tabs.map((t) => (
              <button
                key={t}
                className={`hw-tab${filter === t ? " active" : ""}`}
                onClick={() => setFilter(t)}
              >
                {t}
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
                  <span className="hw-price">Quote</span>
                  <Link href="/contact" className="btn-link">
                    Request&nbsp;&rarr;
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
              <p className="eyebrow">Customization</p>
              <h2 className="h2" style={{ fontSize: "clamp(22px,2.5vw,32px)" }}>
                Custom configurations
              </h2>
              <p style={{ color: "var(--ink-2)", fontSize: 14, marginBottom: 16 }}>
                Need exact specs for your team? We build hardware configurations
                matched to your requirements.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
                {[
                  "Spec upgrades on any laptop, desktop, or server",
                  "Pre-configured OS, security, and MDM enrollment",
                  "Custom branding and asset tagging",
                  "Bundle deals with networking and peripherals",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 13, color: "var(--ink-2)", display: "flex", gap: 8 }}>
                    <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>&rarr;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Volume pricing */}
            <div className="card">
              <p className="eyebrow">Enterprise</p>
              <h2 className="h2" style={{ fontSize: "clamp(22px,2.5vw,32px)" }}>
                Volume pricing &amp; logistics
              </h2>
              <p style={{ color: "var(--ink-2)", fontSize: 14, marginBottom: 16 }}>
                Outfitting an office, school, or government agency? We handle
                procurement, logistics, and deployment.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
                {[
                  "Discounts starting at 10+ units",
                  "Leasing and financing options available",
                  "Dedicated account manager for each client",
                  "Customs clearance and in-country delivery for Africa",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 13, color: "var(--ink-2)", display: "flex", gap: 8 }}>
                    <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>&rarr;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 20 }}>
                <Link href="/contact" className="btn btn-primary">
                  Request bulk pricing&nbsp;&rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
