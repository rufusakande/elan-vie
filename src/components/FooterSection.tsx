
import React from 'react';
import { Heart, Mail, MapPin } from 'lucide-react';
import '../styles/FooterSection.css';

const FooterSection = () => {

  const year = new Date().getFullYear();

  return (
    <footer id="FooterSection" className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">L'Élan VIE</h3>
            <p className="footer-tagline">
              Remets du vivant dans ton corps... et dans ta vie.
            </p>
            <div className="footer-heart">
              <Heart className="heart-icon" />
            </div>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-section-title">Contact</h4>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span>david@elanvie.fr</span>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <span>France</span>
            </div>
          </div>
          
          <div className="footer-legal">
            <h4 className="footer-section-title">Informations</h4>
            <ul className="legal-list">
              <li><a href="#" className="legal-link">Mentions légales</a></li>
              <li><a href="#" className="legal-link">Politique de confidentialité</a></li>
              <li><a href="#" className="legal-link">CGV</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} L'Élan VIE - David. Tous droits réservés.
          </p>
          <p className="footer-love">
            Créé avec amour pour votre bien-être 🌱
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
