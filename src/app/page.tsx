import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "3", label: "R&D Apps in Progress", color: "text-primary" },
  { value: "2", label: "Continents Served", color: "text-teal" },
  { value: "500+", label: "Students Trained", color: "text-gold" },
  { value: "50+", label: "Enterprise Clients", color: "text-emerald" },
];

const trustedBy = [
  "CompTIA", "Cisco", "AWS", "University of Lagos", "EduAfrica Foundation", "TechHub Lagos",
  "CompTIA", "Cisco", "AWS", "University of Lagos", "EduAfrica Foundation", "TechHub Lagos",
];

export default function Home() {
  return (
    <>
      {/* Hero — dark warm section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-gradient">
        <Image src="/images/hero-tech.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />

        {/* Warm color blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal/8 rounded-full blur-[120px] animate-blob-delay" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gold/6 rounded-full blur-[100px] animate-blob-delay-2" />

        <div className="absolute inset-0 grain" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-light bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                R&D Apps in Beta — Join Now
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6">
                Innovation.{" "}
                <span className="gradient-text-warm">Technology.</span>{" "}
                <br className="hidden sm:block" />
                <span className="text-white/60">Impact.</span>
              </h1>

              <p className="text-lg text-white/50 mb-10 max-w-lg leading-relaxed">
                Mirigraphix builds innovative applications that solve real-world problems across
                the U.S. and Africa — backed by world-class training and enterprise hardware.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/rnd" className="btn-primary btn-shimmer text-base px-8 py-4">
                  Explore Our R&D
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/trainings" className="inline-flex items-center justify-center gap-2 text-base font-bold px-8 py-4 rounded-full border-2 border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                  View Trainings
                </Link>
              </div>

              {/* Mobile pills */}
              <div className="flex lg:hidden flex-wrap gap-2 mt-8">
                {[
                  { label: "R&D", color: "bg-teal/15 text-teal-light border-teal/25" },
                  { label: "Training", color: "bg-primary/15 text-primary-light border-primary/25" },
                  { label: "Hardware", color: "bg-gold/15 text-gold-light border-gold/25" },
                ].map((pill) => (
                  <span key={pill.label} className={`px-3 py-1.5 text-xs font-bold rounded-full border ${pill.color}`}>
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Floating cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4 animate-slide-up-2">
              {/* R&D - featured */}
              <div className="col-span-2 rounded-3xl bg-white/[0.06] border border-white/10 p-7 backdrop-blur-sm animate-float">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-bold text-lg">Research & Development</h3>
                      <span className="px-2 py-0.5 bg-teal/15 text-teal-light text-[10px] font-bold rounded-full border border-teal/25">Core</span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">AI-driven applications solving real-world problems across the U.S. and Africa.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white/[0.04] border border-white/8 p-6 backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Training</h3>
                <p className="text-white/30 text-sm">Cybersecurity, AI, Networking, Full-Stack</p>
              </div>

              <div className="rounded-3xl bg-white/[0.04] border border-white/8 p-6 backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Hardware</h3>
                <p className="text-white/30 text-sm">Enterprise Mac solutions & accessories</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Trusted By */}
      <section className="py-10 border-b border-dark/5">
        <p className="text-center text-[11px] font-bold text-warm-gray-400 uppercase tracking-widest mb-6">
          Trusted by leading organizations
        </p>
        <div className="marquee-container">
          <div className="marquee-track">
            {trustedBy.map((name, i) => (
              <span key={`${name}-${i}`} className="text-sm font-bold text-warm-gray-300 whitespace-nowrap hover:text-primary transition-colors duration-200 select-none">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="bento-card text-center group">
                <p className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-xs text-warm-gray-500 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-24 relative overflow-hidden bg-background-alt">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-4 inline-flex">What We Do</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight mt-4">
              R&D at the{" "}
              <span className="gradient-text">Core</span>
            </h2>
            <p className="mt-4 text-warm-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We build technology that solves real problems — supported by training and enterprise hardware.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-5">
            {/* R&D — featured full width */}
            <Link href="/rnd" className="md:col-span-12 group bento-card border-2 border-teal/10 hover:border-teal/25">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <span className="px-2.5 py-1 bg-teal/8 text-teal text-[11px] font-bold rounded-full border border-teal/15 uppercase tracking-wider">Core Business</span>
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-teal transition-colors">Research & Development</h3>
                  <p className="text-warm-gray-500 leading-relaxed mb-6">
                    We build AI-powered applications that solve real-world problems across continents. Our R&D is the heart of everything we do.
                  </p>
                  <span className="btn-ghost text-teal">
                    Explore our projects
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: "FinTech", status: "Beta", color: "bg-gold/10 text-gold border-gold/20" },
                    { name: "AI Jobs", status: "In Dev", color: "bg-primary/10 text-primary border-primary/20" },
                    { name: "Legal Tech", status: "Coming Soon", color: "bg-teal/10 text-teal border-teal/20" },
                  ].map((app) => (
                    <div key={app.name} className="rounded-2xl bg-background p-4 text-center border border-dark/5">
                      <p className="text-sm font-bold text-dark mb-2">{app.name}</p>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${app.color}`}>{app.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>

            {/* Training */}
            <Link href="/trainings" className="md:col-span-6 group bento-card">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors">Professional Training</h3>
              <p className="text-warm-gray-500 text-sm leading-relaxed mb-6">
                Industry-leading courses in cybersecurity, AI & ML, networking, and full-stack development.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Cybersecurity", "AI/ML", "Networking", "Full-Stack"].map(t => (
                  <span key={t} className="px-2.5 py-1 bg-primary/5 text-warm-gray-600 text-xs font-semibold rounded-full">{t}</span>
                ))}
              </div>
              <span className="btn-ghost">
                Explore courses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>

            {/* Hardware */}
            <Link href="/hardware" className="md:col-span-6 group bento-card">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-gold transition-colors">Enterprise Hardware</h3>
              <p className="text-warm-gray-500 text-sm leading-relaxed mb-6">
                Mac wholesale, custom configurations, accessories, and enterprise bulk solutions.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["MacBooks", "iMacs", "iPads", "Accessories"].map(t => (
                  <span key={t} className="px-2.5 py-1 bg-gold/5 text-warm-gray-600 text-xs font-semibold rounded-full">{t}</span>
                ))}
              </div>
              <span className="btn-ghost text-gold">
                Shop hardware
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4 inline-flex">What People Say</span>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { text: "We partnered with Mirigraphix on their money-transfer R&D project. Their engineering team is world-class and their cross-border expertise is exactly what we needed.", name: "David R.", role: "CTO, GlobalPay Solutions" },
              { text: "Mirigraphix helped us set up IT infrastructure across three African countries. Their team understood the local challenges and delivered on time and on budget.", name: "Michael B.", role: "Founder, EduAfrica" },
            ].map((t) => (
              <div key={t.name} className="bento-card">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-warm-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{t.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark">{t.name}</p>
                    <p className="text-xs text-warm-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials" className="btn-ghost">
              Read more testimonials
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — dark warm section */}
      <section className="relative py-32 overflow-hidden hero-gradient">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 grain" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
            Ready to get{" "}
            <span className="gradient-text-warm">started?</span>
          </h2>
          <p className="text-white/50 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
            Whether you want to join our R&D beta program, enroll in training, or need enterprise hardware — we are here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/rnd" className="btn-primary btn-shimmer text-base px-8 py-4">
              Explore R&D Projects
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-base font-bold px-8 py-4 rounded-full border-2 border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
