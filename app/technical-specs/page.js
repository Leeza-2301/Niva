import SectionWrapper from "../../components/SectionWrapper";
import SpecTable from "../../components/SpecTable";
import { siteContent } from "../../lib/content";

export default function TechnicalSpecsPage() {
  return (
    <SectionWrapper title="Technical Specifications" subtitle="Representative PP spunbond nonwoven technical data from provided material." tone="white">
      <SpecTable rows={siteContent.technicalTable} />
    </SectionWrapper>
  );
}
