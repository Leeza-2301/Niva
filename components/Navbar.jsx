import Link from "next/link";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/products", "Products"],
  ["/technical-specs", "Technical Specs"],
  ["/infrastructure", "Infrastructure"],
  ["/process", "Process"],
  ["/leadership", "Leadership"],
  ["/contact", "Contact"]
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/img/15.jpeg"
            alt="Dummy logo"
            className="h-10 w-10 rounded-full border border-slate-200 object-cover"
          />
          <span className="text-lg font-bold text-brand-700">Niva Group India</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="rounded px-2 py-1 transition hover:bg-sky-50 hover:text-sky-700">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
