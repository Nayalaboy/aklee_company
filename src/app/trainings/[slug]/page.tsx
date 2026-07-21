import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale } from "@/lib/i18n";
import { courseData } from "../courses";

const pageCopy = {
  en: {
    back: "← All Training",
    metaTag: "MGX / TRAINING",
    curriculum: "Curriculum",
    modulesTitle: "Course modules",
    moduleLabel: "MODULE",
    ctaTitle: "Ready to enroll?",
    ctaBody: "Talk to an advisor to find the next available cohort and get started.",
    ctaButton: "Talk to an advisor",
    ctaGhost: "Browse other courses",
  },
  fr: {
    back: "← Toutes les formations",
    metaTag: "MGX / FORMATION",
    curriculum: "Programme",
    modulesTitle: "Modules du cours",
    moduleLabel: "MODULE",
    ctaTitle: "Prêt à vous inscrire ?",
    ctaBody:
      "Échangez avec un conseiller pour connaître la prochaine promotion disponible et démarrer.",
    ctaButton: "Parler à un conseiller",
    ctaGhost: "Voir les autres cours",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(courseData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = courseData[slug];
  return { title: course ? `${course.en.title} Training` : "Training" };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = courseData[slug];
  if (!entry) notFound();

  const locale = await getLocale();
  const course = entry[locale];
  const t = pageCopy[locale];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link
            href="/trainings"
            className="mono"
            style={{ color: "var(--ink-3)", marginBottom: 16, display: "inline-block" }}
          >
            {t.back}
          </Link>
          <div className="hero-meta">
            <span>{t.metaTag}</span>
            <span className="dot" />
            <span>{course.duration.toUpperCase()}</span>
            <span className="dot" />
            <span>{course.level.toUpperCase()}</span>
          </div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.curriculum}</span>
            <div>
              <h2 className="h2">{t.modulesTitle}</h2>
            </div>
          </div>

          <div className="svc-list">
            {course.modules.map((mod, i) => (
              <div key={mod.name} className="svc-row" style={{ cursor: "default" }}>
                <div className="num" style={{ whiteSpace: "nowrap" }}>
                  {String(i + 1).padStart(2, "0")} / {t.moduleLabel}
                </div>
                <div>
                  <h3 style={{ fontSize: 20 }}>{mod.name}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                    {mod.topics.map((topic) => (
                      <span key={topic} className="pillar-tag">{topic}</span>
                    ))}
                  </div>
                </div>
                <div />
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
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  {t.ctaButton} &rarr;
                </Link>
                <Link href="/trainings" className="btn btn-ghost">
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
