
import React from 'react';
import HeroSection from '../components/HeroSection';
import PainSection from '../components/PainSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import OfferSection from '../components/OfferSection';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import CallToActionSection from '../components/CallToActionSection';
import FooterSection from '../components/FooterSection';
import '../styles/theme.css';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <BenefitsSection />
      <TestimonialsSection />
      <OfferSection />
      <AboutSection />
      <FaqSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};

export default Index;
