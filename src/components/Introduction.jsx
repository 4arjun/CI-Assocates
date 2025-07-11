import React from "react";
import { motion } from "framer-motion";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section id="introduction" className="section introduction">
      <div className="container">
        <div className="introduction-grid">
          <motion.div
            className="introduction-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Introduction
            </motion.p>
            
            <motion.h2
              className="section-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Building Excellence Across South India
            </motion.h2>
            
            <motion.div
              className="introduction-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="intro-main">
                <strong>CI Associates</strong> is a leading construction and infrastructure firm based in Kochi, 
                with active operations in Bangalore and across South India.
              </p>
              
              <p className="intro-description">
                Led by <strong>Mr. CI Salam</strong>, we bring over a decade of hands-on experience in delivering 
                industrial, commercial, and civil projects — from large-scale structural works to precision 
                interior finishes.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="introduction-highlights"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="highlights-partition"></div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21M5 21V7L12 2L19 7V21M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="highlight-title">Industrial Projects</h4>
              <p className="highlight-desc">Large-scale manufacturing facilities and industrial complexes</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21M6 8L10 12L14 8L18 12M6 21V8M18 21V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="highlight-title">Commercial Developments</h4>
              <p className="highlight-desc">Modern office buildings and retail spaces</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6L21 6M8 12L21 12M8 18L21 18M3 6L4 6M3 12L4 12M3 18L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="highlight-title">Civil Infrastructure</h4>
              <p className="highlight-desc">Roads, bridges, and public infrastructure projects</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L2 12H5V20H9V14H15V20H19V12H22L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="highlight-title">Interior Finishes</h4>
              <p className="highlight-desc">Precision craftsmanship and premium interior solutions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 