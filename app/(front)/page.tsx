import DoctorsList from "@/components/DoctorsList";
import Brands from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import TabbendSection from "@/components/Frontend/TabbendSection";

export default function Home() {
  return (
    <section className="mt-5">
      <Hero />
      <Brands />
      <TabbendSection />
      <DoctorsList isInPreson={false} />
      <DoctorsList className="bg-blue-50 py-8 lg:py-24 dark:bg-slate-900"
        title="In-preson dortor visit"
        isInPreson={true} />
    </section>
  );
}
