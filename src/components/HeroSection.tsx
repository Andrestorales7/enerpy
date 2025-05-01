
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10');
        }
      },
      {
        threshold: 0.1
      }
    );

    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 opacity-0 translate-y-10 transition-all duration-1000 delay-300 hero-animate">
            Transformando Residuos en <span className="text-gradient">Energía Sostenible</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 opacity-0 translate-y-10 transition-all duration-1000 delay-500 hero-animate">
            Revolucionamos la gestión de residuos con tecnología patentada para un futuro más limpio y sostenible
          </p>
          <a 
            href="#que-hacemos"
            className="inline-block px-8 py-4 bg-enerpy-primary hover:bg-enerpy-dark text-white rounded-md transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl opacity-0 translate-y-10 transition-all duration-1000 delay-700 hero-animate"
          >
            Descubre cómo revolucionamos la energía
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={handleScroll} aria-label="Scroll down" className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
          <ChevronDown size={24} className="text-white" />
        </button>
      </div>
      
      <div ref={scrollRef}></div>
    </section>
  );
};

export default HeroSection;
