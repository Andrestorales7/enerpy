
import React from 'react';

interface StatCardProps {
  icon: React.ElementType;
  value: number | string;
  label: string;
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon size={32} className="text-white" />
    </div>
    <div className="text-4xl font-bold mb-2">
      {typeof value === 'number' ? value.toLocaleString() : value}
    </div>
    <div className="text-white/90">{label}</div>
  </div>
);

export default StatCard;
