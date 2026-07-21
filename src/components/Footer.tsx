import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    tagline:
      "Research-driven software, consulting, enterprise hardware, and technical training — spanning the U.S. and Africa.",
    explore: "Explore",
    company: "Company",
    help: "Help",
    links: {
      research: "Research",
      consulting: "Consulting",
      hardware: "Hardware",
      training: "Training",
      journal: "Journal",
      about: "About",
      team: "Team",
      careers: "Careers",
      partners: "Partners",
      faq: "FAQ",
      contact: "Contact",
      chat: "AI Advisor",
    },
    privacy: "Privacy",
    terms: "Terms",
    refund: "Refunds",
    rights: "All rights reserved.",
  },
  fr: {
    tagline:
      "Logiciels axés sur la recherche, conseil, matériel professionnel et formation technique — entre les États-Unis et l’Afrique.",
    explore: "Explorer",
    company: "Entreprise",
    help: "Aide",
    links: {
      research: "Recherche",
      consulting: "Conseil",
      hardware: "Matériel",
      training: "Formations",
      journal: "Journal",
      about: "À propos",
      team: "Équipe",
      careers: "Carrières",
      partners: "Partenaires",
      faq: "FAQ",
      contact: "Contact",
      chat: "Conseiller IA",
    },
    privacy: "Confidentialité",
    terms: "Conditions",
    refund: "Remboursements",
    rights: "Tous droits réservés.",
  },
} as const;

export default function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="site-logo" style={{ marginBottom: 14 }}>
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
            <p style={{ color: "var(--ink-3)", maxWidth: 340, fontSize: "13.5px", margin: 0 }}>
              {t.tagline}
            </p>
          </div>
          <div>
            <h4>{t.explore}</h4>
            <ul>
              <li>
                <Link href="/rnd">{t.links.research}</Link>
              </li>
              <li>
                <Link href="/services">{t.links.consulting}</Link>
              </li>
              <li>
                <Link href="/hardware">{t.links.hardware}</Link>
              </li>
              <li>
                <Link href="/trainings">{t.links.training}</Link>
              </li>
              <li>
                <Link href="/blog">{t.links.journal}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t.company}</h4>
            <ul>
              <li>
                <Link href="/about">{t.links.about}</Link>
              </li>
              <li>
                <Link href="/team">{t.links.team}</Link>
              </li>
              <li>
                <Link href="/careers">{t.links.careers}</Link>
              </li>
              <li>
                <Link href="/partners">{t.links.partners}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t.help}</h4>
            <ul>
              <li>
                <Link href="/faq">{t.links.faq}</Link>
              </li>
              <li>
                <Link href="/chat">{t.links.chat}</Link>
              </li>
              <li>
                <Link href="/contact">{t.links.contact}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-meta">
          <span>© 2026 Mirigraphix LLC. {t.rights}</span>
          <span style={{ display: "inline-flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/legal/privacy">{t.privacy}</Link>
            <Link href="/legal/terms">{t.terms}</Link>
            <Link href="/legal/refund">{t.refund}</Link>
            <a href="mailto:mirigraphixx@gmail.com">mirigraphixx@gmail.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
