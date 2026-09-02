import React from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './Footer.css';

const Footer = ({ onOpenRegistration }) => {
  const { event } = HACKATHON_CONFIG;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              <span className="brand-g">g</span>IGNITE <span className="brand-year">2026</span>
            </div>
            <p className="footer-brand-desc">
              A flagship Kerala-wide AI &amp; Signal Processing Hackathon empowering student innovators to create production-grade hardware and software intelligence.
            </p>
            <div className="footer-status-tag">
              <span className="pulse-dot"></span>
              <span>{event.registrationStatus.badgeText}</span>
            </div>
          </div>

          {/* Organizer: Gadgeon */}
          <div className="footer-partner-col">
            <span className="partner-role-badge sponsor-badge">EVENT SPONSOR &amp; LEAD</span>
            <h4 className="partner-col-name">Gadgeon Smart Systems</h4>
            <p className="partner-col-desc">
              Premier Product Engineering and IoT Technology enterprise celebrating 15 years of engineering innovation.
            </p>
            <div className="partner-links-row">
              <a
                href="https://www.gadgeon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link-btn"
              >
                <span>Visit Gadgeon.com</span>
                <Icon name="arrow-right" size={14} color="currentColor" />
              </a>
              <a
                href="https://www.linkedin.com/company/gadgeon-systems-inc-/"
                target="_blank"
                rel="noopener noreferrer"
                className="partner-social-icon"
                title="Gadgeon LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Co-Organizer: IEEE SPS Kerala Chapter */}
          <div className="footer-partner-col">
            <span className="partner-role-badge ieee-badge">CO-ORGANIZER</span>
            <h4 className="partner-col-name">IEEE SPS Kerala Chapter</h4>
            <p className="partner-col-desc">
              IEEE Signal Processing Society Kerala Chapter advancing technical research, education, and student excellence.
            </p>
            <div className="partner-links-row">
              <a
                href="https://www.ieeespskc.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link-btn"
              >
                <span>Visit IEEE SPS KC</span>
                <Icon name="arrow-right" size={14} color="currentColor" />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-sps-kerala-chapter/"
                target="_blank"
                rel="noopener noreferrer"
                className="partner-social-icon"
                title="IEEE SPS Kerala Chapter LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2026 <strong>gIGNITE</strong>. Sponsored by <a href="https://www.gadgeon.com/" target="_blank" rel="noopener noreferrer">Gadgeon Smart Systems Pvt. Ltd.</a> In co-organization with <a href="https://www.ieeespskc.in/" target="_blank" rel="noopener noreferrer">IEEE SPS Kerala Chapter</a>.
          </p>

          <div className="footer-quick-links">
            <a href="#overview">Overview</a>
            <a href="#themes">Themes</a>
            <a href="#format">Format</a>
            <a href="#timeline">Timeline</a>
            <a href="#prizes">Prizes</a>
            <button className="footer-reg-link" onClick={onOpenRegistration}>
              Register Now →
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
