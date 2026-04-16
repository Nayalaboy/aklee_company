import Link from "next/link";

export const metadata = { title: "Careers" };

const openings = [
  { title: "Senior Cybersecurity Instructor", location: "Philadelphia, PA / Remote", type: "Full-time", department: "Training" },
  { title: "AI/ML Engineer", location: "Philadelphia, PA / Remote", type: "Full-time", department: "R&D" },
  { title: "Full-Stack Developer", location: "Remote", type: "Full-time", department: "R&D" },
  { title: "Hardware Operations Coordinator", location: "Philadelphia, PA", type: "Full-time", department: "Hardware" },
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
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">Join Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Careers at Mirigraphix</h1>
          <p className="text-blue-200/90 text-lg max-w-2xl leading-relaxed">
            Join a team that is building the future of technology education and innovation across two continents.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Perks</p>
            <h2 className="text-2xl font-bold text-gray-900">Why Work at Mirigraphix?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2.5 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-600">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Opportunities</p>
            <h2 className="text-2xl font-bold text-gray-900">Open Positions</h2>
          </div>
          <div className="space-y-3">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 card-hover">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-1.5">
                    <span className="text-xs text-gray-400">{job.location}</span>
                    <span className="text-xs text-gray-400">{job.type}</span>
                    <span className="px-2 py-0.5 bg-primary/5 text-primary text-[11px] font-semibold rounded-full">{job.department}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm flex-shrink-0"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Don&apos;t See Your Role?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Send us your resume and tell us how you can contribute. We are always interested in meeting talented people.</p>
          <Link href="/contact" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm text-sm">
            Send Your Resume
          </Link>
        </div>
      </section>
    </>
  );
}
