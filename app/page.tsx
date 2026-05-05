import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
