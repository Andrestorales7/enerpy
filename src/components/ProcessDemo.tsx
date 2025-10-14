import React from 'react';
import { ProcessNavigation } from '@/components/ui/process-navigation';
import { ArrowRight, Recycle, Zap } from 'lucide-react';

const ProcessDemo = () => {
  const steps = [
    {
      id: 'in',
      title: 'IN',
      content: (
        <div className="text-center text-white">
          <div className="mb-6">
            <ArrowRight className="w-16 h-16 mx-auto text-emerald-400 mb-4" />
            <h3 className="text-3xl font-bold mb-4">Entrada de Residuos</h3>
            <p className="text-lg text-white/80 max-w-md">
              Los residuos se introducen en el sistema para su procesamiento
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'rmo',
      title: 'RMO',
      content: (
        <div className="text-center text-white">
          <div className="mb-6">
            <Recycle className="w-16 h-16 mx-auto text-emerald-400 mb-4" />
            <h3 className="text-3xl font-bold mb-4">Proceso RMO</h3>
            <div className="text-left max-w-lg">
              <p className="text-lg text-white/80 mb-4">
                El Reactor de Materia Orgánica transforma los residuos mediante:
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Radiolisis fotónica focalizada</li>
                <li>• Descomposición molecular sin oxígeno</li>
                <li>• Síntesis de nuevas sustancias</li>
                <li>• Proceso completamente limpio</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'out',
      title: 'OUT',
      content: (
        <div className="text-center text-white">
          <div className="mb-6">
            <Zap className="w-16 h-16 mx-auto text-emerald-400 mb-4" />
            <h3 className="text-3xl font-bold mb-4">Productos Obtenidos</h3>
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-300 mb-2">Petróleo Sintético</h4>
                <p className="text-sm text-white/70">Ecológico y de alta calidad</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-300 mb-2">Gas Ecológico</h4>
                <p className="text-sm text-white/70">Combustible limpio</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-300 mb-2">Carbón</h4>
                <p className="text-sm text-white/70">Materia prima valiosa</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-300 mb-2">Energía</h4>
                <p className="text-sm text-white/70">Eléctrica sostenible</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Proceso de Transformación
        </h2>
        <ProcessNavigation steps={steps} />
      </div>
    </div>
  );
};

export default ProcessDemo;
