import Link from "next/link";

const coreOfferings = [
  {
    title: "Professional Training",
    description:
      "Industry-leading courses in cybersecurity, AI & ML, networking, and full-stack development — with hands-on labs and globally recognized certifications.",
    href: "/trainings",
    badge: "CompTIA · Cisco · AWS",
    gradient: "from-violet-600 to-indigo-600",
    glow: "rgba(99,60,220,0.35)",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Enterprise Hardware",
    description:
      "Mac wholesale, custom configurations, and enterprise bulk solutions — transparent pricing, white-glove service, and global shipping to your doorstep.",
    href: "/hardware",
    badge: "MacBook · iMac · iPad",
    gradient: "from-cyan-500 to-sky-600",
    glow: "rgba(6,182,212,0.3)",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Research & Development",
    description:
      "Innovative fintech, workforce, and immigration apps solving real problems across continents — bridging opportunity between the U.S. and Africa.",
    href: "/rnd",
    badge: "Fintech · WorkTech · ImmigTech",
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.3)",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Students Trained", icon: "🎓" },
  { value: "50+",  label: "Enterprise Clients", icon: "🏢" },
  { value: "3",    label: "R&D Apps in Progress", icon: "🚀" },
  { value: "2",    label: "Continents Served", icon: "🌍" },
];

const trustedBy = [
  "CompTIA", "Cisco", "AWS", "University of Lagos",
  "EduAfrica Foundation", "TechHub Lagos",
];

const features = [
  {
    icon: "🛡️",
    title: "Certified Instructors",
    desc: "Every course is taught by industry-certified experts with real-world experience.",
  },
  {
    icon: "🌐",
    title: "US & Africa Reach",
    desc: "Headquartered in the US, operating across West Africa — one global network.",
  },
  {
    icon: "⚡",
    title: "Hands-On Learning",
    desc: "Labs, simulations, and live projects — not just slides.",
  },
  {
    icon: "📦",
    title: "Enterprise Ready",
    desc: "Bulk pricing, custom configs, and dedicated account management.",
  },
  {
    icon: "🔒",
    title: "Trusted & Secure",
    desc: "Vetted hardware supply chain and secure, compliant training platforms.",
  },
  {
    icon: "💬",
    title: "24/7 Support",
    desc: "Our team is always on hand — before, during, and after your engagement.",
  },
];

export default function Home() {
  return (
    <>
      {/* ──────────────── HERO ──────────────── */}
      <section className="hero-gradient text-white relative overflow-hidden min-h-[92vh] flex items-center">
        {/* Glow orbs */}
        <div className="glow-orb absolute -top-24 -left-24 w-[500px] h-[500px] bg-violet-600 opacity-20 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500 opacity-15 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-800 opacity-20" />

        {/* Fine grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")" }}
        />

        {/* Floating decorative shapes */}
        <div className="absolute top-20 right-[10%] w-24 h-24 rounded-2xl border border-white/10 rotate-12 animate-float-slow opacity-40" />
        <div className="absolute bottom-32 right-[20%] w-14 h-14 rounded-full border border-cyan-400/20 animate-float opacity-50" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[40%] right-[5%] w-8 h-8 rounded-lg bg-amber-400/20 rotate-45 animate-float-slow opacity-60" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="animate-slide-up">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wide mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Training · Hardware · Innovation — US & Africa
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                Empowering the{" "}
                <span className="gradient-text-cyan relative">
                  Next Era
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/60 to-transparent" />
                </span>
                {" "}of{" "}
                <span className="gradient-text-gold">Technology.</span>
              </h1>

              <p className="text-lg sm:text-xl text-indigo-200/80 mb-10 max-w-xl leading-relaxed">
                Mirigraphix delivers world-class tech training, enterprise Mac hardware,
                and bold R&D solutions — connecting talent and opportunity across continents.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/trainings"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-violet-700/40 text-sm"
                >
                  Explore Trainings
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/hardware"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm backdrop-blur-sm"
                >
                  Shop Hardware
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-indigo-300 font-semibold rounded-xl hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
                >
                  Contact Us
                </Link>
              </div>

              {/* Social proof mini */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["#4f46e5","#06b6d4","#f59e0b","#10b981"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1a1040] flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                      {["A","B","C","D"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-indigo-300">
                  <span className="text-white font-semibold">500+ professionals</span> trained across 2 continents
                </p>
              </div>
            </div>

            {/* Right: Feature cards float */}
            <div className="hidden lg:flex flex-col gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {coreOfferings.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm mb-0.5">{item.title}</p>
                    <p className="text-xs text-indigo-300/80 truncate">{item.badge}</p>
                  </div>
                  <svg className="w-4 h-4 text-indigo-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* ──────────────── STATS ──────────────── */}
      <section className="relative -mt-12 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/60 border border-indigo-100/60 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={stat.label} className="animate-slide-up" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <p className="text-3xl sm:text-4xl font-extrabold gradient-text">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1.5 font-medium uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── TRUSTED BY ──────────────── */}
      <section className="pt-20 pb-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Trusted by leading organizations
          </p>
          <div className="relative">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
            <div className="flex animate-marquee gap-16 w-max">
              {[...trustedBy, ...trustedBy].map((name, i) => (
                <span key={i} className="text-sm font-semibold text-gray-400 hover:text-primary transition-colors duration-300 whitespace-nowrap cursor-default select-none">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── CORE OFFERINGS ──────────────── */}
      <section className="py-28 relative">
        {/* Subtle bg accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-orb absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-100 opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Three Pillars of{" "}
              <span className="gradient-text">Impact</span>
            </h2>
            <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg">
              We deliver technology solutions that empower communities across continents —
              from professional development to enterprise infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {coreOfferings.map((item, i) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100/80 card-hover overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-3xl`} />

                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${item.glow} 0%, transparent 65%)` }} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>

                  {/* Badge */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                    {item.badge}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>

                  <div className="mt-7 flex items-center gap-1.5 text-sm font-bold text-indigo-600 group-hover:gap-3 transition-all duration-300">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── WHY CHOOSE US ──────────────── */}
      <section className="py-24 bg-gradient-to-b from-[#f0f0ff] to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
              Why Mirigraphix
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Built for{" "}
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-lg">
              Everything we do is designed to deliver results — for you, your team, and your organization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100/60"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── CTA ──────────────── */}
      <section className="py-28 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0818] via-[#1a0e40] to-[#0f1a30]" />
        <div className="glow-orb absolute top-0 left-1/4 w-[500px] h-[300px] bg-violet-700 opacity-25" />
        <div className="glow-orb absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-600 opacity-20" />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")" }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Let&apos;s Build Something Great
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to <span className="gradient-text-gold">Level Up?</span>
          </h2>
          <p className="text-indigo-200/80 mb-12 text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you need world-class training, enterprise hardware, or a bold tech partner —
            Mirigraphix is ready to serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trainings"
              className="btn-shimmer px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-amber-700/30 text-sm"
            >
              Browse Courses
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm backdrop-blur-sm"
            >
              Talk to Our Team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
