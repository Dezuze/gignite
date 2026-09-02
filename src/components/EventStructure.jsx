import React from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './EventStructure.css';

const EventStructure = () => {
  const { eventStructure, evaluationModel } = HACKATHON_CONFIG;
  const { stage1, stage2 } = eventStructure;

  return (
    <section id="format" className="section-container event-structure-section">
      <div className="section-header centered-header">
        <div className="section-eyebrow">
          <span>03 · Competition Format</span>
        </div>
        <h2 className="section-title">
          Two-Stage <span className="gradient-text">Event Architecture</span>
        </h2>
        <p className="section-subtitle">
          From statewide virtual proposal shortlisting to a high-octane 24-hour physical prototyping sprint at the grand finale.
        </p>
      </div>

      {/* Redesigned Stage 1 & Stage 2 Cards Grid */}
      <div className="stages-showcase-grid">
        {/* Stage 1 Card */}
        <div className="stage-hero-card stage-1-card glass-card">
          <div className="stage-card-glow-bg stage-1-glow" aria-hidden="true"></div>

          <div className="stage-card-header">
            <div className="stage-chip-row">
              <span className="stage-badge-pill badge-virtual">
                <span className="pulse-dot"></span>
                <span>Stage 01 · Virtual</span>
              </span>
              <span className="stage-cap-badge">100 Teams Cap</span>
            </div>

            <h3 className="stage-headline">{stage1.title}</h3>
            <p className="stage-summary">
              Open statewide to all engineering colleges across Kerala. Teams formulate problem definitions, system architectures, and proof-of-concept repositories.
            </p>
          </div>

          <div className="stage-metrics-row">
            <div className="stage-mini-stat">
              <span className="mini-stat-value">100</span>
              <span className="mini-stat-label">Max Teams</span>
            </div>
            <div className="stage-stat-divider"></div>
            <div className="stage-mini-stat">
              <span className="mini-stat-value">Online</span>
              <span className="mini-stat-label">Submission Mode</span>
            </div>
            <div className="stage-stat-divider"></div>
            <div className="stage-mini-stat highlight-green">
              <span className="mini-stat-value">Top 20</span>
              <span className="mini-stat-label">Advance to Finale</span>
            </div>
          </div>

          <div className="stage-deliverables-block">
            <h4 className="deliverables-heading">Stage 1 Deliverables Checklist</h4>
            <div className="deliverables-grid">
              {stage1.requirements.map((req, i) => (
                <div key={i} className="deliverable-item">
                  <div className="deliv-check-icon">
                    <Icon name="check-circle" size={15} color="#38bdf8" />
                  </div>
                  <span className="deliv-text">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stage 2 Card */}
        <div className="stage-hero-card stage-2-card glass-card">
          <div className="stage-card-glow-bg stage-2-glow" aria-hidden="true"></div>

          <div className="stage-card-header">
            <div className="stage-chip-row">
              <span className="stage-badge-pill badge-offline">
                <span className="pulse-dot"></span>
                <span>Stage 02 · Grand Finale</span>
              </span>
              <span className="badge-tentative">
                <span className="pulse-dot"></span>
                <span>Tentative Schedule</span>
              </span>
            </div>

            <h3 className="stage-headline">{stage2.title}</h3>
            <p className="stage-summary">
              The top 20 finalist teams gather for a 24-hour uninterrupted hardware &amp; software sprint with direct mentorship from Gadgeon and IEEE experts.
            </p>
          </div>

          <div className="stage-meta-highlights">
            <div className="meta-highlight-box">
              <div className="meta-box-icon">
                <Icon name="clock" size={18} color="var(--color-primary)" />
              </div>
              <div className="meta-box-text">
                <span className="meta-box-label">Target Period</span>
                <span className="meta-box-val">{stage2.period}</span>
              </div>
            </div>

            <div className="meta-highlight-box">
              <div className="meta-box-icon">
                <Icon name="building" size={18} color="var(--color-primary)" />
              </div>
              <div className="meta-box-text">
                <span className="meta-box-label">Venue</span>
                <span className="meta-box-val">{stage2.venue}</span>
              </div>
            </div>
          </div>

          <div className="stage-flow-block">
            <h4 className="deliverables-heading">24-Hour Sprint Sequence</h4>
            <div className="sprint-flow-grid">
              {stage2.flow.map((step, idx) => (
                <div key={idx} className="sprint-step-card">
                  <div className="sprint-step-num">0{idx + 1}</div>
                  <div className="sprint-step-info">
                    <span className="sprint-time">{step.time}</span>
                    <h5 className="sprint-label">{step.label}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4.6 Continuous Evaluation Model (Centerised layout) */}
      <div className="evaluation-model-container glass-card">
        <div className="evaluation-header centered-header">
          <div className="evaluation-badge">
            <span>SCORING CRITERIA</span>
          </div>
          <h3 className="evaluation-title">{evaluationModel.title}</h3>
          <p className="evaluation-subtitle">{evaluationModel.subtitle}</p>
        </div>

        <div className="evaluation-grid-11 centered-grid">
          {evaluationModel.criteria.map((item) => (
            <div key={item.id} className="eval-criterion-card glass-card">
              <div className="eval-icon-wrap" style={{ color: item.color }}>
                <Icon name={item.iconName} size={18} color="currentColor" />
              </div>
              <span className="eval-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventStructure;
