import Hero from "@/components/frontend/Hero";
import MegaMenu from "@/components/frontend/MegaMenu";

export default function Home() {
  return (
    <section className="bg-blue-950 border-t-[1px] border-gray-600">
      <div className=" max-w-5xl flex mx-auto p-6">
      <MegaMenu />
      </div>
      <Hero />
    </section>
  );
}
