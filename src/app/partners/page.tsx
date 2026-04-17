import Link from "next/link";

export const metadata = { title: "Partners & Investors" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const partners = [
  { name: "CompTIA", abbr: "CT", type: "Certification Partner", description: "Official training partner for CompTIA Security+, Network+, and A+ certifications.", gradient: "from-red-500 to-orange-500" },
  { name: "Cisco Networking Academy", abbr: "CA", type: "Certification Partner", description: "Authorized Cisco academy for CCNA and CCNP training programs.", gradient: "from-blue-600 to-cyan-600" },
  { name: "AWS", abbr: "AW", type: "Technology Partner", description: "AWS Partner Network member for cloud training and infrastructure solutions.", gradient: "from-orange-400 to-amber-500" },
  { name: "University of Lagos", abbr: "UL", type: "Academic Partner", description: "Joint research initiatives and student training programs in cybersecurity and AI.", gradient: "from-emerald-500 to-teal-600" },
  { name: "EduAfrica Foundation", abbr: "EA", type: "NGO Partner", description: "Collaboration on IT infrastructure deployment across African schools.", gradient: "from-violet-600 to-indigo-600" },
  { name: "TechHub Lagos", abbr: "TH", type: "Community Partner", description: "Co-hosted events, workshops, and startup incubation programs.", gradient: "from-cyan-500 to-sky-600" },
];

const investorHighlights = [
  "Active in the U.S. and 5+ African countries",
  "3 R&D products in the pipeline",
  "Growing enterprise client base",
  "World-class technical team",
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060412] via-[#1a0e40] to-[#0c1635]" />
        <div className="glow-orb absolute -top-24 left-0 w-[500px] h-[400px] bg-violet-700 opacity-20 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-500 opacity-15 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRID_BG }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Ecosystem
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Partners &{" "}
            <span className="gradient-text-cyan">Investors</span>
          </h1>
          <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed">
            Strategic alliances that amplify our impact across the U.S. and Africa.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Partners grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Alliances</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Our <span className="gradient-text">Partners</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="bg-white rounded-3xl p-7 border border-indigo-100/60 card-hover">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-5 shadow-md`}>
                  <span className="text-white font-extrabold text-sm">{p.abbr}</span>
                </div>
                <h3 className="font-extrabold text-gray-900 text-base mb-1">{p.name}</h3>
                <p className="text-indigo-500 text-[11px] font-bold uppercase tracking-wider mb-3">{p.type}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor + Partner CTA */}
      <section className="py-20 bg-gradient-to-b from-[#f0f0ff]/60 to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 border border-indigo-100/60 card-hover">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3 block">Growth</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Investor Relations</h2>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                Mirigraphix is growing rapidly across two continents. We welcome conversations with investors who share our vision for technology-driven impact in education, hardware, and fintech.
              </p>
              <ul className="space-y-2.5 mb-7">
                {investorHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:gap-4 transition-all duration-200">
                Investor Inquiries →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#0a0818] to-[#1a0e40] rounded-3xl p-10 border border-violet-500/20 relative overflow-hidden">
              <div className="glow-orb absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-700 opacity-20" />
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 block">Collaborate</span>
                <h2 className="text-2xl font-extrabold text-white mb-4">Become a Partner</h2>
                <p className="text-indigo-200/70 mb-7 leading-relaxed text-sm">
                  We are looking for partners in education, technology, and logistics to expand our reach and impact. Whether you are an institution, NGO, or enterprise — let us talk.
                </p>
                <Link href="/contact"
                  className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl shadow-xl shadow-amber-700/30 text-sm">
                  Contact Us About Partnership →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
