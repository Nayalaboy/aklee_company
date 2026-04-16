import Link from "next/link";

export const metadata = { title: "About Us" };

const values = [
  {
    title: "Innovation",
    description: "We push boundaries with cutting-edge technology and creative solutions.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Empowerment",
    description: "We equip individuals and organizations with skills and tools to succeed.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "Transparency and honesty guide every decision we make.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Global Impact",
    description: "We bridge the U.S. and Africa, creating opportunities across borders.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">About Mirigraphix Company</h1>
          <p className="text-blue-200/90 text-lg max-w-2xl leading-relaxed">
            A technology company focused on training, hardware, and R&D — empowering communities in the United States and Africa.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Our Mission</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Exist</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mirigraphix Company was founded with a clear mission: to democratize access to technology education, provide reliable hardware solutions, and develop innovative applications that solve real-world problems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Operating across two continents, we understand the unique challenges and opportunities that exist in both the U.S. and African markets. Our programs are designed to bridge the digital divide and create lasting impact.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Our Vision</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Where We&apos;re Headed</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To become the leading technology company connecting the U.S. and Africa through education, enterprise solutions, and innovation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where geography is not a barrier to opportunity — where anyone, anywhere, can access world-class training, reliable technology, and tools that improve their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">What Drives Us</p>
            <h2 className="text-2xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 card-hover">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4">
                  {v.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Our Reach</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Presence</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            With operations in the United States and growing partnerships across Africa, we deliver localized solutions with global standards.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">United States</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Headquarters, training centers, hardware distribution, and R&D labs.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Africa</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Partnerships, training programs, hardware supply, and app deployments.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block mt-10 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
