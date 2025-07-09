import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const Services = ({ isScrolling }) => {
  const hoverButton = {
    whileHover: isScrolling ? {} : { scale: 1.05, y: -2 },
    whileTap: { scale: 0.95 },
  };

  const hoverScale = {
    whileHover: isScrolling ? {} : { scale: 1.02 },
    transition: { duration: 0.3 },
  };

  return (
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
              construction, attic conversions, and many others. Trust our
              experience and professionalism to execute your construction
              projects with excellent quality and attention to detail.
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
  );
};

export default Services; 