import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
    </main>
  );
}