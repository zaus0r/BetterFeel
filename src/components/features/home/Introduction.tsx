import React from 'react';
import { Heart, Sparkles, Leaf } from 'lucide-react';

const Introduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Vår Filosofi
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-purple-900 mb-6">
            En Holistisk Approach till Hälsa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vi kombinerar traditionell visdom med modern teknologi för att skapa 
            skräddarsydda behandlingar som tar hänsyn till hela dig.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-serif text-purple-900 mb-4">Helhetssyn</h3>
            <p className="text-gray-600">
              Vi ser varje person som unik och anpassar behandlingarna efter dina 
              individuella behov och mål.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 mb-6">
              <Sparkles className="h-8 w-8 text-sage-600" />
            </div>
            <h3 className="text-xl font-serif text-purple-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              Våra behandlingsmetoder bygger på den senaste teknologin inom 
              frekvensmedicin och biofeedback.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 mb-6">
              <Leaf className="h-8 w-8 text-rose-400" />
            </div>
            <h3 className="text-xl font-serif text-purple-900 mb-4">Naturlig Läkning</h3>
            <p className="text-gray-600">
              Vi stödjer kroppens naturliga läkningsprocesser för hållbara och 
              långsiktiga resultat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
