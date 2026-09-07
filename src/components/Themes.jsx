import React from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './Themes.css';

const Themes = ({ onSelectThemeForRegistration }) => {
  const { themes } = HACKATHON_CONFIG;

  return (
    <section id="themes" className="section-container themes-section">
      <div className="section-header centered-header">
        <div className="section-eyebrow">
          <span>02 · Innovation Tracks</span>
        </div>
        <h2 className="section-title">
          5 Focused <span className="gradient-text">AI Themes</span>
        </h2>
        <p className="section-subtitle">
          Choose your battleground. From healthcare bio-signals to industrial edge AI and open innovation, tackle problems that matter.
        </p>
      </div>

      <div className="themes-grid centered-grid" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="theme-card glass-card centered-card" style={{ maxWidth: '600px', width: '100%' }}>
          <div className="theme-card-top-content centered-content">
            <div className="theme-card-body centered-text" style={{ padding: '40px 20px' }}>
              <h3 className="theme-title" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Themes To Be Announced</h3>
              <p className="theme-desc">We are finalizing the problem statements and tracks for this year's hackathon. Stay tuned for exciting domains spanning edge AI, signal processing, and more!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Themes;
