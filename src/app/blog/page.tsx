"use client";

import { useState, useEffect } from "react";

const copy = {
  en: {
    metaJournal: "MGX / JOURNAL",
    metaSoon: "COMING SOON",
    heroTitlePre: "Fintech & AI, written for ",
    heroTitleStrong: "West Africa.",
    heroBody: {
      pre: "Two tracks: a daily read on ",
      s1: "fintech in West Africa",
      mid: ": mobile money, cross-border rails, regulation, and what builders are shipping; and ",
      s2: "AI news, filtered for people living and building here",
      post: ": access, cost, language, and policy. Grounded, local, no hype.",
    },
    launchEyebrow: "LAUNCHING SOON",
    launchTitle: "The Journal is coming.",
    launchBody:
      "Daily posts on fintech and AI in West Africa. Subscribe below to get the first edition when we launch.",
    emailPlaceholder: "you@company.com",
    subscribing: "Subscribing…",
    notify: "Notify me →",
    done: "You're on the list. We'll be in touch.",
    error: "Something went wrong. Try again.",
    tags: ["Fintech · West Africa", "AI · Access · Policy", "Daily"],
  },
  fr: {
    metaJournal: "MGX / JOURNAL",
    metaSoon: "BIENTÔT DISPONIBLE",
    heroTitlePre: "Fintech & IA, pensés pour ",
    heroTitleStrong: "l’Afrique de l’Ouest.",
    heroBody: {
      pre: "Deux rubriques : une lecture quotidienne sur la ",
      s1: "fintech en Afrique de l’Ouest",
      mid: " : mobile money, rails transfrontaliers, réglementation et ce que construisent les acteurs du secteur ; et ",
      s2: "l’actualité de l’IA, filtrée pour celles et ceux qui vivent et bâtissent ici",
      post: " : accès, coût, langue et politiques publiques. Ancré, local, sans esbroufe.",
    },
    launchEyebrow: "BIENTÔT EN LIGNE",
    launchTitle: "Le Journal arrive.",
    launchBody:
      "Des publications quotidiennes sur la fintech et l’IA en Afrique de l’Ouest. Abonnez-vous ci-dessous pour recevoir la première édition dès le lancement.",
    emailPlaceholder: "vous@entreprise.com",
    subscribing: "Abonnement en cours…",
    notify: "Me prévenir →",
    done: "Vous êtes inscrit. Nous reviendrons vers vous.",
    error: "Une erreur est survenue. Veuillez réessayer.",
    tags: ["Fintech · Afrique de l’Ouest", "IA · Accès · Politiques", "Quotidien"],
  },
} as const;

export default function JournalPage() {
  const [locale, setLocale] = useState<"en" | "fr">("en");
  useEffect(() => {
    const m = document.cookie.match(/(?:^|; )lang=(fr|en)/);
    setLocale(m?.[1] === "fr" ? "fr" : "en");
  }, []);
  const t = copy[locale];

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
            <span>{t.metaJournal}</span>
            <span className="dot" />
            <span>{t.metaSoon}</span>
          </div>
          <h1>
            {t.heroTitlePre}
            <strong>{t.heroTitleStrong}</strong>
          </h1>
          <p>
            {t.heroBody.pre}
            <strong>{t.heroBody.s1}</strong>
            {t.heroBody.mid}
            <strong>{t.heroBody.s2}</strong>
            {t.heroBody.post}
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
                {t.launchEyebrow}
              </div>
              <h2 className="h2" style={{ margin: "0 0 14px" }}>
                {t.launchTitle}
              </h2>
              <p
                style={{
                  color: "var(--ink-2)",
                  maxWidth: "52ch",
                  margin: "0 auto 28px",
                  fontSize: "15.5px",
                }}
              >
                {t.launchBody}
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
                  placeholder={t.emailPlaceholder}
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
                  {status === "sending" ? t.subscribing : t.notify}
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
                    {t.done}
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
                    {t.error}
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
                {t.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
