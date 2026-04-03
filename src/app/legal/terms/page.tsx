export const metadata = { title: "Terms of Service | Aklee Company" };

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-gray-300 mt-2">Last updated: April 1, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mt-0">1. Acceptance of Terms</h2>
          <p className="text-gray-600">By accessing or using Aklee Company&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

          <h2 className="text-xl font-bold text-gray-900">2. Services</h2>
          <p className="text-gray-600">Aklee Company provides technology training, hardware sales, consulting services, and software applications. Service availability may vary by region.</p>

          <h2 className="text-xl font-bold text-gray-900">3. User Accounts</h2>
          <p className="text-gray-600">You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use.</p>

          <h2 className="text-xl font-bold text-gray-900">4. Payment Terms</h2>
          <p className="text-gray-600">All prices are listed in USD unless otherwise stated. Payment is due at the time of purchase or enrollment. We accept major credit cards and bank transfers.</p>

          <h2 className="text-xl font-bold text-gray-900">5. Intellectual Property</h2>
          <p className="text-gray-600">All course materials, software, and content on this site are the intellectual property of Aklee Company. You may not reproduce, distribute, or modify our content without written permission.</p>

          <h2 className="text-xl font-bold text-gray-900">6. Limitation of Liability</h2>
          <p className="text-gray-600">Aklee Company is not liable for indirect, incidental, or consequential damages arising from the use of our services, to the maximum extent permitted by law.</p>

          <h2 className="text-xl font-bold text-gray-900">7. Governing Law</h2>
          <p className="text-gray-600">These terms are governed by the laws of the State of Texas, United States. Any disputes will be resolved in the courts of Travis County, Texas.</p>

          <h2 className="text-xl font-bold text-gray-900">8. Changes to Terms</h2>
          <p className="text-gray-600">We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
        </div>
      </section>
    </>
  );
}
