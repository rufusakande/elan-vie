
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/FaqSection.css';

const FaqSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Est-ce que je peux suivre le programme en travaillant ?",
      answer: "Absolument ! Le programme est conçu pour s'adapter à ton rythme de vie. Les exercices prennent 15-30 minutes par jour maximum, et tu peux les faire quand cela t'arrange. Les visios sont enregistrées si tu ne peux pas être présent(e)."
    },
    {
      question: "Y a-t-il un remboursement possible ?",
      answer: "Oui, tu bénéficies d'une garantie satisfait ou remboursé de 14 jours. Si le programme ne te convient pas, tu peux demander un remboursement intégral, sans justification."
    },
    {
      question: "Est-ce que c'est adapté aux hommes ?",
      answer: "Bien sûr ! Même si ma communication s'adresse souvent au féminin, le programme est totalement adapté aux hommes. Les principes de reconnexion au corps sont universels, et j'accompagne autant d'hommes que de femmes."
    },
    {
      question: "Faut-il avoir des connaissances particulières ?",
      answer: "Aucune connaissance préalable n'est nécessaire. Le programme part de zéro et t'accompagne progressivement. Tout est expliqué simplement, avec des outils pratiques et accessibles."
    },
    {
      question: "Que se passe-t-il après les 28 jours ?",
      answer: "Tu auras tous les outils pour continuer ta transformation en autonomie. Tu gardes l'accès à la plateforme Notion à vie, et je propose également un accompagnement de suivi pour celles et ceux qui le souhaitent."
    },
    {
      question: "Le programme est-il compatible avec un suivi médical ?",
      answer: "Le programme complète parfaitement un suivi médical mais ne le remplace pas. Il s'agit d'un accompagnement bien-être axé sur la reconnexion au corps et l'hygiène de vie. En cas de pathologie, garde toujours ton suivi médical."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="FaqSection" ref={ref} className={`faq-section ${isVisible ? 'animate-fade-in' : ''}`}>
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-title">
            Questions <span className="highlight">fréquentes</span>
          </h2>
          <p className="faq-subtitle">
            Toutes les réponses aux questions que tu te poses
          </p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openFaq === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-footer">
          <p className="faq-contact">
            Une autre question ? 
            <button className="faq-contact-btn">Écris-moi directement</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
