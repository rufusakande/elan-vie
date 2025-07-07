
import React from 'react';
import { Heart, Zap, Brain, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/PainSection.css';

const PainSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const pains = [
    {
      icon: <Zap className="pain-icon" />,
      title: "Fatigue chronique",
      description: "Tu te sens épuisé(e) dès le réveil, comme si ton énergie était constamment drainée."
    },
    {
      icon: <Brain className="pain-icon" />,
      title: "Perte de sens",
      description: "Tu as l'impression de passer à côté de ta vie, de ne plus savoir qui tu es vraiment."
    },
    {
      icon: <Heart className="pain-icon" />,
      title: "Tensions corporelles",
      description: "Ton corps te fait mal, tes muscles sont tendus, tu ne te sens plus chez toi."
    },
    {
      icon: <Users className="pain-icon" />,
      title: "Déconnexion relationnelle",
      description: "Tu as du mal à créer des liens authentiques, tu te sens isolé(e) malgré les autres."
    }
  ];

  return (
    <section id="PainSection" ref={ref} className={`pain-section ${isVisible ? 'animate-fade-in' : ''}`}>
      <div className="container">
        <div className="pain-header">
          <h2 className="pain-title">
            Et si le vrai problème c'était la <span className="highlight">déconnexion</span> ?
          </h2>
          <p className="pain-subtitle">
            Tu n'es pas cassé(e), tu es juste déconnecté(e) de ton essence. 
            Reconnais-tu ces signes ?
          </p>
        </div>
        
        <div className="pain-grid">
          {pains.map((pain, index) => (
            <div key={index} className="pain-card">
              <div className="pain-card-icon">
                {pain.icon}
              </div>
              <h3 className="pain-card-title">{pain.title}</h3>
              <p className="pain-card-description">{pain.description}</p>
            </div>
          ))}
        </div>
        
        <div className="pain-conclusion">
          <p className="pain-conclusion-text">
            Ces symptômes ne sont pas une fatalité. Ils sont le signal que ton corps 
            et ton âme t'envoient pour te rappeler vers <em>toi</em>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
