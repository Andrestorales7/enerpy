import { useEffect } from 'react';
import { Leaf, Recycle } from 'lucide-react';
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
    <section id="impacto" className="py-0 bg-gradient-to-b from-white to-green-50 w-full">
      {/* Encabezado de la sección */}
      <div className="w-full text-center pt-24 pb-10 animated-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Impacto Ambiental</h2>
        <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-enerpy-gray max-w-3xl mx-auto">
          Nuestra misión es crear un futuro más sostenible, contribuyendo activamente a la solución de los problemas ambientales más apremiantes.
        </p>
      </div>

      {/* Sección de imagen y texto de ancho completo */}
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-0 mb-20 animated-section">
        {/* Imagen dominante */}
        <div className="w-full lg:w-[60vw] h-[420px] lg:h-[520px] relative flex-shrink-0">
          <img 
            src="/images/arbol.jpg" 
            alt="Impacto Ambiental" 
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 240 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
        </div>
        {/* Texto extendido horizontalmente */}
        <div className="w-full lg:w-[40vw] flex flex-col justify-center px-8 py-10 bg-white/80 backdrop-blur-md">
          <h3 className="text-2xl md:text-3xl font-bold text-enerpy-dark mb-4">Transformando el Futuro Ambiental</h3>
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-lg text-enerpy-gray">
              Nuestra tecnología RMO® revoluciona la gestión de residuos, transformándolos en recursos valiosos mientras reducimos significativamente el impacto ambiental.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                <Leaf className="w-8 h-8 text-enerpy-primary mb-2" />
                <h4 className="font-bold mb-1 text-center">Reducción de CO2</h4>
                <p className="text-sm text-enerpy-gray text-center">Disminución significativa de emisiones de gases de efecto invernadero</p>
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                <Recycle className="w-8 h-8 text-enerpy-primary mb-2" />
                <h4 className="font-bold mb-1 text-center">Economía Circular</h4>
                <p className="text-sm text-enerpy-gray text-center">Transformación de residuos en recursos reutilizables</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de desafíos y solución */}
      <div className="container mx-auto px-4">
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
