import Link from "next/link";

export const metadata = { title: "Partners & Investors" };

const partners = [
  { name: "CompTIA", type: "Certification Partner", description: "Official training partner for CompTIA Security+, Network+, and A+ certifications." },
  { name: "Cisco Networking Academy", type: "Certification Partner", description: "Authorized Cisco academy for CCNA and CCNP training programs." },
  { name: "AWS", type: "Technology Partner", description: "AWS Partner Network member for cloud training and infrastructure solutions." },
  { name: "University of Lagos", type: "Academic Partner", description: "Joint research initiatives and student training programs in cybersecurity and AI." },
  { name: "EduAfrica Foundation", type: "NGO Partner", description: "Collaboration on IT infrastructure deployment across African schools." },
  { name: "TechHub Lagos", type: "Community Partner", description: "Co-hosted events, workshops, and startup incubation programs." },
];

export default function PartnersPage() {
  return (
    <>
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">Ecosystem</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Partners & Investors</h1>
          <p className="text-blue-200/90 text-lg max-w-2xl leading-relaxed">
            Strategic alliances that amplify our impact across the U.S. and Africa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Alliances</p>
            <h2 className="text-2xl font-bold text-gray-900">Our Partners</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((p) => (
              <div key={p.name} className="rounded-2xl border border-gray-100 p-6 card-hover bg-white">
                <div className="w-11 h-11 bg-primary/5 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-sm">{p.name[0]}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{p.name}</h3>
                <p className="text-primary text-[11px] font-semibold uppercase tracking-wider mb-2.5">{p.type}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Growth</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Investor Relations</h2>
            <p className="text-gray-500 mb-5 leading-relaxed">
              Mirigraphix Company is growing rapidly across two continents. We welcome conversations with investors who share our vision for technology-driven impact in education, hardware, and fintech.
            </p>
            <ul className="space-y-2.5 text-sm text-gray-600">
              {["Active in U.S. and 5+ African countries", "3 R&D products in pipeline", "Growing enterprise client base"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Collaborate</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Become a Partner</h2>
            <p className="text-gray-500 mb-5 leading-relaxed">
              We are looking for partners in education, technology, and logistics to expand our reach and impact. Whether you are an institution, NGO, or enterprise — let us talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm text-sm"
            >
              Contact Us About Partnership
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
