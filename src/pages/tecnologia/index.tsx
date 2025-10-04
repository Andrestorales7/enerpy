import TechnologySection from "@/components/TechnologySection";
import TechnologyDetailedSection from "@/components/TechnologyDetailedSection";
import TechnologyHero from "@/components/TechnologyHero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const Technology = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TechnologyHero />
      <TechnologyDetailedSection />
      <TechnologySection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Technology;
