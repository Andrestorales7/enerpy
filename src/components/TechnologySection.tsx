
import { useEffect, useState } from 'react';

const TechnologySection = () => {
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

    // Auto rotate through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % technologySteps.length);
    }, 5000);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="tecnologia" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Tecnología RMO®</h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-enerpy-gray max-w-3xl mx-auto">
            PROCESO DE RADIÓLISIS FOTÓNICA FOCALIZADA DE MATERIALES DE DESECHO
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animated-section order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">Nuestro Reactor Revolucionario</h3>
            <p className="text-lg text-enerpy-gray mb-8">
              La tecnología RMO® ha sido desarrollada y patentada por Enerpy S.A.C.I., permitiendo realizar el más avanzado método de tratamiento térmico para gestión final de residuos mediante la valorización y recuperación de sustancias básicas.
            </p>
            
            <div className="space-y-6">
              {technologySteps.map((step, index) => (
                <TechStep 
                  key={index} 
                  number={index + 1} 
                  title={step.title} 
                  description={step.description} 
                  isActive={index === activeStep}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="animated-section order-1 lg:order-2">
            <div className="relative h-[500px] bg-reactor-pattern bg-cover bg-center rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-2">Reactor de Materia Orgánica RMO</h4>
                  <p className="text-sm md:text-base opacity-90">
                    Evaluado y certificado por TÜV Rheinland de Alemania y TNO de Los Países Bajos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 animated-section">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Productos Obtenidos</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-enerpy-light/20 flex items-center justify-center mx-auto mb-4">
                    <div className="w-12 h-12 rounded-full" style={{ backgroundColor: product.color }}></div>
                  </div>
                  <h4 className="font-bold mb-1">{product.name}</h4>
                  <p className="text-sm text-enerpy-gray">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStep = ({ 
  number, 
  title, 
  description, 
  isActive, 
  onClick 
}: { 
  number: number; 
  title: string; 
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <div 
    className={`p-5 rounded-lg cursor-pointer transition-all duration-300 ${
      isActive ? 'bg-enerpy-primary text-white shadow-lg' : 'bg-white border border-gray-200 hover:border-enerpy-primary'
    }`}
    onClick={onClick}
  >
    <div className="flex items-start gap-4">
      <div 
        className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 font-bold ${
          isActive ? 'bg-white text-enerpy-primary' : 'bg-enerpy-light/20 text-enerpy-primary'
        }`}
      >
        {number}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className={isActive ? 'text-white/90' : 'text-enerpy-gray/80'}>{description}</p>
      </div>
    </div>
  </div>
);

const technologySteps = [
  {
    title: "Radiólisis Fotónica Focalizada",
    description: "Proceso patentado que utiliza energía fotónica para descomponer materiales de desecho a nivel molecular."
  },
  {
    title: "Tratamiento Térmico Avanzado",
    description: "Sistema de control térmico preciso que optimiza la recuperación de sustancias básicas de los residuos."
  },
  {
    title: "Conversión Catalítica",
    description: "Transformación controlada de los componentes moleculares en productos de alto valor energético."
  },
  {
    title: "Separación y Purificación",
    description: "Procesos avanzados que separan y purifican los diferentes productos resultantes para maximizar su calidad."
  }
];

const products = [
  {
    name: "Aceites Livianos",
    description: "Combustible ecológico",
    color: "#FFC300"
  },
  {
    name: "Aceites Pesados",
    description: "Para uso industrial",
    color: "#884A39"
  },
  {
    name: "Carbón",
    description: "Alta eficiencia energética",
    color: "#1A1A1A"
  },
  {
    name: "Gas Ecológico",
    description: "Baja huella de carbono",
    color: "#7AC5CD"
  }
];

export default TechnologySection;
