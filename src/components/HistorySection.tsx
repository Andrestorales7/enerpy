
import { useEffect } from 'react';

const HistorySection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.animated-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="historia" className="py-24 bg-gradient-to-b from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-enerpy-accent rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-enerpy-primary rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Founder Section */}
        <div className="max-w-6xl mx-auto mb-20 animated-section">
          <div className="bg-gradient-to-br from-slate-800/90 to-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50 relative group">
            {/* Tech overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-enerpy-primary via-blue-400 to-enerpy-accent"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
              <div className="relative h-96 lg:h-auto overflow-hidden group">
                <img 
                  src="/images/founder.png" 
                  alt="Fundador de Enerpy" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                {/* Cinematic overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
                
                {/* Scanning line effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-enerpy-accent to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-enerpy-primary via-blue-400 to-enerpy-primary opacity-60"></div>
                
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-enerpy-accent opacity-70"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-enerpy-accent opacity-70"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-enerpy-primary opacity-70"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-enerpy-primary opacity-70"></div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                {/* Holographic effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
                
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-enerpy-primary/20 to-enerpy-accent/20 backdrop-blur border border-enerpy-primary/30 rounded-full text-sm font-medium mb-6 w-fit">
                  <div className="w-2 h-2 bg-enerpy-accent rounded-full mr-2 animate-pulse"></div>
                  <span className="text-enerpy-accent">Fundador & CEO</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Una Visión que Transforma el{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-enerpy-accent via-blue-400 to-enerpy-primary animate-pulse">
                    Futuro
                  </span>
                </h2>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Desde 2008, nuestro fundador ha liderado la revolución en tecnología sostenible, 
                  desarrollando soluciones innovadoras que transforman residuos en recursos valiosos 
                  a través de la ciencia más avanzada.
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-enerpy-primary via-blue-400 to-enerpy-accent rounded-full"></div>
                  <span className="text-sm text-gray-400 font-medium tracking-wider">15+ AÑOS DE INNOVACIÓN</span>
                </div>
                
                {/* Tech details */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4 border border-slate-600/30">
                    <div className="text-2xl font-bold text-enerpy-accent">20+</div>
                    <div className="text-sm text-gray-400">Patentes</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4 border border-slate-600/30">
                    <div className="text-2xl font-bold text-enerpy-primary">100%</div>
                    <div className="text-sm text-gray-400">Sostenible</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-5xl mx-auto animated-section relative">
          {/* Background tech elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-40 h-40 border border-blue-400 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border border-purple-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-enerpy-accent rounded-full"></div>
          </div>
          
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center px-6 py-3 bg-slate-800/80 backdrop-blur border border-slate-600/50 rounded-full mb-8">
              <div className="w-2 h-2 bg-enerpy-accent rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium tracking-wider">CRONOLOGÍA TEMPORAL</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Nuestro Camino hacia la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-enerpy-primary via-blue-400 to-enerpy-accent">
                Innovación
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada hito marca un avance revolucionario hacia un futuro tecnológicamente sostenible
            </p>
            
            {/* Tech decoration */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-enerpy-primary to-transparent"></div>
              <div className="w-3 h-3 border-2 border-enerpy-accent rounded-full animate-spin"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-enerpy-primary via-blue-400 to-enerpy-accent"></div>
              <div className="w-3 h-3 border-2 border-enerpy-primary rounded-full animate-spin"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-enerpy-accent to-transparent"></div>
            </div>
          </div>
          
          <div className="relative">
            {/* Enhanced Timeline line with tech effects */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-enerpy-primary via-enerpy-accent to-purple-500 shadow-lg shadow-blue-400/50"></div>
            
            {/* Animated pulse along timeline */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-20 bg-gradient-to-b from-white via-enerpy-accent to-transparent animate-pulse"></div>
            
            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <TimelineEvent 
                key={index}
                year={event.year}
                title={event.title}
                description={event.description}
                isLeft={index % 2 === 0}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-32 animated-section">
          <div className="bg-gradient-to-br from-slate-800/90 via-gray-900/95 to-black/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-16 max-w-7xl mx-auto border border-slate-700/50 relative overflow-hidden">
            {/* Tech background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.3) 25%, rgba(59, 130, 246, 0.3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.3) 75%, rgba(59, 130, 246, 0.3) 76%, transparent 77%, transparent), linear-gradient(transparent 24%, rgba(59, 130, 246, 0.3) 25%, rgba(59, 130, 246, 0.3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.3) 75%, rgba(59, 130, 246, 0.3) 76%, transparent 77%, transparent)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="text-center mb-16 relative z-10">
              <div className="inline-flex items-center px-6 py-3 bg-slate-700/50 backdrop-blur border border-slate-600/50 rounded-full mb-8">
                <div className="w-2 h-2 bg-enerpy-primary rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium tracking-wider">DIRECTRICES CORPORATIVAS</span>
              </div>
              
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-enerpy-primary to-enerpy-accent">Propósito</span>
              </h3>
              
              <div className="w-32 h-1 bg-gradient-to-r from-enerpy-primary via-blue-400 to-enerpy-accent rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              <div className="group">
                <div className="bg-gradient-to-br from-slate-700/80 to-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-10 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3 border border-slate-600/50 relative overflow-hidden">
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-enerpy-primary/5 to-blue-500/5 group-hover:from-enerpy-primary/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
                  
                  {/* Corner tech accents */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-enerpy-primary opacity-50"></div>
                  <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-enerpy-primary opacity-50"></div>
                  
                  <div className="flex items-center mb-8 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-enerpy-primary to-enerpy-accent rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-enerpy-primary/30 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-white mb-2">Misión</h4>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-enerpy-primary to-enerpy-accent"></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                    Revolucionar la gestión de residuos y la producción de energía mediante tecnología innovadora, 
                    contribuyendo a la economía circular y a la reducción de la huella ambiental global a través 
                    de soluciones científicas de vanguardia.
                  </p>
                  
                  {/* Tech indicators */}
                  <div className="mt-8 flex items-center space-x-3 relative z-10">
                    <div className="w-2 h-2 bg-enerpy-primary rounded-full animate-pulse"></div>
                    <div className="w-8 h-0.5 bg-enerpy-primary/50"></div>
                    <span className="text-xs text-gray-400 font-mono">ACTIVE</span>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-gradient-to-br from-slate-700/80 to-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-10 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3 border border-slate-600/50 relative overflow-hidden">
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-enerpy-accent/5 to-purple-500/5 group-hover:from-enerpy-accent/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                  
                  {/* Corner tech accents */}
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-enerpy-accent opacity-50"></div>
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-enerpy-accent opacity-50"></div>
                  
                  <div className="flex items-center mb-8 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-enerpy-accent to-purple-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-enerpy-accent/30 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-white mb-2">Visión</h4>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-enerpy-accent to-purple-500"></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                    Ser líderes globales en soluciones tecnológicas sostenibles, transformando radicalmente 
                    la forma en que el mundo maneja los residuos y genera energía, para un futuro 
                    tecnológicamente avanzado, limpio y próspero.
                  </p>
                  
                  {/* Tech indicators */}
                  <div className="mt-8 flex items-center space-x-3 relative z-10">
                    <div className="w-2 h-2 bg-enerpy-accent rounded-full animate-pulse"></div>
                    <div className="w-8 h-0.5 bg-enerpy-accent/50"></div>
                    <span className="text-xs text-gray-400 font-mono">FUTURE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineEvent = ({ 
  year, 
  title, 
  description, 
  isLeft, 
  isLast 
}: { 
  year: string; 
  title: string; 
  description: string;
  isLeft: boolean;
  isLast: boolean;
}) => (
  <div className={`flex flex-col md:flex-row items-center relative mb-20 ${!isLast ? 'pb-12' : ''} group`}>
    {/* Content */}
    <div className={`md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last'}`}>
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-slate-700/50 hover:border-enerpy-primary/30 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 group-hover:scale-105 relative overflow-hidden">
        
        {/* Holographic background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-enerpy-primary/5 via-transparent to-enerpy-accent/5 group-hover:from-enerpy-primary/10 group-hover:to-enerpy-accent/10 transition-all duration-700"></div>
        
        {/* Tech grid overlay */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{
          backgroundImage: `linear-gradient(90deg, transparent 98%, rgba(59, 130, 246, 0.5) 100%), linear-gradient(transparent 98%, rgba(59, 130, 246, 0.5) 100%)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Corner tech elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-enerpy-primary opacity-60 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-enerpy-accent opacity-60 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-enerpy-accent opacity-60 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-enerpy-primary opacity-60 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-enerpy-accent to-transparent group-hover:animate-pulse"></div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-enerpy-primary to-enerpy-accent text-white rounded-2xl text-lg font-bold shadow-2xl shadow-enerpy-primary/30 ${isLeft ? 'md:ml-auto' : ''} group-hover:scale-110 transition-transform`}>
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
              {year}
            </div>
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-enerpy-primary group-hover:to-enerpy-accent transition-all duration-500">
            {title}
          </h3>
          
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            {description}
          </p>
          
          {/* Tech status indicator */}
          <div className={`flex items-center space-x-4 ${isLeft ? 'md:justify-end' : ''}`}>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-enerpy-accent rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-enerpy-primary to-enerpy-accent"></div>
              <div className="w-2 h-2 bg-enerpy-primary rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400 font-mono tracking-wider">MILESTONE</span>
          </div>
          
          {/* Progress indicator */}
          <div className={`mt-6 flex items-center ${isLeft ? 'md:justify-end' : ''}`}>
            <div className="bg-slate-700/50 backdrop-blur rounded-full px-4 py-2 border border-slate-600/50">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400 font-mono">COMPLETED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Empty space for the other side */}
    <div className={`md:w-1/2 ${!isLeft ? 'md:pr-16' : 'md:pl-16 md:order-last'}`}></div>
    
    {/* Enhanced tech timeline node */}
    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-enerpy-primary to-enerpy-accent border-4 border-slate-900 shadow-2xl shadow-enerpy-primary/50 group-hover:scale-150 transition-all duration-500 z-20 flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-white animate-pulse group-hover:bg-enerpy-accent"></div>
      
      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full border-2 border-enerpy-accent animate-ping opacity-20"></div>
      <div className="absolute inset-0 rounded-full border border-enerpy-primary animate-pulse opacity-30"></div>
    </div>
    
    {/* Connection line to content (visible on hover) */}
    <div className={`absolute top-1/2 ${isLeft ? 'right-1/2 md:right-auto md:left-1/2' : 'left-1/2'} w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-enerpy-primary to-enerpy-accent transition-all duration-500 opacity-0 group-hover:opacity-100 ${isLeft ? 'md:translate-x-4' : 'md:-translate-x-4'}`}></div>
  </div>
);

const timelineEvents = [
  {
    year: "2008",
    title: "Fundación de Enerpy",
    description: "La empresa fue fundada por un equipo de científicos e ingenieros comprometidos con la innovación sostenible."
  },
  {
    year: "2013",
    title: "Desarrollo de la Tecnología RMO®",
    description: "Después de años de investigación, se patentó la tecnología de Radiólisis Fotónica Focalizada."
  },
  {
    year: "2017",
    title: "Primera Planta Piloto",
    description: "Implementación de la primera planta piloto para probar la tecnología a escala industrial."
  },
  {
    year: "2019",
    title: "Certificación Internacional",
    description: "Evaluación y certificación por TÜV Rheinland de Alemania bajo la supervisión del Prof. Hermann J. Thomann."
  },
  {
    year: "2020",
    title: "Validación en Europa",
    description: "Evaluación realizada por TNO de Los Países Bajos en la Planta de Groningen Seaports."
  },
  {
    year: "2023",
    title: "Expansión Global",
    description: "Inicio de operaciones y licenciamiento de la tecnología en múltiples países."
  }
];

export default HistorySection;
