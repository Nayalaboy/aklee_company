"use client";

import { useState } from "react";

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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left group"
      >
        <span className="text-gray-900 font-medium text-sm group-hover:text-primary transition-colors duration-200 pr-4">{q}</span>
        <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-40 pb-4" : "max-h-0"}`}>
        <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">Support</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-blue-200/90 text-lg max-w-2xl leading-relaxed">
            Find answers to common questions about our trainings, hardware, apps, and more.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">{section.category}</p>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 px-6">
                {section.questions.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Still Have Questions?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Our team is here to help. Reach out and we will get back to you within 24 hours.</p>
          <a href="/contact" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm text-sm">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
