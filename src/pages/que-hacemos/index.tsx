import WhatWeDoHero from "@/components/WhatWeDoHero";
import WhatWeDoNarrative from "@/components/WhatWeDoNarrative";
import ProcessDemo from "@/components/ProcessDemo";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatWeDoHero />
      <WhatWeDoNarrative />
      <ProcessDemo />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WhatWeDo;
