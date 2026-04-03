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
      { q: "How can I partner with Aklee?", a: "We welcome partnerships with educational institutions, NGOs, technology companies, and investors. Visit our Partners page or contact us directly." },
      { q: "Do you offer consulting services?", a: "Yes! We provide cybersecurity audits, AI strategy, network design, and custom software development. Visit our Services page for details." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-gray-900 font-medium text-sm">{q}</span>
        <svg className={`w-5 h-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="pb-4 text-gray-600 text-sm">{a}</p>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Find answers to common questions about our trainings, hardware, apps, and more.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h2>
              <div>
                {section.questions.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">Our team is here to help. Reach out and we will get back to you within 24 hours.</p>
          <a href="/contact" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
