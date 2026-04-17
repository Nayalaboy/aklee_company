import Link from "next/link";
import Image from "next/image";

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
    gradient: "from-primary/5 to-violet/5",
  },
  {
    title: "Enterprise Cybersecurity Upskill Program",
    client: "FinTech Corp",
    summary: "Designed and delivered a 3-month cybersecurity training program for 30 employees, resulting in 28 industry certifications.",
    results: ["30 employees trained", "28 certifications earned", "60% fewer incidents", "ROI in 4 months"],
    gradient: "from-emerald/5 to-cyan/5",
  },
];

const colors = ["from-primary/10 to-violet/10", "from-accent/10 to-coral/10", "from-emerald/10 to-cyan/10", "from-violet/10 to-primary/10", "from-cyan/10 to-primary/10", "from-coral/10 to-accent/10"];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-testimonials.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-primary/8 rounded-full blur-[100px] animate-blob-delay" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex">Social Proof</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Testimonials &{" "}
            <span className="gradient-text-warm">Case Studies</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            See what our clients and students say about their experience with Mirigraphix.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Testimonials</span>
            <h2 className="text-3xl font-bold text-dark mt-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={t.name} className="bento-card group">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className={`w-4 h-4 ${j < t.rating ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-warm-gray-500 text-sm mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[i]} flex items-center justify-center`}>
                    <span className="text-xs font-bold gradient-text">{t.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">{t.name}</p>
                    <p className="text-warm-gray-500 text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Results</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Case Studies</h2>
          </div>
          <div className="space-y-6">
            {caseStudies.map((cs) => (
              <div key={cs.title} className={`bento-card bg-gradient-to-br ${cs.gradient}`}>
                <h3 className="text-lg font-bold text-dark mb-1">{cs.title}</h3>
                <p className="text-primary text-xs font-semibold mb-4 uppercase tracking-wider">{cs.client}</p>
                <p className="text-warm-gray-500 text-sm mb-6 leading-relaxed">{cs.summary}</p>
                <div className="grid sm:grid-cols-4 gap-3">
                  {cs.results.map((r) => (
                    <div key={r} className="bg-white rounded-xl p-4 text-center border border-dark/6">
                      <p className="text-xs font-bold text-primary">{r}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Become Our Next Success Story</h2>
          <Link href="/contact" className="btn-primary inline-flex">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
