import { Leaf, Recycle, Factory, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const WhatWeDoNarrative = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const impactCards = [
    {
      id: 'valorization',
      image: '/images/recycle.jpg',
      icon: Recycle,
      category: 'Economía Circular',
      title: 'Valorización de residuos',
      subtitle: 'Convertimos desechos en materias primas valiosas',
      details: {
        description: 'Nuestro proceso RMO transforma completamente la gestión de residuos, convirtiendo lo que antes era basura en recursos valiosos para la industria.',
        benefits: [
          'Reducción del 95% de volumen de residuos',
          'Generación de materias primas de alta calidad',
          'Eliminación de la necesidad de vertederos',
          'Creación de nuevas fuentes de ingresos'
        ],
        process: 'El RMO descompone los residuos a nivel molecular mediante radiólisis fotónica, separando los elementos constituyentes para su reutilización.'
      }
    },
    {
      id: 'emissions',
      image: '/images/produccion.jpg',
      icon: Factory,
      category: 'Cero Emisiones',
      title: 'Proceso sin humo ni oxígeno',
      subtitle: 'Tecnología limpia sin contaminación',
      details: {
        description: 'Un proceso revolucionario que opera sin combustión, eliminando completamente las emisiones tóxicas y contribuyendo a un aire más limpio.',
        benefits: [
          'Cero emisiones de CO2 durante el proceso',
          'No genera humos ni gases tóxicos',
          'Proceso cerrado sin liberación al ambiente',
          'Cumple con las normativas ambientales más estrictas'
        ],
        process: 'La tecnología RMO utiliza radiación fotónica controlada que no requiere oxígeno ni genera subproductos contaminantes.'
      }
    },
    {
      id: 'sustainability',
      image: '/images/arbol.jpg',
      icon: Leaf,
      category: 'Sostenibilidad',
      title: 'Materias primas para una nueva economía',
      subtitle: 'Recursos sostenibles para el futuro',
      details: {
        description: 'Creamos un ciclo económico completamente sostenible donde los residuos se convierten en la base de una nueva economía circular.',
        benefits: [
          'Independencia de recursos naturales vírgenes',
          'Reducción de la huella de carbono industrial',
          'Creación de empleos verdes',
          'Fomento de la economía circular local'
        ],
        process: 'Establecemos cadenas de suministro circulares donde los productos al final de su vida útil se convierten en materias primas para nuevos productos.'
      }
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gray-50/30">
      {/* Background visual: soft green smoke layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Existing soft blobs */}
        <div className="absolute -top-20 -right-32 w-[520px] h-[520px] rounded-full bg-emerald-300/8 blur-3xl" />
        <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-green-400/8 blur-3xl" />

        {/* Green smoke wisps */}
        <div
          className="smoke absolute -top-10 left-10 w-[320px] h-[320px] opacity-20"
          style={{
            background:
              'radial-gradient(40% 60% at 50% 50%, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.08) 45%, rgba(16,185,129,0.0) 70%)',
            filter: 'blur(24px)'
          }}
        />
        <div
          className="smoke absolute top-24 right-24 w-[420px] h-[420px] opacity-18"
          style={{
            background:
              'radial-gradient(45% 65% at 50% 50%, rgba(5,150,105,0.12) 0%, rgba(5,150,105,0.06) 48%, rgba(5,150,105,0.0) 72%)',
            filter: 'blur(28px)'
          }}
        />
        <div
          className="smoke slow absolute bottom-[-60px] left-1/3 w-[500px] h-[500px] opacity-15"
          style={{
            background:
              'radial-gradient(50% 70% at 50% 50%, rgba(22,163,74,0.10) 0%, rgba(22,163,74,0.05) 46%, rgba(22,163,74,0.0) 75%)',
            filter: 'blur(30px)'
          }}
        />
      </div>

      {/* Header hero con imagen de fondo que cubre toda la pantalla */}
      <div className="relative min-h-[70vh] flex items-center justify-center">
        {/* Imagen de fondo que cubre toda la pantalla */}
        <div className="absolute inset-0">
          <img 
            src="/images/31051.jpg" 
            alt="Fondo tecnología limpia" 
            className="w-full h-full object-cover"
          />
          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50" />
          <div className="absolute inset-0 bg-enerpy-primary/20" />
        </div>
        
        {/* Contenido del header */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto px-6">
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Transformamos residuos en{' '}
              <span className="text-enerpy-primary bg-white/10 px-2 py-1 rounded-lg backdrop-blur-sm">recursos valiosos</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Devolvemos el equilibrio natural mediante tecnología disruptiva que acelera los procesos de degradación de la naturaleza
            </p>
            
            {/* Indicador de scroll */}
            <div className="pt-8">
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center mx-auto">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20 space-y-16 relative -mt-32 z-10">

        {/* 1. Quote / Premise - rediseñado con superposición */}
        <div className="bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
              <div className="w-16 h-1 bg-enerpy-primary rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-enerpy-dark leading-tight">
                "La naturaleza no conoce la basura. Nosotros la inventamos."
              </h2>
              <p className="text-lg text-enerpy-gray leading-relaxed">
                La naturaleza siempre funcionó en círculos: ciclos de la biodegradación, la meteorización y el ciclo de las estaciones. 
                Nada se pierde: todo se degrada y regenera en nuevos vegetales y animales o se fosiliza y, con el tiempo, se convierte en petróleo, carbón y gas. 
                <span className="font-semibold text-enerpy-dark"> Así, la naturaleza recicla todo de manera infinita.</span>
              </p>
            </div>
            <div className="relative h-[400px] lg:h-auto">
              <img 
                src="/images/view-green-forest-trees-with-co2.jpg" 
                alt="Ciclos naturales" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-enerpy-primary/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* 2. Problem - rediseñado con mejor jerarquía visual */}
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-enerpy-dark">El desequilibrio que creamos</h3>
            <p className="text-base text-enerpy-gray max-w-2xl mx-auto">
              La humanidad rompió ese equilibrio natural creando desafíos que requieren soluciones innovadoras
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Factory className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-4">El problema</h4>
              <p className="text-red-700 leading-relaxed">
                Creamos plásticos que tardan siglos en degradarse, acumulamos montañas de desechos y contaminamos la tierra, el aire y el agua.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-lg p-8 border border-amber-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="text-xl font-bold text-amber-800 mb-4">Desafío 1</h4>
              <p className="text-amber-700 leading-relaxed">
                Cómo eliminar los residuos sin contaminar más el medio ambiente.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-blue-800 mb-4">Desafío 2</h4>
              <p className="text-blue-700 leading-relaxed">
                Cómo obtener materias primas sin seguir destruyendo la naturaleza (calentamiento global, deforestación, contaminación).
              </p>
            </div>
          </div>
        </div>

        {/* 3. Solution Intro - rediseñado con mejor impacto visual */}
        <div className="bg-gradient-to-br from-enerpy-primary/5 via-emerald-50 to-green-50 rounded-3xl shadow-xl border border-enerpy-primary/20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-enerpy-primary/10 text-enerpy-primary px-4 py-2 rounded-full text-sm font-medium w-fit">
                <Factory className="w-4 h-4" />
                Nuestra Solución
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-enerpy-dark">
                El RMO: Tecnología Disruptiva
              </h3>
              <p className="text-lg text-enerpy-gray leading-relaxed">
                Un invento y desarrollo tecnológico disruptivo que <span className="font-semibold text-enerpy-primary">colabora con la naturaleza</span> 
                acelerando el proceso de degradación natural, pero <span className="font-semibold text-enerpy-primary">millones de veces más rápido</span>.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                  <div className="w-10 h-10 bg-enerpy-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Factory className="w-5 h-5 text-enerpy-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-enerpy-dark mb-1">Reactor de Materia Orgánica (RMO)</h4>
                    <p className="text-sm text-enerpy-gray">Tecnología patentada con proceso único de radiólisis fotónica focalizada</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-enerpy-dark mb-1">Transforma todo tipo de desechos</h4>
                    <p className="text-sm text-enerpy-gray">Excepto radioactivos y explosivos, en recursos valiosos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-auto">
              <img src="/images/reactor2.jpg" alt="Reactor RMO" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-enerpy-primary/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm font-medium text-enerpy-dark">Reactor RMO en operación</p>
                  <p className="text-xs text-enerpy-gray">Proceso sin humo ni emisiones tóxicas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Visual cards - rediseñado con mejor presentación */}
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-enerpy-dark">Impacto transformador</h3>
            <p className="text-base text-enerpy-gray max-w-2xl mx-auto">
              Nuestra tecnología genera múltiples beneficios para el medio ambiente y la economía
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactCards.map((card) => {
              const IconComponent = card.icon;
              const isExpanded = expandedCard === card.id;
              
              return (
                <div key={card.id} className="relative">
                  {/* Carta base */}
                  <div 
                    className="group relative rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                    onClick={() => toggleCard(card.id)}
                  >
                    <div className="relative h-[280px] overflow-hidden">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Contenido básico */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center justify-between mb-3">
                          <div className="inline-flex items-center gap-2 bg-enerpy-primary/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                            <IconComponent className="w-4 h-4" /> 
                            {card.category}
                          </div>
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                        <h5 className="text-xl font-bold mb-2">{card.title}</h5>
                        <p className="text-sm text-white/90">{card.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay expandido */}
                  {isExpanded && (
                    <>
                      {/* Backdrop */}
                      <div 
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        onClick={() => toggleCard(card.id)}
                      />
                      
                      {/* Modal expandido */}
                      <div className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center">
                        <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
                          {/* Header del modal */}
                          <div className="relative h-[200px] overflow-hidden">
                            <img 
                              src={card.image} 
                              alt={card.title} 
                              className="w-full h-full object-cover" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            
                            {/* Botón cerrar */}
                            <button 
                              onClick={() => toggleCard(card.id)}
                              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            >
                              <ChevronUp className="w-5 h-5" />
                            </button>
                            
                            {/* Contenido del header */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <div className="inline-flex items-center gap-2 bg-enerpy-primary/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-3">
                                <IconComponent className="w-4 h-4" /> 
                                {card.category}
                              </div>
                              <h5 className="text-2xl font-bold mb-2">{card.title}</h5>
                              <p className="text-white/90">{card.subtitle}</p>
                            </div>
                          </div>
                          
                          {/* Contenido expandido */}
                          <div className="p-8 max-h-[60vh] overflow-y-auto space-y-6">
                            <p className="text-enerpy-gray leading-relaxed text-lg">
                              {card.details.description}
                            </p>
                            
                            <div className="space-y-4">
                              <h6 className="text-xl font-bold text-enerpy-dark">Beneficios clave:</h6>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {card.details.benefits.map((benefit, index) => (
                                  <div key={index} className="flex items-start gap-3 p-3 bg-enerpy-primary/5 rounded-xl">
                                    <div className="w-2 h-2 bg-enerpy-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-enerpy-gray">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="space-y-3 p-4 bg-gray-50 rounded-xl">
                              <h6 className="text-lg font-bold text-enerpy-dark">Proceso técnico:</h6>
                              <p className="text-enerpy-gray leading-relaxed">
                                {card.details.process}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Local animations for smoke wisps */}
      <style>{`
        .smoke { 
          animation: floatSlow 18s ease-in-out infinite;
        }
        .smoke.slow {
          animation-duration: 26s;
          animation-delay: 2s;
        }
        @keyframes floatSlow {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          25% { transform: translate3d(12px, -10px, 0) scale(1.03); }
          50% { transform: translate3d(-8px, 6px, 0) scale(0.98); }
          75% { transform: translate3d(10px, 12px, 0) scale(1.02); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDoNarrative;


