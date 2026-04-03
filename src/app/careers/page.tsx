import Link from "next/link";

export const metadata = { title: "Careers | Aklee Company" };

const openings = [
  { title: "Senior Cybersecurity Instructor", location: "Austin, TX / Remote", type: "Full-time", department: "Training" },
  { title: "AI/ML Engineer", location: "Austin, TX / Remote", type: "Full-time", department: "R&D" },
  { title: "Full-Stack Developer", location: "Remote", type: "Full-time", department: "R&D" },
  { title: "Hardware Operations Coordinator", location: "Austin, TX", type: "Full-time", department: "Hardware" },
  { title: "Training Program Manager — Africa", location: "Lagos, Nigeria", type: "Full-time", department: "Training" },
  { title: "Business Development Manager — Africa", location: "Nairobi, Kenya", type: "Full-time", department: "Sales" },
  { title: "UX/UI Designer", location: "Remote", type: "Contract", department: "R&D" },
  { title: "Content Marketing Specialist", location: "Remote", type: "Full-time", department: "Marketing" },
];

const benefits = [
  "Competitive salary & equity", "Health, dental & vision insurance", "Remote-friendly culture",
  "Professional development budget", "Paid training & certifications", "Flexible PTO policy",
  "Home office stipend", "International travel opportunities",
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Careers at Aklee</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Join a team that is building the future of technology education and innovation across two continents.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Work at Aklee?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition">
                <div>
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <span className="text-sm text-gray-500">{job.location}</span>
                    <span className="text-sm text-gray-500">{job.type}</span>
                    <span className="px-2 py-0.5 bg-blue-50 text-primary text-xs font-medium rounded-full">{job.department}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition flex-shrink-0"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-gray-600 mb-6">Send us your resume and tell us how you can contribute. We are always interested in meeting talented people.</p>
          <Link href="/contact" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition">
            Send Your Resume
          </Link>
        </div>
      </section>
    </>
  );
}
