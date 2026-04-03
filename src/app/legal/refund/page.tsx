export const metadata = { title: "Refund Policy | Aklee Company" };

export default function RefundPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Refund & Return Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: April 1, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mt-0">Training Courses</h2>
          <p className="text-gray-600"><strong>Full refund:</strong> If you cancel at least 14 days before the course start date, you will receive a full refund.</p>
          <p className="text-gray-600"><strong>50% refund:</strong> Cancellations made 7-13 days before the start date qualify for a 50% refund.</p>
          <p className="text-gray-600"><strong>No refund:</strong> Cancellations made less than 7 days before the start date or after the course begins are not eligible for a refund. Course transfers may be arranged on a case-by-case basis.</p>

          <h2 className="text-xl font-bold text-gray-900">Hardware Products</h2>
          <p className="text-gray-600"><strong>30-day returns:</strong> Unused hardware products in original packaging may be returned within 30 days of delivery for a full refund.</p>
          <p className="text-gray-600"><strong>Defective products:</strong> If you receive a defective product, contact us within 7 days for a replacement or full refund. We cover return shipping for defective items.</p>
          <p className="text-gray-600"><strong>Custom configurations:</strong> Custom-built hardware orders are non-refundable unless defective.</p>

          <h2 className="text-xl font-bold text-gray-900">Consulting Services</h2>
          <p className="text-gray-600">Consulting engagements are governed by individual service agreements. Refunds for consulting services are handled on a case-by-case basis as outlined in your agreement.</p>

          <h2 className="text-xl font-bold text-gray-900">How to Request a Refund</h2>
          <p className="text-gray-600">To request a refund, email refunds@aklee.com with your order number, reason for the request, and any relevant documentation. We will respond within 3 business days. Approved refunds are processed within 5-10 business days.</p>
        </div>
      </section>
    </>
  );
}
