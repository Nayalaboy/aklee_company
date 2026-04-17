import Link from "next/link";
import Image from "next/image";

const rndApps = [
  {
    name: "TransferNow",
    tagline: "Money Transfer App",
    status: "Beta",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    description: "Send money between the U.S. and Africa instantly — under 2% fees, blockchain-powered, mobile-money ready.",
    impact: "5–10% fees → under 2%",
    impactLabel: "Fee reduction",
    href: "/rnd",
    image: "/images/rnd-money-transfer.png",
    gradient: "from-amber-500 to-orange-600",
    accentColor: "amber",
    icon: "💸",
  },
  {
    name: "HireLink",
    tagline: "AI Job Application App",
    status: "In Development",
    statusColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    description: "AI-matched jobs across the U.S. and Africa. Smart resume optimization, interview scheduling, and verified credentials.",
    impact: "AI-powered",
    impactLabel: "Cross-border matching",
    href: "/rnd",
    image: "/images/rnd-job-app.png",
    gradient: "from-cyan-500 to-sky-600",
    accentColor: "cyan",
    icon: "🤝",
  },
  {
    name: "ImmigPath",
    tagline: "Immigration Assistant App",
    status: "Research Phase",
    statusColor: "text-violet-400 bg-violet-400/10 border-violet-400/30",
    description: "AI-guided immigration forms, real-time case tracking, and document checklists — cutting costs and errors by 70%.",
    impact: "70% error reduction",
    impactLabel: "Cost & error savings",
    href: "/rnd",
    image: "/images/rnd-immigration.png",
    gradient: "from-violet-500 to-purple-600",
    accentColor: "violet",
    icon: "🛂",
  },
];

const pillars = [
  {
    title: "Professional Training",
    description: "Cybersecurity, AI & ML, networking, and full-stack — hands-on labs and certification paths.",
    href: "/trainings",
    badge: "CompTIA · Cisco · AWS",
    gradient: "from-indigo-500 to-violet-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Enterprise Hardware",
    description: "Mac wholesale, custom configs, and enterprise bulk solutions — transparent pricing, global shipping.",
    href: "/hardware",
    badge: "MacBook · iMac · iPad",
    gradient: "from-cyan-500 to-sky-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Students Trained", icon: "🎓" },
  { value: "50+",  label: "Enterprise Clients", icon: "🏢" },
  { value: "3",    label: "Apps in Active R&D", icon: "🚀" },
  { value: "2",    label: "Continents Served", icon: "🌍" },
];

const trustedBy = [
  "CompTIA", "Cisco", "AWS", "University of Lagos",
  "EduAfrica Foundation", "TechHub Lagos",
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
        <div className="absolute top-20 right-[8%] w-20 h-20 rounded-2xl border border-white/10 rotate-12 animate-float-slow opacity-30" />
        <div className="absolute bottom-32 right-[22%] w-12 h-12 rounded-full border border-cyan-400/20 animate-float opacity-40" style={{ animationDelay: "1s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wide mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Training · Hardware · R&D Innovation
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                Technology that{" "}
                <span className="gradient-text-cyan">bridges</span>{" "}
                <span className="gradient-text-gold">continents.</span>
              </h1>
              <p className="text-lg sm:text-xl text-indigo-200/80 mb-10 max-w-xl leading-relaxed">
                Mirigraphix builds transformative apps, delivers world-class tech training,
                and supplies enterprise hardware — connecting the U.S. and Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/rnd"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-amber-700/30 text-sm">
                  See Our Apps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/trainings"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm backdrop-blur-sm">
                  Explore Trainings
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-indigo-300 font-semibold rounded-xl hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">
                  Contact Us
                </Link>
              </div>
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

            {/* Hero image */}
            <div className="hidden lg:block relative animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                <Image
                  src="/images/hero-bridge.png"
                  alt="Digital bridge between US and Africa"
                  width={700}
                  height={394}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Floating stat card */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <p className="text-white font-bold text-sm">US ↔ Africa Bridge</p>
                      <p className="text-white/60 text-xs">3 apps in active development</p>
                    </div>
                    <div className="ml-auto flex gap-1.5">
                      {["bg-amber-400","bg-cyan-400","bg-violet-400"].map((c,i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${c} animate-pulse`} style={{ animationDelay: `${i*0.3}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* ──────────── STATS ──────────── */}
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

      {/* ──────────── R&D SPOTLIGHT ──────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="glow-orb absolute top-20 right-0 w-[500px] h-[400px] bg-violet-100 opacity-70 pointer-events-none" />
        <div className="glow-orb absolute bottom-0 left-0 w-[400px] h-[300px] bg-cyan-100 opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Our Core Focus
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Apps We're{" "}
                <span className="gradient-text">Building</span>
              </h2>
              <p className="mt-4 text-gray-500 max-w-xl text-lg leading-relaxed">
                Three bold products solving real problems for diaspora communities and cross-border professionals.
              </p>
            </div>
            <Link href="/rnd"
              className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-300/30 hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 text-sm whitespace-nowrap flex-shrink-0">
              Full R&D Details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* App cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {rndApps.map((app, i) => (
              <Link
                key={app.name}
                href={app.href}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 card-hover"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* App image */}
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${app.statusColor} backdrop-blur-sm`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {app.status}
                    </span>
                  </div>
                  {/* App name over image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{app.icon}</span>
                      <p className="text-white font-extrabold text-xl tracking-tight">{app.name}</p>
                    </div>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">{app.tagline}</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{app.description}</p>

                  {/* Impact metric */}
                  <div className={`flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r ${app.gradient} bg-opacity-10`}
                    style={{ background: `linear-gradient(135deg, ${app.accentColor === 'amber' ? 'rgba(245,158,11,0.08)' : app.accentColor === 'cyan' ? 'rgba(6,182,212,0.08)' : 'rgba(139,92,246,0.08)'}, transparent)` }}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-white text-lg flex-shrink-0`}>
                      {app.icon}
                    </div>
                    <div>
                      <p className="font-extrabold text-gray-900 text-sm">{app.impact}</p>
                      <p className="text-xs text-gray-400 font-medium">{app.impactLabel}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-indigo-600 group-hover:gap-3 transition-all duration-300">
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

      {/* ──────────── TRUSTED BY ──────────── */}
      <section className="py-10 overflow-hidden bg-gradient-to-b from-transparent to-[#f0f0ff]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Trusted by leading organizations
          </p>
          <div className="relative">
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

      {/* ──────────── OTHER SERVICES ──────────── */}
      <section className="py-24 bg-gradient-to-b from-[#f0f0ff]/60 to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
              Also From Mirigraphix
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Training &{" "}
              <span className="gradient-text">Hardware</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((item) => (
              <Link key={item.title} href={item.href}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 card-hover overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-3xl`} />
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">{item.badge}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-indigo-600 group-hover:gap-3 transition-all duration-300">
                      Explore
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Early Access Now Open
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Be Part of the{" "}
            <span className="gradient-text-gold">Next Wave.</span>
          </h2>
          <p className="text-indigo-200/80 mb-12 text-xl leading-relaxed max-w-2xl mx-auto">
            Join the beta — test our apps, shape the product, and be the first to experience a smarter way to transfer money, find jobs, and navigate immigration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="btn-shimmer px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl hover:from-amber-300 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-amber-700/30 text-sm">
              Join the Beta →
            </Link>
            <Link href="/rnd"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm backdrop-blur-sm">
              Explore All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
