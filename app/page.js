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

      <SectionWrapper
        title="Company Introduction"
        subtitle={siteContent.intro}
        tone="white"
        className="relative overflow-hidden"
      >
        <div className="relative rounded-3xl border border-sky-100 bg-[radial-gradient(circle_at_8%_10%,rgba(14,165,233,0.14),transparent_36%),radial-gradient(circle_at_92%_90%,rgba(37,99,235,0.10),transparent_42%),linear-gradient(135deg,rgba(239,246,255,0.94),rgba(255,255,255,0.98))] p-5 shadow-[0_16px_40px_rgba(2,132,199,0.12)] md:p-8">
          <div className="mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400" />
          <StaggerGrid className="grid gap-5 md:grid-cols-2">
          {siteContent.companyOverview.map((point) => (
            <StaggerItem key={point}>
              <div className="group h-full rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-5 shadow-[0_8px_22px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_16px_34px_rgba(14,116,144,0.18)]">
                <div className="mb-3 h-1.5 w-10 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 transition-all duration-300 group-hover:w-14" />
                <p className="text-lg leading-relaxed text-slate-700">{point}</p>
              </div>
            </StaggerItem>
          ))}
          </StaggerGrid>
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Key Highlights"
        subtitle="A quick operational snapshot of Niva Group India's capabilities."
        tone="blue"
        className="relative overflow-hidden"
      >
        <div className="relative rounded-3xl border border-sky-200/60 bg-[radial-gradient(circle_at_15%_15%,rgba(2,132,199,0.14),transparent_36%),radial-gradient(circle_at_85%_85%,rgba(14,116,144,0.14),transparent_36%),linear-gradient(135deg,rgba(236,254,255,0.96),rgba(239,246,255,0.98))] p-6 shadow-[0_18px_45px_rgba(14,116,144,0.14)] md:p-8">
          <Stats items={siteContent.highlights} />
        </div>
      </SectionWrapper>

      <SectionWrapper title="Product Overview" subtitle="Core nonwoven product lines and application-ready performance traits." tone="white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Applications" subtitle="Document-derived usage coverage across packaging, medical, agriculture, and industrial segments." tone="blue">
        <StaggerGrid className="grid gap-5 md:grid-cols-2">
          {siteContent.applications.map((item, idx) => (
            <StaggerItem key={item}>
              <div className="group relative overflow-hidden rounded-2xl border border-sky-100 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.1)] transition duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_20px_38px_rgba(14,116,144,0.2)]">
                <img
                  src={`/img/${20 + (idx % 5)}.jpeg`}
                  alt="Application background"
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100/0 via-cyan-100/0 to-blue-100/0 transition duration-500 group-hover:from-sky-100/70 group-hover:via-cyan-100/55 group-hover:to-blue-100/70" />
                <div className="applications-shine absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 h-1.5 w-12 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-500 group-hover:w-20" />
                  <p className="text-lg font-medium leading-relaxed text-slate-700 transition duration-300 group-hover:font-semibold group-hover:text-white group-hover:[text-shadow:0_1px_10px_rgba(2,6,23,0.45)]">
                    {item}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </SectionWrapper>

      <SectionWrapper title="Infrastructure Summary" subtitle={siteContent.infrastructure.summary} tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-md md:h-full">
            <video
              className="h-72 w-full object-cover md:h-full md:min-h-[520px]"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/img/4.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">Location</h3>
              <p className="mt-1 text-gray-600">{siteContent.infrastructure.location}</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ribda%2C+Rajkot%2C+Gujarat%2C+India"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Open in Google Maps
              </a>
              <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
                <iframe
                  title="Ribda Rajkot Gujarat Location Map"
                  src="https://www.google.com/maps?q=Ribda%2C%20Rajkot%2C%20Gujarat%2C%20India&output=embed"
                  className="h-44 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">Operational Strengths</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
                {siteContent.infrastructure.advantages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
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
