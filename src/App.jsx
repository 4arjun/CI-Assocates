import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowLeft, ArrowRight, Facebook, Linkedin, Phone, Mail } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './App.css';

const App = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Animation variants
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
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  return (
    <div className="App">
      {/* Header */}
      <motion.header 
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <div className="nav-container">
            <motion.div 
              className="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span>snazzybud</span>
            </motion.div>
            <motion.nav 
              className="nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a href="#about">About us</a>
              <a href="#services">Services</a>
              <a href="#stats">Company in numbers</a>
              <a href="#testimonials">Testimonials</a>
              <motion.a 
                href="#contact" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact us
              </motion.a>
            </motion.nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            >
              Professional construction services<br />for <span className="highlight">your needs</span>
            </motion.h1>
            <motion.a 
              href="#services" 
              className="btn btn-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See our services
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Construction worker"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p 
                className="section-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Who we are?
              </motion.p>
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                About our company
              </motion.h2>
              <motion.p 
                className="about-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                We are a dynamic construction company with passion and experience, 
                specializing in comprehensive construction services. Our team of 
                qualified specialists, including architects and engineers, ensures high 
                quality in the projects we undertake.
              </motion.p>
              <motion.p 
                className="about-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                We engage in both the construction of new facilities and the renovation 
                and modernization of existing buildings. Our mission is to create durable 
                and aesthetically pleasing solutions tailored to the individual needs and 
                expectations of our clients.
              </motion.p>
              <motion.a 
                href="#contact" 
                className="btn btn-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get to know us better
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <div className="stats-background">
          <div className="stats-overlay"></div>
        </div>
        <motion.div 
          className="stats-content"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="stat-item"
            variants={fadeInUp}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="stat-number">+21</span>
            <span className="stat-label">years on<br />the market</span>
          </motion.div>
          <motion.div 
            className="stat-item"
            variants={fadeInUp}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="stat-number">+33,107</span>
            <span className="stat-label">meters of installed<br />installation</span>
          </motion.div>
          <motion.div 
            className="stat-item"
            variants={fadeInUp}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="stat-number">+715</span>
            <span className="stat-label">completed<br />construction works</span>
          </motion.div>
        </motion.div>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
          
         
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery section">
        <div className="container">
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Gallery
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Realizations
          </motion.h2>
          
          <motion.div 
            className="gallery-tabs"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {['All', 'Houses', 'Blocks of flats', 'Garages', 'Hotels'].map((tab, index) => (
              <motion.button 
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="projects-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={index} 
                className="project-card"
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </motion.div>
            ))}
            <motion.div 
              className="project-nav"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight size={28} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container">
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our customers' opinions
          </motion.h2>
          
          <div className="testimonial-content">
            <motion.div 
              className="testimonial-text"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              key={currentTestimonial}
            >
              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                "{testimonials[currentTestimonial].text}"
              </motion.blockquote>
              <motion.div 
                className="testimonial-author"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <strong>{testimonials[currentTestimonial].author}</strong>
                <span>{testimonials[currentTestimonial].position}</span>
              </motion.div>
              <motion.div 
                className="testimonial-nav"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button 
                  className="nav-btn" 
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft size={24} />
                </motion.button>
                <motion.button 
                  className="nav-btn" 
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight size={24} />
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="testimonial-image"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Customer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <div className="cta-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Don't wait for your dreams!<br />Make them with us now!
            </motion.h2>
            <motion.a 
              href="#contact" 
              className="btn btn-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <motion.div 
            className="footer-content"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="footer-logo">
                <span>snazzystudio</span>
              </div>
              <p>A comprehensive construction service provider in southern Poland, dedicated to bringing your architectural dreams to life with precision and expertise.</p>
              <div className="footer-contact">
                <a href="mailto:contact@snazzystudio.com">contact@snazzystudio.com</a>
                <a href="tel:+48601918812">+48 601 918 812</a>
              </div>
            </motion.div>
            
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About us</a></li>
                <li><a href="#gallery">Realizations</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Services</h4>
              <ul>
                <li><a href="#">General contracting</a></li>
                <li><a href="#">Design & implementation</a></li>
                <li><a href="#">Renovation & modernization</a></li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4>Other</h4>
              <ul>
                <li><a href="#">Tenders</a></li>
                <li><a href="#">EU projects</a></li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>Social media</h4>
              <div className="social-links">
                <motion.a 
                  href="#" 
                  aria-label="Facebook"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook size={24} />
                </motion.a>
                <motion.a 
                  href="#" 
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p>© 2023 Snazzybud. All rights reserved</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;
