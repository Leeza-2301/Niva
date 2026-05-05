import Link from "next/link";

const productLinks = [
  { label: "PP Spunbond Non-Woven Fabric", href: "/products" },
  { label: "UV Treated Non-Woven Fabric", href: "/products" },
  { label: "Hydrophilic & Hydrophobic Nonwoven", href: "/products" },
  { label: "Antistatic Nonwoven", href: "/products" }
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Technical Specs", href: "/technical-specs" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Process", href: "/process" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" }
];

const companyLinks = [
  { label: "Industries Served", href: "/" },
  { label: "Certifications", href: "/" },
  { label: "Why Choose Us", href: "/" },
  { label: "Achievements", href: "/" },
  { label: "FAQ", href: "/" }
];

export default function Footer() {
  // Temporary local visitor count. Later we can replace this with Firebase-backed data.
  const visitorCount = 12876;

  return (
    <footer className="relative z-10 border-t border-sky-300/70 bg-sky-100/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Niva Group India</h3>
            <p className="text-sm text-gray-800">Manufacturing Unit: Ribda, Near Rajkot, Gujarat, India</p>
            <p className="text-sm text-gray-800">Eco-friendly nonwoven manufacturing and export solutions across multiple industries.</p>
            <p className="text-sm text-gray-800">
              Call:{" "}
              <a href="tel:+919979979729" className="font-semibold text-sky-900 hover:underline">
                +91 99799 79729
              </a>
            </p>
            <p className="text-sm text-gray-800">
              Mail:{" "}
              <a href="mailto:info@niva-group.in" className="font-semibold text-sky-900 hover:underline">
                info@niva-group.in
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900">Our Products</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-800 transition hover:text-sky-900 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-800 transition hover:text-sky-900 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-800 transition hover:text-sky-900 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="group relative mt-8 overflow-hidden rounded-xl border border-sky-300/70 bg-gradient-to-br from-white via-sky-50 to-cyan-100 px-4 py-3 text-sm text-slate-800 shadow-[0_8px_20px_rgba(14,116,144,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(14,116,144,0.25)]">
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition duration-700 group-hover:translate-x-full" />
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">Visitors</span>
                <span className="rounded-full bg-gradient-to-r from-sky-700 via-blue-700 to-cyan-600 px-3 py-1 text-base font-extrabold text-white shadow-sm transition duration-300 group-hover:scale-105">
                  {visitorCount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-sky-300/70 bg-sky-200/65 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-sm text-slate-900 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Niva Group India. All Rights Reserved. | Design & Developed by Leeza Pithdiya</p>
          <div className="flex items-center gap-3">
            <p>Built for sustainable manufacturing excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

