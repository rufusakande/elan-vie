
import React from 'react';
import { Zap, Heart, Brain, Leaf, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/BenefitsSection.css';

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: <Zap className="benefit-icon" />,
      title: "Énergie retrouvée",
      description: "Réveille-toi avec une énergie naturelle et durable qui te porte toute la journée.",
      color: "var(--color-yellow-solar)"
    },
    {
      icon: <Heart className="benefit-icon" />,
      title: "Digestion apaisée",
      description: "Réconcilie-toi avec ton ventre et ressens le bien-être d'une digestion harmonieuse.",
      color: "var(--color-orange-warm)"
    },
    {
      icon: <Brain className="benefit-icon" />,
      title: "Clarté mentale",
      description: "Retrouve une pensée claire, une concentration naturelle et une paix intérieure.",
      color: "var(--color-blue-calm)"
    },
    {
      icon: <Leaf className="benefit-icon" />,
      title: "Confiance en soi",
      description: "Reconnecte-toi à ta valeur profonde et avance avec assurance vers tes rêves.",
      color: "var(--color-green-nature)"
    },
    {
      icon: <Check className="benefit-icon" />,
      title: "Joie de vivre",
      description: "Redécouvre le plaisir simple d'être vivant(e) et de célébrer chaque moment.",
      color: "var(--color-orange-warm)"
    }
  ];

  return (
    <section id="BenefitsSection" ref={ref} className={`benefits-section ${isVisible ? 'animate-fade-in' : ''}`}>
      <div className="container">
        <div className="benefits-header">
          <h2 className="benefits-title">
            Ce que <span className="highlight">L'Élan VIE</span> peut changer
          </h2>
          <p className="benefits-subtitle">
            Imagine-toi dans 28 jours, vibrant(e) de cette énergie que tu as perdue...
          </p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card"
              style={{
                '--card-color': benefit.color
              } as React.CSSProperties}
            >
              <div className="benefit-card-icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-card-title">{benefit.title}</h3>
              <p className="benefit-card-description">{benefit.description}</p>
              <div className="benefit-card-accent"></div>
            </div>
          ))}
        </div>
        
        <div className="benefits-footer">
          <p className="benefits-promise">
            Ces transformations ne sont pas des promesses en l'air, 
            mais le résultat naturel d'un retour à l'essentiel.
          </p>
          <button className="benefits-cta">
            Je veux vivre cette transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
