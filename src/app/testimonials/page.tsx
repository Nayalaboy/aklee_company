import Link from "next/link";

export const metadata = { title: "Testimonials" };

const testimonials = [
  {
    company: "GlobalPay Solutions",
    quote: "Settlement time dropped from hours to seconds.",
    who: "David R., CTO",
    context: "Cross-border payments R&D partnership",
  },
  {
    company: "EduForward",
    quote: "140 endpoints deployed across 3 campuses with zero downtime.",
    who: "Michael B., Founder",
    context: "Hardware rollout and MDM enrolment",
  },
  {
    company: "TechStart Academy",
    quote: "78% of our graduates placed within 6 months.",
    who: "Amina O., Programme Director",
    context: "Full-stack development bootcamp",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / TESTIMONIALS</span>
            <span className="dot" />
            <span>SOCIAL PROOF</span>
          </div>
          <h1>What our clients say.</h1>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Client voices</h2>
            <p className="lede">
              Real outcomes from real engagements — training, hardware, and R&D.
            </p>
          </div>

          <div className="case-grid">
            {testimonials.map((t) => (
              <div key={t.company} className="case">
                <div className="case-meta">
                  <span>{t.company}</span>
                  <span>{t.context}</span>
                </div>
                <h4>&ldquo;{t.quote}&rdquo;</h4>
                <p className="mono" style={{ marginTop: "auto", paddingTop: "12px" }}>
                  {t.who}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>Become our next success story.</h2>
            <div>
              <p>
                Whether you need training, hardware, or a custom R&D
                engagement — we deliver measurable results.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Get in touch
                </Link>
                <Link href="/services" className="btn btn-ghost">
                  Our services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
