"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function ChatPage() {
  const welcomeText = "Hi! I'm the Mirigraphix advisor. I can help you with our training programs, enterprise hardware, R&D beta access, or consulting services. What are you looking for today?";

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
      {/* Hero */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/12 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-emerald/8 rounded-full blur-[100px] animate-blob-delay" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label mb-4 inline-flex">AI Advisor</span>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 mt-4">
            Talk to Our{" "}
            <span className="gradient-text">Advisor</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Get instant guidance on trainings, hardware, R&D, and more.
          </p>
        </div>
      </section>

      {/* Chat */}
      <section className="py-10 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bento-card !p-0 overflow-hidden flex flex-col" style={{ height: "min(65vh, 600px)" }}>
            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-primary to-primary-light text-white rounded-br-md"
                        : "bg-gray-50 text-gray-700 border border-gray-100 rounded-bl-md"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-primary via-primary-light to-violet flex items-center justify-center">
                          <span className="text-white text-[8px] font-bold">MG</span>
                        </div>
                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Advisor</span>
                      </div>
                    )}
                    <p className="whitespace-pre-wrap">
                      {msg.parts
                        ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
                        .map((p) => p.text)
                        .join("") || msg.content}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-5 h-5 rounded-md bg-gradient-to-br from-primary via-primary-light to-violet flex items-center justify-center">
                        <span className="text-white text-[8px] font-bold">MG</span>
                      </div>
                      <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Advisor</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" />
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="flex justify-start">
                  <div className="bg-red-50 border border-red-100 rounded-2xl rounded-bl-md px-4 py-3 text-sm text-red-600">
                    Something went wrong. Please try again or email us at{" "}
                    <a href="mailto:mirigraphixx@gmail.com" className="underline font-medium">
                      mirigraphixx@gmail.com
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-gray-100 p-4 bg-white">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about trainings, hardware, R&D..."
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all placeholder-gray-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-5 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Fallback */}
          <div className="mt-6 text-center">
            <p className="text-xs text-warm-gray-500">
              Prefer email?{" "}
              <a href="mailto:mirigraphixx@gmail.com" className="text-primary hover:underline font-medium">
                mirigraphixx@gmail.com
              </a>
              {" "}or{" "}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                use our contact form
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
