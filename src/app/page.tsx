import Link from "next/link";

const stats = [
  { value: "3",    label: "R&D Apps in Progress", color: "gradient-text" },
  { value: "2",    label: "Continents Served",     color: "gradient-text-cyan" },
  { value: "500+", label: "Students Trained",      color: "gradient-text-gold" },
  { value: "50+",  label: "Enterprise Clients",    color: "gradient-text" },
];

const trustedBy = [
  "CompTIA", "Cisco", "AWS", "University of Lagos", "EduAfrica Foundation", "TechHub Lagos",
  "CompTIA", "Cisco", "AWS", "University of Lagos", "EduAfrica Foundation", "TechHub Lagos",
];

const testimonials = [
  {
    text: "We partnered with Mirigraphix on their cross-border payments R&D project. Their engineering team is world-class and their expertise is exactly what we needed.",
    name: "David R.",
    role: "CTO, GlobalPay Solutions",
  },
  {
    text: "Mirigraphix helped us set up IT infrastructure across three African countries. Their team understood the local challenges and delivered on time and on budget.",
    name: "Michael B.",
    role: "Founder, EduAfrica",
  },
];

export default function Home() {
  return (
    <>
      {/* ──────────── HERO ──────────── */}
      <section className="hero-gradient text-white relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="glow-orb absolute -top-32 -left-32 w-[600px] h-[600px] bg-violet-700 opacity-20 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500 opacity-15 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="absolute top-16 right-[8%] w-20 h-20 rounded-2xl border border-white/10 rotate-12 animate-float-slow opacity-30" />
        <div className="absolute bottom-28 right-[20%] w-10 h-10 rounded-full border border-cyan-400/20 animate-float opacity-40" style={{ animationDelay: "1s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                R&D Apps in Beta — Join Now
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                Innovation.{" "}
                <span className="gradient-text-cyan">Technology.</span>{" "}
                <span className="gradient-text-gold">Impact.</span>
              </h1>

              <p className="text-lg sm:text-xl text-indigo-200/80 mb-10 max-w-xl leading-relaxed">
                Mirigraphix builds innovative applications that solve real-world problems
                across the U.S. and Africa — backed by world-class training and enterprise hardware.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/rnd"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl shadow-xl shadow-amber-700/30 hover:from-amber-300 hover:to-orange-400 transition-all duration-300 text-sm">
                  Explore Our R&D
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/trainings"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm backdrop-blur-sm">
                  View Trainings
                </Link>
              </div>
            </div>

            {/* Floating cards */}
            <div className="hidden lg:flex flex-col gap-4 animate-slide-up" style={{ animationDelay: "0.15s" }}>
              {/* R&D — featured */}
              <div className="group p-5 rounded-2xl bg-white/8 border border-amber-400/20 hover:bg-white/12 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-gray-900 font-extrabold text-xs">
                      R&D
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Research & Development</p>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Core</span>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                </div>
                <p className="text-indigo-200/70 text-xs leading-relaxed">
                  AI-driven applications solving real-world problems across the U.S. and Africa.
                </p>
                <div className="flex gap-2 mt-3">
                  {["FinTech", "AI Jobs", "Legal Tech"].map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/20 text-amber-300 bg-amber-400/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Training */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">Training</p>
                </div>
                <p className="text-indigo-300/60 text-xs">Cybersecurity, AI, Networking, Full-Stack</p>
              </div>

              {/* Hardware */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">Hardware</p>
                </div>
                <p className="text-indigo-300/60 text-xs">Enterprise Mac solutions & accessories</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* ──────────── TRUSTED BY ──────────── */}
      <section className="pt-14 pb-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-7">
            Trusted by leading organizations
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
            <div className="flex animate-marquee gap-14 w-max">
              {trustedBy.map((name, i) => (
                <span key={i} className="text-sm font-semibold text-gray-400 hover:text-primary transition-colors duration-300 whitespace-nowrap cursor-default select-none">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── STATS ──────────── */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/60 border border-indigo-100/60 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={stat.label} className="animate-slide-up" style={{ animationDelay: `${i * 0.08}s` }}>
                  <p className={`text-3xl sm:text-4xl font-extrabold ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1.5 font-medium uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── CORE OFFERINGS ──────────── */}
      <section className="py-24 relative">
        <div className="glow-orb absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-indigo-100 opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              R&D at the <span className="gradient-text">Core</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
              We build technology that solves real problems — supported by training and enterprise hardware.
            </p>
          </div>

          {/* R&D — full width featured */}
          <Link href="/rnd"
            className="group relative block bg-white rounded-3xl border border-amber-200/60 overflow-hidden card-hover mb-6">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(ellipse at top left, rgba(245,158,11,0.06) 0%, transparent 65%)" }} />
            <div className="p-8 lg:p-10 relative">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 block">Core Business</span>
                      <h3 className="text-2xl font-extrabold text-gray-900">Research & Development</h3>
                    </div>
                  </div>
                  <p className="text-gray-500 leading-relaxed max-w-2xl">
                    We build AI-powered applications that solve real-world problems across continents. Our R&D is the heart of everything we do.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
                  {[
                    { name: "FinTech", color: "text-amber-600 bg-amber-50 border-amber-200" },
                    { name: "AI Jobs", color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
                    { name: "Legal Tech", color: "text-cyan-600 bg-cyan-50 border-cyan-200" },
                  ].map((app) => (
                    <span key={app.name} className={`px-3 py-1.5 text-xs font-bold rounded-full border ${app.color}`}>
                      {app.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-amber-600 group-hover:gap-3 transition-all duration-300">
                Explore our projects →
              </div>
            </div>
          </Link>

          {/* Training + Hardware */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                href: "/trainings",
                gradient: "from-violet-600 to-indigo-600",
                borderColor: "border-indigo-100",
                topBar: "from-violet-500 to-indigo-600",
                title: "Professional Training",
                desc: "Industry-leading courses in cybersecurity, AI & ML, networking, and full-stack development.",
                tags: ["Cybersecurity", "AI/ML", "Networking", "Full-Stack"],
                tagColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
                cta: "Explore courses",
                ctaColor: "text-indigo-600",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                href: "/hardware",
                gradient: "from-cyan-500 to-sky-600",
                borderColor: "border-cyan-100",
                topBar: "from-cyan-500 to-sky-600",
                title: "Enterprise Hardware",
                desc: "Mac wholesale, custom configurations, accessories, and enterprise bulk solutions.",
                tags: ["MacBooks", "iMacs", "iPads", "Accessories"],
                tagColor: "text-cyan-600 bg-cyan-50 border-cyan-100",
                cta: "Shop hardware",
                ctaColor: "text-cyan-600",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className={`group relative bg-white rounded-3xl p-8 border ${item.borderColor} card-hover overflow-hidden`}>
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.topBar} rounded-t-3xl`} />
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((t) => (
                    <span key={t} className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${item.tagColor}`}>{t}</span>
                  ))}
                </div>
                <div className={`flex items-center gap-1.5 text-sm font-bold ${item.ctaColor} group-hover:gap-3 transition-all duration-300`}>
                  {item.cta} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── TESTIMONIALS ──────────── */}
      <section className="py-20 bg-gradient-to-b from-[#f0f0ff]/60 to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
              What People Say
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-indigo-100/60 shadow-sm hover:shadow-md hover:shadow-indigo-100/40 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials" className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
              Read more testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────── CTA ──────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0818] via-[#1a0e40] to-[#0f1a30]" />
        <div className="glow-orb absolute top-0 left-1/4 w-[500px] h-[300px] bg-violet-700 opacity-25" />
        <div className="glow-orb absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-600 opacity-20" />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Ready to get{" "}
            <span className="gradient-text-gold">started?</span>
          </h2>
          <p className="text-indigo-200/80 mb-12 text-xl leading-relaxed max-w-xl mx-auto">
            Whether you want to join our R&D beta program, enroll in training, or need enterprise hardware — we are here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rnd"
              className="btn-shimmer px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl shadow-xl shadow-amber-700/30 hover:from-amber-300 hover:to-orange-400 transition-all text-sm">
              Explore R&D Projects
            </Link>
            <Link href="/contact"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm backdrop-blur-sm">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
