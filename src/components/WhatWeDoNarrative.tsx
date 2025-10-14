import { Leaf, Recycle, Flame, Zap, Droplets, ArrowRight, Factory, ShieldCheck } from 'lucide-react';

const WhatWeDoNarrative = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background visual: soft green smoke layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Existing soft blobs */}
        <div className="absolute -top-20 -right-32 w-[520px] h-[520px] rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-green-400/10 blur-3xl" />

        {/* Green smoke wisps */}
        <div
          className="smoke absolute -top-10 left-10 w-[320px] h-[320px] opacity-35"
          style={{
            background:
              'radial-gradient(40% 60% at 50% 50%, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.12) 45%, rgba(16,185,129,0.0) 70%)',
            filter: 'blur(24px)'
          }}
        />
        <div
          className="smoke absolute top-24 right-24 w-[420px] h-[420px] opacity-30"
          style={{
            background:
              'radial-gradient(45% 65% at 50% 50%, rgba(5,150,105,0.22) 0%, rgba(5,150,105,0.10) 48%, rgba(5,150,105,0.0) 72%)',
            filter: 'blur(28px)'
          }}
        />
        <div
          className="smoke slow absolute bottom-[-60px] left-1/3 w-[500px] h-[500px] opacity-25"
          style={{
            background:
              'radial-gradient(50% 70% at 50% 50%, rgba(22,163,74,0.20) 0%, rgba(22,163,74,0.10) 46%, rgba(22,163,74,0.0) 75%)',
            filter: 'blur(30px)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 space-y-20 relative">
        {/* 1. Quote / Premise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-enerpy-dark leading-tight">
              La naturaleza no conoce la basura. Nosotros la inventamos.
            </h2>
            <p className="text-lg md:text-xl text-enerpy-gray leading-relaxed">
              La naturaleza siempre funcionó en círculos: ciclos de la biodegradación, la meteorización y el ciclo de las estaciones. 
              Nada se pierde: todo se degrada y regenera en nuevos vegetales y animales o se fosiliza y, con el tiempo, se convierte en petróleo, carbón y gas. 
              Así, la naturaleza recicla todo de manera infinita.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <img 
              src="/images/view-green-forest-trees-with-co2.jpg" 
              alt="Ciclos naturales" 
              className="w-full h-[320px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* 2. Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-enerpy-dark mb-4">El desequilibrio humano</h3>
            <p className="text-enerpy-gray leading-relaxed">
              La humanidad rompió ese equilibrio: creamos plásticos que tardan siglos en degradarse, 
              acumulamos montañas de desechos y contaminamos la tierra, el aire y el agua.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
            <h4 className="text-xl font-bold text-enerpy-dark mb-3 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-enerpy-primary" /> Desafío 1
            </h4>
            <p className="text-enerpy-gray">Cómo eliminar los residuos sin contaminar más.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
            <h4 className="text-xl font-bold text-enerpy-dark mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-enerpy-primary" /> Desafío 2
            </h4>
            <p className="text-enerpy-gray">Cómo obtener materias primas sin seguir destruyendo la naturaleza (calentamiento global, deforestación, contaminación).</p>
          </div>
        </div>

        {/* 3. Solution Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h3 className="text-3xl md:text-4xl font-extrabold text-enerpy-dark">La solución: El RMO</h3>
            <p className="text-lg text-enerpy-gray leading-relaxed">
              Un invento y desarrollo tecnológico disruptivo que <span className="font-semibold">colabora con la naturaleza</span> 
              acelerando el proceso de degradación natural, pero <span className="font-semibold">millones de veces más rápido</span>.
            </p>
            <div className="flex items-center gap-3 text-enerpy-dark/80">
              <Factory className="w-6 h-6 text-enerpy-primary" />
              <span className="font-semibold">Reactor de Materia Orgánica (RMO)</span>
            </div>
            <p className="text-enerpy-gray">
              Tecnología patentada que transforma todo tipo de desechos (excepto radioactivos y explosivos) en recursos valiosos 
              mediante un proceso único: <span className="font-semibold">radiólisis fotónica focalizada</span>.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src="/images/reactor2.jpg" alt="Reactor RMO" className="w-full h-[360px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        
        {/* 5. Visual cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <img src="/images/recycle.jpg" alt="Reciclaje avanzado" className="w-full h-[260px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm mb-2"><Recycle className="w-4 h-4" /> Economía Circular</div>
              <h5 className="text-lg font-semibold">Valorización de residuos</h5>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <img src="/images/produccion.jpg" alt="Producción limpia" className="w-full h-[260px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm mb-2"><Factory className="w-4 h-4" /> Cero Emisiones</div>
              <h5 className="text-lg font-semibold">Proceso sin humo ni oxígeno</h5>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <img src="/images/mountains.jpg" alt="Impacto positivo" className="w-full h-[260px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm mb-2"><Leaf className="w-4 h-4" /> Sostenibilidad</div>
              <h5 className="text-lg font-semibold">Materias primas para una nueva economía</h5>
            </div>
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


