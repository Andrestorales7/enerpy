const MainHero = () => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/mountains.jpg')`,
          filter: 'brightness(0.8) contrast(1.1)',
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
            Bienvenido a <span className="text-enerpy-accent">ENERPY</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Descubre cómo estamos transformando el futuro de la energía sostenible
          </p>
          <div className="mt-6 flex items-center justify-center space-x-3">
            <div className="w-2 h-2 bg-enerpy-accent rounded-full animate-pulse" />
            <div className="w-3 h-1 bg-enerpy-accent rounded-full" />
            <div className="w-2 h-2 bg-enerpy-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;

