import { MotionSection } from "./MotionSection";

export default function SectionWrapper({ title, subtitle, children, className = "", tone = "white" }) {
  const bg = tone === "blue" ? "bg-sky-50" : "bg-white";
  return (
    <section className={`py-16 ${bg} ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-6">
        {title ? <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2> : null}
        {subtitle ? <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{subtitle}</p> : null}
        <MotionSection className="mt-8">{children}</MotionSection>
      </div>
    </section>
  );
}
