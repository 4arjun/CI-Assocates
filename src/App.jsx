import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
const useCountUp = (end, duration = 2000, delay = 0, startValue = 0) => {
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
  const [count, setIsInView] = useCountUp(number, 2000, 500, startValue);

  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileInView={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ once: false, amount: 0.3 }}
    >
      <span className="stat-number">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      />
      <Carousel />
      <AboutIntro />
      <Services isScrolling={isScrolling} />
      <Clients />
      <Projects />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
