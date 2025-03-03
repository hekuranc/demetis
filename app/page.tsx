import { MainNav } from "./components/MainNav";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CtaSection } from "./components/CtaSection";

export default function Home() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <MainNav />
      <main className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)] pointer-events-none"></div>
        <HeroSection />
        <FeaturesSection />
        <ArchitectureSection />
        <PricingSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </div>
  );
}
