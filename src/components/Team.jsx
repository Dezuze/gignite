import React from 'react';
import { Icon } from './Icons';
import './Team.css';

const Team = () => {
  return (
    <section id="team" className="section-container team-section">
      <div className="section-header centered-header">
        <h2 className="section-title">
          Organizing <span className="gradient-text">Points of Contact</span>
        </h2>
        <p className="section-subtitle">
          Dedicated committee leads, industry mentors, and student activity coordinators driving gIGNITE 2026.
        </p>
      </div>

      <div className="tba-container glass-card">
        <div className="tba-icon-wrapper">
          <Icon name="users" size={28} color="var(--color-primary)" />
        </div>
        <div className="tba-badge">
          <span className="pulse-dot"></span>
          <span>To Be Announced</span>
        </div>
        <h3 className="tba-title">Organizing Committee &amp; Coordination</h3>
        <p className="tba-desc">
          The points of contact and coordination committee will be announced soon.
        </p>
      </div>
    </section>
  );
};

export default Team;

