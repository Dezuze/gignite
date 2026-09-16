import React, { useState } from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './Faq.css';

const Faq = ({ onOpenRegistration }) => {
  const { faqs } = HACKATHON_CONFIG;
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-container faq-section">
      <div className="faq-wrapper">
        {/* Left Column: Context */}
        <div className="faq-sidebar">
          <h2 className="faq-headline">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="faq-description">
            Everything you need to know about eligibility, team formation, intellectual property, and event logistics.
          </p>
        </div>

        {/* Right Column: Clean, Minimalist Accordion List */}
        <div className="faq-list">
          {faqs.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-row ${isOpen ? 'is-active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-row-trigger"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-row-question">{item.question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    <Icon name={isOpen ? 'minus' : 'plus'} size={16} color="currentColor" />
                  </span>
                </button>

                <div
                  className="faq-row-collapse"
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="faq-row-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
