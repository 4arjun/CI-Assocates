import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
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

  // Initialize AOS with mobile-optimized settings
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const isSlowDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
    
    // Initialize AOS with mobile-friendly configuration
    AOS.init({
      duration: isMobile ? (isSlowDevice ? 400 : 500) : 900,
      offset: isMobile ? 60 : 80, // Slightly smaller offset on mobile for earlier trigger
      easing: isMobile ? "ease-out" : "ease-out-cubic",
      once: true,
      delay: 0,
      disable: function() {
        // Only disable if user explicitly prefers reduced motion
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      },
      // Mobile-optimized settings
      throttleDelay: isMobile ? 50 : 99,
      debounceDelay: isMobile ? 25 : 50,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false // Keep mutation observer for proper functionality
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
