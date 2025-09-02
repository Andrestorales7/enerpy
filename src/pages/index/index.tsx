import HeroSection from "@/components/HeroSection";
import MainHero from "@/components/MainHero";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import TechnologySection from "@/components/TechnologySection";
import EnvironmentalImpactSection from "@/components/EnvironmentalImpactSection";
import HistorySection from "@/components/HistorySection";
import ProductsSection from "@/components/ProductsSection";
import ContributeSection from "@/components/ContributeSection";
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
      <HistorySection />
      <ProductsSection />
      <ContributeSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
