
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/CallToActionSection.css';

const CallToActionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="CallToActionSection" ref={ref} className={`cta-section ${isVisible ? 'animate-fade-in' : ''}`}>
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Prêt(e) à remettre du <span className="highlight">vivant</span> dans ta vie ?
            </h2>
            <p className="cta-subtitle">
              Ton corps t'attend. Ta vraie vie t'attend. 
              Il suffit d'un pas pour tout changer.
            </p>
            <p className="cta-urgency">
              <strong>Places limitées</strong> - La prochaine session démarre bientôt
            </p>
          </div>
          
          <div className="cta-actions">
            <button className="cta-primary">
              <span>Je réserve ma place</span>
              <ArrowRight className="cta-icon" />
            </button>
            <button className="cta-secondary">
              <MessageCircle className="cta-icon" />
              <span>J'ai une question</span>
            </button>
          </div>
          
          <div className="cta-testimonial">
            <blockquote className="cta-quote">
              "Ce programme a littéralement changé ma vie. 
              Je me sens enfin chez moi dans mon corps."
            </blockquote>
            <cite className="cta-cite">- Marie, 34 ans</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
