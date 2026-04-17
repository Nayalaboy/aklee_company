import Link from "next/link";
import Image from "next/image";

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

const typeColors: Record<string, string> = {
  Webinar: "bg-primary/5 text-primary",
  Workshop: "bg-accent/5 text-accent",
  "Virtual Meetup": "bg-emerald/5 text-emerald",
  "Panel Discussion": "bg-violet/5 text-violet",
  Bootcamp: "bg-cyan/5 text-cyan",
};

export default function EventsPage() {
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
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Community
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Events &{" "}
            <span className="gradient-text">Webinars</span>
          </h1>
          <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed">
=======
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-950">
        <Image src="/images/hero-events.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald/10 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-primary/8 rounded-full blur-[100px] animate-blob-delay" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 inline-flex">Community</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Events &{" "}
            <span className="gradient-text">Webinars</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
            Join our webinars, workshops, and virtual meetups to learn, network, and grow with the Mirigraphix community.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Upcoming */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Upcoming</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Upcoming <span className="gradient-text">Events</span></h2>
=======
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Upcoming</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Upcoming Events</h2>
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
          </div>
          <div className="space-y-5">
            {upcomingEvents.map((event) => (
<<<<<<< HEAD
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
=======
              <div key={event.title} className="bento-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg ${typeColors[event.type] || "bg-primary/5 text-warm-gray-500"}`}>{event.type}</span>
                      {event.free && <span className="px-2.5 py-1 bg-emerald/5 text-emerald text-[11px] font-semibold rounded-lg">Free</span>}
                    </div>
                    <h3 className="text-base font-bold text-dark mb-1.5">{event.title}</h3>
                    <p className="text-xs text-warm-gray-500 mb-3">{event.date} | {event.time}</p>
                    <p className="text-warm-gray-500 text-sm mb-3 leading-relaxed">{event.description}</p>
                    <p className="text-warm-gray-500 text-xs">Speaker: {event.speaker}</p>
                  </div>
                  <Link href="/contact" className="btn-primary inline-flex flex-shrink-0">
                    Register
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-b from-[#f0f0ff]/60 to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Archive</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Past <span className="gradient-text">Events</span></h2>
=======
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Archive</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Past Events</h2>
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
<<<<<<< HEAD
              <div key={event.title} className="bg-white rounded-3xl p-7 border border-indigo-100/60 card-hover">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">{event.type}</p>
                <h3 className="font-extrabold text-gray-900 text-base mb-3">{event.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{event.date}</span>
                  <span className="font-bold text-indigo-600">{event.attendees} attendees</span>
                </div>
=======
              <div key={event.title} className="bento-card group">
                <span className={`text-[11px] font-semibold rounded-lg px-2.5 py-1 inline-block mb-3 ${typeColors[event.type] || "bg-primary/5 text-warm-gray-500"}`}>{event.type}</span>
                <h3 className="font-bold text-dark text-sm mb-2">{event.title}</h3>
                <p className="text-xs text-warm-gray-500 mb-2">{event.date}</p>
                <p className="text-xs font-bold text-primary">{event.attendees} attendees</p>
>>>>>>> 3bf86ffb181c59c8dfcdf84f7aa9ad0ad2950597
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
