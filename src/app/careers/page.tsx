import Link from "next/link";

export const metadata = { title: "Careers" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const openings = [
  { title: "Senior Cybersecurity Instructor", location: "Philadelphia, PA / Remote", type: "Full-time", dept: "Training", deptColor: "text-red-600 bg-red-50 border-red-100" },
  { title: "AI/ML Engineer", location: "Philadelphia, PA / Remote", type: "Full-time", dept: "R&D", deptColor: "text-violet-600 bg-violet-50 border-violet-100" },
  { title: "Full-Stack Developer", location: "Remote", type: "Full-time", dept: "R&D", deptColor: "text-violet-600 bg-violet-50 border-violet-100" },
  { title: "Hardware Operations Coordinator", location: "Philadelphia, PA", type: "Full-time", dept: "Hardware", deptColor: "text-cyan-600 bg-cyan-50 border-cyan-100" },
  { title: "Training Program Manager — Africa", location: "Lagos, Nigeria", type: "Full-time", dept: "Training", deptColor: "text-red-600 bg-red-50 border-red-100" },
  { title: "Business Development Manager — Africa", location: "Nairobi, Kenya", type: "Full-time", dept: "Sales", deptColor: "text-amber-600 bg-amber-50 border-amber-100" },
  { title: "UX/UI Designer", location: "Remote", type: "Contract", dept: "R&D", deptColor: "text-violet-600 bg-violet-50 border-violet-100" },
  { title: "Content Marketing Specialist", location: "Remote", type: "Full-time", dept: "Marketing", deptColor: "text-emerald-600 bg-emerald-50 border-emerald-100" },
];

const benefits = [
  { icon: "💰", text: "Competitive salary & equity" },
  { icon: "🏥", text: "Health, dental & vision insurance" },
  { icon: "🌍", text: "Remote-friendly culture" },
  { icon: "📚", text: "Professional development budget" },
  { icon: "🎓", text: "Paid training & certifications" },
  { icon: "🏖️", text: "Flexible PTO policy" },
  { icon: "🖥️", text: "Home office stipend" },
  { icon: "✈️", text: "International travel opportunities" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060412] via-[#1a0e40] to-[#0c1635]" />
        <div className="glow-orb absolute -top-24 left-0 w-[500px] h-[400px] bg-violet-700 opacity-20 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[400px] h-[300px] bg-amber-500 opacity-10 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRID_BG }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Join Us
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Careers at{" "}
            <span className="gradient-text-gold">Mirigraphix</span>
          </h1>
          <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed">
            Join a team building the future of technology education and innovation across two continents.
          </p>
          <div className="mt-8">
            <a href="#positions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-sm backdrop-blur-sm">
              See Open Positions ↓
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Perks</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Why Work at <span className="gradient-text">Mirigraphix</span>?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.text} className="bg-white rounded-2xl p-5 border border-indigo-100/60 card-hover flex items-center gap-4">
                <span className="text-2xl">{b.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-gradient-to-b from-[#f0f0ff]/60 to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Opportunities</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Open <span className="gradient-text">Positions</span></h2>
          </div>
          <div className="space-y-3">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-2xl border border-indigo-100/60 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 card-hover">
                <div className="flex-1">
                  <h3 className="font-extrabold text-gray-900 text-base mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${job.deptColor}`}>{job.dept}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="text-xs text-gray-400">{job.type}</span>
                  </div>
                </div>
                <Link href="/contact"
                  className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-bold rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all shadow-md shadow-indigo-300/30 flex-shrink-0">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0818] via-[#1a0e40] to-[#0f1a30]" />
        <div className="glow-orb absolute top-0 left-1/4 w-[500px] h-[300px] bg-violet-700 opacity-25" />
        <div className="glow-orb absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-amber-500 opacity-15" />
        <div className="max-w-xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-indigo-200/80 mb-10 text-lg">
            Send us your resume and tell us how you can contribute. We are always interested in meeting talented people.
          </p>
          <Link href="/contact"
            className="btn-shimmer inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl shadow-xl shadow-amber-700/30 text-sm">
            Send Your Resume →
          </Link>
        </div>
      </section>
    </>
  );
}
