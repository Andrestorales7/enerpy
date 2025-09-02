import React from 'react';
import { Recycle, Factory, Zap, Wind, ArrowRight, Leaf, Flame, Droplets } from 'lucide-react';

const TransformationCycle = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
            La Fábrica Verde
          </h1>
          <p className="text-xl md:text-2xl text-green-300 max-w-3xl mx-auto">
            Ciclo circular de economía verde - Transformando residuos en energía sostenible
          </p>
        </div>

        {/* Main infographic */}
        <div className="relative">
          {/* Central factory icon */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/30">
              <Factory size={64} className="text-white" />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                CERO EMISIÓN
              </div>
            </div>
          </div>

          {/* Circular flow arrows */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg width="600" height="600" viewBox="0 0 600 600" className="animate-spin-slow">
              <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
              <path
                d="M 300 50 A 250 250 0 1 1 299 50"
                fill="none"
                stroke="url(#arrowGradient)"
                strokeWidth="8"
                strokeDasharray="20,10"
                className="animate-dash"
              />
            </svg>
          </div>

          {/* Process steps positioned around the circle */}
          
          {/* Step 1: Waste Collection */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-28 h-28 bg-gradient-to-br from-green-600 to-emerald-800 rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-green-500/20">
              <Recycle size={40} className="text-green-200 mb-2" />
              <span className="text-xs text-green-200 font-semibold text-center">Residuos</span>
            </div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-700 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                Entrada
              </div>
            </div>
          </div>

          {/* Step 2: Material Processing */}
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
            <div className="w-28 h-28 bg-gradient-to-br from-emerald-600 to-green-800 rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-emerald-500/20">
              <Leaf size={40} className="text-emerald-200 mb-2" />
              <span className="text-xs text-emerald-200 font-semibold text-center">Materia Prima</span>
            </div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-emerald-700 text-emerald-100 px-3 py-1 rounded-full text-xs font-medium">
                Transformación
              </div>
            </div>
          </div>

          {/* Step 3: Clean Furnace */}
          <div className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2">
            <div className="w-28 h-28 bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-green-500/20">
              <Flame size={40} className="text-green-200 mb-2" />
              <span className="text-xs text-green-200 font-semibold text-center">Horno Limpio</span>
            </div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-700 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                Procesamiento
              </div>
            </div>
          </div>

          {/* Step 4: Condenser */}
          <div className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-28 h-28 bg-gradient-to-br from-emerald-500 to-green-700 rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-emerald-500/20">
              <Droplets size={40} className="text-emerald-200 mb-2" />
              <span className="text-xs text-emerald-200 font-semibold text-center">Condensador</span>
            </div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-emerald-700 text-emerald-100 px-3 py-1 rounded-full text-xs font-medium">
                Refinamiento
              </div>
            </div>
          </div>

          {/* Step 5: Energy Output */}
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-28 h-28 bg-gradient-to-br from-green-600 to-emerald-800 rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-green-500/20">
              <Zap size={40} className="text-green-200 mb-2" />
              <span className="text-xs text-green-200 font-semibold text-center">Energía</span>
            </div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-700 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                Salida
              </div>
            </div>
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            {/* Add curved connection lines between steps */}
            <path
              d="M 300 50 Q 400 100 500 300"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              opacity="0.6"
            />
            <path
              d="M 500 300 Q 400 500 300 550"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              opacity="0.6"
            />
            <path
              d="M 300 550 Q 200 500 100 300"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              opacity="0.6"
            />
            <path
              d="M 100 300 Q 200 100 300 50"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Key messages and stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-800/20 rounded-2xl p-8 border border-green-500/30">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">50%</span>
              </div>
              <h3 className="text-xl font-bold text-green-300 mb-2">Sin Residuos</h3>
              <p className="text-green-200 text-sm">
                Reducción significativa en la generación de desechos mediante nuestro proceso circular
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-green-800/20 rounded-2xl p-8 border border-emerald-500/30">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">0</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-300 mb-2">Cero Emisión</h3>
              <p className="text-emerald-200 text-sm">
                Proceso completamente limpio sin liberación de gases contaminantes al medio ambiente
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-emerald-800/20 rounded-2xl p-8 border border-green-500/30">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-300 mb-2">Sólo Energía</h3>
              <p className="text-green-200 text-sm">
                Transición energética hacia fuentes renovables y sostenibles para el futuro
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section with additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/20">
            <h2 className="text-3xl font-bold text-green-300 mb-4">
              Economía Circular Verde
            </h2>
            <p className="text-lg text-green-200 max-w-4xl mx-auto leading-relaxed">
              Nuestro sistema transforma residuos en recursos valiosos, creando un ciclo infinito de 
              sostenibilidad. El gas y aceite producidos alimentan la transición hacia una economía 
              verde, mientras que los subproductos se reciclan para mantener el ciclo cerrado.
            </p>
          </div>
        </div>
      </div>

             {/* Custom CSS for animations */}
       <style>{`
         @keyframes spin-slow {
           from { transform: rotate(0deg); }
           to { transform: rotate(360deg); }
         }
         
         @keyframes dash {
           to { stroke-dashoffset: -30; }
         }
         
         .animate-spin-slow {
           animation: spin-slow 30s linear infinite;
         }
         
         .animate-dash {
           animation: dash 2s linear infinite;
         }
       `}</style>
    </div>
  );
};

export default TransformationCycle;
