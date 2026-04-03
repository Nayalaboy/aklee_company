export const metadata = { title: "Privacy Policy | Aklee Company" };

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: April 1, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mt-0">1. Information We Collect</h2>
          <p className="text-gray-600">We collect information you provide directly, such as your name, email address, phone number, and payment information when you register for courses, purchase hardware, or contact us. We also collect usage data through cookies and analytics tools.</p>

          <h2 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
          <p className="text-gray-600">We use your information to provide and improve our services, process transactions, send communications about courses and products, and comply with legal obligations. We do not sell your personal data to third parties.</p>

          <h2 className="text-xl font-bold text-gray-900">3. Data Security</h2>
          <p className="text-gray-600">We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits.</p>

          <h2 className="text-xl font-bold text-gray-900">4. Cookies</h2>
          <p className="text-gray-600">We use cookies to improve your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings.</p>

          <h2 className="text-xl font-bold text-gray-900">5. Third-Party Services</h2>
          <p className="text-gray-600">We use trusted third-party services for payment processing, analytics, and email delivery. These providers have their own privacy policies and are contractually obligated to protect your data.</p>

          <h2 className="text-xl font-bold text-gray-900">6. Your Rights</h2>
          <p className="text-gray-600">You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise your rights, contact us at privacy@aklee.com.</p>

          <h2 className="text-xl font-bold text-gray-900">7. International Data Transfers</h2>
          <p className="text-gray-600">As we operate in both the U.S. and Africa, your data may be transferred and processed in different jurisdictions. We ensure appropriate safeguards are in place for all cross-border data transfers.</p>

          <h2 className="text-xl font-bold text-gray-900">8. Contact</h2>
          <p className="text-gray-600">For privacy-related questions, contact us at privacy@aklee.com or write to: Aklee Company, 123 Innovation Drive, Austin, TX 78701.</p>
        </div>
      </section>
    </>
  );
}
