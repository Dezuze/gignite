import React from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './Guidelines.css';

const Guidelines = () => {
  const { guidelines } = HACKATHON_CONFIG;

  return (
    <section id="guidelines" className="section-container guidelines-section">
      <div className="section-header centered-header">
        <h2 className="section-title">
          {guidelines.title} <span className="gradient-text">{guidelines.titleGradient}</span>
        </h2>
        <p className="section-subtitle">
          {guidelines.subtitle}
        </p>
      </div>

      <div className="guidelines-grid">
        {guidelines.rules.map((rule) => (
          <div key={rule.id} className="guideline-card glass-card">
            <div className="guideline-top-row">
              <div className="guideline-icon-wrap">
                <Icon name={rule.icon} size={22} color="var(--color-primary)" />
              </div>
              <span className="guideline-badge">{rule.badge}</span>
            </div>
            <h3 className="guideline-card-title">{rule.title}</h3>
            <p className="guideline-card-desc">{rule.description}</p>
          </div>
        ))}
      </div>

      <div className="guidelines-notice-banner glass-card">
        <div className="notice-icon-box">
          <Icon name="check-circle" size={24} color="#34d399" />
        </div>
        <div className="notice-content">
          <h4 className="notice-title">Fair Play &amp; Ethical Guarantee</h4>
          <p className="notice-text">
            gIGNITE 2026 is built on merit, transparency, and innovation. All evaluations follow our published 11-factor scoring criteria with independent audits by industry and academic leaders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
