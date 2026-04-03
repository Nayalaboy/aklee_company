import Link from "next/link";

export const metadata = { title: "Services & Consulting | Aklee Company" };

const services = [
  {
    title: "Cybersecurity Consulting",
    description: "Comprehensive security audits, penetration testing, and compliance assessments to protect your organization.",
    features: ["Vulnerability Assessment", "Penetration Testing", "Security Architecture Review", "Compliance Audits (NIST, ISO, SOC 2)"],
    price: "Starting at $5,000",
  },
  {
    title: "AI & Data Strategy",
    description: "Help your organization leverage AI and machine learning to automate processes and gain insights.",
    features: ["AI Readiness Assessment", "Data Pipeline Design", "ML Model Development", "AI Integration Strategy"],
    price: "Starting at $7,500",
  },
  {
    title: "Network Design & Implementation",
    description: "End-to-end network infrastructure design, deployment, and optimization for enterprises.",
    features: ["Network Architecture Design", "Cloud Migration", "SD-WAN Implementation", "Performance Optimization"],
    price: "Starting at $4,000",
  },
  {
    title: "Custom Software Development",
    description: "Full-stack application development tailored to your business needs, from MVP to production.",
    features: ["Web & Mobile Applications", "API Development", "Database Design", "DevOps & CI/CD Setup"],
    price: "Starting at $10,000",
  },
  {
    title: "IT Infrastructure for Africa",
    description: "Specialized consulting for organizations expanding or operating in Africa, including hardware procurement and network setup.",
    features: ["Hardware Procurement & Logistics", "Network Setup & Configuration", "Staff Training Programs", "Ongoing Support & Maintenance"],
    price: "Custom Pricing",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Services & Consulting</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Beyond training and hardware, we offer expert consulting services to help your organization thrive in the digital age.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h2>
                  <p className="text-gray-600 mb-4">{s.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-bold text-primary mb-3">{s.price}</p>
                  <Link
                    href="/contact"
                    className="inline-block px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-6">Every organization is unique. Let us design a tailored engagement that fits your goals and budget.</p>
          <Link href="/contact" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
