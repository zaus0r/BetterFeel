import React from 'react';
import { Clock, Plus, Minus, Sparkles, Flower2 } from 'lucide-react';
import BookingButton from '../../components/common/BookingButton';
import SEO from '../../components/common/SEO';
import BreadcrumbSchema from '../../components/common/BreadcrumbSchema';

const Treatments = () => {
  return (
    <>
      <SEO
        title="Behandlingar | BetterFeel"
        description="Utforska vårt utbud av behandlingar hos BetterFeel. Vi erbjuder HIFU, Plaxpot, frekvensterapi och mer för din hälsa och välbefinnande."
        url="https://betterfeel.se/treatments"
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Behandlingar", item: "/behandlingar" }
        ]}
      />
      <main className="min-h-screen">
        <div className="relative min-h-screen flex items-center">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-sage-800/70"></div>
          </div>

          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
              <div className="inline-flex items-center mb-6">
                <div className="h-px w-8 bg-rose-300 mr-4"></div>
                <span className="text-rose-200 uppercase tracking-wider text-sm">Helande & Harmoni</span>
                <div className="h-px w-8 bg-rose-300 ml-4"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Transformerande Behandlingar
              </h1>
              <p className="text-lg text-purple-50 max-w-2xl mx-auto mb-8">
                Upptäck vägen till inre balans och yttre skönhet genom våra holistiska behandlingar
              </p>
              <BookingButton />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Treatments;
