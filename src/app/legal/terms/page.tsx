import Link from "next/link";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-meta">
            <span>MGX / LEGAL</span>
            <span className="dot" />
            <span>LAST UPDATED APR 2026</span>
          </div>
          <h1>Terms of Service</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          <h2 className="h2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Mirigraphix Company&apos;s website and services,
            you agree to be bound by these Terms of Service. If you do not
            agree, please do not use our services.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>2. Services</h2>
          <p>
            Mirigraphix Company provides technology training, hardware sales,
            consulting services, and software applications. Service availability
            may vary by region.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities under your account.
            Notify us immediately of any unauthorised use.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>4. Payment Terms</h2>
          <p>
            Payment is due at the time of purchase or enrolment. We accept major
            credit cards and bank transfers. Contact us for current pricing
            information.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>5. Intellectual Property</h2>
          <p>
            All course materials, software, and content on this site are the
            intellectual property of Mirigraphix Company. You may not reproduce,
            distribute, or modify our content without written permission.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>6. Limitation of Liability</h2>
          <p>
            Mirigraphix Company is not liable for indirect, incidental, or
            consequential damages arising from the use of our services, to the
            maximum extent permitted by law.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>7. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Texas, United
            States. Any disputes will be resolved in the courts of Travis
            County, Texas.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>8. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of our
            services after changes constitutes acceptance of the updated terms.
          </p>
        </div>
      </section>
    </>
  );
}
