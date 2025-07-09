import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.css";

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

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              21+ years on the market
            </motion.h2>
            <motion.div
              className="about-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                CA Associates is a leading construction company with over two
                decades of experience in delivering exceptional construction
                services.
              </p>
              <p>
                We specialize in residential, commercial, and industrial
                projects with a commitment to quality and customer
                satisfaction.
              </p>

              <br></br>
              <p>
                We specialize in residential, commercial, and industrial
                projects with a commitment to quality and customer
                satisfaction.
              </p>
              <p>
                CA Associates is a leading construction company with over two
                decades of experience in delivering exceptional construction
                services.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="stats-partition"></div>
            <StatItem
              number={38}
              label="Years of Excellence"
              suffix="+"
              startValue={25}
            />
            <StatItem
              number={300}
              label="Projects Completed"
              suffix="+"
              startValue={150}
            />
            <StatItem
              number={180}
              label="Mn. Sq. Ft. Delivered"
              suffix="+"
              startValue={100}
            />
            <StatItem
              number={170}
              label="Mn. Sq. Ft. Underway"
              suffix="+"
              startValue={80}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 