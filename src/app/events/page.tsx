import Link from "next/link";

export const metadata = { title: "Events & Webinars" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const upcomingEvents = [
  {
    title: "Cybersecurity in 2026: Threats & Defenses",
    type: "Webinar",
    date: "April 15, 2026",
    time: "2:00 PM CT / 8:00 PM WAT",
    description: "Join our cybersecurity experts for a deep dive into the latest threat landscape and practical defense strategies.",
    speaker: "Sarah M., Lead Cybersecurity Instructor",
    free: true,
    gradient: "from-red-500 to-orange-500",
    typeColor: "text-red-600 bg-red-50 border-red-200",
  },
  {
    title: "AI for Business Leaders Workshop",
    type: "Workshop",
    date: "April 22, 2026",
    time: "10:00 AM CT / 4:00 PM WAT",
    description: "A hands-on workshop for business leaders looking to integrate AI into their operations. No coding required.",
    speaker: "Fatima N., CTO",
    free: false,
    gradient: "from-violet-600 to-indigo-600",
    typeColor: "text-violet-600 bg-violet-50 border-violet-200",
  },
  {
    title: "Full-Stack Dev Open House",
    type: "Virtual Meetup",
    date: "May 3, 2026",
    time: "1:00 PM CT / 7:00 PM WAT",
    description: "Meet our instructors, see student projects, and learn about our full-stack development programs.",
    speaker: "Amina O., Full-Stack Developer",
    free: true,
    gradient: "from-emerald-500 to-teal-500",
    typeColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    title: "Mac Fleet Management for Enterprises",
    type: "Webinar",
    date: "May 10, 2026",
    time: "11:00 AM CT / 5:00 PM WAT",
    description: "Best practices for deploying, securing, and managing Mac devices at scale in your organization.",
    speaker: "Michael B., Hardware Operations Manager",
    free: true,
    gradient: "from-cyan-500 to-sky-600",
    typeColor: "text-cyan-600 bg-cyan-50 border-cyan-200",
  },
];

const pastEvents = [
  { title: "Intro to Ethical Hacking", type: "Workshop", date: "March 15, 2026", attendees: 120 },
  { title: "Cross-Border Fintech Panel", type: "Panel Discussion", date: "March 1, 2026", attendees: 85 },
  { title: "Networking Fundamentals Bootcamp", type: "Bootcamp", date: "February 20, 2026", attendees: 65 },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060412] via-[#1a0e40] to-[#0c1635]" />
        <div className="glow-orb absolute -top-24 left-0 w-[500px] h-[400px] bg-violet-700 opacity-20 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-500 opacity-15 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRID_BG }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Community
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Events &{" "}
            <span className="gradient-text">Webinars</span>
          </h1>
          <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed">
            Join our webinars, workshops, and virtual meetups to learn, network, and grow with the Mirigraphix community.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Upcoming */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Upcoming</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Upcoming <span className="gradient-text">Events</span></h2>
          </div>
          <div className="space-y-5">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="group bg-white rounded-3xl border border-indigo-100/60 overflow-hidden card-hover">
                <div className={`h-1 bg-gradient-to-r ${event.gradient}`} />
                <div className="p-7 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${event.typeColor}`}>{event.type}</span>
                      {event.free && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full border text-emerald-600 bg-emerald-50 border-emerald-200">Free</span>
                      )}
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-indigo-500 text-xs font-semibold mb-2">
                      📅 {event.date} &nbsp;|&nbsp; 🕐 {event.time}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-2">{event.description}</p>
                    <p className="text-gray-400 text-xs">Speaker: {event.speaker}</p>
                  </div>
                  <Link href="/contact"
                    className={`flex-shrink-0 px-6 py-3 bg-gradient-to-r ${event.gradient} text-white text-sm font-bold rounded-xl shadow-md transition-opacity hover:opacity-90`}>
                    Register →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="py-20 bg-gradient-to-b from-[#f0f0ff]/60 to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Archive</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Past <span className="gradient-text">Events</span></h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.title} className="bg-white rounded-3xl p-7 border border-indigo-100/60 card-hover">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">{event.type}</p>
                <h3 className="font-extrabold text-gray-900 text-base mb-3">{event.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{event.date}</span>
                  <span className="font-bold text-indigo-600">{event.attendees} attendees</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
