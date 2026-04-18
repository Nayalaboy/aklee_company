"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      topic: (form.elements.namedItem("topic") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setErrorMsg(body?.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Could not reach the server. Please try again later.");
      setStatus("error");
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / CONTACT</span>
            <span className="dot" />
            <span>&lt; 48H RESPONSE</span>
          </div>
          <h1>Start a conversation.</h1>
          <p>
            Consulting engagements, hardware quotes, or cohort applications
            &mdash; we read every message.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label>Name</label>
                <input name="name" required placeholder="Your full name" />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="you@company.com"
                />
              </div>
              <div className="field">
                <label>Company</label>
                <input name="company" placeholder="Optional" />
              </div>
              <div className="field">
                <label>Interest</label>
                <select name="topic">
                  <option>Consulting engagement</option>
                  <option>Hardware quote</option>
                  <option>Training cohort</option>
                  <option>Press / investor</option>
                </select>
              </div>
              <div className="field">
                <label>Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us what you're working on."
                />
              </div>
              <div>
                {status === "sent" ? (
                  <p
                    style={{
                      color: "var(--signal-green)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                    }}
                  >
                    Message sent &mdash; we&apos;ll be in touch within 48 hours.
                  </p>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending\u2026" : "Send \u2192"}
                    </button>
                    {status === "error" && (
                      <p
                        style={{
                          color: "var(--signal-red, #e53e3e)",
                          fontFamily: "var(--font-mono)",
                          fontSize: 13,
                          marginTop: 12,
                        }}
                      >
                        {errorMsg}
                      </p>
                    )}
                  </>
                )}
              </div>
            </form>

            <aside className="contact-info">
              <div>
                <h4>Location</h4>
                <p>Philadelphia, PA</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>
                  <a
                    href="mailto:mirigraphixx@gmail.com"
                    style={{
                      color: "var(--ink)",
                      textDecoration: "underline",
                      textDecorationColor: "var(--line)",
                      textUnderlineOffset: 3,
                    }}
                  >
                    mirigraphixx@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h4>Response time</h4>
                <p>
                  Under 48 hours on business days. Research inquiries triaged
                  weekly by the lead.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
