import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhatWeDoHero from "@/components/WhatWeDoHero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatWeDoHero />
      <WhatWeDoSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WhatWeDo;
