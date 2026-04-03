import Link from "next/link";

export const metadata = { title: "Research & Development | Aklee Company" };

const projects = [
  {
    name: "Money Transfer App",
    status: "Beta",
    statusColor: "bg-yellow-100 text-yellow-800",
    description: "A secure, low-fee money transfer platform enabling seamless transactions between the U.S. and Africa. Built for speed, compliance, and accessibility.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Stripe API", "Blockchain"],
    problem: "Traditional remittance services charge 5-10% fees with multi-day delays, creating a financial burden for diaspora communities.",
    solution: "Our app reduces fees to under 2% with near-instant transfers using blockchain settlement and local mobile-money integrations.",
  },
  {
    name: "Job Application App",
    status: "In Development",
    statusColor: "bg-blue-100 text-blue-800",
    description: "An AI-powered job application platform that matches candidates with opportunities across the U.S. and Africa, streamlining the hiring process.",
    tech: ["Next.js", "Python", "TensorFlow", "MongoDB", "AWS"],
    problem: "Cross-border job seekers struggle with incompatible application formats, timezone barriers, and lack of verified credential sharing.",
    solution: "AI-driven resume optimization, automated interview scheduling, and credential verification create a seamless cross-border hiring pipeline.",
  },
  {
    name: "Immigration App",
    status: "Research Phase",
    statusColor: "bg-purple-100 text-purple-800",
    description: "A comprehensive immigration assistance tool providing document tracking, status updates, and AI-guided form completion.",
    tech: ["React", "Python/Django", "NLP", "PostgreSQL", "Docker"],
    problem: "Immigration processes are complex, with hundreds of form types, long wait times, and expensive legal consultations.",
    solution: "NLP-powered form assistance, automated document checklists, and real-time case status tracking reduce errors and costs by 70%.",
  },
];

export default function RnDPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-900 to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Research & Development</h1>
          <p className="text-purple-200 text-lg max-w-2xl">
            We build innovative applications that solve real problems for communities across the U.S. and Africa.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {projects.map((project) => (
            <div key={project.name} className="border border-gray-200 rounded-xl p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{project.name}</h2>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${project.statusColor}`}>{project.status}</span>
              </div>
              <p className="text-gray-600 mb-6">{project.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 text-sm mb-2">The Problem</h3>
                  <p className="text-red-700 text-sm">{project.problem}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 text-sm mb-2">Our Solution</h3>
                  <p className="text-green-700 text-sm">{project.solution}</p>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Blog + Collaboration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Blog</h2>
            <p className="text-gray-600 mb-4">
              We publish articles about our technical challenges, architecture decisions, and user research findings.
            </p>
            <Link href="/blog" className="text-primary font-medium hover:underline">Read our blog &rarr;</Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaborations</h2>
            <p className="text-gray-600 mb-4">
              We partner with academic institutions, NGOs, and technology companies across the U.S. and Africa to advance our R&D projects.
            </p>
            <Link href="/partners" className="text-primary font-medium hover:underline">View our partners &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Beta Program</h2>
          <p className="text-blue-100 mb-6">Be the first to test our apps and provide feedback that shapes the final product.</p>
          <Link href="/contact" className="px-8 py-3 bg-accent text-gray-900 font-semibold rounded-lg hover:bg-accent-dark transition">
            Sign Up for Beta
          </Link>
        </div>
      </section>
    </>
  );
}
