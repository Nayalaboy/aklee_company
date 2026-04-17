import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Our Team" };

const leadership = [
  { name: "Anu Zan", role: "Founder & CEO", bio: "Senior AI Engineer Consultant at IBM with deep expertise in artificial intelligence, cloud architecture, and enterprise systems. Founded Mirigraphix to harness AI for real-world impact across the U.S. and Africa.", expertise: ["AI Engineering", "Cloud Architecture", "Strategy"] },
  { name: "Djakaridja Ouedraogo", role: "CTO", bio: "Senior Application Developer at Vanguard with a proven track record in building secure, scalable systems. Specialist in cybersecurity and AI-driven development, leading our R&D and engineering efforts.", expertise: ["Application Development", "Cybersecurity", "AI/ML"] },
  { name: "Ramata Balo", role: "VP of Infrastructure", bio: "Seasoned specialist in cybersecurity and networking with extensive experience designing resilient, secure infrastructure for enterprises and institutions.", expertise: ["Cybersecurity", "Networking", "Infrastructure"] },
];

const team = [
  { name: "Sarah M.", role: "Lead Cybersecurity Instructor", expertise: ["Ethical Hacking", "Compliance"] },
  { name: "James K.", role: "AI/ML Engineer", expertise: ["Deep Learning", "NLP"] },
  { name: "Amina O.", role: "Full-Stack Developer", expertise: ["React", "Node.js", "DevOps"] },
  { name: "Michael B.", role: "Hardware Operations Manager", expertise: ["Logistics", "Enterprise Sales"] },
  { name: "Linda T.", role: "Network Engineer", expertise: ["Cisco", "Cloud"] },
  { name: "Grace W.", role: "Marketing & Community", expertise: ["Content", "Social Media"] },
];

const colors = [
  "from-primary/10 to-violet/10",
  "from-accent/10 to-coral/10",
  "from-emerald/10 to-cyan/10",
  "from-violet/10 to-primary/10",
  "from-cyan/10 to-primary/10",
  "from-coral/10 to-accent/10",
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-team.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/12 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet/8 rounded-full blur-[100px] animate-blob-delay" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex">People</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Our{" "}
            <span className="gradient-text">Team</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Meet the talented people behind Mirigraphix — instructors, engineers, and leaders dedicated to our mission.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Leadership</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Executive Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((p, i) => (
              <div key={p.name} className="bento-card group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[i]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-lg font-bold gradient-text">{p.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <h3 className="text-base font-bold text-dark">{p.name}</h3>
                <p className="text-primary text-xs font-semibold mb-3 uppercase tracking-wider">{p.role}</p>
                <p className="text-warm-gray-500 text-sm mb-5 leading-relaxed">{p.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {p.expertise.map((e) => (
                    <span key={e} className="px-2.5 py-1 bg-primary/5 text-warm-gray-500 text-[11px] font-medium rounded-lg border border-dark/6">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Team</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Team Members</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((p, i) => (
              <div key={p.name} className="bento-card group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[i]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-sm font-bold gradient-text">{p.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <h3 className="font-bold text-dark text-sm">{p.name}</h3>
                <p className="text-primary text-xs mb-3">{p.role}</p>
                <div className="flex flex-wrap gap-2">
                  {p.expertise.map((e) => (
                    <span key={e} className="px-2.5 py-1 bg-primary/5 text-warm-gray-500 text-[11px] font-medium rounded-lg border border-dark/6">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Join Our Team</h2>
          <p className="text-warm-gray-500 mb-8 text-lg leading-relaxed">We are always looking for talented people who share our mission.</p>
          <Link href="/careers" className="btn-primary inline-flex">
            View Open Positions
          </Link>
        </div>
      </section>
    </>
  );
}
