import React from "react";
import logoImage from "../assets/aa.avif";
import "./Header.css";

const Header = ({ 
  isScrolled, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  isScrolling,
  scrollY
}) => {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Calculate navbar position based on scroll
  const navbarOffset = Math.max(-80, -scrollY * 0.5); // Move up to -80px max, with 0.5x scroll sensitivity

  return (
    <header
      className={`header ${isScrolled ? "scrolled" : ""}`}
      style={{
        transform: `translateY(${navbarOffset}px)`,
        willChange: "transform"
      }}
    >
      {/* SVG Diagonal Partition */}
      <div className="nav-partition-svg">
        <svg
          viewBox="0 0 400 80"
          className="partition-svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="partitionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#E91E63" />
              <stop offset="30%" stopColor="#FF6B35" />
              <stop offset="60%" stopColor="#FFB347" />
              <stop offset="100%" stopColor="#FFCCCB" />
            </linearGradient>
          </defs>
          {/* First chevron segment */}
          <path
            d="M0,0 L240,0 L290,40 L240,80 L0,80 Z"
            fill="url(#partitionGradient)"
            opacity="0.9"
          />
        </svg>

        {/* Logo and Company Name inside partition */}
        <div className="partition-content">
          <div className="logo">
            <div className="logo-icon">
              <img src={logoImage} alt="CI Associates Logo" />
            </div>
            <div className="logo-text">
              <span className="company-name">CI ASSOCIATES</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="nav-container">
          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <a href="#about" onClick={closeMobileMenu}>
              About
            </a>
            <a href="#services" onClick={closeMobileMenu}>
              Services
            </a>
            <a href="#projects" onClick={closeMobileMenu}>
              Projects
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger">
              <span
                className={`line ${isMobileMenuOpen ? "open" : ""}`}
              ></span>
              <span
                className={`line ${isMobileMenuOpen ? "open" : ""}`}
              ></span>
              <span
                className={`line ${isMobileMenuOpen ? "open" : ""}`}
              ></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? "active" : ""}`}
      >
        <div className="mobile-nav-content">
          {/* Close Button */}
          <button
            className="mobile-nav-close"
            onClick={closeMobileMenu}
          >
            ×
          </button>

          <nav className="mobile-nav">
            <a href="#about" onClick={closeMobileMenu}>
              About
            </a>
            <a href="#services" onClick={closeMobileMenu}>
              Services
            </a>
            <a href="#projects" onClick={closeMobileMenu}>
              Projects
            </a>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={closeMobileMenu}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 