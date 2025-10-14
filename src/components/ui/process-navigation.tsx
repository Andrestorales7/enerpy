"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProcessStep {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface ProcessNavigationProps {
  steps: ProcessStep[];
  className?: string;
}

export const ProcessNavigation = ({ steps, className = "" }: ProcessNavigationProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      {/* Navbar en el medio */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
          <div className="flex space-x-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg scale-105'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenedor principal con efecto slide */}
      <div className="relative h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-white/10">
        {/* Contenido con efecto de superposición */}
        <div className="relative h-full">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === activeStep
                  ? 'opacity-100 translate-x-0'
                  : index < activeStep
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="h-full flex items-center justify-center p-8">
                {step.content}
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={prevStep}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextStep}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Indicadores de posición */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStep
                  ? 'bg-emerald-400 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
