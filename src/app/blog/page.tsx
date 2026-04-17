import Image from "next/image";

export const metadata = { title: "Blog & Resources" };

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-blog.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/12 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-[100px] animate-blob-delay" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex">Insights</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Blog &{" "}
            <span className="gradient-text-warm">Resources</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Insights, tutorials, and industry news from our team of experts.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-32">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-violet/10 flex items-center justify-center mx-auto mb-8">
            <svg className="w-9 h-9 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-dark mb-4">Coming Soon</h2>
          <p className="text-warm-gray-500 leading-relaxed mb-10 text-lg">
            We&apos;re preparing insightful articles on cybersecurity, AI, networking, full-stack development, and more. Stay tuned for expert tutorials, industry analysis, and company updates.
          </p>
          <div className="max-w-md mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-warm-gray-500 mb-3">Get notified when we launch</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 bg-white border border-dark/8 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all placeholder-warm-gray-300"
              />
              <button type="submit" className="px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
