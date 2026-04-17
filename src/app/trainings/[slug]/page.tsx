import Link from "next/link";
import { notFound } from "next/navigation";

const courseData: Record<string, { title: string; description: string; modules: { name: string; topics: string[] }[]; duration: string; level: string }> = {
  cybersecurity: {
    title: "Cybersecurity",
    description: "Master the art of defending systems and networks. From threat detection to ethical hacking and compliance frameworks.",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    modules: [
      { name: "Foundations of Cybersecurity", topics: ["CIA Triad", "Threat Landscape", "Security Frameworks"] },
      { name: "Ethical Hacking", topics: ["Reconnaissance", "Vulnerability Scanning", "Exploitation", "Reporting"] },
      { name: "Network Security", topics: ["Firewalls & IDS", "VPNs", "Wireless Security"] },
      { name: "Compliance & Risk", topics: ["NIST", "ISO 27001", "GDPR", "HIPAA"] },
      { name: "Incident Response", topics: ["Detection", "Containment", "Recovery", "Post-Mortem"] },
    ],
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    description: "Build intelligent systems from the ground up. Covers ML algorithms, deep learning, NLP, computer vision, and AI ethics.",
    duration: "14 weeks",
    level: "Intermediate",
    modules: [
      { name: "Python for Data Science", topics: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"] },
      { name: "Machine Learning", topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"] },
      { name: "Deep Learning", topics: ["Neural Networks", "CNNs", "RNNs", "Transformers"] },
      { name: "NLP & Computer Vision", topics: ["Text Classification", "Object Detection", "Generative Models"] },
      { name: "AI Ethics & Deployment", topics: ["Bias & Fairness", "Model Monitoring", "MLOps"] },
    ],
  },
  networking: {
    title: "Networking & Data Centers",
    description: "Design, deploy, and manage enterprise networks and data center infrastructure.",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    modules: [
      { name: "Network Fundamentals", topics: ["OSI Model", "TCP/IP", "Subnetting", "DNS/DHCP"] },
      { name: "Routing & Switching", topics: ["VLANs", "OSPF", "BGP", "STP"] },
      { name: "Cloud Infrastructure", topics: ["AWS VPC", "Azure Networking", "Hybrid Cloud"] },
      { name: "Data Center Operations", topics: ["Virtualization", "Storage", "Cooling & Power", "Monitoring"] },
    ],
  },
  fullstack: {
    title: "Full-Stack Development",
    description: "Become a complete developer. Master frontend, backend, databases, and modern DevOps practices.",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    modules: [
      { name: "Frontend Development", topics: ["HTML/CSS", "JavaScript/TypeScript", "React", "Next.js"] },
      { name: "Backend Development", topics: ["Node.js", "Python/Django", "REST APIs", "GraphQL"] },
      { name: "Databases", topics: ["PostgreSQL", "MongoDB", "Redis", "ORM/ODM"] },
      { name: "DevOps & Deployment", topics: ["Docker", "CI/CD", "AWS/Vercel", "Monitoring"] },
      { name: "Capstone Project", topics: ["Full-Stack App", "Code Review", "Deployment", "Presentation"] },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(courseData).map((slug) => ({ slug }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courseData[slug];
  if (!course) notFound();

  return (
    <>
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/trainings" className="text-blue-200 hover:text-white text-sm mb-4 inline-block">&larr; All Trainings</Link>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-blue-100 text-lg max-w-2xl">{course.description}</p>
          <div className="flex flex-wrap gap-6 mt-6 text-sm">
            <span className="bg-white/10 px-4 py-2 rounded-lg">Duration: {course.duration}</span>
            <span className="bg-white/10 px-4 py-2 rounded-lg">Level: {course.level}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-8">Course Modules</h2>
          <div className="space-y-6">
            {course.modules.map((mod, i) => (
              <div key={mod.name} className="border border-dark/8 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-dark mb-3">
                  <span className="text-primary mr-2">Module {i + 1}:</span>
                  {mod.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {mod.topics.map((t) => (
                    <span key={t} className="px-3 py-1 bg-primary/5 text-warm-gray-500 text-sm rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">Ready to Enroll?</h2>
          <p className="text-warm-gray-500 mb-6">Secure your spot today. Classes have limited seats.</p>
          <Link href="/contact" className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition">
            Enroll Now
          </Link>
        </div>
      </section>
    </>
  );
}
