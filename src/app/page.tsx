import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Specs from "@/components/sections/Specs";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Manifesto />
      <Process />
      <Stats />
      <Specs />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
