import SectionWrapper from "../../components/SectionWrapper";
import { siteContent } from "../../lib/content";

export default function InfrastructurePage() {
  return (
    <>
      <SectionWrapper title="Infrastructure" subtitle={siteContent.infrastructure.summary} tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          <img src="/img/14.jpeg" alt="Manufacturing setup" className="h-full w-full rounded-lg object-cover shadow-md" />
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Facility Location</h3>
            <p className="mt-2 text-gray-600">{siteContent.infrastructure.location}</p>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Capacity</h3>
            <p className="mt-2 text-gray-600">Commercial installed nonwoven fabric capacity of 4,500 MT per year.</p>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Operational Advantages</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
              {siteContent.infrastructure.advantages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Departments" subtitle="Core departments that support manufacturing and delivery reliability." tone="blue">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.infrastructure.departments.map((dept) => (
            <div key={dept} className="rounded-lg border border-slate-200 bg-white p-4 text-gray-700 shadow-md transition hover:scale-105 hover:shadow-xl">
              {dept}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
