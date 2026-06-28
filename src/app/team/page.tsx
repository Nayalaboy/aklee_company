import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Our Team" };

const copy = {
  en: {
    heroMeta: ["MGX / COMPANY", "TEAM"],
    heroTitle: "The people behind the products.",
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
    growingNote:
      "Our team is small and growing. If you’d like to help build any of these functions, we’d love to hear from you.",
    ctaTitle: "Interested in working with us?",
    ctaBody:
      "We’re always happy to hear from talented people. See our open roles or simply introduce yourself.",
    ctaPrimary: "View careers",
    ctaGhost: "Get in touch",
  },
  fr: {
    heroMeta: ["MGX / ENTREPRISE", "ÉQUIPE"],
    heroTitle: "Les personnes derrière les produits.",
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
    growingNote:
      "Notre équipe est petite et en pleine croissance. Si vous souhaitez contribuer à l’une de ces fonctions, n’hésitez pas à nous écrire.",
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
        </div>
      </section>

      {/* Functions */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">{t.sectionTitle}</h2>
            <p className="lede">{t.lede}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {t.functions.map((f) => (
              <div key={f.name} className="card">
                <div className="hw-thumb" style={{ height: 100, marginBottom: 16 }}>
                  {f.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="h3">{f.name}</h3>
                <p className="mono" style={{ color: "var(--ink-3)", margin: "6px 0 14px" }}>{f.body}</p>
                <div className="pillar-tags">
                  {f.tags.map((e) => (
                    <span key={e} className="pillar-tag">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="lede" style={{ marginTop: "24px" }}>{t.growingNote}</p>
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
