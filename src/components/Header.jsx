import React from "react";
import { motion } from "framer-motion";
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

  const hoverButton = {
    whileHover: isScrolling ? {} : { scale: 1.05, y: -2 },
    whileTap: { scale: 0.95 },
  };

  // Calculate navbar position based on scroll
  const navbarOffset = Math.max(-80, -scrollY * 0.5); // Move up to -80px max, with 0.5x scroll sensitivity

  return (
    <motion.header
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
          <motion.div
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="logo-icon">
              <img src={logoImage} alt="CI Associates Logo" />
            </div>
            <div className="logo-text">
              <span className="company-name">CI ASSOCIATES</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="nav-container">
          {/* Desktop Navigation */}
          <motion.nav
            className="nav desktop-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a href="#about" onClick={closeMobileMenu}>
              About
            </a>
            <a href="#services" onClick={closeMobileMenu}>
              Services
            </a>
            <a href="#projects" onClick={closeMobileMenu}>
              Projects
            </a>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            {...hoverButton}
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
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <motion.div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? "active" : ""}`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? "0%" : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="mobile-nav-content">
          {/* Close Button */}
          <motion.button
            className="mobile-nav-close"
            onClick={closeMobileMenu}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              rotate: isMobileMenuOpen ? 0 : -90,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            ×
          </motion.button>

          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <a href="#about" onClick={closeMobileMenu}>
              About
            </a>
            <a href="#services" onClick={closeMobileMenu}>
              Services
            </a>
            <a href="#projects" onClick={closeMobileMenu}>
              Projects
            </a>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              {...hoverButton}
              onClick={closeMobileMenu}
            >
              Contact Us
            </motion.a>
          </motion.nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header; 