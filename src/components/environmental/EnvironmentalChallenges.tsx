
import React from 'react';
import { Recycle, Globe, TreeDeciduous } from 'lucide-react';
import ChallengeCard from './ChallengeCard';

const environmentalChallenges = [
  {
    icon: Recycle,
    title: "Gestión de Residuos",
    description: "Miles de toneladas de residuos terminan en vertederos, contaminando suelos y aguas subterráneas."
  },
  {
    icon: Globe,
    title: "Cambio Climático",
    description: "Las emisiones de gases de efecto invernadero continúan acelerando el calentamiento global."
  },
  {
    icon: TreeDeciduous,
    title: "Deforestación",
    description: "La pérdida de bosques amenaza la biodiversidad y reduce la capacidad de absorción de CO2."
  }
];

const EnvironmentalChallenges = () => {
  return (
    <div className="animated-section">
      <div className="space-y-6">
        {environmentalChallenges.map((challenge, index) => (
          <ChallengeCard 
            key={index} 
            icon={challenge.icon} 
            title={challenge.title} 
            description={challenge.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EnvironmentalChallenges;
