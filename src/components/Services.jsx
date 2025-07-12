import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

const Services = ({ isScrolling }) => {
  useEffect(() => {
    AOS.init({ 
      once: true, 
      duration: 900, 
      offset: 80, 
      easing: "ease-out-cubic" 
    });
  }, []);

  return (
    <section id="services" className="services section">
      <div className="container-service">
        <div
          className="services-header"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            What we offer?
          </p>
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Our Services
          </h2>
        </div>

        <div className="services-grid">
          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-delay="100"
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
          </div>

          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-delay="200"
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
          </div>

          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-delay="300"
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
          </div>

          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-delay="400"
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
          </div>

          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-delay="500"
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
          </div>

          <div
            className="service-card cta-card"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="cta-content">
              <h3 className="cta-title">Ready to Start Your Project?</h3>
              <p className="cta-description">
                Get a personalized quote for your construction needs
              </p>
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 