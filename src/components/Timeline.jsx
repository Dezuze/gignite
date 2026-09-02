import React from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './Timeline.css';

const Timeline = () => {
  const { timeline } = HACKATHON_CONFIG;

  return (
    <section id="timeline" className="section-container timeline-section">
      <div className="section-header">
        <div className="section-eyebrow">
          <span>05 · Schedule &amp; Milestones</span>
        </div>
        <h2 className="section-title">
          Tentative <span className="gradient-text">Timeline</span>
        </h2>
        <p className="section-subtitle">
          Follow the progression from launch and virtual submissions to the 24-hour offline grand finale.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-track-line" aria-hidden="true"></div>

        <div className="timeline-phases-list">
          {timeline.map((item, index) => {
            const isGrandFinale = index === timeline.length - 1;

            return (
              <div
                key={item.phase}
                className={`timeline-phase-item ${isGrandFinale ? 'phase-finale' : ''}`}
              >
                {/* Node marker on the line */}
                <div className="timeline-node-marker">
                  <div className="node-outer-ring">
                    <div className="node-inner-dot"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="timeline-phase-card glass-card">
                  <div className="phase-card-top">
                    <span className="phase-index-badge">{item.phase}</span>
                    <span className="badge-tentative">
                      <span className="pulse-dot"></span>
                      <span>{item.dateLabel}</span>
                    </span>
                  </div>

                  <h3 className="phase-card-title">{item.title}</h3>
                  <p className="phase-card-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="timeline-disclaimer">
        <Icon name="clock" size={16} color="var(--color-subtle)" />
        <span>
          Dates are subject to committee scheduling and will be confirmed alongside official college outreach notifications.
        </span>
      </div>
    </section>
  );
};

export default Timeline;
