import React from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './About.css';

const About = () => {
  const { about } = HACKATHON_CONFIG;
  if (!about) return null;

  const handleScrollTo = (e, targetSelector) => {
    e.preventDefault();
    const element = document.querySelector(targetSelector);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="section-container about-section">
      <div className="section-header">
        <h2 className="section-title">
          Behind <span className="gradient-text">the Hackathon</span>
        </h2>
        <p className="section-subtitle">
          {about.subtitle}
        </p>
      </div>

      <div className="about-grid">
        {about.pillars.map((pillar) => (
          <article 
            key={pillar.id} 
            className={`glass-card about-card about-card--${pillar.accent}`}
          >
            {/* Logo */}
            <div className="about-logo-box">
              <img
                src={pillar.logo}
                alt={pillar.logoAlt}
                className={`about-logo about-logo--${pillar.accent}`}
              />
            </div>

            {/* Name */}
            <h3 className="about-title">{pillar.name}</h3>

            {/* Concise Description */}
            <p className="about-desc">
              {pillar.description}
            </p>

            {/* Minimal Action Link */}
            <div className="about-card-action">
              {pillar.ctaType === 'external' ? (
                <a
                  href={pillar.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`about-link about-link--${pillar.accent}`}
                >
                  <span>{pillar.ctaText}</span>
                  <Icon name="arrow-right" size={14} color="currentColor" />
                </a>
              ) : (
                <a
                  href={pillar.ctaTarget}
                  onClick={(e) => handleScrollTo(e, pillar.ctaTarget)}
                  className={`about-link about-link--${pillar.accent}`}
                >
                  <span>{pillar.ctaText}</span>
                  <Icon name="arrow-right" size={14} color="currentColor" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
