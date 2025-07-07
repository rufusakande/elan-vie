
import React from 'react';
import { Check, Calendar, Users, BookOpen, MessageCircle, Gift } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/OfferSection.css';

const OfferSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: <Calendar className="feature-icon" />,
      title: "Programme structuré 28 jours",
      description: "Un parcours progressif et bienveillant pour te reconnecter à ton essence"
    },
    {
      icon: <BookOpen className="feature-icon" />,
      title: "Plateforme Notion complète",
      description: "Tous tes outils, ressources et suivis dans un espace organisé et inspirant"
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Visioconférences hebdomadaires",
      description: "Rencontres en direct pour partager, apprendre et grandir ensemble"
    },
    {
      icon: <Gift className="feature-icon" />,
      title: "Recettes & guides pratiques",
      description: "Des outils concrets pour nourrir ton corps avec conscience et plaisir"
    },
    {
      icon: <BookOpen className="feature-icon" />,
      title: "E-book exclusif",
      description: "Ton guide personnel pour maintenir ta transformation au quotidien"
    },
    {
      icon: <MessageCircle className="feature-icon" />,
      title: "Groupe WhatsApp privé",
      description: "Support quotidien et communauté bienveillante 24h/24"
    }
  ];

  return (
    <section id="OfferSection" ref={ref} className={`offer-section ${isVisible ? 'animate-fade-in' : ''}`}>
      <div className="container">
        <div className="offer-header">
          <h2 className="offer-title">
            Le programme complet <span className="highlight">en 28 jours</span>
          </h2>
          <p className="offer-subtitle">
            Tout ce dont tu as besoin pour transformer ta relation à ton corps et ta vie
          </p>
        </div>
        
        <div className="offer-content">
          <div className="offer-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="offer-cta-section">
            <div className="offer-price">
              <span className="price-label">Investissement :</span>
              <span className="price-value">197€</span>
              <span className="price-note">Paiement en 3x possible</span>
            </div>
            <button className="offer-cta-primary">
              Je réserve ma place
            </button>
            <p className="offer-guarantee">
              Satisfait(e) ou remboursé(e) - Garantie 14 jours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
