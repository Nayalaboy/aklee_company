import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Training",
};

export default function TrainingsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / TRAINING</span>
            <span className="dot" />
            <span>312 ACTIVE LEARNERS</span>
          </div>
          <h1>Train with the people who build the products.</h1>
          <p>
            Industry-aligned courses in cybersecurity, networking, and machine
            learning &mdash; taught by Mirigraphix engineers and certified
            instructors, with placement support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats-strip" style={{ marginBottom: 64 }}>
            <div className="stat-cell">
              <div className="stat-label">Grads placed</div>
              <div className="stat-val">78%</div>
              <div className="stat-trend">within 6 months</div>
            </div>
            <div className="stat-cell">
              <div className="stat-label">Certifications</div>
              <div className="stat-val" style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
                CompTIA &middot; Cisco &middot; AWS
              </div>
            </div>
            <div className="stat-cell">
              <div className="stat-label">Avg. cohort size</div>
              <div className="stat-val">22</div>
            </div>
            <div className="stat-cell">
              <div className="stat-label">Countries reached</div>
              <div className="stat-val">9</div>
            </div>
          </div>

          <div className="section-head">
            <span className="eyebrow">Focus areas</span>
            <div>
              <h2 className="h2">Three disciplines. Taught by practitioners.</h2>
            </div>
          </div>

          <div className="pillars">
            <div className="pillar">
              <div className="pillar-num">01 / CYBERSECURITY</div>
              <h3>Cybersecurity</h3>
              <p>
                Foundational security, offensive testing, and compliance
                pathways. Prepares learners for industry certifications and
                hands-on security roles.
              </p>
              <div className="pillar-tags">
                <span className="pillar-tag">CompTIA Security+</span>
                <span className="pillar-tag">Pen testing</span>
                <span className="pillar-tag">SOC &amp; compliance</span>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-num">02 / NETWORKING</div>
              <h3>Networking &amp; infrastructure</h3>
              <p>
                From Cisco fundamentals to modern cloud and SD-WAN architectures.
                Built for engineers who run the networks behind real organizations.
              </p>
              <div className="pillar-tags">
                <span className="pillar-tag">Cisco CCNA</span>
                <span className="pillar-tag">Cloud networking</span>
                <span className="pillar-tag">SD-WAN</span>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-num">03 / AI &amp; SOFTWARE</div>
              <h3>AI &amp; software engineering</h3>
              <p>
                Applied machine learning, LLM systems, and full-stack
                engineering. Focused on shipping production software, not toy
                notebooks.
              </p>
              <div className="pillar-tags">
                <span className="pillar-tag">Applied ML</span>
                <span className="pillar-tag">LLM systems</span>
                <span className="pillar-tag">Full-stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>Ready to start learning?</h2>
            <div>
              <p>
                Talk to an advisor about which track is right for you, or apply
                directly to an upcoming cohort.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Talk to an advisor &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
