import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Research & Development" };

const copy = {
  en: {
    heroMeta: ["MGX / RESEARCH", "3 PROJECTS IN STEALTH"],
    heroTitle: "Built quietly, shipped deliberately.",
    heroBody:
      "The R&D lab is the core of Mirigraphix. Three products are in flight for cross-border markets between the U.S. and Africa. What they are stays confidential until launch — beta participants get the full picture under NDA.",
    projectsTitle: "Active projects",
    projectsLede:
      "We publish our codenames, stage, and cadence — not our findings. Each project is disclosed to beta participants and design partners under NDA.",
    roadmap: "Roadmap",
    stages: ["Design", "Pilot", "Beta", "Scale"],
    ndaTag: "Details under NDA",
    projects: [
      {
        id: "MGX / R-01",
        status: "Beta",
        statusKind: "status-beta",
        stage: "Private beta — access by application",
        activeStage: 2,
      },
      {
        id: "MGX / R-02",
        status: "In Development",
        statusKind: "status-dev",
        stage: "In active development",
      },
      {
        id: "MGX / R-03",
        status: "Planned",
        statusKind: "status-soon",
        stage: "On our roadmap",
      },
    ],
    whyTitle: "Why stealth?",
    whyBody:
      "We work in markets where being first matters. Publishing feature lists and roadmaps before launch hands our research to competitors. So the public page stays deliberately quiet, and the people who need detail — beta users, design partners, investors — get it directly from us, under NDA.",
    buildTitle: "How we build",
    buildLede:
      "The process is public even when the products aren't: small teams, tight loops, measurable outcomes.",
    approach: [
      {
        num: "01 HYPOTHESIS",
        title: "Real users, real constraints",
        body:
          "Every project starts with a named user and a measurable outcome. No science projects, only problems worth solving.",
      },
      {
        num: "02 CADENCE",
        title: "Ship in eight-week blocks",
        body:
          "We scope work to eight-week cycles. At the end of each block we ship, measure, and decide whether to continue or pivot.",
      },
      {
        num: "03 DISCLOSURE",
        title: "Process public, findings private",
        body:
          "We share how we work openly. What we discover stays inside the lab — and with our NDA'd partners — until it ships.",
      },
    ],
    ctaTitle: "Want to see what's behind the redactions?",
    ctaBody:
      "Join the beta programme or become a design partner. We'll walk you through the products under NDA and you'll help shape what we ship.",
    ctaPrimary: "Apply for beta access",
    ctaGhost: "Beta programme FAQ",
  },
  fr: {
    heroMeta: ["MGX / RECHERCHE", "3 PROJETS CONFIDENTIELS"],
    heroTitle: "Conçu discrètement, livré délibérément.",
    heroBody:
      "Le laboratoire de R&D est le cœur de Mirigraphix. Trois produits sont en développement pour les marchés transfrontaliers entre les États-Unis et l’Afrique. Leur nature reste confidentielle jusqu’au lancement — les participants à la bêta ont accès à l’ensemble des détails sous accord de confidentialité.",
    projectsTitle: "Projets en cours",
    projectsLede:
      "Nous publions nos noms de code, notre stade d’avancement et notre cadence — pas nos découvertes. Chaque projet est présenté aux participants à la bêta et aux partenaires de conception sous accord de confidentialité.",
    roadmap: "Feuille de route",
    stages: ["Conception", "Pilote", "Bêta", "Déploiement"],
    ndaTag: "Détails sous NDA",
    projects: [
      {
        id: "MGX / R-01",
        status: "Bêta",
        statusKind: "status-beta",
        stage: "Bêta privée — accès sur candidature",
        activeStage: 2,
      },
      {
        id: "MGX / R-02",
        status: "En développement",
        statusKind: "status-dev",
        stage: "En développement actif",
      },
      {
        id: "MGX / R-03",
        status: "Prévu",
        statusKind: "status-soon",
        stage: "Sur notre feuille de route",
      },
    ],
    whyTitle: "Pourquoi la discrétion ?",
    whyBody:
      "Nous travaillons sur des marchés où être premier compte. Publier des listes de fonctionnalités et des feuilles de route avant le lancement reviendrait à offrir notre recherche à nos concurrents. La page publique reste donc volontairement discrète, et celles et ceux qui ont besoin de détails — utilisateurs bêta, partenaires de conception, investisseurs — les obtiennent directement auprès de nous, sous accord de confidentialité.",
    buildTitle: "Notre méthode",
    buildLede:
      "Le processus est public même quand les produits ne le sont pas : petites équipes, cycles courts, résultats mesurables.",
    approach: [
      {
        num: "01 HYPOTHÈSE",
        title: "De vrais utilisateurs, de vraies contraintes",
        body:
          "Chaque projet débute par un utilisateur identifié et un résultat mesurable. Pas de projets théoriques, seulement des problèmes qui méritent d’être résolus.",
      },
      {
        num: "02 CADENCE",
        title: "Livrer par blocs de huit semaines",
        body:
          "Nous découpons le travail en cycles de huit semaines. À la fin de chaque bloc, nous livrons, mesurons, puis décidons de poursuivre ou de réorienter.",
      },
      {
        num: "03 DIVULGATION",
        title: "Processus public, découvertes privées",
        body:
          "Nous partageons ouvertement notre façon de travailler. Ce que nous découvrons reste au sein du laboratoire — et chez nos partenaires sous NDA — jusqu’au lancement.",
      },
    ],
    ctaTitle: "Envie de voir ce qui se cache derrière les caviardages ?",
    ctaBody:
      "Rejoignez le programme bêta ou devenez partenaire de conception. Nous vous présenterons les produits sous accord de confidentialité et vous contribuerez à façonner ce que nous livrons.",
    ctaPrimary: "Candidater à la bêta",
    ctaGhost: "FAQ du programme bêta",
  },
} as const;

export default async function RnDPage() {
  const locale = await getLocale();
  const t = copy[locale];
  const [p1, p2, p3] = t.projects;

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

      {/* Active projects (redacted) */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">{t.projectsTitle}</h2>
            <p className="lede">{t.projectsLede}</p>
          </div>

          <div className="projects">
            {/* Feature card: most advanced project */}
            <article id="r-01" className="project feature">
              <div className="project-body">
                <div className="project-head">
                  <span className="project-id">{p1.id}</span>
                  <span className={`status ${p1.statusKind}`}>
                    <span className="status-dot" />
                    {p1.status}
                  </span>
                </div>
                <div className="redact-lines" aria-hidden="true">
                  <span className="redact-line" />
                  <span className="redact-line" />
                  <span className="redact-line" />
                </div>
                <div className="project-meta">
                  <span className="redact-tag">{t.ndaTag}</span>
                  <span>{p1.stage}</span>
                </div>
              </div>
              <div className="project-visual">
                <span className="mono" style={{ color: "var(--ink-3)" }}>
                  {t.roadmap}
                </span>
                <div className="stage-track">
                  {t.stages.map((s, i) => (
                    <div
                      key={s}
                      className={`stage ${i <= (p1.activeStage ?? 0) ? "done" : ""} ${
                        i === p1.activeStage ? "current" : ""
                      }`}
                    >
                      <span className="stage-dot" />
                      <span className="stage-label">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {[p2, p3].map((p, i) => (
              <article key={p.id} id={`r-0${i + 2}`} className="project half">
                <div className="project-head">
                  <span className="project-id">{p.id}</span>
                  <span className={`status ${p.statusKind}`}>
                    <span className="status-dot" />
                    {p.status}
                  </span>
                </div>
                <div className="redact-lines" aria-hidden="true">
                  <span className="redact-line" />
                  <span className="redact-line" />
                  <span className="redact-line" />
                </div>
                <div className="project-meta">
                  <span className="redact-tag">{t.ndaTag}</span>
                  <span>{p.stage}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Why stealth */}
          <div className="card" style={{ marginTop: 20, padding: 28 }}>
            <span className="redact-tag" style={{ marginBottom: 10 }}>{t.whyTitle}</span>
            <p style={{ color: "var(--ink-2)", fontSize: "14.5px", margin: "10px 0 0", maxWidth: "78ch" }}>
              {t.whyBody}
            </p>
          </div>
        </div>
      </section>

      {/* How we build */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">{t.buildTitle}</h2>
            <p className="lede">{t.buildLede}</p>
          </div>

          <div className="approach-grid">
            {t.approach.map((a) => (
              <div className="approach-cell" key={a.num}>
                <span className="num">{a.num}</span>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
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
                <Link href="/faq" className="btn btn-ghost">
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
