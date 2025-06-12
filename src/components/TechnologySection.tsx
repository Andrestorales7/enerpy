import { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ArrowRight, Recycle, Leaf, Globe } from "lucide-react";

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

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="tecnologia" className="py-24 bg-gray-50">
      <div className="text-center mb-16 animated-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Tecnología RMO®</h2>
        <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-enerpy-gray max-w-3xl mx-auto">
          PROCESO DE RADIÓLISIS FOTÓNICA FOCALIZADA DE MATERIALES DE DESECHO
        </p>
      </div>

      <div className="animated-section">
        <h3 className="text-2xl font-bold mb-3 text-center">Nuestro Reactor Revolucionario</h3>
        <p className="text-lg text-enerpy-gray mb-8 text-center max-w-3xl mx-auto">
          La tecnología RMO® ha sido desarrollada y patentada por Enerpy S.A.C.I., permitiendo realizar 
          el más avanzado método de tratamiento térmico para gestión final de residuos.
        </p>
        
        <div className="w-full">
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {technologySteps.map((step, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-[400px] md:h-[500px] w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="w-16 h-16 rounded-full bg-enerpy-primary/20 flex items-center justify-center mb-4">
                          <step.icon className="text-white" size={26} />
                        </div>
                        <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                        <p className="text-white/90">{step.description}</p>
                      </div>
                    </div>
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
              
              <CarouselItem className="basis-full">
                <div className="relative h-[500px] md:h-[600px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h4 className="text-2xl font-bold mb-2">Reactor de Materia Orgánica RMO</h4>
                      <p className="text-white/90">
                        Evaluado y certificado por TÜV Rheinland de Alemania y TNO de Los Países Bajos
                      </p>
                    </div>
                  </div>
                  <img 
                    src="/images/reactor.jpg"
                    alt="Reactor RMO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="relative left-0 right-auto bg-white/10 hover:bg-white/20 text-white border-0 backdrop-blur-sm" />
              <CarouselNext className="relative right-0 left-auto bg-white/10 hover:bg-white/20 text-white border-0 backdrop-blur-sm" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const technologySteps = [
  {
    title: "Radiólisis Fotónica Focalizada",
    description: "Proceso patentado que utiliza energía fotónica para descomponer materiales de desecho a nivel molecular.",
    icon: Recycle,
    image: "/images/"
  },
  {
    title: "Tratamiento Térmico Avanzado",
    description: "Sistema de control térmico preciso que optimiza la recuperación de sustancias básicas de los residuos.",
    icon: Globe,
    image: "/images/water-treatment.jpg"
  },
  {
    title: "Conversión Catalítica",
    description: "Transformación controlada de los componentes moleculares en productos de alto valor energético.",
    icon: Leaf,
    image: "/images/conversion-catalica.jpg"
  },
  {
    title: "Separación y Purificación",
    description: "Procesos avanzados que separan y purifican los diferentes productos resultantes para maximizar su calidad.",
    icon: ArrowRight,
    image: "/images/separacion-purificacion.jpg"
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
