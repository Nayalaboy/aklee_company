import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Testimonials" };

const copy = {
  en: {
    heroMeta: ["MGX / TESTIMONIALS", "REFERENCES"],
    heroTitle: "Our first references.",
    sectionTitle: "Building our track record",
    lede:
      "Mirigraphix is a young company, and we are building our first client references.",
    bodyTitle: "Become an early partner",
    body:
      "We don’t publish testimonials we haven’t earned. As a new company, we are looking for early clients and partners willing to work closely with us across training, hardware, and R&D, and to share their experience as our first references.",
    bodyNote:
      "If you’d like to be one of them, we’d be glad to talk about how we can help and what a first engagement could look like.",
    ctaTitle: "Be one of our first.",
    ctaBody:
      "Whether you’re interested in training, hardware, or a custom R&D engagement, let’s start with an honest conversation about your needs.",
    ctaPrimary: "Get in touch",
    ctaGhost: "Our services",
  },
  fr: {
    heroMeta: ["MGX / TÉMOIGNAGES", "RÉFÉRENCES"],
    heroTitle: "Nos premières références.",
    sectionTitle: "Construire notre expérience",
    lede:
      "Mirigraphix est une entreprise jeune, et nous construisons nos premières références clients.",
    bodyTitle: "Devenez un partenaire de la première heure",
    body:
      "Nous ne publions pas de témoignages que nous n’avons pas mérités. En tant que jeune entreprise, nous recherchons des premiers clients et partenaires prêts à collaborer étroitement avec nous, que ce soit en formation, en matériel ou en R&D, et à partager leur expérience comme premières références.",
    bodyNote:
      "Si vous souhaitez en faire partie, nous serions ravis d’échanger sur la façon dont nous pouvons vous aider et sur ce à quoi pourrait ressembler une première collaboration.",
    ctaTitle: "Soyez parmi nos premiers.",
    ctaBody:
      "Que vous soyez intéressé par la formation, le matériel ou une mission de R&D sur mesure, commençons par une conversation honnête sur vos besoins.",
    ctaPrimary: "Nous contacter",
    ctaGhost: "Nos services",
  },
} as const;

export default async function TestimonialsPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <section className="hero-page" style={{ minHeight: "clamp(280px, 36vh, 400px)" }}>
        <div className="hero-page-media">
          <Image src="/images/hero-testimonials.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="hero-page-scrim" aria-hidden="true" />
        <div className="hero-page-inner">
          <div className="container">
            <span className="eyebrow">{t.heroMeta[0]}</span>
            <h1>{t.heroTitle}</h1>
          </div>
        </div>
      </section>

      {/* Honest early-stage statement */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">{t.sectionTitle}</h2>
            <p className="lede">{t.lede}</p>
          </div>

          <div className="cta-block">
            <h2>{t.bodyTitle}</h2>
            <div>
              <p>{t.body}</p>
              <p style={{ marginTop: "12px" }}>{t.bodyNote}</p>
            </div>
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
                <Link href="/services" className="btn btn-ghost">
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
