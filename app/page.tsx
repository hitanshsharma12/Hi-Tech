import Hero from "@/components/sections/Hero";
import Navbar from './../components/layout/Navbar';
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-white overflow-x-hidden">
      
<Navbar/>
      {/* 🔥 HERO SECTION */}
      <Hero />
      <Services/>
      <Testimonials/>

    </main>
  );
}