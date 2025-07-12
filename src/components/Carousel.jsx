import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Carousel data
  const slides = [
    {
      id: 1,
      title: "Engineering Spaces, Elevating Standards",
      subtitle: "Delivering End-to-End Construction Excellence",
      description:
        "With over decades of experience, CI Associates provides comprehensive solutions across industrial, commercial, and civil sectors—combining innovation, precision, and quality.",
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
      buttonLink: "#contact",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Smooth scroll to section
  const handleButtonClick = (e, link) => {
    e.preventDefault();
    const targetSection = document.querySelector(link);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    AOS.init({ 
      once: true, 
      duration: 900, 
      offset: 80, 
      easing: "ease-out-cubic" 
    });
  }, []);

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div 
          className="carousel-wrapper"
          ref={carouselRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="carousel-overlay"></div>
              <div className="carousel-content">
                <span
                  className="carousel-subtitle"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.subtitle}
                </span>
                <h1
                  className="carousel-title"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {slide.title}
                </h1>
                <p
                  className="carousel-description"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="carousel-button"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={(e) => handleButtonClick(e, slide.buttonLink)}
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Desktop Only */}
        <button
          className="carousel-nav carousel-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          className="carousel-nav carousel-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ArrowRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="carousel-progress">
          <div
            className="carousel-progress-bar"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel; 