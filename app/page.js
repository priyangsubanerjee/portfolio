import HeroSection from "./Fragments/HeroSection";
import Navbar from "./Components/Navbar";
import Introduction from "./Fragments/Introduction";
import Services from "./Fragments/Services";
import Process from "./Fragments/Process";
import Works from "./Fragments/Works";
import Courtsey from "./Components/Courtsey";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Introduction />
      <Services />
      <Works />
      <Process />
      <Courtsey />
      <Footer />
    </>
  );
}
