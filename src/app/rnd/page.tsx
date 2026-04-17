import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Research & Development" };

const projects = [
  {
    name: "Cross-Border Payments",
    status: "Beta",
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
    description: "A faster, more affordable way to move money between the U.S. and Africa.",
    gradient: "from-accent/10 to-coral/5",
  },
  {
    name: "AI-Powered Job Matching",
    status: "In Development",
    statusColor: "bg-primary/5 text-primary border-primary/20",
    description: "Connecting talent with opportunities across borders using intelligent matching.",
    gradient: "from-primary/10 to-violet/5",
  },
  {
    name: "Immigration Assistance",
    status: "Coming Soon",
    statusColor: "bg-violet/5 text-violet border-violet/20",
    description: "Simplifying complex immigration processes with AI-guided tools.",
    gradient: "from-violet/10 to-primary/5",
  },
];

export default function RnDPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-rnd.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-violet/15 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-blob-delay" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan/8 rounded-full blur-[100px] animate-blob-delay-2" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex !text-violet !bg-violet/10 !border-violet/20">Innovation</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Research &{" "}
            <span className="gradient-text">Development</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            We build AI-driven applications that solve real problems for communities across the U.S. and Africa.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Projects</span>
            <h2 className="text-3xl font-bold text-dark mt-4">What We&apos;re Building</h2>
            <p className="text-warm-gray-500 mt-3 max-w-2xl leading-relaxed">
              Our product pipeline focuses on high-impact applications that bridge the gap between the U.S. and African markets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div key={project.name} className={`bento-card bg-gradient-to-br ${project.gradient} group`}>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full border inline-block mb-5 ${project.statusColor}`}>{project.status}</span>
                <h3 className="text-lg font-bold text-dark mb-3">{project.name}</h3>
                <p className="text-warm-gray-500 text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">Our Approach</span>
            <h2 className="text-3xl font-bold text-dark mt-4">How We Build</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "AI-First", desc: "Every product we build is powered by artificial intelligence at its core.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { title: "Cross-Border", desc: "Designed from day one for both U.S. and African markets.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "User-Centered", desc: "Built with real user feedback from both continents at every stage.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
            ].map((item) => (
              <div key={item.title} className="bento-card text-center group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-violet/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-warm-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Blog */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bento-card">
            <span className="section-label mb-4 inline-flex">Insights</span>
            <h2 className="text-2xl font-bold text-dark mb-4 mt-3">Research Blog</h2>
            <p className="text-warm-gray-500 mb-5 leading-relaxed">
              We share insights on AI, cross-border technology, and the problems we are working to solve.
            </p>
            <Link href="/blog" className="btn-ghost inline-flex">
              Read our blog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className="bento-card">
            <span className="section-label mb-4 inline-flex">Partnerships</span>
            <h2 className="text-2xl font-bold text-dark mb-4 mt-3">Collaborations</h2>
            <p className="text-warm-gray-500 mb-5 leading-relaxed">
              We work with partners across the U.S. and Africa to bring our products to market.
            </p>
            <Link href="/partners" className="btn-ghost inline-flex">
              View our partners
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet/10 rounded-full blur-[150px]" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Beta Program</h2>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">Be among the first to try our apps and help shape the final product.</p>
          <Link href="/contact" className="btn-primary inline-flex text-base px-7 py-3.5">
            Sign Up for Beta
          </Link>
        </div>
      </section>
    </>
  );
}
