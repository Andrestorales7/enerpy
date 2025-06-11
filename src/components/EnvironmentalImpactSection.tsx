import { useEffect } from 'react';
import EnvironmentalChallenges from './environmental/EnvironmentalChallenges';
import SolutionSection from './environmental/SolutionSection';
import ImpactStats from './environmental/ImpactStats';

const EnvironmentalImpactSection = () => {
  useEffect(() => {
    // Animate sections when they become visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.animated-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="impacto" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Impacto Ambiental</h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-enerpy-gray max-w-3xl mx-auto">
            Nuestra misión es crear un futuro más sostenible, contribuyendo activamente a la solución de los problemas ambientales más apremiantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <EnvironmentalChallenges />
          <SolutionSection />
        </div>

        <ImpactStats />
      </div>
    </section>
  );
};

export default EnvironmentalImpactSection;
