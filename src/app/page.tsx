import Hero from "@/components/Hero";
import VideoTeaser from "@/components/VideoTeaser";
import Music from "@/components/Music";
import About from "@/components/About";
import BandPhoto from "@/components/BandPhoto";
import Tour from "@/components/Tour";
import MerchPreview from "@/components/MerchPreview";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <VideoTeaser />
      <SectionDivider />
      <Music />
      <SectionDivider />
      <BandPhoto />
      <About />
      <SectionDivider />
      <Tour />
      <SectionDivider />
      <MerchPreview />
    </>
  );
}
