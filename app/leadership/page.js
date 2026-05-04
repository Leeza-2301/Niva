import SectionWrapper from "../../components/SectionWrapper";
import { siteContent } from "../../lib/content";

export default function LeadershipPage() {
  return (
    <>
      <SectionWrapper title="Leadership and Directors" subtitle="Leadership profiles extracted from the company document." tone="white">
        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.leadership.map((person) => (
            <article key={person.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-md transition hover:scale-105 hover:shadow-xl">
              <img src={person.image || "/img/13.jpeg"} alt={person.name} className="h-48 w-full rounded object-cover shadow-sm" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-blue-600">{person.role}</p>
              <p className="mt-3 text-gray-600">{person.summary}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Achievements" tone="blue">
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          {siteContent.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SectionWrapper>
    </>
  );
}
