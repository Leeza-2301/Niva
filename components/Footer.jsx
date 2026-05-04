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
          </div>
        </div>
      </div>

      <div className="border-t border-sky-300/70 bg-sky-200/65 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-sm text-slate-900 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Niva Group India. All Rights Reserved.| Design & Developed by Leeza Pithdiya</p>
          <p>Built for sustainable manufacturing excellence.</p>
        </div>
      </div>
    </footer>
  );
}
