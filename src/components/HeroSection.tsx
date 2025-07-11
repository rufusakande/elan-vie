
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/HeroSection.css';
import elanVieImg from '../assets/images/elan_vie.webp'

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="HeroSection" ref={ref} className={`hero-section ${isVisible ? 'animate-fade-in' : ''}`}>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Remets du vivant dans ton corps... 
            <span className="highlight"> et dans ta vie.</span>
          </h1>
          <p className="hero-subtitle">
            28 jours pour te reconnecter à toi, en douceur.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">
              Je découvre le programme
            </button>
            <button className="btn-secondary">
              Je réserve ma place
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <img 
              src={elanVieImg} 
              alt="Lumière naturelle filtrant à travers les arbres, symbolisant le renouveau et la connexion à la nature"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
