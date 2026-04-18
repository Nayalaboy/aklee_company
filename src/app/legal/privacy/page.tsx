import Link from "next/link";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
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
          <h1>Privacy Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          <h2 className="h2">1. Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name,
            email address, phone number, and payment information when you
            register for courses, purchase hardware, or contact us. We also
            collect usage data through cookies and analytics tools.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>2. How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our services, process
            transactions, send communications about courses and products, and
            comply with legal obligations. We do not sell your personal data to
            third parties.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>3. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            data, including encryption in transit and at rest, access controls,
            and regular security audits.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>4. Cookies</h2>
          <p>
            We use cookies to improve your browsing experience, analyse site
            traffic, and personalise content. You can manage cookie preferences
            through your browser settings.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>5. Third-Party Services</h2>
          <p>
            We use trusted third-party services for payment processing,
            analytics, and email delivery. These providers have their own privacy
            policies and are contractually obligated to protect your data.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            You may also opt out of marketing communications at any time. To
            exercise your rights, contact us at mirigraphixx@gmail.com.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>7. International Data Transfers</h2>
          <p>
            As we operate in both the U.S. and Africa, your data may be
            transferred and processed in different jurisdictions. We ensure
            appropriate safeguards are in place for all cross-border data
            transfers.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>8. Contact</h2>
          <p>
            For privacy-related questions, contact us at mirigraphixx@gmail.com
            or write to: Mirigraphix Company, North Carolina.
          </p>
        </div>
      </section>
    </>
  );
}
