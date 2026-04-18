import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                fontSize: 16,
                marginBottom: 14,
                color: "var(--ink)",
              }}
            >
              <svg style={{ width: 22, height: 22 }} viewBox="0 0 22 22" aria-hidden="true">
                <rect x="1" y="1" width="9" height="9" rx="2" fill="currentColor" />
                <rect x="12" y="1" width="9" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="1" y="12" width="9" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="12" y="12" width="9" height="9" rx="2" fill="var(--accent)" />
              </svg>
              Mirigraphix
            </Link>
            <p style={{ color: "var(--ink-3)", maxWidth: 320, fontSize: "13.5px" }}>
              A technology company shipping modern software, consulting, enterprise hardware, and technical training.
            </p>
          </div>
          <div>
            <h4>Research</h4>
            <ul>
              <li><Link href="/rnd">Projects</Link></li>
              <li><Link href="/rnd">Cross-Border Payments</Link></li>
              <li><Link href="/rnd">AI Job Matching</Link></li>
              <li><Link href="/rnd">Immigration</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Consulting</Link></li>
              <li><Link href="/hardware">Hardware</Link></li>
              <li><Link href="/trainings">Training</Link></li>
              <li><Link href="/blog">Journal</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/partners">Partners</Link></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid var(--line)",
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--ink-3)",
          }}
        >
          <Link href="/legal/privacy" style={{ color: "var(--ink-3)" }}>Privacy Policy</Link>
          <Link href="/legal/terms" style={{ color: "var(--ink-3)" }}>Terms of Service</Link>
          <Link href="/legal/refund" style={{ color: "var(--ink-3)" }}>Refund Policy</Link>
          <span style={{ marginLeft: "auto" }}>mirigraphixx@gmail.com</span>
          <span>Philadelphia, PA</span>
        </div>
        <div className="footer-meta">
          <span>&copy; 2026 Mirigraphix LLC. All rights reserved.</span>
          <span>v2026.04 &middot; System operational</span>
        </div>
      </div>
    </footer>
  );
}
