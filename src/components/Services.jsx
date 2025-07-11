import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const Services = ({ isScrolling }) => {
  const hoverButton = {
    whileHover: isScrolling ? {} : { scale: 1.05, y: -2 },
    whileTap: { scale: 0.95 },
  };

  const hoverScale = {
    whileHover: isScrolling ? {} : { scale: 1.02 },
    transition: { duration: 0.3 },
  };

  return (
    <section id="services" className="services section">
      <div className="container-service">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What we offer?
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
        </motion.div>

        <div className="services-grid">
          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            {...hoverScale}
          >
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21H21M5 21V7L12 2L19 7V21M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Industrial & Commercial Projects</h3>
            <ul className="service-list">
              <li>Multi-storied buildings</li>
              <li>Steel Structures – Fabrication & Erection</li>
              <li>Warehouse Buildings – Storage & Logistics</li>
              <li>Large-scale RCC Structures</li>
            </ul>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            {...hoverScale}
          >
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Construction & Civil Works</h3>
            <ul className="service-list">
              <li>Comprehensive structural construction</li>
              <li>Project management and execution</li>
              <li>Site development and preparation</li>
              <li>Quality control and supervision</li>
            </ul>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            {...hoverScale}
          >
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 7L12 13L3 7L12 1L21 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Interiors & Fit-outs</h3>
            <ul className="service-list">
              <li>False Ceiling & POP Work</li>
              <li>MCM & ACP Cladding</li>
              <li>UPVC Installations</li>
              <li>Complete Interior Works</li>
            </ul>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            {...hoverScale}
          >
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Painting & Coating</h3>
            <ul className="service-list">
              <li>Internal & External Painting</li>
              <li>Epoxy Coating & Protection</li>
              <li>Floor Coating Solutions</li>
              <li>Specialized Industrial Coatings</li>
            </ul>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            {...hoverScale}
          >
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Surface Finishing</h3>
            <ul className="service-list">
              <li>Tiles, Marble & Granite</li>
              <li>Waterproofing Solutions</li>
              <li>Texture & Decorative Finishes</li>
              <li>Self-Leveling Applications</li>
            </ul>
          </motion.div>

          <motion.div
            className="service-card cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            {...hoverScale}
          >
            <div className="cta-content">
              <h3 className="cta-title">Ready to Start Your Project?</h3>
              <p className="cta-description">
                Get a personalized quote for your construction needs
              </p>
              <motion.a
                href="#contact"
                className="btn btn-primary"
                {...hoverButton}
              >
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 