import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero-section/HeroSection";

export default function Home() {
  return (
    <div className="flex h-screen  w-full fixed">
      <Navbar/>
      <HeroSection/>
     
    </div>
  );
}
