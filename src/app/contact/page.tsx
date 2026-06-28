"use client";

import { useState, useEffect } from "react";

const copy = {
  en: {
    metaContact: "MGX / CONTACT",
    metaResponse: "< 48H RESPONSE",
    heroTitle: "Start a conversation.",
    heroBody:
      "Consulting engagements, hardware quotes, or cohort applications: we read every message.",
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    companyLabel: "Company",
    companyPlaceholder: "Optional",
    interestLabel: "Interest",
    topics: [
      "Consulting engagement",
      "Hardware quote",
      "Training cohort",
      "Press / investor",
    ],
    messageLabel: "Message",
    messagePlaceholder: "Tell us what you're working on.",
    sending: "Sending…",
    send: "Send →",
    sent: "Message sent. We'll be in touch within 48 hours.",
    genericError: "Something went wrong. Please try again.",
    networkError: "Could not reach the server. Please try again later.",
    locationLabel: "Location",
    location: "New York, NY",
    emailInfoLabel: "Email",
    responseLabel: "Response time",
    responseBody:
      "Under 48 hours on business days. Research inquiries triaged weekly by the lead.",
  },
  fr: {
    metaContact: "MGX / CONTACT",
    metaResponse: "RÉPONSE < 48H",
    heroTitle: "Engageons la conversation.",
    heroBody:
      "Missions de conseil, devis de matériel ou candidatures aux promotions : nous lisons chaque message.",
    nameLabel: "Nom",
    namePlaceholder: "Votre nom complet",
    emailLabel: "E-mail",
    emailPlaceholder: "vous@entreprise.com",
    companyLabel: "Entreprise",
    companyPlaceholder: "Facultatif",
    interestLabel: "Sujet",
    topics: [
      "Mission de conseil",
      "Devis de matériel",
      "Promotion de formation",
      "Presse / investisseur",
    ],
    messageLabel: "Message",
    messagePlaceholder: "Parlez-nous de votre projet.",
    sending: "Envoi en cours…",
    send: "Envoyer →",
    sent: "Message envoyé. Nous reviendrons vers vous sous 48 heures.",
    genericError: "Une erreur est survenue. Veuillez réessayer.",
    networkError:
      "Impossible de joindre le serveur. Veuillez réessayer ultérieurement.",
    locationLabel: "Localisation",
    location: "New York, NY",
    emailInfoLabel: "E-mail",
    responseLabel: "Délai de réponse",
    responseBody:
      "Sous 48 heures les jours ouvrés. Les demandes liées à la recherche sont traitées chaque semaine par le responsable.",
  },
} as const;

export default function ContactPage() {
  const [locale, setLocale] = useState<"en" | "fr">("en");
  useEffect(() => {
    const m = document.cookie.match(/(?:^|; )lang=(fr|en)/);
    setLocale(m?.[1] === "fr" ? "fr" : "en");
  }, []);
  const t = copy[locale];

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
        setErrorMsg(body?.error || t.genericError);
        setStatus("error");
      }
    } catch {
      setErrorMsg(t.networkError);
      setStatus("error");
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>{t.metaContact}</span>
            <span className="dot" />
            <span>{t.metaResponse}</span>
          </div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label>{t.nameLabel}</label>
                <input name="name" required placeholder={t.namePlaceholder} />
              </div>
              <div className="field">
                <label>{t.emailLabel}</label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder={t.emailPlaceholder}
                />
              </div>
              <div className="field">
                <label>{t.companyLabel}</label>
                <input name="company" placeholder={t.companyPlaceholder} />
              </div>
              <div className="field">
                <label>{t.interestLabel}</label>
                <select name="topic">
                  {t.topics.map((topic) => (
                    <option key={topic}>{topic}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label>{t.messageLabel}</label>
                <textarea
                  name="message"
                  required
                  placeholder={t.messagePlaceholder}
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
                    {t.sent}
                  </p>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? t.sending : t.send}
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
                <h4>{t.locationLabel}</h4>
                <p>{t.location}</p>
              </div>
              <div>
                <h4>{t.emailInfoLabel}</h4>
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
                <h4>{t.responseLabel}</h4>
                <p>{t.responseBody}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
