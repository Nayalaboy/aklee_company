import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Training Programs" };

const categories = [
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Threat detection, ethical hacking, regulatory compliance, and incident response.",
    courses: ["Intro to Cybersecurity", "Ethical Hacking & Pen Testing", "Compliance & Risk Management", "Incident Response"],
    certifications: ["CompTIA Security+", "CEH", "CISSP Prep"],
    gradient: "from-red-500/10 to-orange-500/5",
    iconBg: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-500",
    accentColor: "text-red-500",
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    description: "Machine learning fundamentals, deep learning, AI ethics, and practical applications.",
    courses: ["ML Fundamentals with Python", "Deep Learning & Neural Networks", "NLP & Computer Vision", "AI Ethics & Governance"],
    certifications: ["Google ML Certificate", "AWS ML Specialty"],
    gradient: "from-violet-500/10 to-purple-500/5",
    iconBg: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-500",
    accentColor: "text-violet-500",
  },
  {
    slug: "networking",
    title: "Networking & Data Centers",
    description: "Network design, virtualization, cloud infrastructure, and data center management.",
    courses: ["Network Fundamentals", "Cisco Routing & Switching", "Cloud Infrastructure (AWS/Azure)", "Data Center Design & Ops"],
    certifications: ["CompTIA Network+", "CCNA", "AWS Solutions Architect"],
    gradient: "from-cyan-500/10 to-blue-500/5",
    iconBg: "from-cyan-500/10 to-blue-500/10",
    iconColor: "text-cyan-500",
    accentColor: "text-cyan-500",
  },
  {
    slug: "fullstack",
    title: "Full-Stack Development",
    description: "Frontend, backend, databases, DevOps, and modern deployment practices.",
    courses: ["HTML/CSS/JavaScript", "React & Next.js", "Python/Node.js Backend", "DevOps & CI/CD Pipelines"],
    certifications: ["Meta Frontend Certificate", "AWS Developer Associate"],
    gradient: "from-emerald-500/10 to-teal-500/5",
    iconBg: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-500",
    accentColor: "text-emerald-500",
  },
];

export default function TrainingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-trainings.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-violet/10 rounded-full blur-[100px] animate-blob-delay" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex">Education</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Training{" "}
            <span className="gradient-text-warm">Programs</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Industry-leading courses designed to launch and accelerate your tech career. Learn from experts with hands-on projects and certification prep.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.slug} className={`bento-card bg-gradient-to-br ${cat.gradient} group`}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-6 h-6 ${cat.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                <h2 className="text-xl font-bold text-dark mb-2">{cat.title}</h2>
                <p className="text-warm-gray-500 text-sm leading-relaxed mb-6">{cat.description}</p>

                <p className="text-[11px] font-semibold text-warm-gray-500 uppercase tracking-wider mb-3">Courses</p>
                <ul className="space-y-2 mb-6">
                  {cat.courses.map((c) => (
                    <li key={c} className="text-warm-gray-500 text-sm flex items-center gap-2.5">
                      <svg className={`w-3.5 h-3.5 ${cat.accentColor} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>

                <p className="text-[11px] font-semibold text-warm-gray-500 uppercase tracking-wider mb-3">Certification Prep</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.certifications.map((cert) => (
                    <span key={cert} className="px-2.5 py-1 bg-primary/5 text-warm-gray-500 text-xs font-medium rounded-lg border border-dark/6">
                      {cert}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/trainings/${cat.slug}`}
                  className="btn-primary inline-flex"
                >
                  View Courses
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Not Sure Where to Start?</h2>
          <p className="text-warm-gray-500 mb-8 text-lg leading-relaxed">Our advisors can help you choose the right learning path based on your goals and experience level.</p>
          <Link href="/contact" className="btn-primary inline-flex">
            Talk to an Advisor
          </Link>
        </div>
      </section>
    </>
  );
}
