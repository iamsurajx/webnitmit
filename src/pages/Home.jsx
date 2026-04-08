import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import WhyUs from "../sections/WhyUs";
import Work from "../sections/Work";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Work />
      <Contact />
    </>
  );
}