import Link from "next/link";

export const metadata = { title: "Events" };

const upcomingEvents = [
  { date: "Apr 28", title: '"AI in Production" Webinar', location: "Online", price: "Free" },
  { date: "May 12", title: "Security+ Bootcamp Kickoff", location: "Philadelphia", price: "By invite" },
  { date: "Jun 02", title: "Cross-Border Payments Deep Dive", location: "Online", price: "Free" },
  { date: "Jun 15", title: "Hardware Deployment Workshop", location: "Philadelphia", price: "$199" },
];

const pastEvents = [
  { date: "2026-03-18", title: "Intro to Ethical Hacking", attendees: 120, format: "Workshop" },
  { date: "2026-03-01", title: "Cross-Border Fintech Panel", attendees: 85, format: "Panel" },
  { date: "2026-02-20", title: "Networking Fundamentals Bootcamp", attendees: 65, format: "Bootcamp" },
  { date: "2026-01-15", title: "AI Strategy for Executives", attendees: 110, format: "Webinar" },
  { date: "2025-12-08", title: "Mac Fleet Management", attendees: 42, format: "Workshop" },
];

export default function EventsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / EVENTS</span>
            <span className="dot" />
            <span>UPCOMING</span>
          </div>
          <h1>Webinars, workshops, and meetups.</h1>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Upcoming</h2>
            <p className="lede">
              Register for a session — most are free and all are
              practitioner-led.
            </p>
          </div>

          <div className="case-grid">
            {upcomingEvents.map((ev) => (
              <div key={ev.title} className="case">
                <div className="case-meta">
                  <span>{ev.date}</span>
                  <span>{ev.location}</span>
                  <span>{ev.price}</span>
                </div>
                <h4>{ev.title}</h4>
                <div style={{ marginTop: "auto", paddingTop: "16px" }}>
                  <Link href="/contact" className="btn btn-ghost">
                    Register
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Past events</h2>
            <p className="lede">
              A log of previous sessions and their reach.
            </p>
          </div>

          <div className="log-list">
            {pastEvents.map((ev) => (
              <div key={ev.title} className="log-row">
                <span className="mono">{ev.date}</span>
                <span>{ev.title}</span>
                <span className="mono">{ev.format}</span>
                <span className="mono">{ev.attendees} attendees</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>Host an event with us.</h2>
            <div>
              <p>
                We partner with companies, universities, and communities to
                deliver workshops and talks. Let us plan something together.
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
