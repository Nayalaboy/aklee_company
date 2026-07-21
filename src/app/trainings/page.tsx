import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "@/lib/i18n";
import { courseData } from "./courses";

export const metadata: Metadata = {
  title: "Professional Training",
};

const copy = {
  en: {
    heroMeta: ["MGX / TRAINING", "Industry-aligned"],
    heroTitle: "Train with the people who build the products.",
    heroBody:
      "Industry-aligned courses in cybersecurity, networking, and machine learning, taught by Mirigraphix engineers and certified instructors.",
    highlights: [
      {
        label: "Format",
        value: "Instructor-led & self-paced",
        trend: "online and on-site",
      },
      {
        label: "Certification prep",
        value: "CompTIA · Cisco · AWS",
        trend: "exam-aligned tracks",
        valueSmall: true,
      },
      {
        label: "Taught by",
        value: "Practitioners",
        trend: "engineers & certified instructors",
      },
      {
        label: "Hands-on",
        value: "Project-based",
        trend: "real tools, real workflows",
      },
    ],
    focusEyebrow: "Focus areas",
    focusTitle: "Three disciplines. Taught by practitioners.",
    pillars: [
      {
        num: "01 / CYBERSECURITY",
        title: "Cybersecurity",
        body: "Foundational security, offensive testing, and compliance pathways. Prepares learners for industry certifications and hands-on security roles.",
        tags: ["CompTIA Security+", "Pen testing", "SOC & compliance"],
      },
      {
        num: "02 / NETWORKING",
        title: "Networking & infrastructure",
        body: "From Cisco fundamentals to modern cloud and SD-WAN architectures. Built for engineers who run the networks behind real organizations.",
        tags: ["Cisco CCNA", "Cloud networking", "SD-WAN"],
      },
      {
        num: "03 / AI & SOFTWARE",
        title: "AI & software engineering",
        body: "Applied machine learning, LLM systems, and full-stack engineering. Focused on shipping production software, not toy notebooks.",
        tags: ["Applied ML", "LLM systems", "Full-stack"],
      },
    ],
    catalogEyebrow: "Course catalog",
    catalogTitle: "Pick your track",
    catalogLede:
      "Four structured programs, each with a full module-by-module curriculum. Open a course to see exactly what you'll learn.",
    duration: "Duration",
    level: "Level",
    modules: "modules",
    viewCurriculum: "View curriculum",
    ctaTitle: "Ready to start learning?",
    ctaBody:
      "Talk to an advisor about which track is right for you, or apply directly to an upcoming cohort.",
    ctaButton: "Talk to an advisor",
  },
  fr: {
    heroMeta: ["MGX / FORMATION", "Aligné sur l’industrie"],
    heroTitle: "Formez-vous auprès de celles et ceux qui conçoivent les produits.",
    heroBody:
      "Des cours alignés sur l’industrie en cybersécurité, réseaux et apprentissage automatique, dispensés par les ingénieurs de Mirigraphix et des formateurs certifiés.",
    highlights: [
      {
        label: "Format",
        value: "Encadré et en autonomie",
        trend: "en ligne et en présentiel",
      },
      {
        label: "Préparation aux certifications",
        value: "CompTIA · Cisco · AWS",
        trend: "parcours alignés sur les examens",
        valueSmall: true,
      },
      {
        label: "Dispensé par",
        value: "Des praticiens",
        trend: "ingénieurs et formateurs certifiés",
      },
      {
        label: "Pratique",
        value: "Par projets",
        trend: "outils et flux de travail réels",
      },
    ],
    focusEyebrow: "Domaines clés",
    focusTitle: "Trois disciplines. Enseignées par des praticiens.",
    pillars: [
      {
        num: "01 / CYBERSÉCURITÉ",
        title: "Cybersécurité",
        body: "Sécurité fondamentale, tests offensifs et parcours de conformité. Prépare les apprenants aux certifications de l’industrie et aux postes opérationnels en sécurité.",
        tags: ["CompTIA Security+", "Tests d’intrusion", "SOC & conformité"],
      },
      {
        num: "02 / RÉSEAUX",
        title: "Réseaux & infrastructure",
        body: "Des fondamentaux Cisco aux architectures cloud et SD-WAN modernes. Conçu pour les ingénieurs qui exploitent les réseaux de véritables organisations.",
        tags: ["Cisco CCNA", "Réseaux cloud", "SD-WAN"],
      },
      {
        num: "03 / IA & LOGICIEL",
        title: "IA & ingénierie logicielle",
        body: "Apprentissage automatique appliqué, systèmes à base de LLM et ingénierie full-stack. Axé sur la mise en production de logiciels, et non sur des exercices théoriques.",
        tags: ["ML appliqué", "Systèmes LLM", "Full-stack"],
      },
    ],
    catalogEyebrow: "Catalogue des cours",
    catalogTitle: "Choisissez votre parcours",
    catalogLede:
      "Quatre programmes structurés, chacun avec un programme détaillé module par module. Ouvrez un cours pour voir exactement ce que vous apprendrez.",
    duration: "Durée",
    level: "Niveau",
    modules: "modules",
    viewCurriculum: "Voir le programme",
    ctaTitle: "Prêt à vous lancer ?",
    ctaBody:
      "Échangez avec un conseiller pour déterminer le parcours qui vous convient, ou postulez directement à une prochaine promotion.",
    ctaButton: "Parler à un conseiller",
  },
} as const;

export default async function TrainingsPage() {
  const locale = await getLocale();
  const t = copy[locale];

  return (
    <>
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

      <section className="section">
        <div className="container">
          <div className="stats-strip" style={{ marginBottom: 64 }}>
            {t.highlights.map((h) => (
              <div key={h.label} className="stat-cell">
                <div className="stat-label">{h.label}</div>
                <div
                  className="stat-val"
                  style={
                    "valueSmall" in h && h.valueSmall
                      ? { fontSize: "clamp(18px, 2vw, 24px)" }
                      : undefined
                  }
                >
                  {h.value}
                </div>
                <div className="stat-note">{h.trend}</div>
              </div>
            ))}
          </div>

          <div className="section-head">
            <span className="eyebrow">{t.focusEyebrow}</span>
            <div>
              <h2 className="h2">{t.focusTitle}</h2>
            </div>
          </div>

          <div className="pillars">
            {t.pillars.map((p) => (
              <div key={p.num} className="pillar">
                <div className="pillar-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="pillar-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="pillar-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course catalog */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{t.catalogEyebrow}</span>
              <h2 className="h2">{t.catalogTitle}</h2>
            </div>
            <p className="lede">{t.catalogLede}</p>
          </div>

          <div className="projects">
            {Object.entries(courseData).map(([slug, course], i) => {
              const c = course[locale];
              return (
                <Link key={slug} href={`/trainings/${slug}`} className="project half">
                  <div className="project-head">
                    <span className="project-id">MGX/T-{String(i + 1).padStart(2, "0")}</span>
                    <span className="mono" style={{ color: "var(--ink-3)" }}>
                      {c.modules.length} {t.modules}
                    </span>
                  </div>
                  <h3 className="project-name" style={{ fontSize: 22 }}>{c.title}</h3>
                  <p className="project-desc">{c.description}</p>
                  <div className="project-meta">
                    <span>
                      {t.duration}: <b>{c.duration}</b>
                    </span>
                    <span>
                      {t.level}: <b>{c.level}</b>
                    </span>
                  </div>
                  <span className="btn-link">
                    {t.viewCurriculum} <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-block">
            <h2>{t.ctaTitle}</h2>
            <div>
              <p>{t.ctaBody}</p>
              <Link href="/contact" className="btn btn-primary">
                {t.ctaButton} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
