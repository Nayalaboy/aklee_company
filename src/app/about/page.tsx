import Link from "next/link";

export const metadata = { title: "About Us | Aklee Company" };

const values = [
  { title: "Innovation", description: "We push boundaries with cutting-edge technology and creative solutions." },
  { title: "Empowerment", description: "We equip individuals and organizations with skills and tools to succeed." },
  { title: "Integrity", description: "Transparency and honesty guide every decision we make." },
  { title: "Global Impact", description: "We bridge the U.S. and Africa, creating opportunities across borders." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Aklee Company</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            We are a technology company focused on training, hardware, and R&D — empowering communities in the United States and Africa.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aklee Company was founded with a clear mission: to democratize access to technology education, provide reliable hardware solutions, and develop innovative applications that solve real-world problems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Operating across two continents, we understand the unique challenges and opportunities that exist in both the U.S. and African markets. Our programs are designed to bridge the digital divide and create lasting impact.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To become the leading technology company connecting the U.S. and Africa through education, enterprise solutions, and innovation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where geography is not a barrier to opportunity — where anyone, anywhere, can access world-class training, reliable technology, and tools that improve their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-primary mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Presence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            With operations in the United States and growing partnerships across Africa, we deliver localized solutions with global standards.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">United States</h3>
              <p className="text-sm text-gray-600">Headquarters, training centers, hardware distribution, and R&D labs.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Africa</h3>
              <p className="text-sm text-gray-600">Partnerships, training programs, hardware supply, and app deployments.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
