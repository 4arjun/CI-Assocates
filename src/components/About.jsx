import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

// Enhanced counting animation hook with smoother transitions
function useCountUpInView(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          let startTime = null;
          function animateCount(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(start + (end - start) * easeOutCubic));
            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          }
          requestAnimationFrame(animateCount);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return [count, ref];
}

// Enhanced SVG Icons Component with glassmorphism styling
const IconSVG = ({ iconType, className = "" }) => {
  const icons = {
    excellence: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    innovation: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21.5l1.5-2.5L12 21.5l1.5-2.5L15 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    expertise: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7h-9a1 1 0 0 1-1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 12h2M16 16h2M6 8h2M6 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    check: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };
  return <div className={`about-icon ${className}`}>{icons[iconType]}</div>;
};

// Glassmorphism Feature Card Component
const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <div className="about-feature-card" data-aos="fade-up" data-aos-delay={delay}>
    <div className="about-feature-icon-wrapper">
      <IconSVG iconType={icon} className="about-feature-icon" />
    </div>
    <div className="about-feature-content">
      <h4 className="about-feature-title">{title}</h4>
      <p className="about-feature-description">{description}</p>
    </div>
  </div>
);

// Enhanced Stat Card with Glassmorphism
const StatCard = ({ number, label, delay = 0 }) => {
  const match = String(number).match(/\d+/);
  const end = match ? parseInt(match[0], 10) : 0;
  const suffix = String(number).replace(/\d+/, '');
  const [count, ref] = useCountUpInView(end, 2500);
  
  return (
    <div className="about-stat-card" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="about-stat-content">
        <div className="about-stat-number" ref={ref}>
          {count}{suffix}
        </div>
        <div className="about-stat-label">{label}</div>
      </div>
      <div className="about-stat-glow"></div>
    </div>
  );
};

// Capability Item Component
const CapabilityItem = ({ capability, delay = 0 }) => (
  <div className="about-capability-item" data-aos="fade-right" data-aos-delay={delay}>
    <IconSVG iconType="check" className="about-capability-check" />
    <span className="about-capability-text">{capability}</span>
  </div>
);



const AboutSection = () => {
  const features = [
    {
      icon: "excellence",
      title: "Excellence",
      description: "Delivering premium quality construction with uncompromising standards across every project phase."
    },
    {
      icon: "innovation",
      title: "Innovation",
      description: "Implementing cutting-edge construction technologies and sustainable building practices."
    },
    {
      icon: "expertise",
      title: "Expertise",
      description: "Over two decades of specialized experience in industrial, commercial, and civil construction."
    }
  ];

  const capabilities = [
    "Advanced structural steel works and fabrication",
    "Large-scale civil construction and infrastructure", 
    "Utility systems and smart infrastructure development",
    "Premium interior finishing and architectural solutions"
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "150+", label: "Projects Completed" },
    { number: "180+", label: "Million Sq. Ft. Delivered" },
    { number: "170+", label: "Million Sq. Ft. Underway" }
  ];

  return (
    <section className="about-section">
      {/* Background Elements */}
      <div className="about-background">
        <div className="about-gradient-orb about-gradient-orb-1"></div>
        <div className="about-gradient-orb about-gradient-orb-2"></div>
        <div className="about-grid-pattern"></div>
      </div>

      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero" data-aos="fade-up">
          <div className="about-hero-badge">
            <span>About CI Associates</span>
          </div>
          <h1 className="about-hero-title">
            Building Tomorrow's
            <span className="about-title-highlight"> Infrastructure</span>
          </h1>
          <p className="about-hero-subtitle">
            Leading South India's construction evolution with over 25 years of proven excellence, 
            innovative solutions, and unwavering commitment to quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="about-features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="about-content-grid">
          {/* Company Story */}
          <div className="about-story-card" data-aos="fade-right">
            <div className="about-story-content">
              <h3 className="about-story-title">Our Story</h3>
              <div className="about-story-text">
                <p>
                  Founded by <strong>Mr. CI Salam</strong>, CI Associates has grown from a 
                  regional construction firm to South India's trusted infrastructure partner. 
                  Based in Kochi with active operations in Bangalore, we've consistently 
                  delivered excellence across diverse sectors.
                </p>
                <p>
                  Our journey spans over two decades of transforming visions into reality, 
                  building lasting partnerships, and setting new standards in construction excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="about-capabilities-card" data-aos="fade-left">
            <div className="about-capabilities-content">
              <h3 className="about-capabilities-title">Core Capabilities</h3>
              <div className="about-capabilities-list">
                {capabilities.map((capability, index) => (
                  <CapabilityItem
                    key={index}
                    capability={capability}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="about-stats-section" data-aos="fade-up">
          <div className="about-stats-header">
            <h3 className="about-stats-title">Excellence in Numbers</h3>
            <p className="about-stats-subtitle">
              Our achievements reflect our commitment to delivering exceptional results
            </p>
          </div>
          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutIntro = () => {
  useEffect(() => {
    AOS.init({ 
      once: true, 
      duration: 1000, 
      offset: 100, 
      easing: "ease-out-cubic",
      disable: 'mobile'
    });
  }, []);

  return (
    <div id="about" className="about-wrapper">
      <AboutSection />
    </div>
  );
};

export default AboutIntro; 