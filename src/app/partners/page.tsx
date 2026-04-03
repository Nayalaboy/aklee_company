import Link from "next/link";

export const metadata = { title: "Partners & Investors | Aklee Company" };

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
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Partners & Investors</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Strategic alliances that amplify our impact across the U.S. and Africa.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Partners</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{p.name[0]}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-primary text-xs font-medium mb-2">{p.type}</p>
                <p className="text-gray-600 text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Investor Relations</h2>
            <p className="text-gray-600 mb-4">
              Aklee Company is growing rapidly across two continents. We welcome conversations with investors who share our vision for technology-driven impact in education, hardware, and fintech.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Active in U.S. and 5+ African countries
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                3 R&D products in pipeline
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Growing enterprise client base
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Become a Partner</h2>
            <p className="text-gray-600 mb-4">
              We are looking for partners in education, technology, and logistics to expand our reach and impact. Whether you are an institution, NGO, or enterprise — let us talk.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
            >
              Contact Us About Partnership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
