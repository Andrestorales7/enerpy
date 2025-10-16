"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Recycle, Droplets, Zap, CheckCircle } from "lucide-react";

const content = [
  {
    title: "ETAPA 1 - Alimentación",
    description:
      "El residuo que recibirá TRATAMIENTO RMO se introduce en los cartuchos o cápsulas de proceso que se tapan herméticamente. Esto permite aislar totalmente el residuo del ambiente.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-600 to-emerald-700 flex flex-col items-center justify-center text-white p-6">
        <div className="bg-white/20 rounded-full p-4 mb-4">
          <Recycle className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">1. Alimentación</h3>
        <p className="text-base text-center text-white opacity-95">
          Residuos introducidos en cartuchos herméticos para aislamiento total del ambiente
        </p>
      </div>
    ),
  },
  {
    title: "ETAPA 1 - Proceso",
    description:
      "Se aplica energía radiante al interior de la molécula del material sometido a proceso. Este concentrado flujo de fotones produce la descomposición química del residuo, es decir la radiolisis fotónica.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-600 to-cyan-600 flex flex-col items-center justify-center text-white p-6">
        <div className="bg-white/20 rounded-full p-4 mb-4">
          <Zap className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">1A. Proceso</h3>
        <p className="text-base text-center text-white opacity-95">
          Aplicación de energía radiante para radiolisis fotónica y descomposición química
        </p>
      </div>
    ),
  },
  {
    title: "ETAPA 2 - Precipitadores",
    description:
      "Los precipitadores separan selectivamente los aceites de diferentes densidades y el gas combustible remanente a presión normal y a temperatura ambiente.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col items-center justify-center text-white p-6">
        <div className="bg-white/20 rounded-full p-4 mb-4">
          <Droplets className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">2. Precipitadores</h3>
        <p className="text-base text-center text-white opacity-95">
          Separación selectiva de aceites por densidad y gas combustible a presión normal
        </p>
      </div>
    ),
  },
  {
    title: "ETAPA 2 - Colecta",
    description:
      "Todos los productos son colectados en tanques especiales y nada es arrojado al ambiente. Aceites pesados y asfalto, aceites medios, aceites livianos o ácidos orgánicos y gas.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex flex-col items-center justify-center text-white p-6">
        <div className="bg-white/20 rounded-full p-4 mb-4">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">3. Colecta</h3>
        <p className="text-base text-center text-white opacity-95">
          Colecta completa de productos en tanques especiales sin emisiones al ambiente
        </p>
      </div>
    ),
  },
];

const ProcessStickyScrollDemo = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-enerpy-dark mb-4">
            Proceso Detallado del <span className="text-enerpy-primary">RMO</span>
          </h2>
          <div className="w-24 h-1 bg-enerpy-primary mx-auto mb-6"></div>
          <p className="text-lg text-enerpy-gray max-w-3xl mx-auto">
            Descubre cómo funciona cada etapa del Reactor de Materia Orgánica paso a paso
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <StickyScroll content={content} contentClassName="h-80 w-96" />
        </div>
      </div>
    </div>
  );
};

export default ProcessStickyScrollDemo;
