
import React from 'react';
import HeroSection from '../components/HeroSection';
import PainSection from '../components/PainSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import '../styles/theme.css';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <BenefitsSection />
      <TestimonialsSection />
    </main>
  );
};

export default Index;
