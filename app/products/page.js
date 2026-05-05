import ProductCard from "../../components/ProductCard";
import SectionWrapper from "../../components/SectionWrapper";
import { siteContent } from "../../lib/content";

export default function ProductsPage() {
  return (
    <>
      <section className="pb-0">
        <div className="relative overflow-visible rounded-none">
          <div className="relative min-h-[480px] overflow-hidden md:min-h-[620px]">
            <div
              className="niva-zoom-bg absolute inset-0"
              style={{
                backgroundImage: "url('/img/15.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div className="absolute inset-0 bg-[#032d6a]/55" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="max-w-4xl">
                <h1 className="text-4xl font-bold text-white md:text-6xl">Non-Woven Fabrics</h1>
                <p className="mt-5 text-base text-slate-100 md:text-xl">
                  Our nonwoven fabrics are engineered with precision and advanced technology to deliver superior strength, consistency, and performance.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-12 left-1/2 z-20 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full border-8 border-white bg-indigo-900 shadow-xl">
            <span className="text-3xl font-bold text-pink-500">N</span>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2 md:gap-14">
          <div className="relative">
            <div className="absolute -bottom-4 left-8 h-[88%] w-[72%] rotate-[-5deg] rounded-3xl bg-indigo-900" />
            <div className="relative overflow-hidden rounded-3xl border-8 border-white shadow-[0_12px_30px_rgba(15,23,42,0.18)]">
              <img src="/img/15.jpeg" alt="What is non-woven fabric" className="h-[420px] w-full object-cover" />
            </div>
          </div>

          <div className="border-l border-slate-300 pl-10">
            <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">What Is Non-Woven Fabric?</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              Non-woven fabric is a versatile material made by bonding fibers together through heat, pressure, or chemical processes. This process creates a lightweight yet durable fabric with excellent breathability, flexibility, and uniform strength.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Because of their consistency, cost-effectiveness, and high performance, non-woven fabrics are used for a wide range of applications, from medical and hygiene products to agriculture, packaging, filtration, and automotive uses. Their unique structure allows manufacturers to tailor properties such as softness, absorbency, water resistance, and strength to meet specific functional needs.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-pink-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <SectionWrapper
        title="Products"
        subtitle="Structured from company product documentation and application focus."
        tone="blue"
        className="pt-12"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Applications Coverage"
        subtitle="Document-mapped use cases for fabric and value-added products."
        tone="blue"
        className="relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_46%)]" />
        <div className="relative rounded-2xl border border-sky-100 bg-white/80 p-4 shadow-[0_12px_30px_rgba(14,116,144,0.08)] backdrop-blur-sm md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {siteContent.applications.map((item, idx) => (
              <div
                key={item}
                className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                  {idx + 1}
                </div>
                <p className="text-lg leading-relaxed text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
