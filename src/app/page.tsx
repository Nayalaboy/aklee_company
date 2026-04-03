import Link from "next/link";

const coreOfferings = [
  {
    title: "Trainings",
    description:
      "Industry-leading courses in cybersecurity, AI & ML, networking, and full-stack development with certification paths.",
    href: "/trainings",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Hardware",
    description:
      "Mac wholesale, custom configurations, accessories, and enterprise bulk solutions with transparent pricing.",
    href: "/hardware",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Training. Technology.{" "}
              <span className="text-accent">Innovation.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl">
              Aklee Company empowers businesses and individuals with world-class
              training, enterprise hardware solutions, and cutting-edge R&D —
              bridging the U.S. and Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/trainings"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent-dark transition"
              >
                Explore Trainings
              </Link>
              <Link
                href="/hardware"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition"
              >
                Shop Hardware
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-300 text-blue-100 font-semibold rounded-lg hover:bg-blue-300 hover:text-primary-dark transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Three pillars that drive our mission to empower communities through technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreOfferings.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition group"
              >
                <div className="text-primary mb-4 group-hover:text-primary-dark transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Whether you need professional training, enterprise hardware, or a technology partner — we are here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trainings"
              className="px-8 py-3 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent-dark transition"
            >
              Browse Courses
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
