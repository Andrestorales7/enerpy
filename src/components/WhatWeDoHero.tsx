const WhatWeDoHero = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/conversion-catalica.jpg')`,
          filter: 'brightness(0.8) contrast(1.1)',
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            ¿Qué <span className="text-enerpy-accent">Hacemos</span>?
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Transformamos residuos en recursos valiosos a través de tecnología RMO® innovadora
          </p>
          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="w-2 h-2 bg-enerpy-accent rounded-full animate-pulse" />
            <div className="w-4 h-1 bg-enerpy-accent rounded-full" />
            <div className="w-2 h-2 bg-enerpy-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoHero;

