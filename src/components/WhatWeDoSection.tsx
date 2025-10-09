import { Recycle, FlaskConical, Bolt, Factory } from 'lucide-react';
import { OptimizedImage } from './ui/optimized-image';

type ColorFeatureSectionProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
};

const imageVariants = [
  {
    bgImage: '/images/recycle.jpg',
    overlay: 'bg-emerald-900/40',
    iconBg: 'bg-emerald-500',
    accent: 'bg-emerald-300'
  },
  {
    bgImage: '/images/water-treatment.jpg', 
    overlay: 'bg-green-900/50',
    iconBg: 'bg-green-500',
    accent: 'bg-green-300'
  },
  {
    bgImage: '/images/reactor.jpg',
    overlay: 'bg-teal-900/50',
    iconBg: 'bg-teal-500',
    accent: 'bg-teal-300'
  },
  {
    bgImage: '/images/carbon.jpg',
    overlay: 'bg-lime-900/50',
    iconBg: 'bg-lime-500',
    accent: 'bg-lime-300'
  }
];

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

const ColorFeatureSection = ({ icon: Icon, title, description, index }: ColorFeatureSectionProps) => {
  const currentVariant = imageVariants[index % imageVariants.length];

  return (
    <div className="h-full relative overflow-hidden group transition-all duration-700 hover:shadow-2xl">
      <OptimizedImage
        src={currentVariant.bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
      />
      
      <div className={`absolute inset-0 ${currentVariant.overlay} group-hover:bg-opacity-60 transition-all duration-700`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 lg:p-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 ${currentVariant.iconBg} backdrop-blur-sm rounded-full mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl border border-white/20`}>
          <Icon size={28} className="text-white lg:w-8 lg:h-8" />
        </div>
        
        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 lg:mb-6 group-hover:text-gray-100 transition-colors duration-300 leading-tight drop-shadow-lg">
          {title}
        </h3>
        
        <p className="text-sm lg:text-base xl:text-lg text-white/95 leading-relaxed mb-6 lg:mb-8 group-hover:text-white transition-colors duration-300 drop-shadow-md max-w-sm">
          {description}
        </p>
        
        <div className="flex items-center justify-center gap-2 lg:gap-3">
          <div className="w-1 h-1 lg:w-2 lg:h-2 bg-white/40 rounded-full group-hover:bg-white/60 transition-colors duration-300 drop-shadow-sm" />
          <div className={`h-0.5 lg:h-1 ${currentVariant.accent} backdrop-blur-sm rounded-full w-8 lg:w-12 group-hover:w-16 lg:group-hover:w-20 transition-all duration-700 ease-out drop-shadow-sm`} />
          <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white/50 rounded-full group-hover:bg-white/70 transition-colors duration-300 drop-shadow-sm" />
          <div className={`h-0.5 lg:h-1 ${currentVariant.accent} backdrop-blur-sm rounded-full w-8 lg:w-12 group-hover:w-16 lg:group-hover:w-20 transition-all duration-700 ease-out drop-shadow-sm`} />
          <div className="w-1 h-1 lg:w-2 lg:h-2 bg-white/40 rounded-full group-hover:bg-white/60 transition-colors duration-300 drop-shadow-sm" />
        </div>
      </div>
    </div>
  );
};

const WhatWeDoSection = () => {
  return (
    <section id="que-hacemos" className="bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <ColorFeatureSection
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>

      <div className="w-full px-6 py-12">
        <section className="w-full flex flex-col lg:flex-row items-stretch mb-8 min-h-[360px] lg:min-h-[420px]">
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
          <div className="flex-1 min-h-[320px] lg:min-h-[480px] relative rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none overflow-hidden">
            <OptimizedImage 
              src="/images/recycle.jpg" 
              alt="Naturaleza" 
              className="w-full h-full object-cover object-center" 
              style={{ minHeight: 240 }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
