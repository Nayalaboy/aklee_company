import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / COMPANY</span>
            <span className="dot" />
            <span>FOUNDED 2023</span>
          </div>
          <h1>Built in Philadelphia. Shipped everywhere.</h1>
          <p>
            Mirigraphix was founded on a simple idea: build what&apos;s next
            &mdash; real products, shipped by the same engineers who handle the
            hardware, the networks, and the training behind them. Headquartered
            in Philadelphia, Pennsylvania.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Mission</span>
              <h2 className="h2" style={{ marginTop: 16 }}>
                We build what&apos;s next.
              </h2>
            </div>
            <p
              style={{
                color: "var(--ink-2)",
                fontSize: 16,
                maxWidth: "60ch",
              }}
            >
              We believe the best products are built by small, senior teams who
              ship &mdash; not by decks and roadmaps. Our goal is a durable
              portfolio of software products, funded and sharpened by a services
              business (hardware, training, consulting) that keeps us grounded
              in real deployments.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Timeline</span>
            <div>
              <h2 className="h2">How we got here.</h2>
            </div>
          </div>

          <div className="milestones">
            <div className="milestone">
              <div className="milestone-year">2023</div>
              <h4>Founded in Philadelphia</h4>
              <p>
                Three-person team, first consulting engagement with a U.S.
                fintech.
              </p>
            </div>
            <div className="milestone">
              <div className="milestone-year">2024</div>
              <h4>Services scaled</h4>
              <p>
                First hardware deployments at scale; inaugural training cohort
                graduated.
              </p>
            </div>
            <div className="milestone">
              <div className="milestone-year">2025</div>
              <h4>R&amp;D formalized</h4>
              <p>
                Launched MGX/R-01; formalized the R&amp;D division with three
                active product lines.
              </p>
            </div>
            <div className="milestone">
              <div className="milestone-year">2026</div>
              <h4>Portfolio expanded</h4>
              <p>Three active products; 50+ enterprise clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>Work with us, or come build with us.</h2>
            <div>
              <p>
                We&apos;re always looking for sharp engineers, design partners,
                and organizations that want to build something real.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Start a conversation &rarr;
                </Link>
                <Link href="/careers" className="btn btn-ghost">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
