import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/lib/i18n";

export const metadata = { title: "Events" };

const copy = {
  en: {
    heroMeta: ["MGX / EVENTS", "UPCOMING"],
    heroTitle: "Webinars, workshops, and meetups.",
    emptyTitle: "No events scheduled yet.",
    emptyLede:
      "We don’t have any sessions on the calendar right now. Check back soon, or get in touch to be notified when we announce our first events.",
    emptyCta: "Notify me",
    ctaTitle: "Host an event with us.",
    ctaBody:
      "We work with companies, universities, and communities to deliver workshops and talks. Let us plan something together.",
    ctaPrimary: "Get in touch",
    ctaGhost: "Our services",
  },
  fr: {
    heroMeta: ["MGX / ÉVÉNEMENTS", "À VENIR"],
    heroTitle: "Webinaires, ateliers et rencontres.",
    emptyTitle: "Aucun événement programmé pour le moment.",
    emptyLede:
      "Aucune session n’est inscrite à notre calendrier pour l’instant. Revenez bientôt, ou contactez-nous pour être informé dès l’annonce de nos premiers événements.",
    emptyCta: "Être informé",
    ctaTitle: "Organisez un événement avec nous.",
    ctaBody:
      "Nous collaborons avec des entreprises, des universités et des communautés pour animer des ateliers et des conférences. Construisons quelque chose ensemble.",
    ctaPrimary: "Nous contacter",
    ctaGhost: "Nos services",
  },
} as const;

export default async function EventsPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
      <section className="hero-page" style={{ minHeight: "clamp(280px, 36vh, 400px)" }}>
        <div className="hero-page-media">
          <Image src="/images/hero-events.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="hero-page-scrim" aria-hidden="true" />
        <div className="hero-page-inner">
          <div className="container">
            <span className="eyebrow">{t.heroMeta[0]}</span>
            <h1>{t.heroTitle}</h1>
          </div>
        </div>
      </section>

      {/* Empty state */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">{t.emptyTitle}</h2>
            <p className="lede">{t.emptyLede}</p>
          </div>
          <div style={{ marginTop: "24px" }}>
            <Link href="/contact" className="btn btn-primary">
              {t.emptyCta} &rarr;
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
