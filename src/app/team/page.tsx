import Link from "next/link";

export const metadata = { title: "Our Team" };

const leadership = [
  { name: "Anu Zan", role: "CEO & Founder", expertise: ["Engineering", "Strategy"] },
  { name: "Djakaridja Ouedraogo", role: "CTO", expertise: ["AI/ML", "Systems Architecture"] },
  { name: "Ramata Balo", role: "COO", expertise: ["Operations", "Africa Markets"] },
];

const team = [
  { name: "Sarah Chen", role: "Lead Engineer", expertise: ["Full-stack", "Security"] },
  { name: "Marcus Williams", role: "Hardware Director", expertise: ["Procurement", "Logistics"] },
  { name: "Fatima Diallo", role: "Training Director", expertise: ["Curriculum", "Partnerships"] },
  { name: "James Park", role: "Product Designer", expertise: ["UX", "Prototyping"] },
  { name: "Amara Toure", role: "Research Lead", expertise: ["NLP", "Embeddings"] },
  { name: "David Okafor", role: "Business Development", expertise: ["Sales", "Partnerships"] },
];

export default function TeamPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / COMPANY</span>
            <span className="dot" />
            <span>TEAM</span>
          </div>
          <h1>The people behind the products.</h1>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Leadership</h2>
            <p className="lede">
              The executive team steering Mirigraphix across engineering, research, and operations.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {leadership.map((p) => (
              <div key={p.name} className="card">
                <div className="hw-thumb" style={{ height: 100, marginBottom: 16 }}>
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="h3">{p.name}</h3>
                <p className="mono" style={{ color: "var(--ink-3)", margin: "6px 0 14px" }}>{p.role}</p>
                <div className="pillar-tags">
                  {p.expertise.map((e) => (
                    <span key={e} className="pillar-tag">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Team</h2>
            <p className="lede">
              Engineers, designers, and operators building across every vertical.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {team.map((p) => (
              <div key={p.name} className="card">
                <div className="hw-thumb" style={{ height: 100, marginBottom: 16 }}>
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="h3">{p.name}</h3>
                <p className="mono" style={{ color: "var(--ink-3)", margin: "6px 0 14px" }}>{p.role}</p>
                <div className="pillar-tags">
                  {p.expertise.map((e) => (
                    <span key={e} className="pillar-tag">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>Interested in working with us?</h2>
            <div>
              <p>We&apos;re not hiring right now, but we&apos;re always happy to hear from talented people.</p>
              <Link href="/contact" className="btn btn-primary">Get in touch &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
