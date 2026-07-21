"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useClientLocale } from "@/lib/client-locale";

const copy = {
  en: {
    sectionLabel: "MGX / ADVISOR",
    title: "Talk to our advisor",
    heroBody: "Get guidance on trainings, hardware, R&D access, and consulting.",
    advisor: "Advisor",
    errorPre: "Something went wrong. Please try again or email us at ",
    inputPlaceholder: "Ask about trainings, hardware, R&D…",
    preferEmail: "Prefer email?",
    or: " or ",
    useForm: "use our contact form",
    welcome:
      "Hi! I'm the Mirigraphix advisor. I can help you with our training programs, enterprise hardware, R&D beta access, or consulting services. What are you looking for today?",
    send: "Send",
  },
  fr: {
    sectionLabel: "MGX / CONSEILLER",
    title: "Parlez à notre conseiller",
    heroBody:
      "Obtenez des conseils sur les formations, le matériel, l’accès R&D et le conseil.",
    advisor: "Conseiller",
    errorPre: "Une erreur est survenue. Veuillez réessayer ou nous écrire à ",
    inputPlaceholder: "Posez vos questions sur les formations, le matériel, la R&D…",
    preferEmail: "Vous préférez l’e-mail ?",
    or: " ou ",
    useForm: "utilisez notre formulaire de contact",
    welcome:
      "Bonjour ! Je suis le conseiller Mirigraphix. Je peux vous renseigner sur nos formations, notre matériel professionnel, l’accès bêta à la R&D ou nos services de conseil. Que recherchez-vous aujourd’hui ?",
    send: "Envoyer",
  },
} as const;

export default function ChatPage() {
  const locale = useClientLocale();
  const t = copy[locale];
  const welcomeText: string = t.welcome;

  const { messages, sendMessage, status, error } = useChat({
    messages: [
      {
        id: "welcome",
        role: "assistant" as "assistant" | "user",
        content: welcomeText,
        parts: [{ type: "text" as const, text: welcomeText }],
        createdAt: new Date(),
      },
    ],
  });

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
      <section className="hero-page" style={{ minHeight: "clamp(280px, 36vh, 400px)" }}>
        <div className="hero-page-media">
          <Image
            src="/images/hero-faq.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-page-scrim" aria-hidden="true" />
        <div className="hero-page-inner">
          <div className="container">
            <span className="eyebrow">{t.sectionLabel}</span>
            <h1>{t.title}</h1>
            <p>{t.heroBody}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="chat-shell">
          <div className="chat-panel">
            <div ref={scrollRef} className="chat-log">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chat-bubble ${msg.role === "user" ? "user" : "assistant"}`}
                >
                  {msg.role === "assistant" && (
                    <div
                      className="mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--ink-3)",
                        marginBottom: 6,
                      }}
                    >
                      {t.advisor}
                    </div>
                  )}
                  <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                    {msg.parts
                      ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
                      .map((p) => p.text)
                      .join("") || msg.content}
                  </p>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="chat-bubble assistant">
                  <div
                    className="mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      marginBottom: 6,
                    }}
                  >
                    {t.advisor}
                  </div>
                  <span style={{ color: "var(--ink-3)" }}>…</span>
                </div>
              )}
              {error && (
                <div
                  className="chat-bubble assistant"
                  style={{ borderColor: "color-mix(in oklch, var(--signal-red) 35%, var(--line))" }}
                >
                  {t.errorPre}
                  <a href="mailto:mirigraphixx@gmail.com" style={{ textDecoration: "underline" }}>
                    mirigraphixx@gmail.com
                  </a>
                </div>
              )}
            </div>

            <form className="chat-composer" onSubmit={handleSubmit}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.inputPlaceholder}
                disabled={isLoading}
                aria-label={t.inputPlaceholder}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading || !input.trim()}
              >
                {t.send}
              </button>
            </form>
          </div>

          <p
            style={{
              marginTop: 20,
              textAlign: "center",
              fontSize: 13,
              color: "var(--ink-3)",
            }}
          >
            {t.preferEmail}{" "}
            <a href="mailto:mirigraphixx@gmail.com" style={{ color: "var(--accent)" }}>
              mirigraphixx@gmail.com
            </a>
            {t.or}
            <Link href="/contact" style={{ color: "var(--accent)" }}>
              {t.useForm}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
