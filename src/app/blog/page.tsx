import Link from "next/link";

export const metadata = { title: "Blog & Resources | Aklee Company" };

const posts = [
  {
    slug: "cybersecurity-trends-2026",
    title: "Top Cybersecurity Trends to Watch in 2026",
    excerpt: "From AI-powered attacks to zero-trust architecture, here are the security trends shaping the industry this year.",
    category: "Cybersecurity",
    date: "March 28, 2026",
    readTime: "5 min",
  },
  {
    slug: "ai-ethics-business",
    title: "AI Ethics in Business: What You Need to Know",
    excerpt: "As AI becomes mainstream, organizations must address bias, transparency, and accountability in their AI systems.",
    category: "AI & ML",
    date: "March 20, 2026",
    readTime: "7 min",
  },
  {
    slug: "mac-fleet-management",
    title: "Managing a Mac Fleet: Enterprise Best Practices",
    excerpt: "Tips for deploying, securing, and maintaining Mac devices at scale in your organization.",
    category: "Hardware",
    date: "March 15, 2026",
    readTime: "6 min",
  },
  {
    slug: "cross-border-fintech",
    title: "Building Cross-Border Fintech for Africa",
    excerpt: "Lessons learned developing our money-transfer app: regulatory challenges, mobile-money integration, and user research.",
    category: "R&D",
    date: "March 10, 2026",
    readTime: "8 min",
  },
  {
    slug: "fullstack-career-guide",
    title: "Full-Stack Developer Career Guide 2026",
    excerpt: "The skills, certifications, and portfolio projects you need to land your first (or next) full-stack role.",
    category: "Development",
    date: "March 5, 2026",
    readTime: "6 min",
  },
  {
    slug: "networking-cloud-migration",
    title: "Migrating Enterprise Networks to the Cloud",
    excerpt: "A step-by-step guide to planning and executing a cloud network migration with minimal downtime.",
    category: "Networking",
    date: "February 28, 2026",
    readTime: "7 min",
  },
];

const categories = ["All", "Cybersecurity", "AI & ML", "Hardware", "R&D", "Development", "Networking"];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Insights, tutorials, and industry news from our team of experts.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${cat === "All" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Featured Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-primary text-sm font-medium hover:underline">
                    Read more &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest articles, tutorials, and company news delivered to your inbox.</p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
