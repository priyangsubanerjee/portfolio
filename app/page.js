import Image from "next/image";
import HeroSection from "./Fragments/HeroSection";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
