import React from 'react';
import TreatmentCard from './TreatmentCard';

interface Treatment {
  title: string;
  duration: string;
  description: string;
}

interface TreatmentSectionProps {
  title: string;
  treatments: Treatment[];
}

const TreatmentSection: React.FC<TreatmentSectionProps> = ({ title, treatments }) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>
    </div>
  );
};

export default TreatmentSection;
