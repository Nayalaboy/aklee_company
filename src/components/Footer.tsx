import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    tagline:
      "A technology company shipping modern software, consulting, enterprise hardware, and technical training.",
    research: "Research",
    services: "Services",
    company: "Company",
    resources: "Resources",
    links: {
      projects: "Projects",
      payments: "Cross-Border Payments",
      jobs: "AI Job Matching",
      immigration: "Immigration",
      consulting: "Consulting",
      hardware: "Hardware",
      training: "Training",
      journal: "Journal",
      about: "About",
      team: "Team",
      careers: "Careers",
      partners: "Partners",
      events: "Events",
      faq: "FAQ",
      advisor: "AI Advisor",
      contact: "Contact",
    },
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    refund: "Refund Policy",
    rights: "All rights reserved.",
    status: "System operational",
  },
  fr: {
    tagline:
      "Une entreprise technologique qui développe des logiciels modernes, du conseil, du matériel professionnel et des formations techniques.",
    research: "Recherche",
    services: "Services",
    company: "Entreprise",
    resources: "Ressources",
    links: {
      projects: "Projets",
      payments: "Paiements transfrontaliers",
      jobs: "Mise en relation par IA",
      immigration: "Immigration",
      consulting: "Conseil",
      hardware: "Matériel",
      training: "Formations",
      journal: "Journal",
      about: "À propos",
      team: "Équipe",
      careers: "Carrières",
      partners: "Partenaires",
      events: "Événements",
      faq: "FAQ",
      advisor: "Conseiller IA",
      contact: "Contact",
    },
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    refund: "Politique de remboursement",
    rights: "Tous droits réservés.",
    status: "Système opérationnel",
  },
} as const;

export default function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                fontSize: 16,
                marginBottom: 14,
                color: "var(--ink)",
              }}
            >
              <svg style={{ width: 22, height: 22 }} viewBox="0 0 22 22" aria-hidden="true">
                <rect x="1" y="1" width="9" height="9" rx="2" fill="currentColor" />
                <rect x="12" y="1" width="9" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="1" y="12" width="9" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="12" y="12" width="9" height="9" rx="2" fill="var(--accent)" />
              </svg>
              Mirigraphix
            </Link>
            <p style={{ color: "var(--ink-3)", maxWidth: 320, fontSize: "13.5px" }}>
              {t.tagline}
            </p>
          </div>
          <div>
            <h4>{t.research}</h4>
            <ul>
              <li><Link href="/rnd">{t.links.projects}</Link></li>
              <li><Link href="/rnd#payments">{t.links.payments}</Link></li>
              <li><Link href="/rnd#jobs">{t.links.jobs}</Link></li>
              <li><Link href="/rnd#immigration">{t.links.immigration}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.services}</h4>
            <ul>
              <li><Link href="/services">{t.links.consulting}</Link></li>
              <li><Link href="/hardware">{t.links.hardware}</Link></li>
              <li><Link href="/trainings">{t.links.training}</Link></li>
              <li><Link href="/blog">{t.links.journal}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.company}</h4>
            <ul>
              <li><Link href="/about">{t.links.about}</Link></li>
              <li><Link href="/team">{t.links.team}</Link></li>
              <li><Link href="/careers">{t.links.careers}</Link></li>
              <li><Link href="/partners">{t.links.partners}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.resources}</h4>
            <ul>
              <li><Link href="/events">{t.links.events}</Link></li>
              <li><Link href="/faq">{t.links.faq}</Link></li>
              <li><Link href="/chat">{t.links.advisor}</Link></li>
              <li><Link href="/contact">{t.links.contact}</Link></li>
            </ul>
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid var(--line)",
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--ink-3)",
          }}
        >
          <Link href="/legal/privacy" style={{ color: "var(--ink-3)" }}>{t.privacy}</Link>
          <Link href="/legal/terms" style={{ color: "var(--ink-3)" }}>{t.terms}</Link>
          <Link href="/legal/refund" style={{ color: "var(--ink-3)" }}>{t.refund}</Link>
          <span style={{ marginLeft: "auto" }}>mirigraphixx@gmail.com</span>
          <span>New York, NY</span>
        </div>
        <div className="footer-meta">
          <span>&copy; 2026 Mirigraphix LLC. {t.rights}</span>
          <span>v2026.04 &middot; {t.status}</span>
        </div>
      </div>
    </footer>
  );
}
