"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { setLangCookie } from "@/lib/client-locale";

const navLinks = [
  { href: "/rnd", label: { en: "Research", fr: "Recherche" } },
  { href: "/services", label: { en: "Consulting", fr: "Conseil" } },
  { href: "/hardware", label: { en: "Hardware", fr: "Matériel" } },
  { href: "/trainings", label: { en: "Training", fr: "Formations" } },
  { href: "/blog", label: { en: "Journal", fr: "Journal" } },
  { href: "/about", label: { en: "Company", fr: "Entreprise" } },
];

const CTA = { en: "Get in touch", fr: "Nous contacter" };

export default function Navbar({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const setLang = (lang: Locale) => {
    if (lang === locale) return;
    setLangCookie(lang);
    router.refresh();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-nav-inner">
        <Link href="/" className="site-logo" onClick={() => setMobileOpen(false)}>
          <svg viewBox="0 0 22 22" aria-hidden="true">
            <rect x="1" y="1" width="9" height="9" rx="2" fill="currentColor" />
            <rect
              x="12"
              y="1"
              width="9"
              height="9"
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect
              x="1"
              y="12"
              width="9"
              height="9"
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <rect x="12" y="12" width="9" height="9" rx="2" fill="var(--accent)" />
          </svg>
          Mirigraphix
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${isActive(link.href) ? " is-active" : ""}`}
            >
              {link.label[locale]}
            </Link>
          ))}
        </div>

        <div className="lang-toggle" role="group" aria-label="Language">
          {(["en", "fr"] as Locale[]).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLang(lang)}
              aria-pressed={locale === lang}
              className={locale === lang ? "lang-opt active" : "lang-opt"}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <Link href="/contact" className="nav-cta">
          {CTA[locale]} →
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
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

      {mobileOpen && (
        <div className="mobile-panel">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label[locale]}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: 20, justifyContent: "center" }}
          >
            {CTA[locale]} →
          </Link>
        </div>
      )}
    </nav>
  );
}
