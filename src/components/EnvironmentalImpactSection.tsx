import { useEffect } from 'react';
import { Leaf, Recycle, Globe, TreeDeciduous } from 'lucide-react';
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
    <section id="impacto" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Impacto Ambiental</h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-enerpy-gray max-w-3xl mx-auto">
            Nuestra misión es crear un futuro más sostenible, contribuyendo activamente a la solución de los problemas ambientales más apremiantes.
          </p>
        </div>

        {/* Nueva sección de impacto con imagen y texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animated-section">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/images/impacto-ambiental.jpg" 
              alt="Impacto Ambiental" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-enerpy-dark">Transformando el Futuro Ambiental</h3>
            <p className="text-lg text-enerpy-gray">
              Nuestra tecnología RMO® revoluciona la gestión de residuos, transformándolos en recursos valiosos mientras reducimos significativamente el impacto ambiental.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Leaf className="w-8 h-8 text-enerpy-primary mb-4" />
                <h4 className="font-bold mb-2">Reducción de CO2</h4>
                <p className="text-sm text-enerpy-gray">Disminución significativa de emisiones de gases de efecto invernadero</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Recycle className="w-8 h-8 text-enerpy-primary mb-4" />
                <h4 className="font-bold mb-2">Economía Circular</h4>
                <p className="text-sm text-enerpy-gray">Transformación de residuos en recursos reutilizables</p>
              </div>
            </div>
          </div>
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
