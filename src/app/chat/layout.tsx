import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Advisor",
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return children;
}
