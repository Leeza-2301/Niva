import { StaggerGrid, StaggerItem } from "./MotionSection";

export default function Stats({ items }) {
  return (
    <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <StaggerItem key={item.label}>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-md transition hover:scale-105 hover:shadow-xl">
            <p className="text-2xl font-bold text-gray-900">{item.value}</p>
            <p className="mt-1 text-sm text-gray-600">{item.label}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
