import { useState } from 'react';
import { Recycle, Zap, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide, IntroSlide } from '@/components/ui/slide';

const ProcessDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <IntroSlide
      key="intro"
      backgroundImage="/images/reactor2.jpg"
      title="Tecnología RMO"
      subtitle="Un invento y desarrollo tecnológico disruptivo que colabora con la naturaleza acelerando el proceso de degradación natural, pero millones de veces más rápido."
      description="El Reactor de Materia Orgánica (RMO) es una tecnología patentada que transforma todo tipo de desechos (excepto radioactivos y explosivos) en recursos valiosos mediante un proceso único: radiólisis fotónica focalizada."
    />,
    <Slide
      key="in"
      backgroundImage="/images/produccion.jpg"
      gradient="from-gray-600/80 to-slate-700/80"
      icon={<Recycle className="w-8 h-8 text-white" />}
      title="IN"
      subtitle="Entrada de Residuos"
      description="Los residuos (RSU, Biomasa, Plásticos, RAEE, Pallets, etc) se introducen dentro del reactor."
      imagePosition="right"
    />,
    <Slide
      key="rmo"
      backgroundImage="/images/separacion-purificacion.jpg"
      gradient="from-slate-500/70 to-gray-600/70"
      icon={<Zap className="w-8 h-8 text-white" />}
      title="RMO"
      subtitle="Proceso de Transformación"
      description="El RMO descompone las moléculas sin oxígeno, sin humo, sin contaminación."
      imagePosition="left"
    />,
    <Slide
      key="out"
      backgroundImage="/images/proceso-out.jpg"
      gradient="from-gray-700/80 to-green-800/80"
      icon={<CheckCircle className="w-8 h-8 text-white" />}
      title="OUT"
      subtitle="Productos Resultantes"
      description="El resultado: nuevos productos y materia prima que vuelven a la economía. (Petróleo Sintético Ecológico, Gas Ecológico y Carbón)"
      imagePosition="right"
    />
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-black">
      {/* Current Slide */}
      {slides[currentSlide]}

      {/* Simple Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
          <div className="flex items-center space-x-3">
            <button
              onClick={prevSlide}
              className="p-2 text-white/70 hover:text-white transition-colors"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex space-x-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 text-white/70 hover:text-white transition-colors"
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessDemo;
