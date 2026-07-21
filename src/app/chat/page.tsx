"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/useLocale";

const copy = {
  en: {
    heroMeta: ["MGX / ADVISOR", "AI-POWERED"],
    heroTitle: "Ask us anything.",
    heroBody:
      "Instant guidance on training programs, enterprise hardware, R&D beta access, and consulting — answered by our AI advisor.",
    welcome:
      "Hi! I'm the Mirigraphix advisor. I can help you with our training programs, enterprise hardware, R&D beta access, or consulting services. What are you looking for today?",
    advisor: "Advisor",
    you: "You",
    errorPre: "Something went wrong. Please try again or email us at ",
    inputPlaceholder: "Ask about trainings, hardware, R&D…",
    sendLabel: "Send message",
    preferEmail: "Prefer email?",
    or: " or ",
    useForm: "use our contact form",
  },
  fr: {
    heroMeta: ["MGX / CONSEILLER", "PROPULSÉ PAR L'IA"],
    heroTitle: "Posez-nous vos questions.",
    heroBody:
      "Des conseils instantanés sur les formations, le matériel professionnel, l'accès bêta à la R&D et le conseil — par notre conseiller IA.",
    welcome:
      "Bonjour ! Je suis le conseiller Mirigraphix. Je peux vous renseigner sur nos formations, notre matériel professionnel, l'accès bêta à la R&D ou nos services de conseil. Que recherchez-vous aujourd'hui ?",
    advisor: "Conseiller",
    you: "Vous",
    errorPre: "Une erreur est survenue. Veuillez réessayer ou nous écrire à ",
    inputPlaceholder: "Posez vos questions sur les formations, le matériel, la R&D…",
    sendLabel: "Envoyer le message",
    preferEmail: "Vous préférez l'e-mail ?",
    or: " ou ",
    useForm: "utilisez notre formulaire de contact",
  },
} as const;

export default function ChatPage() {
  const locale = useLocale();
  const t = copy[locale];

  const { messages, sendMessage, status, error } = useChat();

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>{t.heroMeta[0]}</span>
            <span className="dot" />
            <span>{t.heroMeta[1]}</span>
          </div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
        </div>
      </section>

      {/* Chat */}
      <section className="section" style={{ paddingBlock: "clamp(40px, 5vw, 72px)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="chat-panel">
            <div ref={scrollRef} className="chat-scroll">
              {/* Welcome bubble kept outside chat state so it follows the locale */}
              <div className="chat-msg">
                <div className="chat-bubble">
                  <div className="chat-who">{t.advisor}</div>
                  <p>{t.welcome}</p>
                </div>
              </div>

              {messages.map((msg) => (
                <div key={msg.id} className={`chat-msg ${msg.role === "user" ? "user" : ""}`}>
                  <div className="chat-bubble">
                    {msg.role === "assistant" && <div className="chat-who">{t.advisor}</div>}
                    <p>
                      {msg.parts
                        ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
                        .map((p) => p.text)
                        .join("")}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="chat-msg">
                  <div className="chat-bubble">
                    <div className="chat-who">{t.advisor}</div>
                    <span className="chat-typing" aria-label="…">
                      <span />
                      <span />
                      <span />
                    </span>
                  </div>
                </div>
              )}

              {error && (
                <div className="chat-msg error" role="alert">
                  <div className="chat-bubble">
                    {t.errorPre}
                    <a href="mailto:mirigraphixx@gmail.com" style={{ textDecoration: "underline" }}>
                      mirigraphixx@gmail.com
                    </a>
                  </div>
                </div>
              )}
            </div>

            <form className="chat-inputbar" onSubmit={handleSubmit}>
              <input
                className="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.inputPlaceholder}
                aria-label={t.inputPlaceholder}
                disabled={isLoading}
              />
              <button
                type="submit"
                className="chat-send"
                disabled={isLoading || !input.trim()}
                aria-label={t.sendLabel}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Fallback */}
          <p
            style={{
              marginTop: 20,
              textAlign: "center",
              fontSize: 13,
              color: "var(--ink-3)",
            }}
          >
            {t.preferEmail}{" "}
            <a
              href="mailto:mirigraphixx@gmail.com"
              style={{ color: "var(--accent)", fontWeight: 500 }}
            >
              mirigraphixx@gmail.com
            </a>
            {t.or}
            <Link href="/contact" style={{ color: "var(--accent)", fontWeight: 500 }}>
              {t.useForm}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
