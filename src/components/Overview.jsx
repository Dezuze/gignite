import React, { useState } from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './Overview.css';

const Overview = () => {
  const { overview } = HACKATHON_CONFIG;
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);

  return (
    <section id="overview" className="section-container overview-section">
      <div className="section-header">
        <div className="section-eyebrow">
          <span>01 · Program Overview</span>
        </div>
        <h2 className="section-title">
          Engineering the <span className="gradient-text">Next Frontier</span> of AI
        </h2>
        <p className="section-subtitle">
          A high-impact hackathon designed to move beyond theoretical models into deployable hardware and software solutions.
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="overview-grid">
        {/* Left Column: Narrative Card */}
        <div className="glass-card overview-card-narrative">
          <div>
            <div className="narrative-tag">
              <span className="narrative-tag-dot"></span>
              <span>THE MISSION</span>
            </div>
            <h3 className="narrative-heading">
              Bridging Academic Brilliance &amp; Industry Engineering
            </h3>
            <p className="narrative-text">
              {overview.summary}
            </p>
            
            <div className="narrative-highlights">
              <div className="nh-item">
                <span className="nh-num">15+</span>
                <span className="nh-txt">Years of Gadgeon IoT &amp; AI Engineering Legacy</span>
              </div>
              <div className="nh-item">
                <span className="nh-num">100</span>
                <span className="nh-txt">Select Engineering Teams in Stage 1 Virtual Round</span>
              </div>
            </div>
          </div>

          <button
            className="btn btn-outline-orange read-brief-btn"
            onClick={() => setIsBriefModalOpen(true)}
          >
            <Icon name="file-text" size={16} color="currentColor" />
            <span>Read Full 9-Point Event Brief</span>
          </button>
        </div>

        {/* Right Column: Key Focus Objectives */}
        <div className="glass-card overview-card-objectives">
          <div>
            <h3 className="objectives-heading">Core Objectives &amp; Focus</h3>
            <ul className="objectives-list">
              {overview.keyPoints.map((point, index) => (
                <li key={index} className="objective-item">
                  <span className="obj-bullet-wrap">
                    <span className="obj-bullet-dot"></span>
                  </span>
                  <span className="obj-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="collab-note-box">
            <div className="collab-icon-wrap">
              <Icon name="users" size={20} color="#60a5fa" />
            </div>
            <p>
              Organized under the patronage of <strong>IEEE Signal Processing Society (SPS) Kerala Chapter</strong> and sponsored by <strong>Gadgeon Smart Systems</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Full Event Brief Modal (9 Objectives) */}
      {isBriefModalOpen && (
        <div className="brief-modal-backdrop" onClick={() => setIsBriefModalOpen(false)}>
          <div
            className="brief-modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="brief-modal-title"
          >
            <div className="brief-modal-header">
              <div>
                <span className="section-eyebrow">OFFICIAL EVENT CHARTER</span>
                <h3 id="brief-modal-title" className="brief-modal-title">
                  The 9 Strategic Objectives of gIGNITE
                </h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setIsBriefModalOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="brief-modal-body">
              <div className="objectives-9-grid">
                {overview.fullObjectives.map((item) => (
                  <div key={item.num} className="objective-9-card">
                    <span className="obj-9-num">{item.num}</span>
                    <div className="obj-9-info">
                      <h4 className="obj-9-title">{item.title}</h4>
                      <p className="obj-9-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="brief-modal-footer">
              <button
                className="btn btn-primary"
                onClick={() => setIsBriefModalOpen(false)}
              >
                Close Brief
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Overview;
