import Link from "next/link";

export const metadata = { title: "Enterprise Hardware" };

const GRID_BG = "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Cpath d='M40 0 L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E\")";

const categories = [
  {
    name: "Laptops",
    gradient: "from-violet-600 to-indigo-600",
    accent: "text-indigo-600 bg-indigo-50 border-indigo-100",
    products: [
      { name: "MacBook Air M3", specs: "8GB RAM / 256GB SSD", popular: false },
      { name: "MacBook Pro 14\" M3 Pro", specs: "18GB RAM / 512GB SSD", popular: true },
      { name: "MacBook Pro 16\" M3 Max", specs: "36GB RAM / 1TB SSD", popular: false },
    ],
  },
  {
    name: "Desktops",
    gradient: "from-cyan-500 to-sky-600",
    accent: "text-cyan-600 bg-cyan-50 border-cyan-100",
    products: [
      { name: "iMac 24\" M3", specs: "8GB RAM / 256GB SSD", popular: false },
      { name: "Mac Mini M3", specs: "8GB RAM / 256GB SSD", popular: true },
      { name: "Mac Studio M2 Ultra", specs: "64GB RAM / 1TB SSD", popular: false },
    ],
  },
  {
    name: "Tablets",
    gradient: "from-emerald-500 to-teal-500",
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
    products: [
      { name: "iPad Pro 12.9\" M2", specs: "256GB / WiFi + Cellular", popular: true },
      { name: "iPad Air M2", specs: "128GB / WiFi", popular: false },
    ],
  },
  {
    name: "Networking",
    gradient: "from-amber-400 to-orange-500",
    accent: "text-amber-600 bg-amber-50 border-amber-100",
    products: [
      { name: "Cisco Catalyst 9200", specs: "24-port / PoE+ / Managed", popular: false },
      { name: "Ubiquiti UniFi AP", specs: "WiFi 6 / Enterprise", popular: true },
      { name: "Fortinet FortiGate 60F", specs: "Firewall / SD-WAN", popular: false },
    ],
  },
];

const accessories = [
  "USB-C Chargers & Hubs", "Docking Stations", "Enterprise Monitors", "Keyboards & Mice",
  "Server Racks & Cabinets", "Ethernet Cables (Cat6/Cat6a)", "UPS Battery Backups", "External SSDs",
  "Webcams & Headsets", "Surge Protectors", "Protective Cases", "Magic Keyboard & Trackpad",
];

const features = [
  {
    title: "Global Shipping",
    desc: "Reliable delivery to the U.S. and Africa. Customs clearance and logistics support included for African markets.",
    gradient: "from-cyan-500 to-sky-600",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Warranty & Support",
    desc: "Manufacturer warranty on all products plus our support team for setup, configuration, and troubleshooting.",
    gradient: "from-emerald-500 to-teal-500",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "30-Day Returns",
    desc: "30-day return policy for unused products in original packaging. Hassle-free process.",
    gradient: "from-violet-600 to-indigo-600",
    icon: "M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z",
  },
  {
    title: "Bulk Discounts",
    desc: "Volume pricing for 10+ units. Dedicated account managers for institutional and enterprise clients.",
    gradient: "from-amber-400 to-orange-500",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

export default function HardwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060412] via-[#1a0e40] to-[#0c1635]" />
        <div className="glow-orb absolute -top-24 left-0 w-[500px] h-[400px] bg-cyan-700 opacity-20 animate-glow-pulse" />
        <div className="glow-orb absolute bottom-0 right-0 w-[400px] h-[300px] bg-violet-500 opacity-15 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRID_BG }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Hardware
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Enterprise{" "}
            <span className="gradient-text-cyan">Hardware</span>
          </h1>
          <p className="text-indigo-200/80 text-xl max-w-xl leading-relaxed">
            Premium Mac hardware for individuals and enterprises — laptops, desktops, tablets, and accessories with custom configurations and bulk solutions.
          </p>
          <div className="flex gap-4 mt-8">
            <Link href="/contact"
              className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl shadow-xl shadow-amber-700/30 text-sm">
              Request a Quote
            </Link>
            <a href="#catalog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-sm backdrop-blur-sm">
              Browse Catalog ↓
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Features bar */}
      <section className="py-10 border-b border-indigo-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{f.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Catalog</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Product <span className="gradient-text">Lineup</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-3xl border border-indigo-100/60 overflow-hidden card-hover">
                <div className={`h-1.5 bg-gradient-to-r ${cat.gradient}`} />
                <div className="p-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4 shadow-md`}>
                    <span className="text-white font-extrabold text-xs">{cat.name[0]}</span>
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-base mb-4">{cat.name}</h3>
                  <div className="space-y-3">
                    {cat.products.map((p) => (
                      <div key={p.name} className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold text-gray-800 leading-tight">{p.name}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{p.specs}</p>
                        </div>
                        {p.popular && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${cat.accent}`}>Popular</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact"
                    className={`w-full mt-5 block text-center py-2 text-xs font-bold rounded-xl border transition-all duration-200 ${cat.accent} hover:opacity-80`}>
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom + Bulk */}
      <section className="py-20 bg-gradient-to-b from-[#f0f0ff]/60 to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 border border-indigo-100/60 card-hover">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3 block">Customization</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Custom Configurations</h2>
              <p className="text-gray-500 mb-5 leading-relaxed text-sm">
                Need specific specs? We offer custom CPU, RAM, and SSD upgrades on all Mac products. Build the perfect machine for your team.
              </p>
              <ul className="space-y-2.5">
                {["CPU upgrades (M3 Pro, M3 Max, M2 Ultra)", "RAM options up to 192GB", "SSD storage up to 8TB", "Bundle deals with peripherals"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0a0818] to-[#1a0e40] rounded-3xl p-10 border border-violet-500/20 relative overflow-hidden">
              <div className="glow-orb absolute top-0 right-0 w-[200px] h-[200px] bg-amber-500 opacity-10" />
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 block">Enterprise</span>
                <h2 className="text-2xl font-extrabold text-white mb-4">Bulk & Enterprise</h2>
                <p className="text-indigo-200/70 mb-6 leading-relaxed text-sm">
                  Outfitting an office, school, or organization? We offer volume discounts, leasing options, and dedicated account managers for institutional clients in the U.S. and Africa.
                </p>
                <Link href="/contact"
                  className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-extrabold rounded-xl shadow-xl shadow-amber-700/30 text-sm hover:from-amber-300 hover:to-orange-400 transition-all">
                  Request Bulk Pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">Add-Ons</span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Accessories & Peripherals</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {accessories.map((a) => (
              <span key={a} className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-indigo-100 hover:border-indigo-300 hover:text-indigo-700 transition-all duration-200 cursor-default">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
