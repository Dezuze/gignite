import React from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './Prizes.css';

const Prizes = () => {
  const { prizes } = HACKATHON_CONFIG;

  return (
    <section id="prizes" className="section-container prizes-section">
      <div className="section-header centered-header">
        <div className="section-eyebrow">
          <span>04 · Rewards &amp; Honors</span>
        </div>
        <h2 className="section-title">
          Prizes &amp; <span className="gradient-text">Recognition</span>
        </h2>
        <p className="section-subtitle">
          Substantial rewards, IEEE credentials, industry visibility, and direct incubation pathways for top-performing teams.
        </p>
      </div>

      {/* Main Prize Pool Banner */}
      <div className="prize-pool-hero-card glass-card">
        <div className="pool-badge-wrapper">
          <span className="badge-tentative">
            <span className="pulse-dot"></span>
            <span>{prizes.poolNote}</span>
          </span>
        </div>

        <div className="prize-hero-content">
          <div className="pool-label">TOTAL PROPOSED PRIZE POOL</div>
          <div className="pool-amount">{prizes.totalPool}</div>
          <p className="pool-subtext">
            Rewarding engineering rigor, novel artificial intelligence implementations, and high-impact deployment prototypes.
          </p>
        </div>

        <div className="pool-ambient-glow" aria-hidden="true"></div>
      </div>

      {/* 7 Recognition Chips Grid (Centerised) */}
      <div className="recognition-awards-section">
        <h3 className="awards-grid-title">7 Official Category Recognitions</h3>
        <div className="awards-chips-grid centered-grid">
          {prizes.chips.map((chip) => (
            <div key={chip.id} className="award-chip-card glass-card centered-card">
              <div className="award-icon-box">
                <Icon name={chip.iconName} size={22} color="var(--color-primary)" />
              </div>
              <div className="award-info centered-text">
                <span className="award-badge">{chip.badge}</span>
                <h4 className="award-name">{chip.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="prize-tbd-note">
          <Icon name="info" size={16} color="var(--color-muted)" />
          <span>{prizes.breakdownNote}</span>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
