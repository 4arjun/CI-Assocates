import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import SEO from "./components/SEO";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import SplashScreen from "./SplashScreen";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import AboutIntro from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Footer from "./components/Footer";

// Custom hook for counting animation
const useCountUp = (end, duration = 2700, delay = 0, startValue = 0) => {
  const [count, setCount] = useState(startValue);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setCount(startValue);
      return;
    }

    const startTime = Date.now();

    const timer = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime - delay;

      if (elapsed >= duration) {
        setCount(end);
        clearInterval(timer);
        return;
      }

      if (elapsed > 0) {
        const progress = elapsed / duration;
        const currentCount = Math.floor(
          startValue + (end - startValue) * progress
        );
        setCount(currentCount);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [end, duration, delay, isInView, startValue]);

  return [count, setIsInView];
};

// Stat Item Component with counting animation
const StatItem = ({ number, label, suffix = "", startValue = 0 }) => {
  const [count, setIsInView] = useCountUp(number, 2700, 700, startValue);

  return (
    <div
      className="stat-item"
      onMouseEnter={() => setIsInView(true)}
      onMouseLeave={() => setIsInView(false)}
    >
      <span className="stat-number">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > 50);

      // Track scroll position continuously
      setScrollY(currentScrollY);

      setIsScrolling(true);
      document.body.classList.add("scrolling");

      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        document.body.classList.remove("scrolling");
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(window.scrollTimeout);
      document.body.classList.remove("scrolling");
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Initialize AOS with responsive device-optimized settings
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth <= 768;
    const isTablet = screenWidth > 768 && screenWidth <= 1024;
    const isDesktop = screenWidth > 1024;
    
    // Device capability detection
    const isSlowDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowBandwidth = navigator.connection && 
      (navigator.connection.effectiveType === 'slow-2g' || navigator.connection.effectiveType === '2g');
    
    // Dynamic configuration based on device and screen size
    const getOptimalDuration = () => {
      if (hasReducedMotion) return 200; // Very fast for accessibility
      if (isSlowDevice || isLowBandwidth) return 400; // Fast for slow devices
      if (isMobile) return 500; // Fast on mobile
      if (isTablet) return 700; // Medium on tablet
      return 900; // Full duration on desktop
    };
    
    const getOptimalOffset = () => {
      if (isMobile) return 50; // Early trigger on mobile
      if (isTablet) return 70; // Medium trigger on tablet
      return 100; // Standard trigger on desktop
    };
    
    const getOptimalEasing = () => {
      if (isMobile || isSlowDevice) return "ease-out"; // Simple easing for performance
      return "ease-out-cubic"; // Rich easing for powerful devices
    };
    
    // Initialize AOS with device-optimized configuration
    AOS.init({
      duration: getOptimalDuration(),
      offset: getOptimalOffset(),
      easing: getOptimalEasing(),
      once: true,
      delay: 0,
      disable: function() {
        // Only disable if user explicitly prefers reduced motion
        return hasReducedMotion;
      },
      // Performance settings based on device capability
      throttleDelay: isMobile ? 50 : (isTablet ? 75 : 99),
      debounceDelay: isMobile ? 25 : (isTablet ? 35 : 50),
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: isSlowDevice // Disable only on truly slow devices
    });

    // Handle window resize
    const handleResize = () => {
      clearTimeout(window.aosResizeTimeout);
      window.aosResizeTimeout = setTimeout(() => {
        AOS.refresh();
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    // Failsafe: ensure content is visible if AOS fails to initialize properly
    const mobileFailsafeTimer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-aos]:not(.aos-init)');
      if (elements.length > 0) {
        // Only apply fallback if AOS hasn't initialized at all
        elements.forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      }
    }, 500); // Give AOS more time to initialize

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(window.aosResizeTimeout);
      if (mobileFailsafeTimer) clearTimeout(mobileFailsafeTimer);
    };
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="App">
      <SEO />
      <PerformanceOptimizer />
      <Header
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isScrolling={isScrolling}
        scrollY={scrollY}
      />
      <Carousel />
      <AboutIntro />
      <Services isScrolling={isScrolling} />
      {/* <Clients /> */}
      <Projects />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
