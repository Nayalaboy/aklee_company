import Link from "next/link";

export const metadata = { title: "Our Team | Aklee Company" };

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
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Meet the talented people behind Aklee Company — instructors, engineers, and leaders dedicated to our mission.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((p) => (
              <div key={p.name} className="border border-gray-200 rounded-xl p-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{p.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{p.role}</p>
                <p className="text-gray-600 text-sm mb-4">{p.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {p.expertise.map((e) => (
                    <span key={e} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Team Members</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((p) => (
              <div key={p.name} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-primary">{p.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <p className="text-primary text-sm mb-3">{p.role}</p>
                <div className="flex flex-wrap gap-2">
                  {p.expertise.map((e) => (
                    <span key={e} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6">We are always looking for talented people who share our mission.</p>
          <Link href="/careers" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition">
            View Open Positions
          </Link>
        </div>
      </section>
    </>
  );
}
