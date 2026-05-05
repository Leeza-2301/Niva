import { StaggerGrid, StaggerItem } from "./MotionSection";

export default function Stats({ items }) {
  const highlightImages = ["/img/11.jpeg", "/img/12.jpeg", "/img/13.jpeg", "/img/14.jpeg", "/img/15.jpeg"];

  return (
    <StaggerGrid className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
      {items.map((item, idx) => (
        <StaggerItem key={item.label}>
          <div className="h-[320px] [perspective:1200px]">
            <div className="preserve-3d relative h-full w-full rounded-2xl shadow-[0_14px_30px_rgba(15,23,42,0.14)] transition-transform duration-700 group-hover:[transform:rotateY(180deg)] hover:[transform:rotateY(180deg)]">
              <div className="backface-hidden absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <img src={highlightImages[idx % highlightImages.length]} alt={item.label} className="h-44 w-full object-cover" />
                <div className="flex h-[calc(100%-11rem)] items-center p-4">
                  <p className="text-xl font-bold leading-snug text-slate-900">{item.label}</p>
                </div>
              </div>

              <div className="backface-hidden absolute inset-0 [transform:rotateY(180deg)] rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 text-slate-800">
                <div className="flex h-full flex-col justify-between">
                  <p className="text-4xl font-extrabold leading-tight text-sky-800">{item.value}</p>
                  <p className="text-base leading-relaxed text-slate-700">{item.label}</p>
                </div>
              </div>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
