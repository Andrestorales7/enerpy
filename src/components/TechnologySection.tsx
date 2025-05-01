
import { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animated-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Tecnología RMO®</h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-enerpy-gray max-w-3xl mx-auto">
            PROCESO DE RADIÓLISIS FOTÓNICA FOCALIZADA DE MATERIALES DE DESECHO
          </p>
        </div>

        <div className="animated-section">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-16">
            <h3 className="text-2xl font-bold mb-3 text-center">Nuestro Reactor Revolucionario</h3>
            <p className="text-lg text-enerpy-gray mb-8 text-center max-w-3xl mx-auto">
              La tecnología RMO® ha sido desarrollada y patentada por Enerpy S.A.C.I., permitiendo realizar 
              el más avanzado método de tratamiento térmico para gestión final de residuos.
            </p>
            
            <div className="mb-10">
              <Carousel 
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent>
                  {technologySteps.map((step, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                      <div className="p-1">
                        <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                          <CardContent className="flex flex-col items-center p-6">
                            <div className="w-16 h-16 rounded-full bg-enerpy-primary/10 flex items-center justify-center mb-4">
                              {/* Fix: Use the Icon component directly instead of calling it as a function */}
                              <step.icon className="text-enerpy-primary" size={26} />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-center">{step.title}</h4>
                            <p className="text-enerpy-gray/80 text-center">{step.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                  
                  <CarouselItem className="md:basis-1/2 lg:basis-2/3 pl-4">
                    <div className="p-1">
                      <Card className="border-0 shadow-md overflow-hidden h-full">
                        <CardContent className="p-0">
                          <div className="relative h-full min-h-[300px] bg-reactor-pattern bg-cover bg-center">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                              <div className="text-white">
                                <h4 className="text-xl font-bold mb-2">Reactor de Materia Orgánica RMO</h4>
                                <p className="text-sm opacity-90">
                                  Evaluado y certificado por TÜV Rheinland de Alemania y TNO de Los Países Bajos
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                
                <div className="flex items-center justify-center gap-2 mt-8">
                  <CarouselPrevious className="relative left-0 right-auto bg-white hover:bg-gray-100 text-enerpy-gray border border-gray-200" />
                  <CarouselNext className="relative right-0 left-auto bg-white hover:bg-gray-100 text-enerpy-gray border border-gray-200" />
                </div>
              </Carousel>
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

const technologySteps = [
  {
    title: "Radiólisis Fotónica Focalizada",
    description: "Proceso patentado que utiliza energía fotónica para descomponer materiales de desecho a nivel molecular.",
    icon: Recycle
  },
  {
    title: "Tratamiento Térmico Avanzado",
    description: "Sistema de control térmico preciso que optimiza la recuperación de sustancias básicas de los residuos.",
    icon: Globe
  },
  {
    title: "Conversión Catalítica",
    description: "Transformación controlada de los componentes moleculares en productos de alto valor energético.",
    icon: Leaf
  },
  {
    title: "Separación y Purificación",
    description: "Procesos avanzados que separan y purifican los diferentes productos resultantes para maximizar su calidad.",
    icon: ArrowRight
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
