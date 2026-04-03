import Link from "next/link";

export const metadata = { title: "Events & Webinars | Aklee Company" };

const upcomingEvents = [
  {
    title: "Cybersecurity in 2026: Threats & Defenses",
    type: "Webinar",
    date: "April 15, 2026",
    time: "2:00 PM CT / 8:00 PM WAT",
    description: "Join our cybersecurity experts for a deep dive into the latest threat landscape and practical defense strategies.",
    speaker: "Sarah M., Lead Cybersecurity Instructor",
    free: true,
  },
  {
    title: "AI for Business Leaders Workshop",
    type: "Workshop",
    date: "April 22, 2026",
    time: "10:00 AM CT / 4:00 PM WAT",
    description: "A hands-on workshop for business leaders looking to integrate AI into their operations. No coding required.",
    speaker: "Fatima N., CTO",
    free: false,
  },
  {
    title: "Full-Stack Dev Open House",
    type: "Virtual Meetup",
    date: "May 3, 2026",
    time: "1:00 PM CT / 7:00 PM WAT",
    description: "Meet our instructors, see student projects, and learn about our full-stack development programs.",
    speaker: "Amina O., Full-Stack Developer",
    free: true,
  },
  {
    title: "Mac Fleet Management for Enterprises",
    type: "Webinar",
    date: "May 10, 2026",
    time: "11:00 AM CT / 5:00 PM WAT",
    description: "Best practices for deploying, securing, and managing Mac devices at scale in your organization.",
    speaker: "Michael B., Hardware Operations Manager",
    free: true,
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
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Events & Webinars</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Join our webinars, workshops, and virtual meetups to learn, network, and grow with the Aklee community.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full">{event.type}</span>
                      {event.free && <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">Free</span>}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{event.date} | {event.time}</p>
                    <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                    <p className="text-gray-500 text-xs">Speaker: {event.speaker}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition flex-shrink-0"
                  >
                    Register
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Past Events</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <span className="text-xs font-medium text-gray-500">{event.type}</span>
                <h3 className="font-semibold text-gray-900 mt-1 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-sm text-primary font-medium mt-2">{event.attendees} attendees</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
