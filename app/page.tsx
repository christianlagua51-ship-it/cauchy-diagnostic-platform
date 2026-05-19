import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MethodologySection } from "@/components/sections/methodology-section";
import { StatsSection } from "@/components/sections/stats-section";
import { SubjectsSection } from "@/components/sections/subjects-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SubjectsSection />
      <AboutSection />
      <MethodologySection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
