import Link from "next/link";

export const metadata = { title: "Refund Policy" };

export default function RefundPage() {
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
          <h1>Refund &amp; Return Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          <h2 className="h2">Training Courses</h2>
          <p>
            <strong>Full refund:</strong> If you cancel at least 14 days before
            the course start date, you will receive a full refund.
          </p>
          <p>
            <strong>50% refund:</strong> Cancellations made 7-13 days before the
            start date qualify for a 50% refund.
          </p>
          <p>
            <strong>No refund:</strong> Cancellations made less than 7 days
            before the start date or after the course begins are not eligible
            for a refund. Course transfers may be arranged on a case-by-case
            basis.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>Hardware Products</h2>
          <p>
            <strong>30-day returns:</strong> Unused hardware products in original
            packaging may be returned within 30 days of delivery for a full
            refund.
          </p>
          <p>
            <strong>Defective products:</strong> If you receive a defective
            product, contact us within 7 days for a replacement or full refund.
            We cover return shipping for defective items.
          </p>
          <p>
            <strong>Custom configurations:</strong> Custom-built hardware orders
            are non-refundable unless defective.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>Consulting Services</h2>
          <p>
            Consulting engagements are governed by individual service
            agreements. Refunds for consulting services are handled on a
            case-by-case basis as outlined in your agreement.
          </p>

          <h2 className="h2" style={{ marginTop: "48px" }}>How to Request a Refund</h2>
          <p>
            To request a refund, email mirigraphixx@gmail.com with your order
            number, reason for the request, and any relevant documentation. We
            will respond within 3 business days. Approved refunds are processed
            within 5-10 business days.
          </p>
        </div>
      </section>
    </>
  );
}
