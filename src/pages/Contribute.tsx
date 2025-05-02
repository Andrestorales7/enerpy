
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContributeSection from '@/components/ContributeSection';
import ScrollToTop from '@/components/ScrollToTop';

const Contribute = () => {
  useEffect(() => {
    // Update page title
    document.title = 'ENERPY - Contribuir';
    
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
              Contribuir con Enerpy
            </h1>
          </div>
        </div>
        <ContributeSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contribute;
