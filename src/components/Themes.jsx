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

      <div className="themes-grid centered-grid">
        {themes.map((theme) => {
          const isOpenTrack = theme.isOpenTrack;

          return (
            <div
              key={theme.id}
              className={`theme-card glass-card centered-card ${isOpenTrack ? 'theme-card-open-track' : ''}`}
            >
              <div className="theme-card-top-content centered-content">
                <div className="theme-card-header centered-header-row">
                  <span className="theme-code">{theme.code}</span>
                  <span className="theme-tag">{theme.tag}</span>
                </div>

                <div className="theme-card-body centered-text">
                  <h3 className="theme-title">{theme.title}</h3>
                  <p className="theme-desc">{theme.description}</p>
                </div>

                <div className="theme-chips-list centered-chips">
                  {theme.chips.map((chip, idx) => (
                    <span key={idx} className="theme-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="theme-card-footer centered-footer">
                <button
                  className="theme-select-btn"
                  onClick={() => onSelectThemeForRegistration(theme.id)}
                >
                  <span>Build for this Track</span>
                  <Icon name="arrow-right" size={15} color="currentColor" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Themes;
