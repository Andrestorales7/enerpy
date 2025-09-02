import HistorySection from "@/components/HistorySection";
import HistoryHero from "@/components/HistoryHero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const History = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HistoryHero />
      <HistorySection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default History;
