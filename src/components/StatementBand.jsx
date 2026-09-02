import React, { useState, useEffect } from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import './StatementBand.css';

const StatementBand = () => {
  const { statementBand } = HACKATHON_CONFIG;
  const [activeIdx, setActiveIdx] = useState(0);

  const words = [
    { text: "Ideas.", color: "#F27822", glow: "rgba(242, 120, 34, 0.3)" },
    { text: "Prototypes.", color: "#4A76C1", glow: "rgba(74, 118, 193, 0.3)" },
    { text: "Impact.", color: "#F27822", glow: "rgba(242, 120, 34, 0.3)" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="statement-band-section" aria-label="Statement Band">
      <div className="statement-inner-container">
        {/* Massive Kinetic Typography */}
        <div className="statement-massive-words">
          {words.map((item, idx) => {
            const isActive = activeIdx === idx;

            return (
              <React.Fragment key={item.text}>
                <span
                  className={`massive-kinetic-word ${isActive ? 'word-spotlight' : ''}`}
                  style={{
                    '--spotlight-color': item.color,
                    '--spotlight-glow': item.glow
                  }}
                  onClick={() => setActiveIdx(idx)}
                >
                  {item.text}
                </span>
                {idx < words.length - 1 && (
                  <span className="massive-divider-dot">·</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Framing Tagline */}
        <p className="statement-framing-copy">
          {statementBand.tagline}
        </p>
      </div>
    </section>
  );
};

export default StatementBand;
