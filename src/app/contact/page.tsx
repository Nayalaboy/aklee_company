"use client";

import { useState } from "react";

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const topics = [
  "General Inquiry", "Training Enrollment", "Hardware Purchase",
  "Bulk/Enterprise Order", "Consulting Services", "Beta Program", "Partnership", "Other"
];

const contactInfo = [
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "Email",
    value: "mirigraphixx@gmail.com",
    href: "mailto:mirigraphixx@gmail.com",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    label: "Headquarters",
    value: "Philadelphia, PA, United States",
    href: null,
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    label: "Business Hours",
    value: "Mon–Fri, 9 AM – 6 PM ET",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", topic: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // silent
    }
    setLoading(false);
    setSubmitted(true);
  }

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 transition-all duration-200 bg-white";

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
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Get in Touch
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed">
            Have a question, need a quote, or ready to get started? We respond within 24 hours.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Contact content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-indigo-100/60 shadow-sm">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-7">Send Us a Message</h2>
                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-extrabold text-emerald-900 mb-2">Message Sent!</h3>
                    <p className="text-emerald-700 text-sm leading-relaxed">Thank you for reaching out. We will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                        <input type="text" required placeholder="John Smith" value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                        <input type="email" required placeholder="you@company.com" value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Topic</label>
                      <select required value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className={inputClass}>
                        <option value="">Select a topic...</option>
                        {topics.map((t) => (<option key={t} value={t}>{t}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                      <textarea required rows={5} placeholder="Tell us more about your needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`} />
                    </div>
                    <button type="submit" disabled={loading}
                      className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-indigo-300/30 text-sm disabled:opacity-60">
                      {loading ? "Sending..." : "Send Message →"}
                    </button>
                    <p className="text-xs text-gray-400 text-center">We respond within 24 hours on business days.</p>
                  </form>
                )}
              </div>
            </div>

            {/* Info panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <div className="bg-white rounded-3xl p-8 border border-indigo-100/60 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-lg mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 border border-indigo-100">
                        <svg className="w-4.5 h-4.5 text-indigo-600 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors mt-0.5 block">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-gray-900 mt-0.5">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Presence */}
              <div className="bg-gradient-to-br from-[#0a0818] to-[#1a0e40] rounded-3xl p-8 border border-violet-500/20 relative overflow-hidden">
                <div className="glow-orb absolute top-0 right-0 w-[150px] h-[150px] bg-violet-700 opacity-30" />
                <div className="relative">
                  <h3 className="font-extrabold text-white text-lg mb-5">Global Offices</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🇺🇸</span>
                      <div>
                        <p className="text-white font-bold text-sm">United States</p>
                        <p className="text-indigo-300/70 text-xs">Philadelphia, PA (HQ)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌍</span>
                      <div>
                        <p className="text-white font-bold text-sm">Africa</p>
                        <p className="text-indigo-300/70 text-xs">Operations & Partnerships</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-white rounded-3xl p-8 border border-indigo-100/60 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-lg mb-5">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { href: "/rnd", label: "Join R&D Beta Program" },
                    { href: "/trainings", label: "Browse Training Programs" },
                    { href: "/hardware", label: "Request Hardware Quote" },
                    { href: "/careers", label: "View Open Positions" },
                  ].map((link) => (
                    <a key={link.href} href={link.href}
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 transition-all duration-200 text-sm font-medium group">
                      {link.label}
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
