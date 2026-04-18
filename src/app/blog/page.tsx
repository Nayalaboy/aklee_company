"use client";

import { useState } from "react";

export default function JournalPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("done");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / JOURNAL</span>
            <span className="dot" />
            <span>COMING SOON</span>
          </div>
          <h1>Fintech &amp; AI, written for West Africa.</h1>
          <p>
            Two tracks: a daily read on <strong>fintech in West Africa</strong>{" "}
            &mdash; mobile money, cross-border rails, regulation, and what
            builders are shipping; and{" "}
            <strong>AI news, filtered for people living and building here</strong>{" "}
            &mdash; access, cost, language, and policy. Grounded, local, no hype.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
              padding: "64px 56px",
              textAlign: "center",
              background: "var(--bg-elev)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-lg)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(520px 320px at 50% -20%, color-mix(in oklch, var(--accent) 18%, transparent) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 12,
                }}
              >
                LAUNCHING SOON
              </div>
              <h2 className="h2" style={{ margin: "0 0 14px" }}>
                The Journal is coming.
              </h2>
              <p
                style={{
                  color: "var(--ink-2)",
                  maxWidth: "52ch",
                  margin: "0 auto 28px",
                  fontSize: "15.5px",
                }}
              >
                Daily posts on fintech and AI in West Africa. Subscribe below to
                get the first edition when we launch.
              </p>
              <form
                onSubmit={handleSubscribe}
                style={{
                  display: "flex",
                  gap: 8,
                  maxWidth: 440,
                  margin: "0 auto",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: "1 1 220px",
                    padding: "11px 14px",
                    fontSize: 14,
                    color: "var(--ink)",
                    background: "var(--bg)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-sm)",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Subscribing\u2026" : "Notify me \u2192"}
                </button>
                {status === "done" && (
                  <span
                    style={{
                      flexBasis: "100%",
                      fontSize: 13,
                      color: "var(--signal-green)",
                      marginTop: 10,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    You&apos;re on the list. We&apos;ll be in touch.
                  </span>
                )}
                {status === "error" && (
                  <span
                    style={{
                      flexBasis: "100%",
                      fontSize: 13,
                      color: "var(--signal-red, #e53e3e)",
                      marginTop: 10,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    Something went wrong. Try again.
                  </span>
                )}
              </form>
              <div
                style={{
                  marginTop: 22,
                  display: "flex",
                  gap: 10,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ink-3)",
                }}
              >
                <span>Fintech &middot; West Africa</span>
                <span>AI &middot; Access &middot; Policy</span>
                <span>Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
