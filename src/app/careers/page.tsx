import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Careers" };

const openings = [
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
            Join a team building the future of technology education and innovation across two continents.
          </p>
        </div>
      </section>

      {/* Benefits */}
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
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-warm-gray-500 mb-8 text-lg leading-relaxed">Send us your resume and tell us how you can contribute. We are always interested in meeting talented people.</p>
          <Link href="/contact" className="btn-primary inline-flex">
            Send Your Resume
          </Link>
        </div>
      </section>
    </>
  );
}
