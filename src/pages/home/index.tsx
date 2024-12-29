import React from 'react';
import Hero from '../../components/features/home/Hero';
import TreatmentOverview from '../../components/features/home/TreatmentOverview';
import Testimonials from '../../components/features/home/Testimonials';
import Pricing from '../../components/features/home/Pricing';
import Certifications from '../../components/features/home/Certifications';
import CallToAction from '../../components/features/home/CallToAction';
import SEO from '../../components/common/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="BetterFeel - Holistisk hälsa och välbefinnande i Stockholm"
        description="Upptäck holistisk hälsa och välbefinnande hos BetterFeel i Stockholm. Vi erbjuder HIFU, Plaxpot, frekvensterapi och coaching för optimal hälsa och balans."
        keywords="holistisk hälsa, HIFU behandling, Plaxpot, frekvensterapi, coaching, välbefinnande, Stockholm"
        url="https://betterfeel.se"
        preloadImages={['/assets/images/hero/home_hero.webp']}
      />
      <main className="min-h-screen">
        <Hero />
        <TreatmentOverview />
        <Testimonials />
        <Pricing />
        <Certifications />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
