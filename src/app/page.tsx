import Hero from "@/components/Hero";
import Music from "@/components/Music";
import About from "@/components/About";
import Tour from "@/components/Tour";
import MerchPreview from "@/components/MerchPreview";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Music />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Tour />
      <SectionDivider />
      <MerchPreview />
    </>
  );
}
