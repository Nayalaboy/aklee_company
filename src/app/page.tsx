import Link from "next/link";
import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Mirigraphix | Research, Systems & Hardware",
};

const copy = {
  en: {
    heroMeta: ["MGX-LLC / 2026", "New York, NY", "Technology company"],
    heroTitle: "We build what’s next",
    heroBody:
      "Mirigraphix is a research-driven technology company. We build cross-border fintech, AI workforce tools, and immigration software, backed by consulting, enterprise hardware, and professional training programs.",
    seeRnd: "See R&D",
    contact: "Contact us",
    offerEyebrow: "What we do",
    offerTitle: "One lab, three ways in",
    offerLede:
      "Everything we build ties back to research. Consulting and training fund the lab; the lab feeds better products back to our clients.",
    offers: {
      lead: {
        idx: "01 · Core",
        badge: "The lab",
        title: "Product engineering",
        body:
          "We design, build, and operate software products that tackle hard cross-border problems: payments, hiring, and immigration. This is the work everything else exists to fund.",
        chips: ["Fintech", "AI / ML", "LegalTech"],
        go: "Explore R&D",
      },
      consulting: {
        idx: "02 · Support",
        title: "Consulting & hardware",
        body:
          "Enterprise Mac sales, IT infrastructure, and technology consulting for organizations in the U.S. and Africa.",
        chips: ["Mac wholesale", "IT infra", "Advisory"],
        go: "See services",
      },
      training: {
        idx: "03 · Support",
        title: "Professional training",
        body:
          "Instructor-led and self-paced courses in cybersecurity, AI, networking, and full-stack development.",
        chips: ["Cybersecurity", "AI / ML", "Networking", "Dev"],
        go: "Browse courses",
      },
    },
    rndEyebrow: "R&D",
    rndTitle: "What we’re building",
    rndLede:
      "Three products in various stages of development. Each one addresses a friction point in cross-border life.",
    stages: ["Design", "Pilot", "Beta", "Scale"],
    products: [
      {
        id: "MGX/R-01",
        status: "Beta",
        statusKind: "status-beta",
        name: "Cross-Border Payments",
        body:
          "Real-time settlement rails connecting U.S. and African corridors. Lower fees, faster delivery, full compliance.",
        meta: [
          ["Focus", "U.S. ↔ Africa corridors"],
          ["Stage", "Private beta"],
          ["Compliance", "KYC / AML by design"],
        ],
        activeStage: 2,
      },
      {
        id: "MGX/R-02",
        status: "In Development",
        statusKind: "status-dev",
        name: "AI Job Matching",
        body:
          "An ML-powered engine that matches diaspora talent to verified roles across borders.",
        note: "In active development.",
      },
      {
        id: "MGX/R-03",
        status: "Planned",
        statusKind: "status-soon",
        name: "Immigration Assist",
        body:
          "Guided immigration workflows with document prep, status tracking, and attorney coordination.",
        note: "On our roadmap.",
      },
    ],
    ctaTitle: "Work with us, or come build with us.",
    ctaBody:
      "Three ways in: join a beta, scope a consulting engagement, or apply to the training cohort. Every thread leads back to the research.",
    ctaPrimary: "Start a conversation",
    ctaGhost: "See the products",
  },
  fr: {
    heroMeta: ["MGX-LLC / 2026", "New York, NY", "Entreprise technologique"],
    heroTitle: "Nous construisons l’avenir",
    heroBody:
      "Mirigraphix est une entreprise technologique axée sur la recherche. Nous développons des solutions fintech transfrontalières, des outils RH basés sur l’IA et des logiciels d’immigration, soutenus par du conseil, du matériel professionnel et des programmes de formation.",
    seeRnd: "Voir la R&D",
    contact: "Nous contacter",
    offerEyebrow: "Ce que nous faisons",
    offerTitle: "Un seul laboratoire, trois portes d’entrée",
    offerLede:
      "Tout ce que nous construisons découle de la recherche. Le conseil et la formation financent le laboratoire ; le laboratoire améliore en retour les produits livrés à nos clients.",
    offers: {
      lead: {
        idx: "01 · Cœur",
        badge: "Le laboratoire",
        title: "Ingénierie produit",
        body:
          "Nous concevons, développons et exploitons des produits logiciels qui s’attaquent à des problèmes transfrontaliers complexes : paiements, recrutement et immigration. C’est le travail que tout le reste sert à financer.",
        chips: ["Fintech", "IA / ML", "LegalTech"],
        go: "Explorer la R&D",
      },
      consulting: {
        idx: "02 · Soutien",
        title: "Conseil & matériel",
        body:
          "Vente de Mac pour entreprises, infrastructure informatique et conseil technologique pour les organisations aux États-Unis et en Afrique.",
        chips: ["Mac en gros", "Infra IT", "Conseil"],
        go: "Voir les services",
      },
      training: {
        idx: "03 · Soutien",
        title: "Formation professionnelle",
        body:
          "Cours encadrés et en autonomie en cybersécurité, IA, réseaux et développement full-stack.",
        chips: ["Cybersécurité", "IA / ML", "Réseaux", "Dév"],
        go: "Voir les cours",
      },
    },
    rndEyebrow: "R&D",
    rndTitle: "Ce que nous développons",
    rndLede:
      "Trois produits à différents stades de développement. Chacun s’attaque à un point de friction de la vie transfrontalière.",
    stages: ["Conception", "Pilote", "Bêta", "Déploiement"],
    products: [
      {
        id: "MGX/R-01",
        status: "Bêta",
        statusKind: "status-beta",
        name: "Paiements transfrontaliers",
        body:
          "Des rails de règlement en temps réel reliant les corridors entre les États-Unis et l’Afrique. Moins de frais, livraison plus rapide, conformité totale.",
        meta: [
          ["Couverture", "Corridors É.-U. ↔ Afrique"],
          ["Stade", "Bêta privée"],
          ["Conformité", "KYC / AML intégrés"],
        ],
        activeStage: 2,
      },
      {
        id: "MGX/R-02",
        status: "En développement",
        statusKind: "status-dev",
        name: "Mise en relation par IA",
        body:
          "Un moteur basé sur l’apprentissage automatique qui met en relation les talents de la diaspora avec des postes vérifiés au-delà des frontières.",
        note: "En développement actif.",
      },
      {
        id: "MGX/R-03",
        status: "Prévu",
        statusKind: "status-soon",
        name: "Assistance à l’immigration",
        body:
          "Des parcours d’immigration guidés avec préparation des documents, suivi des dossiers et coordination avec les avocats.",
        note: "Sur notre feuille de route.",
      },
    ],
    ctaTitle: "Travaillez avec nous, ou venez construire avec nous.",
    ctaBody:
      "Trois portes d’entrée : rejoindre une bêta, cadrer une mission de conseil, ou postuler à une promotion de formation. Chaque chemin ramène à la recherche.",
    ctaPrimary: "Démarrer la conversation",
    ctaGhost: "Voir les produits",
  },
} as const;

export default async function Home() {
  const locale = await getLocale();
  const t = copy[locale];
  const lead = t.offers.lead;
  const consulting = t.offers.consulting;
  const training = t.offers.training;
  const [p1, p2, p3] = t.products;

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>{t.heroMeta[0]}</span>
            <span className="dot" />
            <span>{t.heroMeta[1]}</span>
            <span className="dot" />
            <span>{t.heroMeta[2]}</span>
          </div>

          <h1>
            {t.heroTitle}
            <span className="caret" />
          </h1>

          <p>{t.heroBody}</p>

          <div style={{ display: "flex", gap: "10px", marginTop: "28px" }}>
            <Link href="/rnd" className="btn btn-primary">
              {t.seeRnd}
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              {t.contact}
            </Link>
          </div>
        </div>
      </section>

      {/* ── What we do ── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{t.offerEyebrow}</span>
              <h2 className="h2">{t.offerTitle}</h2>
            </div>
            <p className="lede">{t.offerLede}</p>
          </div>

          <div className="offer-grid">
            {/* Lead offering: the R&D core */}
            <Link href="/rnd" className="offer offer-lead">
              <span className="offer-rail" />
              <div className="offer-ic">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 3v6.5L4.5 18a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L15 9.5V3" />
                  <path d="M7.5 3h9M8 14h8" />
                </svg>
              </div>
              <div className="offer-main">
                <div className="offer-top">
                  <span className="offer-idx">{lead.idx}</span>
                  <span className="status status-dev">
                    <span className="status-dot" />
                    {lead.badge}
                  </span>
                </div>
                <h3>{lead.title}</h3>
                <p>{lead.body}</p>
                <div className="offer-chips">
                  {lead.chips.map((c) => (
                    <span key={c} className="offer-chip">{c}</span>
                  ))}
                </div>
                <span className="offer-go">
                  {lead.go} <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>

            {/* Supporting offering: consulting & hardware */}
            <Link href="/services" className="offer offer-sub">
              <span className="offer-rail" />
              <div className="offer-ic">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="12" rx="1.5" />
                  <path d="M2 20h20M9.5 16l-.5 4M14.5 16l.5 4" />
                </svg>
              </div>
              <div className="offer-main">
                <div className="offer-top">
                  <span className="offer-idx">{consulting.idx}</span>
                </div>
                <h3>{consulting.title}</h3>
                <p>{consulting.body}</p>
                <div className="offer-chips">
                  {consulting.chips.map((c) => (
                    <span key={c} className="offer-chip">{c}</span>
                  ))}
                </div>
                <span className="offer-go">
                  {consulting.go} <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>

            {/* Supporting offering: training */}
            <Link href="/trainings" className="offer offer-sub">
              <span className="offer-rail" />
              <div className="offer-ic">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 4 2 9l10 5 10-5-10-5Z" />
                  <path d="M6 11v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5M22 9v5" />
                </svg>
              </div>
              <div className="offer-main">
                <div className="offer-top">
                  <span className="offer-idx">{training.idx}</span>
                </div>
                <h3>{training.title}</h3>
                <p>{training.body}</p>
                <div className="offer-chips">
                  {training.chips.map((c) => (
                    <span key={c} className="offer-chip">{c}</span>
                  ))}
                </div>
                <span className="offer-go">
                  {training.go} <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Active products ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{t.rndEyebrow}</span>
              <h2 className="h2">{t.rndTitle}</h2>
            </div>
            <p className="lede">{t.rndLede}</p>
          </div>

          <div className="projects">
            {/* Feature card: Cross-Border Payments */}
            <div className="project feature">
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
                  {p1.meta?.map(([k, v]) => (
                    <span key={k}>
                      {k}: <b>{v}</b>
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-visual">
                <span className="mono" style={{ color: "var(--ink-3)" }}>
                  {locale === "fr" ? "Feuille de route" : "Roadmap"}
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
            </div>

            {/* AI Job Matching */}
            <div className="project">
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

            {/* Immigration Assist */}
            <div className="project">
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
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>{t.ctaTitle}</h2>
            <div>
              <p>{t.ctaBody}</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <Link href="/contact" className="btn btn-primary">
                  {t.ctaPrimary} &rarr;
                </Link>
                <Link href="/rnd" className="btn btn-ghost">
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
