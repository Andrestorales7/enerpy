
import React from 'react';

const SolutionSection = () => {
  return (
    <div className="animated-section">
      <div className="bg-enerpy-primary/10 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-6">Nuestra Solución</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-enerpy-primary flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <h4 className="font-bold text-lg">Economía Circular</h4>
              <p className="text-enerpy-gray">Reintegramos materiales considerados como desecho al ciclo productivo, generando nuevos valores.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-enerpy-primary flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <h4 className="font-bold text-lg">Reducción de Emisiones</h4>
              <p className="text-enerpy-gray">Nuestro proceso reduce significativamente las emisiones de CO2 comparado con métodos tradicionales.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-enerpy-primary flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <h4 className="font-bold text-lg">Energía Renovable</h4>
              <p className="text-enerpy-gray">Creamos fuentes de energía alternativas que reducen la dependencia de combustibles fósiles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
