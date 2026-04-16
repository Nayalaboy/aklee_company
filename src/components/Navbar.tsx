"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Trainings",
    href: "/trainings",
    children: [
      { href: "/trainings/cybersecurity", label: "Cybersecurity", icon: "🛡️" },
      { href: "/trainings/ai-ml", label: "AI & Machine Learning", icon: "🤖" },
      { href: "/trainings/networking", label: "Networking & Data Centers", icon: "🌐" },
      { href: "/trainings/fullstack", label: "Full-Stack Development", icon: "💻" },
    ],
  },
  { href: "/hardware", label: "Hardware" },
  { href: "/rnd", label: "R&D" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  {
    label: "More",
    href: "#",
    children: [
      { href: "/testimonials", label: "Testimonials", icon: "💬" },
      { href: "/team", label: "Our Team", icon: "👥" },
      { href: "/careers", label: "Careers", icon: "💼" },
      { href: "/events", label: "Events", icon: "📅" },
      { href: "/partners", label: "Partners", icon: "🤝" },
      { href: "/faq", label: "FAQ", icon: "❓" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-indigo-100/60 shadow-sm shadow-indigo-100/40"
          : "bg-white border-b border-gray-100/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-300/40 group-hover:shadow-indigo-300/60 group-hover:scale-105 transition-all duration-300">
              <span className="text-white font-extrabold text-sm tracking-tight">MG</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-extrabold text-gray-900 tracking-tight">Mirigraphix</span>
              <span className="text-[9px] font-semibold text-indigo-400 uppercase tracking-widest">Technology</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-200 flex items-center gap-1">
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180 text-indigo-500" : "text-gray-400"}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-xl shadow-indigo-100/60 border border-indigo-100/60 overflow-hidden transition-all duration-200 origin-top ${
                      openDropdown === link.label
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="p-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-150"
                        >
                          <span className="text-base">{child.icon}</span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-200"
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              href="/contact"
              className="btn-shimmer ml-3 px-5 py-2.5 text-sm font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-indigo-300/40 hover:shadow-indigo-300/60 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[680px] border-t border-indigo-100/60" : "max-h-0"}`}>
        <div className="px-4 py-3 space-y-1 bg-white">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  className="w-full flex justify-between items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180 text-indigo-500" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${openDropdown === link.label ? "max-h-72 mt-1" : "max-h-0"}`}>
                  <div className="pl-4 space-y-0.5">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-500 hover:text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-sm">{child.icon}</span>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-2 pb-1">
            <Link
              href="/contact"
              className="block text-center px-4 py-3 text-sm font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
