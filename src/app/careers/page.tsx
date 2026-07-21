import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Careers" };

const copy = {
  en: {
    heroMeta: ["MGX / COMPANY", "CAREERS"],
    heroTitle: "Come build what’s next.",
    heroBody:
      "We’re a small, senior team that ships real products. When we hire, we look for people who want to build, not manage roadmaps.",
    whyTitle: "Why Mirigraphix",
    whyLede:
      "A place where engineering craft meets real-world impact across two continents.",
    benefits: [
      { num: "01", title: "Remote-first", desc: "Work from anywhere. We optimize for async and deep focus." },
      { num: "02", title: "Equity for all", desc: "Every team member holds a stake in what we build together." },
      { num: "03", title: "Learning budget", desc: "A learning & development budget for courses, conferences, and certifications." },
      { num: "04", title: "Ship real products", desc: "No busywork. You will deploy to production from week one." },
    ],
    ctaTitle: "No open roles right now.",
    ctaBody:
      "We’re not actively hiring, but we’re always interested in hearing from talented people. Send us a note and tell us what you can build.",
    ctaPrimary: "Get in touch",
  },
  fr: {
    heroMeta: ["MGX / ENTREPRISE", "CARRIÈRES"],
    heroTitle: "Venez construire l’avenir.",
    heroBody:
      "Nous sommes une équipe restreinte et expérimentée qui livre de vrais produits. Lorsque nous recrutons, nous recherchons des personnes qui veulent construire, et non gérer des feuilles de route.",
    whyTitle: "Pourquoi Mirigraphix",
    whyLede:
      "Un lieu où l’excellence en ingénierie rencontre un impact concret, sur deux continents.",
    benefits: [
      { num: "01", title: "Télétravail d’abord", desc: "Travaillez d’où vous voulez. Nous privilégions le travail asynchrone et la concentration." },
      { num: "02", title: "Participation pour tous", desc: "Chaque membre de l’équipe détient une part de ce que nous construisons ensemble." },
      { num: "03", title: "Budget de formation", desc: "Un budget de formation et de développement pour des cours, des conférences et des certifications." },
      { num: "04", title: "De vrais produits", desc: "Pas de tâches inutiles. Vous déployez en production dès la première semaine." },
    ],
    ctaTitle: "Aucun poste ouvert pour le moment.",
    ctaBody:
      "Nous ne recrutons pas activement, mais nous sommes toujours ravis d’échanger avec des personnes talentueuses. Écrivez-nous et dites-nous ce que vous savez construire.",
    ctaPrimary: "Nous contacter",
  },
} as const;

export default async function CareersPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <section className="hero-page">
        <div className="hero-page-media">
          <Image src="/images/hero-careers.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
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
          <div className="section-head" data-reveal>
            <h2 className="h2">{t.whyTitle}</h2>
            <p className="lede">{t.whyLede}</p>
          </div>
          <div className="approach-grid approach-grid-4" data-reveal>
            {t.benefits.map((b) => (
              <div key={b.num} className="approach-cell">
                <span className="num">{b.num}</span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>{t.ctaTitle}</h2>
            <div>
              <p>{t.ctaBody}</p>
              <Link href="/contact" className="btn btn-primary">
                {t.ctaPrimary} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
