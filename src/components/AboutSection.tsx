
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/AboutSection.css';
import elanVieImg from '../assets/images/elan_vie.webp'

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="AboutSection" ref={ref} className={`about-section ${isVisible ? 'animate-fade-in' : ''}`}>
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src={elanVieImg} 
              alt="David dans la nature, incarnant la philosophie de reconnexion à soi"
              loading="lazy"
            />
            <div className="about-quote-overlay">
              <blockquote className="about-quote">
                "Le corps sait, il faut juste apprendre à l'écouter."
              </blockquote>
            </div>
          </div>
          
          <div className="about-text">
            <h2 className="about-title">
              Qui suis-je ?
            </h2>
            
            <div className="about-story">
              <p className="about-paragraph">
                Je suis <strong>David</strong>, et comme toi, j'ai longtemps vécu déconnecté de mon corps. 
                Fatigue chronique, tensions permanentes, cette sensation d'être étranger à moi-même...
              </p>
              
              <p className="about-paragraph">
                Ma transformation a commencé le jour où j'ai compris que mon corps n'était pas mon ennemi, 
                mais mon plus grand allié. Depuis, j'accompagne des centaines de personnes à retrouver 
                cette harmonie perdue.
              </p>
              
              <p className="about-paragraph">
                Mon approche ? <em>Douce, progressive et profondément humaine.</em> Parce que chaque corps 
                a sa sagesse, et que chaque personne mérite de se sentir vivante.
              </p>
            </div>
            
            <div className="about-credentials">
              <h3 className="credentials-title">Mon parcours :</h3>
              <ul className="credentials-list">
                <li>Naturopathe certifié depuis 8 ans</li>
                <li>Formé en approche somato-émotionnelle</li>
                <li>Plus de 500 personnes accompagnées</li>
                <li>Créateur de la méthode "L'Élan VIE"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
