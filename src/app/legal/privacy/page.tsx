export const metadata = { title: "Privacy Policy" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly, such as your name, email address, phone number, and payment information when you register for courses, purchase hardware, or contact us. We also collect usage data through cookies and analytics tools.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to provide and improve our services, process transactions, send communications about courses and products, and comply with legal obligations. We do not sell your personal data to third parties.",
  },
  {
    title: "3. Data Security",
    body: "We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits.",
  },
  {
    title: "4. Cookies",
    body: "We use cookies to improve your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "5. Third-Party Services",
    body: "We use trusted third-party services for payment processing, analytics, and email delivery. These providers have their own privacy policies and are contractually obligated to protect your data.",
  },
  {
    title: "6. Your Rights",
    body: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise your rights, contact us at mirigraphixx@gmail.com.",
  },
  {
    title: "7. International Data Transfers",
    body: "As we operate in both the U.S. and Africa, your data may be transferred and processed in different jurisdictions. We ensure appropriate safeguards are in place for all cross-border data transfers.",
  },
  {
    title: "8. Contact",
    body: "For privacy-related questions, contact us at mirigraphixx@gmail.com or write to: Mirigraphix Company, Philadelphia, PA.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060412] via-[#1a0e40] to-[#0c1635]" />
        <div className="glow-orb absolute -top-24 left-0 w-[400px] h-[300px] bg-violet-700 opacity-20 animate-glow-pulse" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRID_BG }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wide mb-6">
            Legal
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-indigo-300/60 text-sm">Last updated: April 1, 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-16">
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-indigo-100/60 overflow-hidden shadow-sm">
            <div className="divide-y divide-indigo-100/60">
              {sections.map((s) => (
                <div key={s.title} className="px-8 py-7">
                  <h2 className="text-base font-extrabold text-gray-900 mb-3">{s.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
=======
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-professional">
          <h2 className="text-lg font-bold text-dark mt-0 pb-2 border-b border-dark/6">1. Information We Collect</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3">We collect information you provide directly, such as your name, email address, phone number, and payment information when you register for courses, purchase hardware, or contact us. We also collect usage data through cookies and analytics tools.</p>

          <h2 className="text-lg font-bold text-dark mt-8 pb-2 border-b border-dark/6">2. How We Use Your Information</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3">We use your information to provide and improve our services, process transactions, send communications about courses and products, and comply with legal obligations. We do not sell your personal data to third parties.</p>

          <h2 className="text-lg font-bold text-dark mt-8 pb-2 border-b border-dark/6">3. Data Security</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3">We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits.</p>

          <h2 className="text-lg font-bold text-dark mt-8 pb-2 border-b border-dark/6">4. Cookies</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3">We use cookies to improve your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings.</p>

          <h2 className="text-lg font-bold text-dark mt-8 pb-2 border-b border-dark/6">5. Third-Party Services</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3">We use trusted third-party services for payment processing, analytics, and email delivery. These providers have their own privacy policies and are contractually obligated to protect your data.</p>

          <h2 className="text-lg font-bold text-dark mt-8 pb-2 border-b border-dark/6">6. Your Rights</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3">You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise your rights, contact us at mirigraphixx@gmail.com.</p>

          <h2 className="text-lg font-bold text-dark mt-8 pb-2 border-b border-dark/6">7. International Data Transfers</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3">As we operate in both the U.S. and Africa, your data may be transferred and processed in different jurisdictions. We ensure appropriate safeguards are in place for all cross-border data transfers.</p>

          <h2 className="text-lg font-bold text-dark mt-8 pb-2 border-b border-dark/6">8. Contact</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3">For privacy-related questions, contact us at mirigraphixx@gmail.com or write to: Mirigraphix Company, North Carolina.</p>
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
        </div>
      </section>
    </>
  );
}
