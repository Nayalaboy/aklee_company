import Link from "next/link";

export const metadata = { title: "Hardware" };

const products = [
  { name: "MacBook Air M3", category: "Laptop", specs: "8GB RAM / 256GB SSD" },
  { name: "MacBook Pro 14\" M3 Pro", category: "Laptop", specs: "18GB RAM / 512GB SSD" },
  { name: "MacBook Pro 16\" M3 Max", category: "Laptop", specs: "36GB RAM / 1TB SSD" },
  { name: "iMac 24\" M3", category: "Desktop", specs: "8GB RAM / 256GB SSD" },
  { name: "Mac Mini M3", category: "Desktop", specs: "8GB RAM / 256GB SSD" },
  { name: "Mac Studio M2 Ultra", category: "Desktop", specs: "64GB RAM / 1TB SSD" },
  { name: "iPad Pro 12.9\" M2", category: "Tablet", specs: "256GB / WiFi + Cellular" },
  { name: "iPad Air M2", category: "Tablet", specs: "128GB / WiFi" },
];

const accessories = [
  "USB-C Chargers", "Docking Stations", "Magic Keyboard", "Magic Mouse", "External Displays", "Protective Cases",
];

const features = [
  {
    title: "Fast Shipping",
    description: "Free shipping on qualifying orders. International shipping to Africa available.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: "1-Year Warranty",
    description: "Standard warranty on all products. Extended warranties available.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Easy Returns",
    description: "30-day return policy for unused products in original packaging.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
      </svg>
    ),
  },
];

export default function HardwarePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Hardware</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Enterprise Hardware</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Premium Mac hardware for individuals and enterprises. Laptops, desktops, tablets, and accessories — with custom configurations and bulk solutions.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Catalog</p>
            <h2 className="text-2xl font-bold text-gray-900">Product Lineup</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-gray-100 p-6 card-hover">
                <div className="w-full h-28 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-primary/80 uppercase tracking-wider">{p.category}</span>
                <h3 className="text-sm font-semibold text-gray-900 mt-1 mb-1">{p.name}</h3>
                <p className="text-xs text-gray-400 mb-3">{p.specs}</p>
                <button className="w-full mt-1 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary-dark transition-all duration-200">
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Configurations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Customization</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Custom Configurations</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Need specific specs? We offer custom CPU, RAM, and SSD upgrades on all Mac products. Build the perfect machine for your team.
              </p>
              <ul className="space-y-2.5">
                {["CPU upgrades (M3 Pro, M3 Max, M2 Ultra)", "RAM options up to 192GB", "SSD storage up to 8TB", "Bundle deals with peripherals"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Enterprise</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Bulk & Enterprise</h2>
              <p className="text-gray-500 mb-5 leading-relaxed">
                Outfitting an office, school, or organization? We offer volume discounts, leasing options, and dedicated account managers for institutional clients in the U.S. and Africa.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm text-sm"
              >
                Request Bulk Pricing
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Add-Ons</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Accessories</h2>
          <div className="flex flex-wrap gap-2.5">
            {accessories.map((a) => (
              <span key={a} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-medium border border-gray-100">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & Warranty */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="w-11 h-11 bg-primary/5 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
