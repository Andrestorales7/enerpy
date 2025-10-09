import React from 'react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const TechnologyIntroSection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        
        {/* Introducción */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-enerpy-dark mb-6">
            La Tecnología <span className="text-enerpy-primary">RMO®</span>
          </h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
        </div>

        {/* Descripción principal */}
        <div className="max-w-6xl mx-auto mb-16 px-8">
          <div className="text-xl text-enerpy-gray leading-relaxed">
            <TextGenerateEffect 
              words="Enerpy S.A.C.I. ha desarrollado y patentado la tecnología RMO® denominada PROCESO DE RADIÓLISIS FOTÓNICA FOCALIZADA DE MATERIALES DE DESECHO, que permite la realización del más avanzado método de tratamiento térmico para gestión final de residuos por vía de la valorización, por medio de la recuperación de las sustancias básicas de las que están constituidas. La tecnología ha pasado por prototipos laboratoriales y plantas piloto, en experiencias que han permitido sustentar sus patentes y licencias ambientales en América, Europa y Asia, y numerosas evaluaciones técnicas entre las cuales merecen especial destaque la realizada en Paraguay por la empresa certificadora TÜV Rheinland de Alemania, bajo la supervisión del Prof. Hermann J. Thomann y la realizada en el año 2020 por el TNO de Los Países Bajos, Bajo la Supervisión del Msc Prof. Paul de Wild, en la Planta Ubicada en Groningen Seaports, Parque Químico Industrial en el norte de Los Países Bajos. Dichas pruebas han demostrado la viabilidad técnica y ambiental para producir sustancias utilizables a partir de los residuos orgánicos, así como el cumplimiento de las normas europeas."
              duration={0.1}
              filter={true}
              className="text-enerpy-gray"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyIntroSection;


