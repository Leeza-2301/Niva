import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-2xl font-bold text-white">Looking for custom nonwoven solutions?</h3>
          <p className="mt-2 text-slate-100">Connect with our team for product customization, technical support, and export inquiries.</p>
        </div>
        <Link href="/contact" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow transition hover:scale-105 hover:brightness-110">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
