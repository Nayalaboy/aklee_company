import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Partners & Investors" };

const partners = [
  { name: "CompTIA", type: "Certification Partner", description: "Official training partner for CompTIA Security+, Network+, and A+ certifications.", gradient: "from-red-500/10 to-orange-500/5" },
  { name: "Cisco Networking Academy", type: "Certification Partner", description: "Authorized Cisco academy for CCNA and CCNP training programs.", gradient: "from-cyan-500/10 to-blue-500/5" },
  { name: "AWS", type: "Technology Partner", description: "AWS Partner Network member for cloud training and infrastructure solutions.", gradient: "from-accent/10 to-coral/5" },
  { name: "University of Lagos", type: "Academic Partner", description: "Joint research initiatives and student training programs in cybersecurity and AI.", gradient: "from-primary/10 to-violet/5" },
  { name: "EduAfrica Foundation", type: "NGO Partner", description: "Collaboration on IT infrastructure deployment across African schools.", gradient: "from-emerald/10 to-cyan/5" },
  { name: "TechHub Lagos", type: "Community Partner", description: "Co-hosted events, workshops, and startup incubation programs.", gradient: "from-violet/10 to-primary/5" },
];

const typeColors: Record<string, string> = {
  "Certification Partner": "text-red-500",
  "Technology Partner": "text-accent",
  "Academic Partner": "text-primary",
  "NGO Partner": "text-emerald",
  "Community Partner": "text-violet",
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-partners.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/12 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-emerald/8 rounded-full blur-[100px] animate-blob-delay" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex">Ecosystem</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Partners &{" "}
            <span className="gradient-text-warm">Investors</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Strategic alliances that amplify our impact across the U.S. and Africa.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Alliances</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Our Partners</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((p) => (
              <div key={p.name} className={`bento-card bg-gradient-to-br ${p.gradient} group`}>
                <div className="w-12 h-12 rounded-2xl bg-white border border-dark/6 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary font-bold text-lg">{p.name[0]}</span>
                </div>
                <h3 className="font-bold text-dark mb-1">{p.name}</h3>
                <p className={`text-[11px] font-semibold uppercase tracking-wider mb-3 ${typeColors[p.type] || "text-warm-gray-500"}`}>{p.type}</p>
                <p className="text-warm-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Relations + Become Partner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bento-card">
            <span className="section-label mb-4 inline-flex">Growth</span>
            <h2 className="text-2xl font-bold text-dark mb-4 mt-3">Investor Relations</h2>
            <p className="text-warm-gray-500 mb-6 leading-relaxed">
              Mirigraphix is growing rapidly across two continents. We welcome conversations with investors who share our vision for technology-driven impact.
            </p>
            <ul className="space-y-3 text-sm text-warm-gray-500">
              {["Active in U.S. and 5+ African countries", "3 R&D products in pipeline", "Growing enterprise client base"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bento-card">
            <span className="section-label mb-4 inline-flex">Collaborate</span>
            <h2 className="text-2xl font-bold text-dark mb-4 mt-3">Become a Partner</h2>
            <p className="text-warm-gray-500 mb-6 leading-relaxed">
              We are looking for partners in education, technology, and logistics to expand our reach. Whether you are an institution, NGO, or enterprise — let us talk.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Contact Us About Partnership
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
