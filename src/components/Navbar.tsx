"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/rnd", label: "Research" },
  { href: "/services", label: "Consulting" },
  { href: "/hardware", label: "Hardware" },
  { href: "/trainings", label: "Training" },
  { href: "/blog", label: "Journal" },
  { href: "/about", label: "Company" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: scrolled
          ? "color-mix(in oklch, var(--bg) 80%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "14px var(--gutter)",
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            fontSize: 16,
            color: "var(--ink)",
            textDecoration: "none",
          }}
        >
          <svg
            style={{ width: 22, height: 22 }}
            viewBox="0 0 22 22"
            aria-hidden="true"
          >
            <rect x="1" y="1" width="9" height="9" rx="2" fill="currentColor" />
            <rect x="12" y="1" width="9" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="1" y="12" width="9" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="12" y="12" width="9" height="9" rx="2" fill="var(--accent)" />
          </svg>
          Mirigraphix
        </Link>

        {/* Desktop nav links */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: 4,
            marginLeft: "auto",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "13.5px",
                padding: "7px 12px",
                borderRadius: "var(--radius-sm)",
                color: "var(--ink-2)",
                transition: "color 0.15s, background 0.15s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.background = "var(--bg-sunk)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--ink-2)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="nav-links"
          style={{
            fontSize: "13.5px",
            padding: "8px 14px",
            background: "var(--ink)",
            color: "var(--bg)",
            borderRadius: "var(--radius-sm)",
            transition: "transform 0.2s",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Get in touch &rarr;
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            background: "none",
            border: "none",
            color: "var(--ink)",
            cursor: "pointer",
          }}
          className="mobile-toggle"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="2" y1="6" x2="18" y2="6" />
                <line x1="2" y1="14" x2="18" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: 52,
            background: "var(--bg-elev)",
            zIndex: 100,
            padding: "24px var(--gutter)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 16,
                padding: "12px 0",
                color: "var(--ink)",
                borderBottom: "1px solid var(--line)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: 16, justifyContent: "center" }}
          >
            Get in touch &rarr;
          </Link>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 880px) {
          .nav-links { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
