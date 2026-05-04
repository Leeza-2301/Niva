import SectionWrapper from "../../components/SectionWrapper";
import { siteContent } from "../../lib/content";
import { Factory, FlaskConical, Gauge, Package, ShieldCheck } from "lucide-react";

const stepIcons = [Factory, FlaskConical, Gauge, Package, ShieldCheck];

export default function ProcessPage() {
  return (
    <SectionWrapper title="Manufacturing Process" subtitle="Step-by-step flow converted from source process component and process description." tone="white">
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {siteContent.processSteps.map((step, index) => (
          <li key={step} className="rounded-lg border border-slate-200 bg-white p-5 shadow-md transition hover:scale-105 hover:shadow-xl">
            {(() => {
              const Icon = stepIcons[index % stepIcons.length];
              return <Icon className="h-6 w-6 text-blue-500" />;
            })()}
            <p className="mt-3 text-sm font-semibold text-blue-600">Step {index + 1}</p>
            <p className="mt-2 text-gray-600">{step}</p>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
