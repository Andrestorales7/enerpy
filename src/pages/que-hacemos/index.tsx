import WhatWeDoNarrative from "@/components/WhatWeDoNarrative";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <WhatWeDoNarrative />
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WhatWeDo;
