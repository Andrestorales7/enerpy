
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import TechnologySection from '@/components/TechnologySection';
import EnvironmentalImpactSection from '@/components/EnvironmentalImpactSection';
import HistorySection from '@/components/HistorySection';
import ContributeSection from '@/components/ContributeSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimationHandler from '@/components/AnimationHandler';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = 'ENERPY - Transformando Residuos en Energía Sostenible';

    // Init smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhatWeDoSection />
        <TechnologySection />
        <EnvironmentalImpactSection />
        <HistorySection />
        <ContributeSection />
      </main>
      <Footer />
      <ScrollToTop />
      <AnimationHandler />
    </div>
  );
};

export default Index;
