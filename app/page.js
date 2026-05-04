import CTA from "../components/CTA";
import HeroVideo from "../components/HeroVideo";
import { StaggerGrid, StaggerItem } from "../components/MotionSection";
import ProductCard from "../components/ProductCard";
import SectionWrapper from "../components/SectionWrapper";
import Stats from "../components/Stats";
import { siteContent } from "../lib/content";

export default function HomePage() {
  return (
    <>
      <HeroVideo heading={siteContent.hero.heading} subheading={siteContent.hero.subheading} ctas={siteContent.hero.ctas} />

      <SectionWrapper title="Company Introduction" subtitle={siteContent.intro} tone="white">
        <StaggerGrid className="grid gap-4 md:grid-cols-2">
          {siteContent.companyOverview.map((point) => (
            <StaggerItem key={point}>
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-md transition hover:scale-105 hover:shadow-xl">
                <p className="text-gray-600">{point}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </SectionWrapper>

      <SectionWrapper title="Key Highlights" subtitle="A quick operational snapshot from the company profile." tone="blue">
        <Stats items={siteContent.highlights} />
      </SectionWrapper>

      <SectionWrapper title="Product Overview" subtitle="Core nonwoven product lines and application-ready performance traits." tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Applications" subtitle="Document-derived usage coverage across packaging, medical, agriculture, and industrial segments." tone="blue">
        <StaggerGrid className="grid gap-4 md:grid-cols-2">
          {siteContent.applications.map((item) => (
            <StaggerItem key={item}>
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-md transition hover:scale-105 hover:shadow-xl">
                <p className="text-gray-600">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </SectionWrapper>

      <SectionWrapper title="Infrastructure Summary" subtitle={siteContent.infrastructure.summary} tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          <img src="/img/10.jpeg" alt="Niva plant infrastructure" className="h-full w-full rounded-lg object-cover shadow-md" />
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">Location</h3>
            <p className="mt-2 text-gray-600">{siteContent.infrastructure.location}</p>
            </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">Operational Strengths</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
              {siteContent.infrastructure.advantages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Industries Served" subtitle="Multi-sector nonwoven support with customization for domestic and international demand." tone="blue">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.industriesServed.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-gray-700 shadow-md transition hover:scale-105 hover:shadow-xl">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Certifications" subtitle="Standards and compliance commitments across quality and environmental systems." tone="white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.certifications.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-gray-700 shadow-md transition hover:scale-105 hover:shadow-xl">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Why Choose Us" subtitle="Strengths built on quality, speed, ethics, and market responsiveness." tone="blue">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.whyChooseUs.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-gray-700 shadow-md transition hover:scale-105 hover:shadow-xl">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Achievements" subtitle="Milestones from the company growth journey." tone="white">
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-5 text-gray-700 shadow-md">
            {siteContent.achievements[0]}
          </div>
          <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {siteContent.achievementImages.map((img, idx) => (
              <StaggerItem key={img}>
                <img
                  src={img}
                  alt={`Achievement ${idx + 1}`}
                  className="h-48 w-full rounded-lg border border-slate-200 object-cover shadow-md transition hover:scale-105 hover:shadow-xl"
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </SectionWrapper>

      <SectionWrapper title="FAQ" subtitle="Frequently asked questions generated from company and product information." tone="blue">
        <div className="space-y-4">
          {siteContent.faq.map((item) => (
            <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-4 shadow-md">
              <summary className="cursor-pointer font-semibold text-gray-900">{item.question}</summary>
              <p className="mt-2 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </SectionWrapper>

      <CTA />
    </>
  );
}
