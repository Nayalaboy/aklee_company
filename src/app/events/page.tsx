import Link from "next/link";

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

export default function EventsPage() {
  return (
    <>
      <section className="hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">Community</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Events & Webinars</h1>
          <p className="text-blue-200/90 text-lg max-w-2xl leading-relaxed">
            Join our webinars, workshops, and virtual meetups to learn, network, and grow with the Mirigraphix community.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Upcoming</p>
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="rounded-2xl border border-gray-100 p-6 card-hover bg-white">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-primary/5 text-primary text-[11px] font-semibold rounded-full">{event.type}</span>
                      {event.free && <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[11px] font-semibold rounded-full">Free</span>}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-xs text-gray-400 mb-2">{event.date} | {event.time}</p>
                    <p className="text-gray-500 text-sm mb-2 leading-relaxed">{event.description}</p>
                    <p className="text-gray-400 text-xs">Speaker: {event.speaker}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm flex-shrink-0"
                  >
                    Register
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Archive</p>
            <h2 className="text-2xl font-bold text-gray-900">Past Events</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {pastEvents.map((event) => (
              <div key={event.title} className="bg-white rounded-2xl border border-gray-100 p-6 card-hover">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{event.type}</span>
                <h3 className="font-semibold text-gray-900 text-sm mt-1.5 mb-2">{event.title}</h3>
                <p className="text-xs text-gray-400">{event.date}</p>
                <p className="text-xs font-semibold text-primary mt-2">{event.attendees} attendees</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
