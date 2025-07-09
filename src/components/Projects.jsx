import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Featured Construction Projects
          </motion.h2>
          <motion.p
            className="projects-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover our portfolio of exceptional construction projects that
            showcase our commitment to quality, innovation, and architectural
            excellence across residential and commercial developments.
          </motion.p>
        </motion.div>

        <div className="projects-grid">
          {/* Project Card 1 */}
          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Residential Complex"
              />
              <div className="project-category">Residential</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Luxury Residential Complex</h3>
              <p className="project-description">
                A modern 50-unit residential complex featuring sustainable
                design, energy-efficient systems, and premium amenities for
                contemporary living.
              </p>
              <div className="project-details">
                <span className="project-detail">150 Units</span>
                <span className="project-detail">2023</span>
                <span className="project-detail">LEED Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Office Tower"
              />
              <div className="project-category">Commercial</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Corporate Office Tower</h3>
              <p className="project-description">
                A 25-story modern office building with cutting-edge technology
                infrastructure and sustainable building practices in the heart
                of downtown.
              </p>
              <div className="project-details">
                <span className="project-detail">25 Floors</span>
                <span className="project-detail">2022</span>
                <span className="project-detail">Smart Building</span>
              </div>
            </div>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                alt="Sustainable Housing Development"
              />
              <div className="project-category">Sustainable</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">
                Eco-Friendly Housing Development
              </h3>
              <p className="project-description">
                An innovative green housing project featuring solar panels,
                rainwater harvesting, and sustainable materials for
                environmentally conscious living.
              </p>
              <div className="project-details">
                <span className="project-detail">75 Homes</span>
                <span className="project-detail">2023</span>
                <span className="project-detail">Net Zero</span>
              </div>
            </div>
          </motion.div>

          {/* Project Card 4 */}
          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80"
                alt="Industrial Warehouse Complex"
              />
              <div className="project-category">Industrial</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Modern Warehouse Complex</h3>
              <p className="project-description">
                State-of-the-art logistics and distribution center with
                automated systems, efficient loading docks, and advanced
                security features.
              </p>
              <div className="project-details">
                <span className="project-detail">500K Sq Ft</span>
                <span className="project-detail">2022</span>
                <span className="project-detail">Automated</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Office Tower"
              />
              <div className="project-category">Commercial</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Corporate Office Tower</h3>
              <p className="project-description">
                A 25-story modern office building with cutting-edge technology
                infrastructure and sustainable building practices in the heart
                of downtown.
              </p>
              <div className="project-details">
                <span className="project-detail">25 Floors</span>
                <span className="project-detail">2022</span>
                <span className="project-detail">Smart Building</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Residential Complex"
              />
              <div className="project-category">Residential</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Luxury Residential Complex</h3>
              <p className="project-description">
                A modern 50-unit residential complex featuring sustainable
                design, energy-efficient systems, and premium amenities for
                contemporary living.
              </p>
              <div className="project-details">
                <span className="project-detail">150 Units</span>
                <span className="project-detail">2023</span>
                <span className="project-detail">LEED Certified</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 