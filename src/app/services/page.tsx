import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Services & Consulting" };

const services = [
  {
    title: "Cybersecurity Consulting",
    description: "Comprehensive security audits, penetration testing, and compliance assessments to protect your organization.",
    features: ["Vulnerability Assessment", "Penetration Testing", "Security Architecture Review", "Compliance Audits (NIST, ISO, SOC 2)"],
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    gradient: "from-red-500/10 to-orange-500/5",
    iconColor: "text-red-500",
  },
  {
    title: "AI & Data Strategy",
    description: "Help your organization leverage AI and machine learning to automate processes and gain insights.",
    features: ["AI Readiness Assessment", "Data Pipeline Design", "ML Model Development", "AI Integration Strategy"],
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    gradient: "from-violet-500/10 to-purple-500/5",
    iconColor: "text-violet-500",
  },
  {
    title: "Network Design & Implementation",
    description: "End-to-end network infrastructure design, deployment, and optimization for enterprises.",
    features: ["Network Architecture Design", "Cloud Migration", "SD-WAN Implementation", "Performance Optimization"],
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    gradient: "from-cyan-500/10 to-blue-500/5",
    iconColor: "text-cyan-500",
  },
  {
    title: "Custom Software Development",
    description: "Full-stack application development tailored to your business needs, from MVP to production.",
    features: ["Web & Mobile Applications", "API Development", "Database Design", "DevOps & CI/CD Setup"],
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
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
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
            Beyond training and hardware, we offer expert consulting services to help your organization thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services */}
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Need a Custom Solution?</h2>
          <p className="text-warm-gray-500 mb-8 text-lg leading-relaxed">Every organization is unique. Let us design a tailored engagement that fits your goals and budget.</p>
          <Link href="/contact" className="btn-primary inline-flex">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
