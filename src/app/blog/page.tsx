import Link from "next/link";

export const metadata = { title: "Blog & Resources" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const posts = [
  {
    title: "Cross-Border Payments in 2026: The Africa Opportunity",
    excerpt: "The African fintech space is growing rapidly. We explore the challenges and innovations shaping cross-border money movement between the U.S. and Africa.",
    category: "Fintech",
    date: "April 10, 2026",
    readTime: "5 min read",
    gradient: "from-amber-400/10 to-orange-400/5",
    categoryColor: "text-amber-600 bg-amber-50 border-amber-200",
    featured: true,
  },
  {
    title: "Why AI-First Is the Only Strategy That Matters",
    excerpt: "Every product we build starts with AI at its core. Here is why we believe this approach produces better outcomes for users on both continents.",
    category: "AI & Strategy",
    date: "April 5, 2026",
    readTime: "4 min read",
    gradient: "from-violet-400/10 to-indigo-400/5",
    categoryColor: "text-violet-600 bg-violet-50 border-violet-200",
    featured: false,
  },
  {
    title: "How We Deployed 200 Macs Across 15 Schools in Africa",
    excerpt: "A behind-the-scenes look at our EduAfrica partnership — the logistics, challenges, and lessons learned from a large-scale hardware deployment.",
    category: "Case Study",
    date: "March 28, 2026",
    readTime: "7 min read",
    gradient: "from-emerald-400/10 to-teal-400/5",
    categoryColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    featured: false,
  },
  {
    title: "CompTIA Security+ in 2026: Is It Still Worth It?",
    excerpt: "With cybersecurity threats at an all-time high, we break down why Security+ remains one of the most valuable certifications you can earn.",
    category: "Cybersecurity",
    date: "March 20, 2026",
    readTime: "6 min read",
    gradient: "from-red-400/10 to-orange-400/5",
    categoryColor: "text-red-600 bg-red-50 border-red-200",
    featured: false,
  },
  {
    title: "Building for Two Markets: Design Lessons from U.S.-Africa Tech",
    excerpt: "Designing software that works equally well in both markets requires understanding deep differences in connectivity, payments, and user behavior.",
    category: "Product Design",
    date: "March 12, 2026",
    readTime: "5 min read",
    gradient: "from-cyan-400/10 to-sky-400/5",
    categoryColor: "text-cyan-600 bg-cyan-50 border-cyan-200",
    featured: false,
  },
  {
    title: "The Networking Skills Gap: What Enterprises Are Missing",
    excerpt: "Enterprise networking has changed dramatically with SD-WAN, cloud-native infrastructure, and zero-trust security. Here is what teams need to learn.",
    category: "Networking",
    date: "March 5, 2026",
    readTime: "4 min read",
    gradient: "from-indigo-400/10 to-violet-400/5",
    categoryColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
    featured: false,
  },
];

const [featured, ...rest] = posts;

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060412] via-[#1a0e40] to-[#0c1635]" />
        <div className="glow-orb absolute -top-24 left-0 w-[500px] h-[400px] bg-violet-700 opacity-20 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-500 opacity-15 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRID_BG }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Insights
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Blog &{" "}
            <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed">
            Insights on AI, cybersecurity, cross-border technology, and the problems we are working to solve.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Featured post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-widest border border-amber-200">
              Latest Article
            </span>
          </div>
          <div className={`group relative bg-gradient-to-br ${featured.gradient} rounded-3xl border border-amber-200/60 p-10 lg:p-12 card-hover overflow-hidden`}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                <span className="text-gray-400 text-xs">{featured.date}</span>
                <span className="text-gray-400 text-xs">{featured.readTime}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{featured.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-7">{featured.excerpt}</p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:gap-4 transition-all duration-200">
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.title} className={`group bg-gradient-to-br ${post.gradient} rounded-3xl border border-indigo-100/60 p-7 card-hover`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2 leading-snug group-hover:text-indigo-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href="/contact" className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0818] via-[#1a0e40] to-[#0f1a30]" />
        <div className="glow-orb absolute top-0 left-1/4 w-[500px] h-[300px] bg-violet-700 opacity-25" />
        <div className="glow-orb absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-600 opacity-20" />
        <div className="max-w-2xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Stay in the Loop
          </h2>
          <p className="text-indigo-200/80 mb-10 text-lg">
            Get new articles delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-sm backdrop-blur-sm"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all text-sm shadow-lg shadow-indigo-900/50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
