import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Research & Development" };

const projects = [
  {
    id: "transfer",
    name: "TransferNow",
    tagline: "Money Transfer App",
    status: "Beta",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    description: "A secure, low-fee money transfer platform enabling seamless transactions between the U.S. and Africa — built for speed, compliance, and mobile-money accessibility.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Stripe API", "Blockchain"],
    problem: "Traditional remittance services charge 5–10% fees with multi-day delays, creating a heavy financial burden for diaspora communities.",
    solution: "Fees under 2% with near-instant transfers via blockchain settlement and local mobile-money integrations (M-Pesa, Flutterwave).",
    impact: [
      { label: "Fee reduction", value: "< 2%" },
      { label: "Transfer time", value: "< 60s" },
      { label: "Target users", value: "10M+" },
    ],
    image: "/images/rnd-money-transfer.png",
    gradient: "from-amber-500 to-orange-600",
    gradientBg: "from-amber-500/10 to-orange-500/5",
    borderColor: "border-amber-200/60",
    accentLight: "bg-amber-50",
    icon: "💸",
    flip: false,
  },
  {
    id: "hire",
    name: "HireLink",
    tagline: "AI Job Application App",
    status: "In Development",
    statusColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    description: "An AI-powered job platform that matches candidates with opportunities across the U.S. and Africa — streamlining hiring with smart resume tools, scheduling, and verified credentials.",
    tech: ["Next.js", "Python", "TensorFlow", "MongoDB", "AWS"],
    problem: "Cross-border job seekers face incompatible application formats, timezone barriers, and no trusted way to share verified credentials.",
    solution: "AI-driven resume optimization, automated interview scheduling, and blockchain credential verification create a seamless cross-border hiring pipeline.",
    impact: [
      { label: "Match accuracy", value: "94%" },
      { label: "Time to hire", value: "−60%" },
      { label: "Markets", value: "US + 8 🌍" },
    ],
    image: "/images/rnd-job-app.png",
    gradient: "from-cyan-500 to-sky-600",
    gradientBg: "from-cyan-500/10 to-sky-500/5",
    borderColor: "border-cyan-200/60",
    accentLight: "bg-cyan-50",
    icon: "🤝",
    flip: true,
  },
  {
    id: "immig",
    name: "ImmigPath",
    tagline: "Immigration Assistant App",
    status: "Research Phase",
    statusColor: "text-violet-400 bg-violet-400/10 border-violet-400/30",
    description: "A comprehensive immigration tool providing AI-guided form completion, real-time document tracking, and case status updates — cutting costs and errors dramatically.",
    tech: ["React", "Python/Django", "NLP", "PostgreSQL", "Docker"],
    problem: "Immigration processes involve hundreds of form types, months of waiting, and expensive legal consultations that price out most applicants.",
    solution: "NLP-powered form assistance, automated document checklists, and real-time case status tracking reduce errors and legal costs by up to 70%.",
    impact: [
      { label: "Error reduction", value: "70%" },
      { label: "Cost savings", value: "~$2k" },
      { label: "Form types covered", value: "200+" },
    ],
    image: "/images/rnd-immigration.png",
    gradient: "from-violet-500 to-purple-600",
    gradientBg: "from-violet-500/10 to-purple-500/5",
    borderColor: "border-violet-200/60",
    accentLight: "bg-violet-50",
    icon: "🛂",
    flip: false,
  },
];

export default function RnDPage() {
  return (
    <>
      {/* ──────────────── HERO ──────────────── */}
      <section className="relative overflow-hidden text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060412] via-[#1a0e40] to-[#0c1635]" />
        <div className="glow-orb absolute -top-24 -left-24 w-[500px] h-[500px] bg-violet-700 opacity-25 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500 opacity-10 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Our Core Focus
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
                Apps That{" "}
                <span className="gradient-text-gold">Change Lives.</span>
              </h1>
              <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed mb-8">
                We're building three transformative products for diaspora communities and cross-border professionals — solving real problems at massive scale.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl shadow-xl shadow-amber-700/30 hover:from-amber-300 hover:to-orange-400 transition-all text-sm">
                  Join Beta Program
                </Link>
                <a href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-sm backdrop-blur-sm">
                  See the Apps ↓
                </a>
              </div>
            </div>

            {/* Floating app preview cards */}
            <div className="hidden lg:grid grid-cols-3 gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {projects.map((p) => (
                <div key={p.id} className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="relative h-40">
                    <Image src={p.image} alt={p.name} fill sizes="33vw" className="object-cover object-top opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-3">
                    <span className="text-lg">{p.icon}</span>
                    <p className="text-white font-bold text-sm mt-1">{p.name}</p>
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold border px-2 py-0.5 rounded-full mt-1 ${p.statusColor}`}>
                      <span className="w-1 h-1 rounded-full bg-current animate-pulse" />{p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* ──────────────── PROJECTS ──────────────── */}
      <section id="projects" className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-3xl border ${project.borderColor} overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-100/40 transition-all duration-500`}
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className={`grid lg:grid-cols-2 gap-0 ${project.flip ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Image column */}
                <div className={`relative h-72 lg:h-auto min-h-[340px] overflow-hidden ${project.flip ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-l" />
                  {/* Status over image */}
                  <div className="absolute top-5 left-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${project.statusColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content column */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${project.flip ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-xl shadow-lg`}>
                      {project.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">{project.name}</h2>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-7">{project.description}</p>

                  {/* Problem / Solution */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-7">
                    <div className="bg-red-50/80 rounded-2xl p-4 border border-red-100/80">
                      <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1.5 flex items-center gap-1.5">
                        <span>⚠️</span> The Problem
                      </p>
                      <p className="text-red-800/80 text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="bg-emerald-50/80 rounded-2xl p-4 border border-emerald-100/80">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1.5 flex items-center gap-1.5">
                        <span>✅</span> Our Solution
                      </p>
                      <p className="text-emerald-800/80 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Impact metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-7">
                    {project.impact.map((m) => (
                      <div key={m.label} className={`rounded-2xl p-3 text-center border ${project.borderColor} ${project.accentLight}`}>
                        <p className="text-lg font-extrabold text-gray-900">{m.value}</p>
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full border border-gray-100 hover:border-indigo-200 hover:text-indigo-600 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────── BLOG + PARTNERS ──────────────── */}
      <section className="py-20 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 border border-indigo-100/60 card-hover">
              <span className="text-3xl mb-4 block">📝</span>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Insights</p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Research Blog</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We publish articles about our technical challenges, architecture decisions, and user research findings as we build.
              </p>
              <Link href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:gap-4 transition-all duration-200">
                Read our blog →
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-indigo-100/60 card-hover">
              <span className="text-3xl mb-4 block">🤝</span>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Partnerships</p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Collaborations</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We partner with universities, NGOs, and tech companies across the U.S. and Africa to accelerate our R&D impact.
              </p>
              <Link href="/partners"
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:gap-4 transition-all duration-200">
                View our partners →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── BETA CTA ──────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0818] via-[#1a0e40] to-[#0f1a30]" />
        <div className="glow-orb absolute top-0 left-1/3 w-[500px] h-[300px] bg-violet-700 opacity-25" />
        <div className="glow-orb absolute bottom-0 right-1/3 w-[400px] h-[250px] bg-amber-500 opacity-15" />

        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Beta access now open
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Shape the Product.
          </h2>
          <p className="text-indigo-200/80 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
            Be among the first to test our apps. Your feedback directly influences what we build. Sign up and get early access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="btn-shimmer px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl shadow-xl shadow-amber-700/30 text-sm hover:from-amber-300 hover:to-orange-400 transition-all">
              Sign Up for Beta
            </Link>
            <Link href="/contact"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm backdrop-blur-sm">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
