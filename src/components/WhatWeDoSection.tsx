import { useEffect, useState } from 'react';
import { Recycle, FlaskConical, Bolt, Factory } from 'lucide-react';

const WhatWeDoSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
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

    // Rotate through steps automatically
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      clearInterval(interval);
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
            <p className="text-lg text-enerpy-gray mb-6 text-center">
              Nuestro innovador proceso convierte diferentes tipos de residuos en productos útiles y sostenibles, cerrando el ciclo de vida de los materiales.
            </p>
            
            {/* Circular Process Visualization */}
            <div className="relative w-72 h-72 mx-auto my-8">
              {/* Circle background */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-enerpy-light/50"></div>
              
              {/* Process steps positioned in a circle */}
              {processSteps.map((step, index) => {
                // Calculate position on circle
                const angle = (Math.PI * 2 * index) / processSteps.length - Math.PI / 2;
                const x = Math.cos(angle) * 120 + 144;
                const y = Math.sin(angle) * 120 + 144;
                
                const isActive = index === activeStep;
                const Icon = step.icon;
                
                return (
                  <div 
                    key={index}
                    className={`absolute transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
                    style={{ 
                      left: `${x}px`, 
                      top: `${y}px`, 
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      isActive ? 'bg-enerpy-primary text-white' : 'bg-white text-enerpy-gray border border-gray-200'
                    }`}>
                      <Icon size={24} />
                    </div>
                  </div>
                );
              })}
              
              {/* Active step description in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-md">
                  <div className="text-center px-2">
                    <div className="w-6 h-6 rounded-full bg-enerpy-primary text-white flex items-center justify-center mx-auto mb-1">
                      {activeStep + 1}
                    </div>
                    <p className="text-xs font-medium text-enerpy-dark leading-tight">
                      {processSteps[activeStep].text}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Rotating indicator */}
              <div 
                className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                style={{ transform: `rotate(${activeStep * 90}deg)` }}
              >
                <div className="w-3 h-3 bg-enerpy-primary rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-1 h-36 bg-enerpy-primary/20 absolute top-0 left-1/2 transform -translate-x-1/2 origin-bottom"></div>
              </div>
            </div>
            
            {/* Step description below the circle */}
            <div className="text-center mt-8 h-16">
              <h4 className="font-bold text-enerpy-primary">{processSteps[activeStep].title}</h4>
              <p className="text-enerpy-gray text-sm mt-1">{processSteps[activeStep].description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Espacio reservado para video */}
      <div className="video-container w-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-[480px] object-cover"
        >
          <source src="/images/nowaves.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
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

const processSteps = [
  {
    icon: Recycle,
    title: "Recolección de residuos",
    text: "Recolección de residuos",
    description: "Captura y clasificación de diversos materiales de desecho."
  },
  {
    icon: Factory,
    title: "Clasificación y preparación",
    text: "Clasificación y preparación",
    description: "Procesamiento inicial de los materiales para optimizar su transformación."
  },
  {
    icon: FlaskConical,
    title: "Procesamiento RMO®",
    text: "Procesamiento RMO®",
    description: "Aplicación de nuestra tecnología patentada de radiólisis fotónica focalizada."
  },
  {
    icon: Bolt,
    title: "Productos sostenibles",
    text: "Productos sostenibles",
    description: "Obtención de aceites ecológicos, carbón y gas con múltiples aplicaciones."
  }
];

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
