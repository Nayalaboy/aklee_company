"use client";

import { useState } from "react";
import Link from "next/link";

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const faqs = [
  {
    category: "Trainings",
    color: "text-violet-600 bg-violet-50 border-violet-200",
    questions: [
      { q: "What are the prerequisites for your courses?", a: "Most beginner courses have no prerequisites. Intermediate and advanced courses list specific requirements on their detail pages. We recommend reviewing the course modules before enrolling." },
      { q: "Do you offer online or in-person training?", a: "We offer both. Most courses are available online with live instruction. Select courses are also offered at our U.S. training centers. Contact us for in-person availability in Africa." },
      { q: "Do courses include certification prep?", a: "Yes. Each training track includes preparation materials for industry certifications such as CompTIA, Cisco, AWS, and more." },
      { q: "What payment options are available?", a: "We accept credit/debit cards, bank transfers, and offer installment plans. Enterprise clients can also request invoiced billing." },
    ],
  },
  {
    category: "Hardware",
    color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    questions: [
      { q: "Do you ship internationally to Africa?", a: "Yes. We ship to most African countries. International shipping times and costs vary by destination. Contact us for a shipping quote." },
      { q: "Can I customize my Mac order?", a: "Absolutely. We offer custom CPU, RAM, and SSD configurations on all Mac products. Bundle deals with accessories are also available." },
      { q: "What is your return policy?", a: "We offer a 30-day return policy for unused products in original packaging. See our Refund Policy page for full details." },
      { q: "Do you offer bulk/enterprise pricing?", a: "Yes. We provide volume discounts for orders of 10+ units. Contact our sales team for a custom quote." },
    ],
  },
  {
    category: "R&D & Apps",
    color: "text-amber-600 bg-amber-50 border-amber-200",
    questions: [
      { q: "How can I join the beta program?", a: "Visit our Contact page and select 'Beta Program' as the topic. We will add you to the waitlist and notify you when a spot opens." },
      { q: "Are your apps available in Africa?", a: "Our cross-border payments app is being built specifically for U.S.-Africa corridors. The job matching and immigration apps will initially launch in the U.S. with African expansion planned." },
      { q: "Do you offer API access?", a: "We plan to offer API access for select products. Join our beta program to get early access and documentation." },
    ],
  },
  {
    category: "General",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    questions: [
      { q: "Where are you located?", a: "Our headquarters is in Philadelphia, PA. We also have partnerships and operations across Africa. See our Contact page for details." },
      { q: "How can I partner with Mirigraphix?", a: "We welcome partnerships with educational institutions, NGOs, technology companies, and investors. Visit our Partners page or contact us directly." },
      { q: "Do you offer consulting services?", a: "Yes. We provide cybersecurity audits, AI strategy, network design, and custom software development. Visit our Services page for details." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-indigo-100/60 last:border-0 transition-colors duration-200 ${open ? "bg-indigo-50/30" : ""}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 px-1 text-left gap-4">
        <span className={`text-sm font-semibold transition-colors duration-200 pr-4 ${open ? "text-indigo-700" : "text-gray-900"}`}>{q}</span>
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-indigo-600 rotate-180" : "bg-indigo-50 border border-indigo-100"}`}>
          <svg className={`w-4 h-4 ${open ? "text-white" : "text-indigo-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-4" : "max-h-0"}`}>
        <p className="text-gray-500 text-sm leading-relaxed px-1">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060412] via-[#1a0e40] to-[#0c1635]" />
        <div className="glow-orb absolute -top-24 left-0 w-[500px] h-[400px] bg-violet-700 opacity-20 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-500 opacity-15 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRID_BG }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Support
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed">
            Find answers to common questions about our trainings, hardware, apps, and more.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* FAQ sections */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {faqs.map((section) => (
            <div key={section.category} className="bg-white rounded-3xl border border-indigo-100/60 overflow-hidden shadow-sm">
              <div className="px-7 py-5 border-b border-indigo-100/60 flex items-center gap-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${section.color}`}>
                  {section.category}
                </span>
              </div>
              <div className="px-7">
                {section.questions.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0818] via-[#1a0e40] to-[#0f1a30]" />
        <div className="glow-orb absolute top-0 left-1/4 w-[500px] h-[300px] bg-violet-700 opacity-25" />
        <div className="glow-orb absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-600 opacity-20" />
        <div className="max-w-xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Still Have Questions?</h2>
          <p className="text-indigo-200/80 mb-10 text-lg">Our team is here to help. We respond within 24 hours.</p>
          <Link href="/contact"
            className="btn-shimmer inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold rounded-xl shadow-xl shadow-indigo-900/50 text-sm hover:from-violet-500 hover:to-indigo-500 transition-all">
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}
