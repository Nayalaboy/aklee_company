export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Legal</p>
          <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-gray-400 mt-2 text-sm">Last updated: April 1, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-professional">
          <h2 className="text-lg font-bold text-gray-900 mt-0 pb-2 border-b border-gray-100">1. Acceptance of Terms</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3">By accessing or using Mirigraphix Company&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 pb-2 border-b border-gray-100">2. Services</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3">Mirigraphix Company provides technology training, hardware sales, consulting services, and software applications. Service availability may vary by region.</p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 pb-2 border-b border-gray-100">3. User Accounts</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3">You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use.</p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 pb-2 border-b border-gray-100">4. Payment Terms</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3">Payment is due at the time of purchase or enrollment. We accept major credit cards and bank transfers. Contact us for current pricing information.</p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 pb-2 border-b border-gray-100">5. Intellectual Property</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3">All course materials, software, and content on this site are the intellectual property of Mirigraphix Company. You may not reproduce, distribute, or modify our content without written permission.</p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 pb-2 border-b border-gray-100">6. Limitation of Liability</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3">Mirigraphix Company is not liable for indirect, incidental, or consequential damages arising from the use of our services, to the maximum extent permitted by law.</p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 pb-2 border-b border-gray-100">7. Governing Law</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3">These terms are governed by the laws of the State of Texas, United States. Any disputes will be resolved in the courts of Travis County, Texas.</p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 pb-2 border-b border-gray-100">8. Changes to Terms</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3">We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
        </div>
      </section>
    </>
  );
}
