import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale, type Locale } from "@/lib/i18n";

type Module = { name: string; topics: string[] };
type CourseContent = {
  title: string;
  description: string;
  duration: string;
  level: string;
  modules: Module[];
};
type Course = Record<Locale, CourseContent>;

const courseData: Record<string, Course> = {
  cybersecurity: {
    en: {
      title: "Cybersecurity",
      description:
        "Master the art of defending systems and networks. From threat detection to ethical hacking and compliance frameworks.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      modules: [
        { name: "Foundations of Cybersecurity", topics: ["CIA Triad", "Threat Landscape", "Security Frameworks"] },
        { name: "Ethical Hacking", topics: ["Reconnaissance", "Vulnerability Scanning", "Exploitation", "Reporting"] },
        { name: "Network Security", topics: ["Firewalls & IDS", "VPNs", "Wireless Security"] },
        { name: "Compliance & Risk", topics: ["NIST", "ISO 27001", "GDPR", "HIPAA"] },
        { name: "Incident Response", topics: ["Detection", "Containment", "Recovery", "Post-Mortem"] },
      ],
    },
    fr: {
      title: "Cybersécurité",
      description:
        "Maîtrisez l’art de défendre les systèmes et les réseaux. De la détection des menaces au piratage éthique et aux cadres de conformité.",
      duration: "12 semaines",
      level: "Du débutant au niveau avancé",
      modules: [
        { name: "Fondamentaux de la cybersécurité", topics: ["Triade CIA", "Paysage des menaces", "Cadres de sécurité"] },
        { name: "Piratage éthique", topics: ["Reconnaissance", "Analyse des vulnérabilités", "Exploitation", "Rapport"] },
        { name: "Sécurité des réseaux", topics: ["Pare-feu & IDS", "VPN", "Sécurité sans fil"] },
        { name: "Conformité & risque", topics: ["NIST", "ISO 27001", "RGPD", "HIPAA"] },
        { name: "Réponse aux incidents", topics: ["Détection", "Confinement", "Restauration", "Analyse post-incident"] },
      ],
    },
  },
  "ai-ml": {
    en: {
      title: "AI & Machine Learning",
      description:
        "Build intelligent systems from the ground up. Covers ML algorithms, deep learning, NLP, computer vision, and AI ethics.",
      duration: "14 weeks",
      level: "Intermediate",
      modules: [
        { name: "Python for Data Science", topics: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"] },
        { name: "Machine Learning", topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"] },
        { name: "Deep Learning", topics: ["Neural Networks", "CNNs", "RNNs", "Transformers"] },
        { name: "NLP & Computer Vision", topics: ["Text Classification", "Object Detection", "Generative Models"] },
        { name: "AI Ethics & Deployment", topics: ["Bias & Fairness", "Model Monitoring", "MLOps"] },
      ],
    },
    fr: {
      title: "IA & apprentissage automatique",
      description:
        "Construisez des systèmes intelligents de A à Z. Couvre les algorithmes de ML, l’apprentissage profond, le TAL, la vision par ordinateur et l’éthique de l’IA.",
      duration: "14 semaines",
      level: "Intermédiaire",
      modules: [
        { name: "Python pour la science des données", topics: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"] },
        { name: "Apprentissage automatique", topics: ["Apprentissage supervisé", "Apprentissage non supervisé", "Évaluation des modèles"] },
        { name: "Apprentissage profond", topics: ["Réseaux de neurones", "CNN", "RNN", "Transformers"] },
        { name: "TAL & vision par ordinateur", topics: ["Classification de texte", "Détection d’objets", "Modèles génératifs"] },
        { name: "Éthique de l’IA & déploiement", topics: ["Biais & équité", "Surveillance des modèles", "MLOps"] },
      ],
    },
  },
  networking: {
    en: {
      title: "Networking & Data Centers",
      description:
        "Design, deploy, and manage enterprise networks and data center infrastructure.",
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      modules: [
        { name: "Network Fundamentals", topics: ["OSI Model", "TCP/IP", "Subnetting", "DNS/DHCP"] },
        { name: "Routing & Switching", topics: ["VLANs", "OSPF", "BGP", "STP"] },
        { name: "Cloud Infrastructure", topics: ["AWS VPC", "Azure Networking", "Hybrid Cloud"] },
        { name: "Data Center Operations", topics: ["Virtualization", "Storage", "Cooling & Power", "Monitoring"] },
      ],
    },
    fr: {
      title: "Réseaux & centres de données",
      description:
        "Concevez, déployez et gérez des réseaux d’entreprise et l’infrastructure des centres de données.",
      duration: "10 semaines",
      level: "Du débutant au niveau intermédiaire",
      modules: [
        { name: "Fondamentaux des réseaux", topics: ["Modèle OSI", "TCP/IP", "Sous-réseaux", "DNS/DHCP"] },
        { name: "Routage & commutation", topics: ["VLAN", "OSPF", "BGP", "STP"] },
        { name: "Infrastructure cloud", topics: ["AWS VPC", "Réseaux Azure", "Cloud hybride"] },
        { name: "Exploitation des centres de données", topics: ["Virtualisation", "Stockage", "Refroidissement & alimentation", "Supervision"] },
      ],
    },
  },
  fullstack: {
    en: {
      title: "Full-Stack Development",
      description:
        "Become a complete developer. Master frontend, backend, databases, and modern DevOps practices.",
      duration: "16 weeks",
      level: "Beginner to Advanced",
      modules: [
        { name: "Frontend Development", topics: ["HTML/CSS", "JavaScript/TypeScript", "React", "Next.js"] },
        { name: "Backend Development", topics: ["Node.js", "Python/Django", "REST APIs", "GraphQL"] },
        { name: "Databases", topics: ["PostgreSQL", "MongoDB", "Redis", "ORM/ODM"] },
        { name: "DevOps & Deployment", topics: ["Docker", "CI/CD", "AWS/Vercel", "Monitoring"] },
        { name: "Capstone Project", topics: ["Full-Stack App", "Code Review", "Deployment", "Presentation"] },
      ],
    },
    fr: {
      title: "Développement full-stack",
      description:
        "Devenez un développeur complet. Maîtrisez le frontend, le backend, les bases de données et les pratiques DevOps modernes.",
      duration: "16 semaines",
      level: "Du débutant au niveau avancé",
      modules: [
        { name: "Développement frontend", topics: ["HTML/CSS", "JavaScript/TypeScript", "React", "Next.js"] },
        { name: "Développement backend", topics: ["Node.js", "Python/Django", "API REST", "GraphQL"] },
        { name: "Bases de données", topics: ["PostgreSQL", "MongoDB", "Redis", "ORM/ODM"] },
        { name: "DevOps & déploiement", topics: ["Docker", "CI/CD", "AWS/Vercel", "Supervision"] },
        { name: "Projet de fin de parcours", topics: ["Application full-stack", "Revue de code", "Déploiement", "Présentation"] },
      ],
    },
  },
};

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
