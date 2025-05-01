
import { useEffect } from 'react';
import { Recycle, FlaskConical, Bolt, Factory } from 'lucide-react';

const WhatWeDoSection = () => {
  useEffect(() => {
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
    <section id="que-hacemos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">¿Qué Hacemos?</h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-enerpy-gray max-w-3xl mx-auto">
            En ENERPY transformamos residuos en soluciones energéticas sostenibles a través de nuestra tecnología innovadora y patentada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto animated-section">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Ciclo de Transformación</h3>
            <p className="text-lg text-enerpy-gray mb-6">
              Nuestro innovador proceso convierte diferentes tipos de residuos en productos útiles y sostenibles, cerrando el ciclo de vida de los materiales y contribuyendo a la economía circular.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ProcessStep number={1} text="Recolección de residuos" />
              <ProcessStep number={2} text="Clasificación y preparación" />
              <ProcessStep number={3} text="Procesamiento RMO®" />
              <ProcessStep number={4} text="Obtención de productos sostenibles" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay: number;
}) => (
  <div 
    className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animated-section"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center justify-center w-16 h-16 bg-enerpy-light/20 rounded-full mb-6 mx-auto text-enerpy-primary">
      <Icon size={30} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
    <p className="text-enerpy-gray/80 text-center">{description}</p>
  </div>
);

const ProcessStep = ({ number, text }: { number: number; text: string }) => (
  <div className="flex items-center gap-3 bg-white p-3 rounded-md shadow-sm">
    <div className="w-8 h-8 rounded-full bg-enerpy-primary flex items-center justify-center text-white font-bold">
      {number}
    </div>
    <p className="text-sm font-medium">{text}</p>
  </div>
);

const features = [
  {
    icon: Recycle,
    title: "Gestión de Residuos",
    description: "Transformamos residuos plásticos, orgánicos y otros materiales en recursos valiosos."
  },
  {
    icon: FlaskConical,
    title: "Tecnología RMO®",
    description: "Utilizamos nuestro proceso de radiólisis fotónica focalizada patentado."
  },
  {
    icon: Bolt,
    title: "Energía Limpia",
    description: "Generamos combustibles ecológicos que reducen la huella de carbono."
  },
  {
    icon: Factory,
    title: "Productos Sostenibles",
    description: "Creamos aceites ecológicos, carbón y gas a partir de materiales reciclados."
  }
];

export default WhatWeDoSection;
