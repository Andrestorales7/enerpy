import { useEffect, useState } from 'react';
import { Recycle, FlaskConical, Bolt, Factory, ArrowRight, CheckCircle, Leaf } from 'lucide-react';

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
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <section id="que-hacemos" className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="w-full px-6">
        {/* Header Section */}
        <div className="text-center mb-20 animated-section">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Tecnología Innovadora
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-800 via-emerald-800 to-green-800 bg-clip-text text-transparent">
            ¿Qué Hacemos?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transformamos residuos en soluciones energéticas sostenibles mediante nuestra tecnología patentada RMO®, 
            creando un futuro más limpio y eficiente.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <ModernFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Ecological Footprint Section - Two Columns */}
        <section className="w-full flex flex-col lg:flex-row items-stretch mb-20 min-h-[420px] lg:min-h-[480px]">
          {/* Left: Text */}
          <div className="flex-1 flex items-center justify-center bg-green-800/90 p-10 lg:p-16 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">HUELLA ECOLÓGICA</h2>
              <p className="text-lg text-green-100 mb-4">
                La huella ecológica mide cuánto capital natural necesita el ser humano para sostener su estilo de vida o economía. Este cálculo se hace mediante una contabilidad ecológica que revela la presión que ejercemos sobre los recursos del planeta.
              </p>
              <p className="text-lg text-green-100 mb-4">
                El <span className="font-bold text-emerald-200">RMO (Recuperación de Materia Orgánica)</span> surge como una solución concreta para reducir esa presión. Permite eliminar residuos transformándolos en materia prima reutilizable, cumpliendo con el principio de <span className="italic text-emerald-100">"de la cuna a la cuna"</span>.
              </p>
              <p className="text-lg text-green-100 mb-4">
                Esto significa que, en lugar de desechar un producto al final de su vida útil, se lo convierte nuevamente en recurso útil, sin necesidad de extraer nuevos materiales de la naturaleza.
              </p>
              <p className="text-lg text-green-100">
                Este proceso es altamente eficiente, autosuficiente en energía, no contamina el ambiente y ofrece productos de calidad. Así, el RMO se presenta como un modelo de negocio innovador que responde directamente a las necesidades de una economía sostenible.
              </p>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 min-h-[320px] lg:min-h-[480px] relative rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none overflow-hidden">
            <img 
              src="/images/recycle.jpg" 
              alt="Naturaleza" 
              className="w-full h-full object-cover object-center" 
              style={{ minHeight: 240 }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent"></div>
          </div>
        </section>

        {/* Process Visualization */}
        <div className="mt-16 max-w-4xl mx-auto animated-section">
          <h3 className="text-2xl font-bold mb-4 text-center">Ciclo de Transformación</h3>
          <p className="text-lg text-enerpy-gray mb-6 text-center">
            Nuestro innovador proceso convierte diferentes tipos de residuos en productos útiles y sostenibles, cerrando el ciclo de vida de los materiales.
          </p>
          {/* Circular Process Visualization - Original */}
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

      {/* Video Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/videobackground.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Tecnología en Acción</h3>
            <p className="text-xl opacity-90">Descubre cómo transformamos el futuro</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ModernFeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
}) => (
  <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Content */}
    <div className="relative z-10">
      {/* Icon Container */}
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <Icon size={28} className="text-white" />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
      
      {/* Hover Effect Line */}
      <div className="w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
    </div>
  </div>
);

const features = [
  {
    icon: Recycle,
    title: "Reciclaje Avanzado",
    description: "Procesamos residuos orgánicos e inorgánicos mediante tecnología de vanguardia para maximizar su valor."
  },
  {
    icon: FlaskConical,
    title: "Investigación Científica",
    description: "Desarrollamos soluciones innovadoras basadas en investigación científica y desarrollo tecnológico continuo."
  },
  {
    icon: Bolt,
    title: "Energía Sostenible",
    description: "Generamos energía limpia y renovable a partir de residuos, reduciendo la dependencia de combustibles fósiles."
  },
  {
    icon: Factory,
    title: "Producción Industrial",
    description: "Implementamos procesos industriales eficientes que transforman residuos en productos de alto valor comercial."
  }
];

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

export default WhatWeDoSection;
