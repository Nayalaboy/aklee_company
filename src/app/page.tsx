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
      "Mirigraphix is a research-driven technology company. We build software for cross-border markets between the U.S. and Africa — currently in stealth — backed by consulting, enterprise hardware, and professional training programs.",
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
          "We design, build, and operate software products that tackle hard cross-border problems between the U.S. and Africa. The products are in stealth until launch — this is the work everything else exists to fund.",
        chips: ["In stealth", "3 projects", "U.S. ↔ Africa"],
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
      "Three products in various stages of development, each addressing a friction point in cross-border life. The details stay in the lab until launch.",
    stages: ["Design", "Pilot", "Beta", "Scale"],
    ndaTag: "Details under NDA",
    products: [
      {
        id: "MGX/R-01",
        status: "Beta",
        statusKind: "status-beta",
        note: "Private beta — access by application.",
        activeStage: 2,
      },
      {
        id: "MGX/R-02",
        status: "In Development",
        statusKind: "status-dev",
        note: "In active development.",
      },
      {
        id: "MGX/R-03",
        status: "Planned",
        statusKind: "status-soon",
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
      "Mirigraphix est une entreprise technologique axée sur la recherche. Nous développons des logiciels pour les marchés transfrontaliers entre les États-Unis et l’Afrique — actuellement en mode confidentiel — soutenus par du conseil, du matériel professionnel et des programmes de formation.",
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
          "Nous concevons, développons et exploitons des produits logiciels qui s’attaquent à des problèmes transfrontaliers complexes entre les États-Unis et l’Afrique. Les produits restent confidentiels jusqu’au lancement — c’est le travail que tout le reste sert à financer.",
        chips: ["Confidentiel", "3 projets", "É.-U. ↔ Afrique"],
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
      "Trois produits à différents stades de développement, chacun s’attaquant à un point de friction de la vie transfrontalière. Les détails restent au laboratoire jusqu’au lancement.",
    stages: ["Conception", "Pilote", "Bêta", "Déploiement"],
    ndaTag: "Détails sous NDA",
    products: [
      {
        id: "MGX/R-01",
        status: "Bêta",
        statusKind: "status-beta",
        note: "Bêta privée — accès sur candidature.",
        activeStage: 2,
      },
      {
        id: "MGX/R-02",
        status: "En développement",
        statusKind: "status-dev",
        note: "En développement actif.",
      },
      {
        id: "MGX/R-03",
        status: "Prévu",
        statusKind: "status-soon",
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
            {/* Feature card: most advanced project (redacted) */}
            <div className="project feature">
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
                  <span>{p1.note}</span>
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

            {[p2, p3].map((p) => (
              <div key={p.id} className="project half">
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
                  <span>{p.note}</span>
                </div>
              </div>
            ))}
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
