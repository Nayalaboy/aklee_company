import Link from "next/link";

export const metadata = { title: "Services & Consulting" };

const services = [
  {
    title: "Cybersecurity Consulting",
    description: "Comprehensive security audits, penetration testing, and compliance assessments to protect your organization.",
    features: ["Vulnerability Assessment", "Penetration Testing", "Security Architecture Review", "Compliance Audits (NIST, ISO, SOC 2)"],
  },
  {
    title: "AI & Data Strategy",
    description: "Help your organization leverage AI and machine learning to automate processes and gain insights.",
    features: ["AI Readiness Assessment", "Data Pipeline Design", "ML Model Development", "AI Integration Strategy"],
  },
  {
    title: "Network Design & Implementation",
    description: "End-to-end network infrastructure design, deployment, and optimization for enterprises.",
    features: ["Network Architecture Design", "Cloud Migration", "SD-WAN Implementation", "Performance Optimization"],
  },
  {
    title: "Custom Software Development",
    description: "Full-stack application development tailored to your business needs, from MVP to production.",
    features: ["Web & Mobile Applications", "API Development", "Database Design", "DevOps & CI/CD Setup"],
  },
  {
    title: "IT Infrastructure for Africa",
    description: "Specialized consulting for organizations expanding or operating in Africa, including hardware procurement and network setup.",
    features: ["Hardware Procurement & Logistics", "Network Setup & Configuration", "Staff Training Programs", "Ongoing Support & Maintenance"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">Consulting</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Services & Consulting</h1>
          <p className="text-blue-200/90 text-lg max-w-2xl leading-relaxed">
            Beyond training and hardware, we offer expert consulting services to help your organization thrive in the digital age.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-100 p-8 card-hover bg-white">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h2>
                  <p className="text-gray-500 mb-5 text-sm leading-relaxed">{s.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/contact"
                    className="inline-block px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Need a Custom Solution?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Every organization is unique. Let us design a tailored engagement that fits your goals and budget.</p>
          <Link href="/contact" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm text-sm">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
