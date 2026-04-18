import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const courseData: Record<string, { title: string; description: string; modules: { name: string; topics: string[] }[]; duration: string; level: string }> = {
  cybersecurity: {
    title: "Cybersecurity",
    description: "Master the art of defending systems and networks. From threat detection to ethical hacking and compliance frameworks.",
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
  "ai-ml": {
    title: "AI & Machine Learning",
    description: "Build intelligent systems from the ground up. Covers ML algorithms, deep learning, NLP, computer vision, and AI ethics.",
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
  networking: {
    title: "Networking & Data Centers",
    description: "Design, deploy, and manage enterprise networks and data center infrastructure.",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    modules: [
      { name: "Network Fundamentals", topics: ["OSI Model", "TCP/IP", "Subnetting", "DNS/DHCP"] },
      { name: "Routing & Switching", topics: ["VLANs", "OSPF", "BGP", "STP"] },
      { name: "Cloud Infrastructure", topics: ["AWS VPC", "Azure Networking", "Hybrid Cloud"] },
      { name: "Data Center Operations", topics: ["Virtualization", "Storage", "Cooling & Power", "Monitoring"] },
    ],
  },
  fullstack: {
    title: "Full-Stack Development",
    description: "Become a complete developer. Master frontend, backend, databases, and modern DevOps practices.",
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
};

export function generateStaticParams() {
  return Object.keys(courseData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = courseData[slug];
  return { title: course ? `${course.title} Training` : "Training" };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courseData[slug];
  if (!course) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link
            href="/trainings"
            className="mono"
            style={{ color: "var(--ink-3)", marginBottom: 16, display: "inline-block" }}
          >
            &larr; All Training
          </Link>
          <div className="hero-meta">
            <span>MGX / TRAINING</span>
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
            <span className="eyebrow">Curriculum</span>
            <div>
              <h2 className="h2">Course modules</h2>
            </div>
          </div>

          <div className="svc-list">
            {course.modules.map((mod, i) => (
              <div key={mod.name} className="svc-row" style={{ cursor: "default" }}>
                <div className="num" style={{ whiteSpace: "nowrap" }}>
                  {String(i + 1).padStart(2, "0")} / MODULE
                </div>
                <div>
                  <h3 style={{ fontSize: 20 }}>{mod.name}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                    {mod.topics.map((t) => (
                      <span key={t} className="pillar-tag">{t}</span>
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
            <h2>Ready to enroll?</h2>
            <div>
              <p>Classes have limited seats. Secure your spot today.</p>
              <Link href="/contact" className="btn btn-primary">
                Enroll now &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
