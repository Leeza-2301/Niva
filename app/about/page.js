import SectionWrapper from "../../components/SectionWrapper";
import { siteContent } from "../../lib/content";

export default function AboutPage() {
  return (
    <>
      <SectionWrapper title="About Niva Group India" subtitle={siteContent.intro} tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          <img src="/img/11.jpeg" alt="Niva infrastructure" className="h-full w-full rounded-lg object-cover shadow-md" />
          <ul className="list-disc space-y-2 rounded-lg border border-slate-200 bg-white p-6 pl-10 text-gray-600 shadow-md">
            {siteContent.companyOverview.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Vision and Growth" tone="blue">
        <p className="text-gray-600">
          The company is focused on premiumization, geographic expansion, service excellence, and productivity improvements while creating employment and
          social value through responsible business operations.
        </p>
      </SectionWrapper>

      <SectionWrapper title="Infrastructure Snapshot" tone="white">
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          <li>{siteContent.infrastructure.location}</li>
          <li>Installed commercial nonwoven fabric production capacity: 4,500 MT/year.</li>
          <li>Departments: {siteContent.infrastructure.departments.join(", ")}.</li>
          <li>Advanced machinery with quality checks at defined manufacturing stages.</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper title="Key Features" subtitle="Operational commitments mentioned in the source document." tone="blue">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.keyFeatures.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-gray-600 shadow-md transition hover:scale-105 hover:shadow-xl">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
