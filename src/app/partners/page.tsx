import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Partners" };

const copy = {
  en: {
    heroMeta: ["MGX / PARTNERS", "ECOSYSTEM"],
    heroTitle: "Partnerships we’re building.",
    heroBody:
      "Education, technology, impact, and enterprise — the four kinds of relationships we’re deliberately growing as a young company.",
    sectionTitle: "Open to partnership",
    lede:
      "As a young company, we’re building our ecosystem deliberately. These are the kinds of partnerships we’re looking to grow.",
    areas: [
      {
        type: "Education",
        name: "Institutions & academies",
        desc: "We want to work with schools, universities, and academies to deliver technical training and IT infrastructure.",
      },
      {
        type: "Technology",
        name: "Technology providers",
        desc: "We’re open to working with technology providers whose tools complement our software, hardware, and training work.",
      },
      {
        type: "Impact",
        name: "NGOs & community programs",
        desc: "We’d like to collaborate with NGOs and community programs on technology access and skills across the U.S. and Africa.",
      },
      {
        type: "Enterprise",
        name: "Organizations & businesses",
        desc: "We work with organizations that need consulting, enterprise hardware, or a custom R&D engagement.",
      },
    ],
    certNote:
      "Our training is designed to prepare learners for recognized industry certifications, such as CompTIA Security+. These are certification goals our courses prepare students for, not partnerships we claim.",
    ctaTitle: "Become a partner.",
    ctaBody:
      "We’re looking for partners in education, technology, and logistics to grow with us. Whether you’re an institution, NGO, or enterprise, let’s talk.",
    ctaPrimary: "Start a conversation",
    ctaGhost: "Learn about us",
  },
  fr: {
    heroMeta: ["MGX / PARTENAIRES", "ÉCOSYSTÈME"],
    heroTitle: "Les partenariats que nous construisons.",
    heroBody:
      "Éducation, technologie, impact et entreprise — les quatre types de relations que nous développons avec soin en tant que jeune entreprise.",
    sectionTitle: "Ouverts au partenariat",
    lede:
      "En tant que jeune entreprise, nous construisons notre écosystème avec soin. Voici les types de partenariats que nous souhaitons développer.",
    areas: [
      {
        type: "Éducation",
        name: "Institutions & académies",
        desc: "Nous souhaitons travailler avec des écoles, des universités et des académies pour offrir des formations techniques et de l’infrastructure informatique.",
      },
      {
        type: "Technologie",
        name: "Fournisseurs technologiques",
        desc: "Nous sommes ouverts à collaborer avec des fournisseurs technologiques dont les outils complètent nos travaux en logiciel, matériel et formation.",
      },
      {
        type: "Impact",
        name: "ONG & programmes communautaires",
        desc: "Nous aimerions collaborer avec des ONG et des programmes communautaires autour de l’accès à la technologie et au développement des compétences, aux États-Unis et en Afrique.",
      },
      {
        type: "Entreprise",
        name: "Organisations & entreprises",
        desc: "Nous accompagnons les organisations qui ont besoin de conseil, de matériel professionnel ou d’une mission de R&D sur mesure.",
      },
    ],
    certNote:
      "Nos formations sont conçues pour préparer les apprenants à des certifications reconnues du secteur, telles que CompTIA Security+. Il s’agit d’objectifs de certification auxquels nos cours préparent les étudiants, et non de partenariats que nous revendiquons.",
    ctaTitle: "Devenez partenaire.",
    ctaBody:
      "Nous recherchons des partenaires dans l’éducation, la technologie et la logistique pour grandir avec nous. Que vous soyez une institution, une ONG ou une entreprise, échangeons.",
    ctaPrimary: "Démarrer la conversation",
    ctaGhost: "En savoir plus sur nous",
  },
} as const;

export default async function PartnersPage() {
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

      {/* Partnership areas */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">{t.sectionTitle}</h2>
            <p className="lede">{t.lede}</p>
          </div>

          <div className="pillars pillars-2">
            {t.areas.map((a) => (
              <div key={a.name} className="pillar">
                <span className="pillar-num">{a.type}</span>
                <h3 className="h3">{a.name}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>

          <p className="lede" style={{ marginTop: "24px" }}>{t.certNote}</p>
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
