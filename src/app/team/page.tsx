import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Our Team" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const leadership = [
<<<<<<< HEAD
  {
    name: "Alex Klee",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years in technology and education. Passionate about bridging the digital divide between the U.S. and Africa.",
    expertise: ["Strategy", "Business Development", "EdTech"],
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    name: "Fatima N.",
    role: "Chief Technology Officer",
    bio: "Former senior engineer at a FAANG company. Leads our R&D and engineering teams in building innovative cross-border applications.",
    expertise: ["Software Architecture", "AI/ML", "Cloud Infrastructure"],
    gradient: "from-cyan-500 to-sky-600",
  },
  {
    name: "David O.",
    role: "VP of Training",
    bio: "Certified instructor with expertise in cybersecurity and networking. Designed curriculum for 1,000+ students across two continents.",
    expertise: ["Cybersecurity", "Networking", "Curriculum Design"],
    gradient: "from-emerald-500 to-teal-500",
  },
=======
  { name: "Anu Zan", role: "Founder & CEO", bio: "Senior AI Engineer Consultant at IBM with deep expertise in artificial intelligence, cloud architecture, and enterprise systems. Founded Mirigraphix to harness AI for real-world impact across the U.S. and Africa.", expertise: ["AI Engineering", "Cloud Architecture", "Strategy"] },
  { name: "Djakaridja Ouedraogo", role: "CTO", bio: "Senior Application Developer at Vanguard with a proven track record in building secure, scalable systems. Specialist in cybersecurity and AI-driven development, leading our R&D and engineering efforts.", expertise: ["Application Development", "Cybersecurity", "AI/ML"] },
  { name: "Ramata Balo", role: "VP of Infrastructure", bio: "Seasoned specialist in cybersecurity and networking with extensive experience designing resilient, secure infrastructure for enterprises and institutions.", expertise: ["Cybersecurity", "Networking", "Infrastructure"] },
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
];

const team = [
  { name: "Sarah M.", role: "Lead Cybersecurity Instructor", expertise: ["Ethical Hacking", "Compliance"], gradient: "from-red-500 to-orange-500" },
  { name: "James K.", role: "AI/ML Engineer", expertise: ["Deep Learning", "NLP"], gradient: "from-violet-600 to-indigo-600" },
  { name: "Amina O.", role: "Full-Stack Developer", expertise: ["React", "Node.js", "DevOps"], gradient: "from-cyan-500 to-sky-600" },
  { name: "Michael B.", role: "Hardware Operations Manager", expertise: ["Logistics", "Enterprise Sales"], gradient: "from-amber-400 to-orange-500" },
  { name: "Linda T.", role: "Network Engineer", expertise: ["Cisco", "Cloud"], gradient: "from-emerald-500 to-teal-500" },
  { name: "Grace W.", role: "Marketing & Community", expertise: ["Content", "Social Media"], gradient: "from-pink-500 to-rose-500" },
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
<<<<<<< HEAD
      <section className="relative overflow-hidden text-white py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060412] via-[#1a0e40] to-[#0c1635]" />
        <div className="glow-orb absolute -top-24 left-0 w-[500px] h-[400px] bg-violet-700 opacity-20 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-500 opacity-15 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRID_BG }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            People
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed">
            Talented instructors, engineers, and leaders dedicated to our mission of bridging technology across continents.
=======
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
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Leadership */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Leadership</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Executive <span className="gradient-text">Team</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {leadership.map((p) => (
              <div key={p.name} className="bg-white rounded-3xl p-8 border border-indigo-100/60 card-hover">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <span className="text-xl font-extrabold text-white">{p.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <h3 className="text-lg font-extrabold text-gray-900">{p.name}</h3>
                <p className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">{p.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.expertise.map((e) => (
                    <span key={e} className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-[11px] font-bold rounded-full border border-indigo-100">{e}</span>
=======
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
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Team grid */}
      <section className="py-20 bg-gradient-to-b from-[#f0f0ff]/60 to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Team</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Our <span className="gradient-text">People</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((p) => (
              <div key={p.name} className="bg-white rounded-3xl p-6 border border-indigo-100/60 card-hover flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <span className="text-sm font-extrabold text-white">{p.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-sm">{p.name}</h3>
                  <p className="text-indigo-600 text-xs font-semibold mb-2">{p.role}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.expertise.map((e) => (
                      <span key={e} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[10px] font-semibold rounded-full border border-gray-100">{e}</span>
                    ))}
                  </div>
=======
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
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Join CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0818] via-[#1a0e40] to-[#0f1a30]" />
        <div className="glow-orb absolute top-0 left-1/4 w-[500px] h-[300px] bg-violet-700 opacity-25" />
        <div className="glow-orb absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-600 opacity-20" />
        <div className="max-w-xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Join Our Team</h2>
          <p className="text-indigo-200/80 mb-10 text-lg">We are always looking for talented people who share our mission.</p>
          <Link href="/careers"
            className="btn-shimmer inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl shadow-xl shadow-amber-700/30 text-sm">
            View Open Positions →
=======
      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Join Our Team</h2>
          <p className="text-warm-gray-500 mb-8 text-lg leading-relaxed">We are always looking for talented people who share our mission.</p>
          <Link href="/careers" className="btn-primary inline-flex">
            View Open Positions
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
          </Link>
        </div>
      </section>
    </>
  );
}
