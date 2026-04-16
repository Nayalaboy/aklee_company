import Link from "next/link";

export const metadata = { title: "Testimonials & Case Studies" };

const testimonials = [
  { name: "Sarah M.", role: "Cybersecurity Analyst", company: "FinTech Corp", text: "The cybersecurity training at Mirigraphix completely transformed my career. I went from an entry-level role to a security analyst within 6 months of completing the program.", rating: 5 },
  { name: "James K.", role: "IT Director", company: "Lagos Tech Hub", text: "Mirigraphix supplied our entire office with custom-configured Macs. Their bulk pricing and support for African clients is unmatched. Delivery was fast and seamless.", rating: 5 },
  { name: "Amina O.", role: "Software Engineer", company: "Startup XYZ", text: "The full-stack development bootcamp was intensive but incredibly rewarding. The capstone project alone was worth the investment. I now build production apps with confidence.", rating: 5 },
  { name: "David R.", role: "CTO", company: "GlobalPay Solutions", text: "We partnered with Mirigraphix on their money-transfer R&D project. Their engineering team is world-class and their cross-border expertise is exactly what we needed.", rating: 5 },
  { name: "Linda T.", role: "Network Engineer", company: "US Gov Contractor", text: "The networking course prepared me for my CCNA in ways I didn't expect. The hands-on labs and real-world scenarios were invaluable.", rating: 4 },
  { name: "Michael B.", role: "Founder", company: "EduAfrica", text: "Mirigraphix helped us set up IT infrastructure across three African countries. Their team understood the local challenges and delivered on time and on budget.", rating: 5 },
];

const caseStudies = [
  {
    title: "Pan-African School Network Deployment",
    client: "EduAfrica Foundation",
    summary: "Deployed 200+ Macs and configured secure networks across 15 schools in Kenya, Nigeria, and Ghana. Trained 50 local IT staff.",
    results: ["200+ devices deployed", "15 schools connected", "50 staff trained", "99.5% uptime achieved"],
  },
  {
    title: "Enterprise Cybersecurity Upskill Program",
    client: "FinTech Corp",
    summary: "Designed and delivered a 3-month cybersecurity training program for 30 employees, resulting in 28 industry certifications.",
    results: ["30 employees trained", "28 certifications earned", "60% reduction in security incidents", "ROI achieved in 4 months"],
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">Social Proof</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Testimonials & Case Studies</h1>
          <p className="text-blue-200/90 text-lg max-w-2xl leading-relaxed">
            See what our clients and students say about their experience with Mirigraphix Company.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Testimonials</p>
            <h2 className="text-2xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-100 p-6 card-hover bg-white">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < t.rating ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Results</p>
            <h2 className="text-2xl font-bold text-gray-900">Case Studies</h2>
          </div>
          <div className="space-y-6">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="bg-white rounded-2xl border border-gray-100 p-8 card-hover">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{cs.title}</h3>
                <p className="text-primary text-xs font-semibold mb-3 uppercase tracking-wider">{cs.client}</p>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{cs.summary}</p>
                <div className="grid sm:grid-cols-4 gap-3">
                  {cs.results.map((r) => (
                    <div key={r} className="bg-primary/5 rounded-xl p-3 text-center">
                      <p className="text-xs font-semibold text-primary">{r}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Become Our Next Success Story</h2>
          <Link href="/contact" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm text-sm">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
