export const metadata = { title: "Blog & Resources" };

export default function BlogPage() {
  return (
    <>
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">Insights</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Blog & Resources</h1>
          <p className="text-blue-200/90 text-lg max-w-2xl leading-relaxed">
            Insights, tutorials, and industry news from our team of experts.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            We&apos;re preparing insightful articles on cybersecurity, AI, networking, full-stack development, and more. Stay tuned for expert tutorials, industry analysis, and company updates.
          </p>
          <div className="max-w-md mx-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Get notified when we launch</p>
            <form className="flex gap-2">
              <input type="email" placeholder="you@example.com" className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" />
              <button type="submit" className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm">
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
