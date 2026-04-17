export const metadata = { title: "Refund & Return Policy" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const sections = [
  {
    title: "Training Courses",
    items: [
      { label: "Full refund", desc: "Cancel at least 14 days before the course start date for a full refund." },
      { label: "50% refund", desc: "Cancellations made 7–13 days before the start date qualify for a 50% refund." },
      { label: "No refund", desc: "Cancellations made less than 7 days before the start date, or after the course begins, are not eligible for a refund. Course transfers may be arranged on a case-by-case basis." },
    ],
  },
  {
    title: "Hardware Products",
    items: [
      { label: "30-day returns", desc: "Unused hardware in original packaging may be returned within 30 days of delivery for a full refund." },
      { label: "Defective products", desc: "If you receive a defective product, contact us within 7 days for a replacement or full refund. We cover return shipping for defective items." },
      { label: "Custom configurations", desc: "Custom-built hardware orders are non-refundable unless defective." },
    ],
  },
  {
    title: "Consulting Services",
    items: [
      { label: "Service agreements", desc: "Consulting engagements are governed by individual service agreements. Refunds for consulting services are handled on a case-by-case basis as outlined in your agreement." },
    ],
  },
  {
    title: "How to Request a Refund",
    items: [
      { label: "Email us", desc: "Send your request to mirigraphixx@gmail.com with your order number, reason, and any relevant documentation. We respond within 3 business days. Approved refunds are processed within 5–10 business days." },
    ],
  },
];

export default function RefundPage() {
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
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">Refund & Return Policy</h1>
          <p className="text-indigo-300/60 text-sm">Last updated: April 1, 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-16">
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {sections.map((s) => (
            <div key={s.title} className="bg-white rounded-3xl border border-indigo-100/60 overflow-hidden shadow-sm">
              <div className="px-8 py-5 border-b border-indigo-100/60 bg-indigo-50/40">
                <h2 className="text-base font-extrabold text-gray-900">{s.title}</h2>
              </div>
              <div className="divide-y divide-indigo-100/40">
                {s.items.map((item) => (
                  <div key={item.label} className="px-8 py-5 flex gap-4">
                    <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-wider w-32 flex-shrink-0 pt-0.5">{item.label}</span>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
=======
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-professional">
          <h2 className="text-lg font-bold text-dark mt-0 pb-2 border-b border-dark/6">Training Courses</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3"><strong className="text-dark">Full refund:</strong> If you cancel at least 14 days before the course start date, you will receive a full refund.</p>
          <p className="text-warm-gray-500 text-sm leading-relaxed"><strong className="text-dark">50% refund:</strong> Cancellations made 7-13 days before the start date qualify for a 50% refund.</p>
          <p className="text-warm-gray-500 text-sm leading-relaxed"><strong className="text-dark">No refund:</strong> Cancellations made less than 7 days before the start date or after the course begins are not eligible for a refund. Course transfers may be arranged on a case-by-case basis.</p>

          <h2 className="text-lg font-bold text-dark mt-8 pb-2 border-b border-dark/6">Hardware Products</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3"><strong className="text-dark">30-day returns:</strong> Unused hardware products in original packaging may be returned within 30 days of delivery for a full refund.</p>
          <p className="text-warm-gray-500 text-sm leading-relaxed"><strong className="text-dark">Defective products:</strong> If you receive a defective product, contact us within 7 days for a replacement or full refund. We cover return shipping for defective items.</p>
          <p className="text-warm-gray-500 text-sm leading-relaxed"><strong className="text-dark">Custom configurations:</strong> Custom-built hardware orders are non-refundable unless defective.</p>

          <h2 className="text-lg font-bold text-dark mt-8 pb-2 border-b border-dark/6">Consulting Services</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3">Consulting engagements are governed by individual service agreements. Refunds for consulting services are handled on a case-by-case basis as outlined in your agreement.</p>

          <h2 className="text-lg font-bold text-dark mt-8 pb-2 border-b border-dark/6">How to Request a Refund</h2>
          <p className="text-warm-gray-500 text-sm leading-relaxed mt-3">To request a refund, email mirigraphixx@gmail.com with your order number, reason for the request, and any relevant documentation. We will respond within 3 business days. Approved refunds are processed within 5-10 business days.</p>
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
        </div>
      </section>
    </>
  );
}
