import ContributeSection from "@/components/ContributeSection";
import ContributeHero from "@/components/ContributeHero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const Contribute = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContributeHero />
      <ContributeSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contribute;
