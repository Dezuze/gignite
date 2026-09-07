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
          <img src="/logo.png" alt="g-IGNITE 2026" className="navbar-logo-img" />
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

        {/* Right Side Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Company Logos on Right */}
          <div className="navbar-actions" style={{ display: 'flex' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/gadgeon-logo.png" alt="Gadgeon" className="nav-gadgeon-logo" />
              <img src="/ieee-logo.png" alt="IEEE" className="nav-ieee-logo" />
            </div>
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

        </div>
      </div>
    </header>
  );
};

export default Navbar;
