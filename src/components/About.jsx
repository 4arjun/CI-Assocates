import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

// Counting animation hook with in-view trigger
function useCountUpInView(end, duration = 1200) {
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
          let frame;
          function animateCount(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(start + (end - start) * progress));
            if (progress < 1) {
              frame = requestAnimationFrame(animateCount);
            }
          }
          frame = requestAnimationFrame(animateCount);
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return [count, ref];
}

// SVG Icons Component
const IconSVG = ({ iconType, className = "" }) => {
  const icons = {
    industrial: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21M5 21V7L12 2L19 7V21M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    commercial: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21M6 8L10 12L14 8L18 12M6 21V8M18 21V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    civil: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6L21 6M8 12L21 12M8 18L21 18M3 6L4 6M3 12L4 12M3 18L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    interior: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L2 12H5V20H9V14H15V20H19V12H22L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    check: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10.5L9 14.5L15 7.5" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )
  };
  return <span className={`aboutintro-icon ${className}`}>{icons[iconType]}</span>;
};

const HighlightItem = ({ icon, title, description, delay = 0 }) => (
  <div className="aboutintro-card" data-aos="zoom-in" data-aos-delay={delay}>
    <IconSVG iconType={icon} className="aboutintro-card-icon" />
    <h4 className="aboutintro-card-title">{title}</h4>
    <p className="aboutintro-card-desc">{description}</p>
  </div>
);

const StatItem = ({ number, label, delay = 0 }) => {
  // Extract numeric part for animation
  const match = String(number).match(/\d+/);
  const end = match ? parseInt(match[0], 10) : 0;
  const suffix = String(number).replace(/\d+/,'');
  const [count, ref] = useCountUpInView(end, 1200);
  return (
    <div className="aboutintro-card aboutintro-stat-card" data-aos="flip-left" data-aos-delay={delay}>
      <span className="aboutintro-stat-number" ref={ref}>{count}{suffix}</span>
      <span className="aboutintro-stat-label">{label}</span>
    </div>
  );
};

const CardGrid = ({ children, className = "" }) => (
  <div className={`aboutintro-cardgrid ${className}`}>{children}</div>
);

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`aboutintro-section aboutintro-sectionwrapper ${className}`}>{children}</section>
);

const IntroductionSection = () => {
  const highlights = [
    {
      icon: "industrial",
      title: "Industrial Projects",
      description: "Large-scale manufacturing facilities and industrial complexes"
    },
    {
      icon: "commercial",
      title: "Commercial Developments",
      description: "Modern office buildings and retail spaces"
    },
    {
      icon: "civil",
      title: "Civil Infrastructure",
      description: "Roads, bridges, and public infrastructure projects"
    },
    {
      icon: "interior",
      title: "Interior Finishes",
      description: "Precision craftsmanship and premium interior solutions"
    }
  ];

  return (
    <SectionWrapper className="aboutintro-intro">
      <div className="aboutintro-accentbar" />
      <div className="aboutintro-flexrow">
        <div className="aboutintro-col aboutintro-col-content aboutintro-bgaccent" data-aos="fade-right">
          <p className="aboutintro-subtitle">Introduction</p>
          <h2 className="aboutintro-title">Building Excellence<br/>Across South India</h2>
          <div className="aboutintro-text">
            <p className="aboutintro-main">
              <strong>CI Associates</strong> is a leading construction and infrastructure firm based in Kochi, 
              with active operations in Bangalore and across South India.
            </p>
            <p className="aboutintro-description">
              Led by <strong>Mr. CI Salam</strong>, we bring over a decade of hands-on experience in delivering 
              industrial, commercial, and civil projects — from large-scale structural works to precision 
              interior finishes.
            </p>
          </div>
        </div>
        <div className="aboutintro-divider" />
        <div className="aboutintro-col aboutintro-col-cards" data-aos="fade-left">
          <CardGrid className="aboutintro-cardgrid-floating">
            {highlights.map((highlight, index) => (
              <HighlightItem
                key={highlight.title}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
                delay={(index + 1) * 100}
              />
            ))}
          </CardGrid>
        </div>
      </div>
    </SectionWrapper>
  );
};

const AboutSection = () => {
  const capabilities = [
    "Structural steel works",
    "Large-scale civil construction", 
    "Utility and infrastructure development",
    "A wide range of interior and finishing services"
  ];
  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "150+", label: "Projects Completed" },
    { number: "180+", label: "Mn. Sq. Ft. Delivered" },
    { number: "170+", label: "Mn. Sq. Ft. Underway" }
  ];
  return (
    <SectionWrapper className="aboutintro-about">
      <div className="aboutintro-accentbar" />
      <div className="aboutintro-flexrow">
        <div className="aboutintro-col aboutintro-col-content aboutintro-bgaccent" data-aos="fade-right">
          <p className="aboutintro-subtitle">About</p>
          <h2 className="aboutintro-title">Proven Excellence in Construction</h2>
          <div className="aboutintro-about-text">
            <p>
              With over a decade of proven experience, CI Associates, led by Mr. CI Salam, delivers comprehensive construction solutions across the industrial, commercial, and civil sectors.
            </p>
            <p><strong>Our core capabilities include:</strong></p>
            <ul className="aboutintro-capabilities-list">
              {capabilities.map((cap, i) => (
                <li key={i}><IconSVG iconType="check" className="aboutintro-checkicon" />{cap}</li>
              ))}
            </ul>
           
          </div>
        </div>
        <div className="aboutintro-divider" />
        <div className="aboutintro-col aboutintro-col-cards" data-aos="fade-left">
          <CardGrid className="aboutintro-stats-grid">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                number={stat.number}
                label={stat.label}
                delay={(index + 1) * 100}
              />
            ))}
          </CardGrid>
        </div>
      </div>
    </SectionWrapper>
  );
};

const AboutIntro = () => {
  useEffect(() => {
    AOS.init({ 
      once: true, 
      duration: 900, 
      offset: 80, 
      easing: "ease-out-cubic" 
    });
  }, []);
  return (
    <div id="about">
      <IntroductionSection />
      <AboutSection />
    </div>
  );
};

export default AboutIntro; 