import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Research & Development" };

const copy = {
  en: {
    heroMeta: ["MGX / RESEARCH", "3 ACTIVE PROJECTS"],
    heroTitle: "Built, shipped, measured.",
    projectsTitle: "Active projects",
    projectsLede:
      "Three applications in flight, each targeting an underserved corridor between the U.S. and the African continent.",
    roadmap: "Roadmap",
    stages: ["Design", "Pilot", "Beta", "Scale"],
    p1: {
      id: "MGX / R-01",
      status: "Beta",
      statusKind: "status-beta",
      name: "Cross-Border Payments",
      body:
        "A faster, more affordable way to move money between the U.S. and Africa. Settlement in seconds, not hours, with transparent fees and real-time FX.",
      meta: [
        ["Focus", "U.S. ↔ Africa corridors"],
        ["Stage", "Private beta"],
        ["Compliance", "KYC / AML by design"],
      ],
    },
    p2: {
      id: "MGX / R-02",
      status: "Dev",
      statusKind: "status-dev",
      name: "AI Job Matching",
      body:
        "Connecting talent with opportunities across borders using intelligent matching: résumé parsing, skill-gap analysis, and employer fit scoring.",
      note: "In active development.",
    },
    p3: {
      id: "MGX / R-03",
      status: "Soon",
      statusKind: "status-soon",
      name: "Immigration Assist",
      body:
        "Simplifying complex immigration processes with AI-guided document prep, timeline tracking, and eligibility checks.",
      note: "On our roadmap.",
    },
    buildTitle: "How we build",
    buildLede:
      "Small teams, tight loops, and a bias toward publishing what we learn.",
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
        num: "03 PUBLISH",
        title: "Notes open by default",
        body:
          "Research notes, design decisions, and post-mortems are published internally and, where possible, externally.",
      },
    ],
    ctaTitle: "Become a design partner or a beta user.",
    ctaBody:
      "We are looking for early adopters who want to shape the products we ship. Join the programme and get priority access.",
    ctaPrimary: "Get in touch",
    ctaGhost: "View all projects",
  },
  fr: {
    heroMeta: ["MGX / RECHERCHE", "3 PROJETS ACTIFS"],
    heroTitle: "Conçu, livré, mesuré.",
    projectsTitle: "Projets en cours",
    projectsLede:
      "Trois applications en développement, chacune visant un corridor mal desservi entre les États-Unis et le continent africain.",
    roadmap: "Feuille de route",
    stages: ["Conception", "Pilote", "Bêta", "Déploiement"],
    p1: {
      id: "MGX / R-01",
      status: "Bêta",
      statusKind: "status-beta",
      name: "Paiements transfrontaliers",
      body:
        "Un moyen plus rapide et plus abordable de transférer de l’argent entre les États-Unis et l’Afrique. Un règlement en quelques secondes, et non en heures, avec des frais transparents et un taux de change en temps réel.",
      meta: [
        ["Couverture", "Corridors É.-U. ↔ Afrique"],
        ["Stade", "Bêta privée"],
        ["Conformité", "KYC / AML intégrés"],
      ],
    },
    p2: {
      id: "MGX / R-02",
      status: "Dév",
      statusKind: "status-dev",
      name: "Mise en relation par IA",
      body:
        "Relier les talents aux opportunités au-delà des frontières grâce à une mise en relation intelligente : analyse des CV, évaluation des écarts de compétences et score d’adéquation avec l’employeur.",
      note: "En développement actif.",
    },
    p3: {
      id: "MGX / R-03",
      status: "Bientôt",
      statusKind: "status-soon",
      name: "Assistance à l’immigration",
      body:
        "Simplifier des démarches d’immigration complexes grâce à une préparation des documents assistée par IA, un suivi des échéances et des vérifications d’éligibilité.",
      note: "Sur notre feuille de route.",
    },
    buildTitle: "Notre méthode",
    buildLede:
      "De petites équipes, des cycles courts et la volonté de partager ce que nous apprenons.",
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
        num: "03 PARTAGE",
        title: "Des notes ouvertes par défaut",
        body:
          "Les notes de recherche, les décisions de conception et les retours d’expérience sont publiés en interne et, lorsque c’est possible, en externe.",
      },
    ],
    ctaTitle: "Devenez partenaire de conception ou utilisateur bêta.",
    ctaBody:
      "Nous recherchons des utilisateurs précoces qui souhaitent façonner les produits que nous développons. Rejoignez le programme et bénéficiez d’un accès prioritaire.",
    ctaPrimary: "Nous contacter",
    ctaGhost: "Voir tous les projets",
  },
} as const;

export default async function RnDPage() {
  const locale = await getLocale();
  const t = copy[locale];
  const { p1, p2, p3 } = t;

  return (
    <>
      <section className="hero-page">
        <div className="hero-page-media">
          <Image
            src="/images/hero-rnd.jpg"
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
            <p>{t.projectsLede}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 className="h2">{t.projectsTitle}</h2>
            <p className="lede">{t.projectsLede}</p>
          </div>

          <div className="projects" data-reveal>
            <article className="project feature">
              <div className="project-body">
                <div className="project-head">
                  <span className="project-id">{p1.id}</span>
                  <span className={`status ${p1.statusKind}`}>
                    <span className="status-dot" />
                    {p1.status}
                  </span>
                </div>
                <h3 className="project-name">{p1.name}</h3>
                <p className="project-desc">{p1.body}</p>
                <div className="project-meta">
                  {p1.meta.map(([k, v]) => (
                    <span key={k}>
                      {k}: <b>{v}</b>
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-visual">
                <Image
                  src="/images/rnd-money-transfer.png"
                  alt=""
                  fill
                  sizes="(max-width: 960px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="project-visual-overlay">
                  <span className="mono" style={{ opacity: 0.8, display: "block", marginBottom: 8 }}>
                    {t.roadmap}
                  </span>
                  <div className="stage-track on-media">
                    {t.stages.map((s, i) => (
                      <div
                        key={s}
                        className={`stage ${i <= 2 ? "done" : ""} ${i === 2 ? "current" : ""}`}
                      >
                        <span className="stage-dot" />
                        <span className="stage-label">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="project">
              <div className="project-shot">
                <Image
                  src="/images/rnd-job-app.png"
                  alt=""
                  width={640}
                  height={400}
                  sizes="(max-width: 960px) 100vw, 33vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="project-body-pad">
                <div className="project-head">
                  <span className="project-id">{p2.id}</span>
                  <span className={`status ${p2.statusKind}`}>
                    <span className="status-dot" />
                    {p2.status}
                  </span>
                </div>
                <h3 className="project-name">{p2.name}</h3>
                <p className="project-desc">{p2.body}</p>
                <div className="project-meta">
                  <span>{p2.note}</span>
                </div>
              </div>
            </article>

            <article className="project">
              <div className="project-shot">
                <Image
                  src="/images/rnd-immigration.png"
                  alt=""
                  width={640}
                  height={400}
                  sizes="(max-width: 960px) 100vw, 33vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="project-body-pad">
                <div className="project-head">
                  <span className="project-id">{p3.id}</span>
                  <span className={`status ${p3.statusKind}`}>
                    <span className="status-dot" />
                    {p3.status}
                  </span>
                </div>
                <h3 className="project-name">{p3.name}</h3>
                <p className="project-desc">{p3.body}</p>
                <div className="project-meta">
                  <span>{p3.note}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 className="h2">{t.buildTitle}</h2>
            <p className="lede">{t.buildLede}</p>
          </div>

          <div className="approach-grid" data-reveal>
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

      <section className="section">
        <div className="container">
          <div className="cta-block" data-reveal>
            <h2>{t.ctaTitle}</h2>
            <div>
              <p>{t.ctaBody}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  {t.ctaPrimary}
                </Link>
                <Link href="/contact" className="btn btn-ghost">
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
