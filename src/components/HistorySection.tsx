
import { useEffect } from 'react';

const HistorySection = () => {
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
    <section id="historia" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Historia de Enerpy</h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-enerpy-gray max-w-3xl mx-auto">
            Nuestra trayectoria de innovación y compromiso con la sostenibilidad
          </p>
        </div>

        <div className="max-w-4xl mx-auto animated-section">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-enerpy-primary"></div>
            
            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <TimelineEvent 
                key={index}
                year={event.year}
                title={event.title}
                description={event.description}
                isLeft={index % 2 === 0}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-20 animated-section">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                <p className="text-enerpy-gray">
                  Revolucionar la gestión de residuos y la producción de energía mediante tecnología innovadora, contribuyendo a la economía circular y a la reducción de la huella ambiental global.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                <p className="text-enerpy-gray">
                  Ser líderes globales en soluciones tecnológicas sostenibles, transformando la forma en que el mundo maneja los residuos y genera energía, para un futuro más limpio y próspero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineEvent = ({ 
  year, 
  title, 
  description, 
  isLeft, 
  isLast 
}: { 
  year: string; 
  title: string; 
  description: string;
  isLeft: boolean;
  isLast: boolean;
}) => (
  <div className={`flex flex-col md:flex-row items-center relative mb-12 ${!isLast ? 'pb-8' : ''}`}>
    {/* Content */}
    <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'}`}>
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:border-enerpy-primary transition-all duration-300 hover:shadow-lg">
        <div className="inline-block px-3 py-1 bg-enerpy-primary/10 text-enerpy-primary rounded mb-3 text-sm font-medium">
          {year}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-enerpy-gray">{description}</p>
      </div>
    </div>
    
    {/* Empty space for the other side */}
    <div className={`md:w-1/2 ${!isLeft ? 'md:pr-12' : 'md:pl-12 md:order-last'}`}></div>
    
    {/* Dot on timeline */}
    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-enerpy-primary border-4 border-white"></div>
  </div>
);

const timelineEvents = [
  {
    year: "2008",
    title: "Fundación de Enerpy",
    description: "La empresa fue fundada por un equipo de científicos e ingenieros comprometidos con la innovación sostenible."
  },
  {
    year: "2013",
    title: "Desarrollo de la Tecnología RMO®",
    description: "Después de años de investigación, se patentó la tecnología de Radiólisis Fotónica Focalizada."
  },
  {
    year: "2017",
    title: "Primera Planta Piloto",
    description: "Implementación de la primera planta piloto para probar la tecnología a escala industrial."
  },
  {
    year: "2019",
    title: "Certificación Internacional",
    description: "Evaluación y certificación por TÜV Rheinland de Alemania bajo la supervisión del Prof. Hermann J. Thomann."
  },
  {
    year: "2020",
    title: "Validación en Europa",
    description: "Evaluación realizada por TNO de Los Países Bajos en la Planta de Groningen Seaports."
  },
  {
    year: "2023",
    title: "Expansión Global",
    description: "Inicio de operaciones y licenciamiento de la tecnología en múltiples países."
  }
];

export default HistorySection;
