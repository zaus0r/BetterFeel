import React from 'react';
import { Activity, Brain, Heart, Leaf, Shield, Sun, Zap } from 'lucide-react';

const treatments = [
  { icon: Activity, title: 'Mag- & tarmbesvär' },
  { icon: Brain, title: 'Stressrelaterade besvär' },
  { icon: Zap, title: 'Migrän & ångest' },
  { icon: Leaf, title: 'Allergi och matintolerans' },
  { icon: Shield, title: 'Autoimmuna sjukdomar' },
  { icon: Heart, title: 'Hormonella obalanser' },
  { icon: Sun, title: 'Kroniska & temporära inflammationer' },
  { icon: Activity, title: 'Rygg- eller muskelsmärtor' }
];

const TreatmentAreas = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Behandlingsområden
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <treatment.icon className="h-8 w-8 text-[#0047AB] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {treatment.title}
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-[#0047AB] to-[#50C878]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentAreas;
