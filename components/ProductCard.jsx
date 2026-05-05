import Link from "next/link";
import { StaggerItem } from "./MotionSection";

export default function ProductCard({ product }) {
  return (
    <StaggerItem className="h-full">
      <article className="flex h-full flex-col rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
        <div className="overflow-hidden rounded-lg">
          <img src={product.image || "/img/9.jpeg"} alt={product.title} className="h-48 w-full object-cover" />
        </div>
        <div className="px-2 pb-2 pt-5">
          <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.description}</p>
        </div>
        <hr className="my-4 border-slate-200" />
        <Link
          href="/contact"
          className="mt-auto inline-flex w-fit items-center gap-2 px-2 text-sm font-medium text-slate-800 transition hover:text-slate-900"
        >
          View More
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-[10px] text-white">
            &gt;
          </span>
        </Link>
      </article>
    </StaggerItem>
  );
}
