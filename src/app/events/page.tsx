import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Events & Webinars" };

const upcomingEvents = [
  { title: "Cybersecurity in 2026: Threats & Defenses", type: "Webinar", date: "April 15, 2026", time: "2:00 PM CT / 8:00 PM WAT", description: "Join our cybersecurity experts for a deep dive into the latest threat landscape and practical defense strategies.", speaker: "Sarah M., Lead Cybersecurity Instructor", free: true },
  { title: "AI for Business Leaders Workshop", type: "Workshop", date: "April 22, 2026", time: "10:00 AM CT / 4:00 PM WAT", description: "A hands-on workshop for business leaders looking to integrate AI into their operations. No coding required.", speaker: "Fatima N., CTO", free: false },
  { title: "Full-Stack Dev Open House", type: "Virtual Meetup", date: "May 3, 2026", time: "1:00 PM CT / 7:00 PM WAT", description: "Meet our instructors, see student projects, and learn about our full-stack development programs.", speaker: "Amina O., Full-Stack Developer", free: true },
  { title: "Mac Fleet Management for Enterprises", type: "Webinar", date: "May 10, 2026", time: "11:00 AM CT / 5:00 PM WAT", description: "Best practices for deploying, securing, and managing Mac devices at scale in your organization.", speaker: "Michael B., Hardware Operations Manager", free: true },
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
            Join our webinars, workshops, and virtual meetups to learn, network, and grow with the Mirigraphix community.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Upcoming</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Upcoming Events</h2>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Archive</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Past Events</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {pastEvents.map((event) => (
              <div key={event.title} className="bento-card group">
                <span className={`text-[11px] font-semibold rounded-lg px-2.5 py-1 inline-block mb-3 ${typeColors[event.type] || "bg-primary/5 text-warm-gray-500"}`}>{event.type}</span>
                <h3 className="font-bold text-dark text-sm mb-2">{event.title}</h3>
                <p className="text-xs text-warm-gray-500 mb-2">{event.date}</p>
                <p className="text-xs font-bold text-primary">{event.attendees} attendees</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
