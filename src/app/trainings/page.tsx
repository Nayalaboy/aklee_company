import Link from "next/link";

export const metadata = { title: "Training Programs" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const categories = [
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Threat detection, ethical hacking, regulatory compliance, and incident response for modern enterprises.",
    courses: ["Intro to Cybersecurity", "Ethical Hacking & Pen Testing", "Compliance & Risk Management", "Incident Response"],
    certifications: ["CompTIA Security+", "CEH", "CISSP Prep"],
    gradient: "from-red-500 to-orange-500",
    accent: "text-red-600 bg-red-50 border-red-200",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    description: "Machine learning fundamentals, deep learning, AI ethics, and practical applications for the real world.",
    courses: ["ML Fundamentals with Python", "Deep Learning & Neural Networks", "NLP & Computer Vision", "AI Ethics & Governance"],
    certifications: ["Google ML Certificate", "AWS ML Specialty"],
    gradient: "from-violet-600 to-indigo-600",
    accent: "text-violet-600 bg-violet-50 border-violet-200",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    slug: "networking",
    title: "Networking & Data Centers",
    description: "Network design, virtualization, cloud infrastructure, and data center management from fundamentals to expert.",
    courses: ["Network Fundamentals", "Cisco Routing & Switching", "Cloud Infrastructure (AWS/Azure)", "Data Center Design & Ops"],
    certifications: ["CompTIA Network+", "CCNA", "AWS Solutions Architect"],
    gradient: "from-cyan-500 to-sky-600",
    accent: "text-cyan-600 bg-cyan-50 border-cyan-200",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  },
  {
    slug: "fullstack",
    title: "Full-Stack Development",
    description: "Frontend, backend, databases, DevOps, and modern deployment. From zero to job-ready in one track.",
    courses: ["HTML/CSS/JavaScript", "React & Next.js", "Python/Node.js Backend", "DevOps & CI/CD Pipelines"],
    certifications: ["Meta Frontend Certificate", "AWS Developer Associate"],
    gradient: "from-emerald-500 to-teal-500",
    accent: "text-emerald-600 bg-emerald-50 border-emerald-200",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
];

const stats = [
  { value: "1,000+", label: "Students Trained" },
  { value: "4", label: "Core Tracks" },
  { value: "10+", label: "Certifications Covered" },
  { value: "2", label: "Continents" },
];

export default function TrainingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060412] via-[#1a0e40] to-[#0c1635]" />
        <div className="glow-orb absolute -top-24 left-0 w-[500px] h-[400px] bg-violet-700 opacity-20 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[400px] h-[300px] bg-indigo-500 opacity-15 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRID_BG }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Education
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Training <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed mb-10">
            Industry-leading courses designed to launch and accelerate your tech career. Hands-on projects, live instruction, and certification prep.
          </p>
          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold gradient-text">{s.value}</div>
                <div className="text-indigo-300/70 text-xs font-semibold mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Course tracks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Tracks</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Choose Your <span className="gradient-text">Learning Path</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            {categories.map((cat) => (
              <div key={cat.slug} className="group bg-white rounded-3xl border border-indigo-100/60 overflow-hidden card-hover">
                <div className={`h-1.5 bg-gradient-to-r ${cat.gradient}`} />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-extrabold text-gray-900">{cat.title}</h2>
                      <p className="text-gray-500 text-sm leading-relaxed mt-1">{cat.description}</p>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Courses</p>
                  <ul className="space-y-2 mb-5">
                    {cat.courses.map((c) => (
                      <li key={c} className="text-gray-700 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {c}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2.5">Certification Prep</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cat.certifications.map((cert) => (
                      <span key={cert} className={`px-3 py-1 text-xs font-bold rounded-full border ${cat.accent}`}>
                        {cert}
                      </span>
                    ))}
                  </div>

                  <Link href={`/trainings/${cat.slug}`}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-gradient-to-r ${cat.gradient} text-white shadow-md hover:opacity-90 transition-all`}>
                    View Courses →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0818] via-[#1a0e40] to-[#0f1a30]" />
        <div className="glow-orb absolute top-0 left-1/4 w-[500px] h-[300px] bg-violet-700 opacity-25" />
        <div className="glow-orb absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-600 opacity-20" />
        <div className="max-w-xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-indigo-200/80 mb-10 text-lg">
            Our advisors can help you choose the right learning path based on your goals and experience level.
          </p>
          <Link href="/contact"
            className="btn-shimmer inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold rounded-xl shadow-xl shadow-indigo-900/50 text-sm hover:from-violet-500 hover:to-indigo-500 transition-all">
            Talk to an Advisor →
          </Link>
        </div>
      </section>
    </>
  );
}
