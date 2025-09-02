import { ChevronDown } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

const HeroSection = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slogans = [
    {
      text: "Transformando residuos en",
      highlight: "Energía sostenible"
    },
    {
      text: "Sin residuos,",
      highlight: "no hay contaminación"
    },
    {
      text: "Enerpy",
      highlight: "tecnología RMO"
    }
  ];

  const handleScroll = () => {
    const nextSection = document.getElementById('que-hacemos');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeSlogan = useCallback((newIndex: number) => {
    if (newIndex !== currentSlogan && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlogan(newIndex);
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentSlogan, isTransitioning]);

  useEffect(() => {
    const sloganInterval = setInterval(() => {
      changeSlogan((currentSlogan + 1) % slogans.length);
    }, 5000);

    return () => clearInterval(sloganInterval);
  }, [currentSlogan, changeSlogan, slogans.length]);

  return (
    <section className="relative min-h-screen flex items-end justify-end overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/co2hero.jpg')`,
          filter: 'brightness(1.0) contrast(0.95)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-end pr-4 md:pr-24 pb-2 md:pb-28">
        <h1
          className={`text-2xl sm:text-3x1 md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 leading-tight transition-all duration-500 ease-in-out max-w-[90vw] md:max-w-2xl text-right whitespace-normal break-words ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <span className="mr-3 text-white/95">
            {slogans[currentSlogan].text}
          </span>
          <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
            {slogans[currentSlogan].highlight}
          </span>
        </h1>
        
      </div>
    </section>
  );
};

export default HeroSection;
