import React from "react";
import {
  Facebook,
  Phone,
  Mail,
  MapPin,
  Clock,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "../assets/aa.avif";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="site-footer-main">
      <div className="site-footer-content">
        <div className="container">
          {/* Footer Top */}
          <motion.div
            className="site-footer-top"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="site-footer-grid">
              {/* Company Info */}
              <motion.div
                className="site-footer-section company-info"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="site-footer-logo">
                  <img
                    src={logoImage}
                    alt="CA Associates Logo"
                    className="footer-logo-img"
                  />
                  <div className="footer-logo-text">
                    <h3>CA ASSOCIATES</h3>
                    <span>Construction Excellence</span>
                  </div>
                </div>
                <p className="site-footer-description">
                  Building dreams into reality with over 38 years of
                  construction excellence. From residential homes to
                  commercial complexes, we deliver quality that stands the
                  test of time.
                </p>
                <div className="site-footer-social">
                  <a href="#" className="site-footer-social-link">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="site-footer-social-link">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="site-footer-social-link">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="site-footer-social-link">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="site-footer-social-link">
                    <Youtube size={20} />
                  </a>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="site-footer-section contact-info"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="site-footer-title">Contact Information</h4>
                <div className="site-footer-contact">
                  <div className="site-footer-contact-item">
                    <MapPin size={18} className="contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Address</span>
                      <span className="contact-value">
                        123 Construction Ave, Building City, BC 12345
                      </span>
                    </div>
                  </div>
                  <div className="site-footer-contact-item">
                    <Phone size={18} className="contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Phone</span>
                      <span className="contact-value">+1 (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="site-footer-contact-item">
                    <Mail size={18} className="contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Email</span>
                      <span className="contact-value">
                        info@caassociates.com
                      </span>
                    </div>
                  </div>
                  <div className="site-footer-contact-item">
                    <Clock size={18} className="contact-icon" />
                    <div className="contact-details">
                      <span className="contact-label">Hours</span>
                      <span className="contact-value">
                        Mon - Fri: 8:00 AM - 6:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            className="site-footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="footer-bottom-content">
              <div className="footer-bottom-left">
                <p>&copy; 2024 CA Associates. All rights reserved.</p>
                <div className="footer-legal-links">
                  <a href="#privacy">Privacy Policy</a>
                  <a href="#terms">Terms of Service</a>
                  <a href="#cookies">Cookie Policy</a>
                </div>
              </div>
              <div className="footer-bottom-right">
                <div className="footer-certifications">
                  <span className="certification-badge">LEED Certified</span>
                  <span className="certification-badge">
                    Licensed & Bonded
                  </span>
                  <span className="certification-badge">ISO 9001</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="site-footer-back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </button>

      {/* Footer Background Pattern */}
      <div className="site-footer-pattern"></div>
    </footer>
  );
};

export default Footer; 