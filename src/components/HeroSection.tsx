
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroImages = [
  {
    url: '/lovable-uploads/59c09a67-e434-4fb0-bb13-e63dc4449891.png',
    alt: 'Sustainable energy transformation'
  },
  {
    url: '/images/hero-2.jpg',
    alt: 'Industrial recycling process'
  },
  {
    url: '/images/hero-3.jpg',
    alt: 'Green energy innovation'
  }
];

const HeroSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    // Image rotation
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      elements.forEach(el => observer.unobserve(el));
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center">
      {/* Hero Image Carousel */}
      <Carousel className="w-full h-full absolute inset-0">
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${image.url})` 
                }}
              >
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-24 left-0 right-0 z-20 flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/40'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
      
      <div className="container mx-auto px-4 z-10 relative">
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
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button onClick={handleScroll} aria-label="Scroll down" className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
          <ChevronDown size={24} className="text-white" />
        </button>
      </div>
      
      <div ref={scrollRef}></div>
    </section>
  );
};

export default HeroSection;
