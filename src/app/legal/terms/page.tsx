export const metadata = { title: "Terms of Service" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using Mirigraphix Company's website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
  },
  {
    title: "2. Services",
    body: "Mirigraphix Company provides technology training, hardware sales, consulting services, and software applications. Service availability may vary by region.",
  },
  {
    title: "3. User Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use.",
  },
  {
    title: "4. Payment Terms",
    body: "Payment is due at the time of purchase or enrollment. We accept major credit cards and bank transfers. Contact us for current pricing information.",
  },
  {
    title: "5. Intellectual Property",
    body: "All course materials, software, and content on this site are the intellectual property of Mirigraphix Company. You may not reproduce, distribute, or modify our content without written permission.",
  },
  {
    title: "6. Limitation of Liability",
    body: "Mirigraphix Company is not liable for indirect, incidental, or consequential damages arising from the use of our services, to the maximum extent permitted by law.",
  },
  {
    title: "7. Governing Law",
    body: "These terms are governed by the laws of the State of Pennsylvania, United States. Any disputes will be resolved in the courts of Philadelphia County, Pennsylvania.",
  },
  {
    title: "8. Changes to Terms",
    body: "We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
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
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">Terms of Service</h1>
          <p className="text-indigo-300/60 text-sm">Last updated: April 1, 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-indigo-100/60 overflow-hidden shadow-sm">
            <div className="divide-y divide-indigo-100/60">
              {sections.map((s) => (
                <div key={s.title} className="px-8 py-7">
                  <h2 className="text-base font-extrabold text-gray-900 mb-3">{s.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
