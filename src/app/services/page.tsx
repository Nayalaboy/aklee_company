import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Services & Consulting" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const services = [
  {
    title: "Cybersecurity Consulting",
    description: "Comprehensive security audits, penetration testing, and compliance assessments to protect your organization.",
    features: ["Vulnerability Assessment", "Penetration Testing", "Security Architecture Review", "Compliance Audits (NIST, ISO, SOC 2)"],
<<<<<<< HEAD
    gradient: "from-red-500 to-orange-500",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    accent: "text-red-600 bg-red-50 border-red-100",
=======
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    gradient: "from-red-500/10 to-orange-500/5",
    iconColor: "text-red-500",
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
  },
  {
    title: "AI & Data Strategy",
    description: "Help your organization leverage AI and machine learning to automate processes and gain competitive insights.",
    features: ["AI Readiness Assessment", "Data Pipeline Design", "ML Model Development", "AI Integration Strategy"],
<<<<<<< HEAD
    gradient: "from-violet-600 to-indigo-600",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    accent: "text-violet-600 bg-violet-50 border-violet-100",
=======
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    gradient: "from-violet-500/10 to-purple-500/5",
    iconColor: "text-violet-500",
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
  },
  {
    title: "Network Design & Implementation",
    description: "End-to-end network infrastructure design, deployment, and optimization for enterprises.",
    features: ["Network Architecture Design", "Cloud Migration", "SD-WAN Implementation", "Performance Optimization"],
<<<<<<< HEAD
    gradient: "from-cyan-500 to-sky-600",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    accent: "text-cyan-600 bg-cyan-50 border-cyan-100",
=======
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    gradient: "from-cyan-500/10 to-blue-500/5",
    iconColor: "text-cyan-500",
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
  },
  {
    title: "Custom Software Development",
    description: "Full-stack application development tailored to your business needs, from MVP to production.",
    features: ["Web & Mobile Applications", "API Development", "Database Design", "DevOps & CI/CD Setup"],
<<<<<<< HEAD
    gradient: "from-emerald-500 to-teal-500",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    title: "IT Infrastructure for Africa",
    description: "Specialized consulting for organizations expanding or operating in Africa, including hardware and network setup.",
    features: ["Hardware Procurement & Logistics", "Network Setup & Configuration", "Staff Training Programs", "Ongoing Support & Maintenance"],
    gradient: "from-amber-400 to-orange-500",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    accent: "text-amber-600 bg-amber-50 border-amber-100",
=======
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    gradient: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-500",
  },
  {
    title: "IT Infrastructure for Africa",
    description: "Specialized consulting for organizations expanding or operating in Africa.",
    features: ["Hardware Procurement & Logistics", "Network Setup & Configuration", "Staff Training Programs", "Ongoing Support & Maintenance"],
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    gradient: "from-accent/10 to-coral/5",
    iconColor: "text-accent",
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We learn about your organization, challenges, and goals in a 30-minute call." },
  { step: "02", title: "Proposal", desc: "We deliver a detailed scope, timeline, and pricing within 48 hours." },
  { step: "03", title: "Engagement", desc: "Our team executes the work with regular check-ins and progress updates." },
  { step: "04", title: "Handoff", desc: "We document everything and train your team for long-term success." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
<<<<<<< HEAD
      <section className="relative overflow-hidden text-white py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060412] via-[#1a0e40] to-[#0c1635]" />
        <div className="glow-orb absolute -top-24 left-0 w-[500px] h-[400px] bg-violet-700 opacity-20 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-500 opacity-15 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRID_BG }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Consulting
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Services &{" "}
            <span className="gradient-text-cyan">Consulting</span>
          </h1>
          <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed">
=======
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-services.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/12 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-emerald/8 rounded-full blur-[100px] animate-blob-delay" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex">Consulting</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Services &{" "}
            <span className="gradient-text-warm">Consulting</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
            Beyond training and hardware, we offer expert consulting services to help your organization thrive in the digital age.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Services */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((s, i) => (
            <div key={s.title} className="group bg-white rounded-3xl border border-indigo-100/60 overflow-hidden card-hover">
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="p-8 lg:p-10 relative">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold text-gray-900">{s.title}</h2>
                        <p className="text-gray-500 text-sm leading-relaxed mt-1">{s.description}</p>
                      </div>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="/contact"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl border transition-all duration-200 ${s.accent} hover:opacity-80`}>
                      Get a Quote →
                    </Link>
                  </div>
=======
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((s) => (
            <div key={s.title} className={`bento-card bg-gradient-to-br ${s.gradient}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-dark/6 flex items-center justify-center flex-shrink-0">
                      <svg className={`w-6 h-6 ${s.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-dark mb-1">{s.title}</h2>
                      <p className="text-warm-gray-500 text-sm leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2.5 sm:ml-16">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-warm-gray-500">
                        <svg className="w-3.5 h-3.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0 md:pt-2">
                  <Link href="/contact" className="btn-primary inline-flex">
                    Get a Quote
                  </Link>
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-[#f0f0ff]/60 to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
              How We Work
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Our <span className="gradient-text">Process</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white rounded-3xl p-7 border border-indigo-100/60 card-hover relative overflow-hidden">
                <div className="text-6xl font-extrabold text-indigo-50 absolute -top-2 -right-2 leading-none select-none">
                  {p.step}
                </div>
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Step {p.step}</p>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
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
        <div className="max-w-2xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Need a Custom{" "}
            <span className="gradient-text-gold">Solution?</span>
          </h2>
          <p className="text-indigo-200/80 mb-10 text-lg leading-relaxed">
            Every organization is unique. Let us design a tailored engagement that fits your goals and budget.
          </p>
          <Link href="/contact"
            className="btn-shimmer inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold rounded-xl shadow-xl shadow-indigo-900/50 text-sm hover:from-violet-500 hover:to-indigo-500 transition-all">
=======
      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Need a Custom Solution?</h2>
          <p className="text-warm-gray-500 mb-8 text-lg leading-relaxed">Every organization is unique. Let us design a tailored engagement that fits your goals and budget.</p>
          <Link href="/contact" className="btn-primary inline-flex">
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
