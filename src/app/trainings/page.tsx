import Link from "next/link";

export const metadata = { title: "Training Programs" };

const categories = [
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Threat detection, ethical hacking, regulatory compliance, and incident response.",
    courses: ["Intro to Cybersecurity", "Ethical Hacking & Pen Testing", "Compliance & Risk Management", "Incident Response"],
    certifications: ["CompTIA Security+", "CEH", "CISSP Prep"],
    color: "from-red-500/10 to-orange-500/10",
    iconBg: "bg-red-50 text-red-600",
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    description: "Machine learning fundamentals, deep learning, AI ethics, and practical applications.",
    courses: ["ML Fundamentals with Python", "Deep Learning & Neural Networks", "NLP & Computer Vision", "AI Ethics & Governance"],
    certifications: ["Google ML Certificate", "AWS ML Specialty"],
    color: "from-violet-500/10 to-purple-500/10",
    iconBg: "bg-violet-50 text-violet-600",
  },
  {
    slug: "networking",
    title: "Networking & Data Centers",
    description: "Network design, virtualization, cloud infrastructure, and data center management.",
    courses: ["Network Fundamentals", "Cisco Routing & Switching", "Cloud Infrastructure (AWS/Azure)", "Data Center Design & Ops"],
    certifications: ["CompTIA Network+", "CCNA", "AWS Solutions Architect"],
    color: "from-cyan-500/10 to-blue-500/10",
    iconBg: "bg-cyan-50 text-cyan-600",
  },
  {
    slug: "fullstack",
    title: "Full-Stack Development",
    description: "Frontend, backend, databases, DevOps, and modern deployment practices.",
    courses: ["HTML/CSS/JavaScript", "React & Next.js", "Python/Node.js Backend", "DevOps & CI/CD Pipelines"],
    certifications: ["Meta Frontend Certificate", "AWS Developer Associate"],
    color: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
];

export default function TrainingsPage() {
  return (
    <>
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">Education</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Training Programs</h1>
          <p className="text-blue-200/90 text-lg max-w-2xl leading-relaxed">
            Industry-leading courses designed to launch and accelerate your tech career. Learn from experts with hands-on projects and certification prep.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.slug} className={`rounded-2xl p-8 border border-gray-100 bg-gradient-to-br ${cat.color} card-hover`}>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{cat.description}</p>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Courses</p>
                <ul className="space-y-1.5 mb-5">
                  {cat.courses.map((c) => (
                    <li key={c} className="text-gray-700 text-sm flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Certification Prep</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.certifications.map((cert) => (
                    <span key={cert} className="px-2.5 py-1 bg-white/80 text-gray-700 text-xs font-medium rounded-full border border-gray-200/60">
                      {cert}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/trainings/${cat.slug}`}
                  className="inline-flex items-center gap-1.5 px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm"
                >
                  View Courses
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Not Sure Where to Start?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Our advisors can help you choose the right learning path based on your goals and experience level.</p>
          <Link href="/contact" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm text-sm">
            Talk to an Advisor
          </Link>
        </div>
      </section>
    </>
  );
}
