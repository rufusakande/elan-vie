
import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/TestimonialsSection.css';

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Hélène",
      role: "Maman de 2 enfants",
      content: "Grâce à L'Élan VIE, j'ai retrouvé une énergie que je croyais perdue à jamais. Je me réveille enfin reposée et j'ai cette joie de vivre qui rayonne sur toute ma famille.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Estelle",
      role: "Entrepreneure",
      content: "Ce programme m'a appris à écouter mon corps et à respecter ses besoins. Ma digestion s'est apaisée et j'ai une clarté mentale incroyable dans mon travail.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      hasVideo: true
    },
    {
      name: "Cécile",
      role: "Professeure",
      content: "David m'a accompagnée avec une bienveillance rare. J'ai appris à me reconnecter à mes sensations et à faire confiance à mon corps. Une transformation en profondeur.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Ambre",
      role: "Étudiante",
      content: "À 23 ans, je pensais que fatigue et stress étaient normaux. L'Élan VIE m'a montré qu'on pouvait vivre autrement, avec légèreté et vitalité.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="TestimonialsSection" ref={ref} className={`testimonials-section ${isVisible ? 'animate-fade-in' : ''}`}>
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Elles en parlent <span className="highlight">mieux que moi</span>
          </h2>
          <p className="testimonials-subtitle">
            Découvre les transformations authentiques de celles qui ont osé faire le pas
          </p>
        </div>
        
        <div className="testimonials-carousel">
          <button className="carousel-btn carousel-btn-prev" onClick={prevTestimonial}>
            <ChevronLeft />
          </button>
          
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">
              <Quote />
            </div>
            
            <div className="testimonial-content">
              <p className="testimonial-text">
                "{testimonials[currentTestimonial].content}"
              </p>
              
              <div className="testimonial-author">
                <div className="testimonial-image">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    loading="lazy"
                  />
                  {testimonials[currentTestimonial].hasVideo && (
                    <div className="video-indicator">
                      <span>▶</span>
                    </div>
                  )}
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonials[currentTestimonial].name}</h4>
                  <p className="testimonial-role">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className="carousel-btn carousel-btn-next" onClick={nextTestimonial}>
            <ChevronRight />
          </button>
        </div>
        
        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
