import Link from "next/link";

export const metadata = { title: "Our Team" };

const leadership = [
  { name: "Alex Klee", role: "Founder & CEO", bio: "Visionary leader with 15+ years in technology and education. Passionate about bridging the digital divide between the U.S. and Africa.", expertise: ["Strategy", "Business Development", "EdTech"] },
  { name: "Fatima N.", role: "CTO", bio: "Former senior engineer at a FAANG company. Leads our R&D and engineering teams in building innovative applications.", expertise: ["Software Architecture", "AI/ML", "Cloud Infrastructure"] },
  { name: "David O.", role: "VP of Training", bio: "Certified instructor with expertise in cybersecurity and networking. Designed curriculum for 1,000+ students.", expertise: ["Cybersecurity", "Networking", "Curriculum Design"] },
];

const team = [
  { name: "Sarah M.", role: "Lead Cybersecurity Instructor", expertise: ["Ethical Hacking", "Compliance"] },
  { name: "James K.", role: "AI/ML Engineer", expertise: ["Deep Learning", "NLP"] },
  { name: "Amina O.", role: "Full-Stack Developer", expertise: ["React", "Node.js", "DevOps"] },
  { name: "Michael B.", role: "Hardware Operations Manager", expertise: ["Logistics", "Enterprise Sales"] },
  { name: "Linda T.", role: "Network Engineer", expertise: ["Cisco", "Cloud"] },
  { name: "Grace W.", role: "Marketing & Community", expertise: ["Content", "Social Media"] },
];

export default function TeamPage() {
  return (
    <>
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">People</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Our Team</h1>
          <p className="text-blue-200/90 text-lg max-w-2xl leading-relaxed">
            Meet the talented people behind Mirigraphix Company — instructors, engineers, and leaders dedicated to our mission.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Leadership</p>
            <h2 className="text-2xl font-bold text-gray-900">Executive Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((p) => (
              <div key={p.name} className="rounded-2xl border border-gray-100 p-6 card-hover bg-white">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold gradient-text">{p.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">{p.name}</h3>
                <p className="text-primary text-xs font-semibold mb-3 uppercase tracking-wider">{p.role}</p>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.expertise.map((e) => (
                    <span key={e} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[11px] font-medium rounded-full border border-gray-100">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Team</p>
            <h2 className="text-2xl font-bold text-gray-900">Team Members</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-gray-100 p-6 card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center mb-3">
                  <span className="text-sm font-bold gradient-text">{p.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{p.name}</h3>
                <p className="text-primary text-xs mb-3">{p.role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.expertise.map((e) => (
                    <span key={e} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[11px] font-medium rounded-full border border-gray-100">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Join Our Team</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">We are always looking for talented people who share our mission.</p>
          <Link href="/careers" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm text-sm">
            View Open Positions
          </Link>
        </div>
      </section>
    </>
  );
}
