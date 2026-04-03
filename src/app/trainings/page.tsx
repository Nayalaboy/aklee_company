import Link from "next/link";

export const metadata = { title: "Trainings | Aklee Company" };

const categories = [
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Threat detection, ethical hacking, regulatory compliance, and incident response.",
    courses: ["Intro to Cybersecurity", "Ethical Hacking & Pen Testing", "Compliance & Risk Management", "Incident Response"],
    certifications: ["CompTIA Security+", "CEH", "CISSP Prep"],
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    description: "Machine learning fundamentals, deep learning, AI ethics, and practical applications.",
    courses: ["ML Fundamentals with Python", "Deep Learning & Neural Networks", "NLP & Computer Vision", "AI Ethics & Governance"],
    certifications: ["Google ML Certificate", "AWS ML Specialty"],
  },
  {
    slug: "networking",
    title: "Networking & Data Centers",
    description: "Network design, virtualization, cloud infrastructure, and data center management.",
    courses: ["Network Fundamentals", "Cisco Routing & Switching", "Cloud Infrastructure (AWS/Azure)", "Data Center Design & Ops"],
    certifications: ["CompTIA Network+", "CCNA", "AWS Solutions Architect"],
  },
  {
    slug: "fullstack",
    title: "Full-Stack Development",
    description: "Frontend, backend, databases, DevOps, and modern deployment practices.",
    courses: ["HTML/CSS/JavaScript", "React & Next.js", "Python/Node.js Backend", "DevOps & CI/CD Pipelines"],
    certifications: ["Meta Frontend Certificate", "AWS Developer Associate"],
  },
];

export default function TrainingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Training Programs</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Industry-leading courses designed to launch and accelerate your tech career. Learn from experts with hands-on projects and certification prep.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.slug} className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{cat.title}</h2>
                <p className="text-gray-600 mb-4">{cat.description}</p>

                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Courses</h3>
                <ul className="space-y-1 mb-4">
                  {cat.courses.map((c) => (
                    <li key={c} className="text-gray-700 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Certification Prep</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.certifications.map((cert) => (
                    <span key={cert} className="px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/trainings/${cat.slug}`}
                  className="inline-block px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition"
                >
                  View Courses
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-600 mb-6">Our advisors can help you choose the right learning path based on your goals and experience level.</p>
          <Link href="/contact" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition">
            Talk to an Advisor
          </Link>
        </div>
      </section>
    </>
  );
}
