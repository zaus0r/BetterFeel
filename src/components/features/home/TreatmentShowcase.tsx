import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Waves, Sparkles, ArrowRight } from 'lucide-react';

const treatments = [
  {
    icon: Waves,
    title: "HIFU Behandling",
    description: "Naturlig hudföryngring och åtstramning med högintensivt fokuserat ultraljud.",
    benefits: [
      "Synligt lyft utan kirurgi",
      "Stimulerar kollagenproduktion",
      "Långvariga resultat",
      "Ingen återhämtningstid"
    ],
    link: "/hifu-behandling"
  },
  {
    icon: Zap,
    title: "Frekvensterapi",
    description: "Avancerad biofeedback för optimal balans i kropp och sinne.",
    benefits: [
      "Stressreducering",
      "Ökad energi",
      "Förbättrad sömn",
      "Stärkt immunförsvar"
    ],
    link: "/frekvensterapi"
  },
  {
    icon: Sparkles,
    title: "Plaxpot",
    description: "Innovativ plasmateknik för hudföryngring och behandling av specifika hudtillstånd.",
    benefits: [
      "Effektiv hudåtstramning",
      "Behandling av rynkor",
      "Minimal återhämtning",
      "Naturliga resultat"
    ],
    link: "/plaxpot-behandling"
  }
];

const TreatmentShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Våra Behandlingar
          </span>
          <h2 className="text-4xl font-serif text-purple-900 mb-6 text-center">
            Populära Behandlingar
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Upptäck våra specialiserade behandlingar som kombinerar modern teknologi 
            med naturlig läkning för optimala resultat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-6">
                <treatment.icon className="h-6 w-6 text-purple-600" />
              </div>
              
              <h4 className="text-lg font-medium text-purple-900 mb-2">
                {treatment.title}
              </h4>
              
              <p className="text-gray-600 mb-6">
                {treatment.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {treatment.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <ArrowRight className="w-4 h-4 text-sage-500 mr-2 mt-1 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <Link
                to={treatment.link}
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                Läs mer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentShowcase;
