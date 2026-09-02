import React from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './ClosingCta.css';

const ClosingCta = ({ onOpenRegistration }) => {
  const { closingCta } = HACKATHON_CONFIG;

  const handleScrollToThemes = (e) => {
    e.preventDefault();
    const themesSection = document.querySelector('#themes');
    if (themesSection) {
      const offset = 80;
      const elementPosition = themesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="contact" className="section-container closing-cta-section">
      <div className="closing-cta-card glass-card">
        <div className="cta-glow-bg" aria-hidden="true"></div>

        <div className="cta-content-wrapper">
          <div className="cta-status-badge">
            <span className="pulse-dot"></span>
            <span>STAGE 1 REGISTRATIONS OPEN</span>
          </div>

          <h2 className="cta-kinetic-headline">
            {closingCta.headline}
          </h2>

          <p className="cta-subline">
            {closingCta.subline}
          </p>

          <div className="cta-actions-row">
            <button
              className="btn btn-primary cta-btn-large"
              onClick={onOpenRegistration}
            >
              <span>{closingCta.primaryBtn}</span>
              <Icon name="arrow-right" size={16} color="#ffffff" />
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleScrollToThemes}
            >
              <span>{closingCta.secondaryBtn}</span>
              <Icon name="compass" size={16} color="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCta;
