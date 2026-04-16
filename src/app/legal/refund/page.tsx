export const metadata = { title: "Refund Policy" };

export default function RefundPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Legal</p>
          <h1 className="text-3xl font-bold tracking-tight">Refund & Return Policy</h1>
          <p className="text-gray-400 mt-2 text-sm">Last updated: April 1, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-professional">
          <h2 className="text-lg font-bold text-gray-900 mt-0 pb-2 border-b border-gray-100">Training Courses</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3"><strong className="text-gray-700">Full refund:</strong> If you cancel at least 14 days before the course start date, you will receive a full refund.</p>
          <p className="text-gray-500 text-sm leading-relaxed"><strong className="text-gray-700">50% refund:</strong> Cancellations made 7-13 days before the start date qualify for a 50% refund.</p>
          <p className="text-gray-500 text-sm leading-relaxed"><strong className="text-gray-700">No refund:</strong> Cancellations made less than 7 days before the start date or after the course begins are not eligible for a refund. Course transfers may be arranged on a case-by-case basis.</p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 pb-2 border-b border-gray-100">Hardware Products</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3"><strong className="text-gray-700">30-day returns:</strong> Unused hardware products in original packaging may be returned within 30 days of delivery for a full refund.</p>
          <p className="text-gray-500 text-sm leading-relaxed"><strong className="text-gray-700">Defective products:</strong> If you receive a defective product, contact us within 7 days for a replacement or full refund. We cover return shipping for defective items.</p>
          <p className="text-gray-500 text-sm leading-relaxed"><strong className="text-gray-700">Custom configurations:</strong> Custom-built hardware orders are non-refundable unless defective.</p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 pb-2 border-b border-gray-100">Consulting Services</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3">Consulting engagements are governed by individual service agreements. Refunds for consulting services are handled on a case-by-case basis as outlined in your agreement.</p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 pb-2 border-b border-gray-100">How to Request a Refund</h2>
          <p className="text-gray-500 text-sm leading-relaxed mt-3">To request a refund, email mirigraphixx@gmail.com with your order number, reason for the request, and any relevant documentation. We will respond within 3 business days. Approved refunds are processed within 5-10 business days.</p>
        </div>
      </section>
    </>
  );
}
