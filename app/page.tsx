import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { SubjectsSection } from "@/components/sections/subjects-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SubjectsSection />
      <WhyChooseUsSection />
      <Footer />
    </>
  );
}
