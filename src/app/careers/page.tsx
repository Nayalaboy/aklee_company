import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Careers" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const openings = [
<<<<<<< HEAD
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
=======
  { title: "Senior Cybersecurity Instructor", location: "North Carolina / Remote", type: "Full-time", department: "Training" },
  { title: "AI/ML Engineer", location: "North Carolina / Remote", type: "Full-time", department: "R&D" },
  { title: "Full-Stack Developer", location: "Remote", type: "Full-time", department: "R&D" },
  { title: "Hardware Operations Coordinator", location: "North Carolina", type: "Full-time", department: "Hardware" },
  { title: "Training Program Manager — Africa", location: "Lagos, Nigeria", type: "Full-time", department: "Training" },
  { title: "Business Development Manager — Africa", location: "Nairobi, Kenya", type: "Full-time", department: "Sales" },
  { title: "UX/UI Designer", location: "Remote", type: "Contract", department: "R&D" },
  { title: "Content Marketing Specialist", location: "Remote", type: "Full-time", department: "Marketing" },
];

const benefits = [
  { text: "Competitive salary & equity", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { text: "Health, dental & vision insurance", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { text: "Remote-friendly culture", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { text: "Professional development budget", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { text: "Paid training & certifications", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { text: "Flexible PTO policy", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { text: "Home office stipend", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { text: "International travel opportunities", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
];

const deptColors: Record<string, string> = {
  Training: "bg-primary/5 text-primary",
  "R&D": "bg-violet/5 text-violet",
  Hardware: "bg-accent/5 text-accent",
  Sales: "bg-emerald/5 text-emerald",
  Marketing: "bg-cyan/5 text-cyan",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
<<<<<<< HEAD
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
=======
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-careers.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/12 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-[100px] animate-blob-delay" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex">Join Us</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Careers at{" "}
            <span className="gradient-text">Mirigraphix</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
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
<<<<<<< HEAD
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
=======
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Perks</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Why Work at Mirigraphix?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.text} className="bento-card group flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <svg className="w-4.5 h-4.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={b.icon} />
                  </svg>
                </div>
                <span className="text-sm text-warm-gray-500 leading-snug">{b.text}</span>
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Openings */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Opportunities</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Open Positions</h2>
          </div>
          <div className="space-y-3">
            {openings.map((job) => (
              <div key={job.title} className="bento-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-bold text-dark text-sm">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-xs text-warm-gray-500">{job.location}</span>
                    <span className="text-xs text-warm-gray-500">{job.type}</span>
                    <span className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-lg ${deptColors[job.department] || "bg-primary/5 text-warm-gray-500"}`}>{job.department}</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary inline-flex flex-shrink-0">
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
<<<<<<< HEAD
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
=======
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-warm-gray-500 mb-8 text-lg leading-relaxed">Send us your resume and tell us how you can contribute. We are always interested in meeting talented people.</p>
          <Link href="/contact" className="btn-primary inline-flex">
            Send Your Resume
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
          </Link>
        </div>
      </section>
    </>
  );
}
