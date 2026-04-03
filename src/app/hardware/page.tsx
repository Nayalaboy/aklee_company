import Link from "next/link";

export const metadata = { title: "Hardware Offering | Aklee Company" };

const products = [
  { name: "MacBook Air M3", category: "Laptop", price: "$899", specs: "8GB RAM / 256GB SSD", image: "💻" },
  { name: "MacBook Pro 14\" M3 Pro", category: "Laptop", price: "$1,599", specs: "18GB RAM / 512GB SSD", image: "💻" },
  { name: "MacBook Pro 16\" M3 Max", category: "Laptop", price: "$2,499", specs: "36GB RAM / 1TB SSD", image: "💻" },
  { name: "iMac 24\" M3", category: "Desktop", price: "$1,299", specs: "8GB RAM / 256GB SSD", image: "🖥️" },
  { name: "Mac Mini M3", category: "Desktop", price: "$499", specs: "8GB RAM / 256GB SSD", image: "🖥️" },
  { name: "Mac Studio M2 Ultra", category: "Desktop", price: "$3,999", specs: "64GB RAM / 1TB SSD", image: "🖥️" },
  { name: "iPad Pro 12.9\" M2", category: "Tablet", price: "$1,099", specs: "256GB / WiFi + Cellular", image: "📱" },
  { name: "iPad Air M2", category: "Tablet", price: "$599", specs: "128GB / WiFi", image: "📱" },
];

const accessories = [
  "USB-C Chargers", "Docking Stations", "Magic Keyboard", "Magic Mouse", "External Displays", "Protective Cases",
];

export default function HardwarePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Hardware Offering</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Premium Mac hardware at wholesale prices. Laptops, desktops, tablets, and accessories — with custom configurations and bulk enterprise solutions.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Product Catalog</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <div className="text-4xl mb-4">{p.image}</div>
                <span className="text-xs font-medium text-primary bg-blue-50 px-2 py-1 rounded-full">{p.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-1">{p.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{p.specs}</p>
                <p className="text-xl font-bold text-gray-900 mb-4">{p.price}</p>
                <button className="w-full py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition">
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Configurations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Custom Configurations</h2>
              <p className="text-gray-600 mb-4">
                Need specific specs? We offer custom CPU, RAM, and SSD upgrades on all Mac products. Build the perfect machine for your team.
              </p>
              <ul className="space-y-2">
                {["CPU upgrades (M3 Pro, M3 Max, M2 Ultra)", "RAM options up to 192GB", "SSD storage up to 8TB", "Bundle deals with peripherals"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Bulk & Enterprise</h2>
              <p className="text-gray-600 mb-4">
                Outfitting an office, school, or organization? We offer volume discounts, leasing options, and dedicated account managers for institutional clients in the U.S. and Africa.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
              >
                Request Bulk Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Accessories</h2>
          <div className="flex flex-wrap gap-3">
            {accessories.map((a) => (
              <span key={a} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & Warranty */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast Shipping</h3>
            <p className="text-sm text-gray-600">Free shipping on orders over $500. International shipping to Africa available.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Warranty</h3>
            <p className="text-sm text-gray-600">1-year standard warranty on all products. Extended warranties available.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">↩️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Easy Returns</h3>
            <p className="text-sm text-gray-600">30-day return policy. See our <Link href="/legal/refund" className="text-primary hover:underline">refund policy</Link> for details.</p>
          </div>
        </div>
      </section>
    </>
  );
}
