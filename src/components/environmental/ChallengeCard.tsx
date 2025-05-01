
import React from 'react';

interface ChallengeCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ChallengeCard = ({ icon: Icon, title, description }: ChallengeCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:border-enerpy-primary transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-enerpy-light/20 rounded-full flex items-center justify-center flex-shrink-0 text-enerpy-primary">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-enerpy-gray">{description}</p>
      </div>
    </div>
  </div>
);

export default ChallengeCard;
