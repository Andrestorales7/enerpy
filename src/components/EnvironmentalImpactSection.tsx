
import { useEffect, useState } from 'react';
import { Leaf, Globe, TreeDeciduous, Recycle } from 'lucide-react';

const EnvironmentalImpactSection = () => {
  const [counts, setCounts] = useState({
    tonsRecycled: 0,
    co2Reduced: 0,
    treesPlanted: 0,
    projectsImplemented: 0
  });

  const targets = {
    tonsRecycled: 12500,
    co2Reduced: 6800,
    treesPlanted: 15000,
    projectsImplemented: 24
  };

  useEffect(() => {
    // Animate counting when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');

            // Start counter animation if it's the stats section
            if (entry.target.id === 'environmental-stats') {
              startCounting();
            }
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

  const startCounting = () => {
    const duration = 2000; // ms
    const steps = 60;
    const interval = duration / steps;

    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        tonsRecycled: Math.floor(progress * targets.tonsRecycled),
        co2Reduced: Math.floor(progress * targets.co2Reduced),
        treesPlanted: Math.floor(progress * targets.treesPlanted),
        projectsImplemented: Math.floor(progress * targets.projectsImplemented)
      });

      if (step === steps) {
        clearInterval(timer);
      }
    }, interval);
  };

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
          <div className="animated-section">
            <div className="space-y-6">
              {environmentalChallenges.map((challenge, index) => (
                <ChallengeCard 
                  key={index} 
                  icon={challenge.icon} 
                  title={challenge.title} 
                  description={challenge.description}
                />
              ))}
            </div>
          </div>

          <div className="animated-section">
            <div className="bg-enerpy-primary/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Nuestra Solución</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-enerpy-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Economía Circular</h4>
                    <p className="text-enerpy-gray">Reintegramos materiales considerados como desecho al ciclo productivo, generando nuevos valores.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-enerpy-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Reducción de Emisiones</h4>
                    <p className="text-enerpy-gray">Nuestro proceso reduce significativamente las emisiones de CO2 comparado con métodos tradicionales.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-enerpy-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Energía Renovable</h4>
                    <p className="text-enerpy-gray">Creamos fuentes de energía alternativas que reducen la dependencia de combustibles fósiles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="environmental-stats" className="animated-section">
          <div className="bg-gradient-to-r from-enerpy-dark to-enerpy-primary rounded-xl p-10 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-center">Nuestro Impacto en Números</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard icon={Recycle} value={counts.tonsRecycled} label="Toneladas Recicladas" />
              <StatCard icon={Leaf} value={counts.co2Reduced} label="Ton. de CO2 Evitadas" />
              <StatCard icon={TreeDeciduous} value={counts.treesPlanted} label="Árboles Plantados" />
              <StatCard icon={Globe} value={counts.projectsImplemented} label="Proyectos Implementados" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChallengeCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:border-enerpy-primary transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-enerpy-light/20 rounded-full flex items-center justify-center flex-shrink-0 text-enerpy-primary">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-enerpy-gray">{description}</p>
      </div>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, value, label }: {
  icon: React.ElementType;
  value: number;
  label: string;
}) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon size={32} className="text-white" />
    </div>
    <div className="text-4xl font-bold mb-2">{value.toLocaleString()}</div>
    <div className="text-white/90">{label}</div>
  </div>
);

const environmentalChallenges = [
  {
    icon: Recycle,
    title: "Gestión de Residuos",
    description: "Miles de toneladas de residuos terminan en vertederos, contaminando suelos y aguas subterráneas."
  },
  {
    icon: Globe,
    title: "Cambio Climático",
    description: "Las emisiones de gases de efecto invernadero continúan acelerando el calentamiento global."
  },
  {
    icon: TreeDeciduous,
    title: "Deforestación",
    description: "La pérdida de bosques amenaza la biodiversidad y reduce la capacidad de absorción de CO2."
  }
];

export default EnvironmentalImpactSection;
