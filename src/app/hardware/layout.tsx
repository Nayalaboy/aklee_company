import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Hardware",
};

export default function HardwareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
