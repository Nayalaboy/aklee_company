import Link from "next/link";

const coreOfferings = [
  {
    title: "Professional Training",
    description:
      "Industry-leading courses in cybersecurity, AI & ML, networking, and full-stack development — with hands-on labs and certification paths.",
    href: "/trainings",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Enterprise Hardware",
    description:
      "Mac wholesale, custom configurations, accessories, and enterprise bulk solutions — transparent pricing, global shipping.",
    href: "/hardware",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Research & Development",
    description:
      "Innovative apps for money transfer, job applications, and immigration — solving real problems across continents.",
    href: "/rnd",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "3", label: "R&D Apps in Progress" },
  { value: "2", label: "Continents Served" },
];

const trustedBy = [
  "CompTIA",
  "Cisco",
  "AWS",
  "University of Lagos",
  "EduAfrica Foundation",
  "TechHub Lagos",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 relative">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Training. Technology.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400">
                Innovation.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-200/90 mb-10 max-w-2xl leading-relaxed">
              Mirigraphix Company empowers businesses and individuals with world-class
              training, enterprise hardware solutions, and cutting-edge R&D —
              bridging the U.S. and Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/trainings"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-black/10 text-sm"
              >
                Explore Trainings
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/hardware"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-sm"
              >
                Shop Hardware
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-blue-200 font-semibold rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Stats */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`animate-slide-up-delay-${i > 0 ? i : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
                  <p className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1.5 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-gray-400/80 hover:text-gray-600 transition-colors duration-200"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Three Pillars of Impact
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We deliver technology solutions that empower communities across continents — from professional development to enterprise infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {coreOfferings.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white rounded-2xl p-8 border border-gray-100 card-hover"
              >
                <div className="w-11 h-11 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2.5">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                <div className="mt-5 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
            Whether you need professional training, enterprise hardware, or a technology partner — we are here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/trainings"
              className="px-7 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-black/10 text-sm"
            >
              Browse Courses
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 text-sm"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
