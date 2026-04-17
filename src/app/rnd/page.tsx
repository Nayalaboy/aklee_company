import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Research & Development" };

const projects = [
  {
    name: "Cross-Border Payments",
    status: "Beta",
<<<<<<< HEAD
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    description: "A faster, more affordable way to move money between the U.S. and Africa.",
    image: "/images/rnd-money-transfer.png",
    gradient: "from-amber-400 to-orange-500",
    icon: "💸",
=======
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
    description: "A faster, more affordable way to move money between the U.S. and Africa.",
    gradient: "from-accent/10 to-coral/5",
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
  },
  {
    name: "AI-Powered Job Matching",
    status: "In Development",
<<<<<<< HEAD
    statusColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    description: "Connecting talent with opportunities across borders using intelligent matching.",
    image: "/images/rnd-job-app.png",
    gradient: "from-cyan-500 to-sky-600",
    icon: "🤝",
=======
    statusColor: "bg-primary/5 text-primary border-primary/20",
    description: "Connecting talent with opportunities across borders using intelligent matching.",
    gradient: "from-primary/10 to-violet/5",
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
  },
  {
    name: "Immigration Assistance",
    status: "Coming Soon",
<<<<<<< HEAD
    statusColor: "text-violet-400 bg-violet-400/10 border-violet-400/30",
    description: "Simplifying complex immigration processes with AI-guided tools.",
    image: "/images/rnd-immigration.png",
    gradient: "from-violet-500 to-purple-600",
    icon: "🛂",
  },
];

const approach = [
  {
    title: "AI-First",
    desc: "Every product we build is powered by artificial intelligence at its core.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    title: "Cross-Border",
    desc: "Designed from day one for both U.S. and African markets.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    gradient: "from-cyan-500 to-sky-600",
  },
  {
    title: "User-Centered",
    desc: "Built with real user feedback from both continents at every stage.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    gradient: "from-amber-400 to-orange-500",
=======
    statusColor: "bg-violet/5 text-violet border-violet/20",
    description: "Simplifying complex immigration processes with AI-guided tools.",
    gradient: "from-violet/10 to-primary/5",
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
  },
];

export default function RnDPage() {
  return (
    <>
<<<<<<< HEAD
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
                Innovation
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
                Research &{" "}
                <span className="gradient-text-gold">Development</span>
              </h1>
              <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed mb-8">
                We build AI-driven applications that solve real problems for communities across the U.S. and Africa.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl shadow-xl shadow-amber-700/30 hover:from-amber-300 hover:to-orange-400 transition-all text-sm">
                  Join Beta Program
                </Link>
                <a href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-sm backdrop-blur-sm">
                  See Projects ↓
                </a>
              </div>
            </div>

            {/* App preview thumbnails */}
            <div className="hidden lg:grid grid-cols-3 gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {projects.map((p) => (
                <div key={p.name} className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="relative h-40">
                    <Image src={p.image} alt={p.name} fill sizes="33vw" className="object-cover object-top opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="p-3">
                    <span className="text-lg">{p.icon}</span>
                    <p className="text-white font-bold text-xs mt-1 leading-tight">{p.name}</p>
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold border px-2 py-0.5 rounded-full mt-1.5 ${p.statusColor}`}>
                      <span className="w-1 h-1 rounded-full bg-current animate-pulse" />{p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
=======
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-rnd.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-violet/15 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-blob-delay" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan/8 rounded-full blur-[100px] animate-blob-delay-2" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex !text-violet !bg-violet/10 !border-violet/20">Innovation</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Research &{" "}
            <span className="gradient-text">Development</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            We build AI-driven applications that solve real problems for communities across the U.S. and Africa.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Projects</span>
            <h2 className="text-3xl font-bold text-dark mt-4">What We&apos;re Building</h2>
            <p className="text-warm-gray-500 mt-3 max-w-2xl leading-relaxed">
              Our product pipeline focuses on high-impact applications that bridge the gap between the U.S. and African markets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div key={project.name} className={`bento-card bg-gradient-to-br ${project.gradient} group`}>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full border inline-block mb-5 ${project.statusColor}`}>{project.status}</span>
                <h3 className="text-lg font-bold text-dark mb-3">{project.name}</h3>
                <p className="text-warm-gray-500 text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

<<<<<<< HEAD
      {/* ──────────────── PROJECTS ──────────────── */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
              Projects
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              What We&apos;re <span className="gradient-text">Building</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
              Our product pipeline focuses on high-impact applications that bridge the gap between the U.S. and African markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 card-hover"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${project.statusColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="text-xl">{project.icon}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
=======
      {/* Approach */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">Our Approach</span>
            <h2 className="text-3xl font-bold text-dark mt-4">How We Build</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "AI-First", desc: "Every product we build is powered by artificial intelligence at its core.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { title: "Cross-Border", desc: "Designed from day one for both U.S. and African markets.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "User-Centered", desc: "Built with real user feedback from both continents at every stage.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
            ].map((item) => (
              <div key={item.title} className="bento-card text-center group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-violet/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-warm-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Blog */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bento-card">
            <span className="section-label mb-4 inline-flex">Insights</span>
            <h2 className="text-2xl font-bold text-dark mb-4 mt-3">Research Blog</h2>
            <p className="text-warm-gray-500 mb-5 leading-relaxed">
              We share insights on AI, cross-border technology, and the problems we are working to solve.
            </p>
            <Link href="/blog" className="btn-ghost inline-flex">
              Read our blog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="bento-card">
            <span className="section-label mb-4 inline-flex">Partnerships</span>
            <h2 className="text-2xl font-bold text-dark mb-4 mt-3">Collaborations</h2>
            <p className="text-warm-gray-500 mb-5 leading-relaxed">
              We work with partners across the U.S. and Africa to bring our products to market.
            </p>
            <Link href="/partners" className="btn-ghost inline-flex">
              View our partners
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ──────────────── APPROACH ──────────────── */}
      <section className="py-20 bg-gradient-to-b from-[#f0f0ff]/60 to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              How We <span className="gradient-text">Build</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 border border-indigo-100/60 card-hover">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── BLOG + PARTNERS ──────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 border border-indigo-100/60 card-hover">
              <span className="text-3xl mb-4 block">📝</span>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Insights</p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Research Blog</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We share insights on AI, cross-border technology, and the problems we are working to solve.
              </p>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:gap-4 transition-all duration-200">
                Read our blog →
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-indigo-100/60 card-hover">
              <span className="text-3xl mb-4 block">🤝</span>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Partnerships</p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Collaborations</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We work with partners across the U.S. and Africa to bring our products to market.
              </p>
              <Link href="/partners" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:gap-4 transition-all duration-200">
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

        <div className="max-w-2xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Join Our Beta Program
          </h2>
          <p className="text-indigo-200/80 mb-10 text-lg leading-relaxed">
            Be among the first to try our apps and help shape the final product.
          </p>
          <Link href="/contact"
            className="btn-shimmer inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl shadow-xl shadow-amber-700/30 text-sm hover:from-amber-300 hover:to-orange-400 transition-all">
=======
      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet/10 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Beta Program</h2>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">Be among the first to try our apps and help shape the final product.</p>
          <Link href="/contact" className="btn-primary inline-flex text-base px-7 py-3.5">
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
            Sign Up for Beta
          </Link>
        </div>
      </section>
    </>
  );
}
