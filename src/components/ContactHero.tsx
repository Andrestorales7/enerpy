const ContactHero = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/nature.jpg')`,
          filter: 'brightness(0.7) contrast(1.2)',
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            <span className="text-enerpy-accent">Conecta</span> con Nosotros
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Estamos aquí para responder tus preguntas y explorar oportunidades de colaboración
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

export default ContactHero;

