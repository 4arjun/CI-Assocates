import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Facebook, Linkedin, Phone, Mail } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './App.css';
import SplashScreen from './SplashScreen';
import logoImage from './assets/aa.avif';

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
        const currentCount = Math.floor(startValue + (end - startValue) * progress);
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
        {count.toLocaleString()}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
};

const App = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel data
  const slides = [
    {
      id: 1,
      title: "Professional Construction Services",
      subtitle: "Building Excellence Since 1985",
      description: "Transform your vision into reality with our expert construction team. From residential homes to commercial complexes, we deliver quality that stands the test of time.",
      image: "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttonText: "Our Services",
      buttonLink: "#services"
    },
    {
      id: 2,
      title: "Modern Architecture & Design",
      subtitle: "Innovation Meets Craftsmanship",
      description: "Experience cutting-edge architectural design combined with traditional craftsmanship. Our award-winning team creates spaces that inspire and endure.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttonText: "View Portfolio",
      buttonLink: "#projects"
    },
    {
      id: 3,
      title: "Sustainable Building Solutions",
      subtitle: "Green Construction for Tomorrow",
      description: "Leading the way in eco-friendly construction with sustainable materials and energy-efficient designs that protect our planet while saving you money.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      buttonText: "Learn More",
      buttonLink: "#about"
    }
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Disable hover effects during scrolling
      setIsScrolling(true);
      document.body.classList.add('scrolling');
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        document.body.classList.remove('scrolling');
      }, 150); // Re-enable hover effects 150ms after scrolling stops
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(window.scrollTimeout);
      document.body.classList.remove('scrolling');
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const services = [
    {
      title: "Construction of all kinds of houses",
      content: "We specialize in building various types of houses tailored to the individual needs and preferences of our clients. No matter what you dream of, our construction company will provide you with a solid structure and high-quality execution.",
      items: [
        "Construction of single-family houses",
        "Construction of multi-family houses", 
        "Construction of energy-saving houses",
        "Construction of wooden houses",
        "Construction of modular houses"
      ]
    },
    {
      title: "Renovation and modernization",
      content: "Transform your existing space with our comprehensive renovation services. We breathe new life into old structures while preserving their character and enhancing their functionality.",
      items: [
        "Complete home renovations",
        "Kitchen and bathroom remodeling",
        "Interior design and finishing",
        "Energy efficiency upgrades"
      ]
    },
    {
      title: "Attic adaptations", 
      content: "Convert your attic into functional living space. Our expert team maximizes every square foot to create beautiful, comfortable rooms.",
      items: [
        "Bedroom conversions",
        "Office spaces",
        "Storage solutions",
        "Insulation and ventilation"
      ]
    },
    {
      title: "Construction of garages",
      content: "Professional garage construction services tailored to your vehicle storage and workshop needs.",
      items: [
        "Single and multi-car garages",
        "Workshop spaces",
        "Storage solutions",
        "Electric vehicle charging stations"
      ]
    },
    {
      title: "Construction of public utility facilities",
      content: "Large-scale public construction projects that serve communities and enhance infrastructure.",
      items: [
        "Municipal buildings",
        "Educational facilities",
        "Healthcare centers",
        "Community centers"
      ]
    },
    {
      title: "Finishes and installations",
      content: "Complete finishing work and installations to bring your project to perfection.",
      items: [
        "Flooring installation",
        "Electrical systems",
        "Plumbing and heating",
        "Smart home technology"
      ]
    }
  ];

  const projects = [
    {
      category: "Houses",
      title: "Single-family house Krzycko",
      description: "To połączenie elegancji i funkcjonalności, stworzone z myślą o komforcie rodziny, oferujące przestronne wnętrza i piękny ogród.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Hotels",
      title: "WorkTravel Hotel reception",
      description: "With a focus on creating a welcoming and efficient space, the reception seamlessly blends modern aesthetics with a warm ambiance.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Garages",
      title: "Underground garage for a block of flats",
      description: "Innovative construction solutions and meticulous planning enabled the optimal utilization of the underground space.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
   
  ];

  const testimonials = [
    {
      text: "Snazzybud Construction Company is a reliable partner in the execution of construction projects. Their team consists of qualified professionals who are professional and precise in their work. Quality of execution and timeliness are their priorities, and communication with the client is excellent.",
      author: "Andrzej Kmiecic",
      position: "Happy new home resident"
    },
    {
      text: "Outstanding service from start to finish. The team delivered our dream home exactly as we envisioned it, with exceptional attention to detail and craftsmanship. Highly recommended!",
      author: "Sarah Johnson",
      position: "Homeowner"
    }
  ];

  const filteredProjects = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants with conditional hover effects
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleOnHover = {
    whileHover: isScrolling ? {} : { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  const hoverUp = {
    whileHover: isScrolling ? {} : { y: -10, scale: 1.05 },
    transition: { duration: 0.3 }
  };

  const hoverScale = {
    whileHover: isScrolling ? {} : { scale: 1.02 },
    transition: { duration: 0.3 }
  };

  const hoverImage = {
    whileHover: isScrolling ? {} : { scale: 1.1 },
    transition: { duration: 0.3 }
  };

  const hoverButton = {
    whileHover: isScrolling ? {} : { scale: 1.05, y: -2 },
    whileTap: { scale: 0.95 }
  };

  const hoverSocial = {
    whileHover: isScrolling ? {} : { scale: 1.1, y: -3 },
    whileTap: { scale: 0.9 }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="App">
      {/* Header */}
      <motion.header 
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* SVG Diagonal Partition */}
        <div className="nav-partition-svg">
          <svg 
            viewBox="0 0 400 80" 
            className="partition-svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="partitionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E91E63" />
                <stop offset="30%" stopColor="#FF6B35" />
                <stop offset="60%" stopColor="#FFB347" />
                <stop offset="100%" stopColor="#FFCCCB" />
              </linearGradient>
            </defs>
            {/* First chevron segment */}
            <path 
              d="M0,0 L240,0 L290,40 L240,80 L0,80 Z" 
              fill="url(#partitionGradient)"
              opacity="0.9"
            />            
          
          </svg>
          
          {/* Logo and Company Name inside partition */}
          <div className="partition-content">
            <motion.div 
              className="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="logo-icon">
                <img src={logoImage} alt="CA Associates Logo" />
              </div>
              <div className="logo-text">
                <span className="company-name">CA ASSOCIATES</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="container">
          <div className="nav-container">
            {/* Desktop Navigation */}
            <motion.nav 
              className="nav desktop-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a href="#about" onClick={closeMobileMenu}>About</a>
              <a href="#services" onClick={closeMobileMenu}>Services</a>
              <a href="#gallery" onClick={closeMobileMenu}>Projects</a>
             
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              {...hoverButton}
            >
              <span className="hamburger">
                <span className={`line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                <span className={`line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                <span className={`line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              </span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <motion.div 
          className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            x: isMobileMenuOpen ? '0%' : '100%'
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="mobile-nav-content">
            <motion.nav 
              className="mobile-nav"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <a href="#about" onClick={closeMobileMenu}>About</a>
              <a href="#services" onClick={closeMobileMenu}>Services</a>
              <a href="#gallery" onClick={closeMobileMenu}>Gallery</a>
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                {...hoverButton}
                onClick={closeMobileMenu}
              >
                Contact Us
              </motion.a>
            </motion.nav>
          </div>
        </motion.div>
      </motion.header>

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 1.1
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
                      y: index === currentSlide ? 0 : 30
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
                      y: index === currentSlide ? 0 : 50
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
                      y: index === currentSlide ? 0 : 30
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
                      y: index === currentSlide ? 0 : 20
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
                className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
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
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
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
                <p>CA Associates is a leading construction company with over two decades of experience in delivering exceptional construction services.</p>
                <p>We specialize in residential, commercial, and industrial projects with a commitment to quality and customer satisfaction.</p>

                <br></br>
                <p>We specialize in residential, commercial, and industrial projects with a commitment to quality and customer satisfaction.</p>
                <p>CA Associates is a leading construction company with over two decades of experience in delivering exceptional construction services.</p>

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

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container">
          <div className="services-grid">
            <motion.div 
              className="services-content"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p 
                className="section-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                What we offer?
              </motion.p>
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our construction services
              </motion.h2>
              <motion.p 
                className="services-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                We offer a wide range of construction services, including house 
                construction, attic conversions, and many others. Trust our experience 
                and professionalism to execute your construction projects with excellent 
                quality and attention to detail.
              </motion.p>
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                {...hoverButton}
              >
                Go to pricing
              </motion.a>
            </motion.div>
            <motion.div 
              className="services-image"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Construction worker"
                {...hoverScale}
              />
            </motion.div>
          </div>
          
         
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <div className="featured-projects-header">
            <span className="featured-projects-badge">Project</span>
            <h2 className="featured-projects-title">Featured Project</h2>
            <p className="featured-projects-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="featured-projects-grid">
            {/* Project Card 1 */}
            <div className="featured-project-card">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Branding & Design" className="featured-project-image" />
              <div className="featured-project-content">
                <h3 className="featured-project-title">Branding & Design</h3>
                <p className="featured-project-description">Logo & Visual Identity · Brand Guidelines & Toolkits · Packaging Design · Print & Consumer Collaterals · Creative Direction</p>
                <button className="featured-project-btn">View Project</button>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="featured-project-card">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="UI/UX Design" className="featured-project-image" />
              <div className="featured-project-content">
                <h3 className="featured-project-title">UI/UX Design</h3>
                <p className="featured-project-description">Logo & Visual Identity · Brand Guidelines & Toolkits · Packaging Design · Print & Consumer Collaterals · Creative Direction</p>
                <button className="featured-project-btn">View Project</button>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="featured-project-card">
              <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80" alt="Development" className="featured-project-image" />
              <div className="featured-project-content">
                <h3 className="featured-project-title">Development</h3>
                <p className="featured-project-description">Logo & Visual Identity · Brand Guidelines & Toolkits · Packaging Design · Print & Consumer Collaterals · Creative Direction</p>
                <button className="featured-project-btn">View Project</button>
              </div>
            </div>
            {/* Project Card 4 */}
            <div className="featured-project-card">
              <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80" alt="Marketing" className="featured-project-image" />
              <div className="featured-project-content">
                <h3 className="featured-project-title">Marketing</h3>
                <p className="featured-project-description">Logo & Visual Identity · Brand Guidelines & Toolkits · Packaging Design · Print & Consumer Collaterals · Creative Direction</p>
                <button className="featured-project-btn">View Project</button>
              </div>
            </div>
          </div>
          <div className="featured-projects-footer">
            <button className="featured-view-all-btn">View all</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
