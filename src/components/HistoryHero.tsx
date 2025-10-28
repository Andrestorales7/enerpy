const HistoryHero = () => {
  return (
    <div className="relative w-full h-[700px] lg:h-[800px] overflow-hidden bg-black">
      {/* Complex animated tech background */}
      <div className="absolute inset-0 z-5">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        
        {/* Circuit lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-enerpy-primary to-transparent"></div>
          <div className="absolute top-40 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-enerpy-accent to-transparent"></div>
          <div className="absolute bottom-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
        
        {/* Floating tech particles */}
        <div className="absolute top-20 left-10 w-3 h-3 border-2 border-enerpy-accent rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-4 h-4 border border-enerpy-primary rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 border-2 border-enerpy-accent rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-60 right-1/4 w-3 h-3 border border-green-400 rounded-full animate-pulse opacity-30"></div>
        
        {/* Holographic scanning lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-enerpy-accent to-transparent animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-enerpy-primary via-blue-400 to-enerpy-accent opacity-60"></div>
      </div>

      {/* Multi-layered cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/60 to-black/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-15" />
      <div className="absolute inset-0 bg-gradient-to-r from-enerpy-primary/5 via-transparent to-enerpy-accent/5 z-16" />
      
      {/* Enhanced background image with tech filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-2000 hover:scale-105"
        style={{
          backgroundImage: `url('/images/arbol.jpg')`,
          filter: 'brightness(0.3) contrast(1.5) saturate(0.8) hue-rotate(200deg)',
        }}
      />

      {/* Cinematic content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-6 max-w-6xl mx-auto relative">
          
          {/* Holographic HUD elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-enerpy-accent opacity-30"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-enerpy-primary opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-enerpy-primary opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-enerpy-accent opacity-30"></div>

          {/* Tech status badge */}
          <div className="inline-flex items-center px-8 py-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl mb-10 shadow-2xl">
            <div className="w-3 h-3 bg-enerpy-accent rounded-full mr-3 animate-pulse"></div>
            <span className="text-enerpy-accent font-medium text-sm mr-4 tracking-wider">SISTEMA ACTIVO</span>
            <div className="w-px h-4 bg-slate-600 mr-4"></div>
            <span className="text-white/90 text-sm font-mono">15+ AÑOS OPERANDO</span>
          </div>

          {/* Main title with cinematic effects */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight relative">
            <span className="block mb-4 text-white drop-shadow-2xl">Nuestra</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-enerpy-accent via-blue-400 to-enerpy-primary animate-pulse drop-shadow-2xl">
              Historia
            </span>
            
            {/* Glitch effect overlay */}
            <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300">
              <span className="absolute top-0 left-1 text-enerpy-primary blur-sm">Historia</span>
              <span className="absolute top-1 left-0 text-enerpy-accent blur-sm">Historia</span>
            </div>
          </h1>
          
          {/* Cinematic subtitle */}
          <div className="relative mb-12">
            <p className="text-xl md:text-3xl lg:text-4xl opacity-95 max-w-5xl mx-auto leading-relaxed drop-shadow-2xl font-light">
              Un{" "}
              <span className="font-bold text-enerpy-accent">viaje épico</span>
              {" "}de innovación científica y compromiso inquebrantable con el futuro{" "}
              <span className="font-bold text-enerpy-primary">tecnológicamente sostenible</span>
              {" "}de nuestro planeta
            </p>
            
            {/* Scanning line under text */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-enerpy-primary to-enerpy-accent animate-pulse"></div>
          </div>

          {/* Futuristic CTA section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-enerpy-primary via-blue-500 to-enerpy-accent rounded-2xl text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 overflow-hidden">
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-enerpy-primary to-enerpy-accent opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              
              <span className="relative flex items-center z-10">
                <span className="mr-3">▶</span>
                INICIAR EXPLORACIÓN
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button className="group px-10 py-5 bg-slate-900/60 backdrop-blur-xl border-2 border-slate-700/50 hover:border-enerpy-accent/50 rounded-2xl text-white font-bold text-lg hover:bg-slate-800/70 transition-all duration-500 relative overflow-hidden">
              {/* Scanning effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-enerpy-accent/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <span className="relative flex items-center">
                <span className="mr-3">◉</span>
                ACCEDER TIMELINE
              </span>
            </button>
          </div>

          {/* Advanced tech interface elements */}
          <div className="flex items-center justify-center space-x-8 opacity-80">
            {/* Left tech pattern */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-enerpy-accent rounded-full animate-pulse"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-enerpy-accent to-transparent"></div>
              <div className="w-2 h-2 bg-enerpy-primary rounded-full animate-pulse delay-150"></div>
            </div>
            
            {/* Center matrix */}
            <div className="grid grid-cols-3 gap-1">
              <div className="w-2 h-2 bg-enerpy-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-enerpy-accent rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-enerpy-accent rounded-full animate-pulse delay-225"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-enerpy-primary rounded-full animate-pulse delay-375"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-450"></div>
              <div className="w-2 h-2 bg-enerpy-accent rounded-full animate-pulse delay-525"></div>
              <div className="w-2 h-2 bg-enerpy-primary rounded-full animate-pulse delay-600"></div>
            </div>
            
            {/* Right tech pattern */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-enerpy-accent rounded-full animate-pulse delay-150"></div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-enerpy-primary to-transparent"></div>
              <div className="w-4 h-4 border-2 border-enerpy-primary rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Status indicators */}
          <div className="absolute bottom-8 left-8 flex items-center space-x-4 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-gray-400">ONLINE</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <span className="text-xs font-mono text-gray-400">VERSION 2.0</span>
          </div>
          
          <div className="absolute bottom-8 right-8 flex items-center space-x-2 opacity-60">
            <span className="text-xs font-mono text-gray-400">TIMESTAMP:</span>
            <span className="text-xs font-mono text-enerpy-accent">2008-2025</span>
          </div>
        </div>
      </div>

      {/* Cinematic bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-20"></div>
    </div>
  );
};

export default HistoryHero;

