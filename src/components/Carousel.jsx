import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel data
  const slides = [
    {
      id: 1,
      title: "Engineering Spaces, Elevating Standards",
      subtitle: "Delivering End-to-End Construction Excellence",
      description:
        "With over a decade of experience, CI Associates provides comprehensive solutions across industrial, commercial, and civil sectors—combining innovation, precision, and quality.",
      image:
        "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttonText: "ABOUT US",
      buttonLink: "#about",
    },
    {
      id: 2,
      title: "From Vision to Reality",
      subtitle: "Civil, Steel, and Interior Experts",
      description:
        "Whether it's massive RCC structures or precision interior finishes, our expertise spans the entire project lifecycle—from concept to completion.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttonText: "PROJECTS",
      buttonLink: "#projects",
    },
    {
      id: 3,
      title: "Trusted by Industry Leaders",
      subtitle: " A Legacy of Impactful Projects",
      description:
        "From Kochi Refineries and Technopark to Embassy Properties, our work with top-tier clients reflects our commitment to building trust and delivering excellence.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttonText: "CONTACT US",
      buttonLink: "#about",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 1.1,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="carousel-overlay"></div>
              <div className="carousel-content">
                <motion.span
                  className="carousel-subtitle"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    y: index === currentSlide ? 0 : 30,
                  }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slide.subtitle}
                </motion.span>
                <motion.h1
                  className="carousel-title"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    y: index === currentSlide ? 0 : 50,
                  }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="carousel-description"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    y: index === currentSlide ? 0 : 30,
                  }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {slide.description}
                </motion.p>
                <motion.a
                  href={slide.buttonLink}
                  className="carousel-button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    y: index === currentSlide ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slide.buttonText}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`carousel-indicator ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="carousel-progress">
          <motion.div
            className="carousel-progress-bar"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel; 