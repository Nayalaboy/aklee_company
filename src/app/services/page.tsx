import Link from "next/link";

export const metadata = { title: "Consulting Services" };

const services = [
  {
    num: "01",
    title: "Cybersecurity consulting",
    desc: "Audits, pen tests, compliance",
    items: ["Vulnerability assessment", "Penetration testing", "Security architecture review", "SOC 2 readiness"],
  },
  {
    num: "02",
    title: "AI & data strategy",
    desc: "From readiness to deployed ML",
    items: ["AI readiness assessment", "Data pipeline design", "LLM integration", "MLOps"],
  },
  {
    num: "03",
    title: "Network design",
    desc: "End-to-end network infrastructure",
    items: ["Architecture design", "Cloud migration", "SD-WAN", "Performance tuning"],
  },
  {
    num: "04",
    title: "Custom software",
    desc: "Full-stack product development",
    items: ["Web apps", "API platforms", "Database design", "DevOps & CI/CD"],
  },
  {
    num: "05",
    title: "Turnkey IT infrastructure",
    desc: "Turnkey IT build-outs",
    items: ["Hardware procurement & logistics", "Network setup", "Staff training programs", "Ongoing support"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / SERVICES</span>
            <span className="dot" />
            <span>CONSULTING</span>
          </div>
          <h1>Engineering teams for hire, not decks.</h1>
        </div>
      </section>

      {/* Services list */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Services</h2>
            <p className="lede">
              We embed with your team to ship — not to send slide decks. Every engagement is scoped, staffed, and delivered against measurable outcomes.
            </p>
          </div>
          <div className="svc-list">
            {services.map((s) => (
              <div key={s.num} className="svc-row">
                <div className="num">{s.num}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link href="/contact" className="btn btn-ghost">
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Engagement model</h2>
            <p className="lede">
              A repeatable process that de-risks delivery and keeps you in control from day one.
            </p>
          </div>
          <div className="approach-grid">
            <div className="approach-cell">
              <span className="num">01</span>
              <h4>Discovery</h4>
              <p>2-week paid discovery sprint to map requirements, audit existing systems, and define a fixed scope of work.</p>
            </div>
            <div className="approach-cell">
              <span className="num">02</span>
              <h4>Execution</h4>
              <p>Fixed-scope sprints with weekly demos. You see working output every cycle — no vanishing acts.</p>
            </div>
            <div className="approach-cell">
              <span className="num">03</span>
              <h4>Handoff</h4>
              <p>You own the IP. Full documentation, training sessions, and optional retainer for ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>Scope your first engagement.</h2>
            <div>
              <p>Tell us what you are building and we will put together a discovery plan — no commitment required.</p>
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
