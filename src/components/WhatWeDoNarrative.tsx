import React from 'react';
import { Leaf, Recycle, Flame, Zap, Droplets, ArrowRight, Factory, ShieldCheck } from 'lucide-react';

const WhatWeDoNarrative = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Top background visual */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-32 w-[520px] h-[520px] rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-green-400/10 blur-3xl" />
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

        {/* 4. How it works - IN → RMO → OUT */}
        <div className="bg-white rounded-3xl border border-green-100 shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* IN */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">IN</div>
              <h4 className="text-xl font-bold text-enerpy-dark">Residuos</h4>
              <p className="text-enerpy-gray">RSU, Biomasa, Plásticos, RAEE, Pallets, etc. se introducen dentro del reactor.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-900">RSU</span>
                <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-900">Biomasa</span>
                <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-900">Plásticos</span>
                <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-900">RAEE</span>
                <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-900">Pallets</span>
              </div>
            </div>

            {/* Arrow / Core */}
            <div className="flex flex-col items-center text-center">
              <ArrowRight className="w-7 h-7 text-emerald-600 mb-3" />
              <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 text-white px-6 py-6 shadow-lg w-full">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Factory className="w-5 h-5" /> <span className="font-bold">RMO</span>
                </div>
                <p className="text-sm text-emerald-50">Descompone moléculas sin oxígeno, sin humo, sin contaminación.</p>
              </div>
              <ArrowRight className="w-7 h-7 text-emerald-600 mt-3" />
            </div>

            {/* OUT */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">OUT</div>
              <h4 className="text-xl font-bold text-enerpy-dark">Resultados</h4>
              <p className="text-enerpy-gray">Nuevos productos y materia prima que vuelven a la economía.</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-green-100 p-4 text-center">
                  <Droplets className="w-6 h-6 mx-auto text-emerald-600" />
                  <div className="text-sm font-semibold mt-2">Petróleo Sintético</div>
                </div>
                <div className="rounded-xl border border-green-100 p-4 text-center">
                  <Zap className="w-6 h-6 mx-auto text-emerald-600" />
                  <div className="text-sm font-semibold mt-2">Gas Ecológico</div>
                </div>
                <div className="rounded-xl border border-green-100 p-4 text-center">
                  <Flame className="w-6 h-6 mx-auto text-emerald-600" />
                  <div className="text-sm font-semibold mt-2">Carbón</div>
                </div>
              </div>
            </div>
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
    </section>
  );
};

export default WhatWeDoNarrative;


