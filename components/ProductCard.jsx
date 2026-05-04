import Link from "next/link";
import { StaggerItem } from "./MotionSection";

export default function ProductCard({ product }) {
  return (
    <StaggerItem className="h-full">
      <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-md transition hover:scale-105 hover:shadow-xl">
        <img src={product.image || "/img/9.jpeg"} alt={product.title} className="h-44 w-full rounded object-cover" />
        <h3 className="mt-4 text-xl font-bold text-gray-900">{product.title}</h3>
        <p className="mt-2 leading-relaxed text-gray-600">{product.description}</p>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900">Features</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
            {product.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900">Applications</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
            {product.applications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900">Specifications</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
            {product.specifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-block w-fit rounded-md bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 px-5 py-2 text-sm font-semibold text-white shadow transition hover:brightness-110"
        >
          Request Quote
        </Link>
      </article>
    </StaggerItem>
  );
}
