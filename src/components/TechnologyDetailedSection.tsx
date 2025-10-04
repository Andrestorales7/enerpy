import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Leaf, Factory, Zap, Recycle, Award, Globe } from 'lucide-react';

const TechnologyDetailedSection = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const processes = [
    { name: 'Pallet', icon: Factory },
    { name: 'RSU', icon: Recycle },
    { name: 'Biomasa', icon: Leaf },
    { name: 'Plásticos', icon: Factory },
    { name: 'RAEE', icon: Zap }
  ];

  const products = [
    { name: 'Carbón', description: 'Combustible ecológico' },
    { name: 'Aceite Ecológico', description: 'Para uso industrial' },
    { name: 'Gas Ecológico', description: 'Combustible limpio' }
  ];

  const stages = [
    {
      title: 'ETAPA 1',
      steps: [
        {
          title: 'Alimentación',
          description: 'El residuo que recibirá TRATAMIENTO RMO se introduce en los cartuchos o cápsulas de proceso que se tapan herméticamente. Esto permite aislar totalmente el residuo del ambiente.',
          icon: '1'
        },
        {
          title: 'Proceso',
          description: 'Se aplica energía radiante al interior de la molécula del material sometido a proceso. Este concentrado flujo de fotones produce la descomposición química del residuo, es decir la radiolisis fotónica.',
          icon: '1A'
        }
      ]
    },
    {
      title: 'ETAPA 2',
      steps: [
        {
          title: 'Precipitadores',
          description: 'Los precipitadores separan selectivamente los aceites de diferentes densidades y el gas combustible remanente a presión normal y a temperatura ambiente.',
          icon: '2'
        },
        {
          title: 'Colecta',
          description: 'Todos los productos son colectados en tanques especiales y nada es arrojado al ambiente. Aceites pesados y asfalto, aceites medios, aceites livianos o ácidos orgánicos y gas.',
          icon: '3'
        }
      ]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Introducción */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-enerpy-dark mb-6">
            La Tecnología <span className="text-enerpy-primary">RMO®</span>
          </h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-8"></div>
        </div>

        {/* Descripción principal */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
            <p className="text-lg text-enerpy-gray leading-relaxed mb-6">
              <strong>Enerpy S.A.C.I.</strong> ha desarrollado y patentado la tecnología RMO® denominada{' '}
              <strong>PROCESO DE RADIÓLISIS FOTÓNICA FOCALIZADA DE MATERIALES DE DESECHO</strong>, que permite 
              la realización del más avanzado método de tratamiento térmico para gestión final de residuos por 
              vía de la valorización, por medio de la recuperación de las sustancias básicas de las que están constituidas.
            </p>
            <p className="text-lg text-enerpy-gray leading-relaxed mb-6">
              La tecnología ha pasado por prototipos laboratoriales y plantas piloto, en experiencias que han 
              permitido sustentar sus patentes y licencias ambientales en <strong>América, Europa y Asia</strong>, 
              y numerosas evaluaciones técnicas entre las cuales merecen especial destaque la realizada en Paraguay 
              por la empresa certificadora <strong>TÜV Rheinland de Alemania</strong>, bajo la supervisión del 
              Prof. Hermann J. Thomann y la realizada en el año 2020 por el <strong>TNO de Los Países Bajos</strong>, 
              Bajo la Supervisión del Msc Prof. Paul de Wild, en la Planta Ubicada en Groningen Seaports, 
              Parque Químico Industrial en el norte de Los Países Bajos.
            </p>
            <p className="text-lg text-enerpy-gray leading-relaxed">
              Dichas pruebas han demostrado la <strong>viabilidad técnica y ambiental</strong> para producir 
              sustancias utilizables a partir de los residuos orgánicos, así como el cumplimiento de las normas europeas.
            </p>
          </div>
        </div>

        {/* Proceso de transformación */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-enerpy-dark mb-12">El Proceso</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Residuos de entrada */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-enerpy-dark mb-6">Residuos</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {processes.map((process, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      activeProcess === index 
                        ? 'border-enerpy-primary bg-enerpy-primary/10' 
                        : 'border-gray-200 hover:border-enerpy-primary/50'
                    }`}
                    onClick={() => setActiveProcess(index)}
                  >
                    <process.icon className="w-8 h-8 mx-auto mb-2 text-enerpy-primary" />
                    <span className="text-sm font-medium">{process.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flecha y RMO */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-enerpy-primary to-green-600 p-8 rounded-full text-white mb-4">
                <Factory className="w-12 h-12 mx-auto mb-2" />
                <h4 className="text-lg font-bold">RMO</h4>
                <p className="text-sm opacity-90">VALORIZA RESIDUOS</p>
                <p className="text-xs opacity-75">Motor de la Economía Circular</p>
              </div>
              <div className="text-center">
                <h5 className="font-bold text-enerpy-dark mb-2">DESMOLECULARIZACIÓN</h5>
                <p className="text-sm text-enerpy-gray mb-4">Descomposición Química por RADIOLISIS FOTÓNICA. SIN EMISIONES</p>
                <h5 className="font-bold text-enerpy-dark mb-2">TRANSMOLECULARIZACIÓN</h5>
                <p className="text-sm text-enerpy-gray">Síntesis de nuevas sustancias Materia prima para la industria y biocombustibles</p>
              </div>
            </div>

            {/* Productos de salida */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-enerpy-dark mb-6">Productos y Materias primas</h4>
              <div className="space-y-3">
                {products.map((product, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-md border border-green-100">
                    <h5 className="font-bold text-enerpy-dark">{product.name}</h5>
                    <p className="text-sm text-enerpy-gray">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cómo funciona - Etapas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-enerpy-dark mb-12">
            Cómo funciona el Reactor de Materia Orgánica – RMO
          </h3>
          
          <div className="space-y-12">
            {stages.map((stage, stageIndex) => (
              <div key={stageIndex} className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
                <h4 className="text-2xl font-bold text-enerpy-primary mb-8 text-center">{stage.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {stage.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-4">
                      <div className="bg-enerpy-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-enerpy-dark mb-3">{step.title}</h5>
                        <p className="text-enerpy-gray leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sostenibilidad económica */}
        <div className="bg-gradient-to-r from-enerpy-primary to-green-600 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center">
            SOSTENIBILIDAD ECONÓMICA DE LOS PROYECTOS
          </h3>
          <h4 className="text-xl font-bold mb-4 text-center">
            ¿POR QUÉ PODRÍA CAMBIAR EL MERCADO DE RESIDUOS Y MEJORAR LAS CONDICIONES AMBIENTALES?
          </h4>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed">
              El RMO hace posible eliminar residuos por reconversión. Es decir, hace realidad el tan anhelado sueño:
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h5 className="text-2xl font-bold mb-2">DE LA CUNA … A LA CUNA</h5>
              <p className="text-lg">
                Que un producto, al término de su vida útil, pueda ser transformado o valorizado en materia prima 
                para volver a fabricar el mismo producto o para otras aplicaciones, evitando recurrir siempre a la 
                naturaleza para extraer materia prima para la industria química orgánica o para producir combustibles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <h6 className="font-bold mb-2">Eficiencia Energética</h6>
                <p className="text-sm">Autosuficiente en la mayoría de los procesos</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <h6 className="font-bold mb-2">Alta Calidad</h6>
                <p className="text-sm">Gran calidad en los productos y sustancias</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <h6 className="font-bold mb-2">Sin Contaminación</h6>
                <p className="text-sm">EL PROCESO NO CONTAMINA EL AMBIENTE</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-8">
              <p className="text-lg font-semibold text-center">
                El RMO constituye el <strong>verdadero motor de la economía circular</strong> y representa un{' '}
                <strong>MODELO DE NEGOCIO INNOVADOR Y DIRECTO</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Compromisos internacionales */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-enerpy-dark mb-6">
            Compromisos Internacionales
          </h3>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 max-w-4xl mx-auto">
            <p className="text-lg text-enerpy-gray leading-relaxed">
              La economía circular y los compromisos asumidos <strong>POR LAS NACIONES Y EMPRESAS</strong> en el 
              <strong> Acuerdo de París de 2015</strong>, requieren el empleo de estas sustancias (carbono superficial) 
              en sustitución del carbono fósil para reducir la huella de carbono y producir el desacoplamiento de la producción industrial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyDetailedSection;
