import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Mirigraphix | Research, Systems & Hardware",
};

const copy = {
  en: {
    heroLine:
      "We build cross-border software — backed by consulting, enterprise hardware, and professional training.",
    seeRnd: "See R&D",
    contact: "Contact us",
    offerEyebrow: "What we do",
    offerTitle: "One lab. Three ways in.",
    offerLede:
      "Everything we build ties back to research. Consulting and training fund the lab; the lab feeds better products back to our clients.",
    offers: [
      {
        idx: "01",
        title: "Product engineering",
        body: "Cross-border fintech, AI workforce tools, and immigration software — designed, built, and operated by the same team.",
        href: "/rnd",
        go: "Explore R&D",
      },
      {
        idx: "02",
        title: "Consulting & hardware",
        body: "Enterprise Mac sales, IT infrastructure, and technology consulting for organizations in the U.S. and Africa.",
        href: "/services",
        go: "See services",
      },
      {
        idx: "03",
        title: "Professional training",
        body: "Instructor-led and self-paced courses in cybersecurity, AI, networking, and full-stack development.",
        href: "/trainings",
        go: "Browse courses",
      },
    ],
    bridgeEyebrow: "U.S. ↔ Africa",
    bridgeTitle: "Built for corridors that are underserved.",
    bridgeBody:
      "Our products target friction in cross-border life — payments, hiring, and immigration — with a services practice that keeps us close to real deployments.",
    bridgeCta: "About the company",
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
        body: "Real-time settlement rails connecting U.S. and African corridors. Lower fees, faster delivery, full compliance.",
        meta: [
          ["Focus", "U.S. ↔ Africa corridors"],
          ["Stage", "Private beta"],
          ["Compliance", "KYC / AML by design"],
        ],
        activeStage: 2,
        image: "/images/rnd-money-transfer.png",
      },
      {
        id: "MGX/R-02",
        status: "In Development",
        statusKind: "status-dev",
        name: "AI Job Matching",
        body: "An ML-powered engine that matches diaspora talent to verified roles across borders.",
        note: "In active development.",
        image: "/images/rnd-job-app.png",
      },
      {
        id: "MGX/R-03",
        status: "Planned",
        statusKind: "status-soon",
        name: "Immigration Assist",
        body: "Guided immigration workflows with document prep, status tracking, and attorney coordination.",
        note: "On our roadmap.",
        image: "/images/rnd-immigration.png",
      },
    ],
    ctaTitle: "Work with us, or come build with us.",
    ctaBody:
      "Join a beta, scope a consulting engagement, or apply to a training cohort. Every thread leads back to the research.",
    ctaPrimary: "Start a conversation",
    ctaGhost: "See the products",
  },
  fr: {
    heroLine:
      "Nous développons des logiciels transfrontaliers — soutenus par du conseil, du matériel professionnel et de la formation.",
    seeRnd: "Voir la R&D",
    contact: "Nous contacter",
    offerEyebrow: "Ce que nous faisons",
    offerTitle: "Un laboratoire. Trois portes d’entrée.",
    offerLede:
      "Tout ce que nous construisons découle de la recherche. Le conseil et la formation financent le laboratoire ; le laboratoire améliore en retour les produits livrés à nos clients.",
    offers: [
      {
        idx: "01",
        title: "Ingénierie produit",
        body: "Fintech transfrontalière, outils RH basés sur l’IA et logiciels d’immigration — conçus, développés et exploités par la même équipe.",
        href: "/rnd",
        go: "Explorer la R&D",
      },
      {
        idx: "02",
        title: "Conseil & matériel",
        body: "Vente de Mac pour entreprises, infrastructure informatique et conseil technologique pour les organisations aux États-Unis et en Afrique.",
        href: "/services",
        go: "Voir les services",
      },
      {
        idx: "03",
        title: "Formation professionnelle",
        body: "Cours encadrés et en autonomie en cybersécurité, IA, réseaux et développement full-stack.",
        href: "/trainings",
        go: "Voir les cours",
      },
    ],
    bridgeEyebrow: "É.-U. ↔ Afrique",
    bridgeTitle: "Conçu pour des corridors mal desservis.",
    bridgeBody:
      "Nos produits s’attaquent aux frictions de la vie transfrontalière — paiements, recrutement et immigration — avec une activité de services qui nous garde proches des déploiements réels.",
    bridgeCta: "À propos de l’entreprise",
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
        body: "Des rails de règlement en temps réel reliant les corridors entre les États-Unis et l’Afrique. Moins de frais, livraison plus rapide, conformité totale.",
        meta: [
          ["Couverture", "Corridors É.-U. ↔ Afrique"],
          ["Stade", "Bêta privée"],
          ["Conformité", "KYC / AML intégrés"],
        ],
        activeStage: 2,
        image: "/images/rnd-money-transfer.png",
      },
      {
        id: "MGX/R-02",
        status: "En développement",
        statusKind: "status-dev",
        name: "Mise en relation par IA",
        body: "Un moteur basé sur l’apprentissage automatique qui met en relation les talents de la diaspora avec des postes vérifiés au-delà des frontières.",
        note: "En développement actif.",
        image: "/images/rnd-job-app.png",
      },
      {
        id: "MGX/R-03",
        status: "Prévu",
        statusKind: "status-soon",
        name: "Assistance à l’immigration",
        body: "Des parcours d’immigration guidés avec préparation des documents, suivi des dossiers et coordination avec les avocats.",
        note: "Sur notre feuille de route.",
        image: "/images/rnd-immigration.png",
      },
    ],
    ctaTitle: "Travaillez avec nous, ou venez construire avec nous.",
    ctaBody:
      "Rejoindre une bêta, cadrer une mission de conseil, ou postuler à une promotion de formation. Chaque chemin ramène à la recherche.",
    ctaPrimary: "Démarrer la conversation",
    ctaGhost: "Voir les produits",
  },
} as const;

export default async function Home() {
  const locale = await getLocale();
  const t = copy[locale];
  const [p1, p2, p3] = t.products;

  return (
    <>
      <section className="hero-bleed" aria-label="Mirigraphix">
        <div className="hero-bleed-media">
          <Image
            src="/images/hero-bridge.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-bleed-scrim" aria-hidden="true" />
        <div className="hero-bleed-inner">
          <div className="container">
            <h1 className="hero-brand">Mirigraphix</h1>
            <p className="hero-line">{t.heroLine}</p>
            <div className="hero-actions">
              <Link href="/rnd" className="btn btn-on-media">
                {t.seeRnd}
              </Link>
              <Link href="/contact" className="btn btn-ghost-on-media">
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">{t.offerEyebrow}</span>
              <h2 className="h2">{t.offerTitle}</h2>
            </div>
            <p className="lede">{t.offerLede}</p>
          </div>

          <div className="path-list" data-reveal>
            {t.offers.map((offer) => (
              <Link key={offer.idx} href={offer.href} className="path-row">
                <span className="path-idx">{offer.idx}</span>
                <h3>{offer.title}</h3>
                <p className="path-body">{offer.body}</p>
                <span className="path-go">
                  {offer.go} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split-band" data-reveal>
            <div className="split-band-copy">
              <span className="eyebrow">{t.bridgeEyebrow}</span>
              <h2 className="h2" style={{ margin: 0 }}>
                {t.bridgeTitle}
              </h2>
              <p className="lede">{t.bridgeBody}</p>
              <Link href="/about" className="btn-link">
                {t.bridgeCta} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="split-band-media">
              <Image
                src="/images/africa-tech.jpg"
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
              <span className="eyebrow">{t.rndEyebrow}</span>
              <h2 className="h2">{t.rndTitle}</h2>
            </div>
            <p className="lede">{t.rndLede}</p>
          </div>

          <div className="projects" data-reveal>
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
                <Image
                  src={p1.image}
                  alt=""
                  fill
                  sizes="(max-width: 960px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="project-visual-overlay">
                  <span className="mono" style={{ opacity: 0.8, display: "block", marginBottom: 8 }}>
                    {locale === "fr" ? "Feuille de route" : "Roadmap"}
                  </span>
                  <div className="stage-track on-media">
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
            </div>

            {[p2, p3].map((p) => (
              <div key={p.id} className="project">
                <div className="project-shot">
                  <Image
                    src={p.image}
                    alt=""
                    width={640}
                    height={400}
                    sizes="(max-width: 960px) 100vw, 33vw"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="project-body-pad">
                  <div className="project-head">
                    <span className="project-id">{p.id}</span>
                    <span className={`status ${p.statusKind}`}>
                      <span className="status-dot" />
                      {p.status}
                    </span>
                  </div>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-desc">{p.body}</p>
                  <div className="project-meta">
                    <span>{p.note}</span>
                  </div>
                </div>
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
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  {t.ctaPrimary} →
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
