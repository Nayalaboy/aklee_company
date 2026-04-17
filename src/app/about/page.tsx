import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About Us" };

const values = [
  {
    title: "Innovation",
    description: "We push boundaries with cutting-edge technology and creative solutions.",
    color: "from-primary/10 to-violet/10",
    textColor: "text-primary",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Empowerment",
    description: "We equip individuals and organizations with skills and tools to succeed.",
    color: "from-accent/10 to-coral/10",
    textColor: "text-accent",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Integrity",
    description: "Transparency and honesty guide every decision we make.",
    color: "from-emerald/10 to-cyan/10",
    textColor: "text-emerald",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Global Impact",
    description: "We bridge the U.S. and Africa, creating opportunities across borders.",
    color: "from-violet/10 to-primary/10",
    textColor: "text-violet",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const milestones = [
  { year: "2023", event: "Founded in North Carolina with a vision to bridge technology gaps between the U.S. and Africa" },
  { year: "2024", event: "Began delivering professional training programs and building custom digital solutions for clients" },
  { year: "2025", event: "Pivoted to an AI-first strategy — going all in on artificial intelligence across every product and service" },
  { year: "2026", event: "Launching flagship applications in both Africa and the United States" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-about.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet/10 rounded-full blur-[100px] animate-blob-delay" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex">About Us</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Building the future of tech{" "}
            <span className="gradient-text-warm">across continents</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A technology company focused on training, hardware, and R&D — empowering communities in the United States and Africa.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="bento-card">
              <span className="section-label mb-4 inline-flex">Our Mission</span>
              <h2 className="text-2xl font-bold text-dark mb-4 mt-3">Why We Exist</h2>
              <p className="text-warm-gray-500 leading-relaxed mb-4">
                Mirigraphix Company was founded with a clear mission: to democratize access to technology education, provide reliable hardware solutions, and develop innovative applications that solve real-world problems.
              </p>
              <p className="text-warm-gray-500 leading-relaxed">
                Operating across two continents, we understand the unique challenges and opportunities that exist in both the U.S. and African markets.
              </p>
            </div>
            <div className="bento-card">
              <span className="section-label mb-4 inline-flex">Our Vision</span>
              <h2 className="text-2xl font-bold text-dark mb-4 mt-3">Where We&apos;re Headed</h2>
              <p className="text-warm-gray-500 leading-relaxed mb-4">
                To become the leading technology company connecting the U.S. and Africa through education, enterprise solutions, and innovation.
              </p>
              <p className="text-warm-gray-500 leading-relaxed">
                We envision a world where geography is not a barrier to opportunity — where anyone can access world-class training, reliable technology, and tools that improve their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">What Drives Us</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bento-card group">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-6 h-6 ${v.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-dark mb-2">{v.title}</h3>
                <p className="text-warm-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">Our Journey</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Key Milestones</h2>
          </div>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-violet/10 border-2 border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                    <span className="text-xs font-bold gradient-text">{m.year.slice(2)}</span>
                  </div>
                  {i < milestones.length - 1 && <div className="w-px h-full bg-dark/8 my-2" />}
                </div>
                <div className="pb-10">
                  <p className="text-sm font-bold text-primary mb-1">{m.year}</p>
                  <p className="text-warm-gray-500 text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label mb-4 inline-flex">Our Reach</span>
          <h2 className="text-3xl font-bold text-dark mb-4 mt-4">Global Presence</h2>
          <p className="text-warm-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            With operations in the United States and growing partnerships across Africa, we deliver localized solutions with global standards.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <div className="bento-card text-left overflow-hidden !p-0">
              <div className="relative h-40">
                <Image src="/images/team-office.jpg" alt="US office" fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-dark mb-2">United States</h3>
                <p className="text-sm text-warm-gray-500 leading-relaxed">Headquarters in North Carolina. Training centers, hardware distribution, and R&D labs.</p>
              </div>
            </div>
            <div className="bento-card text-left overflow-hidden !p-0">
              <div className="relative h-40">
                <Image src="/images/africa-tech.jpg" alt="Africa operations" fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-dark mb-2">Africa</h3>
                <p className="text-sm text-warm-gray-500 leading-relaxed">Partnerships, training programs, hardware supply, and app deployments across the continent.</p>
              </div>
            </div>
          </div>
          <Link href="/contact" className="btn-primary mt-10 inline-flex">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
