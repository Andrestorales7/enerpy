import { useEffect, useState, useCallback } from 'react';

const HeroSection = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slogans = [
    {
      text: "Acelerando lo que la naturaleza tarda",
      highlight: "siglos en lograr",
      backgroundImage: "/images/zero-emission.jpg"
    },
    {
      text: "Una tecnología única que convierte la basura en",
      highlight:"materia prima y energía",
      backgroundImage: "/images/separacion-purificacion.jpg"
    },
   
    
  ];


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
      {/* Background Image with transition */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${slogans[currentSlogan].backgroundImage}')`,
          filter: 'brightness(0.8) contrast(1.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-end pr-4 md:pr-24 pb-2 md:pb-28">
        <div className="max-w-5xl text-right">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 transition-all duration-500 ease-in-out ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
            style={{
              lineHeight: '1.3',
              maxHeight: '2.6em',
              overflow: 'visible'
            }}
          >
            <span className="mr-3 text-white/95">
              {slogans[currentSlogan].text}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
              {slogans[currentSlogan].highlight}
            </span>
          </h1>
          
          
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
