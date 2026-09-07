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


        </div>
      </div>

    </section>
  );
};

export default Overview;
