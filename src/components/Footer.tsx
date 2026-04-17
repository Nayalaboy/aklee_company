import Link from "next/link";

const footerSections = [
  { title: "Trainings", links: [
    { href: "/trainings/cybersecurity", label: "Cybersecurity" },
    { href: "/trainings/ai-ml", label: "AI & Machine Learning" },
    { href: "/trainings/networking", label: "Networking" },
    { href: "/trainings/fullstack", label: "Full-Stack Dev" },
  ]},
  { title: "Company", links: [
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/careers", label: "Careers" },
    { href: "/partners", label: "Partners" },
  ]},
  { title: "Resources", links: [
    { href: "/blog", label: "Blog" },
    { href: "/events", label: "Events" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]},
  { title: "Legal", links: [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/refund", label: "Refund Policy" },
  ]},
];

export default function Footer() {
  return (
    <footer className="relative bg-dark text-white overflow-hidden">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-gold to-teal" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Newsletter */}
        <div className="mb-16 rounded-3xl bg-white/5 border border-white/8 p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Stay in the loop</h3>
              <p className="text-sm text-white/50">Get updates on new courses, products, and R&D launches.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input type="email" placeholder="you@email.com" className="flex-1 md:w-64 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              <button type="submit" className="btn-primary btn-shimmer whitespace-nowrap">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">MG</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Mirigraphix</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              AI-driven R&D company empowering businesses and individuals through innovation, training, and enterprise technology across the U.S. and Africa.
            </p>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs text-white/30">🇺🇸 North Carolina</span>
              <span className="text-white/10">|</span>
              <span className="text-xs text-white/30">🌍 Africa</span>
            </div>
            <div className="flex items-center gap-3">
              {[
                "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              ].map((d, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/30 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300" aria-label="Social">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/30 hover:text-primary-light transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} Mirigraphix Company. All rights reserved.</p>
          <p className="text-xs text-white/20">Innovation. Technology. Impact.</p>
        </div>
      </div>
    </footer>
  );
}
