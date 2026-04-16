import Link from "next/link";

const footerSections = [
  {
    title: "Trainings",
    links: [
      { href: "/trainings/cybersecurity", label: "Cybersecurity" },
      { href: "/trainings/ai-ml", label: "AI & Machine Learning" },
      { href: "/trainings/networking", label: "Networking" },
      { href: "/trainings/fullstack", label: "Full-Stack Dev" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/team", label: "Our Team" },
      { href: "/careers", label: "Careers" },
      { href: "/partners", label: "Partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/events", label: "Events" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Service" },
      { href: "/legal/refund", label: "Refund Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#060412] text-gray-400">
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] rounded-full bg-violet-800/20 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-cyan-800/15 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-900/50">
                <span className="text-white font-extrabold text-sm tracking-tight">MG</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-extrabold text-white tracking-tight">Mirigraphix</span>
                <span className="text-[9px] font-semibold text-violet-400 uppercase tracking-widest">Technology</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              Empowering businesses and individuals through world-class training,
              enterprise technology, and bold innovation — across the U.S. and Africa.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Training", "Hardware", "R&D"].map((b) => (
                <span key={b} className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-violet-500/20 text-violet-400 bg-violet-500/10">
                  {b}
                </span>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Stay Updated</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl text-sm font-bold hover:from-violet-500 hover:to-indigo-500 transition-all shadow-md shadow-violet-900/40"
                >
                  →
                </button>
              </form>
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Mirigraphix Company. All rights reserved.
          </p>

          {/* Location badges */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
              🇺🇸 United States
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
              🌍 West Africa
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter / X"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/40 transition-all duration-200">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/40 transition-all duration-200">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/40 transition-all duration-200">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
