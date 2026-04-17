"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rnd", label: "R&D" },
  {
    label: "Trainings",
    href: "/trainings",
    children: [
      { href: "/trainings/cybersecurity", label: "Cybersecurity", desc: "Threat detection & compliance" },
      { href: "/trainings/ai-ml", label: "AI & Machine Learning", desc: "ML fundamentals to deployment" },
      { href: "/trainings/networking", label: "Networking & Data Centers", desc: "Infrastructure & cloud" },
      { href: "/trainings/fullstack", label: "Full-Stack Development", desc: "Frontend to DevOps" },
    ],
  },
  { href: "/hardware", label: "Hardware" },
  { href: "/services", label: "Services" },
  {
    label: "More",
    href: "#",
    children: [
      { href: "/blog", label: "Blog", desc: "Insights & tutorials" },
      { href: "/testimonials", label: "Testimonials", desc: "Client success stories" },
      { href: "/team", label: "Our Team", desc: "Meet the people" },
      { href: "/careers", label: "Careers", desc: "Join our mission" },
      { href: "/events", label: "Events", desc: "Webinars & workshops" },
      { href: "/partners", label: "Partners", desc: "Our ecosystem" },
      { href: "/faq", label: "FAQ", desc: "Common questions" },
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

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? "glass border-b border-black/5 shadow-sm"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
            <div className="relative">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-md shadow-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-3">
                <span className="text-white font-bold text-sm tracking-tight">MG</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-dark tracking-tight leading-none">Mirigraphix</span>
              <span className="text-[10px] text-warm-gray-400 font-semibold tracking-widest uppercase leading-none mt-0.5">Technology</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" onMouseEnter={() => setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                  <button className="px-3 py-2 text-[13px] font-semibold text-warm-gray-500 hover:text-primary rounded-full hover:bg-primary/5 transition-all duration-200 flex items-center gap-1.5">
                    {link.label}
                    <svg className={`w-3 h-3 transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-dark rounded-2xl shadow-2xl shadow-black/20 border border-white/10 overflow-hidden transition-all duration-300 origin-top ${
                    openDropdown === link.label ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}>
                    <div className="p-2">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors duration-200 group/item">
                          <span className="text-sm font-semibold text-white group-hover/item:text-primary-light transition-colors">{child.label}</span>
                          {"desc" in child && <span className="text-xs text-white/40 mt-0.5">{child.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href!} className="px-3 py-2 text-[13px] font-semibold text-warm-gray-500 hover:text-primary rounded-full hover:bg-primary/5 transition-all duration-200">
                  {link.label}
                </Link>
              )
            )}
            <div className="ml-3">
              <Link href="/contact" className="btn-primary btn-shimmer text-[13px] px-5 py-2.5">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden relative w-10 h-10 flex items-center justify-center text-dark rounded-xl hover:bg-primary/5 transition-all" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5">
              <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 w-full sm:w-80 h-full bg-white shadow-2xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="px-4 py-4 space-y-1 overflow-y-auto h-full pb-20">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)} className="w-full flex justify-between items-center px-4 py-3 text-sm font-semibold text-dark rounded-xl hover:bg-primary/5 transition-colors">
                    {link.label}
                    <svg className={`w-4 h-4 text-warm-gray-400 transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openDropdown === link.label ? "max-h-96 mt-1" : "max-h-0"}`}>
                    <div className="pl-3 space-y-0.5 pb-2">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-sm text-warm-gray-500 hover:text-primary rounded-xl hover:bg-primary/5 transition-colors" onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href!} className="block px-4 py-3 text-sm font-semibold text-dark rounded-xl hover:bg-primary/5 transition-colors" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 px-2">
              <Link href="/contact" className="block text-center btn-primary btn-shimmer w-full py-3" onClick={() => setMobileOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
