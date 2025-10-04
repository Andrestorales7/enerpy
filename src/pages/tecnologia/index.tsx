import TechnologyDetailedSection from "@/components/TechnologyDetailedSection";
import TechnologyIntroSection from "@/components/TechnologyIntroSection";
import ProcessStickyScrollDemo from "@/components/ProcessStickyScroll";
import TechnologyHero from "@/components/TechnologyHero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const Technology = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TechnologyHero />
      <TechnologyIntroSection />
      <ProcessStickyScrollDemo />
      <TechnologyDetailedSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Technology;
