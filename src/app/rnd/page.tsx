import Link from "next/link";

export const metadata = { title: "Research & Development" };

export default function RnDPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / RESEARCH</span>
            <span className="dot" />
            <span>3 ACTIVE PROJECTS</span>
          </div>
          <h1>Built, shipped, measured.</h1>
        </div>
      </section>

      {/* Active projects */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Active projects</h2>
            <p className="lede">
              Three applications in flight — each targeting an underserved
              corridor between the U.S. and the African continent.
            </p>
          </div>

          <div className="projects">
            {/* Feature card — Cross-Border Payments */}
            <article className="project feature">
              <div className="project-body">
                <div className="project-head">
                  <span className="project-id">MGX / R-01</span>
                  <span className="status status-beta">
                    <span className="status-dot" />
                    Beta
                  </span>
                </div>
                <h3 className="project-name">Cross-Border Payments</h3>
                <p className="project-desc">
                  A faster, more affordable way to move money between the U.S.
                  and Africa. Settlement in seconds, not hours — with transparent
                  fees and real-time FX.
                </p>
                <div className="project-meta">
                  <span>Settle <b>142 s</b></span>
                  <span>Cost delta <b>-71 %</b></span>
                  <span>Txn vol <b>2.3 k/mo</b></span>
                </div>
              </div>
              <div className="project-visual">
                <span className="mono" style={{ color: "var(--ink-3)" }}>
                  GlobalPay — settlement latency (8 wk)
                </span>
                <svg
                  className="spark"
                  viewBox="0 0 200 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="0,52 25,48 50,40 75,38 100,30 125,22 150,14 175,10 200,8"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="0,52 25,48 50,40 75,38 100,30 125,22 150,14 175,10 200,8"
                    stroke="none"
                    fill="url(#sparkGrad)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent)" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </article>

            {/* AI Job Matching */}
            <article className="project">
              <div className="project-head">
                <span className="project-id">MGX / R-02</span>
                <span className="status status-dev">
                  <span className="status-dot" />
                  Dev
                </span>
              </div>
              <h3 className="project-name">AI Job Matching</h3>
              <p className="project-desc">
                Connecting talent with opportunities across borders using
                intelligent matching — résumé parsing, skill-gap analysis, and
                employer fit scoring.
              </p>
              <div className="project-meta">
                <span>Match accuracy <b>89 %</b></span>
                <span>Profiles <b>1.2 k</b></span>
              </div>
            </article>

            {/* Immigration Assist */}
            <article className="project">
              <div className="project-head">
                <span className="project-id">MGX / R-03</span>
                <span className="status status-soon">
                  <span className="status-dot" />
                  Soon
                </span>
              </div>
              <h3 className="project-name">Immigration Assist</h3>
              <p className="project-desc">
                Simplifying complex immigration processes with AI-guided document
                prep, timeline tracking, and eligibility checks.
              </p>
              <div className="project-meta">
                <span>Launch <b>Q3 2026</b></span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How we build */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">How we build</h2>
            <p className="lede">
              Small teams, tight loops, and a bias toward publishing what we
              learn.
            </p>
          </div>

          <div className="approach-grid">
            <div className="approach-cell">
              <span className="num">01 HYPOTHESIS</span>
              <h4>Real users, real constraints</h4>
              <p>
                Every project starts with a named user and a measurable outcome.
                No science projects — only problems worth solving.
              </p>
            </div>
            <div className="approach-cell">
              <span className="num">02 CADENCE</span>
              <h4>Ship in eight-week blocks</h4>
              <p>
                We scope work to eight-week cycles. At the end of each block we
                ship, measure, and decide whether to continue or pivot.
              </p>
            </div>
            <div className="approach-cell">
              <span className="num">03 PUBLISH</span>
              <h4>Notes open by default</h4>
              <p>
                Research notes, design decisions, and post-mortems are published
                internally and, where possible, externally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>Become a design partner or a beta user.</h2>
            <div>
              <p>
                We are looking for early adopters who want to shape the products
                we ship. Join the programme and get priority access.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Get in touch
                </Link>
                <Link href="/rnd" className="btn btn-ghost">
                  View all projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
