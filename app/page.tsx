import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MethodologySection } from "@/components/sections/methodology-section";
import { StatsSection } from "@/components/sections/stats-section";
import { SubjectsSection } from "@/components/sections/subjects-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { Reveal } from "@/components/ui/reveal";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Reveal>
        <StatsSection />
      </Reveal>
      <Reveal>
        <SubjectsSection />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <MethodologySection />
      </Reveal>
      <Reveal>
        <WhyChooseUsSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
