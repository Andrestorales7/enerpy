
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import ScrollToTop from '@/components/ScrollToTop';

const WhatWeDo = () => {
  useEffect(() => {
    // Update page title
    document.title = 'ENERPY - ¿Qué Hacemos?';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-enerpy-dark to-enerpy-primary py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              ¿Qué Hacemos?
            </h1>
          </div>
        </div>
        <WhatWeDoSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WhatWeDo;
