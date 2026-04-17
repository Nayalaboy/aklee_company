import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Enterprise Hardware" };

const categories = [
  {
    name: "Laptops & Workstations",
    products: [
      { name: "MacBook Pro 16\" M3 Max", specs: "36GB RAM / 1TB SSD" },
      { name: "MacBook Air M3", specs: "8GB RAM / 256GB SSD" },
      { name: "Dell Latitude 5540", specs: "16GB RAM / 512GB SSD" },
      { name: "Lenovo ThinkPad X1 Carbon", specs: "16GB RAM / 512GB SSD" },
      { name: "HP EliteBook 860 G10", specs: "32GB RAM / 1TB SSD" },
    ],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    name: "Desktops & Servers",
    products: [
      { name: "Dell PowerEdge R750", specs: "Rack Server / Xeon / 64GB" },
      { name: "HP ProLiant DL380 Gen11", specs: "Rack Server / Xeon / 128GB" },
      { name: "iMac 24\" M3", specs: "8-core / 16GB RAM / 512GB" },
      { name: "Dell OptiPlex 7010", specs: "i7 / 16GB RAM / 512GB SSD" },
      { name: "Lenovo ThinkCentre M90q", specs: "Mini PC / i7 / 16GB" },
    ],
    color: "text-teal",
    bg: "bg-teal/10",
  },
  {
    name: "Networking & Infrastructure",
    products: [
      { name: "Cisco Catalyst 9200 Switch", specs: "24-port / PoE+ / Managed" },
      { name: "Ubiquiti UniFi AP", specs: "WiFi 6 / Enterprise Access Point" },
      { name: "Fortinet FortiGate 60F", specs: "Firewall / SD-WAN / VPN" },
      { name: "APC Smart-UPS 3000VA", specs: "Rack-mount / Battery Backup" },
      { name: "Cisco ISR 1100 Router", specs: "Enterprise Router / 4G LTE" },
    ],
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    name: "Tablets & Mobile Devices",
    products: [
      { name: "iPad Pro 13\" M4", specs: "256GB / WiFi + Cellular" },
      { name: "Samsung Galaxy Tab S9", specs: "128GB / WiFi + 5G" },
      { name: "Microsoft Surface Pro 10", specs: "16GB / 256GB SSD" },
      { name: "iPad Air M2", specs: "128GB / WiFi" },
    ],
    color: "text-emerald",
    bg: "bg-emerald/10",
  },
];

const accessories = [
  "USB-C Chargers & Hubs", "Docking Stations", "Enterprise Monitors", "Keyboards & Mice",
  "Server Racks & Cabinets", "Ethernet Cables (Cat6/Cat6a)", "UPS Battery Backups", "External SSDs",
  "Webcams & Headsets", "Surge Protectors", "Cable Management", "Protective Cases",
];

const features = [
  {
    title: "Global Shipping",
    description: "Reliable delivery to the U.S. and Africa. Customs clearance and logistics support included for African markets.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "bg-teal/10",
    textColor: "text-teal",
  },
  {
    title: "Warranty & Support",
    description: "Manufacturer warranty on all products plus our own support team for setup, configuration, and troubleshooting.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "bg-emerald/10",
    textColor: "text-emerald",
  },
  {
    title: "Volume Pricing",
    description: "Significant discounts on bulk orders. Dedicated account managers for institutional and government clients.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "bg-gold/10",
    textColor: "text-gold",
  },
];

export default function HardwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden hero-gradient">
        <Image src="/images/hero-hardware.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" priority sizes="100vw" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gold/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">Hardware</span>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-5 mt-4">
            Enterprise{" "}
            <span className="gradient-text-gold">Hardware</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Complete IT hardware solutions for businesses, schools, and organizations — laptops, servers, networking gear, and more. Built for the U.S. and Africa.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 inline-flex">Catalog</span>
            <h2 className="text-3xl font-bold text-dark mt-4">Product Lineup</h2>
            <p className="text-warm-gray-500 mt-3 max-w-2xl leading-relaxed">
              We source and supply enterprise-grade hardware from leading manufacturers — ready for deployment in any environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="bento-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${cat.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-dark">{cat.name}</h3>
                </div>
                <div className="space-y-2.5">
                  {cat.products.map((p) => (
                    <div key={p.name} className="flex items-center justify-between py-2 border-b border-dark/4 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-dark">{p.name}</p>
                        <p className="text-xs text-warm-gray-400">{p.specs}</p>
                      </div>
                      <button className="text-xs font-bold text-primary hover:text-primary-dark transition-colors whitespace-nowrap">
                        Get Quote
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom & Bulk */}
      <section className="py-24 relative overflow-hidden bg-background-alt">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bento-card">
              <span className="section-label mb-4 inline-flex">Customization</span>
              <h2 className="text-2xl font-bold text-dark mb-4 mt-3">Custom Configurations</h2>
              <p className="text-warm-gray-500 mb-6 leading-relaxed">
                Need specific specs for your team or deployment? We build custom hardware configurations to match your exact requirements.
              </p>
              <ul className="space-y-3">
                {[
                  "Spec upgrades on any laptop, desktop, or server",
                  "Pre-configured OS, security, and MDM enrollment",
                  "Custom branding and asset tagging",
                  "Bundle deals with networking and peripherals",
                  "Solar-powered and off-grid solutions for Africa",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-warm-gray-500 text-sm">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bento-card">
              <span className="section-label mb-4 inline-flex">Enterprise</span>
              <h2 className="text-2xl font-bold text-dark mb-4 mt-3">Bulk & Institutional</h2>
              <p className="text-warm-gray-500 mb-6 leading-relaxed">
                Outfitting an office, school, government agency, or NGO? We handle procurement, logistics, and deployment — including to remote locations across Africa.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Volume discounts starting at 10+ units",
                  "Leasing and financing options available",
                  "Dedicated account manager for each client",
                  "Customs clearance and in-country delivery for Africa",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-warm-gray-500 text-sm">
                    <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary inline-flex">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-4 inline-flex">Add-Ons</span>
          <h2 className="text-2xl font-bold text-dark mb-6 mt-3">Accessories & Peripherals</h2>
          <div className="flex flex-wrap gap-3">
            {accessories.map((a) => (
              <span key={a} className="px-4 py-2.5 bg-white text-warm-gray-500 rounded-full text-sm font-medium border border-dark/6 hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 cursor-default">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bento-card text-center group">
              <div className={`w-12 h-12 rounded-2xl ${f.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <svg className={`w-6 h-6 ${f.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">{f.title}</h3>
              <p className="text-sm text-warm-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
