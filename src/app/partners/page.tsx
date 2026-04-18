import Link from "next/link";

export const metadata = { title: "Partners" };

const partners = [
  { name: "CompTIA", type: "Certification", desc: "Official training partner for Security+, Network+, and A+ certification tracks." },
  { name: "Cisco", type: "Certification", desc: "Authorized Cisco academy for CCNA and CCNP training programmes." },
  { name: "AWS", type: "Technology", desc: "AWS Partner Network member for cloud training and infrastructure solutions." },
  { name: "Temple University", type: "Academic", desc: "Joint research initiatives and student training programmes in cybersecurity and AI." },
  { name: "EduForward", type: "NGO", desc: "Collaboration on IT infrastructure deployment across African schools and campuses." },
  { name: "OpenAI", type: "Technology", desc: "Integration partner for LLM-powered features across our R&D product suite." },
];

export default function PartnersPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / PARTNERS</span>
            <span className="dot" />
            <span>ECOSYSTEM</span>
          </div>
          <h1>Our ecosystem.</h1>
        </div>
      </section>

      {/* Partner grid */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Partners</h2>
            <p className="lede">
              Strategic alliances that extend our reach across certification,
              technology, academia, and impact.
            </p>
          </div>

          <div className="pillars">
            {partners.map((p) => (
              <div key={p.name} className="pillar">
                <span className="pillar-num">{p.type}</span>
                <h3 className="h3">{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>Become a partner.</h2>
            <div>
              <p>
                We are looking for partners in education, technology, and
                logistics to expand our reach. Whether you are an institution,
                NGO, or enterprise — let us talk.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Start a conversation
                </Link>
                <Link href="/about" className="btn btn-ghost">
                  Learn about us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
