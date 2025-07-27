import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        {/* Additional sections can be added here */}
      </main>
      <FooterSection />
    </div>
  );
}
