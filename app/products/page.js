import ProductCard from "../../components/ProductCard";
import SectionWrapper from "../../components/SectionWrapper";
import { siteContent } from "../../lib/content";

export default function ProductsPage() {
  return (
    <>
      <SectionWrapper title="Products" subtitle="Structured from company product documentation and application focus." tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Applications Coverage" subtitle="Document-mapped use cases for fabric and value-added products." tone="blue">
        <div className="grid gap-4 md:grid-cols-2">
          {siteContent.applications.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-gray-600 shadow-md transition hover:scale-105 hover:shadow-xl">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
