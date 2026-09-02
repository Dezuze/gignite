import React, { useState, useEffect } from 'react';
import { HACKATHON_CONFIG } from '../data/hackathonConfig';
import { Icon } from './Icons';
import './Navbar.css';

const Navbar = ({ onOpenRegistration }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Themes', href: '#themes' },
    { name: 'Format', href: '#format' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Team', href: '#team' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : 'navbar-floating'}`}>
      <div className="navbar-container">
        {/* Logo and Partner Tag */}
        <a href="#hero" className="navbar-brand-group" onClick={(e) => handleNavClick(e, '#hero')}>
          <div className="navbar-logo-text">
            <span className="brand-g">g</span>IGNITE <span className="brand-year">2026</span>
          </div>
          <div className="navbar-collab-badge">
            <span>Gadgeon × IEEE SPS KC</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Persistent CTA & Status */}
        <div className="navbar-actions">
          <div className="nav-status-pill">
            <span className="pulse-dot"></span>
            <span>Stage 1 Live</span>
          </div>
          <button
            className="btn btn-primary nav-register-btn"
            onClick={onOpenRegistration}
          >
            <span>Register Team</span>
            <Icon name="arrow-right" size={14} color="#ffffff" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}>
        <div className="mobile-drawer-content">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mobile-nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mobile-drawer-actions">
            <button
              className="btn btn-primary w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegistration();
              }}
            >
              <span>Register Team</span>
              <Icon name="arrow-right" size={14} color="#ffffff" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
