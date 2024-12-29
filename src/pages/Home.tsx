import React from 'react';
import Hero from '../components/features/home/Hero';
//import Benefits from '../components/features/home/Benefits';
import TreatmentOverview from '../components/features/home/TreatmentOverview';
import Testimonials from '../components/features/home/Testimonials';
import Pricing from '../components/features/home/Pricing';
import Certifications from '../components/features/home/Certifications';
import CallToAction from '../components/features/home/CallToAction';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <TreatmentOverview />
      <Testimonials />
      <Pricing />
      <Certifications />
      <CallToAction />
    </main>
  );
};

export default Home; 