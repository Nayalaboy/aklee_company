import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Company",
};

const copy = {
  en: {
    heroMeta: ["MGX / COMPANY", "Founded 2023", "New York, NY"],
    heroTitle: "Built in New York. Shipped everywhere.",
    heroBody:
      "Founded in 2023, Mirigraphix was built on a simple idea: build what’s next. Real products, shipped by the same engineers who handle the hardware, the networks, and the training behind them. Headquartered in New York, NY.",
    missionEyebrow: "Mission",
    missionTitle: "We build what’s next.",
    missionBody:
      "We believe the best products are built by small, senior teams who ship, not by decks and roadmaps. Our goal is a durable portfolio of software products, funded and sharpened by a services business (hardware, training, consulting) that keeps us grounded in real deployments.",
    valuesEyebrow: "What we stand for",
    valuesTitle: "How we work.",
    values: [
      {
        kicker: "01 RESEARCH FIRST",
        title: "Research-driven by design",
        body:
          "We are a young, research-led company. Every product begins as a question about a real cross-border problem, and the answers shape what we build next.",
      },
      {
        kicker: "02 SMALL TEAMS",
        title: "Senior teams that ship",
        body:
          "We keep teams small and senior. The people who design a product are the same people who build, deploy, and support it.",
      },
      {
        kicker: "03 GROUNDED",
        title: "Grounded in real deployments",
        body:
          "Our services work, hardware, training, and consulting, keeps us close to how organizations actually operate, and that feedback sharpens the products.",
      },
      {
        kicker: "04 LONG-TERM",
        title: "Building for the long term",
        body:
          "We are focused on durable products and lasting relationships across the U.S. and Africa, not short-lived launches.",
      },
    ],
    ctaTitle: "Work with us, or come build with us.",
    ctaBody:
      "We’re always looking for sharp engineers, design partners, and organizations that want to build something real.",
    ctaPrimary: "Start a conversation",
    ctaGhost: "Careers",
  },
  fr: {
    heroMeta: ["MGX / ENTREPRISE", "Fondée en 2023", "New York, NY"],
    heroTitle: "Conçu à New York. Déployé partout.",
    heroBody:
      "Fondée en 2023, Mirigraphix est née d’une idée simple : construire l’avenir. De vrais produits, livrés par les ingénieurs qui gèrent eux-mêmes le matériel, les réseaux et la formation qui les accompagnent. Notre siège est situé à New York, NY.",
    missionEyebrow: "Mission",
    missionTitle: "Nous construisons l’avenir.",
    missionBody:
      "Nous sommes convaincus que les meilleurs produits naissent de petites équipes expérimentées qui livrent, et non de présentations et de feuilles de route. Notre objectif est de bâtir un portefeuille durable de produits logiciels, financé et affiné par une activité de services (matériel, formation, conseil) qui nous garde ancrés dans des déploiements réels.",
    valuesEyebrow: "Ce qui nous anime",
    valuesTitle: "Notre façon de travailler.",
    values: [
      {
        kicker: "01 LA RECHERCHE D’ABORD",
        title: "Une démarche axée sur la recherche",
        body:
          "Nous sommes une jeune entreprise tournée vers la recherche. Chaque produit débute par une question portant sur un problème transfrontalier réel, et les réponses orientent ce que nous construisons ensuite.",
      },
      {
        kicker: "02 PETITES ÉQUIPES",
        title: "Des équipes expérimentées qui livrent",
        body:
          "Nous gardons des équipes réduites et expérimentées. Les personnes qui conçoivent un produit sont celles qui le développent, le déploient et l’accompagnent.",
      },
      {
        kicker: "03 ANCRÉS DANS LE RÉEL",
        title: "Ancrés dans des déploiements réels",
        body:
          "Notre activité de services, matériel, formation et conseil, nous garde proches du fonctionnement réel des organisations, et ces retours affinent nos produits.",
      },
      {
        kicker: "04 LONG TERME",
        title: "Construire pour la durée",
        body:
          "Nous nous concentrons sur des produits durables et des relations pérennes aux États-Unis et en Afrique, plutôt que sur des lancements éphémères.",
      },
    ],
    ctaTitle: "Travaillez avec nous, ou venez construire avec nous.",
    ctaBody:
      "Nous recherchons en permanence des ingénieurs talentueux, des partenaires de conception et des organisations qui veulent bâtir quelque chose de concret.",
    ctaPrimary: "Démarrer la conversation",
    ctaGhost: "Carrières",
  },
} as const;

export default async function AboutPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <section className="hero-page">
        <div className="hero-page-media">
          <Image
            src="/images/hero-about.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-page-scrim" aria-hidden="true" />
        <div className="hero-page-inner">
          <div className="container">
            <span className="eyebrow">{t.heroMeta[0]}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroBody}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col" data-reveal>
            <div>
              <span className="eyebrow">{t.missionEyebrow}</span>
              <h2 className="h2" style={{ marginTop: 16 }}>
                {t.missionTitle}
              </h2>
              <p style={{ color: "var(--ink-2)", fontSize: 16, maxWidth: "48ch", marginTop: 16 }}>
                {t.missionBody}
              </p>
            </div>
            <div className="two-col-media">
              <Image
                src="/images/team-office.jpg"
                alt=""
                fill
                sizes="(max-width: 880px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">{t.valuesEyebrow}</span>
              <h2 className="h2">{t.valuesTitle}</h2>
            </div>
          </div>

          <div className="milestones" data-reveal>
            {t.values.map((v) => (
              <div className="milestone" key={v.kicker}>
                <div className="milestone-year">{v.kicker}</div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-block" data-reveal>
            <h2>{t.ctaTitle}</h2>
            <div>
              <p>{t.ctaBody}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  {t.ctaPrimary} →
                </Link>
                <Link href="/careers" className="btn btn-ghost">
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
