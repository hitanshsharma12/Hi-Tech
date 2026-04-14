import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import Services from "@/components/sections/Services";
import Project from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer"; // ✅ FIX

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-white overflow-x-hidden">
      
      <Navbar />

      {/* 🔥 HERO SECTION */}
      <Hero />

      <Services />
      <Project />  
      <Testimonials />

      <Footer /> {/* ✅ ADD HERE */}

    </main>
  );
}