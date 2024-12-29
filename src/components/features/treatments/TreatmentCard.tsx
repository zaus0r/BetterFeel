import React from 'react';
import { Clock } from 'lucide-react';

interface TreatmentCardProps {
  title: string;
  duration: string;
  description: string;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ title, duration, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="flex items-center text-[#0047AB] mb-4">
        <Clock className="w-4 h-4 mr-2" />
        <span className="text-sm">{duration}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TreatmentCard;
