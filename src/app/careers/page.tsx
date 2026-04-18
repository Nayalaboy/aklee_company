import Link from "next/link";

export const metadata = { title: "Careers" };

const benefits = [
  { num: "01", title: "Remote-first", desc: "Work from anywhere. We optimize for async and deep focus." },
  { num: "02", title: "Equity for all", desc: "Every team member holds a stake in what we build together." },
  { num: "03", title: "Learning budget", desc: "$2k/yr for courses, conferences, and certifications." },
  { num: "04", title: "Ship real products", desc: "No busywork. You will deploy to production from week one." },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / COMPANY</span>
            <span className="dot" />
            <span>CAREERS</span>
          </div>
          <h1>Come build what&apos;s next.</h1>
          <p>
            We&apos;re a small, senior team that ships real products. When we
            hire, we look for people who want to build &mdash; not manage
            roadmaps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Why Mirigraphix</h2>
            <p className="lede">
              A place where engineering craft meets real-world impact across two continents.
            </p>
          </div>
          <div className="approach-grid">
            {benefits.map((b) => (
              <div key={b.num} className="approach-cell">
                <span className="num">{b.num}</span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>No open roles right now.</h2>
            <div>
              <p>
                We&apos;re not actively hiring, but we&apos;re always interested
                in hearing from talented people. Send us a note and tell us what
                you can build.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Get in touch &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
