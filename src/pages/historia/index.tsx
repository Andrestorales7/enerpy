import HistorySection from "@/components/HistorySection";
import HistoryHero from "@/components/HistoryHero";
import HistoryMedia from "@/components/HistoryMedia";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const History = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HistoryHero />
      <HistorySection />
      <HistoryMedia />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default History;
