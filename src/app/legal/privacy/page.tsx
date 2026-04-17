export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Legal</p>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-gray-400 mt-2 text-sm">Last updated: April 1, 2026</p>
        </div>
      </section>

      <section className="py-16">
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
        </div>
      </section>
    </>
  );
}
