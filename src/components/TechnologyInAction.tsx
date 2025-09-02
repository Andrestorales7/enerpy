const TechnologyInAction = () => {
  return (
    <div className="relative w-full h-[250px] overflow-hidden">
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      
      {/* Background video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/images/videobackground.webm" type="video/mp4" />
      </video>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Tecnología en RMO</h3>
          <p className="text-xl opacity-90">Descubre cómo transformamos el futuro</p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyInAction;
