import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Our Team" };

const copy = {
  en: {
    heroMeta: ["MGX / COMPANY", "TEAM"],
    heroTitle: "The people behind the products.",
    heroBody:
      "A small, research-driven team spanning engineering, hardware, training, research, and operations across the U.S. and Africa.",
    sectionTitle: "How we’re organized",
    lede:
      "We’re a small, research-driven team organized around the work itself. Here are the functions that build and support what we ship.",
    functions: [
      {
        name: "Engineering",
        body:
          "Designs, builds, and operates our software products across fintech, AI, and immigration workflows.",
        tags: ["Full-stack", "Security"],
      },
      {
        name: "Hardware",
        body:
          "Handles enterprise Mac sourcing, IT infrastructure, deployment, and device management.",
        tags: ["Procurement", "Logistics"],
      },
      {
        name: "Training",
        body:
          "Builds and delivers our courses in cybersecurity, AI, networking, and development.",
        tags: ["Curriculum", "Instruction"],
      },
      {
        name: "Research",
        body:
          "Explores the machine-learning and applied research that feeds our products.",
        tags: ["AI / ML", "Applied research"],
      },
      {
        name: "Operations",
        body:
          "Keeps the company running across the U.S. and African markets we serve.",
        tags: ["Operations", "Partnerships"],
      },
    ],
    joinTitle: "You?",
    joinBody: "We’re small and growing. Help us build one of these functions.",
    joinCta: "See careers",
    ctaTitle: "Interested in working with us?",
    ctaBody:
      "We’re always happy to hear from talented people. See our open roles or simply introduce yourself.",
    ctaPrimary: "View careers",
    ctaGhost: "Get in touch",
  },
  fr: {
    heroMeta: ["MGX / ENTREPRISE", "ÉQUIPE"],
    heroTitle: "Les personnes derrière les produits.",
    heroBody:
      "Une petite équipe axée sur la recherche, couvrant l’ingénierie, le matériel, la formation, la recherche et les opérations, entre les États-Unis et l’Afrique.",
    sectionTitle: "Notre organisation",
    lede:
      "Nous sommes une petite équipe axée sur la recherche, organisée autour du travail lui-même. Voici les fonctions qui construisent et soutiennent ce que nous livrons.",
    functions: [
      {
        name: "Ingénierie",
        body:
          "Conçoit, développe et exploite nos produits logiciels dans la fintech, l’IA et les parcours d’immigration.",
        tags: ["Full-stack", "Sécurité"],
      },
      {
        name: "Matériel",
        body:
          "Gère l’approvisionnement en Mac pour entreprises, l’infrastructure informatique, le déploiement et la gestion des appareils.",
        tags: ["Approvisionnement", "Logistique"],
      },
      {
        name: "Formation",
        body:
          "Conçoit et dispense nos cours en cybersécurité, IA, réseaux et développement.",
        tags: ["Programmes", "Encadrement"],
      },
      {
        name: "Recherche",
        body:
          "Explore l’apprentissage automatique et la recherche appliquée qui alimentent nos produits.",
        tags: ["IA / ML", "Recherche appliquée"],
      },
      {
        name: "Opérations",
        body:
          "Assure le bon fonctionnement de l’entreprise sur les marchés américain et africain que nous servons.",
        tags: ["Opérations", "Partenariats"],
      },
    ],
    joinTitle: "Vous ?",
    joinBody: "Nous sommes une petite équipe en pleine croissance. Aidez-nous à bâtir l’une de ces fonctions.",
    joinCta: "Voir les carrières",
    ctaTitle: "Envie de travailler avec nous ?",
    ctaBody:
      "Nous sommes toujours ravis d’échanger avec des personnes talentueuses. Découvrez nos postes ouverts ou présentez-vous simplement.",
    ctaPrimary: "Voir les carrières",
    ctaGhost: "Nous contacter",
  },
} as const;

export default async function TeamPage() {
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

      {/* Functions */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">{t.sectionTitle}</h2>
            <p className="lede">{t.lede}</p>
          </div>
          <div className="team-grid">
            {t.functions.map((f) => (
              <div key={f.name} className="card">
                <div className="team-badge" aria-hidden="true">
                  {f.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="h3">{f.name}</h3>
                <p style={{ color: "var(--ink-2)", fontSize: 14, margin: "8px 0 16px" }}>{f.body}</p>
                <div className="pillar-tags">
                  {f.tags.map((e) => (
                    <span key={e} className="pillar-tag">{e}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Join card fills the grid and routes to careers */}
            <Link
              href="/careers"
              className="card"
              style={{
                borderStyle: "dashed",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className="team-badge" aria-hidden="true">+</div>
              <h3 className="h3">{t.joinTitle}</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, margin: "8px 0 16px" }}>{t.joinBody}</p>
              <span className="btn-link">
                {t.joinCta} <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
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
                <Link href="/careers" className="btn btn-primary">{t.ctaPrimary} &rarr;</Link>
                <Link href="/contact" className="btn btn-ghost">{t.ctaGhost}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
