import HeroSection from "@/components/HeroSection";
import MainHero from "@/components/MainHero";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import TechnologySection from "@/components/TechnologySection";
import EnvironmentalImpactSection from "@/components/EnvironmentalImpactSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MainHero />
      <WhatWeDoSection />
      <TechnologySection />
      <EnvironmentalImpactSection />
      <ProductsSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
