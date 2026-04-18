import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mirigraphix | Research, Systems & Hardware",
};

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX-LLC / 2026</span>
            <span className="dot" />
            <span>Philadelphia, PA</span>
            <span className="dot" />
            <span>Technology company</span>
          </div>

          <h1>
            We build what&rsquo;s next<span className="caret" />
          </h1>

          <p>
            Mirigraphix is a research-driven technology company. We ship
            cross-border fintech, AI workforce tools, and immigration
            software&mdash;backed by consulting, enterprise hardware, and
            professional training programs.
          </p>

          <div style={{ display: "flex", gap: "10px", marginTop: "28px" }}>
            <Link href="/rnd" className="btn btn-primary">
              See R&amp;D
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <div className="container section" style={{ paddingBlock: "0" }}>
        <div className="trust-strip">
          <span className="trust-strip-label">Trusted by</span>
          <div className="trust-logos">
            {["CompTIA", "Cisco", "AWS", "Temple Univ.", "EduForward", "OpenAI", "Drexel Univ."].map(
              (name) => (
                <span key={name} className="trust-logo">
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* ── What we do ── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="h2">Three pillars</h2>
            </div>
            <p className="lede">
              Everything we ship ties back to research. Consulting and training
              fund the lab; the lab feeds better products back to our clients.
            </p>
          </div>

          <div className="pillars">
            {/* Pillar 1 */}
            <div className="pillar">
              <span className="pillar-num">01</span>
              <h3>Product engineering</h3>
              <p>
                We design, build, and operate software products that solve
                hard cross-border problems&mdash;payments, hiring, and
                immigration.
              </p>
              <div className="pillar-tags">
                <span className="pillar-tag">Fintech</span>
                <span className="pillar-tag">AI / ML</span>
                <span className="pillar-tag">LegalTech</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="pillar">
              <span className="pillar-num">02</span>
              <h3>Consulting &amp; hardware</h3>
              <p>
                Enterprise Mac sales, IT infrastructure, and technology
                consulting for organizations in the U.S. and Africa.
              </p>
              <div className="pillar-tags">
                <span className="pillar-tag">Mac wholesale</span>
                <span className="pillar-tag">IT infra</span>
                <span className="pillar-tag">Advisory</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="pillar">
              <span className="pillar-num">03</span>
              <h3>Professional training</h3>
              <p>
                Instructor-led and self-paced courses in cybersecurity, AI,
                networking, and full-stack development.
              </p>
              <div className="pillar-tags">
                <span className="pillar-tag">Cybersecurity</span>
                <span className="pillar-tag">AI/ML</span>
                <span className="pillar-tag">Networking</span>
                <span className="pillar-tag">Dev</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Active products ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">R&amp;D</span>
              <h2 className="h2">Active products</h2>
            </div>
            <p className="lede">
              Three products in various stages of development. Each one
              addresses a friction point in cross-border life.
            </p>
          </div>

          <div className="projects">
            {/* ── Feature card: Cross-Border Payments ── */}
            <div className="project feature">
              <div className="project-body">
                <div className="project-head">
                  <span className="project-id">MGX/R-01</span>
                  <span className="status status-beta">
                    <span className="status-dot" />
                    Beta
                  </span>
                </div>
                <h3 className="project-name">Cross-Border Payments</h3>
                <p className="project-desc">
                  Real-time settlement rails connecting U.S. and African
                  corridors. Lower fees, faster delivery, full compliance.
                </p>
                <div className="project-meta">
                  <span>Active corridors: <b>3</b></span>
                  <span>Avg settlement: <b>142s</b></span>
                  <span>Txn volume/mo: <b>2.3k</b></span>
                  <span>Cost vs legacy: <b>-71%</b></span>
                </div>
              </div>
              <div className="project-visual">
                <span className="mono" style={{ color: "var(--ink-3)" }}>
                  Txn throughput — 30 d
                </span>
                <svg
                  className="spark"
                  viewBox="0 0 200 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    points="0,52 15,48 30,44 45,40 60,38 75,32 90,35 105,28 120,24 135,20 150,18 165,14 180,10 200,6"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <polyline
                    points="0,52 15,48 30,44 45,40 60,38 75,32 90,35 105,28 120,24 135,20 150,18 165,14 180,10 200,6 200,60 0,60"
                    fill="var(--accent)"
                    opacity="0.08"
                  />
                </svg>
              </div>
            </div>

            {/* ── AI Job Matching ── */}
            <div className="project">
              <div className="project-head">
                <span className="project-id">MGX/R-02</span>
                <span className="status status-dev">
                  <span className="status-dot" />
                  In Development
                </span>
              </div>
              <h3 className="project-name">AI Job Matching</h3>
              <p className="project-desc">
                ML-powered engine that matches diaspora talent to verified
                roles across borders, cutting placement time by 60%.
              </p>
              <div className="project-meta">
                <span>Corpus: <b>48k roles</b></span>
                <span>Precision@10: <b>0.81</b></span>
                <span>Partners: <b>6</b></span>
                <span>Launch: <b>Q3</b></span>
              </div>
            </div>

            {/* ── Immigration Assist ── */}
            <div className="project">
              <div className="project-head">
                <span className="project-id">MGX/R-03</span>
                <span className="status status-soon">
                  <span className="status-dot" />
                  Coming Q4
                </span>
              </div>
              <h3 className="project-name">Immigration Assist</h3>
              <p className="project-desc">
                Guided immigration workflows with document prep, status
                tracking, and attorney coordination.
              </p>
              <div className="project-meta">
                <span>Flows modeled: <b>12</b></span>
                <span>Pilot users: <b>Waitlist</b></span>
                <span>Attorney partners: <b>4</b></span>
                <span>Launch: <b>Q4</b></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats-strip">
            <div className="stat-cell">
              <div className="stat-label">R&amp;D Products</div>
              <div className="stat-val">3</div>
            </div>
            <div className="stat-cell">
              <div className="stat-label">Enterprise clients</div>
              <div className="stat-val">50+</div>
            </div>
            <div className="stat-cell">
              <div className="stat-label">Ship cadence</div>
              <div className="stat-val">8 wk</div>
              <div className="stat-trend" style={{ color: "var(--ink-3)" }}>per milestone</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Build log ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Build log</span>
              <h2 className="h2">Recent activity</h2>
            </div>
          </div>

          <div className="log-list">
            <div className="log-row">
              <span className="date">2026-04-08</span>
              <span className="tag blue">dev</span>
              <span>AI Job Matching: precision@10 improved from 0.74 to 0.81</span>
            </div>
            <div className="log-row">
              <span className="date">2026-03-29</span>
              <span className="tag amber">ops</span>
              <span>Opened waitlist for Immigration Assist pilot program</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>Work with us, or come build with us.</h2>
            <div>
              <p>
                Three ways in: join a beta, scope a consulting engagement, or
                apply to the training cohort. Every thread leads back to the
                research.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <Link href="/contact" className="btn btn-primary">
                  Start a conversation &rarr;
                </Link>
                <Link href="/rnd" className="btn btn-ghost">
                  See the products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
