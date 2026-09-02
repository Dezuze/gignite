import React from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './Team.css';

const Team = () => {
  const { team } = HACKATHON_CONFIG;

  return (
    <section id="team" className="section-container team-section">
      <div className="section-header centered-header">
        <div className="section-eyebrow">
          <span>06 · Leadership &amp; Mentorship</span>
        </div>
        <h2 className="section-title">
          Organizing <span className="gradient-text">Points of Contact</span>
        </h2>
        <p className="section-subtitle">
          Dedicated committee leads, industry mentors, and student activity coordinators driving gIGNITE 2026.
        </p>
      </div>

      {/* Gadgeon Organizing Committee (6 contacts) */}
      <div className="team-group-block">
        <div className="team-group-header centered-group-header">
          <span className="group-pill sponsor-pill">Gadgeon Organizing Committee</span>
          <span className="group-tagline">15th Anniversary Hackathon Taskforce</span>
        </div>

        <div className="team-grid centered-grid">
          {team.gadgeonContacts.map((contact, index) => (
            <div key={index} className="team-card glass-card centered-team-card">
              <div className="team-avatar-wrap">
                <div className="team-avatar-placeholder">
                  <Icon name="users" size={20} color="var(--color-primary)" />
                </div>
              </div>

              <div className="team-info centered-text">
                <span className="team-category-badge">{contact.category}</span>
                <h3 className="team-name">{contact.name}</h3>
                <p className="team-role">{contact.role}</p>
                <div className="team-org-row centered-org-row">
                  <Icon name="building" size={14} color="var(--color-muted)" />
                  <span className="team-org-name">{contact.org}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IEEE SPS Kerala Chapter Coordinators */}
      <div className="team-group-block">
        <div className="team-group-header centered-group-header">
          <span className="group-pill ieee-pill">IEEE SPS Kerala Chapter Coordination</span>
          <span className="group-tagline">Co-Organizer Representation</span>
        </div>

        <div className="team-grid centered-grid">
          {team.ieeeContacts.map((contact, index) => (
            <div key={index} className="team-card glass-card team-card-pending centered-team-card">
              <div className="team-avatar-wrap">
                <div className="team-avatar-placeholder pending-avatar">
                  <Icon name="globe" size={18} color="var(--color-muted)" />
                </div>
              </div>

              <div className="team-info centered-text">
                <span className="badge-tentative">
                  <span className="pulse-dot"></span>
                  <span>Pending</span>
                </span>
                <h3 className="team-name">{contact.name}</h3>
                <p className="team-role">{contact.role}</p>
                <div className="team-org-row centered-org-row">
                  <Icon name="globe" size={14} color="var(--color-muted)" />
                  <span className="team-org-name">{contact.org}</span>
                </div>
                <div className="pending-notice">
                  <span>{contact.placeholderText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
