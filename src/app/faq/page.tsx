"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "Trainings",
    questions: [
      { q: "What are the prerequisites for your courses?", a: "Most beginner courses have no prerequisites. Intermediate and advanced tracks list specific requirements on their detail pages. We recommend reviewing the syllabus before enrolling." },
      { q: "Do you offer online or in-person training?", a: "Both. Most courses are available online with live instruction. Select courses run in person at our Philadelphia training centre. Contact us for availability in other locations." },
      { q: "Do courses include certification prep?", a: "Yes. Each training track includes preparation materials for industry certifications such as CompTIA, Cisco, and AWS." },
    ],
  },
  {
    category: "Hardware",
    questions: [
      { q: "Do you ship internationally?", a: "Yes. We ship to most African countries. International shipping times and costs vary by destination — contact us for a quote." },
      { q: "Can I customise my Mac order?", a: "Absolutely. We offer custom CPU, RAM, and SSD configurations on all Mac products. Bundle deals with accessories are also available." },
      { q: "What is your return policy?", a: "We offer a 30-day return policy for unused products in original packaging. See our Refund Policy page for full details." },
    ],
  },
  {
    category: "R&D",
    questions: [
      { q: "How can I join the beta programme?", a: "Visit our Contact page and select 'Beta Programme' as the topic. We will add you to the waitlist and notify you when a spot opens." },
      { q: "Are your apps available in Africa?", a: "Our cross-border payments app is built specifically for U.S.-Africa corridors. The job-matching and immigration apps will launch in the U.S. first with African expansion planned." },
    ],
  },
  {
    category: "General",
    questions: [
      { q: "Where are you located?", a: "Our headquarters is in the United States with partnerships and operations in multiple African countries. See the Contact page for details." },
      { q: "How can I partner with Mirigraphix?", a: "We welcome partnerships with educational institutions, NGOs, technology companies, and investors. Visit our Partners page or contact us directly." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="svc-row" style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
      <div className="num" style={{ fontSize: "14px", lineHeight: 1 }}>
        {open ? "\u2212" : "+"}
      </div>
      <div style={{ flex: 1 }}>
        <h3>{q}</h3>
        {open && <p style={{ marginTop: "8px" }}>{a}</p>}
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / FAQ</span>
            <span className="dot" />
            <span>SUPPORT</span>
          </div>
          <h1>Common questions.</h1>
        </div>
      </section>

      {/* FAQ sections */}
      {faqs.map((section) => (
        <section key={section.category} className="section">
          <div className="container">
            <div className="section-head">
              <h2 className="h2">{section.category}</h2>
            </div>
            <div className="svc-list">
              {section.questions.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>Still have questions?</h2>
            <div>
              <p>
                Our team is here to help. Reach out and we will get back to you
                within 24 hours.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
