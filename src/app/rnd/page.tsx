import Link from "next/link";

export const metadata = { title: "Research & Development" };

const projects = [
  {
    name: "Money Transfer App",
    status: "Beta",
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
    description: "A secure, low-fee money transfer platform enabling seamless transactions between the U.S. and Africa. Built for speed, compliance, and accessibility.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Stripe API", "Blockchain"],
    problem: "Traditional remittance services charge 5-10% fees with multi-day delays, creating a financial burden for diaspora communities.",
    solution: "Our app reduces fees to under 2% with near-instant transfers using blockchain settlement and local mobile-money integrations.",
  },
  {
    name: "Job Application App",
    status: "In Development",
    statusColor: "bg-blue-50 text-blue-700 border-blue-200",
    description: "An AI-powered job application platform that matches candidates with opportunities across the U.S. and Africa, streamlining the hiring process.",
    tech: ["Next.js", "Python", "TensorFlow", "MongoDB", "AWS"],
    problem: "Cross-border job seekers struggle with incompatible application formats, timezone barriers, and lack of verified credential sharing.",
    solution: "AI-driven resume optimization, automated interview scheduling, and credential verification create a seamless cross-border hiring pipeline.",
  },
  {
    name: "Immigration App",
    status: "Research Phase",
    statusColor: "bg-purple-50 text-purple-700 border-purple-200",
    description: "A comprehensive immigration assistance tool providing document tracking, status updates, and AI-guided form completion.",
    tech: ["React", "Python/Django", "NLP", "PostgreSQL", "Docker"],
    problem: "Immigration processes are complex, with hundreds of form types, long wait times, and expensive legal consultations.",
    solution: "NLP-powered form assistance, automated document checklists, and real-time case status tracking reduce errors and costs by 70%.",
  },
];

export default function RnDPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-purple-900/80 to-primary-dark text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-3">Innovation</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Research & Development</h1>
          <p className="text-purple-200/90 text-lg max-w-2xl leading-relaxed">
            We build innovative applications that solve real problems for communities across the U.S. and Africa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {projects.map((project) => (
            <div key={project.name} className="rounded-2xl border border-gray-100 p-8 card-hover bg-white">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
                <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${project.statusColor}`}>{project.status}</span>
              </div>
              <p className="text-gray-500 mb-6 leading-relaxed">{project.description}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50/60 rounded-xl p-5 border border-red-100/60">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">The Problem</p>
                  <p className="text-red-800/80 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="bg-emerald-50/60 rounded-xl p-5 border border-emerald-100/60">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">Our Solution</p>
                  <p className="text-emerald-800/80 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Technology Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Insights</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Blog</h2>
            <p className="text-gray-500 mb-4 leading-relaxed">
              We publish articles about our technical challenges, architecture decisions, and user research findings.
            </p>
            <Link href="/blog" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
              Read our blog
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Partnerships</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaborations</h2>
            <p className="text-gray-500 mb-4 leading-relaxed">
              We partner with academic institutions, NGOs, and technology companies across the U.S. and Africa to advance our R&D projects.
            </p>
            <Link href="/partners" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
              View our partners
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <h2 className="text-2xl font-bold mb-3">Join Our Beta Program</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">Be the first to test our apps and provide feedback that shapes the final product.</p>
          <Link href="/contact" className="px-7 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg text-sm">
            Sign Up for Beta
          </Link>
        </div>
      </section>
    </>
  );
}
