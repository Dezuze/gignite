import React from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './Hero.css';

const Hero = ({ onOpenRegistration }) => {
  const { event } = HACKATHON_CONFIG;

  const handleExploreThemes = (e) => {
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
    <section id="hero" className="hero-section">
      {/* Background Visuals without high cutting lines */}
      <div className="hero-bg-visuals" aria-hidden="true">
        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>
        


        {/* Technical Floating Accent Nodes */}
        <div className="hero-node hero-node-1">
          <Icon name="bolt" size={16} color="#F27822" />
          <span className="node-label">24H Build Sprint</span>
        </div>
        <div className="hero-node hero-node-2">
          <Icon name="cpu" size={16} color="#3b82f6" />
          <span className="node-label">Edge AI &amp; DSP</span>
        </div>
        <div className="hero-node hero-node-3">
          <Icon name="trophy" size={16} color="#10b981" />
          <span className="node-label">₹3,00,000 Prize Pool</span>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="hero-container">
        {/* Eyebrow */}
        <div className="hero-eyebrow-wrapper">
          <div className="hero-clean-eyebrow">
            <span className="eyebrow-text">{event.eyebrow}</span>
          </div>
        </div>

        {/* Kinetic Main Headline */}
        <div className="hero-title-wrapper">
          <h1 className="hero-main-title">
            <span className="title-brand">
              <span className="hero-brand-g">g</span>IGNITE
            </span>
            <span className="title-kinetic">{event.headline}</span>
          </h1>
        </div>

        {/* Subline */}
        <p className="hero-subline">
          A premier statewide hackathon initiative by{' '}
          <strong className="text-highlight-orange">{event.collaborators.lead}</strong>{' '}
          <span className="subline-milestone">({event.collaborators.leadNote})</span> in joint collaboration with{' '}
          <strong className="text-highlight-blue">{event.collaborators.coOrganizer}</strong>.
        </p>

        {/* Feature Pills */}
        <div className="hero-pills-row">
          {event.pills.map((pill) => (
            <div key={pill.id} className={`hero-feature-pill ${pill.live ? 'pill-live' : ''}`}>
              <Icon name={pill.iconName} size={15} color="currentColor" />
              <span className="pill-txt">{pill.text}</span>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="hero-cta-group">
          <button
            className="btn btn-primary hero-btn-main"
            onClick={onOpenRegistration}
          >
            <span>Register Team</span>
            <Icon name="arrow-right" size={16} color="#ffffff" />
          </button>
          <button
            className="btn btn-secondary hero-btn-sub"
            onClick={handleExploreThemes}
          >
            <span>Explore AI Themes</span>
            <Icon name="compass" size={16} color="currentColor" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
