import React, { useState } from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './Faq.css';

const Faq = ({ onOpenRegistration }) => {
  const { faqs } = HACKATHON_CONFIG;
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const filteredItems = activeCategory === 'All'
    ? faqs.items
    : faqs.items.filter((item) => item.category === activeCategory);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-container faq-section">
      <div className="section-header centered-header">
        <div className="section-eyebrow">
          <span>{faqs.eyebrow}</span>
        </div>
        <h2 className="section-title">
          {faqs.title} <span className="gradient-text">{faqs.titleGradient}</span>
        </h2>
        <p className="section-subtitle">
          {faqs.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="faq-tabs-row">
        {faqs.categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`faq-tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(0);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion Container */}
      <div className="faq-accordion-container">
        {filteredItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`faq-item glass-card ${isOpen ? 'open' : ''}`}
            >
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
              >
                <span className="faq-category-pill">{item.category}</span>
                <span className="faq-question-text">{item.question}</span>
                <div className={`faq-icon-toggle ${isOpen ? 'open' : ''}`}>
                  <Icon name="chevron-down" size={18} color="var(--color-primary)" />
                </div>
              </button>

              <div
                className={`faq-answer-collapse ${isOpen ? 'show' : ''}`}
                style={{ maxHeight: isOpen ? '400px' : '0' }}
              >
                <div className="faq-answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Help Callout */}
      <div className="faq-help-card glass-card">
        <div className="faq-help-info">
          <h4 className="faq-help-title">Still have questions?</h4>
          <p className="faq-help-sub">
            Our organizing team and student community coordinators are here to assist you.
          </p>
        </div>
        <button
          type="button"
          className="btn-primary faq-help-btn"
          onClick={onOpenRegistration}
        >
          <span>Register Your Team</span>
          <Icon name="arrow-right" size={16} color="#ffffff" />
        </button>
      </div>
    </section>
  );
};

export default Faq;
