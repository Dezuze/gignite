import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatementBand from './components/StatementBand';
import Overview from './components/Overview';
import Themes from './components/Themes';
import EventStructure from './components/EventStructure';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import Team from './components/Team';
import ClosingCta from './components/ClosingCta';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import './App.css';

function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [preselectedTheme, setPreselectedTheme] = useState(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
    });
    // Scroll Reveal Observer: adds 'in-view' class to elements as they scroll into viewport
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Target sections and cards
    const animatedElements = document.querySelectorAll(
      '.section-container, .statement-band-wrapper, .glass-card, .stage-hero-card, .theme-card, .award-chip-card, .team-card, .timeline-phase-item'
    );

    animatedElements.forEach((el) => {
      el.classList.add('reveal-element');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  const handleOpenRegistration = (themeId = null) => {
    if (themeId && typeof themeId === 'string') {
      setPreselectedTheme(themeId);
    } else {
      setPreselectedTheme('01');
    }
    setIsRegistrationOpen(true);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <div className="dark-app">
      {/* Background Circuit Grid Overlay */}
      <div className="circuit-grid-overlay" aria-hidden="true"></div>

      {/* Floating Navbar with smooth anchor links & Register CTA */}
      <Navbar onOpenRegistration={() => handleOpenRegistration('01')} />

      {/* Main Content Sections */}
      <main className="main-content">
        {/* 1. Hero (100vh) */}
        <Hero onOpenRegistration={() => handleOpenRegistration('01')} />

        {/* 2. Kinetic Statement Band (3D Flipper) */}
        <StatementBand />

        {/* 3. Program Overview */}
        <Overview />

        {/* 4. AI Themes (5 cards, centralized) */}
        <Themes onSelectThemeForRegistration={handleOpenRegistration} />

        {/* 5. Event Structure (Redesigned Stage 1 / Stage 2 & Continuous Evaluation) */}
        <EventStructure />

        {/* 7. Prizes & Recognition */}
        <Prizes />

        {/* 8. Tentative Timeline */}
        <Timeline />

        {/* 9. Organizing Points of Contact */}
        <Team />

        {/* 10. Closing CTA */}
        <ClosingCta onOpenRegistration={() => handleOpenRegistration('01')} />
      </main>

      {/* Footer */}
      <Footer onOpenRegistration={() => handleOpenRegistration('01')} />

      {/* Stage 1 Team Registration Modal Flow */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={handleCloseRegistration}
        preselectedThemeId={preselectedTheme}
      />
    </div>
  );
}

export default App;
