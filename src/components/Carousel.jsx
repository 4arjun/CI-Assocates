import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel data
  const slides = [
    {
      id: 1,
      title: "Professional Construction Services",
      subtitle: "Building Excellence Since 1985",
      description:
        "Transform your vision into reality with our expert construction team. From residential homes to commercial complexes, we deliver quality that stands the test of time.",
      image:
        "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttonText: "Our Services",
      buttonLink: "#services",
    },
    {
      id: 2,
      title: "Modern Architecture & Design",
      subtitle: "Innovation Meets Craftsmanship",
      description:
        "Experience cutting-edge architectural design combined with traditional craftsmanship. Our award-winning team creates spaces that inspire and endure.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttonText: "View Portfolio",
      buttonLink: "#projects",
    },
    {
      id: 3,
      title: "Sustainable Building Solutions",
      subtitle: "Green Construction for Tomorrow",
      description:
        "Leading the way in eco-friendly construction with sustainable materials and energy-efficient designs that protect our planet while saving you money.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttonText: "Learn More",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

        {/* Navigation Arrows */}
        <motion.button
          className="carousel-nav carousel-prev"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft size={24} />
        </motion.button>
        <motion.button
          className="carousel-nav carousel-next"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowRight size={24} />
        </motion.button>

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