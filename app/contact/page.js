import ContactForm from "../../components/ContactForm";
import SectionWrapper from "../../components/SectionWrapper";

export default function ContactPage() {
  return (
    <SectionWrapper title="Contact Us" subtitle="Share your requirements for nonwoven fabrics, bags, agricultural covers, and custom manufacturing support." tone="white">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-gray-600 shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">Niva Group India</h3>
          <p className="mt-3">Location: Ribda, Near Rajkot, Gujarat, India</p>
          <p className="mt-2">Serving domestic and international markets with quality-focused eco-friendly products.</p>
          <img src="/img/12.jpeg" alt="Contact Niva Group" className="mt-5 h-56 w-full rounded object-cover shadow-sm" />
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
