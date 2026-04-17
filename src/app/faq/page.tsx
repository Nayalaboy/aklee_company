"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    category: "Trainings",
    questions: [
      { q: "What are the prerequisites for your courses?", a: "Most beginner courses have no prerequisites. Intermediate and advanced courses list specific requirements on their detail pages. We recommend reviewing the course modules before enrolling." },
      { q: "Do you offer online or in-person training?", a: "We offer both! Most courses are available online with live instruction. Select courses are also offered at our U.S. training centers. Contact us for in-person availability in Africa." },
      { q: "Do courses include certification prep?", a: "Yes. Each training track includes preparation materials for industry certifications such as CompTIA, Cisco, AWS, and more." },
      { q: "What payment options are available?", a: "We accept credit/debit cards, bank transfers, and offer installment plans. Enterprise clients can also request invoiced billing." },
    ],
  },
  {
    category: "Hardware",
    questions: [
      { q: "Do you ship internationally to Africa?", a: "Yes! We ship to most African countries. International shipping times and costs vary by destination. Contact us for a shipping quote." },
      { q: "Can I customize my Mac order?", a: "Absolutely. We offer custom CPU, RAM, and SSD configurations on all Mac products. Bundle deals with accessories are also available." },
      { q: "What is your return policy?", a: "We offer a 30-day return policy for unused products in original packaging. See our Refund Policy page for full details." },
      { q: "Do you offer bulk/enterprise pricing?", a: "Yes. We provide volume discounts for orders of 10+ units. Contact our sales team for a custom quote." },
    ],
  },
  {
    category: "R&D & Apps",
    questions: [
      { q: "How can I join the beta program?", a: "Visit our Contact page and select 'Beta Program' as the topic. We'll add you to the waitlist and notify you when a spot opens." },
      { q: "Are your apps available in Africa?", a: "Our money-transfer app is being built specifically for U.S.-Africa corridors. The job application and immigration apps will initially launch in the U.S. with African expansion planned." },
      { q: "Do you offer API access?", a: "We plan to offer API access for select products. Join our beta program to get early access and documentation." },
    ],
  },
  {
    category: "General",
    questions: [
      { q: "Where are you located?", a: "Our headquarters is in the United States. We also have partnerships and operations in multiple African countries. See our Contact page for details." },
      { q: "How can I partner with Mirigraphix?", a: "We welcome partnerships with educational institutions, NGOs, technology companies, and investors. Visit our Partners page or contact us directly." },
      { q: "Do you offer consulting services?", a: "Yes! We provide cybersecurity audits, AI strategy, network design, and custom software development. Visit our Services page for details." },
    ],
  },
];

const categoryColors: Record<string, string> = {
  Trainings: "!text-primary !bg-primary/6 !border-primary/10",
  Hardware: "!text-accent !bg-accent/6 !border-accent/10",
  "R&D & Apps": "!text-violet !bg-violet/6 !border-violet/10",
  General: "!text-emerald !bg-emerald/6 !border-emerald/10",
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-dark/6 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left group"
      >
        <span className="text-dark font-medium text-sm group-hover:text-primary transition-colors duration-200 pr-4">{q}</span>
        <div className={`w-6 h-6 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-all duration-300 ${open ? "bg-primary/10" : ""}`}>
          <svg className={`w-3.5 h-3.5 text-warm-gray-500 transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-4" : "max-h-0"}`}>
        <p className="text-warm-gray-500 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-faq.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/12 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cyan/8 rounded-full blur-[100px] animate-blob-delay" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex">Support</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Find answers to common questions about our trainings, hardware, apps, and more.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <span className={`section-label mb-4 inline-flex ${categoryColors[section.category] || ""}`}>{section.category}</span>
              <div className="bento-card mt-3 px-6">
                {section.questions.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Still Have Questions?</h2>
          <p className="text-warm-gray-500 mb-8 text-lg leading-relaxed">Our team is here to help. Reach out and we will get back to you within 24 hours.</p>
          <a href="/contact" className="btn-primary inline-flex">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
