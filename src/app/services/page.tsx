import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Consulting Services" };

const copy = {
  en: {
    heroMeta: ["MGX / SERVICES", "CONSULTING"],
    heroTitle: "Engineering teams for hire, not decks.",
    heroBody:
      "Cybersecurity, AI strategy, network design, custom software, and turnkey IT, scoped, staffed, and delivered against measurable outcomes.",
    servicesTitle: "Services",
    servicesLede:
      "We embed with your team to ship, not to send slide decks. Every engagement is scoped, staffed, and delivered against measurable outcomes.",
    inquire: "Inquire",
    services: [
      {
        num: "01",
        title: "Cybersecurity consulting",
        desc: "Audits, pen tests, compliance",
        items: [
          "Vulnerability assessment",
          "Penetration testing",
          "Security architecture review",
          "SOC 2 readiness",
        ],
      },
      {
        num: "02",
        title: "AI & data strategy",
        desc: "From readiness to deployed ML",
        items: [
          "AI readiness assessment",
          "Data pipeline design",
          "LLM integration",
          "MLOps",
        ],
      },
      {
        num: "03",
        title: "Network design",
        desc: "End-to-end network infrastructure",
        items: [
          "Architecture design",
          "Cloud migration",
          "SD-WAN",
          "Performance tuning",
        ],
      },
      {
        num: "04",
        title: "Custom software",
        desc: "Full-stack product development",
        items: ["Web apps", "API platforms", "Database design", "DevOps & CI/CD"],
      },
      {
        num: "05",
        title: "Turnkey IT infrastructure",
        desc: "Turnkey IT build-outs",
        items: [
          "Hardware procurement & logistics",
          "Network setup",
          "Staff training programs",
          "Ongoing support",
        ],
      },
    ],
    engagementTitle: "Engagement model",
    engagementLede:
      "A repeatable process that de-risks delivery and keeps you in control from day one.",
    steps: [
      {
        num: "01",
        title: "Discovery",
        body:
          "A paid discovery sprint to map requirements, audit existing systems, and define a fixed scope of work.",
      },
      {
        num: "02",
        title: "Execution",
        body:
          "Fixed-scope sprints with regular demos. You see working output every cycle, no vanishing acts.",
      },
      {
        num: "03",
        title: "Handoff",
        body:
          "You own the IP. Full documentation, training sessions, and an optional retainer for ongoing support.",
      },
    ],
    ctaTitle: "Scope your first engagement.",
    ctaBody:
      "Tell us what you are building and we will put together a discovery plan, no commitment required.",
    ctaPrimary: "Start a conversation",
    ctaGhost: "Learn about us",
  },
  fr: {
    heroMeta: ["MGX / SERVICES", "CONSEIL"],
    heroTitle: "Des équipes d’ingénierie à votre service, pas des présentations.",
    heroBody:
      "Cybersécurité, stratégie IA, conception de réseaux, logiciels sur mesure et infrastructure clé en main, cadrés, dotés en personnel et livrés selon des résultats mesurables.",
    servicesTitle: "Services",
    servicesLede:
      "Nous nous intégrons à votre équipe pour livrer, pas pour vous envoyer des diapositives. Chaque mission est cadrée, dotée des bonnes compétences et livrée selon des résultats mesurables.",
    inquire: "Se renseigner",
    services: [
      {
        num: "01",
        title: "Conseil en cybersécurité",
        desc: "Audits, tests d’intrusion, conformité",
        items: [
          "Évaluation des vulnérabilités",
          "Tests d’intrusion",
          "Revue de l’architecture de sécurité",
          "Préparation à la certification SOC 2",
        ],
      },
      {
        num: "02",
        title: "Stratégie IA & données",
        desc: "De la maturité au déploiement de modèles",
        items: [
          "Évaluation de la maturité IA",
          "Conception des pipelines de données",
          "Intégration de LLM",
          "MLOps",
        ],
      },
      {
        num: "03",
        title: "Conception réseau",
        desc: "Infrastructure réseau de bout en bout",
        items: [
          "Conception de l’architecture",
          "Migration vers le cloud",
          "SD-WAN",
          "Optimisation des performances",
        ],
      },
      {
        num: "04",
        title: "Logiciels sur mesure",
        desc: "Développement produit full-stack",
        items: [
          "Applications web",
          "Plateformes d’API",
          "Conception de bases de données",
          "DevOps & CI/CD",
        ],
      },
      {
        num: "05",
        title: "Infrastructure IT clé en main",
        desc: "Déploiements informatiques clé en main",
        items: [
          "Approvisionnement & logistique du matériel",
          "Mise en place du réseau",
          "Programmes de formation du personnel",
          "Support continu",
        ],
      },
    ],
    engagementTitle: "Modèle de collaboration",
    engagementLede:
      "Un processus reproductible qui réduit les risques de livraison et vous garde aux commandes dès le premier jour.",
    steps: [
      {
        num: "01",
        title: "Découverte",
        body:
          "Un sprint de découverte rémunéré pour cartographier les besoins, auditer les systèmes existants et définir un périmètre de travail fixe.",
      },
      {
        num: "02",
        title: "Exécution",
        body:
          "Des sprints à périmètre fixe avec des démonstrations régulières. Vous voyez un résultat fonctionnel à chaque cycle, aucune disparition.",
      },
      {
        num: "03",
        title: "Transfert",
        body:
          "Vous êtes propriétaire de la propriété intellectuelle. Documentation complète, sessions de formation et option de maintenance pour un support continu.",
      },
    ],
    ctaTitle: "Cadrez votre première mission.",
    ctaBody:
      "Dites-nous ce que vous construisez et nous élaborerons un plan de découverte, sans engagement.",
    ctaPrimary: "Démarrer la conversation",
    ctaGhost: "En savoir plus sur nous",
  },
} as const;

export default async function ServicesPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>{t.heroMeta[0]}</span>
            <span className="dot" />
            <span>{t.heroMeta[1]}</span>
          </div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
        </div>
      </section>

      {/* Services list */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">{t.servicesTitle}</h2>
            <p className="lede">{t.servicesLede}</p>
          </div>
          <div className="svc-list">
            {t.services.map((s) => (
              <div key={s.num} className="svc-row">
                <div className="num">{s.num}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link href="/contact" className="btn btn-ghost">
                    {t.inquire}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">{t.engagementTitle}</h2>
            <p className="lede">{t.engagementLede}</p>
          </div>
          <div className="approach-grid">
            {t.steps.map((step) => (
              <div key={step.num} className="approach-cell">
                <span className="num">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>{t.ctaTitle}</h2>
            <div>
              <p>{t.ctaBody}</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  {t.ctaPrimary}
                </Link>
                <Link href="/about" className="btn btn-ghost">
                  {t.ctaGhost}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
