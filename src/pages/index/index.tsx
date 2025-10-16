import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import ProcesoRMO from "@/components/ProcesoRMO";
import ImpactoSection from "@/components/ImpactoSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProcesoRMO />
      <ImpactoSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
