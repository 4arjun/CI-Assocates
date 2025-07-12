import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ 
      once: true, 
      duration: 900, 
      offset: 80, 
      easing: "ease-out-cubic" 
    });
  }, []);

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div
          className="projects-header"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Portfolio
          </span>
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Featured Construction Projects
          </h2>
          <p
            className="projects-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Discover our portfolio of exceptional construction projects that
            showcase our commitment to quality, innovation, and architectural
            excellence across residential and commercial developments.
          </p>
        </div>

        <div className="projects-grid">
          {/* Project Card 1 */}
          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="100"
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
            </div>
          </div>

          {/* Project Card 2 */}
          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="200"
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
            </div>
          </div>

          {/* Project Card 3 */}
          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="300"
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
            </div>
          </div>

          {/* Project Card 4 */}
          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="400"
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
            </div>
          </div>

          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="200"
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
            </div>
          </div>

          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="100"
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
            </div>
          </div>
        </div>

        <div
          className="projects-footer"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <a
            href="#projects"
            className="btn btn-primary"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 