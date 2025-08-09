import React, { useEffect, useState } from "react";
import logoImage from "../assets/logo.jpeg";
import "./Header.css";

const Header = ({
  isScrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isScrolling,
  scrollY,
}) => {
  const [animateIn, setAnimateIn] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
    const timer = setTimeout(() => {
      setHasAnimatedIn(true);
    }, 900); // match animation duration
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Calculate navbar position based on scroll
  const navbarOffset = Math.max(-80, -scrollY * 1.5); // Move up to -80px max, with 1.5x scroll sensitivity

  return (
    <header
      className={`header ${isScrolled ? "scrolled" : ""} ${
        !hasAnimatedIn
          ? animateIn
            ? "navbar-animate-in"
            : "navbar-hidden"
          : ""
      }`}
      style={
        hasAnimatedIn
          ? {
              transform: `translateY(${navbarOffset}px)`,
              willChange: "transform",
            }
          : undefined
      }
    >
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section">
          <div className="logo">
            <div className="logo-icon">
              <img src={logoImage} alt="CI Associates Logo" />
            </div>
            <span className="company-name">CI ASSOCIATES</span>
          </div>
        </div>

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
          <a href="#team" onClick={closeMobileMenu}>
            Team
          </a>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={closeMobileMenu}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span className="hamburger">
            <span className={`line ${isMobileMenuOpen ? "open" : ""}`}></span>
            <span className={`line ${isMobileMenuOpen ? "open" : ""}`}></span>
            <span className={`line ${isMobileMenuOpen ? "open" : ""}`}></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-nav-content">
          {/* Close Button */}
          <button className="mobile-nav-close" onClick={closeMobileMenu}>
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
            <a href="#team" onClick={closeMobileMenu}>
              Team
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
